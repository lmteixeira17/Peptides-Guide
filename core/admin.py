from django.contrib import admin
from .models import (
    Peptide, PeptideBenefit, PeptideSideEffect, PeptideDosage, PeptideReference,
    Stack, StackPeptide, StackReference,
)


class BenefitInline(admin.TabularInline):
    model = PeptideBenefit
    extra = 1


class SideEffectInline(admin.TabularInline):
    model = PeptideSideEffect
    extra = 1


class DosageInline(admin.TabularInline):
    model = PeptideDosage
    extra = 1


class PeptideReferenceInline(admin.TabularInline):
    model = PeptideReference
    extra = 1


@admin.register(Peptide)
class PeptideAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'category', 'status', 'order']
    list_filter = ['category', 'status']
    search_fields = ['name', 'aka', 'description']
    list_editable = ['order']
    ordering = ['order', 'name']
    inlines = [BenefitInline, SideEffectInline, DosageInline, PeptideReferenceInline]


class StackPeptideInline(admin.TabularInline):
    model = StackPeptide
    extra = 1
    autocomplete_fields = ['peptide']


class StackReferenceInline(admin.TabularInline):
    model = StackReference
    extra = 1


@admin.register(Stack)
class StackAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'goal', 'level', 'order']
    list_filter = ['goal', 'level']
    search_fields = ['name', 'description']
    list_editable = ['order']
    ordering = ['order', 'name']
    inlines = [StackPeptideInline, StackReferenceInline]
