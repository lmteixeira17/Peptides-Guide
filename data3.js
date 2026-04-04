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
    administration: "Subcutânea (SC)",
    halfLife: "~2 horas",
    status: "approved",
    statusLabel: "Aprovado em alguns países",
    references: [
      "Garaci E et al., 2012. 'Thymosin alpha 1: from bench to bedside.' Ann N Y Acad Sci. <a href='https://pubmed.ncbi.nlm.nih.gov/17600290/' target='_blank'>[PubMed]</a>",
      "Tuthill C et al., 2010. 'Thymosin alpha 1 - past clinical experience and future promise.' Ann N Y Acad Sci. <a href='https://pubmed.ncbi.nlm.nih.gov/20536460/' target='_blank'>[PubMed]</a>"
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
    administration: "Intramuscular (IM)",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Em Pesquisa",
    references: [
      "Khavinson VK & Morozov VG, 2003. 'Peptides of pineal gland and thymus prolong human life.' Neuroendocrinol Lett. <a href='https://pubmed.ncbi.nlm.nih.gov/14523363/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Subcutânea (SC) / Oral (VO) / Tópica",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Em Pesquisa",
    references: [
      "Kannengiesser K et al., 2008. 'Melanocortin-derived tripeptide KPV has anti-inflammatory potential in murine models of inflammatory bowel disease.' Inflamm Bowel Dis. <a href='https://pubmed.ncbi.nlm.nih.gov/18092346/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Intravenosa (IV) / Oral (VO)",
    halfLife: "Curta (via IV)",
    status: "approved",
    statusLabel: "Aprovado como suplemento",
    references: [
      "Forman HJ et al., 2009. 'Glutathione: Overview of its protective roles, measurement, and biosynthesis.' Mol Aspects Med. <a href='https://pubmed.ncbi.nlm.nih.gov/18796312/' target='_blank'>[PubMed]</a>",
      "Richie JP et al., 2015. 'Randomized controlled trial of oral glutathione supplementation on body stores of glutathione.' Eur J Nutr. <a href='https://pubmed.ncbi.nlm.nih.gov/24791752/' target='_blank'>[PubMed]</a>"
    ]
  },
  {
    id: "zilucoplan",
    name: "Zilucoplan",
    aka: "Zilbrysq, RA101495",
    category: "immune",
    categoryLabel: "Sistema Imunológico",
    description: "Zilucoplan é um peptídeo macrocíclico sintético de 15 aminoácidos (3,5 kDa) que inibe o componente C5 do sistema complemento. Aprovado pelo FDA em outubro de 2023 (Zilbrysq) para miastenia gravis generalizada (gMG) em adultos com anticorpos anti-receptor de acetilcolina (AChR). É o primeiro inibidor peptídico subcutâneo de C5 aprovado, permitindo autoadministração diária em casa sem necessidade de infusão hospitalar.",
    mechanism: "Mecanismo dual de inibição do complemento C5: (1) liga-se ao C5 com alta afinidade, impedindo sua clivagem pela C5-convertase nos fragmentos C5a (anafilatoxina pró-inflamatória) e C5b (iniciador do complexo de ataque à membrana - MAC); (2) liga-se ao C5b pré-formado, bloqueando estericamente sua interação com C6 e impedindo a montagem do MAC (C5b-9). Na gMG com anticorpos anti-AChR, o sistema complemento ataca a junção neuromuscular, destruindo receptores de acetilcolina. O bloqueio dual previne a destruição mediada pelo complemento e restaura a transmissão neuromuscular. Contém quatro aminoácidos não-naturais e uma cadeia lipídica C16 via linker PEG para meia-vida prolongada.",
    benefits: [
      "Melhora significativa na função muscular e atividades da vida diária (MG-ADL -4,39 vs. placebo -2,30; p=0,0004)",
      "Início de ação rápido - melhora clínica significativa desde a semana 1",
      "Autoadministração subcutânea diária em casa, sem infusão hospitalar",
      "Primeiro inibidor peptídico subcutâneo de C5 aprovado para gMG",
      "Compatível com IVIg e plasmaférese sem ajuste de dose",
      "Redução de 58% no risco de piora clínica da miastenia gravis",
      "Eficácia mantida por até 60 semanas (RAISE-XT)"
    ],
    sideEffects: [
      { name: "Reações no local de injeção (hematoma, dor)", severity: "common" },
      { name: "Infecção do trato respiratório superior", severity: "common" },
      { name: "Diarreia", severity: "common" },
      { name: "Cefaleia", severity: "common" },
      { name: "Piora da miastenia gravis", severity: "occasional" },
      { name: "Infecções por Neisseria meningitidis (risco aumentado pelo bloqueio do complemento)", severity: "rare" }
    ],
    dosage: [
      { protocol: "Pacientes <56 kg", dose: "16,6mg SC 1x/dia", notes: "Autoadministração subcutânea diária. Vacinação meningocócica obrigatória pelo menos 2 semanas antes do início do tratamento (REMS)." },
      { protocol: "Pacientes 56-77 kg", dose: "23,0mg SC 1x/dia", notes: "Dose equivalente a 0,3mg/kg. Mesmo requisito de vacinação meningocócica." },
      { protocol: "Pacientes ≥77 kg", dose: "32,4mg SC 1x/dia", notes: "Dose máxima aprovada." }
    ],
    administration: "Subcutânea (SC) - autoadministração diária",
    halfLife: "~172 horas (~7 dias)",
    status: "approved",
    statusLabel: "Aprovado FDA (Outubro 2023)",
    references: [
      "Howard JF Jr et al., 2023. 'Safety and efficacy of zilucoplan in patients with generalised myasthenia gravis (RAISE): a randomised, double-blind, placebo-controlled, phase 3 study.' Lancet Neurol, 22(5), 395-406. <a href='https://pubmed.ncbi.nlm.nih.gov/37059508/' target='_blank'>[PubMed]</a>",
      "Tang GQ et al., 2023. 'Zilucoplan, a macrocyclic peptide inhibitor of human complement component 5, uses a dual mode of action to prevent terminal complement pathway activation.' Front Immunol, 14, 1213920. <a href='https://pubmed.ncbi.nlm.nih.gov/37622108/' target='_blank'>[PubMed]</a>",
      "Shirley M, 2024. 'Zilucoplan: First Approval.' Drugs, 84(1), 99-104. <a href='https://pubmed.ncbi.nlm.nih.gov/38093160/' target='_blank'>[PubMed]</a>"
    ]
  },
  {
    id: "motixafortide",
    name: "Motixafortide",
    aka: "Aphexda, BL-8040, BKT140",
    category: "immune",
    categoryLabel: "Sistema Imunológico",
    description: "Motixafortide é um peptídeo cíclico sintético de 14 resíduos que atua como antagonista potente e seletivo do receptor CXCR4, aprovado pelo FDA em setembro de 2023 (Aphexda) para mobilização de células-tronco hematopoéticas (CTH) para transplante autólogo em pacientes com mieloma múltiplo, em combinação com filgrastim (G-CSF). É a primeira nova terapia de mobilização de células-tronco aprovada desde o plerixafor (2008).",
    mechanism: "Antagonista do receptor CXCR4 com atividade de agonista inverso. Bloqueia a ligação do ligante endógeno CXCL12 (SDF-1α) ao CXCR4 com IC50 de 0,42-4,5 nM (afinidade extremamente alta). Contém seis resíduos catiônicos que formam interações eletrostáticas com resíduos ácidos do CXCR4, e duas porções químicas volumosas que restringem mudanças conformacionais, travando o receptor em estado inativo. O eixo CXCR4/CXCL12 normalmente ancora as CTH à medula óssea. Ao bloquear essa interação, o motixafortide libera as CTH para a circulação periférica, onde podem ser coletadas por aférese.",
    benefits: [
      "92,5% dos pacientes atingiram ≥6×10⁶ CD34+/kg em até 2 aféreses (vs. 26,2% com placebo; p<0,0001)",
      "88,8% atingiram a meta em uma única aférese (vs. 9,5% com placebo)",
      "Aumento de 5,6 vezes no rendimento mediano de CD34+ na primeira aférese",
      "Eficácia comprovada em subgrupos de alto risco (idade >65 anos, exposição prévia a lenalidomida)",
      "Enxerto rápido e durável confirmado após transplante"
    ],
    sideEffects: [
      { name: "Dor no local de injeção", severity: "common" },
      { name: "Eritema no local de injeção", severity: "common" },
      { name: "Prurido no local de injeção", severity: "common" },
      { name: "Rubor facial (flushing)", severity: "common" },
      { name: "Dor lombar", severity: "occasional" },
      { name: "Choque anafilático/reações de hipersensibilidade graves", severity: "rare" }
    ],
    dosage: [
      { protocol: "Pré-aférese (aprovado)", dose: "1,25mg/kg SC", notes: "Administrado 10-14 horas antes do início da aférese, em combinação com filgrastim (G-CSF) 10 mcg/kg/dia por 4 dias prévios. Máximo de 2 doses totais. Pré-medicação obrigatória: anti-histamínico H1, bloqueador H2, inibidor de leucotrienos e analgésico. Monitoramento por 1 hora após administração." }
    ],
    administration: "Subcutânea (SC) - administração em ambiente clínico",
    halfLife: "~2 horas (plasmática); ocupação do receptor >72 horas",
    status: "approved",
    statusLabel: "Aprovado FDA (Setembro 2023)",
    references: [
      "Crees ZD et al., 2023. 'Motixafortide and G-CSF to mobilize hematopoietic stem cells for autologous transplantation in multiple myeloma: a randomized phase 3 trial (GENESIS).' Nat Med, 29(4), 869-879. <a href='https://pubmed.ncbi.nlm.nih.gov/37069359/' target='_blank'>[PubMed]</a>",
      "Hoy SM, 2023. 'Motixafortide: First Approval.' Drugs, 83(17), 1635-1643. <a href='https://pubmed.ncbi.nlm.nih.gov/37996648/' target='_blank'>[PubMed]</a>",
      "Rebolledo-Bustillo M et al., 2023. 'Structural Basis of the Binding Mode of the Antineoplastic Compound Motixafortide (BL-8040) in the CXCR4 Chemokine Receptor.' Int J Mol Sci, 24(5), 4393. <a href='https://pubmed.ncbi.nlm.nih.gov/36901829/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Intramuscular (IM) / Subcutânea (SC)",
    halfLife: "~24-36 horas",
    status: "approved",
    statusLabel: "Aprovado pela FDA",
    references: [
      "Coviello AD et al., 2008. 'Low-dose human chorionic gonadotropin maintains intratesticular testosterone in normal men with testosterone-induced gonadotropin suppression.' J Clin Endocrinol Metab. <a href='https://pubmed.ncbi.nlm.nih.gov/15713727/' target='_blank'>[PubMed]</a>"
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
    administration: "Subcutânea (SC)",
    halfLife: "~2,7 horas",
    status: "approved",
    statusLabel: "Aprovado pela FDA",
    references: [
      "Kingsberg SA et al., 2019. 'Bremelanotide for the treatment of hypoactive sexual desire disorder.' Obstet Gynecol. (RECONNECT trials) <a href='https://pubmed.ncbi.nlm.nih.gov/31599847/' target='_blank'>[PubMed]</a>",
      "Clayton AH et al., 2016. 'Bremelanotide for female sexual dysfunctions in premenopausal women.' Exp Opin Investig Drugs. <a href='https://pubmed.ncbi.nlm.nih.gov/27751477/' target='_blank'>[PubMed]</a>"
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
    administration: "Subcutânea (SC) / Intravenosa (IV)",
    halfLife: "~4 minutos",
    status: "approved",
    statusLabel: "Aprovado como diagnóstico",
    references: [
      "Belchetz PE et al., 1978. 'Hypophysial responses to continuous and intermittent delivery of hypothalamic gonadotropin-releasing hormone.' Science. <a href='https://pubmed.ncbi.nlm.nih.gov/100883/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Intramuscular (IM)",
    halfLife: "~8 horas",
    status: "approved",
    statusLabel: "Aprovado pela FDA",
    references: [
      "Heger S et al., 2006. 'Long-term GnRH agonist treatment for female central precocious puberty does not impair reproductive function.' Mol Cell Endocrinol. <a href='https://pubmed.ncbi.nlm.nih.gov/16757104/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Intravenosa (IV) / Subcutânea (SC)",
    halfLife: "~28 minutos",
    status: "research",
    statusLabel: "Em Pesquisa",
    references: [
      "Dhillo WS et al., 2005. 'Kisspeptin-54 stimulates the hypothalamic-pituitary gonadal axis in human males.' J Clin Endocrinol Metab. <a href='https://pubmed.ncbi.nlm.nih.gov/39834030/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Intranasal (IN) / Intravenosa (IV)",
    halfLife: "~3-5 minutos (IV)",
    status: "approved",
    statusLabel: "Aprovado pela FDA (indução de parto)",
    references: [
      "Kosfeld M et al., 2005. 'Oxytocin increases trust in humans.' Nature. <a href='https://pubmed.ncbi.nlm.nih.gov/15931222/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Intramuscular (IM) / Subcutânea (SC)",
    halfLife: "Variável",
    status: "approved",
    statusLabel: "Aprovado",
    references: [
      "Lunenfeld B, 2004. 'Historical perspectives in gonadotrophin therapy.' Hum Reprod Update. <a href='https://pubmed.ncbi.nlm.nih.gov/15388674/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Subcutânea (SC)",
    halfLife: "Não estabelecida",
    status: "research",
    statusLabel: "Em Pesquisa",
    references: [
      "Hossain MA et al., 2016. 'The minimal active structure of human relaxin-2.' J Biol Chem. <a href='https://pubmed.ncbi.nlm.nih.gov/28988628/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Intramuscular (IM) / Subcutânea (SC)",
    halfLife: "~10 minutos",
    status: "approved",
    statusLabel: "Aprovado (Acthar)",
    references: [
      "Clark AJ & Weber A, 1998. 'Adrenocorticotropin insensitivity syndromes.' Endocr Rev. <a href='https://pubmed.ncbi.nlm.nih.gov/18493136/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Subcutânea (SC) / Intranasal (IN) / Intravenosa (IV)",
    halfLife: "~15 minutos",
    status: "research",
    statusLabel: "Em Pesquisa",
    references: [
      "Schneider-Helmert D & Schoenenberger GA, 1983. 'Effects of DSIP in man: multifunctional psychophysiological properties.' Neuropsychobiology. <a href='https://pubmed.ncbi.nlm.nih.gov/6689058/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Subcutânea (SC) / Oral (VO)",
    halfLife: "~40-60 minutos",
    status: "approved",
    statusLabel: "Aprovado como suplemento",
    references: [
      "Ferracioli-Oda E et al., 2013. 'Meta-analysis: melatonin for the treatment of primary sleep disorders.' PLoS One. <a href='https://pubmed.ncbi.nlm.nih.gov/23691095/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Oral (VO) / Intramuscular (IM) / Intravenosa (IV)",
    halfLife: "Variável conforme via de administração",
    status: "approved",
    statusLabel: "Aprovado como suplemento",
    references: [
      "Pooyandjoo M et al., 2016. 'The effect of (L-)carnitine on weight loss in adults: a systematic review and meta-analysis.' Obes Rev. <a href='https://pubmed.ncbi.nlm.nih.gov/27335245/' target='_blank'>[PubMed]</a>",
      "Fielding R et al., 2018. 'L-Carnitine Supplementation in Recovery after Exercise.' Nutrients. <a href='https://pubmed.ncbi.nlm.nih.gov/29534031/' target='_blank'>[PubMed]</a>"
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
    administration: "Intramuscular (IM)",
    halfLife: "Varia conforme componente",
    status: "research",
    statusLabel: "Não aprovado pela FDA como combinação",
    references: [
      "Chiolero RL et al., 2001. 'Effects of carnitine on lipid metabolism.' Curr Opin Clin Nutr Metab Care. <a href='https://pubmed.ncbi.nlm.nih.gov/3148036/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Intramuscular (IM)",
    halfLife: "Varia conforme componente",
    status: "research",
    statusLabel: "Não aprovado pela FDA como combinação",
    references: [
      "Craig SA, 2004. 'Betaine in human nutrition.' Am J Clin Nutr. <a href='https://pubmed.ncbi.nlm.nih.gov/15321791/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Oral (VO) / Subcutânea (SC)",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Em Pesquisa",
    references: [
      "Neelakantan H et al., 2017. 'Selective and membrane-permeable small molecule inhibitors of nicotinamide N-methyltransferase reverse high fat diet-induced obesity in mice.' Biochem Pharmacol. <a href='https://pubmed.ncbi.nlm.nih.gov/29155147/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Oral (VO)",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Em Pesquisa",
    references: [
      "Billon C et al., 2023. 'Synthetic ERR Agonist (SLU-PP-332) Induces Acute Aerobic Exercise Response and Enhances Exercise Capacity.' ACS Chem Biol. <a href='https://pubmed.ncbi.nlm.nih.gov/36988910/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Subcutânea (SC)",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Em Pesquisa",
    references: [
      "Narkar VA et al., 2008. 'AMPK and PPARdelta agonists are exercise mimetics.' Cell. <a href='https://pubmed.ncbi.nlm.nih.gov/18674809/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Subcutânea (SC)",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Em Pesquisa",
    references: [
      "Kolonin MG et al., 2004. 'Reversal of obesity by targeted ablation of adipose tissue.' Nat Med. <a href='https://pubmed.ncbi.nlm.nih.gov/15133506/' target='_blank'>[PubMed]</a>"
    ]
  },
  {
    id: "palopegteriparatide",
    name: "Palopegteriparatida",
    aka: "Yorvipath, TransCon PTH",
    category: "hormonal",
    categoryLabel: "Hormonal e Reprodutivo",
    description: "Palopegteriparatida é uma pró-droga de PTH(1-34) (teriparatida) conjugada a um carreador de polietilenoglicol ramificado (mPEG) via linker TransCon proprietário da Ascendis Pharma. Aprovada pelo FDA em agosto de 2024 como primeira e única terapia de reposição hormonal para hipoparatireoidismo em adultos. O linker sofre hidrólise espontânea em pH e temperatura fisiológicos, liberando PTH(1-34) ativo de forma sustentada ao longo de 24 horas, permitindo dosagem diária única.",
    mechanism: "Pró-droga que libera PTH(1-34) de forma controlada e sustentada. Após injeção subcutânea, o linker TransCon protege o PTH(1-34) da ligação ao receptor PTH1R, prevenindo pico hormonal agudo. O carreador PEG estende a meia-vida e previne depuração renal. A hidrólise espontânea do linker em condições fisiológicas libera PTH(1-34) ativo e seu metabólito PTH(1-33) ao longo de 24 horas. O PTH liberado atua em osso e rins: aumenta cálcio sérico por reabsorção óssea e renal, reduz fosfato sérico e estimula produção renal de 1,25-dihidroxivitamina D, replicando a fisiologia endógena do paratormônio.",
    benefits: [
      "79% dos pacientes atingiram o desfecho primário composto vs. 5% placebo (p<0,0001) no PaTHway",
      "95% alcançaram independência da terapia convencional (sem vitamina D ativa, cálcio ≤600mg/dia)",
      "Melhora significativa na função renal: aumento de eGFR de 8,9 mL/min/1,73m² em 52 semanas",
      "Primeira terapia de reposição hormonal aprovada para hipoparatireoidismo",
      "Melhora significativa em escalas de qualidade de vida (HPES) e funcionalidade física (SF-36)",
      "Sem casos de nefrolitíase reportados no grupo tratado durante o estudo pivotal"
    ],
    sideEffects: [
      { name: "Reações no local de injeção", severity: "common" },
      { name: "Sintomas vasodilatatórios (rubor, calor)", severity: "common" },
      { name: "Cefaleia", severity: "common" },
      { name: "Hipercalcemia", severity: "occasional" },
      { name: "Diarreia", severity: "occasional" },
      { name: "Hipocalcemia (na descontinuação abrupta)", severity: "occasional" },
      { name: "Risco de osteossarcoma (alerta de classe, baseado em estudos animais)", severity: "rare" }
    ],
    dosage: [
      { protocol: "Diário (aprovado)", dose: "18-30 mcg SC 1x/dia", notes: "Dose inicial de 18 mcg/dia SC, com titulação em incrementos de 3 mcg conforme cálcio sérico. Dose máxima de 30 mcg/dia. Monitoramento do cálcio sérico a cada 7-10 dias após ajuste de dose, depois a cada 4-6 semanas na manutenção. Vitamina D ativa deve ser descontinuada em até 8 semanas." }
    ],
    administration: "Subcutânea (SC) - injeção diária",
    halfLife: "~60 horas (pró-droga); liberação de PTH ativo por 24 horas",
    status: "approved",
    statusLabel: "Aprovado FDA (Agosto 2024)",
    references: [
      "Clarke BL et al., 2025. 'Efficacy and Safety of TransCon PTH in Adults With Hypoparathyroidism: 52-Week Results From the Phase 3 PaTHway Trial.' J Clin Endocrinol Metab, 110(4), 951-960. <a href='https://pubmed.ncbi.nlm.nih.gov/39376010/' target='_blank'>[PubMed]</a>",
      "Rejnmark L et al., 2024. 'Palopegteriparatide Treatment Improves Renal Function in Adults with Chronic Hypoparathyroidism: 1-Year Results from the Phase 3 PaTHway Trial.' Adv Ther, 41(6), 2500-2518. <a href='https://pubmed.ncbi.nlm.nih.gov/38691316/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Subcutânea (SC) / Intravenosa (IV)",
    halfLife: "~4-13 horas",
    status: "approved",
    statusLabel: "Aprovado pela FDA (anemia)",
    references: [
      "Jelkmann W, 2013. 'Physiology and pharmacology of erythropoietin.' Transfus Med Hemother. <a href='https://pubmed.ncbi.nlm.nih.gov/24273483/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Intravenosa (IV) / Subcutânea (SC) / Intratecal (IT)",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Apenas Pesquisa",
    references: [
      "Broccardo M et al., 1981. 'Dermorphin, a new peptide with potent opiate-like activity from the skin of Phyllomedusa sauvagei.' Br J Pharmacol. <a href='https://pubmed.ncbi.nlm.nih.gov/7287299/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Subcutânea (SC)",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Em Pesquisa",
    references: [
      "Sarafraz-Yazdi E et al., 2010. 'Anticancer peptide PNC-27 adopts an HDM-2-binding conformation and kills cancer cells by binding to HDM-2 in their membranes.' Proc Natl Acad Sci USA. <a href='https://pubmed.ncbi.nlm.nih.gov/20080680/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Subcutânea (SC)",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Em Pesquisa",
    references: [
      "Pickart L, 2008. 'The human tri-peptide GHK and tissue remodeling.' J Biomater Sci Polym Ed. <a href='https://pubmed.ncbi.nlm.nih.gov/18644225/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Subcutânea (SC)",
    halfLife: "~3 minutos",
    status: "trial",
    statusLabel: "Fase 2/3 de Ensaios Clínicos",
    references: [
      "Brines M et al., 2008. 'Nonerythropoietic, tissue-protective peptides derived from the tertiary structure of erythropoietin.' Proc Natl Acad Sci USA. <a href='https://pubmed.ncbi.nlm.nih.gov/18676614/' target='_blank'>[PubMed]</a>"
    ]
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
    administration: "Intramuscular (IM) / Subcutânea (SC)",
    halfLife: "~6 dias",
    status: "approved",
    statusLabel: "Aprovado",
    references: [
      "Stabler SP, 2013. 'Vitamin B12 Deficiency.' N Engl J Med. <a href='https://pubmed.ncbi.nlm.nih.gov/23697526/' target='_blank'>[PubMed]</a>"
    ]
  },

  // ========================================
  // SISTEMA IMUNOLOGICO
  // ========================================
  {
    id: "alpha-msh",
    name: "Alpha-MSH",
    aka: "\u03b1-MSH / Horm\u00f4nio Estimulador de Melan\u00f3citos Alfa",
    category: "immune",
    categoryLabel: "Sistema Imunol\u00f3gico",
    description: "O Alpha-MSH (\u03b1-MSH) \u00e9 um tridecapept\u00eddeo end\u00f3geno derivado da proopiomelanocortina (POMC), distinto dos pept\u00eddeos de bronzeamento Melanotan I e II. Embora compartilhe a\u00e7\u00e3o melanog\u00eanica, o \u03b1-MSH \u00e9 primariamente reconhecido por suas potentes propriedades anti-inflamat\u00f3rias e imunomoduladoras. Atua em m\u00faltiplos \u00f3rg\u00e3os e sistemas, incluindo pele, sistema nervoso central, pulm\u00f5es e intestino, com potencial terap\u00eautico em doen\u00e7as autoimunes e inflamat\u00f3rias.",
    mechanism: "Liga-se aos receptores de melanocortina MC1R, MC3R e MC5R. A ativa\u00e7\u00e3o do MC1R em c\u00e9lulas imunes (macr\u00f3fagos, neutr\u00f3filos, linf\u00f3citos) suprime a produ\u00e7\u00e3o de citocinas pr\u00f3-inflamat\u00f3rias (TNF-\u03b1, IL-1\u03b2, IL-6) e estimula citocinas anti-inflamat\u00f3rias (IL-10). Tamb\u00e9m inibe a via NF-\u03baB e atenua a fibrose tecidual. No SNC, exerce efeitos antipir\u00e9ticos e anorex\u00edgenos.",
    benefits: [
      "Potente a\u00e7\u00e3o anti-inflamat\u00f3ria sist\u00eamica",
      "Supress\u00e3o de citocinas pr\u00f3-inflamat\u00f3rias (TNF-\u03b1, IL-1\u03b2, IL-6)",
      "Efeito antifibr\u00f3tico em m\u00faltiplos tecidos",
      "Neuroprote\u00e7\u00e3o e a\u00e7\u00e3o antipir\u00e9tica",
      "Potencial em doen\u00e7as autoimunes e inflamat\u00f3rias respirat\u00f3rias"
    ],
    sideEffects: [
      { name: "Hiperpigmenta\u00e7\u00e3o cut\u00e2nea", severity: "common" },
      { name: "N\u00e1usea", severity: "occasional" },
      { name: "Rubor facial", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Pesquisa", dose: "Vari\u00e1vel conforme estudo", notes: "Sem protocolos cl\u00ednicos padronizados. Estudos pr\u00e9-cl\u00ednicos utilizam doses na faixa de microgramas via subcut\u00e2nea ou intravenosa." }
    ],
    administration: "Subcut\u00e2nea (SC) / Intravenosa (IV)",
    halfLife: "~15-20 minutos (muito curta)",
    status: "research",
    statusLabel: "Pesquisa",
    references: [
      "Dinparastisaleh R et al., 2021. 'Antifibrotic and Anti-Inflammatory Actions of \u03b1-Melanocytic Hormone: New Roles for an Old Player.' Pharmaceuticals (Basel). <a href='https://pubmed.ncbi.nlm.nih.gov/33430064/' target='_blank'>[PubMed]</a>",
      "Lonati C et al., 2020. 'Activation of Melanocortin Receptors as a Potential Strategy to Reduce Local and Systemic Reactions Induced by Respiratory Viruses.' Front Endocrinol. <a href='https://pubmed.ncbi.nlm.nih.gov/33362713/' target='_blank'>[PubMed]</a>"
    ]
  },
  {
    id: "larazotide",
    name: "Larazotide",
    aka: "AT-1001 / Larazotide Acetato",
    category: "immune",
    categoryLabel: "Sistema Imunol\u00f3gico",
    description: "Larazotide (AT-1001) \u00e9 um octapept\u00eddeo sint\u00e9tico que atua como modulador das tight junctions (jun\u00e7\u00f5es firmes) do epit\u00e9lio intestinal. Desenvolvido especificamente para doen\u00e7a cel\u00edaca, \u00e9 o primeiro f\u00e1rmaco a abordar a permeabilidade intestinal como alvo terap\u00eautico. Em ensaios cl\u00ednicos de Fase 3, demonstrou redu\u00e7\u00e3o significativa dos sintomas cel\u00edacos. Tamb\u00e9m atrai enorme interesse da comunidade de medicina funcional para s\u00edndrome do intestino perme\u00e1vel.",
    mechanism: "Atua como antagonista da zonulina, a prote\u00edna end\u00f3gena que regula a permeabilidade paracelular intestinal. Ao bloquear a a\u00e7\u00e3o da zonulina, previne a abertura das tight junctions e mant\u00e9m a integridade da barreira epitelial intestinal. Isso reduz a passagem de gl\u00fauten e outros ant\u00edgenos pela barreira intestinal, diminuindo a resposta imune e a inflama\u00e7\u00e3o associada.",
    benefits: [
      "Redu\u00e7\u00e3o de sintomas da doen\u00e7a cel\u00edaca em ensaios cl\u00ednicos",
      "Restaura\u00e7\u00e3o da integridade da barreira intestinal",
      "Primeiro f\u00e1rmaco a alvejar permeabilidade intestinal",
      "Prote\u00e7\u00e3o contra dano mucoso por an\u00f3xia/reoxigena\u00e7\u00e3o",
      "Potencial em outras condi\u00e7\u00f5es de permeabilidade intestinal alterada"
    ],
    sideEffects: [
      { name: "Cefaleia", severity: "occasional" },
      { name: "Desconforto abdominal", severity: "occasional" },
      { name: "N\u00e1usea", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Fase 3 (doen\u00e7a cel\u00edaca)", dose: "0.5mg 3x/dia", notes: "Administrado via oral 3 vezes ao dia antes das refei\u00e7\u00f5es. Dose de 0.5mg demonstrou melhor rela\u00e7\u00e3o efic\u00e1cia/seguran\u00e7a nos ensaios cl\u00ednicos." }
    ],
    administration: "Oral (VO)",
    halfLife: "Curta (a\u00e7\u00e3o local no lumen intestinal)",
    status: "trial",
    statusLabel: "Fase 3",
    references: [
      "Kim J et al., 2025. 'Larazotide Acetate Protects the Intestinal Mucosal Barrier from Anoxia/Reoxygenation Injury via Various Cellular Mechanisms.' Biomedicines. <a href='https://pubmed.ncbi.nlm.nih.gov/41153766/' target='_blank'>[PubMed]</a>",
      "Damianos JA et al., 2026. 'Coeliac disease and the intestinal barrier: mechanisms of disruption and strategies for restoration.' Gut. <a href='https://pubmed.ncbi.nlm.nih.gov/40579122/' target='_blank'>[PubMed]</a>"
    ]
  },

  // ========================================
  // COMPOSICAO CORPORAL
  // ========================================
  {
    id: "bimagrumab",
    name: "Bimagrumab",
    aka: "BYM338",
    category: "body-comp",
    categoryLabel: "Composi\u00e7\u00e3o Corporal",
    description: "Bimagrumab \u00e9 um anticorpo monoclonal humano que bloqueia os receptores de activina tipo II (ActRII), inibindo a sinaliza\u00e7\u00e3o de miostatina e activina. \u00c9 o \u00fanico agente que demonstrou capacidade de reduzir massa gorda E aumentar massa magra simultaneamente. Adquirido pela Eli Lilly (via Versanis Bio), est\u00e1 sendo estudado em combina\u00e7\u00e3o com semaglutida, onde a adi\u00e7\u00e3o de bimagrumab preservou massa muscular durante a perda de peso.",
    mechanism: "Bloqueia competitivamente os receptores ActRIIA e ActRIIB, impedindo a liga\u00e7\u00e3o de miostatina, activina A e GDF-11. O bloqueio da miostatina/activina remove o freio fisiol\u00f3gico sobre o crescimento muscular, promovendo hipertrofia do m\u00fasculo esquel\u00e9tico. Simultaneamente, a inibi\u00e7\u00e3o da sinaliza\u00e7\u00e3o ActRII no tecido adiposo promove a diferencia\u00e7\u00e3o de adiposidade bege/marrom e aumenta o gasto energ\u00e9tico, resultando em redu\u00e7\u00e3o da massa gorda.",
    benefits: [
      "Redu\u00e7\u00e3o de massa gorda com preserva\u00e7\u00e3o/ganho de massa magra",
      "Efeito sin\u00e9rgico com semaglutida em Fase 2",
      "\u00danico agente com duplo efeito: -gordura +m\u00fasculo",
      "Melhora da composi\u00e7\u00e3o corporal independente de dieta",
      "Potencial para sarcopenia e obesidade sarcopênica"
    ],
    sideEffects: [
      { name: "Espasmos musculares", severity: "common" },
      { name: "Diarreia", severity: "occasional" },
      { name: "Rea\u00e7\u00f5es no local da inje\u00e7\u00e3o", severity: "occasional" },
      { name: "Eleva\u00e7\u00e3o transit\u00f3ria de FSH", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Fase 2 (com semaglutida)", dose: "10mg/kg IV a cada 4 semanas", notes: "Infus\u00e3o intravenosa a cada 4 semanas. Na combina\u00e7\u00e3o com semaglutida, demonstrou perda de gordura superior com preserva\u00e7\u00e3o da massa magra. Fase 3 em planejamento." }
    ],
    administration: "Intravenosa (IV)",
    halfLife: "~21-28 dias",
    status: "trial",
    statusLabel: "Fase 2/3",
    references: [
      "Heymsfield SB et al., 2026. 'Bimagrumab plus semaglutide alone or in combination for the treatment of obesity: a randomized phase 2 trial.' Nat Med. <a href='https://pubmed.ncbi.nlm.nih.gov/41772149/' target='_blank'>[PubMed]</a>",
      "Rooks D et al., 2026. 'Cardiac Safety of Chronic Inhibition of the Myostatin-Activin Pathway with Bimagrumab in Healthy Older Adults.' J Clin Endocrinol Metab. <a href='https://pubmed.ncbi.nlm.nih.gov/41873146/' target='_blank'>[PubMed]</a>"
    ]
  },
  {
    id: "apelin-13",
    name: "Apelin-13",
    aka: "Pept\u00eddeo Apelin / Ligante do receptor APJ",
    category: "body-comp",
    categoryLabel: "Composi\u00e7\u00e3o Corporal",
    description: "Apelin-13 \u00e9 a isoforma mais ativa do sistema apelin\u00e9rgico, um pept\u00eddeo end\u00f3geno que diminui com o envelhecimento. Atua como ligante do receptor APJ (receptor orf\u00e3o acoplado \u00e0 prote\u00edna G) com efeitos cardiovasculares, metab\u00f3licos e de regenera\u00e7\u00e3o muscular. Chamado de 'pept\u00eddeo mim\u00e9tico de exerc\u00edcio' por seus efeitos ben\u00e9ficos sobre m\u00fasculo, cora\u00e7\u00e3o e metabolismo, similares aos obtidos com atividade f\u00edsica.",
    mechanism: "Liga-se ao receptor APJ (receptor apelin), ativando vias de sinaliza\u00e7\u00e3o Gi/Gq. No cora\u00e7\u00e3o, aumenta a contratilidade mioc\u00e1rdica (efeito inotr\u00f3pico positivo) e promove vasodilata\u00e7\u00e3o via libera\u00e7\u00e3o de \u00f3xido n\u00edtrico. No m\u00fasculo esquel\u00e9tico, estimula a biog\u00eanese mitocondrial e a regenera\u00e7\u00e3o muscular. No metabolismo, melhora a sensibilidade \u00e0 insulina e aumenta a capta\u00e7\u00e3o de glicose.",
    benefits: [
      "Efeito cardioprotetor (inotr\u00f3pico positivo e vasodilatador)",
      "Regenera\u00e7\u00e3o muscular e biog\u00eanese mitocondrial",
      "Melhora da sensibilidade \u00e0 insulina",
      "Mim\u00e9tico de exerc\u00edcio (efeitos similares \u00e0 atividade f\u00edsica)",
      "Potencial em diabetes e suas complica\u00e7\u00f5es"
    ],
    sideEffects: [
      { name: "Hipotens\u00e3o (vasodilata\u00e7\u00e3o)", severity: "occasional" },
      { name: "Dados cl\u00ednicos limitados em humanos", severity: "rare" }
    ],
    dosage: [
      { protocol: "Pesquisa", dose: "Vari\u00e1vel conforme estudo", notes: "Sem protocolos cl\u00ednicos estabelecidos em humanos. Estudos pr\u00e9-cl\u00ednicos utilizam doses na faixa de nmol/kg via subcut\u00e2nea ou intravenosa." }
    ],
    administration: "Subcut\u00e2nea (SC) / Intravenosa (IV)",
    halfLife: "~5 minutos (muito curta, an\u00e1logos est\u00e1veis em desenvolvimento)",
    status: "research",
    statusLabel: "Pesquisa",
    references: [
      "Davenport AP et al., 2026. 'Apelin receptor pharmacology in the human cardiovascular system and emerging clinical applications.' Pharmacol Rev. <a href='https://pubmed.ncbi.nlm.nih.gov/41895070/' target='_blank'>[PubMed]</a>",
      "Singla S et al., 2026. 'The emerging endogenous peptide Apelin 13 in diabetes and its related complications: a narrative review.' Expert Opin Ther Targets. <a href='https://pubmed.ncbi.nlm.nih.gov/41782481/' target='_blank'>[PubMed]</a>"
    ]
  },
  {
    id: "cbl-514",
    name: "CBL-514",
    aka: "Injeção lipolítica Cellbion",
    category: "body-comp",
    categoryLabel: "Composição Corporal",
    description: "CBL-514 é um composto sintético injetável desenvolvido pela Cellbion (Coreia do Sul) para redução localizada de gordura subcutânea. Diferente de outros lipolíticos como a deoxicolato (Kybella), o CBL-514 atua induzindo apoptose (morte celular programada) seletiva nos adipócitos via ativação da via mitocondrial intrínseca, sem causar necrose ou inflamação significativa no tecido circundante. Em ensaios clínicos de Fase 2, demonstrou redução significativa de gordura submentoniana (papada) com perfil de segurança superior ao deoxicolato, incluindo menor dor, edema e duração dos efeitos adversos. Está sendo estudado também para outras áreas de gordura localizada (abdômen, flancos).",
    mechanism: "Ativa seletivamente a via apoptótica mitocondrial intrínseca nos adipócitos. O composto penetra nas células de gordura e desestabiliza a membrana mitocondrial, liberando citocromo c e ativando a cascata de caspases (caspase-9 → caspase-3), levando à apoptose celular programada. Os adipócitos mortos são fagocitados por macrófagos em processo gradual e ordenado. A seletividade para adipócitos deve-se à maior captação do composto pelo tecido adiposo, preservando células dérmicas, musculares e vasculares adjacentes.",
    benefits: [
      "Redução localizada de gordura subcutânea (submentoniana, abdominal, flancos)",
      "Apoptose seletiva de adipócitos (sem necrose do tecido circundante)",
      "Menor dor e edema comparado ao deoxicolato (Kybella)",
      "Resultados permanentes (adipócitos eliminados não se regeneram)",
      "Perfil de segurança favorável em ensaios clínicos Fase 2"
    ],
    sideEffects: [
      { name: "Edema transitório no local da injeção", severity: "common" },
      { name: "Equimose (hematoma) local", severity: "common" },
      { name: "Dor leve a moderada no local", severity: "occasional" },
      { name: "Endurecimento temporário da área tratada", severity: "occasional" },
      { name: "Parestesia transitória", severity: "rare" }
    ],
    dosage: [
      {
        protocol: "Submentoniano (Fase 2)",
        dose: "0,3-1,0 mL por ponto de injeção, múltiplos pontos por sessão",
        notes: "2-4 sessões com intervalo de 4-6 semanas. Dose total por sessão e número de pontos de injeção determinados pela área de gordura. Aplicação intradérmica/subcutânea na camada de gordura alvo."
      }
    ],
    administration: "Subcutânea (SC) / Intradérmica - injeção direta no tecido adiposo alvo",
    halfLife: "Ação local (não sistêmica) - efeito apoptótico progressivo ao longo de dias a semanas",
    status: "trial",
    statusLabel: "Ensaio Clínico Fase 2",
    references: [
      "Lee SJ et al., 2024. 'Safety and Efficacy of CBL-514 Injection for Submental Fat Reduction: A Phase 2 Study.' Plast Reconstr Surg. <a href='https://pubmed.ncbi.nlm.nih.gov/39083028/' target='_blank'>[PubMed]</a>",
      "Kim J et al., 2023. 'CBL-514, a novel injectable compound for localized fat reduction through adipocyte-selective apoptosis.' J Cosmet Dermatol. <a href='https://pubmed.ncbi.nlm.nih.gov/36799485/' target='_blank'>[PubMed]</a>"
    ]
  }
];
