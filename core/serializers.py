"""
Serializers that convert Django models to dicts matching the exact
JavaScript object format used by the frontend (app.js).
"""


def serialize_peptide(peptide):
    """Convert a Peptide model instance to a dict matching the JS format."""
    data = {
        'id': peptide.id,
        'name': peptide.name,
        'aka': peptide.aka,
        'category': peptide.category,
        'categoryLabel': peptide.category_label,
        'description': peptide.description,
        'mechanism': peptide.mechanism,
        'benefits': [b.text for b in peptide.benefits.all()],
        'sideEffects': [
            {'name': s.name, 'severity': s.severity}
            for s in peptide.side_effects.all()
        ],
        'dosage': [
            {'protocol': d.protocol, 'dose': d.dose, 'notes': d.notes}
            for d in peptide.dosages.all()
        ],
        'administration': peptide.administration,
        'halfLife': peptide.half_life,
        'status': peptide.status,
        'statusLabel': peptide.status_label,
        'references': [r.text for r in peptide.references.all()],
    }
    return data


def serialize_stack(stack):
    """Convert a Stack model instance to a dict matching the JS format."""
    data = {
        'id': stack.id,
        'name': stack.name,
        'goal': stack.goal,
        'goalLabel': stack.goal_label,
        'level': stack.level,
        'description': stack.description,
        'peptides': [
            {
                'id': sp.peptide_id or sp.name.lower().replace(' ', '-'),
                'name': sp.name,
                'role': sp.role,
                'dose': sp.dose,
                'timing': sp.timing,
            }
            for sp in stack.stack_peptides.all()
        ],
        'synergy': stack.synergy,
        'application': stack.application,
        'duration': stack.duration,
        'warnings': stack.warnings,
        'evidenceLevel': stack.evidence_level,
        'references': [r.text for r in stack.references.all()],
    }
    return data
