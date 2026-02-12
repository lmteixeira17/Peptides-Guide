var peptidesPart3 = [
  // ============================================================
  // SISTEMA IMUNOLÓGICO
  // ============================================================
  {
    id: "thymosin-alpha-1",
    name: "Thymosin Alpha 1",
    aka: "Zadaxin",
    category: "immune",
    categoryLabel: "Sistema Imunológico",
    description: "Peptídeo derivado da timosina, uma proteína produzida pelo timo. A Timosina Alfa 1 é um imunomodulador potente, aprovado em diversos países para o tratamento de hepatite B e C crônica, além de ser utilizada como adjuvante em protocolos de vacinação e imunodeficiências. Atua diretamente na maturação e ativação de células T, fortalecendo a resposta imune adaptativa.",
    mechanism: "Atua estimulando a diferenciação e maturação de células T no timo, aumentando a expressão de receptores de células T e moléculas do MHC classe I. Promove a ativação de células dendríticas, células NK e a produção de citocinas como IL-2 e interferon-alfa, modulando a resposta imune inata e adaptativa de forma equilibrada.",
    benefits: [
      "Modulação do sistema imunológico",
      "Ativação e maturação de células T",
      "Tratamento adjuvante de hepatite B e C crônica",
      "Potencialização da resposta vacinal",
      "Suporte imunológico em imunodeficiências"
    ],
    sideEffects: [
      { name: "Reações no local da injeção", severity: "occasional" },
      { name: "Erupção cutânea", severity: "rare" }
    ],
    dosage: [
      {
        protocol: "Padrão",
        dose: "1,6 mg subcutâneo 2x/semana",
        notes: "Protocolo aprovado em diversos países. Ciclos de 6 a 12 meses dependendo da indicação clínica."
      }
    ],
    administration: "Subcutânea",
    halfLife: "~2 horas",
    status: "approved",
    statusLabel: "Aprovado em alguns países",
    references: [
      "Garaci E et al., 2012. 'Thymosin alpha 1: from bench to bedside.' Ann N Y Acad Sci.",
      "Tuthill C et al., 2010. 'Thymosin alpha 1 - past clinical experience and future promise.' Ann N Y Acad Sci."
    ]
  },
  {
    id: "thymalin",
    name: "Thymalin/Thymulin",
    aka: "Peptídeo Tímico",
    category: "immune",
    categoryLabel: "Sistema Imunológico",
    description: "Peptídeo tímico natural envolvido na regulação do sistema imunológico. A Timalina é extraída ou sintetizada a partir de fatores do timo e tem sido estudada por seu potencial em restaurar a função tímica e rejuvenescer o sistema imunológico, especialmente em idosos com involução tímica.",
    mechanism: "Atua restaurando a função do timo e modulando a imunidade celular. Promove a diferenciação de linfócitos T imaturos, regula o equilíbrio entre subpopulações de células T (CD4/CD8) e estimula a produção de fatores tímicos endógenos, contribuindo para a restauração da competência imunológica.",
    benefits: [
      "Regulação do sistema imunológico",
      "Restauração da função tímica",
      "Efeito anti-envelhecimento do sistema imune",
      "Melhora da imunidade celular em idosos"
    ],
    sideEffects: [
      { name: "Reações alérgicas leves", severity: "rare" }
    ],
    dosage: [
      {
        protocol: "Padrão",
        dose: "5-10 mg/dia por 5-10 dias",
        notes: "Protocolo de curta duração. Pode ser repetido a cada 6 meses conforme necessidade clínica."
      }
    ],
    administration: "Intramuscular",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "kpv",
    name: "KPV",
    aka: "Lisina-Prolina-Valina (fragmento do alfa-MSH)",
    category: "immune",
    categoryLabel: "Sistema Imunológico",
    description: "Tripeptídeo derivado do hormônio alfa-melanócito-estimulante (alfa-MSH), composto pelos aminoácidos lisina, prolina e valina. O KPV possui propriedades anti-inflamatórias potentes sem os efeitos melanogênicos do alfa-MSH completo, sendo estudado para condições inflamatórias intestinais e cutâneas.",
    mechanism: "Inibe a via NF-kB, reduzindo a produção de citocinas pró-inflamatórias como TNF-alfa, IL-6 e IL-1beta. Atua diretamente em células imunes e epiteliais, modulando a resposta inflamatória. Também demonstra atividade antimicrobiana direta contra certas bactérias e fungos.",
    benefits: [
      "Potente ação anti-inflamatória",
      "Melhora da saúde intestinal",
      "Atividade antimicrobiana",
      "Alívio de sintomas de doenças inflamatórias intestinais (DII)"
    ],
    sideEffects: [
      { name: "Efeitos adversos mínimos documentados", severity: "rare" }
    ],
    dosage: [
      {
        protocol: "Subcutâneo",
        dose: "200-500 mcg/dia",
        notes: "Pode ser administrado por via subcutânea, oral ou tópica dependendo da indicação."
      },
      {
        protocol: "Oral/Tópico",
        dose: "200-500 mcg/dia",
        notes: "A via oral é utilizada para condições intestinais; a tópica para condições cutâneas."
      }
    ],
    administration: "Subcutânea/Oral/Tópica",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "glutathione",
    name: "Glutationa",
    aka: "GSH, Master Antioxidant",
    category: "immune",
    categoryLabel: "Sistema Imunológico",
    description: "Tripeptídeo composto por glutamato, cisteína e glicina, considerado o principal antioxidante endógeno do corpo humano. A glutationa desempenha papel crucial na desintoxicação hepática, proteção celular contra estresse oxidativo e suporte ao sistema imunológico. É amplamente utilizada em protocolos de saúde integrativa.",
    mechanism: "Atua como principal substrato do sistema antioxidante celular, neutralizando radicais livres e espécies reativas de oxigênio. Participa da fase II da desintoxicação hepática por conjugação com toxinas e xenobióticos. Regenera outros antioxidantes como vitaminas C e E. Suporta a função mitocondrial e a proliferação de linfócitos.",
    benefits: [
      "Desintoxicação hepática e celular",
      "Proteção antioxidante potente",
      "Clareamento e luminosidade da pele",
      "Suporte à função hepática",
      "Fortalecimento do sistema imunológico"
    ],
    sideEffects: [
      { name: "Náusea (durante infusão IV)", severity: "occasional" },
      { name: "Cólicas abdominais", severity: "occasional" },
      { name: "Clareamento da pele com uso prolongado em altas doses", severity: "common" }
    ],
    dosage: [
      {
        protocol: "Intravenoso",
        dose: "600-1500 mg IV, 1-3x/semana",
        notes: "Infusão intravenosa para maior biodisponibilidade. Administrar lentamente para minimizar efeitos adversos."
      },
      {
        protocol: "Oral",
        dose: "250-500 mg/dia",
        notes: "A forma oral tem biodisponibilidade limitada. Formas lipossomal ou acetilada podem melhorar a absorção."
      }
    ],
    administration: "Intravenosa/Oral",
    halfLife: "Curta (via IV)",
    status: "approved",
    statusLabel: "Aprovado como suplemento"
  },

  // ============================================================
  // HORMONAL E REPRODUTIVO
  // ============================================================
  {
    id: "hcg",
    name: "HCG",
    aka: "Gonadotrofina Coriônica Humana",
    category: "hormonal",
    categoryLabel: "Hormonal e Reprodutivo",
    description: "Hormônio glicoproteico produzido naturalmente pela placenta durante a gestação. O HCG é amplamente utilizado em medicina reprodutiva para indução da ovulação e estimulação da produção de testosterona. Em homens em terapia de reposição de testosterona (TRT), é utilizado para manter a função testicular e a fertilidade.",
    mechanism: "Mimetiza a ação do hormônio luteinizante (LH), ligando-se aos receptores de LH nas células de Leydig dos testículos, estimulando a produção de testosterona e espermatogênese. Nas mulheres, estimula a maturação final do folículo ovariano e a ovulação. Mantém a função testicular durante supressão exógena de gonadotrofinas.",
    benefits: [
      "Estimulação da produção de testosterona",
      "Suporte à fertilidade masculina e feminina",
      "Manutenção da função testicular durante TRT"
    ],
    sideEffects: [
      { name: "Dor de cabeça", severity: "occasional" },
      { name: "Alterações de humor", severity: "occasional" },
      { name: "Retenção hídrica", severity: "occasional" },
      { name: "Ginecomastia em homens", severity: "rare" }
    ],
    dosage: [
      {
        protocol: "Suporte à TRT",
        dose: "250-500 UI, 2-3x/semana",
        notes: "Dose de manutenção para preservar a função testicular durante terapia de reposição de testosterona."
      },
      {
        protocol: "Protocolo de Fertilidade",
        dose: "1.000-5.000 UI conforme protocolo",
        notes: "Doses mais altas utilizadas em protocolos de fertilidade sob supervisão médica rigorosa."
      }
    ],
    administration: "Intramuscular/Subcutânea",
    halfLife: "~24-36 horas",
    status: "approved",
    statusLabel: "Aprovado pela FDA",
    references: [
      "Coviello AD et al., 2008. 'Low-dose human chorionic gonadotropin maintains intratesticular testosterone in normal men with testosterone-induced gonadotropin suppression.' J Clin Endocrinol Metab."
    ]
  },
  {
    id: "pt-141",
    name: "PT-141",
    aka: "Bremelanotida, Vyleesi",
    category: "hormonal",
    categoryLabel: "Hormonal e Reprodutivo",
    description: "Peptídeo sintético análogo da melanocortina, aprovado pela FDA sob o nome comercial Vyleesi para o tratamento do transtorno do desejo sexual hipoativo (TDSH) em mulheres na pré-menopausa. Diferentemente de outros tratamentos para disfunção sexual, atua no sistema nervoso central através dos receptores de melanocortina.",
    mechanism: "Agonista dos receptores de melanocortina tipo 4 (MC4R) no sistema nervoso central. Atua no hipotálamo modulando vias neurais relacionadas ao desejo e excitação sexual. Diferente dos inibidores de PDE5, não atua na vasodilatação periférica, mas sim na ativação central do desejo sexual.",
    benefits: [
      "Tratamento da disfunção sexual",
      "Aumento da libido"
    ],
    sideEffects: [
      { name: "Náusea", severity: "common" },
      { name: "Rubor facial", severity: "common" },
      { name: "Dor de cabeça", severity: "occasional" },
      { name: "Reações no local da injeção", severity: "occasional" },
      { name: "Hipertensão transitória", severity: "occasional" }
    ],
    dosage: [
      {
        protocol: "Padrão (aprovado)",
        dose: "1,75 mg subcutâneo conforme necessidade",
        notes: "Administrar pelo menos 45 minutos antes da atividade sexual. Máximo de 1 dose/dia e 8 doses/mês."
      }
    ],
    administration: "Subcutânea",
    halfLife: "~2,7 horas",
    status: "approved",
    statusLabel: "Aprovado pela FDA",
    references: [
      "Kingsberg SA et al., 2019. 'Bremelanotide for the treatment of hypoactive sexual desire disorder.' Obstet Gynecol. (RECONNECT trials)",
      "Clayton AH et al., 2016. 'Bremelanotide for female sexual dysfunctions in premenopausal women.' Exp Opin Investig Drugs."
    ]
  },
  {
    id: "gonadorelin",
    name: "Gonadorelina",
    aka: "GnRH sintético",
    category: "hormonal",
    categoryLabel: "Hormonal e Reprodutivo",
    description: "Forma sintética do hormônio liberador de gonadotrofinas (GnRH), idêntico ao peptídeo natural produzido pelo hipotálamo. Aprovado originalmente como ferramenta diagnóstica para avaliar a função hipofisária, também é utilizado off-label como adjuvante em terapias hormonais para estimular a produção endógena de LH e FSH.",
    mechanism: "Liga-se aos receptores de GnRH na hipófise anterior, estimulando a liberação pulsátil de hormônio luteinizante (LH) e hormônio folículo-estimulante (FSH). A administração em pulsos mimetiza a secreção fisiológica, mantendo a sensibilidade dos receptores hipofisários e a produção hormonal gonadal.",
    benefits: [
      "Estimulação da produção de LH e FSH",
      "Suporte à fertilidade",
      "Adjuvante em terapia de reposição de testosterona"
    ],
    sideEffects: [
      { name: "Dor de cabeça", severity: "occasional" },
      { name: "Rubor facial", severity: "occasional" },
      { name: "Reações no local da injeção", severity: "occasional" },
      { name: "Náusea", severity: "rare" }
    ],
    dosage: [
      {
        protocol: "Suporte Hormonal",
        dose: "100 mcg subcutâneo, 2x/semana",
        notes: "Utilizado como adjuvante durante TRT para manter a função do eixo HPG. Ajustar conforme resposta laboratorial."
      }
    ],
    administration: "Subcutânea/Intravenosa",
    halfLife: "~4 minutos",
    status: "approved",
    statusLabel: "Aprovado como diagnóstico"
  },
  {
    id: "triptorelin",
    name: "Triptorelina",
    aka: "Trelstar, Decapeptyl",
    category: "hormonal",
    categoryLabel: "Hormonal e Reprodutivo",
    description: "Agonista do GnRH de longa ação, aprovado pela FDA para o tratamento de câncer de próstata avançado e endometriose. Em doses baixas únicas, também é utilizado em protocolos de reinício da produção endógena de testosterona após uso prolongado de esteroides anabolizantes, explorando o efeito de estimulação inicial antes da dessensibilização hipofisária.",
    mechanism: "Como agonista do GnRH, inicialmente causa uma liberação intensa de LH e FSH (efeito flare). Com administração contínua, dessensibiliza os receptores de GnRH na hipófise, suprimindo a produção de gonadotrofinas e hormônios sexuais. Em dose única baixa, o efeito flare é utilizado terapeuticamente para reiniciar o eixo HPG.",
    benefits: [
      "Tratamento de câncer de próstata",
      "Tratamento de endometriose",
      "Reinício da produção de testosterona (protocolo de dose única baixa)"
    ],
    sideEffects: [
      { name: "Ondas de calor", severity: "common" },
      { name: "Diminuição inicial da libido", severity: "common" },
      { name: "Dor de cabeça", severity: "occasional" },
      { name: "Dor no local da injeção", severity: "occasional" }
    ],
    dosage: [
      {
        protocol: "Tratamento Contínuo",
        dose: "3,75 mg/mês intramuscular",
        notes: "Dose mensal para supressão hormonal em câncer de próstata ou endometriose."
      },
      {
        protocol: "Reinício de Testosterona",
        dose: "100 mcg dose única",
        notes: "Protocolo de dose única baixa para reiniciar o eixo HPG após uso de esteroides anabolizantes. Utiliza o efeito flare inicial."
      }
    ],
    administration: "Intramuscular",
    halfLife: "~8 horas",
    status: "approved",
    statusLabel: "Aprovado pela FDA"
  },
  {
    id: "kisspeptin-10",
    name: "Kisspeptina-10",
    aka: "Metastina, KISS1",
    category: "hormonal",
    categoryLabel: "Hormonal e Reprodutivo",
    description: "Neuropeptídeo endógeno produzido por neurônios hipotalâmicos, que desempenha papel fundamental na regulação do eixo reprodutivo. A Kisspeptina-10 é o fragmento ativo mínimo da kisspeptina que estimula a liberação de GnRH e está em pesquisa ativa como potencial tratamento para distúrbios reprodutivos.",
    mechanism: "Liga-se ao receptor GPR54 (KISS1R) nos neurônios produtores de GnRH no hipotálamo, estimulando a liberação pulsátil de GnRH. Isso resulta na secreção subsequente de LH e FSH pela hipófise anterior, regulando a função gonadal. É considerada o principal regulador upstream do eixo reprodutivo.",
    benefits: [
      "Estimulação da liberação de GnRH",
      "Regulação dos hormônios reprodutivos",
      "Pesquisa em fertilidade e distúrbios reprodutivos"
    ],
    sideEffects: [
      { name: "Rubor facial", severity: "occasional" },
      { name: "Dor de cabeça", severity: "rare" }
    ],
    dosage: [
      {
        protocol: "Pesquisa Clínica",
        dose: "1-10 nmol/kg IV em estudos",
        notes: "Doses utilizadas em estudos clínicos. Ainda não há protocolos clínicos padronizados para uso terapêutico."
      }
    ],
    administration: "Intravenosa/Subcutânea",
    halfLife: "~28 minutos",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "oxytocin",
    name: "Ocitocina",
    aka: "Hormônio do amor, Pitocin",
    category: "hormonal",
    categoryLabel: "Hormonal e Reprodutivo",
    description: "Hormônio neuropeptídeo produzido pelo hipotálamo e liberado pela neuro-hipófise, com papéis fundamentais no parto, amamentação e comportamento social. Aprovado pela FDA para indução do trabalho de parto, a ocitocina também é estudada por seus efeitos sobre vínculo social, ansiedade e comportamento afetivo quando administrada por via nasal.",
    mechanism: "Liga-se aos receptores de ocitocina no útero (promovendo contrações), nas glândulas mamárias (ejeção do leite) e em regiões cerebrais como amígdala e córtex pré-frontal (modulando comportamento social e emocional). Reduz a atividade da amígdala, diminuindo respostas de medo e ansiedade, e promove comportamentos pró-sociais.",
    benefits: [
      "Fortalecimento do vínculo social e afetivo",
      "Redução da ansiedade",
      "Indução do trabalho de parto",
      "Ejeção do leite materno"
    ],
    sideEffects: [
      { name: "Náusea", severity: "occasional" },
      { name: "Dor de cabeça", severity: "occasional" },
      { name: "Irritação nasal (via nasal)", severity: "occasional" }
    ],
    dosage: [
      {
        protocol: "Efeitos Comportamentais",
        dose: "10-24 UI intranasal",
        notes: "Administração nasal para efeitos sobre comportamento social e ansiedade. Uso ainda majoritariamente em pesquisa."
      }
    ],
    administration: "Nasal/Intravenosa",
    halfLife: "~3-5 minutos (IV)",
    status: "approved",
    statusLabel: "Aprovado pela FDA (indução de parto)"
  },
  {
    id: "hmg",
    name: "HMG",
    aka: "Gonadotrofina Menopáusica Humana, Menotropina",
    category: "hormonal",
    categoryLabel: "Hormonal e Reprodutivo",
    description: "Preparação purificada contendo uma combinação de FSH (hormônio folículo-estimulante) e LH (hormônio luteinizante), originalmente extraída da urina de mulheres na pós-menopausa. É amplamente utilizada em tratamentos de fertilidade para estimular o desenvolvimento folicular ovariano e a espermatogênese.",
    mechanism: "Fornece FSH e LH exógenos que atuam diretamente nas gônadas. O FSH estimula o desenvolvimento folicular nos ovários e a espermatogênese nos testículos. O LH complementa a ação do FSH, promovendo a maturação folicular final e a produção de esteroides gonadais, incluindo estrogênio e testosterona.",
    benefits: [
      "Tratamento de infertilidade",
      "Estimulação da espermatogênese",
      "Indução da ovulação"
    ],
    sideEffects: [
      { name: "Reações no local da injeção", severity: "common" },
      { name: "Síndrome de hiperestimulação ovariana em mulheres", severity: "occasional" },
      { name: "Dor de cabeça", severity: "occasional" },
      { name: "Alterações de humor", severity: "occasional" }
    ],
    dosage: [
      {
        protocol: "Padrão",
        dose: "75-150 UI/dia ou em dias alternados",
        notes: "Dose ajustada conforme resposta ovariana ou testicular. Requer monitoramento com ultrassom e exames hormonais."
      }
    ],
    administration: "Intramuscular/Subcutânea",
    halfLife: "Variável",
    status: "approved",
    statusLabel: "Aprovado"
  },
  {
    id: "b7-33",
    name: "B7-33",
    aka: "Agonista do receptor de relaxina",
    category: "hormonal",
    categoryLabel: "Hormonal e Reprodutivo",
    description: "Peptídeo sintético que atua como agonista seletivo do receptor de relaxina RXFP1. Desenvolvido como análogo simplificado da relaxina-2 humana, o B7-33 mantém os efeitos anti-fibróticos e cardioprotetores da relaxina natural, sendo estudado em modelos pré-clínicos para insuficiência cardíaca e fibrose.",
    mechanism: "Ativa seletivamente o receptor RXFP1, desencadeando vias de sinalização que promovem a remodelação da matriz extracelular, inibem a fibrose e promovem vasodilatação. Reduz a deposição de colágeno e a ativação de fibroblastos, com efeitos benéficos demonstrados em modelos de fibrose cardíaca e pulmonar.",
    benefits: [
      "Efeito anti-fibrótico",
      "Proteção cardiovascular",
      "Potencial tratamento para insuficiência cardíaca"
    ],
    sideEffects: [
      { name: "Efeitos adversos não bem caracterizados (fase pré-clínica)", severity: "rare" }
    ],
    dosage: [
      {
        protocol: "Pré-clínico",
        dose: "Estudado em modelos pré-clínicos",
        notes: "Ainda em fase pré-clínica. Doses humanas não estabelecidas."
      }
    ],
    administration: "Subcutânea",
    halfLife: "Não estabelecida",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "acth-1-39",
    name: "ACTH 1-39",
    aka: "Hormônio Adrenocorticotrófico, Corticotrofina, Acthar",
    category: "hormonal",
    categoryLabel: "Hormonal e Reprodutivo",
    description: "Hormônio peptídico de 39 aminoácidos produzido pela hipófise anterior, responsável por estimular o córtex adrenal a produzir cortisol e outros corticosteroides. Aprovado sob o nome comercial Acthar Gel para diversas condições, incluindo espasmos infantis, exacerbações de esclerose múltipla e síndrome nefrótica.",
    mechanism: "Liga-se ao receptor de melanocortina tipo 2 (MC2R) no córtex adrenal, ativando a via do AMPc e estimulando a síntese e secreção de cortisol, aldosterona e andrógenos adrenais. Também interage com outros receptores de melanocortina (MC1R, MC3R, MC5R), mediando efeitos anti-inflamatórios e imunomoduladores independentes da via adrenal.",
    benefits: [
      "Estimulação da função adrenal",
      "Ação anti-inflamatória (espasmos infantis, exacerbações de esclerose múltipla, síndrome nefrótica)"
    ],
    sideEffects: [
      { name: "Retenção de líquidos", severity: "common" },
      { name: "Aumento do apetite", severity: "common" },
      { name: "Alterações de humor", severity: "occasional" },
      { name: "Elevação da glicemia", severity: "occasional" },
      { name: "Supressão adrenal (com uso crônico)", severity: "occasional" }
    ],
    dosage: [
      {
        protocol: "Padrão",
        dose: "40-80 UI IM/SC",
        notes: "Dose variável conforme a condição tratada. Uso crônico requer monitoramento cuidadoso do eixo HPA e glicemia."
      }
    ],
    administration: "Intramuscular/Subcutânea",
    halfLife: "~10 minutos",
    status: "approved",
    statusLabel: "Aprovado (Acthar)"
  },

  // ============================================================
  // SONO
  // ============================================================
  {
    id: "dsip",
    name: "DSIP",
    aka: "Peptídeo Indutor do Sono Delta",
    category: "sleep",
    categoryLabel: "Sono",
    description: "Neuropeptídeo descoberto em 1977, naturalmente presente no cérebro humano, associado à indução e regulação do sono de ondas delta (sono profundo). O DSIP é estudado como modulador do sono, do estresse e da percepção de dor, sendo utilizado em protocolos experimentais para melhora da qualidade do sono.",
    mechanism: "Modula a atividade de neurotransmissores envolvidos no ciclo sono-vigília, promovendo o aumento das ondas delta cerebrais associadas ao sono profundo restaurador. Atua em múltiplos sistemas, incluindo GABAérgico, serotoninérgico e opioide endógeno, além de modular a liberação de cortisol e ACTH, contribuindo para a redução do estresse.",
    benefits: [
      "Melhora da qualidade do sono",
      "Promoção do sono de ondas delta (profundo)",
      "Redução do estresse",
      "Modulação da percepção de dor"
    ],
    sideEffects: [
      { name: "Sonolência matinal residual", severity: "occasional" },
      { name: "Dor de cabeça", severity: "rare" }
    ],
    dosage: [
      {
        protocol: "Padrão",
        dose: "100-300 mcg antes de dormir",
        notes: "Administrar 30-60 minutos antes do horário desejado de sono. Ciclos de 2-4 semanas com intervalo."
      }
    ],
    administration: "Subcutânea/Nasal/Intravenosa",
    halfLife: "~15 minutos",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "melatonin-injectable",
    name: "Melatonina (forma injetável)",
    aka: "Hormônio do sono, N-acetil-5-metoxitriptamina",
    category: "sleep",
    categoryLabel: "Sono",
    description: "Hormônio produzido pela glândula pineal em resposta à escuridão, regulador principal do ritmo circadiano. A forma injetável oferece biodisponibilidade superior à oral e é utilizada em protocolos de regulação do sono, suporte imunológico e como potente antioxidante endógeno.",
    mechanism: "Ativa os receptores de melatonina MT1 e MT2 no núcleo supraquiasmático do hipotálamo, principal relógio biológico do corpo. O receptor MT1 promove a sonolência, enquanto o MT2 regula o ajuste do ritmo circadiano. Também atua como antioxidante direto, neutralizando radicais livres, e modula a função imunológica através da ação em células T e NK.",
    benefits: [
      "Regulação do sono e do ritmo circadiano",
      "Suporte ao ciclo circadiano",
      "Ação antioxidante",
      "Suporte ao sistema imunológico"
    ],
    sideEffects: [
      { name: "Sonolência matinal", severity: "occasional" },
      { name: "Sonhos vívidos", severity: "occasional" },
      { name: "Dor de cabeça", severity: "rare" }
    ],
    dosage: [
      {
        protocol: "Padrão",
        dose: "0,5-10 mg antes de dormir",
        notes: "Iniciar com dose baixa (0,5-1 mg) e ajustar conforme resposta. Doses maiores não são necessariamente mais eficazes. Disponível em forma injetável e oral."
      }
    ],
    administration: "Subcutânea/Oral",
    halfLife: "~40-60 minutos",
    status: "approved",
    statusLabel: "Aprovado como suplemento"
  },

  // ============================================================
  // COMPOSIÇÃO CORPORAL
  // ============================================================
  {
    id: "l-carnitine",
    name: "L-Carnitina",
    aka: "Levocarnitina",
    category: "body-comp",
    categoryLabel: "Composição Corporal",
    description: "Derivado de aminoácido sintetizado a partir de lisina e metionina, essencial para o transporte de ácidos graxos de cadeia longa para a matriz mitocondrial, onde são oxidados para produção de energia. Aprovado como suplemento e disponível em formas oral e injetável, amplamente utilizado para otimização do metabolismo lipídico e desempenho esportivo.",
    mechanism: "Atua como transportador de ácidos graxos de cadeia longa através da membrana mitocondrial interna via sistema carnitina palmitoiltransferase (CPT). Dentro da mitocôndria, os ácidos graxos são submetidos à beta-oxidação para produção de ATP. Também participa da remoção de ésteres de acil-CoA tóxicos e melhora a sensibilidade à insulina.",
    benefits: [
      "Otimização do metabolismo de gordura",
      "Aumento da produção de energia celular",
      "Melhora do desempenho em exercícios",
      "Suporte à saúde cardiovascular"
    ],
    sideEffects: [
      { name: "Náusea", severity: "occasional" },
      { name: "Desconforto gastrointestinal", severity: "occasional" },
      { name: "Odor corporal de peixe em doses elevadas", severity: "occasional" }
    ],
    dosage: [
      {
        protocol: "Oral",
        dose: "600-2000 mg/dia",
        notes: "Dose oral dividida em 2-3 tomadas. Melhor absorção com carboidratos."
      },
      {
        protocol: "Injetável",
        dose: "600-2000 mg IM ou IV",
        notes: "Via injetável oferece maior biodisponibilidade. Frequência conforme orientação médica."
      }
    ],
    administration: "Oral/Intramuscular/Intravenosa",
    halfLife: "Variável conforme via de administração",
    status: "approved",
    statusLabel: "Aprovado como suplemento",
    references: [
      "Pooyandjoo M et al., 2016. 'The effect of (L-)carnitine on weight loss in adults: a systematic review and meta-analysis.' Obes Rev.",
      "Fielding R et al., 2018. 'L-Carnitine Supplementation in Recovery after Exercise.' Nutrients."
    ]
  },
  {
    id: "lipo-c",
    name: "Lipo-C (MIC + B12)",
    aka: "Injeção lipotrópica MIC",
    category: "body-comp",
    categoryLabel: "Composição Corporal",
    description: "Formulação injetável composta por agentes lipotrópicos — Metionina, Inositol e Colina (MIC) — combinados com vitamina B12 e outros nutrientes do complexo B. Esta combinação visa otimizar o metabolismo hepático de gorduras, fornecer energia e suportar processos de desintoxicação. Amplamente utilizado em clínicas de medicina estética e emagrecimento.",
    mechanism: "A Metionina atua como doador de grupos metil e auxilia na quebra de gorduras no fígado. O Inositol participa da sinalização da insulina e do metabolismo lipídico. A Colina é essencial para o transporte de gordura hepática e prevenção de esteatose. A vitamina B12 atua como cofator em reações de metilação e produção de energia celular.",
    benefits: [
      "Suporte ao metabolismo de gorduras",
      "Desintoxicação hepática",
      "Aumento de energia",
      "Suplementação de vitamina B12"
    ],
    sideEffects: [
      { name: "Dor no local da injeção", severity: "occasional" },
      { name: "Desconforto gastrointestinal", severity: "occasional" },
      { name: "Reação alérgica", severity: "rare" }
    ],
    dosage: [
      {
        protocol: "Padrão",
        dose: "1 injeção, 1-2x/semana",
        notes: "Dose e composição variam entre farmácias de manipulação. Geralmente utilizado em ciclos durante programas de emagrecimento."
      }
    ],
    administration: "Intramuscular",
    halfLife: "Varia conforme componente",
    status: "research",
    statusLabel: "Não aprovado pela FDA como combinação"
  },
  {
    id: "lipo-b",
    name: "Lipo-B",
    aka: "Injeção lipotrópica com complexo B",
    category: "body-comp",
    categoryLabel: "Composição Corporal",
    description: "Formulação injetável lipotrópica à base de vitaminas do complexo B, projetada para otimizar o metabolismo energético e o metabolismo de gorduras. Utilizada em clínicas de saúde e emagrecimento como suplementação para energia e suporte metabólico.",
    mechanism: "As vitaminas do complexo B atuam como cofatores essenciais em diversas reações do metabolismo energético, incluindo o ciclo de Krebs, beta-oxidação de ácidos graxos e metabolismo de aminoácidos. A suplementação injetável garante biodisponibilidade total, beneficiando especialmente indivíduos com absorção oral comprometida.",
    benefits: [
      "Aumento de energia",
      "Suporte ao metabolismo de gorduras",
      "Suplementação de vitaminas do complexo B"
    ],
    sideEffects: [
      { name: "Desconforto no local da injeção", severity: "occasional" },
      { name: "Náusea", severity: "rare" }
    ],
    dosage: [
      {
        protocol: "Padrão",
        dose: "1 injeção, 1-2x/semana",
        notes: "Composição varia entre farmácias. Geralmente utilizado como parte de programas de emagrecimento e bem-estar."
      }
    ],
    administration: "Intramuscular",
    halfLife: "Varia conforme componente",
    status: "research",
    statusLabel: "Não aprovado pela FDA como combinação"
  },
  {
    id: "5-amino-1mq",
    name: "5-Amino-1MQ",
    aka: "Inibidor de NNMT",
    category: "body-comp",
    categoryLabel: "Composição Corporal",
    description: "Molécula pequena que inibe a enzima nicotinamida N-metiltransferase (NNMT), uma enzima superexpressa no tecido adiposo de indivíduos obesos. A inibição da NNMT leva ao aumento dos níveis de NAD+ intracelular, promovendo maior gasto energético e redução do acúmulo de gordura. É um composto promissor em pesquisa contra a obesidade.",
    mechanism: "Inibe seletivamente a NNMT, enzima que degrada NAD+ e S-adenosilmetionina (SAM) no tecido adiposo. A inibição resulta em aumento dos níveis de NAD+ e SAM, potencializando o metabolismo energético celular, ativando sirtuínas e promovendo a lipólise. Também reduz a diferenciação de pré-adipócitos em adipócitos maduros.",
    benefits: [
      "Modulação do metabolismo de células adiposas",
      "Aumento dos níveis de NAD+",
      "Maior gasto energético",
      "Efeito anti-obesidade"
    ],
    sideEffects: [
      { name: "Efeitos adversos não bem caracterizados", severity: "rare" },
      { name: "Desconforto gastrointestinal", severity: "occasional" }
    ],
    dosage: [
      {
        protocol: "Padrão (pesquisa)",
        dose: "50-100 mg/dia oral",
        notes: "Composto em fase de pesquisa. Doses baseadas em estudos pré-clínicos e uso experimental."
      }
    ],
    administration: "Oral/Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "slu-pp-332",
    name: "SLU-PP-332",
    aka: "Agonista de ERR, Mimético de exercício",
    category: "body-comp",
    categoryLabel: "Composição Corporal",
    description: "Composto sintético que atua como agonista dos receptores relacionados ao estrogênio (ERR), uma família de receptores nucleares que regulam o metabolismo energético e a biogênese mitocondrial. Classificado como mimético do exercício, o SLU-PP-332 reproduz parcialmente os benefícios metabólicos do exercício físico em modelos animais.",
    mechanism: "Ativa os receptores ERRalfa, ERRbeta e ERRgama, que regulam a expressão de genes envolvidos na oxidação de ácidos graxos, fosforilação oxidativa e biogênese mitocondrial no músculo esquelético. A ativação destes receptores mimetiza as adaptações metabólicas induzidas pelo treinamento de resistência, aumentando a capacidade oxidativa muscular.",
    benefits: [
      "Efeito mimético do exercício físico",
      "Aumento da oxidação de gorduras",
      "Melhora da resistência aeróbica",
      "Aprimoramento do metabolismo energético"
    ],
    sideEffects: [
      { name: "Efeitos adversos não bem caracterizados (fase inicial de pesquisa)", severity: "rare" }
    ],
    dosage: [
      {
        protocol: "Pesquisa",
        dose: "250 mcg oral em estudos iniciais",
        notes: "Composto em fase inicial de pesquisa. Dados de segurança e eficácia em humanos ainda limitados."
      }
    ],
    administration: "Oral",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "aicar",
    name: "AICAR",
    aka: "Aminoimidazol carboxamida ribonucleotídeo, Acadesina",
    category: "body-comp",
    categoryLabel: "Composição Corporal",
    description: "Análogo de nucleosídeo que atua como ativador da AMPK (proteína quinase ativada por AMP), a principal enzima reguladora do metabolismo energético celular. Classificado como mimético do exercício, o AICAR foi extensivamente estudado por sua capacidade de reproduzir benefícios metabólicos do exercício físico, incluindo aumento da oxidação de gorduras e melhora da sensibilidade à insulina.",
    mechanism: "Após captação celular, é convertido em ZMP, um análogo do AMP que ativa diretamente a AMPK. A AMPK ativada estimula a captação de glicose independente de insulina, aumenta a beta-oxidação de ácidos graxos, promove a biogênese mitocondrial e inibe vias anabólicas como a lipogênese. Reproduz o estado metabólico de déficit energético celular induzido pelo exercício.",
    benefits: [
      "Efeito mimético do exercício físico",
      "Ativação da via AMPK",
      "Aumento da oxidação de gorduras",
      "Melhora da resistência aeróbica",
      "Aumento da sensibilidade à insulina"
    ],
    sideEffects: [
      { name: "Hipoglicemia", severity: "occasional" },
      { name: "Desconforto gastrointestinal", severity: "occasional" },
      { name: "Acidose lática em doses elevadas", severity: "rare" }
    ],
    dosage: [
      {
        protocol: "Pesquisa",
        dose: "50-500 mg/dia em pesquisa",
        notes: "Composto de pesquisa. Doses baseadas em estudos pré-clínicos e experimentais. Requer monitoramento da glicemia."
      }
    ],
    administration: "Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "adipotide",
    name: "Adipotide (FTPP)",
    aka: "Peptídeo pró-apoptótico direcionado a gordura",
    category: "body-comp",
    categoryLabel: "Composição Corporal",
    description: "Peptídeo quimérico experimental projetado para destruir seletivamente o suprimento sanguíneo do tecido adiposo, causando a apoptose (morte programada) das células de gordura. Desenvolvido originalmente para pesquisa oncológica, demonstrou perda de gordura dramática em estudos com primatas. AVISO: toxicidade renal significativa foi observada nos estudos.",
    mechanism: "Contém dois domínios funcionais: um peptídeo de direcionamento que se liga especificamente aos receptores proibidos 1 e 2 (PHB1/PHB2) na vasculatura do tecido adiposo branco, e um domínio pró-apoptótico (KLAKLAK)2 que, ao ser internalizado, destrói as membranas mitocondriais das células endoteliais vasculares do tecido adiposo, causando isquemia e apoptose das células de gordura.",
    benefits: [
      "Apoptose direcionada de células adiposas",
      "Perda rápida de gordura em modelos animais"
    ],
    sideEffects: [
      { name: "Estresse renal (observado em estudos)", severity: "common" },
      { name: "Desidratação", severity: "common" },
      { name: "Reações no local da injeção", severity: "occasional" }
    ],
    dosage: [
      {
        protocol: "Estudos em Primatas",
        dose: "0,5-1 mg/dia em estudos com primatas",
        notes: "AVISO: toxicidade renal significativa observada. Composto experimental com perfil de segurança preocupante. Não recomendado para uso humano fora de pesquisa controlada."
      }
    ],
    administration: "Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Em Pesquisa"
  },

  // ============================================================
  // OUTROS
  // ============================================================
  {
    id: "epo",
    name: "EPO",
    aka: "Eritropoietina, Epoetina alfa",
    category: "other",
    categoryLabel: "Outros",
    description: "Hormônio glicoproteico produzido principalmente pelos rins em resposta à hipóxia, responsável por estimular a produção de glóbulos vermelhos na medula óssea. A forma recombinante é aprovada pela FDA para o tratamento de anemia associada a doença renal crônica, quimioterapia e cirurgia. Também é notória por seu uso indevido como agente ergogênico em esportes de resistência.",
    mechanism: "Liga-se ao receptor de eritropoietina (EpoR) nas células progenitoras eritroides na medula óssea, ativando a via JAK2/STAT5 que promove a sobrevivência, proliferação e diferenciação dessas células em eritrócitos maduros. O aumento da massa de glóbulos vermelhos melhora a capacidade de transporte de oxigênio do sangue.",
    benefits: [
      "Estimulação da produção de glóbulos vermelhos",
      "Tratamento de anemia",
      "Melhora da capacidade de resistência aeróbica"
    ],
    sideEffects: [
      { name: "Hipertensão", severity: "common" },
      { name: "Dor de cabeça", severity: "common" },
      { name: "Sintomas gripais", severity: "occasional" },
      { name: "Risco de trombose", severity: "occasional" },
      { name: "Aplasia pura de células vermelhas", severity: "rare" }
    ],
    dosage: [
      {
        protocol: "Tratamento de Anemia",
        dose: "50-300 UI/kg, 3x/semana",
        notes: "Dose ajustada conforme hemoglobina alvo. Requer monitoramento regular de hemograma e pressão arterial. Risco de eventos tromboembólicos com hemoglobina elevada."
      }
    ],
    administration: "Subcutânea/Intravenosa",
    halfLife: "~4-13 horas",
    status: "approved",
    statusLabel: "Aprovado pela FDA (anemia)"
  },
  {
    id: "dermorphin",
    name: "Dermorfina",
    aka: "Peptídeo opioide de anfíbio",
    category: "other",
    categoryLabel: "Outros",
    description: "Heptapeptídeo opioide natural isolado da pele de rãs do gênero Phyllomedusa, com potência analgésica aproximadamente 40 vezes superior à da morfina. É utilizado exclusivamente em pesquisa por seu alto potencial de abuso e riscos significativos. AVISO: alto potencial de dependência e abuso.",
    mechanism: "Agonista altamente seletivo dos receptores opioides mu (MOR), com afinidade muito superior à da morfina. A ligação ao receptor mu ativa vias inibitórias de dor através da hiperpolarização neuronal, inibição da liberação de neurotransmissores excitatórios e ativação de vias descendentes inibitórias de dor na medula espinhal.",
    benefits: [
      "Analgesia potente (40x a potência da morfina)",
      "Ferramenta de pesquisa em farmacologia da dor"
    ],
    sideEffects: [
      { name: "Depressão respiratória em doses elevadas", severity: "common" },
      { name: "Sedação", severity: "common" },
      { name: "Náusea", severity: "occasional" },
      { name: "Risco de dependência", severity: "common" }
    ],
    dosage: [
      {
        protocol: "Pesquisa",
        dose: "Uso exclusivo em pesquisa, faixa de mcg",
        notes: "AVISO: alto potencial de abuso e dependência. Uso restrito a pesquisa. Não aprovado para uso clínico em humanos."
      }
    ],
    administration: "Diversas vias",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Apenas Pesquisa"
  },
  {
    id: "pnc-27",
    name: "PNC-27",
    aka: "Peptídeo anticâncer",
    category: "other",
    categoryLabel: "Outros",
    description: "Peptídeo sintético de 32 aminoácidos projetado para induzir apoptose seletiva em células cancerígenas. Contém uma sequência derivada da proteína p53 (supressora tumoral) fundida a um peptídeo de penetração celular. Estudos pré-clínicos demonstram sua capacidade de destruir células cancerígenas sem afetar células normais.",
    mechanism: "Liga-se seletivamente à proteína HDM-2 (MDM-2 humana) superexpressa na superfície de células cancerígenas, formando poros na membrana celular que levam à necrose e apoptose. Em células normais, onde a HDM-2 não está presente na superfície, o peptídeo não exerce efeito citotóxico, conferindo seletividade ao tratamento.",
    benefits: [
      "Apoptose seletiva de células cancerígenas",
      "Ativação da via p53",
      "Seletividade para células tumorais sem afetar células normais"
    ],
    sideEffects: [
      { name: "Efeitos adversos não bem caracterizados (fase pré-clínica)", severity: "rare" }
    ],
    dosage: [
      {
        protocol: "Pré-clínico",
        dose: "Estudado em modelos pré-clínicos",
        notes: "Composto em fase pré-clínica. Doses humanas não estabelecidas. Resultados promissores em linhagens celulares e modelos animais."
      }
    ],
    administration: "Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "frag-17-23",
    name: "Frag 17-23",
    aka: "Fragmento peptídico 17-23",
    category: "other",
    categoryLabel: "Outros",
    description: "Fragmento peptídico em fase de pesquisa. Composto experimental utilizado em estudos laboratoriais, com dados limitados sobre mecanismo de ação, eficácia e segurança em humanos.",
    mechanism: "Mecanismo de ação ainda não completamente elucidado. Trata-se de um composto de pesquisa em fase inicial de investigação, com dados pré-clínicos limitados disponíveis na literatura científica.",
    benefits: [
      "Composto de pesquisa em investigação"
    ],
    sideEffects: [
      { name: "Efeitos adversos não bem caracterizados", severity: "rare" }
    ],
    dosage: [
      {
        protocol: "Pesquisa",
        dose: "Não bem estabelecida",
        notes: "Composto experimental. Dados de dosagem para uso humano não disponíveis."
      }
    ],
    administration: "Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "ara-290",
    name: "ARA-290 (Cibinetide)",
    aka: "Cibinetida, Agonista do receptor de reparo inato",
    category: "other",
    categoryLabel: "Outros",
    description: "Peptídeo sintético de 11 aminoácidos derivado da eritropoietina, projetado para ativar seletivamente o receptor heteromérico de reparo inato (IRR) sem estimular a eritropoiese. Em ensaios clínicos de fase 2/3 para neuropatia diabética e sarcoidose, demonstrando efeitos neuroprotetores e de reparo tecidual significativos.",
    mechanism: "Ativa seletivamente o receptor de reparo inato (IRR), um heterodímero composto pelo receptor de EPO e o receptor de citocina beta comum (CD131). Este receptor é expresso em tecidos danificados e inflamados, ativando vias anti-inflamatórias, anti-apoptóticas e de reparo tecidual, sem os efeitos hematopoiéticos da eritropoietina.",
    benefits: [
      "Alívio de dor neuropática",
      "Reparo tecidual",
      "Tratamento de sarcoidose",
      "Tratamento de neuropatia diabética"
    ],
    sideEffects: [
      { name: "Reações no local da injeção", severity: "occasional" },
      { name: "Dor de cabeça", severity: "occasional" }
    ],
    dosage: [
      {
        protocol: "Ensaios Clínicos",
        dose: "4 mg/dia subcutâneo",
        notes: "Dose utilizada em ensaios clínicos de fase 2/3. Ciclos de 28 dias em estudos de neuropatia diabética."
      }
    ],
    administration: "Subcutânea",
    halfLife: "~3 minutos",
    status: "trial",
    statusLabel: "Fase 2/3 de Ensaios Clínicos"
  },
  {
    id: "vitamin-b12",
    name: "Vitamina B12 (injetável)",
    aka: "Cianocobalamina, Metilcobalamina, Hidroxocobalamina",
    category: "other",
    categoryLabel: "Outros",
    description: "Vitamina essencial do complexo B, fundamental para a formação de glóbulos vermelhos, função neurológica e síntese de DNA. A forma injetável é utilizada para tratamento de deficiência de B12, especialmente em pacientes com má absorção (como na anemia perniciosa), cirurgia bariátrica ou dietas restritivas.",
    mechanism: "Atua como cofator essencial em duas reações enzimáticas: na conversão de metilmalonil-CoA em succinil-CoA (via adenosilcobalamina, no metabolismo de ácidos graxos e aminoácidos) e na conversão de homocisteína em metionina (via metilcobalamina, essencial para a síntese de DNA e metilação). Essencial para a mielinização dos nervos e a eritropoiese.",
    benefits: [
      "Aumento de energia e disposição",
      "Saúde neurológica e manutenção da mielina",
      "Formação adequada de glóbulos vermelhos",
      "Tratamento de deficiência de vitamina B12"
    ],
    sideEffects: [
      { name: "Dor no local da injeção", severity: "occasional" },
      { name: "Diarreia leve", severity: "rare" }
    ],
    dosage: [
      {
        protocol: "Padrão",
        dose: "1000 mcg semanal IM/SC",
        notes: "Dose semanal para reposição. Pode ser necessário esquema de ataque diário por 1-2 semanas em deficiência severa, seguido de manutenção semanal ou mensal."
      }
    ],
    administration: "Intramuscular/Subcutânea",
    halfLife: "~6 dias",
    status: "approved",
    statusLabel: "Aprovado"
  }
];
