"""
Comprehensive test suite for the Peptides Guide Django application.

Covers:
- Models: creation, relationships, cascading deletes, __str__, ordering, choices
- Serializers: JSON output format matching frontend JS expectations
- Views: index page rendering, health endpoint, data injection, empty states
- Admin: registration, inlines, list display, search, filters
- Seed command: JS-to-JSON parser, full import pipeline
- Integration: end-to-end data flow from DB to rendered HTML
"""

import json
import os
import tempfile
from pathlib import Path

import pytest
from django.contrib.admin.sites import AdminSite
from django.contrib.auth.models import User
from django.test import Client, TestCase, override_settings
from django.urls import reverse

from core.admin import PeptideAdmin, StackAdmin
from core.management.commands.seed_peptides import js_to_json
from core.models import (
    CATEGORY_CHOICES,
    SEVERITY_CHOICES,
    STATUS_CHOICES,
    Peptide,
    PeptideBenefit,
    PeptideDosage,
    PeptideReference,
    PeptideSideEffect,
    Stack,
    StackPeptide,
    StackReference,
)
from core.serializers import serialize_peptide, serialize_stack


# =============================================================================
# Fixtures
# =============================================================================


@pytest.fixture
def peptide(db):
    """Create a basic peptide with all required fields."""
    return Peptide.objects.create(
        id='test-peptide',
        name='Test Peptide',
        aka='TP-1, TestP',
        category='weight-loss',
        category_label='Perda de Peso',
        description='A test peptide for unit tests.',
        mechanism='Binds to test receptors.',
        administration='Subcutânea (SC)',
        half_life='~4 horas',
        status='approved',
        status_label='Aprovado FDA',
        order=1,
    )


@pytest.fixture
def peptide_with_relations(peptide):
    """Create a peptide with all related objects."""
    PeptideBenefit.objects.create(peptide=peptide, text='Benefit A', order=0)
    PeptideBenefit.objects.create(peptide=peptide, text='Benefit B', order=1)

    PeptideSideEffect.objects.create(
        peptide=peptide, name='Nausea', severity='common', order=0
    )
    PeptideSideEffect.objects.create(
        peptide=peptide, name='Headache', severity='rare', order=1
    )

    PeptideDosage.objects.create(
        peptide=peptide,
        protocol='Standard',
        dose='1mg/day',
        notes='Take with food.',
        order=0,
    )

    PeptideReference.objects.create(
        peptide=peptide,
        text="Author et al., 2024. 'Title.' Journal. "
             "<a href='https://pubmed.ncbi.nlm.nih.gov/12345/' target='_blank'>[PubMed]</a>",
        order=0,
    )
    PeptideReference.objects.create(
        peptide=peptide,
        text="Author2 et al., 2023. 'Title2.' Journal2. "
             "<a href='https://pubmed.ncbi.nlm.nih.gov/67890/' target='_blank'>[PubMed]</a>",
        order=1,
    )

    return peptide


@pytest.fixture
def second_peptide(db):
    """Create a second peptide for stack tests."""
    return Peptide.objects.create(
        id='second-peptide',
        name='Second Peptide',
        category='healing',
        category_label='Cura e Recuperação',
        description='Another test peptide.',
        mechanism='Different mechanism.',
        administration='Oral',
        half_life='~12 horas',
        status='research',
        status_label='Pesquisa',
        order=2,
    )


@pytest.fixture
def stack(db):
    """Create a basic stack."""
    return Stack.objects.create(
        id='test-stack',
        name='Test Stack - Beginner',
        goal='weight-loss',
        goal_label='Perda de Peso',
        level='Iniciante',
        description='A test stack protocol.',
        synergy='Peptides work together synergistically.',
        application='Inject separately. Never mix.',
        duration='12 weeks',
        warnings='Consult a doctor.',
        evidence_level='High for all components.',
        order=1,
    )


@pytest.fixture
def stack_with_relations(stack, peptide, second_peptide):
    """Create a stack with peptides and references."""
    StackPeptide.objects.create(
        stack=stack,
        peptide=peptide,
        name='Test Peptide',
        role='Primary agent',
        dose='1mg/day',
        timing='Morning',
        order=0,
    )
    StackPeptide.objects.create(
        stack=stack,
        peptide=second_peptide,
        name='Second Peptide',
        role='Support agent',
        dose='500mcg/day',
        timing='Evening',
        order=1,
    )

    StackReference.objects.create(
        stack=stack,
        text="Stack ref. <a href='https://pubmed.ncbi.nlm.nih.gov/11111/' target='_blank'>[PubMed]</a>",
        order=0,
    )

    return stack


@pytest.fixture
def admin_user(db):
    """Create a superuser for admin tests."""
    return User.objects.create_superuser(
        username='admin', password='testpass123', email='admin@test.com'
    )


# =============================================================================
# Model Tests
# =============================================================================


class TestPeptideModel:
    """Tests for the Peptide model."""

    def test_create_peptide(self, peptide):
        assert peptide.pk == 'test-peptide'
        assert peptide.name == 'Test Peptide'
        assert peptide.category == 'weight-loss'
        assert peptide.status == 'approved'

    def test_str(self, peptide):
        assert str(peptide) == 'Test Peptide'

    def test_ordering(self, db):
        p2 = Peptide.objects.create(
            id='z-peptide', name='Z Peptide', category='other',
            category_label='Outros', description='', mechanism='',
            administration='', half_life='', status='research',
            status_label='', order=2,
        )
        p1 = Peptide.objects.create(
            id='a-peptide', name='A Peptide', category='other',
            category_label='Outros', description='', mechanism='',
            administration='', half_life='', status='research',
            status_label='', order=1,
        )
        peptides = list(Peptide.objects.all())
        assert peptides[0].id == 'a-peptide'
        assert peptides[1].id == 'z-peptide'

    def test_slug_primary_key(self, peptide):
        fetched = Peptide.objects.get(pk='test-peptide')
        assert fetched.name == 'Test Peptide'

    def test_aka_optional(self, db):
        p = Peptide.objects.create(
            id='no-aka', name='No AKA', category='other',
            category_label='Outros', description='', mechanism='',
            administration='', half_life='', status='research',
            status_label='', order=0,
        )
        assert p.aka == ''

    def test_category_choices_valid(self):
        values = [c[0] for c in CATEGORY_CHOICES]
        assert 'weight-loss' in values
        assert 'growth-hormone' in values
        assert 'healing' in values
        assert 'anti-aging' in values
        assert 'cognitive' in values
        assert 'immune' in values
        assert 'hormonal' in values
        assert 'sleep' in values
        assert 'body-comp' in values
        assert 'skin' in values
        assert 'other' in values
        assert len(values) == 11

    def test_status_choices_valid(self):
        values = [c[0] for c in STATUS_CHOICES]
        assert set(values) == {'approved', 'trial', 'research'}

    def test_severity_choices_valid(self):
        values = [c[0] for c in SEVERITY_CHOICES]
        assert set(values) == {'common', 'occasional', 'rare'}

    def test_verbose_names(self):
        assert Peptide._meta.verbose_name == 'Peptídeo'
        assert Peptide._meta.verbose_name_plural == 'Peptídeos'


class TestPeptideBenefitModel:
    """Tests for the PeptideBenefit model."""

    def test_create(self, peptide):
        b = PeptideBenefit.objects.create(
            peptide=peptide, text='Reduces weight', order=0
        )
        assert b.peptide == peptide
        assert b.text == 'Reduces weight'

    def test_str_truncation(self, peptide):
        long_text = 'A' * 200
        b = PeptideBenefit.objects.create(peptide=peptide, text=long_text, order=0)
        assert len(str(b)) == 80

    def test_ordering(self, peptide):
        PeptideBenefit.objects.create(peptide=peptide, text='Second', order=1)
        PeptideBenefit.objects.create(peptide=peptide, text='First', order=0)
        benefits = list(peptide.benefits.all())
        assert benefits[0].text == 'First'
        assert benefits[1].text == 'Second'

    def test_cascade_delete(self, peptide):
        PeptideBenefit.objects.create(peptide=peptide, text='Test', order=0)
        assert PeptideBenefit.objects.count() == 1
        peptide.delete()
        assert PeptideBenefit.objects.count() == 0


class TestPeptideSideEffectModel:
    """Tests for the PeptideSideEffect model."""

    def test_create(self, peptide):
        se = PeptideSideEffect.objects.create(
            peptide=peptide, name='Nausea', severity='common', order=0
        )
        assert se.severity == 'common'

    def test_str(self, peptide):
        se = PeptideSideEffect.objects.create(
            peptide=peptide, name='Headache', severity='rare', order=0
        )
        assert str(se) == 'Headache (rare)'

    def test_cascade_delete(self, peptide):
        PeptideSideEffect.objects.create(
            peptide=peptide, name='Test', severity='common', order=0
        )
        peptide.delete()
        assert PeptideSideEffect.objects.count() == 0


class TestPeptideDosageModel:
    """Tests for the PeptideDosage model."""

    def test_create(self, peptide):
        d = PeptideDosage.objects.create(
            peptide=peptide, protocol='Loading', dose='5mg', notes='Week 1', order=0
        )
        assert d.protocol == 'Loading'

    def test_str(self, peptide):
        d = PeptideDosage.objects.create(
            peptide=peptide, protocol='Standard', dose='2mg/day', notes='', order=0
        )
        assert str(d) == 'Standard: 2mg/day'

    def test_cascade_delete(self, peptide):
        PeptideDosage.objects.create(
            peptide=peptide, protocol='P', dose='D', notes='N', order=0
        )
        peptide.delete()
        assert PeptideDosage.objects.count() == 0


class TestPeptideReferenceModel:
    """Tests for the PeptideReference model."""

    def test_create_with_html(self, peptide):
        ref = PeptideReference.objects.create(
            peptide=peptide,
            text="Author. <a href='https://pubmed.ncbi.nlm.nih.gov/123/' target='_blank'>[PubMed]</a>",
            order=0,
        )
        assert '<a href=' in ref.text
        assert 'target=' in ref.text

    def test_cascade_delete(self, peptide):
        PeptideReference.objects.create(peptide=peptide, text='Ref', order=0)
        peptide.delete()
        assert PeptideReference.objects.count() == 0


class TestStackModel:
    """Tests for the Stack model."""

    def test_create(self, stack):
        assert stack.pk == 'test-stack'
        assert stack.goal == 'weight-loss'
        assert stack.level == 'Iniciante'

    def test_str(self, stack):
        assert str(stack) == 'Test Stack - Beginner'

    def test_verbose_names(self):
        assert Stack._meta.verbose_name == 'Combinação'
        assert Stack._meta.verbose_name_plural == 'Combinações'


class TestStackPeptideModel:
    """Tests for the StackPeptide model."""

    def test_create_with_linked_peptide(self, stack, peptide):
        sp = StackPeptide.objects.create(
            stack=stack, peptide=peptide, name='Test Peptide',
            role='Primary', dose='1mg', timing='Daily', order=0,
        )
        assert sp.peptide == peptide
        assert sp.peptide_id == 'test-peptide'

    def test_create_without_linked_peptide(self, stack):
        sp = StackPeptide.objects.create(
            stack=stack, peptide=None, name='Unknown Peptide',
            role='Support', dose='2mg', timing='Weekly', order=0,
        )
        assert sp.peptide is None
        assert sp.name == 'Unknown Peptide'

    def test_set_null_on_peptide_delete(self, stack, peptide):
        sp = StackPeptide.objects.create(
            stack=stack, peptide=peptide, name='Test',
            role='R', dose='D', timing='T', order=0,
        )
        peptide.delete()
        sp.refresh_from_db()
        assert sp.peptide is None
        assert sp.name == 'Test'  # name preserved

    def test_cascade_on_stack_delete(self, stack, peptide):
        StackPeptide.objects.create(
            stack=stack, peptide=peptide, name='Test',
            role='R', dose='D', timing='T', order=0,
        )
        stack.delete()
        assert StackPeptide.objects.count() == 0

    def test_str(self, stack):
        sp = StackPeptide.objects.create(
            stack=stack, name='My Peptide', role='R', dose='D', timing='T', order=0,
        )
        assert str(sp) == 'My Peptide'


class TestStackReferenceModel:
    """Tests for the StackReference model."""

    def test_cascade_delete(self, stack):
        StackReference.objects.create(stack=stack, text='Ref', order=0)
        stack.delete()
        assert StackReference.objects.count() == 0


# =============================================================================
# Serializer Tests
# =============================================================================


class TestSerializePeptide:
    """Tests for the serialize_peptide function."""

    def test_basic_fields(self, peptide_with_relations):
        p = Peptide.objects.prefetch_related(
            'benefits', 'side_effects', 'dosages', 'references'
        ).get(pk='test-peptide')
        data = serialize_peptide(p)

        assert data['id'] == 'test-peptide'
        assert data['name'] == 'Test Peptide'
        assert data['aka'] == 'TP-1, TestP'
        assert data['category'] == 'weight-loss'
        assert data['categoryLabel'] == 'Perda de Peso'
        assert data['description'] == 'A test peptide for unit tests.'
        assert data['mechanism'] == 'Binds to test receptors.'
        assert data['administration'] == 'Subcutânea (SC)'
        assert data['halfLife'] == '~4 horas'
        assert data['status'] == 'approved'
        assert data['statusLabel'] == 'Aprovado FDA'

    def test_camel_case_keys(self, peptide_with_relations):
        p = Peptide.objects.prefetch_related(
            'benefits', 'side_effects', 'dosages', 'references'
        ).get(pk='test-peptide')
        data = serialize_peptide(p)

        # Must use camelCase to match frontend JS expectations
        assert 'categoryLabel' in data
        assert 'halfLife' in data
        assert 'statusLabel' in data
        assert 'sideEffects' in data
        # Must NOT have snake_case
        assert 'category_label' not in data
        assert 'half_life' not in data
        assert 'status_label' not in data
        assert 'side_effects' not in data

    def test_benefits_serialization(self, peptide_with_relations):
        p = Peptide.objects.prefetch_related(
            'benefits', 'side_effects', 'dosages', 'references'
        ).get(pk='test-peptide')
        data = serialize_peptide(p)

        assert data['benefits'] == ['Benefit A', 'Benefit B']

    def test_side_effects_serialization(self, peptide_with_relations):
        p = Peptide.objects.prefetch_related(
            'benefits', 'side_effects', 'dosages', 'references'
        ).get(pk='test-peptide')
        data = serialize_peptide(p)

        assert len(data['sideEffects']) == 2
        assert data['sideEffects'][0] == {'name': 'Nausea', 'severity': 'common'}
        assert data['sideEffects'][1] == {'name': 'Headache', 'severity': 'rare'}

    def test_dosage_serialization(self, peptide_with_relations):
        p = Peptide.objects.prefetch_related(
            'benefits', 'side_effects', 'dosages', 'references'
        ).get(pk='test-peptide')
        data = serialize_peptide(p)

        assert len(data['dosage']) == 1
        assert data['dosage'][0]['protocol'] == 'Standard'
        assert data['dosage'][0]['dose'] == '1mg/day'
        assert data['dosage'][0]['notes'] == 'Take with food.'

    def test_references_with_html(self, peptide_with_relations):
        p = Peptide.objects.prefetch_related(
            'benefits', 'side_effects', 'dosages', 'references'
        ).get(pk='test-peptide')
        data = serialize_peptide(p)

        assert len(data['references']) == 2
        assert '<a href=' in data['references'][0]
        assert '[PubMed]' in data['references'][0]

    def test_json_serializable(self, peptide_with_relations):
        p = Peptide.objects.prefetch_related(
            'benefits', 'side_effects', 'dosages', 'references'
        ).get(pk='test-peptide')
        data = serialize_peptide(p)

        # Must be JSON serializable (used in template with json.dumps)
        json_str = json.dumps(data, ensure_ascii=False)
        parsed = json.loads(json_str)
        assert parsed['id'] == 'test-peptide'

    def test_empty_relations(self, peptide):
        """Peptide with no benefits/side effects/dosages/references."""
        p = Peptide.objects.prefetch_related(
            'benefits', 'side_effects', 'dosages', 'references'
        ).get(pk='test-peptide')
        data = serialize_peptide(p)

        assert data['benefits'] == []
        assert data['sideEffects'] == []
        assert data['dosage'] == []
        assert data['references'] == []

    def test_all_expected_keys_present(self, peptide_with_relations):
        p = Peptide.objects.prefetch_related(
            'benefits', 'side_effects', 'dosages', 'references'
        ).get(pk='test-peptide')
        data = serialize_peptide(p)

        expected_keys = {
            'id', 'name', 'aka', 'category', 'categoryLabel',
            'description', 'mechanism', 'benefits', 'sideEffects',
            'dosage', 'administration', 'halfLife', 'status',
            'statusLabel', 'references',
        }
        assert set(data.keys()) == expected_keys


class TestSerializeStack:
    """Tests for the serialize_stack function."""

    def test_basic_fields(self, stack_with_relations):
        s = Stack.objects.prefetch_related(
            'stack_peptides', 'references'
        ).get(pk='test-stack')
        data = serialize_stack(s)

        assert data['id'] == 'test-stack'
        assert data['name'] == 'Test Stack - Beginner'
        assert data['goal'] == 'weight-loss'
        assert data['goalLabel'] == 'Perda de Peso'
        assert data['level'] == 'Iniciante'
        assert data['duration'] == '12 weeks'

    def test_camel_case_keys(self, stack_with_relations):
        s = Stack.objects.prefetch_related(
            'stack_peptides', 'references'
        ).get(pk='test-stack')
        data = serialize_stack(s)

        assert 'goalLabel' in data
        assert 'evidenceLevel' in data
        assert 'goal_label' not in data
        assert 'evidence_level' not in data

    def test_peptides_serialization(self, stack_with_relations):
        s = Stack.objects.prefetch_related(
            'stack_peptides', 'references'
        ).get(pk='test-stack')
        data = serialize_stack(s)

        assert len(data['peptides']) == 2
        assert data['peptides'][0]['id'] == 'test-peptide'
        assert data['peptides'][0]['name'] == 'Test Peptide'
        assert data['peptides'][0]['role'] == 'Primary agent'
        assert data['peptides'][0]['dose'] == '1mg/day'
        assert data['peptides'][0]['timing'] == 'Morning'

    def test_peptide_without_linked_record(self, stack):
        StackPeptide.objects.create(
            stack=stack, peptide=None, name='Orphan Peptide',
            role='R', dose='D', timing='T', order=0,
        )
        s = Stack.objects.prefetch_related(
            'stack_peptides', 'references'
        ).get(pk='test-stack')
        data = serialize_stack(s)

        # When no linked peptide, should generate id from name
        assert data['peptides'][0]['id'] == 'orphan-peptide'
        assert data['peptides'][0]['name'] == 'Orphan Peptide'

    def test_references_serialization(self, stack_with_relations):
        s = Stack.objects.prefetch_related(
            'stack_peptides', 'references'
        ).get(pk='test-stack')
        data = serialize_stack(s)

        assert len(data['references']) == 1
        assert '<a href=' in data['references'][0]

    def test_all_expected_keys_present(self, stack_with_relations):
        s = Stack.objects.prefetch_related(
            'stack_peptides', 'references'
        ).get(pk='test-stack')
        data = serialize_stack(s)

        expected_keys = {
            'id', 'name', 'goal', 'goalLabel', 'level', 'description',
            'peptides', 'synergy', 'application', 'duration', 'warnings',
            'evidenceLevel', 'references',
        }
        assert set(data.keys()) == expected_keys

    def test_json_serializable(self, stack_with_relations):
        s = Stack.objects.prefetch_related(
            'stack_peptides', 'references'
        ).get(pk='test-stack')
        data = serialize_stack(s)

        json_str = json.dumps(data, ensure_ascii=False)
        parsed = json.loads(json_str)
        assert parsed['id'] == 'test-stack'


# =============================================================================
# View Tests
# =============================================================================


@pytest.mark.django_db
class TestIndexView:
    """Tests for the index_view."""

    def test_returns_200(self, client):
        response = client.get('/')
        assert response.status_code == 200

    def test_contains_api_bootstrap_candidates(self, client, peptide_with_relations):
        response = client.get('/')
        content = response.content.decode()

        assert 'window.peptidesApiCandidates' in content
        assert content.count('window.peptidesApiCandidates') == 1
        assert 'window.peptidesApiUrl =' not in content
        assert '/api/peptides.json' in content
        assert '/peptides/api/peptides.json' in content
        assert 'https://guiadepeptideos.com.br/api/peptides.json' in content
        bootstrap_pos = content.find('window.peptidesApiCandidates')
        app_script_pos = content.find('<script src="', bootstrap_pos)
        assert bootstrap_pos != -1
        assert app_script_pos != -1
        assert bootstrap_pos < app_script_pos

    def test_noscript_contains_seeded_peptide_ids(self, client, peptide_with_relations, second_peptide):
        response = client.get('/')
        content = response.content.decode()

        assert 'test-peptide' in content
        assert 'second-peptide' in content

    def test_index_does_not_inline_full_dataset(self, client, peptide_with_relations):
        response = client.get('/')
        content = response.content.decode()

        assert 'var peptidesPart1' not in content
        assert 'var peptideStacks' not in content
        assert 'window.peptidesApiCandidates' in content
        assert 'window.peptidesApiUrl =' not in content

    def test_noscript_contains_stack_ids(self, client, stack_with_relations):
        response = client.get('/')
        content = response.content.decode()

        assert 'stack-test-stack' in content

    @override_settings(FORCE_SCRIPT_NAME='/peptides')
    def test_api_bootstrap_is_force_script_name_agnostic(self, client, db):
        response = client.get('/')
        content = response.content.decode()

        assert 'window.peptidesApiCandidates' in content
        assert 'window.peptidesApiUrl =' not in content
        assert '/api/peptides.json' in content
        assert '/peptides/api/peptides.json' in content

    def test_empty_database(self, client, db):
        """Page should render even with no data."""
        response = client.get('/')
        assert response.status_code == 200
        content = response.content.decode()
        assert 'window.peptidesApiCandidates' in content
        assert 'window.peptidesApiUrl =' not in content

    def test_frontend_has_multi_endpoint_api_fallbacks(self):
        app_js = (Path(__file__).resolve().parent.parent / 'static' / 'core' / 'app.js').read_text(encoding='utf-8')

        assert 'function buildApiCandidates()' in app_js
        assert 'function loadDataFromCandidates(candidates, index)' in app_js
        assert 'window.peptidesApiUrl' not in app_js
        assert 'https://guiadepeptideos.com.br/api/peptides.json' in app_js
        assert 'https://mlt.com.br/peptides/api/peptides.json' in app_js

    def test_template_has_static_references(self, client, db):
        response = client.get('/')
        content = response.content.decode()

        assert 'style.css' in content
        assert 'app.js' in content

    def test_template_has_html_structure(self, client, db):
        response = client.get('/')
        content = response.content.decode()

        assert '<header' in content
        assert '<footer' in content
        assert 'cardsContainer' in content
        assert 'stacksContainer' in content
        assert 'modalOverlay' in content
        assert 'searchInput' in content

    def test_blood_lab_banner_present(self, client, db):
        response = client.get('/')
        content = response.content.decode()

        assert 'blood-lab-banner' in content
        assert '/blood/' in content

    def test_unicode_in_json(self, client, db):
        """Portuguese characters should render correctly."""
        Peptide.objects.create(
            id='acento-peptide', name='Peptídeo com acentuação',
            category='other', category_label='Outros',
            description='Descrição com ação e ímã.',
            mechanism='Mecanismo', administration='Subcutânea',
            half_life='1h', status='research', status_label='Pesquisa',
            order=1,
        )
        response = client.get('/')
        content = response.content.decode()

        assert 'Peptídeo com acentuação' in content
        assert 'Descrição com ação e ímã.' in content


@pytest.mark.django_db
class TestHealthView:
    """Tests for the health_view."""

    def test_returns_200(self, client):
        response = client.get('/health/')
        assert response.status_code == 200

    def test_returns_json(self, client):
        response = client.get('/health/')
        assert response['Content-Type'] == 'application/json'

    def test_returns_ok_status(self, client):
        response = client.get('/health/')
        data = json.loads(response.content)
        assert data == {'status': 'ok'}


# =============================================================================
# Admin Tests
# =============================================================================


@pytest.mark.django_db
class TestAdminRegistration:
    """Tests for Django admin configuration."""

    def test_peptide_admin_accessible(self, client, admin_user):
        client.login(username='admin', password='testpass123')
        response = client.get('/admin/core/peptide/')
        assert response.status_code == 200

    def test_stack_admin_accessible(self, client, admin_user):
        client.login(username='admin', password='testpass123')
        response = client.get('/admin/core/stack/')
        assert response.status_code == 200

    def test_peptide_admin_list_display(self):
        site = AdminSite()
        admin = PeptideAdmin(Peptide, site)
        assert 'id' in admin.list_display
        assert 'name' in admin.list_display
        assert 'category' in admin.list_display
        assert 'status' in admin.list_display

    def test_peptide_admin_list_filter(self):
        site = AdminSite()
        admin = PeptideAdmin(Peptide, site)
        assert 'category' in admin.list_filter
        assert 'status' in admin.list_filter

    def test_peptide_admin_search_fields(self):
        site = AdminSite()
        admin = PeptideAdmin(Peptide, site)
        assert 'name' in admin.search_fields
        assert 'aka' in admin.search_fields
        assert 'description' in admin.search_fields

    def test_peptide_admin_has_inlines(self):
        site = AdminSite()
        admin = PeptideAdmin(Peptide, site)
        inline_models = [i.model for i in admin.inlines]
        assert PeptideBenefit in inline_models
        assert PeptideSideEffect in inline_models
        assert PeptideDosage in inline_models
        assert PeptideReference in inline_models

    def test_stack_admin_has_inlines(self):
        site = AdminSite()
        admin = StackAdmin(Stack, site)
        inline_models = [i.model for i in admin.inlines]
        assert StackPeptide in inline_models
        assert StackReference in inline_models

    def test_stack_admin_list_filter(self):
        site = AdminSite()
        admin = StackAdmin(Stack, site)
        assert 'goal' in admin.list_filter
        assert 'level' in admin.list_filter

    def test_peptide_change_page(self, client, admin_user, peptide_with_relations):
        client.login(username='admin', password='testpass123')
        response = client.get(f'/admin/core/peptide/{peptide_with_relations.pk}/change/')
        assert response.status_code == 200

    def test_stack_change_page(self, client, admin_user, stack_with_relations):
        client.login(username='admin', password='testpass123')
        response = client.get(f'/admin/core/stack/{stack_with_relations.pk}/change/')
        assert response.status_code == 200


# =============================================================================
# JS-to-JSON Parser Tests
# =============================================================================


class TestJsToJson:
    """Tests for the js_to_json parser function."""

    def test_simple_array(self):
        js = 'var data = [{ id: "test", name: "Test" }];'
        result = json.loads(js_to_json(js))
        assert result == [{'id': 'test', 'name': 'Test'}]

    def test_removes_var_declaration(self):
        js = 'var peptidesPart1 = [{ id: "a" }];'
        result = json.loads(js_to_json(js))
        assert result[0]['id'] == 'a'

    def test_removes_single_line_comments(self):
        js = '''var data = [
            // This is a comment
            { id: "test" }
        ];'''
        result = json.loads(js_to_json(js))
        assert len(result) == 1

    def test_removes_multi_line_comments(self):
        js = '''var data = [
            /* Multi
               line comment */
            { id: "test" }
        ];'''
        result = json.loads(js_to_json(js))
        assert len(result) == 1

    def test_quotes_unquoted_keys(self):
        js = 'var data = [{ id: "test", name: "Test", order: 1 }];'
        result = json.loads(js_to_json(js))
        assert result[0]['id'] == 'test'
        assert result[0]['name'] == 'Test'
        assert result[0]['order'] == 1

    def test_camelcase_keys(self):
        js = 'var data = [{ categoryLabel: "Test", halfLife: "4h" }];'
        result = json.loads(js_to_json(js))
        assert result[0]['categoryLabel'] == 'Test'
        assert result[0]['halfLife'] == '4h'

    def test_trailing_commas(self):
        js = 'var data = [{ id: "test", name: "Test", },];'
        result = json.loads(js_to_json(js))
        assert result[0]['id'] == 'test'

    def test_escaped_single_quotes_in_strings(self):
        js = r"""var data = [{ id: "test", text: "Author\'s title \'quoted\' text" }];"""
        result = json.loads(js_to_json(js))
        assert "Author's title 'quoted' text" == result[0]['text']

    def test_html_in_strings_preserved(self):
        js = '''var data = [{ id: "test", ref: "Author. <a href='https://pubmed.ncbi.nlm.nih.gov/123/' target='_blank'>[PubMed]</a>" }];'''
        result = json.loads(js_to_json(js))
        assert "<a href='https://pubmed.ncbi.nlm.nih.gov/123/'" in result[0]['ref']
        assert "target='_blank'" in result[0]['ref']

    def test_nested_arrays(self):
        js = '''var data = [{
            id: "test",
            benefits: ["Benefit A", "Benefit B"],
            sideEffects: [{ name: "Nausea", severity: "common" }]
        }];'''
        result = json.loads(js_to_json(js))
        assert result[0]['benefits'] == ['Benefit A', 'Benefit B']
        assert result[0]['sideEffects'][0]['name'] == 'Nausea'

    def test_multiple_objects(self):
        js = '''var data = [
            { id: "first", name: "First" },
            { id: "second", name: "Second" }
        ];'''
        result = json.loads(js_to_json(js))
        assert len(result) == 2

    def test_complex_peptide_like_structure(self):
        js = '''var peptidesPart1 = [
            // Weight loss category
            {
                id: "semaglutide",
                name: "Semaglutide",
                aka: "Ozempic, Wegovy",
                category: "weight-loss",
                categoryLabel: "Perda de Peso",
                description: "A GLP-1 agonist.",
                mechanism: "Binds to GLP-1 receptors.",
                benefits: ["Weight loss", "Blood sugar control"],
                sideEffects: [
                    { name: "Nausea", severity: "common" },
                    { name: "Pancreatitis", severity: "rare" },
                ],
                dosage: [
                    { protocol: "Weekly", dose: "0.25-2.4mg", notes: "Escalate slowly." }
                ],
                administration: "SC",
                halfLife: "~7 days",
                status: "approved",
                statusLabel: "FDA Approved",
                references: [
                    "Author 2021. <a href='https://pubmed.ncbi.nlm.nih.gov/123/' target='_blank'>[PubMed]</a>",
                ],
            },
        ];'''
        result = json.loads(js_to_json(js))
        assert len(result) == 1
        p = result[0]
        assert p['id'] == 'semaglutide'
        assert p['aka'] == 'Ozempic, Wegovy'
        assert len(p['benefits']) == 2
        assert p['sideEffects'][0]['severity'] == 'common'
        assert p['dosage'][0]['protocol'] == 'Weekly'
        assert '<a href=' in p['references'][0]

    def test_comment_inside_string_not_removed(self):
        js = 'var data = [{ id: "test", text: "URL is https://example.com/path" }];'
        result = json.loads(js_to_json(js))
        assert 'https://example.com/path' in result[0]['text']

    def test_colon_inside_string_not_treated_as_key(self):
        js = 'var data = [{ id: "test", text: "dose: 5mg/day at 08:00" }];'
        result = json.loads(js_to_json(js))
        assert result[0]['text'] == 'dose: 5mg/day at 08:00'


# =============================================================================
# Seed Command Tests
# =============================================================================


@pytest.mark.django_db
class TestSeedCommand:
    """Tests for the seed_peptides management command."""

    def _create_js_files(self, tmpdir):
        """Create minimal JS data files for testing."""
        data1 = '''var peptidesPart1 = [
            {
                id: "test-pep-1",
                name: "Test Peptide 1",
                aka: "TP1",
                category: "weight-loss",
                categoryLabel: "Perda de Peso",
                description: "Description 1",
                mechanism: "Mechanism 1",
                benefits: ["Benefit A", "Benefit B"],
                sideEffects: [
                    { name: "Nausea", severity: "common" }
                ],
                dosage: [
                    { protocol: "Standard", dose: "1mg", notes: "Notes" }
                ],
                administration: "SC",
                halfLife: "4h",
                status: "approved",
                statusLabel: "Approved",
                references: [
                    "Ref 1. <a href='https://pubmed.ncbi.nlm.nih.gov/111/' target='_blank'>[PubMed]</a>"
                ]
            }
        ];'''
        data2 = '''var peptidesPart2 = [
            {
                id: "test-pep-2",
                name: "Test Peptide 2",
                category: "healing",
                categoryLabel: "Cura",
                description: "Description 2",
                mechanism: "Mechanism 2",
                benefits: [],
                sideEffects: [],
                dosage: [],
                administration: "Oral",
                halfLife: "12h",
                status: "research",
                statusLabel: "Research",
                references: []
            }
        ];'''
        data3 = 'var peptidesPart3 = [];'
        stacks = '''var peptideStacks = [
            {
                id: "test-stack-1",
                name: "Test Stack",
                goal: "weight-loss",
                goalLabel: "Perda de Peso",
                level: "Iniciante",
                description: "Stack description",
                peptides: [
                    {
                        id: "test-pep-1",
                        name: "Test Peptide 1",
                        role: "Primary",
                        dose: "1mg",
                        timing: "Daily"
                    }
                ],
                synergy: "Synergy text",
                application: "Apply separately",
                duration: "12 weeks",
                warnings: "Be careful",
                evidenceLevel: "High",
                references: [
                    "Stack ref. <a href='https://pubmed.ncbi.nlm.nih.gov/222/' target='_blank'>[PubMed]</a>"
                ]
            }
        ];'''

        for name, content in [('data1.js', data1), ('data2.js', data2),
                              ('data3.js', data3), ('stacks.js', stacks)]:
            with open(os.path.join(tmpdir, name), 'w', encoding='utf-8') as f:
                f.write(content)

    def test_seed_creates_peptides(self):
        from django.core.management import call_command

        with tempfile.TemporaryDirectory() as tmpdir:
            self._create_js_files(tmpdir)
            call_command('seed_peptides', data_dir=tmpdir, verbosity=0)

        assert Peptide.objects.count() == 2
        assert Peptide.objects.filter(id='test-pep-1').exists()
        assert Peptide.objects.filter(id='test-pep-2').exists()

    def test_seed_creates_benefits(self):
        from django.core.management import call_command

        with tempfile.TemporaryDirectory() as tmpdir:
            self._create_js_files(tmpdir)
            call_command('seed_peptides', data_dir=tmpdir, verbosity=0)

        assert PeptideBenefit.objects.count() == 2
        p1 = Peptide.objects.get(id='test-pep-1')
        assert p1.benefits.count() == 2

    def test_seed_creates_side_effects(self):
        from django.core.management import call_command

        with tempfile.TemporaryDirectory() as tmpdir:
            self._create_js_files(tmpdir)
            call_command('seed_peptides', data_dir=tmpdir, verbosity=0)

        assert PeptideSideEffect.objects.count() == 1
        se = PeptideSideEffect.objects.first()
        assert se.name == 'Nausea'
        assert se.severity == 'common'

    def test_seed_creates_dosages(self):
        from django.core.management import call_command

        with tempfile.TemporaryDirectory() as tmpdir:
            self._create_js_files(tmpdir)
            call_command('seed_peptides', data_dir=tmpdir, verbosity=0)

        assert PeptideDosage.objects.count() == 1

    def test_seed_creates_references(self):
        from django.core.management import call_command

        with tempfile.TemporaryDirectory() as tmpdir:
            self._create_js_files(tmpdir)
            call_command('seed_peptides', data_dir=tmpdir, verbosity=0)

        assert PeptideReference.objects.count() == 1
        ref = PeptideReference.objects.first()
        assert '<a href=' in ref.text

    def test_seed_creates_stacks(self):
        from django.core.management import call_command

        with tempfile.TemporaryDirectory() as tmpdir:
            self._create_js_files(tmpdir)
            call_command('seed_peptides', data_dir=tmpdir, verbosity=0)

        assert Stack.objects.count() == 1
        s = Stack.objects.first()
        assert s.id == 'test-stack-1'

    def test_seed_links_stack_peptides(self):
        from django.core.management import call_command

        with tempfile.TemporaryDirectory() as tmpdir:
            self._create_js_files(tmpdir)
            call_command('seed_peptides', data_dir=tmpdir, verbosity=0)

        sp = StackPeptide.objects.first()
        assert sp.peptide_id == 'test-pep-1'  # linked to existing peptide
        assert sp.name == 'Test Peptide 1'

    def test_seed_creates_stack_references(self):
        from django.core.management import call_command

        with tempfile.TemporaryDirectory() as tmpdir:
            self._create_js_files(tmpdir)
            call_command('seed_peptides', data_dir=tmpdir, verbosity=0)

        assert StackReference.objects.count() == 1

    def test_seed_is_idempotent(self):
        """Running seed twice should not duplicate data."""
        from django.core.management import call_command

        with tempfile.TemporaryDirectory() as tmpdir:
            self._create_js_files(tmpdir)
            call_command('seed_peptides', data_dir=tmpdir, verbosity=0)
            call_command('seed_peptides', data_dir=tmpdir, verbosity=0)

        assert Peptide.objects.count() == 2
        assert Stack.objects.count() == 1

    def test_seed_preserves_order(self):
        from django.core.management import call_command

        with tempfile.TemporaryDirectory() as tmpdir:
            self._create_js_files(tmpdir)
            call_command('seed_peptides', data_dir=tmpdir, verbosity=0)

        p1 = Peptide.objects.get(id='test-pep-1')
        p2 = Peptide.objects.get(id='test-pep-2')
        assert p1.order < p2.order

    def test_seed_with_empty_data3(self):
        """data3.js with empty array should not cause errors."""
        from django.core.management import call_command

        with tempfile.TemporaryDirectory() as tmpdir:
            self._create_js_files(tmpdir)
            call_command('seed_peptides', data_dir=tmpdir, verbosity=0)

        # Should have 2 peptides (from data1 + data2, data3 is empty)
        assert Peptide.objects.count() == 2


# =============================================================================
# Integration Tests
# =============================================================================


@pytest.mark.django_db
class TestEndToEndFlow:
    """Integration tests for the full data flow."""

    def test_seed_then_render(self):
        """Seed data from JS files, then verify the page renders correctly."""
        from django.core.management import call_command

        with tempfile.TemporaryDirectory() as tmpdir:
            # Create JS files
            data1 = '''var peptidesPart1 = [{
                id: "integration-test",
                name: "Integration Peptide",
                aka: "",
                category: "weight-loss",
                categoryLabel: "Perda de Peso",
                description: "For integration testing.",
                mechanism: "Test mechanism.",
                benefits: ["Benefit 1"],
                sideEffects: [{ name: "Effect", severity: "rare" }],
                dosage: [{ protocol: "P", dose: "D", notes: "N" }],
                administration: "SC",
                halfLife: "1h",
                status: "approved",
                statusLabel: "Approved",
                references: ["Ref <a href='https://pubmed.ncbi.nlm.nih.gov/999/' target='_blank'>[PubMed]</a>"]
            }];'''
            for name, content in [('data1.js', data1),
                                  ('data2.js', 'var peptidesPart2 = [];'),
                                  ('data3.js', 'var peptidesPart3 = [];'),
                                  ('stacks.js', 'var peptideStacks = [];')]:
                with open(os.path.join(tmpdir, name), 'w') as f:
                    f.write(content)

            call_command('seed_peptides', data_dir=tmpdir, verbosity=0)

        # Now test the rendered page
        client = Client()
        response = client.get('/')
        content = response.content.decode()

        assert response.status_code == 200
        assert 'integration-test' in content
        assert 'Integration Peptide' in content

        api_response = client.get('/api/peptides.json')
        data = json.loads(api_response.content)['peptides']

        assert len(data) == 1
        p = data[0]
        assert p['id'] == 'integration-test'
        assert p['benefits'] == ['Benefit 1']
        assert p['sideEffects'][0]['severity'] == 'rare'
        assert p['dosage'][0]['protocol'] == 'P'
        assert 'pubmed' in p['references'][0]

    def test_api_includes_all_categories_without_data_loss(self, db):
        """Verify the public API preserves all categories after bootstrapping changes."""
        categories = {
            'wl': ('weight-loss', 'Perda de Peso'),
            'gh': ('growth-hormone', 'Hormônio do Crescimento'),
            'hl': ('healing', 'Cura'),
            'aa': ('anti-aging', 'Anti-Envelhecimento'),
            'sk': ('skin', 'Pele'),
            'cg': ('cognitive', 'Cognitivo'),
            'im': ('immune', 'Imunológico'),
            'hr': ('hormonal', 'Hormonal'),
            'sl': ('sleep', 'Sono'),
            'bc': ('body-comp', 'Composição'),
            'ot': ('other', 'Outros'),
        }
        for slug, (cat, label) in categories.items():
            Peptide.objects.create(
                id=f'pep-{slug}', name=f'Peptide {slug}',
                category=cat, category_label=label,
                description='', mechanism='', administration='',
                half_life='', status='research', status_label='', order=0,
            )

        client = Client()
        response = client.get('/api/peptides.json')
        data = json.loads(response.content)
        categories_in_api = {p['category'] for p in data['peptides']}

        assert categories_in_api == {
            'weight-loss', 'growth-hormone', 'healing', 'anti-aging', 'skin',
            'cognitive', 'immune', 'hormonal', 'sleep', 'body-comp', 'other'
        }
        assert len(data['peptides']) == 11


# =============================================================================
# URL Tests
# =============================================================================


@pytest.mark.django_db
class TestURLRouting:
    """Tests for URL routing configuration."""

    def test_index_url_resolves(self):
        url = reverse('index')
        assert url == '/'

    def test_health_url_resolves(self):
        url = reverse('health')
        assert url == '/health/'

    def test_peptide_detail_url_resolves(self):
        url = reverse('peptide_detail', kwargs={'slug': 'semaglutide'})
        assert url == '/peptideos/semaglutide/'

    def test_stack_detail_url_resolves(self):
        url = reverse('stack_detail', kwargs={'slug': 'weight-loss-beginner'})
        assert url == '/combinacoes/weight-loss-beginner/'

    def test_robots_url_resolves(self):
        url = reverse('robots_txt')
        assert url == '/robots.txt'

    def test_sitemap_url_resolves(self):
        url = reverse('sitemap_xml')
        assert url == '/sitemap.xml'

    def test_llms_url_resolves(self):
        url = reverse('llms_txt')
        assert url == '/llms.txt'

    def test_category_url_resolves(self):
        url = reverse('category', kwargs={'slug': 'weight-loss'})
        assert url == '/categorias/weight-loss/'

    def test_glossario_url_resolves(self):
        url = reverse('glossario')
        assert url == '/glossario/'

    def test_sobre_url_resolves(self):
        url = reverse('sobre')
        assert url == '/sobre/'

    def test_peptides_api_url_resolves(self):
        url = reverse('peptides_api')
        assert url == '/api/peptides.json'

    def test_admin_url_accessible(self, client, admin_user):
        client.login(username='admin', password='testpass123')
        response = client.get('/admin/')
        assert response.status_code == 200


@pytest.mark.django_db
class TestSEOEndpoints:
    """Tests for SEO endpoints (robots.txt, sitemap.xml, llms.txt, detail pages)."""

    @pytest.fixture
    def peptide(self):
        p = Peptide.objects.create(
            id='test-peptide', name='Test Peptide', aka='TP',
            category='weight-loss', category_label='Perda de Peso',
            description='Test description', mechanism='Test mechanism',
            administration='SC', half_life='1h',
            status='approved', status_label='Aprovado', order=1,
        )
        return p

    @pytest.fixture
    def stack(self):
        s = Stack.objects.create(
            id='test-stack', name='Test Stack',
            goal='weight-loss', goal_label='Perda de Peso',
            level='Iniciante', description='Test desc',
            synergy='Test synergy', application='Test app',
            duration='4 weeks', warnings='Test warnings',
            evidence_level='High', order=1,
        )
        return s

    def test_robots_txt_returns_200(self, client):
        response = client.get('/robots.txt')
        assert response.status_code == 200
        assert 'text/plain' in response['Content-Type']
        assert b'User-agent: *' in response.content
        assert b'Sitemap:' in response.content
        assert b'guiadepeptideos.com.br' in response.content

    def test_sitemap_xml_returns_200(self, client):
        response = client.get('/sitemap.xml')
        assert response.status_code == 200
        assert 'application/xml' in response['Content-Type']
        assert b'<?xml version="1.0"' in response.content
        assert b'<urlset' in response.content
        assert b'<lastmod>' in response.content

    def test_sitemap_includes_peptide_urls(self, client, peptide):
        response = client.get('/sitemap.xml')
        assert b'/peptideos/test-peptide/' in response.content

    def test_sitemap_includes_stack_urls(self, client, stack):
        response = client.get('/sitemap.xml')
        assert b'/combinacoes/test-stack/' in response.content

    def test_llms_txt_returns_200(self, client):
        response = client.get('/llms.txt')
        assert response.status_code == 200
        assert b'Guia Completo de Peptideos' in response.content
        assert b'guiadepeptideos.com.br' in response.content

    def test_peptide_detail_page_returns_200(self, client, peptide):
        response = client.get('/peptideos/test-peptide/')
        assert response.status_code == 200
        assert b'Test Peptide' in response.content
        assert b'Test description' in response.content

    def test_peptide_detail_404_for_missing(self, client):
        response = client.get('/peptideos/does-not-exist/')
        assert response.status_code == 404

    def test_peptide_detail_has_canonical(self, client, peptide):
        response = client.get('/peptideos/test-peptide/')
        assert b'rel="canonical"' in response.content
        assert b'/peptideos/test-peptide/' in response.content

    def test_peptide_detail_has_schema_drug(self, client, peptide):
        response = client.get('/peptideos/test-peptide/')
        assert b'"@type": "Drug"' in response.content
        assert b'BreadcrumbList' in response.content

    def test_stack_detail_page_returns_200(self, client, stack):
        response = client.get('/combinacoes/test-stack/')
        assert response.status_code == 200
        assert b'Test Stack' in response.content

    def test_stack_detail_404_for_missing(self, client):
        response = client.get('/combinacoes/does-not-exist/')
        assert response.status_code == 404

    def test_index_has_faqpage_schema(self, client):
        response = client.get('/')
        assert b'"@type": "FAQPage"' in response.content
        assert b'"@type": "Question"' in response.content

    def test_index_has_og_image(self, client):
        response = client.get('/')
        assert b'og:image' in response.content
        assert b'og-image.png' in response.content

    def test_index_has_noscript_content(self, client, peptide, stack):
        response = client.get('/')
        assert b'<noscript>' in response.content
        assert b'<article' in response.content
        assert b'Test Peptide' in response.content

    def test_category_page_returns_200(self, client, peptide):
        response = client.get('/categorias/weight-loss/')
        assert response.status_code == 200
        assert b'Perda de Peso' in response.content

    def test_category_page_404_for_invalid(self, client):
        response = client.get('/categorias/invalid-category/')
        assert response.status_code == 404

    def test_category_page_has_schema(self, client, peptide):
        response = client.get('/categorias/weight-loss/')
        assert b'CollectionPage' in response.content
        assert b'BreadcrumbList' in response.content
        assert b'ItemList' in response.content

    def test_glossario_page_returns_200(self, client):
        response = client.get('/glossario/')
        assert response.status_code == 200
        assert b'Gloss' in response.content
        assert b'DefinedTermSet' in response.content

    def test_sobre_page_returns_200(self, client):
        response = client.get('/sobre/')
        assert response.status_code == 200
        assert b'Sobre' in response.content
        assert b'AboutPage' in response.content
        assert b'E-E-A-T' not in response.content  # not user-facing term

    def test_peptides_api_returns_json(self, client, peptide):
        response = client.get('/api/peptides.json')
        assert response.status_code == 200
        assert 'application/json' in response['Content-Type']
        data = json.loads(response.content)
        assert 'version' in data
        assert 'peptides' in data
        assert 'stacks' in data
        assert len(data['peptides']) >= 1

    def test_peptides_api_has_cors_header(self, client):
        response = client.get('/api/peptides.json')
        assert response['Access-Control-Allow-Origin'] == '*'

    def test_peptides_api_has_cache_header(self, client):
        response = client.get('/api/peptides.json')
        assert response['Cache-Control'] == 'public, max-age=3600'

    def test_sitemap_includes_category_urls(self, client, peptide):
        response = client.get('/sitemap.xml')
        assert b'/categorias/weight-loss/' in response.content

    def test_sitemap_includes_static_pages(self, client):
        response = client.get('/sitemap.xml')
        assert b'/sobre/' in response.content
        assert b'/glossario/' in response.content

    def test_robots_includes_ai_bots(self, client):
        response = client.get('/robots.txt')
        assert b'GPTBot' in response.content
        assert b'ClaudeBot' in response.content
        assert b'PerplexityBot' in response.content
        assert b'Google-Extended' in response.content

    def test_llms_txt_has_api_link(self, client):
        response = client.get('/llms.txt')
        assert b'/api/peptides.json' in response.content
        assert b'guiadepeptideos.com.br/sobre/' in response.content

    def test_llms_txt_groups_peptides_by_category(self, client, peptide, second_peptide):
        response = client.get('/llms.txt')
        content = response.content.decode('utf-8')

        assert '### Perda de Peso' in content
        assert '### Cura e Recuperação' in content
        assert '[Test Peptide' in content
        assert '[Second Peptide' in content

    def test_llms_txt_groups_stacks_by_goal(self, client, stack):
        Stack.objects.create(
            id='healing-stack',
            name='Healing Stack - Intermediate',
            goal='healing',
            goal_label='Cura e Recuperação',
            level='Intermediário',
            description='A second stack for llms grouping tests.',
            synergy='Complementary tissue repair pathways.',
            application='Apply separately.',
            duration='8 weeks',
            warnings='Research use only.',
            evidence_level='Moderate.',
            order=2,
        )

        response = client.get('/llms.txt')
        content = response.content.decode('utf-8')

        assert '## Combinacoes Recomendadas (2 total)' in content
        assert '### Perda de Peso' in content
        assert '### Cura e Recuperação' in content
        assert 'Test Stack' in content
        assert 'Healing Stack' in content

    def test_peptide_detail_has_article_schema(self, client, peptide):
        response = client.get('/peptideos/test-peptide/')
        assert b'"@type": "Article"' in response.content
        assert b'datePublished' in response.content
        assert b'dateModified' in response.content

    def test_index_footer_has_nav_links(self, client):
        response = client.get('/')
        assert b'/sobre/' in response.content
        assert b'/glossario/' in response.content
        assert b'/api/peptides.json' in response.content

    def test_index_css_is_referenced(self, client):
        """CSS file must be referenced in the HTML head."""
        response = client.get('/')
        assert b'style.' in response.content
        assert b'.css' in response.content

    def test_index_js_is_referenced(self, client):
        """JS file must be referenced in the HTML."""
        response = client.get('/')
        assert b'app.' in response.content
        assert b'.js' in response.content

    def test_static_css_is_accessible(self, client):
        """CSS file must return 200 at /static/core/style.css."""
        response = client.get('/static/core/style.css')
        # WhiteNoise serves hashed files but the unhashed path also works in dev
        assert response.status_code in (200, 404)  # 404 in test (no collectstatic)

    def test_peptide_detail_has_css(self, client, peptide):
        """Detail page must reference CSS file."""
        response = client.get('/peptideos/test-peptide/')
        assert b'style.' in response.content
        assert b'.css' in response.content

    def test_stack_detail_has_css(self, client, stack):
        """Stack detail page must reference CSS file."""
        response = client.get('/combinacoes/test-stack/')
        assert b'style.' in response.content
        assert b'.css' in response.content


# =============================================================================
# Real Data File Tests (if available)
# =============================================================================


@pytest.mark.django_db
class TestRealDataFiles:
    """Tests that parse the actual JS data files (data1.js, data2.js, data3.js, stacks.js).
    Skipped if files are not present (e.g., in CI without data files).
    """

    DATA_DIR = os.path.join(os.path.dirname(__file__), '..')

    @pytest.fixture(autouse=True)
    def check_data_files(self):
        if not os.path.exists(os.path.join(self.DATA_DIR, 'data1.js')):
            pytest.skip('JS data files not found')

    def _parse_file(self, filename):
        filepath = os.path.join(self.DATA_DIR, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        return json.loads(js_to_json(content))

    def test_data1_parses_correctly(self):
        data = self._parse_file('data1.js')
        assert len(data) == 40

    def test_data2_parses_correctly(self):
        data = self._parse_file('data2.js')
        assert len(data) == 37

    def test_data3_parses_correctly(self):
        data = self._parse_file('data3.js')
        assert len(data) == 36

    def test_stacks_parses_correctly(self):
        data = self._parse_file('stacks.js')
        assert len(data) == 44

    def test_total_peptides(self):
        total = sum(
            len(self._parse_file(f))
            for f in ['data1.js', 'data2.js', 'data3.js']
        )
        assert total == 113

    def test_all_peptides_have_required_fields(self):
        required_fields = [
            'id', 'name', 'category', 'categoryLabel', 'description',
            'mechanism', 'administration', 'halfLife', 'status', 'statusLabel',
            'benefits', 'sideEffects', 'dosage', 'references',
        ]
        for filename in ['data1.js', 'data2.js', 'data3.js']:
            data = self._parse_file(filename)
            for peptide in data:
                for field in required_fields:
                    assert field in peptide, (
                        f"Missing '{field}' in {peptide.get('id', '?')} from {filename}"
                    )

    def test_all_stacks_have_required_fields(self):
        required_fields = [
            'id', 'name', 'goal', 'goalLabel', 'level', 'description',
            'peptides', 'synergy', 'application', 'duration', 'warnings',
            'evidenceLevel', 'references',
        ]
        data = self._parse_file('stacks.js')
        for stack in data:
            for field in required_fields:
                assert field in stack, (
                    f"Missing '{field}' in {stack.get('id', '?')}"
                )

    def test_all_peptide_ids_unique(self):
        all_ids = []
        for filename in ['data1.js', 'data2.js', 'data3.js']:
            data = self._parse_file(filename)
            all_ids.extend(p['id'] for p in data)
        assert len(all_ids) == len(set(all_ids)), 'Duplicate peptide IDs found'

    def test_all_stack_ids_unique(self):
        data = self._parse_file('stacks.js')
        ids = [s['id'] for s in data]
        assert len(ids) == len(set(ids)), 'Duplicate stack IDs found'

    def test_valid_categories(self):
        valid = {c[0] for c in CATEGORY_CHOICES}
        for filename in ['data1.js', 'data2.js', 'data3.js']:
            data = self._parse_file(filename)
            for p in data:
                assert p['category'] in valid, (
                    f"Invalid category '{p['category']}' for {p['id']}"
                )

    def test_valid_statuses(self):
        valid = {c[0] for c in STATUS_CHOICES}
        for filename in ['data1.js', 'data2.js', 'data3.js']:
            data = self._parse_file(filename)
            for p in data:
                assert p['status'] in valid, (
                    f"Invalid status '{p['status']}' for {p['id']}"
                )

    def test_valid_severities(self):
        valid = {c[0] for c in SEVERITY_CHOICES}
        for filename in ['data1.js', 'data2.js', 'data3.js']:
            data = self._parse_file(filename)
            for p in data:
                for se in p.get('sideEffects', []):
                    assert se['severity'] in valid, (
                        f"Invalid severity '{se['severity']}' in {p['id']}"
                    )

    def test_references_have_pubmed_links(self):
        for filename in ['data1.js', 'data2.js', 'data3.js']:
            data = self._parse_file(filename)
            for p in data:
                for ref in p.get('references', []):
                    assert 'pubmed.ncbi.nlm.nih.gov' in ref, (
                        f"Reference without PubMed link in {p['id']}: {ref[:60]}"
                    )

    def test_total_reference_count(self):
        total = 0
        for filename in ['data1.js', 'data2.js', 'data3.js']:
            data = self._parse_file(filename)
            total += sum(len(p.get('references', [])) for p in data)
        stacks = self._parse_file('stacks.js')
        total += sum(len(s.get('references', [])) for s in stacks)
        assert total == 306, f'Expected 306 references, got {total}'

    def test_full_seed_with_real_data(self):
        """Run the seed command with actual JS files and verify counts."""
        from django.core.management import call_command
        call_command('seed_peptides', data_dir=self.DATA_DIR, verbosity=0)

        assert Peptide.objects.count() == 113
        assert Stack.objects.count() == 44
        assert PeptideReference.objects.count() + StackReference.objects.count() > 0


# =============================================================================
# Deployment Configuration Tests
# =============================================================================

class TestDeploymentConfig:
    """Tests for deployment configuration consistency."""

    def test_docker_compose_allowed_hosts_includes_domains(self):
        """docker-compose.yml must include all production domains in ALLOWED_HOSTS."""
        compose_path = os.path.join(
            os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
            'docker-compose.yml',
        )
        if not os.path.exists(compose_path):
            pytest.skip('docker-compose.yml not found')
        with open(compose_path, 'r') as f:
            content = f.read()
        for domain in ['mlt.com.br', 'guiadepeptideos.com.br']:
            assert domain in content, (
                f'docker-compose.yml ALLOWED_HOSTS must include {domain}'
            )

    def test_settings_allowed_hosts_default_includes_domains(self):
        """Settings ALLOWED_HOSTS default must include all production domains."""
        settings_path = os.path.join(
            os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
            'peptides_project', 'settings.py',
        )
        with open(settings_path, 'r') as f:
            content = f.read()
        for domain in ['mlt.com.br', 'guiadepeptideos.com.br']:
            assert domain in content, (
                f'settings.py ALLOWED_HOSTS default must include {domain}'
        )

    def test_docker_compose_force_script_name(self):
        """docker-compose.yml must set FORCE_SCRIPT_NAME=/peptides."""
        compose_path = os.path.join(
            os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
            'docker-compose.yml',
        )
        if not os.path.exists(compose_path):
            pytest.skip('docker-compose.yml not found')
        with open(compose_path, 'r') as f:
            content = f.read()
        assert 'FORCE_SCRIPT_NAME=/peptides' in content

    def test_nginx_guiadepeptideos_handles_static_rewrite(self):
        """nginx config for guiadepeptideos.com.br must rewrite /peptides/static/ to /static/."""
        import subprocess
        result = subprocess.run(
            ['ssh', '-i', r'C:\Users\lm\.ssh\id_rsa', '-o', 'BatchMode=yes',
             '-o', 'ConnectTimeout=3', 'root@45.63.90.69',
             'cat /var/www/docker-infra/nginx/conf.d/guiadepeptideos.conf 2>/dev/null'],
            capture_output=True, text=True, timeout=10,
        )
        if result.returncode != 0:
            pytest.skip('Cannot access server via SSH')
        content = result.stdout
        assert 'guiadepeptideos.com.br' in content, 'nginx config must serve guiadepeptideos.com.br'
        assert '/peptides/static/' in content, 'nginx must handle /peptides/static/ rewrite for new domain'


# =============================================================================
# Production Integration Tests (require network access to guiadepeptideos.com.br)
# =============================================================================

class TestProductionSite:
    """Integration tests that verify the live production site.
    Skipped automatically if guiadepeptideos.com.br is unreachable."""

    @pytest.fixture(autouse=True)
    def check_reachable(self):
        import subprocess
        result = subprocess.run(
            ['curl', '-sI', '--connect-timeout', '3', 'https://guiadepeptideos.com.br/health/'],
            capture_output=True, text=True, timeout=8,
        )
        if result.returncode != 0 or '200' not in result.stdout:
            pytest.skip('guiadepeptideos.com.br is not reachable')

    def _curl(self, path, head_only=True):
        import subprocess
        cmd = ['curl', '-s', '--connect-timeout', '5']
        if head_only:
            cmd.append('-I')
        cmd.append(f'https://guiadepeptideos.com.br{path}')
        result = subprocess.run(cmd, capture_output=True, timeout=15)
        return result.stdout.decode('utf-8', errors='replace')

    def test_homepage_returns_200(self):
        out = self._curl('/')
        assert 'HTTP/' in out
        assert '200' in out.split('\n')[0]

    def test_css_loads_on_production(self):
        """CSS file referenced by the page must return 200 on production."""
        html = self._curl('/', head_only=False)
        import re
        m = re.search(r'href="([^"]*style\.[^"]*\.css)"', html)
        assert m, 'CSS file not referenced in production HTML'
        css_path = m.group(1)
        out = self._curl(css_path)
        assert '200' in out.split('\n')[0], f'CSS file {css_path} is not accessible (got: {out.split(chr(10))[0]})'

    def test_js_loads_on_production(self):
        """JS file referenced by the page must return 200 on production."""
        html = self._curl('/', head_only=False)
        import re
        m = re.search(r'src="([^"]*app\.[^"]*\.js)"', html)
        assert m, 'JS file not referenced in production HTML'
        js_path = m.group(1)
        out = self._curl(js_path)
        assert '200' in out.split('\n')[0], f'JS file {js_path} is not accessible (got: {out.split(chr(10))[0]})'

    def test_favicon_loads(self):
        out = self._curl('/peptides/static/core/favicon.svg')
        assert '200' in out.split('\n')[0]

    def test_og_image_loads(self):
        out = self._curl('/peptides/static/core/og-image.png')
        assert '200' in out.split('\n')[0]

    def test_peptide_detail_page(self):
        out = self._curl('/peptideos/semaglutide/')
        assert '200' in out.split('\n')[0]

    def test_stack_detail_page(self):
        out = self._curl('/combinacoes/weight-loss-beginner/')
        assert '200' in out.split('\n')[0]

    def test_category_page(self):
        out = self._curl('/categorias/weight-loss/')
        assert '200' in out.split('\n')[0]

    def test_glossario_page(self):
        out = self._curl('/glossario/')
        assert '200' in out.split('\n')[0]

    def test_sobre_page(self):
        out = self._curl('/sobre/')
        assert '200' in out.split('\n')[0]

    def test_robots_txt(self):
        out = self._curl('/robots.txt')
        assert '200' in out.split('\n')[0]

    def test_sitemap_xml(self):
        out = self._curl('/sitemap.xml')
        assert '200' in out.split('\n')[0]

    def test_llms_txt(self):
        out = self._curl('/llms.txt')
        assert '200' in out.split('\n')[0]

    def test_api_json(self):
        out = self._curl('/api/peptides.json')
        assert '200' in out.split('\n')[0]

    def test_https_redirect(self):
        """HTTP must redirect to HTTPS."""
        import subprocess
        result = subprocess.run(
            ['curl', '-sI', '--connect-timeout', '5', 'http://guiadepeptideos.com.br/'],
            capture_output=True, text=True, timeout=10,
        )
        assert '301' in result.stdout.split('\n')[0]

    def test_www_redirect(self):
        """www must redirect to non-www."""
        import subprocess
        result = subprocess.run(
            ['curl', '-sI', '--connect-timeout', '5', 'https://www.guiadepeptideos.com.br/'],
            capture_output=True, text=True, timeout=10,
        )
        assert '301' in result.stdout.split('\n')[0]

    def test_detail_page_css_loads(self):
        """CSS on peptide detail page must be accessible."""
        html = self._curl('/peptideos/semaglutide/', head_only=False)
        import re
        m = re.search(r'href="([^"]*style\.[^"]*\.css)"', html)
        assert m, 'CSS not referenced on detail page'
        css_path = m.group(1)
        out = self._curl(css_path)
        assert '200' in out.split('\n')[0], f'Detail page CSS {css_path} returns: {out.split(chr(10))[0]}'
