var peptidesPart2 = [
  // ========================================
  // HEALING / CURA E RECUPERAÇÃO
  // ========================================
  {
    id: "bpc-157",
    name: "BPC-157",
    aka: "Body Protection Compound-157",
    category: "healing",
    categoryLabel: "Cura e Recuperação",
    description: "Pentadecapeptídeo gástrico derivado de uma proteína protetora encontrada no suco gástrico humano. O BPC-157 é composto por 15 aminoácidos e tem demonstrado notáveis propriedades regenerativas em estudos pré-clínicos, promovendo a cicatrização de diversos tecidos incluindo tendões, ligamentos, músculos, ossos e trato gastrointestinal.",
    mechanism: "O BPC-157 atua através de múltiplos mecanismos: estimula a angiogênese (formação de novos vasos sanguíneos), promove a expressão do fator de crescimento endotelial vascular (VEGF), modula a via do óxido nítrico (NO), interage com o sistema dopaminérgico e protege o endotélio vascular. Também influencia positivamente o eixo intestino-cérebro e demonstra efeitos citoprotetores no trato gastrointestinal.",
    benefits: [
      "Aceleração da cicatrização de tendões, ligamentos e músculos",
      "Proteção e reparação da mucosa gastrointestinal",
      "Efeito anti-inflamatório sistêmico",
      "Promoção da angiogênese e formação de novos vasos sanguíneos",
      "Potencial neuroprotetor e efeito positivo no sistema nervoso central",
      "Proteção contra úlceras gástricas e lesões intestinais",
      "Suporte à recuperação de lesões musculoesqueléticas"
    ],
    sideEffects: [
      { name: "Dor de cabeça", severity: "rare" },
      { name: "Náusea", severity: "rare" }
    ],
    dosage: [
      { protocol: "Padrão", dose: "250-500mcg 1-2x ao dia", notes: "Administrar próximo ao local da lesão quando possível. Ciclos de 4-6 semanas são comuns em protocolos de pesquisa." }
    ],
    administration: "Subcutânea/Oral",
    halfLife: "Não bem estabelecida (~4h estimado)",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "tb-500",
    name: "TB-500",
    aka: "Thymosin Beta 4 Acetate",
    category: "healing",
    categoryLabel: "Cura e Recuperação",
    description: "Versão sintética da timosina beta-4, uma proteína de 43 aminoácidos naturalmente produzida pelo timo e presente em praticamente todas as células do corpo. A timosina beta-4 é uma das proteínas mais abundantes do citoplasma e desempenha papel fundamental na reparação tecidual, migração celular e formação de novos vasos sanguíneos.",
    mechanism: "O TB-500 atua principalmente pela regulação da actina, uma proteína essencial para a estrutura e motilidade celular. Ao sequestrar monômeros de actina G, promove a migração celular, diferenciação de células-tronco e formação de novos vasos sanguíneos. Também reduz a inflamação ao regular negativamente citocinas pró-inflamatórias e promove a remodelação da matriz extracelular.",
    benefits: [
      "Reparação acelerada de tecidos danificados (músculos, tendões, ligamentos)",
      "Redução significativa da inflamação",
      "Promoção da angiogênese e neovascularização",
      "Melhora da flexibilidade e mobilidade articular",
      "Remodelação do tecido cardíaco após lesão",
      "Suporte à regeneração de fibras musculares",
      "Potencial na recuperação de lesões do sistema nervoso"
    ],
    sideEffects: [
      { name: "Dor de cabeça", severity: "occasional" },
      { name: "Letargia e fadiga", severity: "occasional" },
      { name: "Náusea", severity: "rare" }
    ],
    dosage: [
      { protocol: "Fase de carga", dose: "2-5mg 2x por semana", notes: "Fase inicial de carga geralmente dura de 4 a 6 semanas para saturação tecidual." },
      { protocol: "Manutenção", dose: "2mg por semana", notes: "Após a fase de carga, reduzir para dose de manutenção. Pode ser administrado em dose única semanal." }
    ],
    administration: "Subcutânea/Intramuscular",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "tb-fragment",
    name: "TB Fragment",
    aka: "Fragmento de Timosina Beta-4",
    category: "healing",
    categoryLabel: "Cura e Recuperação",
    description: "Fragmento ativo do TB-500 (timosina beta-4) que contém a sequência de aminoácidos responsável pela atividade biológica principal do peptídeo completo. Este fragmento menor mantém propriedades regenerativas e anti-inflamatórias, sendo uma alternativa mais direcionada ao peptídeo integral.",
    mechanism: "O fragmento do TB-500 atua de maneira similar ao peptídeo completo, interagindo com a actina celular para promover a migração e diferenciação celular. Por ser um fragmento menor, pode ter biodisponibilidade e farmacocinética diferentes, potencialmente oferecendo efeitos mais focalizados na reparação tecidual.",
    benefits: [
      "Reparação tecidual acelerada",
      "Redução da inflamação local",
      "Promoção da migração celular para áreas lesionadas",
      "Suporte à cicatrização de feridas",
      "Alternativa mais direcionada ao TB-500 completo"
    ],
    sideEffects: [
      { name: "Reações no local da injeção", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Padrão", dose: "750mcg por dia", notes: "Protocolo de pesquisa comum. Administrar via subcutânea próximo à área de interesse quando possível." }
    ],
    administration: "Subcutânea",
    halfLife: "Mais curta que o TB-500",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    aka: "Peptídeo de Cobre GHK",
    category: "healing",
    categoryLabel: "Cura e Recuperação",
    description: "Tripeptídeo (glicil-histidil-lisina) naturalmente presente no plasma humano, saliva e urina, que possui alta afinidade pelo cobre. Os níveis de GHK-Cu diminuem significativamente com a idade, de cerca de 200ng/mL aos 20 anos para 80ng/mL aos 60 anos. É um dos peptídeos mais estudados para regeneração tecidual e rejuvenescimento cutâneo.",
    mechanism: "O GHK-Cu atua como um complexo transportador de cobre que modula a expressão de diversos genes relacionados à reparação tecidual. Estimula a síntese de colágeno tipos I, III e V, glicosaminoglicanos e proteoglicanos. Promove a angiogênese, atrai células imunológicas para o local da lesão, possui ação antioxidante via superóxido dismutase e reduz a inflamação crônica através da modulação de citocinas.",
    benefits: [
      "Cicatrização acelerada de feridas e lesões cutâneas",
      "Estimulação da síntese de colágeno e elastina",
      "Efeito anti-inflamatório potente",
      "Promoção do crescimento capilar",
      "Ação antioxidante e proteção contra danos de radicais livres",
      "Remodelação da pele e redução de cicatrizes",
      "Suporte à regeneração óssea e cartilaginosa"
    ],
    sideEffects: [
      { name: "Vermelhidão no local da injeção", severity: "occasional" },
      { name: "Náusea", severity: "rare" }
    ],
    dosage: [
      { protocol: "Subcutâneo", dose: "1-2mg por dia", notes: "Administração subcutânea para efeitos sistêmicos. Ciclos de 4-8 semanas são comuns." },
      { protocol: "Tópico", dose: "Aplicação local em creme ou sérum", notes: "Uso tópico para benefícios cutâneos diretos. Concentrações variam conforme a formulação." }
    ],
    administration: "Subcutânea/Tópica",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "ahk-cu",
    name: "AHK-Cu",
    aka: "Peptídeo de Cobre AHK",
    category: "healing",
    categoryLabel: "Cura e Recuperação",
    description: "Variante do tripeptídeo de cobre, estruturalmente similar ao GHK-Cu, contendo a sequência alanil-histidil-lisina ligada ao cobre. Este peptídeo possui propriedades regenerativas e rejuvenescedoras, sendo particularmente utilizado em aplicações dermatológicas e cosméticas para restauração da pele.",
    mechanism: "O AHK-Cu atua de forma análoga ao GHK-Cu, funcionando como transportador de cobre e modulando a expressão gênica envolvida na reparação tecidual. Estimula a produção de componentes da matriz extracelular, incluindo colágeno e elastina, e promove a proliferação de fibroblastos. Seu mecanismo inclui a ativação de vias de sinalização celular envolvidas na regeneração e remodelação cutânea.",
    benefits: [
      "Rejuvenescimento e revitalização da pele",
      "Cicatrização acelerada de feridas",
      "Estimulação da produção de colágeno",
      "Melhora da textura e elasticidade cutânea",
      "Redução de sinais de envelhecimento"
    ],
    sideEffects: [
      { name: "Efeitos adversos mínimos documentados", severity: "rare" }
    ],
    dosage: [
      { protocol: "Tópico/Injetável", dose: "Similar ao GHK-Cu", notes: "Pode ser utilizado topicamente em formulações cosméticas ou por via injetável. Protocolos seguem diretrizes semelhantes ao GHK-Cu." }
    ],
    administration: "Tópica/Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "ll-37",
    name: "LL-37",
    aka: "Catelicidina",
    category: "healing",
    categoryLabel: "Cura e Recuperação",
    description: "Peptídeo antimicrobiano endógeno pertencente à família das catelicidinas, composto por 37 aminoácidos começando com dois resíduos de leucina (daí o nome LL-37). É o único membro da família das catelicidinas encontrado em humanos e é produzido por neutrófilos, macrófagos e células epiteliais como parte da defesa imune inata.",
    mechanism: "O LL-37 exerce atividade antimicrobiana direta ao interagir com as membranas celulares de bactérias, vírus e fungos, causando sua disrupção. Além da ação antimicrobiana, modula a resposta imune inata e adaptativa, promove a quimiotaxia de células imunológicas, estimula a angiogênese e a re-epitelização de feridas. Também neutraliza lipopolissacarídeos (LPS) bacterianos, reduzindo a inflamação mediada por endotoxinas.",
    benefits: [
      "Atividade antimicrobiana de amplo espectro (bactérias, vírus, fungos)",
      "Aceleração da cicatrização de feridas",
      "Modulação da resposta imunológica inata",
      "Neutralização de endotoxinas bacterianas",
      "Promoção da angiogênese em tecidos lesionados",
      "Potencial no tratamento de infecções crônicas e biofilmes"
    ],
    sideEffects: [
      { name: "Reações no local da injeção", severity: "occasional" },
      { name: "Vermelhidão localizada", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Padrão", dose: "50-100mcg por dia", notes: "Doses utilizadas em contextos de pesquisa. Administração subcutânea próxima à área de interesse." }
    ],
    administration: "Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "cerebrolysin",
    name: "Cerebrolysin",
    aka: "Peptídeos Neurotróficos Derivados do Cérebro",
    category: "healing",
    categoryLabel: "Cura e Recuperação",
    description: "Preparação farmacológica composta por uma mistura de peptídeos neurotróficos de baixo peso molecular e aminoácidos livres, obtidos por hidrólise enzimática padronizada de proteínas cerebrais porcinas. É aprovado em vários países (não nos EUA pela FDA) para o tratamento de acidente vascular cerebral (AVC), traumatismo cranioencefálico e demência.",
    mechanism: "A Cerebrolysin mimetiza a ação de fatores neurotróficos naturais, incluindo NGF (fator de crescimento nervoso) e BDNF (fator neurotrófico derivado do cérebro). Promove a neuroplasticidade, estimula a neurogênese, reduz a excitotoxicidade glutamatérgica, diminui a fosforilação da proteína tau e possui propriedades antioxidantes. Atua na proteção e reparação de neurônios danificados por isquemia ou trauma.",
    benefits: [
      "Neuroproteção contra dano isquêmico e traumático",
      "Suporte à recuperação pós-AVC",
      "Melhora da função cognitiva em demência",
      "Estimulação da neuroplasticidade e formação de sinapses",
      "Promoção da neurogênese (formação de novos neurônios)",
      "Redução do dano oxidativo cerebral"
    ],
    sideEffects: [
      { name: "Dor de cabeça", severity: "occasional" },
      { name: "Tontura", severity: "occasional" },
      { name: "Dor no local da injeção", severity: "occasional" },
      { name: "Agitação", severity: "rare" }
    ],
    dosage: [
      { protocol: "Padrão clínico", dose: "5-30ml por dia via IV por 10-20 dias", notes: "A dose varia conforme a indicação clínica. AVC agudo geralmente requer doses maiores (30ml). Deve ser administrado sob supervisão médica em ambiente clínico." }
    ],
    administration: "Intravenosa/Intramuscular",
    halfLife: "Horas",
    status: "approved",
    statusLabel: "Aprovado FDA"
  },
  {
    id: "vip",
    name: "VIP",
    aka: "Peptídeo Intestinal Vasoativo",
    category: "healing",
    categoryLabel: "Cura e Recuperação",
    description: "Neuropeptídeo de 28 aminoácidos originalmente isolado do intestino delgado, mas amplamente distribuído pelo sistema nervoso central e periférico, pulmões e trato gastrointestinal. O VIP desempenha papéis cruciais na regulação imunológica, neuroproteção, vasodilatação e homeostase de diversos sistemas orgânicos.",
    mechanism: "O VIP liga-se aos receptores VPAC1 e VPAC2 acoplados à proteína G, ativando a adenilato ciclase e aumentando os níveis intracelulares de AMPc. Isso resulta em vasodilatação, broncodilatação, inibição da produção de citocinas pró-inflamatórias (TNF-alfa, IL-6) e estimulação da secreção de água e eletrólitos. No sistema nervoso, atua como neurotransmissor e neuroprotetor, regulando o ritmo circadiano e a função cognitiva.",
    benefits: [
      "Regulação imunológica e imunomodulação",
      "Neuroproteção e suporte à função cerebral",
      "Potente efeito anti-inflamatório",
      "Vasodilatação e melhora da circulação",
      "Regulação da função pulmonar e broncodilatação",
      "Potencial no tratamento de doenças autoimunes",
      "Suporte à função gastrointestinal"
    ],
    sideEffects: [
      { name: "Rubor facial (flushing)", severity: "common" },
      { name: "Hipotensão arterial", severity: "occasional" },
      { name: "Diarreia", severity: "occasional" },
      { name: "Taquicardia", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Nasal", dose: "50-100mcg por dia via nasal", notes: "A via nasal é preferida para conveniência. Pode ser dividido em múltiplas administrações ao longo do dia." },
      { protocol: "Subcutâneo", dose: "50-100mcg por dia", notes: "Via subcutânea como alternativa à nasal. Iniciar com dose baixa e titular conforme tolerância." }
    ],
    administration: "Subcutânea/Nasal",
    halfLife: "~2 minutos (IV)",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "humanin",
    name: "Humanin",
    aka: "Peptídeo Derivado Mitocondrial HN",
    category: "healing",
    categoryLabel: "Cura e Recuperação",
    description: "Micropeptídeo de 24 aminoácidos codificado pelo DNA mitocondrial (gene MT-RNR2 do genoma mitocondrial 16S rRNA). Foi originalmente descoberto em um estudo de pacientes com Alzheimer como um fator neuroprotetor endógeno. A Humanin é o primeiro peptídeo derivado mitocondrial identificado e desempenha papel fundamental na sobrevivência celular e proteção contra estresse.",
    mechanism: "A Humanin atua através de múltiplas vias de sinalização: liga-se ao receptor FPRL1 (receptor de peptídeo formil tipo 1), interage com a proteína pró-apoptótica Bax bloqueando sua translocação para a mitocôndria, e ativa a via STAT3 de sobrevivência celular. Também se liga ao receptor trimédico composto por CNTFR, WSX-1 e gp130, ativando cascatas de sinalização anti-apoptóticas. Reduz a produção de espécies reativas de oxigênio e protege contra a disfunção mitocondrial.",
    benefits: [
      "Neuroproteção potente, especialmente contra doenças neurodegenerativas",
      "Efeito anti-apoptótico (previne morte celular programada)",
      "Citoproteção contra estresse oxidativo",
      "Proteção mitocondrial e preservação da função celular",
      "Potencial terapêutico na doença de Alzheimer",
      "Regulação metabólica e sensibilidade à insulina"
    ],
    sideEffects: [
      { name: "Não bem caracterizados em humanos", severity: "rare" }
    ],
    dosage: [
      { protocol: "Pesquisa", dose: "Estudado primariamente em modelos pré-clínicos", notes: "Os dados de dosagem em humanos são limitados. A maioria dos estudos foi conduzida em modelos animais e in vitro." }
    ],
    administration: "Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Pesquisa"
  },

  // ========================================
  // ANTI-AGING / ANTI-ENVELHECIMENTO
  // ========================================
  {
    id: "epithalon",
    name: "Epithalon",
    aka: "Epitalon / Epithalamin Sintético",
    category: "anti-aging",
    categoryLabel: "Anti-Envelhecimento",
    description: "Tetrapeptídeo sintético (Ala-Glu-Asp-Gly) baseado no epithalamin, um extrato natural da glândula pineal. Desenvolvido pelo professor Vladimir Khavinson no Instituto de Gerontologia de São Petersburgo, Rússia. O Epithalon é considerado um dos peptídeos anti-envelhecimento mais promissores devido à sua capacidade de ativar a telomerase e influenciar a regulação da glândula pineal.",
    mechanism: "O Epithalon atua principalmente pela ativação da enzima telomerase, que adiciona sequências repetitivas de DNA (telômeros) às extremidades dos cromossomos, contrabalançando o encurtamento telomérico associado ao envelhecimento celular. Também estimula a produção de melatonina pela glândula pineal, regulando o ritmo circadiano. Modula a expressão gênica relacionada ao envelhecimento e possui propriedades antioxidantes que protegem contra o estresse oxidativo.",
    benefits: [
      "Ativação da telomerase e alongamento dos telômeros",
      "Potencial efeito anti-envelhecimento celular",
      "Melhora da qualidade do sono via regulação da melatonina",
      "Regulação da função da glândula pineal",
      "Propriedades antioxidantes",
      "Potencial na regulação do ciclo circadiano",
      "Suporte à função imunológica"
    ],
    sideEffects: [
      { name: "Reações no local da injeção", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Padrão", dose: "5-10mg por dia por 10-20 dias", notes: "Protocolo cíclico: administrar por 10-20 dias consecutivos, repetir a cada 4-6 meses. Preferencialmente administrar à noite para sincronizar com a produção de melatonina." }
    ],
    administration: "Subcutânea/Intramuscular",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "nad-plus",
    name: "NAD+",
    aka: "Nicotinamida Adenina Dinucleotídeo",
    category: "anti-aging",
    categoryLabel: "Anti-Envelhecimento",
    description: "Coenzima essencial presente em todas as células vivas, fundamental para o metabolismo energético celular e centenas de reações enzimáticas. Os níveis de NAD+ diminuem progressivamente com a idade, e essa depleção está associada ao envelhecimento e diversas doenças crônicas. A suplementação de NAD+ tem ganhado destaque como estratégia anti-envelhecimento baseada em evidências científicas crescentes.",
    mechanism: "O NAD+ é cofator essencial para as sirtuínas (SIRT1-7), enzimas que regulam o envelhecimento celular, reparo do DNA, metabolismo e inflamação. Também é substrato para as enzimas PARPs (poli-ADP-ribose polimerases), cruciais no reparo de danos ao DNA. Participa diretamente na cadeia de transporte de elétrons mitocondrial para produção de ATP. A depleção de NAD+ com a idade compromete todas essas funções, e sua reposição visa restaurar a função celular juvenil.",
    benefits: [
      "Aumento da energia celular e função mitocondrial",
      "Suporte ao reparo do DNA danificado",
      "Ativação das sirtuínas com efeitos anti-envelhecimento",
      "Neuroproteção e suporte à função cerebral",
      "Melhora do metabolismo e sensibilidade à insulina",
      "Potencial na redução da inflamação crônica",
      "Suporte à função cardiovascular"
    ],
    sideEffects: [
      { name: "Náusea", severity: "occasional" },
      { name: "Rubor (flushing)", severity: "occasional" },
      { name: "Dor de cabeça", severity: "occasional" },
      { name: "Desconforto torácico (durante infusão IV)", severity: "rare" }
    ],
    dosage: [
      { protocol: "Infusão IV", dose: "100-500mg por infusão intravenosa", notes: "Infusão IV proporciona biodisponibilidade máxima. Sessões geralmente duram 2-4 horas conforme a dose. Administrar em ambiente clínico supervisionado." },
      { protocol: "Oral/Sublingual", dose: "250-1000mg por dia", notes: "Formas orais e sublinguais são mais acessíveis, porém com biodisponibilidade variável. Precursores como NMN e NR também são utilizados." }
    ],
    administration: "Intravenosa/Subcutânea/Oral",
    halfLife: "~30-45 minutos (IV)",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "mots-c",
    name: "MOTS-c",
    aka: "Quadro de Leitura Aberta Mitocondrial do Gene 12S rRNA Tipo C",
    category: "anti-aging",
    categoryLabel: "Anti-Envelhecimento",
    description: "Peptídeo de 16 aminoácidos codificado pelo DNA mitocondrial (gene 12S rRNA) que atua como hormônio metabólico. Descoberto em 2015, o MOTS-c é um dos peptídeos derivados mitocondriais mais estudados e funciona como uma miocina exercício-mimética, reproduzindo alguns dos benefícios metabólicos do exercício físico a nível celular.",
    mechanism: "O MOTS-c ativa a via AMPK (proteína quinase ativada por AMP), o principal sensor energético celular, promovendo a captação de glicose e oxidação de ácidos graxos. Também transloca para o núcleo em condições de estresse metabólico, onde regula a expressão gênica adaptativa. Melhora a função mitocondrial, reduz o acúmulo de intermediários metabólicos tóxicos e modula a via do folato, afetando a biossíntese de purinas e o metabolismo de um carbono.",
    benefits: [
      "Regulação metabólica e mimetismo do exercício físico",
      "Melhora da sensibilidade à insulina e homeostase da glicose",
      "Promoção da perda de gordura e redução da obesidade",
      "Suporte à função mitocondrial",
      "Potencial anti-envelhecimento metabólico",
      "Regulação do metabolismo muscular",
      "Proteção contra disfunção metabólica associada à idade"
    ],
    sideEffects: [
      { name: "Reações no local da injeção", severity: "occasional" },
      { name: "Fadiga inicial", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Pesquisa", dose: "5-10mg 3-5x por semana", notes: "Doses baseadas em protocolos de pesquisa. A frequência pode ser ajustada conforme a resposta individual e os objetivos." }
    ],
    administration: "Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "ss-31",
    name: "SS-31",
    aka: "Elamipretide / Bendavia / MTP-131",
    category: "anti-aging",
    categoryLabel: "Anti-Envelhecimento",
    description: "Tetrapeptídeo aromático-catiônico (D-Arg-Dmt-Lys-Phe-NH2) especificamente direcionado à membrana interna mitocondrial. Desenvolvido pelo Dr. Hazel Szeto, o SS-31 concentra-se nas mitocôndrias em níveis até 5000 vezes superiores à sua concentração extracelular. Está em fase 3 de ensaios clínicos para diversas condições relacionadas à disfunção mitocondrial.",
    mechanism: "O SS-31 penetra na membrana interna mitocondrial e interage seletivamente com a cardiolipina, um fosfolipídeo exclusivo da mitocôndria essencial para a função da cadeia de transporte de elétrons. Ao estabilizar a cardiolipina, otimiza o fluxo de elétrons nos complexos respiratórios, reduz a geração de espécies reativas de oxigênio (EROs), previne a abertura do poro de transição de permeabilidade mitocondrial e melhora a eficiência da produção de ATP.",
    benefits: [
      "Melhora da função mitocondrial e produção de ATP",
      "Cardioproteção e suporte à função cardíaca",
      "Melhora da função muscular esquelética",
      "Redução do estresse oxidativo mitocondrial",
      "Neuroproteção contra dano isquêmico",
      "Potencial no tratamento de miopatias mitocondriais",
      "Proteção renal contra lesão isquêmica"
    ],
    sideEffects: [
      { name: "Reações no local da injeção", severity: "common" },
      { name: "Dor de cabeça", severity: "occasional" },
      { name: "Fadiga", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Subcutâneo", dose: "4mg por dia via subcutânea", notes: "Dose utilizada em ensaios clínicos para miopatia mitocondrial e outras indicações." },
      { protocol: "Intravenoso", dose: "40mg via IV em estudos clínicos", notes: "Infusão intravenosa utilizada em protocolos de pesquisa para condições agudas como lesão de reperfusão." }
    ],
    administration: "Subcutânea/Intravenosa",
    halfLife: "~4 horas",
    status: "trial",
    statusLabel: "Fase Clínica"
  },
  {
    id: "foxo4-dri",
    name: "FOXO4-DRI",
    aka: "Peptídeo Senolítico FOXO4-DRI",
    category: "anti-aging",
    categoryLabel: "Anti-Envelhecimento",
    description: "Peptídeo senolítico de isômeros D-retro-inverso baseado na proteína FOXO4. Desenvolvido por pesquisadores da Universidade Erasmus em Rotterdam, o FOXO4-DRI foi projetado para eliminar seletivamente células senescentes (células \"zumbis\" que pararam de se dividir mas resistem à apoptose), uma das características fundamentais do envelhecimento biológico.",
    mechanism: "Células senescentes sobrevivem porque a proteína FOXO4 se liga à p53 no núcleo, impedindo que a p53 induza apoptose. O FOXO4-DRI é uma versão modificada do FOXO4 que compete pelo sítio de ligação da p53, deslocando o FOXO4 endógeno e liberando a p53 para executar seu programa apoptótico. Como as células saudáveis não dependem desta interação FOXO4-p53 para sobreviver, o peptídeo é seletivo para células senescentes.",
    benefits: [
      "Eliminação seletiva de células senescentes",
      "Potencial efeito anti-envelhecimento sistêmico",
      "Redução do fenótipo secretor associado à senescência (SASP)",
      "Melhora da função tecidual e orgânica",
      "Potencial na reversão de características do envelhecimento"
    ],
    sideEffects: [
      { name: "Não bem caracterizados em humanos", severity: "rare" }
    ],
    dosage: [
      { protocol: "Pesquisa", dose: "Estudos variam, tipicamente na faixa de mg/kg em modelos animais", notes: "Dados de dosagem limitados a estudos pré-clínicos em camundongos. Não existem protocolos estabelecidos para uso humano." }
    ],
    administration: "Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "pinealon",
    name: "Pinealon",
    aka: "Peptídeo Biorregulador Glu-Asp-Arg",
    category: "anti-aging",
    categoryLabel: "Anti-Envelhecimento",
    description: "Peptídeo curto composto por três aminoácidos (ácido glutâmico, ácido aspártico e arginina) desenvolvido como biorregulador da glândula pineal e do sistema nervoso central. Faz parte da classe de peptídeos biorreguladores de Khavinson, desenvolvidos no Instituto de Biorregulação e Gerontologia de São Petersburgo, Rússia, para aplicações anti-envelhecimento.",
    mechanism: "O Pinealon atua como biorregulador peptídico que penetra nas células e interage diretamente com o DNA, modulando a expressão gênica em tecidos neurais e na glândula pineal. Estimula a síntese de melatonina e outros peptídeos neurotróficos endógenos. Promove a diferenciação neuronal e possui propriedades antioxidantes que protegem o tecido cerebral contra danos oxidativos associados ao envelhecimento.",
    benefits: [
      "Neuroproteção e suporte ao tecido cerebral",
      "Regulação da função da glândula pineal",
      "Melhora da qualidade do sono",
      "Suporte à produção de melatonina",
      "Potencial efeito anti-envelhecimento cerebral",
      "Proteção contra dano oxidativo neuronal"
    ],
    sideEffects: [
      { name: "Efeitos adversos mínimos documentados", severity: "rare" }
    ],
    dosage: [
      { protocol: "Padrão", dose: "10-20mg por dia por 10-15 dias", notes: "Protocolo cíclico: administrar por 10-15 dias consecutivos, repetir conforme necessidade a cada 3-6 meses." }
    ],
    administration: "Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "vesugen",
    name: "Vesugen",
    aka: "Peptídeo Biorregulador Lys-Glu-Asp",
    category: "anti-aging",
    categoryLabel: "Anti-Envelhecimento",
    description: "Tripeptídeo biorregulador (lisina-ácido glutâmico-ácido aspártico) desenvolvido para suporte do sistema vascular. Pertence à classe de peptídeos biorreguladores curtos desenvolvidos pelo professor Khavinson, especificamente direcionado à saúde endotelial e vascular, com potencial aplicação na prevenção de doenças cardiovasculares associadas ao envelhecimento.",
    mechanism: "O Vesugen atua como biorregulador da expressão gênica em células endoteliais e do tecido vascular. Penetra nas células e modula a transcrição de genes envolvidos na função endotelial, produção de óxido nítrico e manutenção da integridade da parede vascular. Promove a síntese de proteínas essenciais para a elasticidade e função dos vasos sanguíneos, contrabalançando a rigidez vascular associada ao envelhecimento.",
    benefits: [
      "Suporte à saúde vascular e endotelial",
      "Melhora da função endotelial",
      "Promoção da elasticidade vascular",
      "Potencial na prevenção de aterosclerose",
      "Suporte à circulação sanguínea",
      "Proteção do endotélio contra dano oxidativo"
    ],
    sideEffects: [
      { name: "Efeitos adversos mínimos documentados", severity: "rare" }
    ],
    dosage: [
      { protocol: "Padrão", dose: "10-20mg por dia por 10-15 dias", notes: "Administrar em ciclos de 10-15 dias, repetindo a cada 3-6 meses para manutenção da saúde vascular." }
    ],
    administration: "Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "cardiogen",
    name: "Cardiogen",
    aka: "Peptídeo Biorregulador Cardíaco",
    category: "anti-aging",
    categoryLabel: "Anti-Envelhecimento",
    description: "Peptídeo biorregulador curto desenvolvido especificamente para suporte e proteção do tecido cardíaco. Faz parte da série de biorreguladores peptídicos de Khavinson voltados para diferentes tecidos e órgãos, sendo este direcionado ao miocárdio e ao sistema cardiovascular como um todo.",
    mechanism: "O Cardiogen atua regulando a expressão gênica em cardiomiócitos (células do músculo cardíaco). Penetra nas células cardíacas e modula a transcrição de genes envolvidos na contratilidade miocárdica, metabolismo energético cardíaco e resistência ao estresse oxidativo. Promove a síntese de proteínas estruturais e funcionais do miocárdio, potencialmente retardando a degeneração cardíaca associada ao envelhecimento.",
    benefits: [
      "Suporte ao tecido cardíaco e miocárdio",
      "Cardioproteção contra dano oxidativo",
      "Potencial na manutenção da função contrátil cardíaca",
      "Proteção contra degeneração cardíaca relacionada à idade",
      "Suporte ao metabolismo energético do coração"
    ],
    sideEffects: [
      { name: "Efeitos adversos mínimos documentados", severity: "rare" }
    ],
    dosage: [
      { protocol: "Padrão", dose: "10-20mg por dia por 10-15 dias", notes: "Ciclos de 10-15 dias, repetidos a cada 3-6 meses. Pode ser combinado com outros biorreguladores vasculares como o Vesugen." }
    ],
    administration: "Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "cartalax",
    name: "Cartalax",
    aka: "Peptídeo Biorregulador Ala-Glu-Asp",
    category: "anti-aging",
    categoryLabel: "Anti-Envelhecimento",
    description: "Tripeptídeo biorregulador (alanina-ácido glutâmico-ácido aspártico) desenvolvido para suporte do tecido cartilaginoso e sistema musculoesquelético. Pertence à classe de biorreguladores peptídicos de Khavinson e é direcionado à manutenção e regeneração da cartilagem, com potencial aplicação em condições degenerativas articulares associadas ao envelhecimento.",
    mechanism: "O Cartalax atua na regulação da expressão gênica em condrócitos (células da cartilagem) e células do tecido musculoesquelético. Modula a transcrição de genes envolvidos na síntese de proteoglicanos, colágeno tipo II e outros componentes da matriz cartilaginosa. Promove a regeneração da cartilagem e pode reduzir os processos degenerativos que levam à osteoartrite e outras doenças articulares.",
    benefits: [
      "Suporte à saúde e regeneração da cartilagem",
      "Melhora da saúde musculoesquelética geral",
      "Potencial na prevenção da degeneração articular",
      "Estímulo à síntese de componentes da matriz cartilaginosa",
      "Suporte à mobilidade e flexibilidade articular"
    ],
    sideEffects: [
      { name: "Efeitos adversos mínimos documentados", severity: "rare" }
    ],
    dosage: [
      { protocol: "Padrão", dose: "10-20mg por dia por 10-15 dias", notes: "Administrar em ciclos, repetindo a cada 3-6 meses. Especialmente indicado para indivíduos com desgaste articular ou atletas." }
    ],
    administration: "Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "crystagen",
    name: "Crystagen",
    aka: "Peptídeo Biorregulador Imunológico",
    category: "anti-aging",
    categoryLabel: "Anti-Envelhecimento",
    description: "Peptídeo biorregulador curto desenvolvido para suporte do sistema imunológico, particularmente do timo. Faz parte da série de biorreguladores de Khavinson e é direcionado à manutenção e restauração da função tímica, que declina naturalmente com a involução do timo durante o envelhecimento (imunosenescência).",
    mechanism: "O Crystagen atua na regulação da expressão gênica em timócitos e células imunológicas. Modula a transcrição de genes envolvidos na maturação de linfócitos T, produção de citocinas e regulação da resposta imune. Ao promover a função do timo, pode ajudar a contrabalançar a imunosenescência, restaurando parcialmente a capacidade do sistema imunológico de responder a novos antígenos e controlar infecções.",
    benefits: [
      "Suporte ao sistema imunológico e função tímica",
      "Regulação da imunidade adaptativa",
      "Potencial na redução da imunosenescência",
      "Promoção da maturação de linfócitos T",
      "Fortalecimento das defesas imunológicas contra infecções"
    ],
    sideEffects: [
      { name: "Efeitos adversos mínimos documentados", severity: "rare" }
    ],
    dosage: [
      { protocol: "Padrão", dose: "10-20mg por dia por 10-15 dias", notes: "Ciclos de 10-15 dias, repetidos a cada 3-6 meses. Pode ser especialmente benéfico em indivíduos idosos com imunosenescência." }
    ],
    administration: "Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "cortagen",
    name: "Cortagen",
    aka: "Peptídeo Biorregulador do Córtex Cerebral",
    category: "anti-aging",
    categoryLabel: "Anti-Envelhecimento",
    description: "Peptídeo biorregulador curto desenvolvido especificamente para suporte e proteção do córtex cerebral. Pertence à classe de biorreguladores peptídicos de Khavinson e é direcionado à manutenção da função neural cortical, com potencial aplicação na prevenção do declínio cognitivo associado ao envelhecimento.",
    mechanism: "O Cortagen atua na regulação da expressão gênica em neurônios corticais. Penetra nas células nervosas e modula a transcrição de genes envolvidos na neurotransmissão, plasticidade sináptica e sobrevivência neuronal. Promove a síntese de fatores neurotróficos endógenos e proteínas sinápticas, potencialmente preservando a integridade e função do córtex cerebral contra a neurodegeneração associada ao envelhecimento.",
    benefits: [
      "Suporte ao córtex cerebral e função neuronal",
      "Melhora da função cognitiva",
      "Neuroproteção contra degeneração relacionada à idade",
      "Promoção da plasticidade sináptica",
      "Potencial na preservação da memória e aprendizado"
    ],
    sideEffects: [
      { name: "Efeitos adversos mínimos documentados", severity: "rare" }
    ],
    dosage: [
      { protocol: "Padrão", dose: "10-20mg por dia por 10-15 dias", notes: "Administrar em ciclos de 10-15 dias, repetindo a cada 3-6 meses. Pode ser combinado com Pinealon para efeito sinérgico neuroprotetor." }
    ],
    administration: "Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "bronchogen",
    name: "Bronchogen",
    aka: "Peptídeo Biorregulador Respiratório",
    category: "anti-aging",
    categoryLabel: "Anti-Envelhecimento",
    description: "Peptídeo biorregulador curto desenvolvido para suporte do tecido pulmonar e sistema respiratório. Faz parte da série de biorreguladores peptídicos de Khavinson e é direcionado à manutenção e regeneração do epitélio broncopulmonar, com potencial aplicação na proteção contra o envelhecimento e degeneração do tecido respiratório.",
    mechanism: "O Bronchogen atua na regulação da expressão gênica em células do epitélio broncopulmonar. Modula a transcrição de genes envolvidos na produção de surfactante, integridade da barreira epitelial pulmonar e mecanismos de defesa mucociliar. Promove a síntese de proteínas estruturais e funcionais do tecido respiratório, potencialmente melhorando a capacidade pulmonar e a resistência a agressores ambientais.",
    benefits: [
      "Suporte ao tecido respiratório e pulmonar",
      "Manutenção da saúde broncopulmonar",
      "Potencial na proteção do epitélio pulmonar",
      "Suporte à função mucociliar e defesa pulmonar",
      "Proteção contra degeneração respiratória relacionada à idade"
    ],
    sideEffects: [
      { name: "Efeitos adversos mínimos documentados", severity: "rare" }
    ],
    dosage: [
      { protocol: "Padrão", dose: "10-20mg por dia por 10-15 dias", notes: "Ciclos de 10-15 dias, repetidos a cada 3-6 meses. Pode ser indicado para indivíduos com exposição a poluentes ou com histórico de doenças pulmonares." }
    ],
    administration: "Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Pesquisa"
  },

  // ========================================
  // SKIN / PELE E ESTÉTICA
  // ========================================
  {
    id: "melanotan-1",
    name: "Melanotan I",
    aka: "Afamelanotide / MT-1",
    category: "skin",
    categoryLabel: "Pele e Estética",
    description: "Análogo sintético do hormônio estimulante de alfa-melanócitos (alfa-MSH), composto por 13 aminoácidos com uma substituição que lhe confere maior estabilidade e duração de ação. O Melanotan I (afamelanotide) é aprovado na União Europeia sob o nome comercial Scenesse para o tratamento da protoporfiria eritropoiética (PPE), uma doença genética rara que causa fotossensibilidade extrema.",
    mechanism: "O Melanotan I liga-se ao receptor de melanocortina tipo 1 (MC1R) nos melanócitos da pele, ativando a via de sinalização AMPc/PKA que resulta no aumento da produção de eumelanina (pigmento escuro). A eumelanina é o tipo de melanina mais fotoprotetor, absorvendo radiação UV e neutralizando radicais livres. Diferente do Melanotan II, o MT-1 é mais seletivo para o MC1R, resultando em menos efeitos colaterais.",
    benefits: [
      "Bronzeamento da pele sem exposição excessiva ao sol",
      "Proteção contra danos da radiação UV",
      "Potencial no tratamento do vitiligo",
      "Tratamento aprovado para protoporfiria eritropoiética (PPE)",
      "Aumento da produção de eumelanina fotoprotetora",
      "Redução do risco de queimaduras solares"
    ],
    sideEffects: [
      { name: "Náusea", severity: "common" },
      { name: "Rubor facial (flushing)", severity: "common" },
      { name: "Fadiga", severity: "occasional" },
      { name: "Escurecimento de nevos (pintas)", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Padrão", dose: "1mg por dia por 10 dias, depois manutenção", notes: "Fase inicial de 10 dias seguida de doses de manutenção conforme necessidade. A exposição solar moderada potencializa o efeito bronzeador." }
    ],
    administration: "Subcutânea",
    halfLife: "~30 minutos",
    status: "approved",
    statusLabel: "Aprovado FDA"
  },
  {
    id: "melanotan-2",
    name: "Melanotan II",
    aka: "MT-2",
    category: "skin",
    categoryLabel: "Pele e Estética",
    description: "Análogo cíclico sintético do hormônio estimulante de alfa-melanócitos (alfa-MSH), composto por 7 aminoácidos em estrutura cíclica. Diferente do Melanotan I, o MT-2 é um agonista não seletivo dos receptores de melanocortina, ligando-se a MC1R, MC3R, MC4R e MC5R, o que resulta em uma gama mais ampla de efeitos biológicos além do bronzeamento.",
    mechanism: "O Melanotan II ativa múltiplos receptores de melanocortina: o MC1R nos melanócitos estimula a melanogênese e bronzeamento; o MC4R no hipotálamo afeta o comportamento sexual, apetite e metabolismo; o MC3R influencia o metabolismo energético. Sua estrutura cíclica lhe confere maior resistência à degradação enzimática. A ativação do MC4R é responsável pelos efeitos sobre a função erétil e supressão do apetite.",
    benefits: [
      "Bronzeamento intenso da pele",
      "Potencial melhora da função erétil (via MC4R)",
      "Supressão do apetite e potencial para controle de peso",
      "Proteção cutânea contra radiação UV",
      "Aumento da libido"
    ],
    sideEffects: [
      { name: "Náusea", severity: "common" },
      { name: "Rubor facial (flushing)", severity: "common" },
      { name: "Resposta erétil (em homens)", severity: "common" },
      { name: "Escurecimento de nevos (pintas)", severity: "occasional" },
      { name: "Tontura", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Fase de carga", dose: "0,25-0,5mg por dia", notes: "Iniciar com doses baixas (0,25mg) para avaliar tolerância. Aumentar gradualmente. A fase de carga dura até atingir o bronzeamento desejado." },
      { protocol: "Manutenção", dose: "0,5-1mg por semana", notes: "Após atingir a pigmentação desejada, manter com doses semanais. Exposição solar moderada potencializa e mantém o efeito." }
    ],
    administration: "Subcutânea",
    halfLife: "~30 minutos",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "snap-8",
    name: "Snap-8",
    aka: "Acetyl Octapeptide-3 / Acetil Octapeptídeo-3",
    category: "skin",
    categoryLabel: "Pele e Estética",
    description: "Octapeptídeo cosmético (sequência de 8 aminoácidos com grupo acetil) que atua como um mimetizador tópico do efeito da toxina botulínica, relaxando a musculatura facial para reduzir linhas de expressão e rugas. É uma extensão do peptídeo Argireline (Acetil Hexapeptídeo-3), com dois aminoácidos adicionais que potencializam sua eficácia.",
    mechanism: "O Snap-8 interfere no complexo SNARE (soluble N-ethylmaleimide-sensitive factor attachment protein receptor), o mesmo alvo da toxina botulínica, porém de forma tópica e não invasiva. Compete com a proteína SNAP-25 no complexo de fusão vesicular na junção neuromuscular, reduzindo a liberação de acetilcolina e consequentemente diminuindo a contração muscular. Este relaxamento muscular suaviza as rugas de expressão, especialmente na região periorbicular e frontal.",
    benefits: [
      "Redução de rugas e linhas de expressão faciais",
      "Relaxamento muscular facial (efeito tipo toxina botulínica)",
      "Redução de linhas finas ao redor dos olhos e testa",
      "Aplicação não invasiva e indolor",
      "Compatível com outras formulações cosméticas"
    ],
    sideEffects: [
      { name: "Irritação cutânea leve", severity: "rare" }
    ],
    dosage: [
      { protocol: "Tópico", dose: "Aplicação tópica em concentração de 3-10%", notes: "Aplicar sobre a pele limpa nas áreas com rugas de expressão, 1-2 vezes ao dia. Resultados geralmente visíveis após 2-4 semanas de uso contínuo." }
    ],
    administration: "Tópica",
    halfLife: "Uso tópico apenas",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "matrixyl",
    name: "Matrixyl",
    aka: "Palmitoyl Pentapeptide-4 / Palmitoil Pentapeptídeo-4",
    category: "skin",
    categoryLabel: "Pele e Estética",
    description: "Pentapeptídeo cosmético (Lys-Thr-Thr-Lys-Ser) ligado a um ácido graxo palmítico para melhorar a penetração cutânea. É um dos peptídeos cosméticos mais estudados e amplamente utilizados na indústria de cuidados com a pele, desenvolvido pela empresa francesa Sederma. O Matrixyl é reconhecido por sua capacidade de estimular a produção de colágeno e componentes da matriz extracelular.",
    mechanism: "O Matrixyl atua como um matrikina, um fragmento peptídico que mimetiza os produtos de degradação da matriz extracelular. Ao se ligar aos receptores na superfície dos fibroblastos, sinaliza que a matriz está danificada e precisa de reparação, estimulando a síntese de colágeno tipos I, III e IV, fibronectina e ácido hialurônico. O grupo palmitoil facilita a penetração através da barreira lipídica da pele, aumentando significativamente a biodisponibilidade do peptídeo nas camadas dérmicas.",
    benefits: [
      "Estimulação da produção de colágeno e elastina",
      "Redução de rugas e linhas finas",
      "Melhora da firmeza e elasticidade da pele",
      "Promoção da síntese de ácido hialurônico",
      "Reparação da matriz extracelular dérmica",
      "Suporte à hidratação profunda da pele"
    ],
    sideEffects: [
      { name: "Irritação cutânea leve", severity: "rare" }
    ],
    dosage: [
      { protocol: "Tópico", dose: "Aplicação tópica em concentração de 2-8%", notes: "Aplicar sobre a pele limpa 1-2 vezes ao dia. Pode ser combinado com outros ativos cosméticos como vitamina C e retinol. Resultados progressivos ao longo de semanas." }
    ],
    administration: "Tópica",
    halfLife: "Uso tópico",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "lemon-bottle",
    name: "Lemon Bottle",
    aka: "Solução Lipolítica Lemon Bottle",
    category: "skin",
    categoryLabel: "Pele e Estética",
    description: "Solução lipolítica avançada para dissolução localizada de gordura, composta por uma combinação de ingredientes ativos incluindo riboflavina (vitamina B2), lecitina e bromelina. Embora não seja um peptídeo propriamente dito, é amplamente utilizado em protocolos estéticos para redução de gordura localizada em áreas como papada, abdômen, flancos e coxas, aplicado por profissionais de saúde.",
    mechanism: "A solução atua através de múltiplos mecanismos: a lecitina emulsifica as membranas dos adipócitos, facilitando a liberação dos lipídios armazenados; a bromelina (enzima derivada do abacaxi) auxilia na degradação de proteínas da matriz extracelular do tecido adiposo; e a riboflavina acelera o metabolismo dos ácidos graxos liberados. O resultado é a lipólise (destruição) dos adipócitos tratados e a subsequente metabolização da gordura liberada pelo organismo.",
    benefits: [
      "Dissolução localizada de gordura subcutânea",
      "Contorno corporal não cirúrgico",
      "Redução de papada e gordura submentoniana",
      "Remodelação de áreas com gordura resistente",
      "Procedimento minimamente invasivo comparado à lipoaspiração"
    ],
    sideEffects: [
      { name: "Inchaço na área tratada", severity: "common" },
      { name: "Equimose (hematoma)", severity: "common" },
      { name: "Dor no local da aplicação", severity: "common" },
      { name: "Vermelhidão localizada", severity: "common" }
    ],
    dosage: [
      { protocol: "Tratamento estético", dose: "Conforme área de tratamento, aplicação profissional", notes: "Deve ser aplicado exclusivamente por profissional de saúde qualificado. O número de sessões varia de 2 a 5, com intervalos de 1-2 semanas. Volume e pontos de aplicação determinados pelo profissional." }
    ],
    administration: "Injeção local",
    halfLife: "N/A",
    status: "research",
    statusLabel: "Pesquisa"
  },

  // ========================================
  // COGNITIVE / COGNITIVO
  // ========================================
  {
    id: "selank",
    name: "Selank",
    aka: "Peptídeo Ansiolítico Selank / Análogo da Tuftsina",
    category: "cognitive",
    categoryLabel: "Cognitivo",
    description: "Heptapeptídeo sintético desenvolvido no Instituto de Genética Molecular da Academia Russa de Ciências, composto pela sequência da tuftsina (Thr-Lys-Pro-Arg) com adição de três aminoácidos (Pro-Gly-Pro) para aumentar sua estabilidade metabólica. O Selank é aprovado na Rússia como ansiolítico e nootrópico, sendo utilizado para transtornos de ansiedade e melhora cognitiva.",
    mechanism: "O Selank modula o sistema GABAérgico sem se ligar diretamente aos receptores GABA, diferenciando-se dos benzodiazepínicos tradicionais. Influencia a expressão de genes relacionados ao BDNF (fator neurotrófico derivado do cérebro), aumentando seus níveis no hipocampo. Também modula a serotonina, dopamina e noradrenalina, e regula a expressão de interleucinas IL-6 e IL-10, exercendo efeito imunomodulador. Não causa dependência, sedação significativa ou déficit cognitivo.",
    benefits: [
      "Efeito ansiolítico sem sedação ou dependência",
      "Melhora cognitiva e da capacidade de aprendizado",
      "Imunomodulação e suporte ao sistema imunológico",
      "Aumento dos níveis de BDNF no cérebro",
      "Melhora da memória e concentração",
      "Estabilização do humor e redução do estresse",
      "Potencial neuroprotetor"
    ],
    sideEffects: [
      { name: "Fadiga leve", severity: "occasional" },
      { name: "Irritação nasal", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Intranasal", dose: "250-500mcg 1-2x ao dia via intranasal", notes: "Administração intranasal é a via preferida. Pode ser usado diariamente por períodos prolongados sem desenvolvimento de tolerância significativa. Efeitos geralmente percebidos nos primeiros dias." }
    ],
    administration: "Nasal",
    halfLife: "~Alguns minutos",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "semax",
    name: "Semax",
    aka: "Análogo Sintético de ACTH(4-10)",
    category: "cognitive",
    categoryLabel: "Cognitivo",
    description: "Heptapeptídeo sintético baseado no fragmento 4-10 do hormônio adrenocorticotrófico (ACTH), com adição do tripeptídeo Pro-Gly-Pro para estabilidade. Desenvolvido no Instituto de Genética Molecular da Academia Russa de Ciências, o Semax é aprovado na Rússia para tratamento de doenças cerebrovasculares, distúrbios cognitivos e como agente nootrópico. Notavelmente, não possui atividade hormonal do ACTH.",
    mechanism: "O Semax atua através de múltiplos mecanismos neuroquímicos: aumenta significativamente os níveis de BDNF e NGF no cérebro, promovendo a neuroplasticidade e a sobrevivência neuronal. Modula os sistemas dopaminérgico, serotoninérgico e colinérgico. Influencia a expressão de mais de 100 genes relacionados ao sistema imunológico e vascular no cérebro. Melhora o fluxo sanguíneo cerebral e possui propriedades neuroprotetoras contra dano isquêmico e oxidativo.",
    benefits: [
      "Melhora significativa da função cognitiva e memória",
      "Neuroproteção contra dano isquêmico (AVC)",
      "Aumento dos níveis de BDNF e NGF cerebrais",
      "Suporte à recuperação pós-AVC",
      "Melhora da atenção, foco e capacidade de aprendizado",
      "Potencial no tratamento de TDAH e distúrbios cognitivos",
      "Estimulação da neuroplasticidade"
    ],
    sideEffects: [
      { name: "Irritação nasal", severity: "occasional" },
      { name: "Dor de cabeça", severity: "rare" }
    ],
    dosage: [
      { protocol: "Intranasal", dose: "200-600mcg por dia via intranasal", notes: "Dividir em 2-3 administrações ao longo do dia. Ciclos de 10-20 dias são comuns na prática clínica russa. Pode ser combinado com outros nootrópicos." }
    ],
    administration: "Nasal",
    halfLife: "~Alguns minutos",
    status: "approved",
    statusLabel: "Aprovado FDA"
  },
  {
    id: "dihexa",
    name: "Dihexa",
    aka: "Análogo da Angiotensina IV / N-hexanoyl-Tyr-Ile-(6) aminohexanoic amide",
    category: "cognitive",
    categoryLabel: "Cognitivo",
    description: "Oligopeptídeo sintético derivado da angiotensina IV, desenvolvido na Universidade Estadual de Washington pelos pesquisadores Joseph Harding e Jay Wright. O Dihexa demonstrou em estudos pré-clínicos ser até 10 milhões de vezes (7 ordens de magnitude) mais potente que o BDNF na promoção da formação de novas sinapses, tornando-o um dos compostos pró-cognitivos mais potentes já identificados.",
    mechanism: "O Dihexa liga-se ao receptor de fator de crescimento de hepatócitos (c-Met/HGF) no cérebro, ativando cascatas de sinalização que promovem a sinaptogênese (formação de novas sinapses) e a espinogênese (formação de novas espinhas dendríticas). Ao facilitar a dimerização do receptor c-Met, potencializa a ação do HGF como fator neurotrófico. Também inibe a enzima que degrada o HGF, prolongando seus efeitos. Isso resulta em dramática melhora na conectividade neural e na formação de memórias.",
    benefits: [
      "Melhora cognitiva extraordinariamente potente em estudos pré-clínicos",
      "Promoção da sinaptogênese e formação de novas conexões neurais",
      "Melhora significativa da memória e aprendizado",
      "Potência muito superior ao BDNF (7 ordens de magnitude em estudos)",
      "Biodisponibilidade oral (atravessa a barreira hematoencefálica)",
      "Potencial no tratamento de doenças neurodegenerativas"
    ],
    sideEffects: [
      { name: "Não bem caracterizados; dor de cabeça relatada", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Oral", dose: "10-20mg por dia via oral", notes: "Uma das vantagens do Dihexa é sua biodisponibilidade oral. Dados de dosagem em humanos são limitados e baseados principalmente em extrapolações de estudos animais." }
    ],
    administration: "Oral/Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "pe-22-28",
    name: "PE-22-28",
    aka: "Análogo da Spadina",
    category: "cognitive",
    categoryLabel: "Cognitivo",
    description: "Peptídeo sintético derivado da spadina (um peptídeo endógeno de 17 aminoácidos), contendo os resíduos 22 a 28 da sequência original. A spadina foi identificada como um antidepressivo natural endógeno, e o PE-22-28 é um fragmento otimizado que mantém a atividade antidepressiva com maior estabilidade. É investigado como potencial tratamento para depressão resistente.",
    mechanism: "O PE-22-28 atua como bloqueador do canal de potássio TREK-1 (TWIK-related potassium channel 1). O canal TREK-1 é um regulador negativo da neurotransmissão serotoninérgica, e sua inibição resulta em aumento da atividade serotonérgica. Diferente dos antidepressivos tradicionais (ISRS), que bloqueiam a recaptação de serotonina, o PE-22-28 atua a montante, modulando diretamente a liberação neuronal. Também promove a neurogênese no hipocampo, similar ao efeito dos antidepressivos convencionais, porém com início de ação potencialmente mais rápido.",
    benefits: [
      "Efeito antidepressivo via mecanismo inovador",
      "Modulação do canal TREK-1 de potássio",
      "Promoção da neurogênese hipocampal",
      "Potencial para início de ação mais rápido que antidepressivos tradicionais",
      "Melhora da resiliência ao estresse",
      "Suporte à plasticidade neural"
    ],
    sideEffects: [
      { name: "Não bem caracterizados em humanos", severity: "rare" }
    ],
    dosage: [
      { protocol: "Pesquisa", dose: "50-200mcg por dia", notes: "Dados de dosagem humana são limitados. Pode ser administrado por via subcutânea ou nasal conforme o protocolo de pesquisa." }
    ],
    administration: "Subcutânea/Nasal",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "p21",
    name: "P21",
    aka: "P021 / Peptídeo Derivado do CNTF",
    category: "cognitive",
    categoryLabel: "Cognitivo",
    description: "Peptidomitico derivado do fator neurotrófico ciliar (CNTF), composto por um tetrapeptídeo com modificações para aumentar a estabilidade e biodisponibilidade. Desenvolvido como um agente neurotrófico de molécula pequena que reproduz os efeitos benéficos do CNTF sem seus efeitos colaterais sistêmicos. É investigado como potencial tratamento para a doença de Alzheimer e outras condições neurodegenerativas.",
    mechanism: "O P21 promove a neurogênese no hipocampo adulto, estimulando a proliferação e diferenciação de células progenitoras neurais. Aumenta a expressão de BDNF e reduz a fosforilação da proteína tau, dois fatores críticos na patogênese da doença de Alzheimer. Ao contrário do CNTF completo, o P21 não ativa a via JAK-STAT de forma sistêmica, evitando efeitos adversos como caquexia. Melhora a plasticidade sináptica e a potenciação de longo prazo (LTP) no hipocampo.",
    benefits: [
      "Promoção da neurogênese hipocampal",
      "Potencial no tratamento da doença de Alzheimer",
      "Aumento dos níveis de BDNF cerebrais",
      "Redução da fosforilação patológica da proteína tau",
      "Melhora da plasticidade sináptica e memória",
      "Efeito neurotrófico sem toxicidade sistêmica do CNTF"
    ],
    sideEffects: [
      { name: "Não bem caracterizados em humanos", severity: "rare" }
    ],
    dosage: [
      { protocol: "Pesquisa", dose: "Estudado primariamente em modelos pré-clínicos", notes: "A maioria dos dados vem de estudos em camundongos transgênicos para Alzheimer. Protocolos de dosagem humana ainda não estão estabelecidos." }
    ],
    administration: "Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "adamax",
    name: "Adamax",
    aka: "N-Acetil Semax Amida / NASA",
    category: "cognitive",
    categoryLabel: "Cognitivo",
    description: "Derivado aprimorado do Semax com modificações químicas que incluem um grupo N-acetil na extremidade amino-terminal e uma amida na extremidade carboxi-terminal. Estas modificações aumentam significativamente a estabilidade metabólica, a penetração na barreira hematoencefálica e a duração de ação em comparação ao Semax original, tornando-o um nootrópico mais potente e de efeito mais prolongado.",
    mechanism: "O Adamax compartilha os mecanismos centrais do Semax, porém com farmacocinética aprimorada. Aumenta a expressão de BDNF e NGF de forma mais sustentada, modula os sistemas dopaminérgico, serotoninérgico e colinérgico com maior potência. As modificações N-acetil e amida protegem o peptídeo da degradação por aminopeptidases e carboxipeptidases, respectivamente, prolongando sua meia-vida e permitindo maior acúmulo cerebral. Demonstra maior atividade neuroprotetora e nootrópica por dose administrada.",
    benefits: [
      "Melhora cognitiva aprimorada em relação ao Semax",
      "Neuroproteção mais potente e sustentada",
      "Aumento prolongado dos níveis de BDNF",
      "Duração de ação superior ao Semax original",
      "Melhora da memória, atenção e capacidade de aprendizado",
      "Maior resistência à degradação enzimática",
      "Potencial efeito ansiolítico"
    ],
    sideEffects: [
      { name: "Irritação nasal", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Intranasal", dose: "200-600mcg por dia via intranasal", notes: "Dose similar ao Semax, porém com efeitos mais duradouros por administração. Dividir em 1-2 doses diárias. Pode ser usado em ciclos ou continuamente." }
    ],
    administration: "Nasal",
    halfLife: "Mais longa que o Semax",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "orexin-a",
    name: "Orexina A",
    aka: "Hipocretina-1",
    category: "cognitive",
    categoryLabel: "Cognitivo",
    description: "Neuropeptídeo de 33 aminoácidos produzido exclusivamente por um pequeno grupo de neurônios no hipotálamo lateral e posterior. A Orexina A (também chamada hipocretina-1) desempenha papel fundamental na regulação do ciclo sono-vigília, estado de alerta, cognição e metabolismo energético. A deficiência de orexina é a causa primária da narcolepsia tipo 1.",
    mechanism: "A Orexina A liga-se a dois receptores acoplados à proteína G: OX1R (com alta afinidade) e OX2R. A ativação destes receptores em diversas regiões cerebrais promove a vigília e o estado de alerta: no locus coeruleus estimula a liberação de noradrenalina, nos núcleos da rafe estimula a serotonina, na área tegmental ventral estimula a dopamina, e no núcleo tuberomamilar estimula a histamina. A Orexina A também estabiliza a transição entre estados de vigília e sono, prevenindo transições inapropriadas que ocorrem na narcolepsia.",
    benefits: [
      "Promoção do estado de vigília e alerta",
      "Melhora da excitação cognitiva e atenção",
      "Suporte à função atencional e capacidade de foco",
      "Potencial no tratamento da narcolepsia",
      "Estabilização do ciclo sono-vigília",
      "Modulação do metabolismo energético"
    ],
    sideEffects: [
      { name: "Elevação da frequência cardíaca", severity: "occasional" },
      { name: "Elevação da pressão arterial", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Pesquisa", dose: "Estudado primariamente em contextos de pesquisa", notes: "Não existem protocolos de dosagem humana padronizados. A maioria dos dados provém de estudos em primatas não humanos e modelos animais de narcolepsia." }
    ],
    administration: "Nasal/Intravenosa",
    halfLife: "~30 minutos",
    status: "research",
    statusLabel: "Pesquisa"
  },
  {
    id: "orexin-b",
    name: "Orexina B",
    aka: "Hipocretina-2",
    category: "cognitive",
    categoryLabel: "Cognitivo",
    description: "Neuropeptídeo de 28 aminoácidos produzido pelo mesmo grupo de neurônios hipotalâmicos que produz a Orexina A. A Orexina B (hipocretina-2) compartilha uma região C-terminal homóloga com a Orexina A, mas é menos estável e possui perfil de ligação diferente aos receptores de orexina, com afinidade preferencial pelo receptor OX2R. Assim como a Orexina A, está envolvida na regulação do sono, vigília e metabolismo.",
    mechanism: "A Orexina B liga-se preferencialmente ao receptor OX2R, com afinidade significativamente menor para o OX1R em comparação à Orexina A. O OX2R é particularmente importante na regulação do sono-vigília e é altamente expresso no núcleo tuberomamilar (histaminérgico) e no locus coeruleus (noradrenérgico). A ativação destes receptores promove a liberação de neurotransmissores excitatórios que mantêm o estado de vigília. A Orexina B também modula circuitos de alimentação e recompensa no hipotálamo lateral.",
    benefits: [
      "Regulação do ciclo sono-vigília",
      "Promoção do estado de alerta e excitação",
      "Modulação do apetite e comportamento alimentar",
      "Suporte à regulação metabólica",
      "Potencial terapêutico em distúrbios do sono"
    ],
    sideEffects: [
      { name: "Efeitos similares à Orexina A (elevação de frequência cardíaca e pressão)", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Pesquisa", dose: "Estudado primariamente em contextos de pesquisa", notes: "Dados de dosagem humana são limitados. A menor estabilidade da Orexina B em comparação à Orexina A resulta em meia-vida mais curta e pode requerer formulações especiais." }
    ],
    administration: "Nasal/Intravenosa",
    halfLife: "~5 minutos",
    status: "research",
    statusLabel: "Pesquisa"
  }
];
