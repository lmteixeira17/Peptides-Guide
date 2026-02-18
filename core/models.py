from django.db import models


CATEGORY_CHOICES = [
    ('weight-loss', 'Perda de Peso'),
    ('growth-hormone', 'Hormônio do Crescimento'),
    ('healing', 'Cura e Recuperação'),
    ('anti-aging', 'Anti-Envelhecimento'),
    ('skin', 'Pele e Estética'),
    ('cognitive', 'Cognitivo'),
    ('immune', 'Sistema Imunológico'),
    ('hormonal', 'Hormonal'),
    ('sleep', 'Sono'),
    ('body-comp', 'Composição Corporal'),
    ('other', 'Outros'),
]

STATUS_CHOICES = [
    ('approved', 'Aprovado'),
    ('trial', 'Ensaio Clínico'),
    ('research', 'Pesquisa'),
]

SEVERITY_CHOICES = [
    ('common', 'Comum'),
    ('occasional', 'Ocasional'),
    ('rare', 'Raro'),
]


class Peptide(models.Model):
    id = models.SlugField(max_length=100, primary_key=True)
    name = models.CharField('Nome', max_length=200)
    aka = models.CharField('Nomes alternativos', max_length=300, blank=True, default='')
    category = models.CharField('Categoria', max_length=30, choices=CATEGORY_CHOICES)
    category_label = models.CharField('Label da categoria', max_length=100)
    description = models.TextField('Descrição')
    mechanism = models.TextField('Mecanismo de ação')
    administration = models.CharField('Administração', max_length=200)
    half_life = models.CharField('Meia-vida', max_length=100)
    status = models.CharField('Status', max_length=20, choices=STATUS_CHOICES)
    status_label = models.CharField('Label do status', max_length=100)
    order = models.PositiveIntegerField('Ordem', default=0)

    class Meta:
        verbose_name = 'Peptídeo'
        verbose_name_plural = 'Peptídeos'
        ordering = ['order', 'name']

    def __str__(self):
        return self.name


class PeptideBenefit(models.Model):
    peptide = models.ForeignKey(Peptide, on_delete=models.CASCADE, related_name='benefits')
    text = models.TextField('Benefício')
    order = models.PositiveIntegerField('Ordem', default=0)

    class Meta:
        verbose_name = 'Benefício'
        verbose_name_plural = 'Benefícios'
        ordering = ['order']

    def __str__(self):
        return self.text[:80]


class PeptideSideEffect(models.Model):
    peptide = models.ForeignKey(Peptide, on_delete=models.CASCADE, related_name='side_effects')
    name = models.CharField('Nome', max_length=200)
    severity = models.CharField('Severidade', max_length=20, choices=SEVERITY_CHOICES)
    order = models.PositiveIntegerField('Ordem', default=0)

    class Meta:
        verbose_name = 'Efeito colateral'
        verbose_name_plural = 'Efeitos colaterais'
        ordering = ['order']

    def __str__(self):
        return f'{self.name} ({self.severity})'


class PeptideDosage(models.Model):
    peptide = models.ForeignKey(Peptide, on_delete=models.CASCADE, related_name='dosages')
    protocol = models.CharField('Protocolo', max_length=200)
    dose = models.CharField('Dose', max_length=200)
    notes = models.TextField('Notas')
    order = models.PositiveIntegerField('Ordem', default=0)

    class Meta:
        verbose_name = 'Dosagem'
        verbose_name_plural = 'Dosagens'
        ordering = ['order']

    def __str__(self):
        return f'{self.protocol}: {self.dose}'


class PeptideReference(models.Model):
    peptide = models.ForeignKey(Peptide, on_delete=models.CASCADE, related_name='references')
    text = models.TextField('Referência')
    order = models.PositiveIntegerField('Ordem', default=0)

    class Meta:
        verbose_name = 'Referência'
        verbose_name_plural = 'Referências'
        ordering = ['order']

    def __str__(self):
        return self.text[:80]


class Stack(models.Model):
    id = models.SlugField(max_length=100, primary_key=True)
    name = models.CharField('Nome', max_length=300)
    goal = models.CharField('Objetivo', max_length=30, choices=CATEGORY_CHOICES)
    goal_label = models.CharField('Label do objetivo', max_length=100)
    level = models.CharField('Nível', max_length=50)
    description = models.TextField('Descrição')
    synergy = models.TextField('Sinergia')
    application = models.TextField('Aplicação')
    duration = models.CharField('Duração', max_length=200)
    warnings = models.TextField('Avisos')
    evidence_level = models.TextField('Nível de evidência')
    order = models.PositiveIntegerField('Ordem', default=0)

    class Meta:
        verbose_name = 'Combinação'
        verbose_name_plural = 'Combinações'
        ordering = ['order', 'name']

    def __str__(self):
        return self.name


class StackPeptide(models.Model):
    stack = models.ForeignKey(Stack, on_delete=models.CASCADE, related_name='stack_peptides')
    peptide = models.ForeignKey(
        Peptide, on_delete=models.SET_NULL, null=True, blank=True,
        related_name='stack_entries', verbose_name='Peptídeo vinculado'
    )
    name = models.CharField('Nome', max_length=200)
    role = models.TextField('Papel')
    dose = models.CharField('Dose', max_length=300)
    timing = models.CharField('Timing', max_length=200)
    order = models.PositiveIntegerField('Ordem', default=0)

    class Meta:
        verbose_name = 'Peptídeo do stack'
        verbose_name_plural = 'Peptídeos do stack'
        ordering = ['order']

    def __str__(self):
        return self.name


class StackReference(models.Model):
    stack = models.ForeignKey(Stack, on_delete=models.CASCADE, related_name='references')
    text = models.TextField('Referência')
    order = models.PositiveIntegerField('Ordem', default=0)

    class Meta:
        verbose_name = 'Referência do stack'
        verbose_name_plural = 'Referências do stack'
        ordering = ['order']

    def __str__(self):
        return self.text[:80]
