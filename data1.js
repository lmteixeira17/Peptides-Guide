var peptidesPart1 = [
  // =============================================
  // CATEGORIA: PERDA DE PESO (weight-loss)
  // =============================================
  {
    id: "semaglutide",
    name: "Semaglutide",
    aka: "Ozempic, Wegovy, Rybelsus",
    category: "weight-loss",
    categoryLabel: "Perda de Peso",
    description: "Semaglutide é um agonista do receptor de GLP-1 (peptídeo semelhante ao glucagon tipo 1) utilizado no tratamento da obesidade e diabetes tipo 2. Atua reduzindo o apetite e a ingestão calórica, promovendo perda de peso significativa de até 15-17% do peso corporal em estudos clínicos como o STEP. É administrado por via subcutânea semanalmente ou por via oral na formulação Rybelsus.",
    mechanism: "Liga-se ao receptor de GLP-1 no pâncreas, cérebro e trato gastrointestinal, estimulando a secreção de insulina dependente de glicose, suprimindo a liberação de glucagon, retardando o esvaziamento gástrico e atuando nos centros hipotalâmicos de saciedade para reduzir o apetite.",
    benefits: [
      "Perda de peso substancial (até 15-17% do peso corporal)",
      "Melhora do controle glicêmico e redução da HbA1c",
      "Redução do risco cardiovascular comprovada no estudo SELECT",
      "Melhora de marcadores metabólicos como triglicerídeos e pressão arterial",
      "Redução da esteatose hepática (gordura no fígado)"
    ],
    sideEffects: [
      { name: "Náusea", severity: "common" },
      { name: "Vômito", severity: "common" },
      { name: "Diarreia", severity: "common" },
      { name: "Constipação", severity: "occasional" },
      { name: "Pancreatite", severity: "rare" }
    ],
    dosage: [
      { protocol: "Semanal (escalonamento)", dose: "0.25-2.4mg/semana", notes: "Iniciar com 0.25mg/semana por 4 semanas, aumentar para 0.5mg, depois 1.0mg, 1.7mg e finalmente 2.4mg. Cada dose mantida por pelo menos 4 semanas antes do escalonamento." }
    ],
    administration: "Subcutânea",
    halfLife: "~7 dias",
    status: "approved",
    statusLabel: "Aprovado FDA"
  },
  {
    id: "tirzepatide",
    name: "Tirzepatide",
    aka: "Mounjaro, Zepbound",
    category: "weight-loss",
    categoryLabel: "Perda de Peso",
    description: "Tirzepatide é o primeiro agonista duplo dos receptores GIP e GLP-1, representando uma nova classe terapêutica para obesidade e diabetes tipo 2. Nos estudos SURMOUNT, demonstrou perda de peso de até 22.5% do peso corporal, superando resultados de monoterapias anteriores. Foi aprovado pela FDA tanto para diabetes (Mounjaro) quanto para controle de peso (Zepbound).",
    mechanism: "Ativa simultaneamente os receptores de GIP (polipeptídeo insulinotrópico dependente de glicose) e GLP-1, potencializando a secreção de insulina, reduzindo a secreção de glucagon, retardando o esvaziamento gástrico e atuando nos centros cerebrais de controle do apetite com efeito sinérgico superior ao da ativação isolada de GLP-1.",
    benefits: [
      "Perda de peso superior a outros agonistas de GLP-1 (até 22.5%)",
      "Excelente controle glicêmico com redução significativa da HbA1c",
      "Melhora da sensibilidade à insulina",
      "Redução de triglicerídeos e melhora do perfil lipídico",
      "Redução da pressão arterial sistólica"
    ],
    sideEffects: [
      { name: "Náusea", severity: "common" },
      { name: "Diarreia", severity: "common" },
      { name: "Diminuição do apetite", severity: "common" },
      { name: "Vômito", severity: "occasional" },
      { name: "Pancreatite", severity: "rare" }
    ],
    dosage: [
      { protocol: "Semanal (escalonamento)", dose: "2.5-15mg/semana", notes: "Iniciar com 2.5mg/semana por 4 semanas, escalonar em incrementos de 2.5mg (5mg, 7.5mg, 10mg, 12.5mg, 15mg). Cada dose mantida por pelo menos 4 semanas." }
    ],
    administration: "Subcutânea",
    halfLife: "~5 dias",
    status: "approved",
    statusLabel: "Aprovado FDA"
  },
  {
    id: "retatrutide",
    name: "Retatrutide",
    aka: "",
    category: "weight-loss",
    categoryLabel: "Perda de Peso",
    description: "Retatrutide é um agonista triplo dos receptores GLP-1, GIP e glucagon, representando a próxima geração de terapias baseadas em incretinas para obesidade. Em estudos de Fase 2, demonstrou perda de peso de até 24% do peso corporal em 48 semanas, o maior resultado já observado com terapia farmacológica para obesidade. Encontra-se atualmente em estudos clínicos de Fase 3.",
    mechanism: "Atua como agonista simultâneo de três receptores: GLP-1 (redução do apetite e controle glicêmico), GIP (potencialização do efeito incretínico) e receptor de glucagon (aumento do gasto energético e da lipólise hepática). A ativação do receptor de glucagon diferencia o retatrutide, promovendo termogênese e oxidação de gordura.",
    benefits: [
      "Perda de peso sem precedentes (até 24% em estudos clínicos)",
      "Triplo mecanismo de ação com efeitos sinérgicos",
      "Aumento do gasto energético via receptor de glucagon",
      "Melhora significativa do controle glicêmico",
      "Redução da gordura hepática superior a 80% em estudos"
    ],
    sideEffects: [
      { name: "Náusea", severity: "common" },
      { name: "Diarreia", severity: "common" },
      { name: "Vômito", severity: "occasional" },
      { name: "Constipação", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Semanal (em estudos)", dose: "1-12mg/semana", notes: "Em ensaios clínicos de Fase 2, doses de 1mg, 4mg, 8mg e 12mg/semana foram avaliadas com escalonamento gradual. A dose de 12mg/semana apresentou a maior eficácia." }
    ],
    administration: "Subcutânea",
    halfLife: "~6 dias",
    status: "trial",
    statusLabel: "Fase 3 de Estudos Clínicos"
  },
  {
    id: "liraglutide",
    name: "Liraglutide",
    aka: "Saxenda, Victoza",
    category: "weight-loss",
    categoryLabel: "Perda de Peso",
    description: "Liraglutide é um agonista do receptor de GLP-1 com 97% de homologia com o GLP-1 humano, aprovado para diabetes tipo 2 (Victoza, 1.8mg/dia) e para controle de peso (Saxenda, 3mg/dia). Promove perda de peso média de 5-8% do peso corporal e foi um dos primeiros agonistas de GLP-1 amplamente utilizados para tratamento da obesidade.",
    mechanism: "Liga-se ao receptor de GLP-1, estimulando a secreção de insulina de forma dependente de glicose, inibindo a secreção de glucagon, retardando o esvaziamento gástrico e promovendo saciedade através de ação nos centros hipotalâmicos. Sua cadeia de ácido graxo permite ligação à albumina, prolongando sua meia-vida.",
    benefits: [
      "Perda de peso média de 5-8% do peso corporal",
      "Controle glicêmico eficaz com redução da HbA1c",
      "Redução do risco cardiovascular (estudo LEADER)",
      "Ampla experiência clínica e perfil de segurança bem estabelecido",
      "Melhora de fatores de risco cardiometabólicos"
    ],
    sideEffects: [
      { name: "Náusea", severity: "common" },
      { name: "Vômito", severity: "occasional" },
      { name: "Diarreia", severity: "occasional" },
      { name: "Hipoglicemia", severity: "occasional" },
      { name: "Pancreatite", severity: "rare" }
    ],
    dosage: [
      { protocol: "Diário (escalonamento)", dose: "0.6-3.0mg/dia", notes: "Iniciar com 0.6mg/dia por 1 semana, aumentar em 0.6mg por semana até a dose-alvo de 3.0mg/dia (Saxenda) ou 1.8mg/dia (Victoza). Administrar em qualquer horário do dia." }
    ],
    administration: "Subcutânea",
    halfLife: "~13 horas",
    status: "approved",
    statusLabel: "Aprovado FDA"
  },
  {
    id: "dulaglutide",
    name: "Dulaglutide",
    aka: "Trulicity",
    category: "weight-loss",
    categoryLabel: "Perda de Peso",
    description: "Dulaglutide é um agonista do receptor de GLP-1 de longa duração, formulado como uma proteína de fusão entre o análogo de GLP-1 e a porção Fc de IgG4 humana. Aprovado para diabetes tipo 2, promove perda de peso moderada e possui conveniência de administração semanal. No estudo REWIND, demonstrou benefícios cardiovasculares significativos.",
    mechanism: "Atua como agonista do receptor de GLP-1, estimulando a secreção de insulina dependente de glicose, suprimindo glucagon, retardando o esvaziamento gástrico e promovendo saciedade. Sua estrutura de fusão com Fc de IgG4 confere meia-vida prolongada, permitindo dosagem semanal.",
    benefits: [
      "Administração semanal conveniente com caneta pré-preenchida",
      "Controle glicêmico eficaz com redução da HbA1c",
      "Perda de peso moderada como efeito adicional",
      "Benefício cardiovascular comprovado (estudo REWIND)",
      "Disponível em múltiplas doses para titulação individualizada"
    ],
    sideEffects: [
      { name: "Náusea", severity: "common" },
      { name: "Diarreia", severity: "common" },
      { name: "Vômito", severity: "occasional" },
      { name: "Dor abdominal", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Semanal", dose: "0.75-4.5mg/semana", notes: "Iniciar com 0.75mg/semana. Pode ser aumentada para 1.5mg, 3.0mg ou 4.5mg/semana conforme resposta clínica. Administrar no mesmo dia da semana." }
    ],
    administration: "Subcutânea",
    halfLife: "~5 dias",
    status: "approved",
    statusLabel: "Aprovado FDA"
  },
  {
    id: "mazdutide",
    name: "Mazdutide",
    aka: "",
    category: "weight-loss",
    categoryLabel: "Perda de Peso",
    description: "Mazdutide é um agonista duplo dos receptores de GLP-1 e glucagon desenvolvido pela Innovent Biologics para o tratamento da obesidade e diabetes tipo 2. Em estudos clínicos de Fase 3, demonstrou perda de peso de até 15% em populações asiáticas. Diferencia-se de outros duplos agonistas por combinar GLP-1 com glucagon em vez de GIP.",
    mechanism: "Ativa simultaneamente os receptores de GLP-1 e glucagon. A ativação do receptor de GLP-1 promove saciedade e melhora o controle glicêmico, enquanto a ativação do receptor de glucagon aumenta o gasto energético, a termogênese e a lipólise, potencializando a perda de gordura corporal.",
    benefits: [
      "Perda de peso significativa através de duplo mecanismo de ação",
      "Aumento do gasto energético via agonismo do receptor de glucagon",
      "Melhora do controle glicêmico",
      "Redução da gordura visceral e hepática",
      "Potencial superior à monoterapia com agonistas de GLP-1"
    ],
    sideEffects: [
      { name: "Náusea", severity: "common" },
      { name: "Vômito", severity: "occasional" },
      { name: "Diarreia", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Semanal (em estudos)", dose: "3-9mg/semana", notes: "Em ensaios clínicos de Fase 3, doses de 3mg, 6mg e 9mg/semana foram avaliadas com escalonamento gradual. A dose ideal ainda está sendo definida nos estudos em andamento." }
    ],
    administration: "Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "trial",
    statusLabel: "Fase 3 de Estudos Clínicos"
  },
  {
    id: "survodutide",
    name: "Survodutide",
    aka: "",
    category: "weight-loss",
    categoryLabel: "Perda de Peso",
    description: "Survodutide é um agonista duplo dos receptores de GLP-1 e glucagon desenvolvido pela Boehringer Ingelheim para o tratamento da obesidade, MASH (esteatohepatite metabólica) e diabetes tipo 2. Em estudos de Fase 2, demonstrou perda de peso de até 19% em 46 semanas e reduções significativas da gordura hepática.",
    mechanism: "Atua como agonista duplo dos receptores de GLP-1 e glucagon. O componente GLP-1 reduz o apetite e melhora a homeostase glicêmica, enquanto o agonismo do receptor de glucagon promove lipólise hepática, aumento do gasto energético e termogênese, com efeito particularmente relevante na redução da esteatose hepática.",
    benefits: [
      "Perda de peso robusta (até 19% em estudos de Fase 2)",
      "Redução significativa da gordura hepática (potencial para MASH)",
      "Aumento do gasto energético através do agonismo de glucagon",
      "Melhora do perfil metabólico global",
      "Potencial terapêutico para múltiplas condições metabólicas"
    ],
    sideEffects: [
      { name: "Náusea", severity: "common" },
      { name: "Diarreia", severity: "common" },
      { name: "Vômito", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Semanal (em estudos)", dose: "0.6-4.8mg/semana", notes: "Em ensaios clínicos, doses de 0.6mg até 4.8mg/semana foram testadas com escalonamento gradual a cada 4 semanas. A dose de 4.8mg/semana mostrou maior eficácia." }
    ],
    administration: "Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "trial",
    statusLabel: "Fase 3 de Estudos Clínicos"
  },
  {
    id: "cagrilintide",
    name: "Cagrilintide",
    aka: "",
    category: "weight-loss",
    categoryLabel: "Perda de Peso",
    description: "Cagrilintide é um análogo de longa duração da amilina humana, desenvolvido pela Novo Nordisk para o tratamento da obesidade. A amilina é um hormônio co-secretado com a insulina pelas células beta pancreáticas, com papel na regulação do apetite e saciedade. Em estudos clínicos, demonstrou perda de peso significativa como monoterapia e resultados superiores quando combinado com semaglutide.",
    mechanism: "Atua como agonista dos receptores de amilina no cérebro, especialmente na área postrema e núcleo do trato solitário. Promove saciedade, retarda o esvaziamento gástrico e suprime a secreção de glucagon pós-prandial, reduzindo a ingestão alimentar por mecanismos complementares aos dos agonistas de GLP-1.",
    benefits: [
      "Mecanismo de ação complementar aos agonistas de GLP-1",
      "Perda de peso significativa como monoterapia",
      "Efeito sinérgico quando combinado com semaglutide (CagriSema)",
      "Administração semanal conveniente",
      "Melhora do controle glicêmico pós-prandial"
    ],
    sideEffects: [
      { name: "Náusea", severity: "common" },
      { name: "Reações no local da injeção", severity: "common" },
      { name: "Diarreia", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Semanal (em estudos)", dose: "1.2-4.5mg/semana", notes: "Em ensaios clínicos, doses de 1.2mg a 4.5mg/semana foram avaliadas. Administração subcutânea semanal com escalonamento gradual." }
    ],
    administration: "Subcutânea",
    halfLife: "~7 dias",
    status: "trial",
    statusLabel: "Fase 3 de Estudos Clínicos"
  },
  {
    id: "cagrisema",
    name: "CagriSema",
    aka: "",
    category: "weight-loss",
    categoryLabel: "Perda de Peso",
    description: "CagriSema é uma combinação fixa de cagrilintide (análogo de amilina) e semaglutide (agonista de GLP-1) em uma única injeção semanal, desenvolvida pela Novo Nordisk. No estudo REDEFINE 1 de Fase 3, demonstrou perda de peso média de 22.7% em 68 semanas, combinando dois mecanismos complementares de controle do apetite em um único produto.",
    mechanism: "Combina dois mecanismos complementares: o cagrilintide atua nos receptores de amilina promovendo saciedade e retardando o esvaziamento gástrico, enquanto o semaglutide atua nos receptores de GLP-1 com efeitos adicionais na saciedade, secreção de insulina e controle glicêmico. A combinação resulta em efeitos sinérgicos na redução do apetite e do peso corporal.",
    benefits: [
      "Perda de peso superior à monoterapia com semaglutide",
      "Duplo mecanismo de ação sinérgico (amilina + GLP-1)",
      "Conveniência de uma única injeção semanal",
      "Excelente controle glicêmico",
      "Potencial para se tornar a terapia mais eficaz para obesidade"
    ],
    sideEffects: [
      { name: "Náusea", severity: "common" },
      { name: "Vômito", severity: "occasional" },
      { name: "Diarreia", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Semanal (escalonamento)", dose: "2.5mg+2.5mg/semana (escalonamento)", notes: "Combinação de cagrilintide 2.5mg + semaglutide 2.5mg/semana com escalonamento gradual de ambos os componentes. Protocolo de titulação semelhante ao do semaglutide isolado." }
    ],
    administration: "Subcutânea",
    halfLife: "~7 dias",
    status: "trial",
    statusLabel: "Fase 3 de Estudos Clínicos"
  },
  {
    id: "aod-9604",
    name: "AOD-9604",
    aka: "",
    category: "weight-loss",
    categoryLabel: "Perda de Peso",
    description: "AOD-9604 é um fragmento modificado do hormônio do crescimento humano (hGH), correspondendo aos aminoácidos 177-191 da região C-terminal com adição de tirosina. Foi desenvolvido para mimetizar os efeitos lipolíticos do GH sem seus efeitos adversos sobre o metabolismo da glicose. Estudos pré-clínicos demonstraram propriedades de redução de gordura, porém os resultados clínicos em humanos foram limitados.",
    mechanism: "Mimetiza a ação lipolítica da porção C-terminal do hormônio do crescimento, estimulando a lipólise (quebra de gordura) e inibindo a lipogênese (formação de gordura) sem afetar os níveis de IGF-1 ou a sensibilidade à insulina. Atua diretamente nos receptores beta-3-adrenérgicos do tecido adiposo.",
    benefits: [
      "Efeito lipolítico sem impacto na glicemia ou insulina",
      "Não afeta os níveis de IGF-1",
      "Potencial para redução de gordura localizada",
      "Perfil de segurança favorável em estudos pré-clínicos",
      "Não promove crescimento de tecidos (ao contrário do GH)"
    ],
    sideEffects: [
      { name: "Cefaleia", severity: "occasional" },
      { name: "Reações no local da injeção", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Diário (em estudos)", dose: "250-500mcg/dia", notes: "Em protocolos de pesquisa, doses de 250-500mcg/dia foram utilizadas, tipicamente administradas em jejum pela manhã. Dados clínicos robustos em humanos ainda são limitados." }
    ],
    administration: "Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "tesofensine",
    name: "Tesofensine",
    aka: "",
    category: "weight-loss",
    categoryLabel: "Perda de Peso",
    description: "Tesofensine é um inibidor triplo da recaptação de serotonina, noradrenalina e dopamina, originalmente desenvolvido para doenças neurodegenerativas e redirecionado para o tratamento da obesidade. Em estudos de Fase 2 (TIPO-1), demonstrou perda de peso de até 12.8% em 24 semanas na dose de 1mg, significativamente superior ao placebo. Encontra-se em desenvolvimento clínico de Fase 3.",
    mechanism: "Inibe a recaptação de três neurotransmissores monoaminérgicos: serotonina (promovendo saciedade), noradrenalina (aumentando a termogênese e o gasto energético) e dopamina (reduzindo o comportamento alimentar hedônico e a compulsão alimentar). O efeito combinado resulta em redução do apetite e aumento do metabolismo.",
    benefits: [
      "Perda de peso significativa (até 12.8% em estudos de Fase 2)",
      "Administração oral conveniente (uma vez ao dia)",
      "Triplo mecanismo de ação sobre o apetite e metabolismo",
      "Redução do comportamento alimentar compulsivo",
      "Aumento do gasto energético basal"
    ],
    sideEffects: [
      { name: "Boca seca", severity: "common" },
      { name: "Insônia", severity: "common" },
      { name: "Constipação", severity: "occasional" },
      { name: "Elevação da frequência cardíaca", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Diário", dose: "0.25-0.5mg/dia", notes: "Administração oral uma vez ao dia. Em estudos clínicos, doses de 0.25mg e 0.5mg foram as mais bem toleradas. A dose de 1.0mg mostrou maior eficácia, porém com mais efeitos adversos." }
    ],
    administration: "Oral",
    halfLife: "~220 horas",
    status: "trial",
    statusLabel: "Fase 3 de Estudos Clínicos"
  },

  // =============================================
  // CATEGORIA: HORMÔNIO DO CRESCIMENTO (growth-hormone)
  // =============================================
  {
    id: "hgh",
    name: "HGH (Hormônio do Crescimento Humano)",
    aka: "Somatropina",
    category: "growth-hormone",
    categoryLabel: "Hormônio do Crescimento",
    description: "O hormônio do crescimento humano (hGH ou somatropina) é um polipeptídeo de 191 aminoácidos produzido pela hipófise anterior, essencial para o crescimento, metabolismo e composição corporal. A forma recombinante é aprovada pela FDA para deficiência de GH em crianças e adultos, síndrome de Turner, e outras condições específicas. É amplamente utilizado off-label para fins anti-envelhecimento e melhora da composição corporal.",
    mechanism: "Atua através do receptor de GH (GHR) presente em múltiplos tecidos, estimulando a produção hepática de IGF-1 (fator de crescimento semelhante à insulina tipo 1). Promove lipólise, aumenta a síntese proteica, estimula a condrogênese e osteogênese, melhora a retenção de nitrogênio e possui efeitos anabólicos em múltiplos tecidos incluindo músculo, osso e cartilagem.",
    benefits: [
      "Aumento da massa muscular magra e redução da gordura corporal",
      "Melhora da densidade mineral óssea",
      "Melhora da qualidade do sono e níveis de energia",
      "Regeneração e recuperação tecidual acelerada",
      "Melhora da elasticidade da pele e aparência geral",
      "Fortalecimento do sistema imunológico"
    ],
    sideEffects: [
      { name: "Dor articular (artralgia)", severity: "common" },
      { name: "Edema (retenção de líquidos)", severity: "common" },
      { name: "Síndrome do túnel do carpo", severity: "occasional" },
      { name: "Resistência à insulina", severity: "occasional" },
      { name: "Acromegalia (uso crônico em doses altas)", severity: "rare" }
    ],
    dosage: [
      { protocol: "Anti-envelhecimento", dose: "1-4 UI/dia", notes: "Para fins de anti-envelhecimento e melhora da composição corporal, doses de 1-4 UI/dia são tipicamente utilizadas. Administração subcutânea preferencialmente à noite ou pela manhã." },
      { protocol: "Bodybuilding", dose: "4-8 UI/dia", notes: "Doses mais elevadas de 4-8 UI/dia são utilizadas para hipertrofia significativa, frequentemente divididas em 2 aplicações diárias. Requer monitoramento rigoroso de glicemia e IGF-1." }
    ],
    administration: "Subcutânea",
    halfLife: "3-5 horas",
    status: "approved",
    statusLabel: "Aprovado FDA (condições específicas)"
  },
  {
    id: "hgh-fragment-176-191",
    name: "HGH Fragment 176-191",
    aka: "",
    category: "growth-hormone",
    categoryLabel: "Hormônio do Crescimento",
    description: "O HGH Fragment 176-191 é um peptídeo sintético correspondente à porção C-terminal do hormônio do crescimento humano (aminoácidos 176-191). Foi desenvolvido para isolar as propriedades lipolíticas do GH sem seus efeitos sobre o crescimento ou metabolismo da glicose. Estudos em modelos animais demonstraram eficácia na redução de gordura corporal, porém dados clínicos em humanos são limitados.",
    mechanism: "Mimetiza a região do hormônio do crescimento responsável pela lipólise, estimulando a quebra de triglicerídeos armazenados no tecido adiposo e inibindo a lipogênese. Diferentemente do GH completo, não interage com o receptor de GH de forma a estimular a produção de IGF-1, não afetando o crescimento tecidual nem a homeostase da glicose.",
    benefits: [
      "Ação lipolítica direcionada sem efeitos anabólicos do GH",
      "Não afeta os níveis de glicose ou IGF-1",
      "Potencial para redução de gordura corporal",
      "Não causa retenção hídrica significativa",
      "Perfil de segurança potencialmente superior ao do GH completo"
    ],
    sideEffects: [
      { name: "Irritação no local da injeção", severity: "occasional" },
      { name: "Cefaleia", severity: "rare" }
    ],
    dosage: [
      { protocol: "Diário (dividido)", dose: "250-500mcg/dia", notes: "Doses de 250-500mcg/dia tipicamente divididas em 2 aplicações (manhã e tarde), preferencialmente em jejum ou antes do exercício. Dados clínicos robustos em humanos são limitados." }
    ],
    administration: "Subcutânea",
    halfLife: "~30 minutos",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "tesamorelin",
    name: "Tesamorelin",
    aka: "Egrifta",
    category: "growth-hormone",
    categoryLabel: "Hormônio do Crescimento",
    description: "Tesamorelin é um análogo sintético do hormônio liberador do hormônio do crescimento (GHRH) aprovado pela FDA para o tratamento da lipodistrofia associada ao HIV, caracterizada pelo acúmulo excessivo de gordura visceral. É o único análogo de GHRH atualmente aprovado nos EUA. Estimula a liberação pulsátil e fisiológica de GH pela hipófise, mantendo o feedback negativo natural.",
    mechanism: "Liga-se ao receptor de GHRH na hipófise anterior, estimulando a síntese e liberação pulsátil do hormônio do crescimento. Por manter o mecanismo de feedback negativo do eixo GH-IGF-1, promove elevações mais fisiológicas de GH e IGF-1 em comparação com a administração exógena de GH, com menor risco de supressão hipofisária.",
    benefits: [
      "Redução significativa da gordura visceral (adiposidade truncal)",
      "Liberação fisiológica e pulsátil de GH",
      "Manutenção do feedback negativo natural do eixo GH-IGF-1",
      "Melhora dos marcadores de risco cardiovascular",
      "Aprovação FDA com perfil de segurança bem documentado"
    ],
    sideEffects: [
      { name: "Reações no local da injeção", severity: "common" },
      { name: "Dor articular (artralgia)", severity: "occasional" },
      { name: "Edema", severity: "occasional" },
      { name: "Parestesia (formigamento)", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Diário", dose: "2mg/dia", notes: "Administração de 2mg por via subcutânea diariamente, preferencialmente pela manhã em jejum. É a dose aprovada pela FDA para lipodistrofia associada ao HIV." }
    ],
    administration: "Subcutânea",
    halfLife: "26-38 minutos",
    status: "approved",
    statusLabel: "Aprovado FDA (lipodistrofia HIV)"
  },
  {
    id: "sermorelin",
    name: "Sermorelin",
    aka: "",
    category: "growth-hormone",
    categoryLabel: "Hormônio do Crescimento",
    description: "Sermorelin é um análogo sintético do GHRH composto pelos primeiros 29 aminoácidos do GHRH humano nativo (44 aminoácidos), que representam a porção biologicamente ativa da molécula. Foi previamente aprovado pela FDA para diagnóstico e tratamento da deficiência de GH em crianças. Estimula a liberação natural de GH pela hipófise, sendo frequentemente utilizado em protocolos anti-envelhecimento e de otimização hormonal.",
    mechanism: "Liga-se aos receptores de GHRH na hipófise anterior, estimulando a síntese e a liberação pulsátil de GH de forma dose-dependente. Mantém a regulação fisiológica da secreção de GH, incluindo os mecanismos de feedback negativo por somatostatina e IGF-1, resultando em um perfil mais natural de elevação do GH.",
    benefits: [
      "Estimulação fisiológica e pulsátil da liberação de GH",
      "Melhora da qualidade do sono e recuperação",
      "Aumento da massa muscular magra e redução de gordura",
      "Manutenção do feedback negativo natural do eixo GH",
      "Melhora da vitalidade e níveis de energia",
      "Perfil de segurança favorável em uso prolongado"
    ],
    sideEffects: [
      { name: "Reações no local da injeção", severity: "common" },
      { name: "Rubor facial (flushing)", severity: "occasional" },
      { name: "Cefaleia", severity: "occasional" },
      { name: "Tontura", severity: "rare" }
    ],
    dosage: [
      { protocol: "Diário (noturno)", dose: "200-300mcg/dia", notes: "Administração de 200-300mcg por via subcutânea antes de dormir, para potencializar o pico natural de GH durante o sono. Pode ser utilizado em ciclos de 3-6 meses." }
    ],
    administration: "Subcutânea",
    halfLife: "~10-20 minutos",
    status: "research",
    statusLabel: "Em Pesquisa (previamente aprovado)"
  },
  {
    id: "ipamorelin",
    name: "Ipamorelin",
    aka: "",
    category: "growth-hormone",
    categoryLabel: "Hormônio do Crescimento",
    description: "Ipamorelin é um pentapeptídeo secretagogo do hormônio do crescimento altamente seletivo para o receptor GHS-R (receptor de secretagogo de GH). É considerado um dos secretagogos de GH mais seletivos disponíveis, com mínimos efeitos sobre cortisol, prolactina e aldosterona, diferenciando-se de outros GHRPs. É frequentemente combinado com análogos de GHRH como CJC-1295 para efeito sinérgico.",
    mechanism: "Liga-se seletivamente ao receptor de secretagogo de hormônio do crescimento (GHS-R1a) na hipófise e hipotálamo, estimulando a liberação de GH. Sua alta seletividade significa que não ativa significativamente receptores que estimulam a liberação de cortisol, prolactina ou aldosterona, resultando em um perfil mais limpo de estimulação de GH.",
    benefits: [
      "Estimulação seletiva de GH com mínimo impacto em outros hormônios",
      "Não eleva significativamente cortisol ou prolactina",
      "Melhora da composição corporal (aumento de massa magra, redução de gordura)",
      "Melhora do sono e da recuperação",
      "Efeito sinérgico quando combinado com GHRH (ex: CJC-1295)",
      "Boa tolerabilidade e perfil de efeitos adversos favorável"
    ],
    sideEffects: [
      { name: "Cefaleia", severity: "occasional" },
      { name: "Rubor facial (flushing)", severity: "occasional" },
      { name: "Tontura", severity: "rare" }
    ],
    dosage: [
      { protocol: "Múltiplas doses diárias", dose: "200-300mcg, 2-3x/dia", notes: "Administração de 200-300mcg por via subcutânea 2-3 vezes ao dia, preferencialmente em jejum. Frequentemente combinado com CJC-1295 (Mod GRF 1-29) para efeito sinérgico na liberação de GH." }
    ],
    administration: "Subcutânea",
    halfLife: "~2 horas",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "ghrp-2",
    name: "GHRP-2",
    aka: "",
    category: "growth-hormone",
    categoryLabel: "Hormônio do Crescimento",
    description: "GHRP-2 (Growth Hormone Releasing Peptide-2) é um hexapeptídeo sintético secretagogo de GH que atua através do receptor de grelina (GHS-R). É considerado um dos GHRPs mais potentes na estimulação da liberação de GH, porém com maior impacto em cortisol e prolactina comparado ao ipamorelin. É amplamente utilizado em pesquisa e em protocolos de otimização hormonal.",
    mechanism: "Atua como agonista do receptor de secretagogo de GH (GHS-R1a), o mesmo receptor da grelina, estimulando a liberação de GH pela hipófise de forma potente e dose-dependente. Também amplifica a resposta ao GHRH endógeno e suprime a ação da somatostatina. Diferentemente do ipamorelin, causa elevação moderada de cortisol e prolactina.",
    benefits: [
      "Potente estimulação da liberação de GH",
      "Melhora da composição corporal e recuperação muscular",
      "Efeito sinérgico quando combinado com análogos de GHRH",
      "Melhora da qualidade do sono (aumento do sono profundo)",
      "Efeitos positivos no metabolismo e energia"
    ],
    sideEffects: [
      { name: "Aumento do apetite", severity: "common" },
      { name: "Retenção hídrica", severity: "occasional" },
      { name: "Aumento de cortisol", severity: "occasional" },
      { name: "Aumento de prolactina", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Múltiplas doses diárias", dose: "100-300mcg, 2-3x/dia", notes: "Administração de 100-300mcg por via subcutânea 2-3 vezes ao dia, preferencialmente em jejum (pelo menos 2 horas após refeição). A dose mais comum é 200mcg por aplicação." }
    ],
    administration: "Subcutânea",
    halfLife: "~30 minutos",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "ghrp-6",
    name: "GHRP-6",
    aka: "",
    category: "growth-hormone",
    categoryLabel: "Hormônio do Crescimento",
    description: "GHRP-6 (Growth Hormone Releasing Peptide-6) é um hexapeptídeo sintético secretagogo de GH e um dos primeiros GHRPs desenvolvidos. Atua através do receptor de grelina, sendo notável por causar aumento intenso do apetite, o que pode ser benéfico ou indesejável dependendo dos objetivos do usuário. É amplamente utilizado em pesquisa para estudar a fisiologia do GH e da grelina.",
    mechanism: "Liga-se ao receptor de grelina (GHS-R1a) na hipófise e hipotálamo, estimulando a liberação de GH. Mimetiza os efeitos da grelina, o hormônio da fome, causando aumento significativo do apetite. Também estimula a motilidade gástrica e possui propriedades citoprotetoras gástricas. Suprime a somatostatina e amplifica a resposta ao GHRH.",
    benefits: [
      "Potente estimulação da liberação de GH",
      "Aumento do apetite (útil para ganho de massa)",
      "Propriedades citoprotetoras gástricas",
      "Melhora da recuperação muscular e articular",
      "Efeito sinérgico com análogos de GHRH"
    ],
    sideEffects: [
      { name: "Fome intensa", severity: "common" },
      { name: "Retenção hídrica", severity: "occasional" },
      { name: "Aumento de cortisol", severity: "occasional" },
      { name: "Cansaço", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Múltiplas doses diárias", dose: "100-300mcg, 2-3x/dia", notes: "Administração de 100-300mcg por via subcutânea 2-3 vezes ao dia em jejum. O aumento intenso do apetite tipicamente ocorre 20-30 minutos após a injeção. A dose mais utilizada é 100-200mcg por aplicação." }
    ],
    administration: "Subcutânea",
    halfLife: "~20 minutos",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "hexarelin",
    name: "Hexarelin",
    aka: "Examorelin",
    category: "growth-hormone",
    categoryLabel: "Hormônio do Crescimento",
    description: "Hexarelin (Examorelin) é um hexapeptídeo sintético secretagogo de GH considerado um dos mais potentes da classe GHRP. Possui forte atividade estimulatória sobre a liberação de GH, porém com efeitos mais pronunciados sobre cortisol e prolactina que o ipamorelin. Estudos também demonstraram propriedades cardioprotetoras, com efeitos benéficos sobre o miocárdio.",
    mechanism: "Atua como potente agonista do receptor GHS-R1a na hipófise, estimulando a liberação de GH de forma dose-dependente. Além de seu efeito endócrino, hexarelin possui atividade cardioprotetora independente de GH, através da ativação de receptores no tecido cardíaco (CD36), protegendo contra isquemia e apoptose dos cardiomiócitos.",
    benefits: [
      "Potente estimulação da liberação de GH",
      "Propriedades cardioprotetoras documentadas",
      "Melhora da composição corporal",
      "Efeito protetor contra isquemia miocárdica",
      "Melhora da recuperação e reparo tecidual"
    ],
    sideEffects: [
      { name: "Aumento do apetite", severity: "occasional" },
      { name: "Aumento de cortisol", severity: "occasional" },
      { name: "Aumento de prolactina", severity: "occasional" },
      { name: "Retenção hídrica", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Múltiplas doses diárias", dose: "100-200mcg, 2-3x/dia", notes: "Administração de 100-200mcg por via subcutânea 2-3 vezes ao dia. Nota: a dessensibilização do receptor pode ocorrer com uso contínuo acima de 4-8 semanas, sendo recomendados ciclos com intervalos." }
    ],
    administration: "Subcutânea",
    halfLife: "~70 minutos",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "cjc-1295-dac",
    name: "CJC-1295 com DAC",
    aka: "",
    category: "growth-hormone",
    categoryLabel: "Hormônio do Crescimento",
    description: "CJC-1295 com DAC (Drug Affinity Complex) é um análogo sintético de longa duração do GHRH que incorpora um complexo de afinidade por drogas (DAC) que se liga covalentemente à albumina sérica, prolongando significativamente sua meia-vida. Promove elevação sustentada dos níveis de GH e IGF-1 por vários dias após uma única injeção, eliminando a necessidade de múltiplas aplicações diárias.",
    mechanism: "Liga-se ao receptor de GHRH na hipófise anterior, estimulando a liberação de GH. O componente DAC (maleimidopropiônico ligado à lisina) forma uma ligação covalente com a albumina sérica in vivo, protegendo o peptídeo da degradação enzimática e prolongando dramaticamente sua meia-vida. Isso resulta em elevação sustentada e contínua dos níveis de GH e IGF-1.",
    benefits: [
      "Administração infrequente (1-2 vezes por semana)",
      "Elevação sustentada dos níveis de GH e IGF-1",
      "Melhora da composição corporal ao longo do tempo",
      "Melhora da qualidade do sono e recuperação",
      "Conveniência versus protocolos de múltiplas injeções diárias"
    ],
    sideEffects: [
      { name: "Retenção hídrica", severity: "common" },
      { name: "Rubor facial (flushing)", severity: "occasional" },
      { name: "Cefaleia", severity: "occasional" },
      { name: "Dormência/formigamento", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Semanal", dose: "2mg/semana", notes: "Administração de 2mg por via subcutânea 1-2 vezes por semana. A elevação contínua de GH (sem pulsatilidade) pode ser uma desvantagem versus a versão sem DAC. Monitorar IGF-1 regularmente." }
    ],
    administration: "Subcutânea",
    halfLife: "~8 dias",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "cjc-1295-no-dac",
    name: "CJC-1295 sem DAC (Mod GRF 1-29)",
    aka: "Mod GRF 1-29",
    category: "growth-hormone",
    categoryLabel: "Hormônio do Crescimento",
    description: "CJC-1295 sem DAC, também conhecido como Mod GRF 1-29 (Modified Growth Releasing Factor 1-29), é um análogo modificado do GHRH com 29 aminoácidos e quatro substituições de aminoácidos para aumentar sua estabilidade. Possui meia-vida curta, promovendo liberação pulsátil de GH mais fisiológica. É frequentemente combinado com secretagogos como ipamorelin para efeito sinérgico.",
    mechanism: "Liga-se ao receptor de GHRH na hipófise anterior, estimulando a liberação pulsátil de GH. As quatro substituições de aminoácidos (Ala2, Gln8, Ala15, Leu27) conferem maior resistência à degradação pela DPP-IV e outras enzimas, porém sem o componente DAC, mantendo uma meia-vida curta que preserva a pulsatilidade natural da liberação de GH.",
    benefits: [
      "Preserva a liberação pulsátil fisiológica de GH",
      "Efeito sinérgico quando combinado com GHRPs (ex: ipamorelin)",
      "Melhora da composição corporal e recuperação",
      "Não causa elevação contínua de GH (mais fisiológico que a versão com DAC)",
      "Melhora do sono e regeneração tecidual"
    ],
    sideEffects: [
      { name: "Rubor facial (flushing)", severity: "occasional" },
      { name: "Cefaleia", severity: "occasional" },
      { name: "Tontura", severity: "rare" }
    ],
    dosage: [
      { protocol: "Múltiplas doses diárias", dose: "100-200mcg, 2-3x/dia", notes: "Administração de 100-200mcg por via subcutânea 2-3 vezes ao dia, tipicamente combinado com ipamorelin na mesma seringa. Melhor administrado em jejum, antes de dormir e/ou pré-treino." }
    ],
    administration: "Subcutânea",
    halfLife: "~30 minutos",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "igf-1-lr3",
    name: "IGF-1 LR3",
    aka: "",
    category: "growth-hormone",
    categoryLabel: "Hormônio do Crescimento",
    description: "IGF-1 LR3 (Long Arg3 Insulin-like Growth Factor-1) é uma variante modificada do IGF-1 humano com 83 aminoácidos, contendo uma substituição de ácido glutâmico por arginina na posição 3 e uma extensão de 13 aminoácidos no N-terminal. Essas modificações reduzem a afinidade pelas proteínas de ligação de IGF (IGFBPs), resultando em maior biodisponibilidade e potência biológica que o IGF-1 nativo.",
    mechanism: "Liga-se ao receptor de IGF-1 (IGF-1R) presente em diversos tecidos, ativando as vias de sinalização PI3K/Akt e MAPK/ERK, promovendo crescimento celular, síntese proteica, proliferação e sobrevivência celular. Sua baixa afinidade pelas IGFBPs significa que permanece predominantemente na forma livre e biologicamente ativa, com efeitos mais potentes e prolongados que o IGF-1 nativo.",
    benefits: [
      "Potente efeito anabólico com hiperplasia muscular (aumento do número de fibras)",
      "Meia-vida prolongada comparada ao IGF-1 nativo",
      "Maior biodisponibilidade por menor ligação às IGFBPs",
      "Melhora da recuperação e reparo tecidual",
      "Promoção de síntese proteica e retenção de nitrogênio"
    ],
    sideEffects: [
      { name: "Hipoglicemia", severity: "common" },
      { name: "Dor articular", severity: "occasional" },
      { name: "Crescimento orgânico (uso crônico)", severity: "rare" }
    ],
    dosage: [
      { protocol: "Diário", dose: "20-50mcg/dia", notes: "Administração de 20-50mcg por via subcutânea ou intramuscular diariamente. Tipicamente utilizado em ciclos de 4-6 semanas. Monitoramento de glicemia é essencial devido ao risco de hipoglicemia. Deve-se consumir carboidratos após a aplicação." }
    ],
    administration: "Subcutânea",
    halfLife: "~20-30 horas",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "igf-1-des",
    name: "IGF-1 DES",
    aka: "",
    category: "growth-hormone",
    categoryLabel: "Hormônio do Crescimento",
    description: "IGF-1 DES (Des(1-3) IGF-1) é uma variante truncada do IGF-1 humano com remoção dos três primeiros aminoácidos do N-terminal. Essa modificação elimina quase completamente a ligação às IGFBPs, tornando-o até 10 vezes mais potente que o IGF-1 nativo em termos de atividade biológica. Sua meia-vida muito curta o torna adequado para uso local/sítio-específico.",
    mechanism: "Liga-se ao receptor de IGF-1 com afinidade semelhante ao IGF-1 nativo, porém com afinidade drasticamente reduzida pelas IGFBPs, permanecendo quase inteiramente na forma livre e biologicamente ativa. A ativação do IGF-1R promove síntese proteica, proliferação celular e efeitos anticatabólicos. Sua meia-vida curta favorece efeitos localizados quando injetado no tecido-alvo.",
    benefits: [
      "Potência até 10 vezes maior que o IGF-1 nativo",
      "Efeito anabólico localizado quando injetado no músculo-alvo",
      "Promoção de hiperplasia e hipertrofia muscular local",
      "Meia-vida curta minimiza efeitos sistêmicos",
      "Ação rápida e direcionada"
    ],
    sideEffects: [
      { name: "Hipoglicemia", severity: "occasional" },
      { name: "Inchaço localizado", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Pré-treino (local)", dose: "50-100mcg pré-treino", notes: "Administração de 50-100mcg por via intramuscular diretamente no músculo-alvo antes do treino. Devido à meia-vida muito curta, o timing da aplicação é crucial. Consumir carboidratos próximo à aplicação para prevenir hipoglicemia." }
    ],
    administration: "Intramuscular (local)",
    halfLife: "~20-30 minutos",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "mgf",
    name: "MGF (Mechano Growth Factor)",
    aka: "",
    category: "growth-hormone",
    categoryLabel: "Hormônio do Crescimento",
    description: "MGF (Fator de Crescimento Mecânico) é uma variante de splicing do gene IGF-1, produzida localmente no músculo esquelético em resposta ao estresse mecânico (exercício). Diferencia-se do IGF-1 sistêmico (IGF-1Ea) por um exon C-terminal diferente que confere ações específicas na ativação de células satélite e no reparo muscular. A forma sintética é utilizada em pesquisa para promover regeneração muscular.",
    mechanism: "Atua localmente no músculo danificado pelo exercício, ativando células satélite (células-tronco musculares) e promovendo sua proliferação, diferenciação e fusão com fibras musculares existentes. Este processo é fundamental para a hiperplasia e regeneração muscular. O MGF atua na fase inicial do reparo muscular, antes do IGF-1Ea sistêmico.",
    benefits: [
      "Ativação de células satélite para reparo muscular",
      "Promoção de hiperplasia muscular (novas fibras musculares)",
      "Efeito localizado no músculo-alvo",
      "Aceleração da recuperação pós-treino",
      "Potencial para reparo de lesões musculares"
    ],
    sideEffects: [
      { name: "Dor no local da injeção", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Pós-treino (local)", dose: "200mcg localmente", notes: "Administração de 200mcg por via intramuscular diretamente no músculo treinado, imediatamente após o treino. A meia-vida extremamente curta limita sua utilidade prática; a forma PEGuilada (PEG-MGF) é geralmente preferida." }
    ],
    administration: "Intramuscular (local)",
    halfLife: "~5-7 minutos",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "peg-mgf",
    name: "PEG-MGF",
    aka: "",
    category: "growth-hormone",
    categoryLabel: "Hormônio do Crescimento",
    description: "PEG-MGF é a forma PEGuilada (conjugada com polietilenoglicol) do Fator de Crescimento Mecânico, desenvolvida para superar a meia-vida extremamente curta do MGF nativo. A PEGuilação protege o peptídeo da degradação enzimática e renal, prolongando sua ação por dias em vez de minutos. Isso permite administração menos frequente e efeitos mais sustentados na regeneração muscular.",
    mechanism: "Mantém o mesmo mecanismo de ação do MGF (ativação de células satélite e promoção de regeneração muscular), porém com farmacocinética significativamente melhorada pela conjugação com PEG. O polímero de PEG protege o peptídeo contra proteases e reduz a depuração renal, permitindo que o MGF circule e atue por um período prolongado, tanto localmente quanto sistemicamente.",
    benefits: [
      "Meia-vida significativamente prolongada em comparação ao MGF nativo",
      "Administração menos frequente (2-3 vezes por semana)",
      "Efeitos sustentados na ativação de células satélite",
      "Melhora da recuperação muscular e reparo tecidual",
      "Maior praticidade de uso clínico e em pesquisa"
    ],
    sideEffects: [
      { name: "Reações no local da injeção", severity: "occasional" },
      { name: "Cefaleia", severity: "rare" }
    ],
    dosage: [
      { protocol: "2-3x por semana", dose: "200mcg, 2-3x/semana", notes: "Administração de 200mcg por via intramuscular ou subcutânea 2-3 vezes por semana. Pode ser administrado sistemicamente (subcutâneo) ou localmente (intramuscular no músculo-alvo). Tipicamente utilizado em ciclos de 4-6 semanas." }
    ],
    administration: "Subcutânea ou Intramuscular",
    halfLife: "Vários dias",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "mk-677",
    name: "MK-677 (Ibutamoren)",
    aka: "Ibutamoren",
    category: "growth-hormone",
    categoryLabel: "Hormônio do Crescimento",
    description: "MK-677 (Ibutamoren) é um secretagogo oral não-peptídico do hormônio do crescimento que mimetiza a ação da grelina, ligando-se ao receptor GHS-R1a. Diferencia-se dos peptídeos secretagogos por ser ativo por via oral e ter meia-vida longa, permitindo uma única dose diária. Estudos de Fase 2 demonstraram aumentos significativos e sustentados nos níveis de GH e IGF-1 por até 12 meses.",
    mechanism: "Atua como agonista do receptor de grelina (GHS-R1a) na hipófise e hipotálamo, estimulando a liberação pulsátil de GH. Aumenta tanto a amplitude quanto a frequência dos pulsos de GH, elevando os níveis de IGF-1 de forma sustentada. Não é um peptídeo, mas sim uma molécula pequena (espiroindolina) com biodisponibilidade oral. Não suprime a produção endógena de GH.",
    benefits: [
      "Administração oral conveniente (não requer injeções)",
      "Aumento sustentado dos níveis de GH e IGF-1",
      "Melhora da qualidade do sono (aumento do sono REM e profundo)",
      "Melhora da composição corporal e massa muscular magra",
      "Aumento da densidade mineral óssea em estudos clínicos",
      "Melhora da recuperação e regeneração tecidual"
    ],
    sideEffects: [
      { name: "Aumento do apetite", severity: "common" },
      { name: "Retenção hídrica", severity: "common" },
      { name: "Letargia", severity: "occasional" },
      { name: "Dormência/formigamento", severity: "occasional" },
      { name: "Resistência à insulina (uso prolongado)", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Diário (oral)", dose: "10-25mg/dia", notes: "Administração oral de 10-25mg uma vez ao dia, preferencialmente à noite antes de dormir. A dose de 25mg é a mais comumente utilizada em estudos clínicos. Pode ser utilizado continuamente, porém monitoramento de glicemia e insulina é recomendado em uso prolongado." }
    ],
    administration: "Oral",
    halfLife: "~24 horas",
    status: "research",
    statusLabel: "Em Pesquisa (Fase 2)"
  },
  {
    id: "follistatin-344",
    name: "Follistatin 344",
    aka: "",
    category: "growth-hormone",
    categoryLabel: "Hormônio do Crescimento",
    description: "Follistatin 344 é a isoforma de 344 aminoácidos da folistatina, uma glicoproteína que atua como potente inibidor da miostatina e das ativinas. A miostatina é o principal regulador negativo do crescimento muscular, e sua inibição pela folistatina resulta em hipertrofia muscular significativa. Em modelos animais, a superexpressão de folistatina resultou em aumento dramático da massa muscular.",
    mechanism: "Liga-se diretamente à miostatina (GDF-8) e às ativinas, neutralizando sua atividade biológica ao impedir sua interação com os receptores de ativina tipo II (ActRII). A inibição da miostatina remove o freio natural do crescimento muscular, permitindo hipertrofia e potencialmente hiperplasia das fibras musculares esqueléticas. Também modula a secreção de FSH através da inibição da ativina.",
    benefits: [
      "Potente inibição da miostatina (regulador negativo do crescimento muscular)",
      "Potencial para hipertrofia muscular significativa",
      "Pode melhorar a recuperação muscular e reparo tecidual",
      "Mecanismo de ação único e complementar a outras terapias",
      "Estudos pré-clínicos demonstram aumento dramático de massa muscular"
    ],
    sideEffects: [
      { name: "Reações no local da injeção", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Diário (ciclos curtos)", dose: "100mcg/dia por 10-30 dias", notes: "Protocolos de pesquisa tipicamente utilizam 100mcg/dia por via subcutânea em ciclos curtos de 10-30 dias. Dados clínicos em humanos são extremamente limitados e a dosagem ideal não está estabelecida." }
    ],
    administration: "Subcutânea",
    halfLife: "Não bem estabelecida",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "gdf-8-inhibitor",
    name: "Inibidor de GDF-8 (Miostatina)",
    aka: "Anti-Miostatina",
    category: "growth-hormone",
    categoryLabel: "Hormônio do Crescimento",
    description: "Inibidores de GDF-8 (miostatina) são uma classe de compostos em pesquisa que visam bloquear a ação da miostatina, o principal regulador negativo do crescimento muscular esquelético. A miostatina (GDF-8) é um membro da superfamília do TGF-beta que limita o crescimento muscular. Diversas estratégias de inibição estão sendo pesquisadas, incluindo anticorpos monoclonais, peptídeos de isca de receptor e moléculas pequenas.",
    mechanism: "A miostatina (GDF-8) sinaliza através dos receptores ActRIIB e ALK4/5 para limitar o crescimento muscular. Os inibidores podem atuar em diferentes níveis: ligação direta à miostatina (anticorpos neutralizantes como stamulumab), bloqueio do receptor (como ACE-031), inibição intracelular da sinalização Smad, ou antagonismo por proteínas como folistatina e GASP-1.",
    benefits: [
      "Potencial para aumento significativo da massa muscular",
      "Aplicações terapêuticas em doenças musculares degenerativas",
      "Prevenção da atrofia muscular associada ao envelhecimento",
      "Possíveis benefícios na recuperação de lesões musculares",
      "Área ativa de pesquisa com múltiplas abordagens terapêuticas"
    ],
    sideEffects: [
      { name: "Efeitos adversos não bem caracterizados", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Variável (em estudos)", dose: "Varia conforme o composto", notes: "A dosagem varia amplamente dependendo do tipo de inibidor de miostatina utilizado. Dados clínicos em humanos são muito limitados e os protocolos de dosagem não estão estabelecidos. Área predominantemente de pesquisa básica e pré-clínica." }
    ],
    administration: "Variável (subcutânea ou intravenosa conforme composto)",
    halfLife: "Não bem estabelecida (varia conforme o composto)",
    status: "research",
    statusLabel: "Em Pesquisa"
  },
  {
    id: "ace-031",
    name: "ACE-031",
    aka: "",
    category: "growth-hormone",
    categoryLabel: "Hormônio do Crescimento",
    description: "ACE-031 é uma proteína de fusão recombinante composta pelo domínio extracelular do receptor de ativina tipo IIB (ActRIIB) fusionado à porção Fc de IgG1 humana. Funciona como um receptor de isca solúvel que sequestra a miostatina e outros ligandos da família TGF-beta, impedindo sua sinalização. Foi desenvolvido pela Acceleron Pharma para distrofia muscular de Duchenne, porém os estudos foram descontinuados devido a efeitos adversos vasculares.",
    mechanism: "Atua como receptor de isca (decoy receptor) solúvel, ligando-se à miostatina, ativinas e outros membros da superfamília do TGF-beta no espaço extracelular, impedindo que eles se liguem e ativem seus receptores celulares. A ampla promiscuidade de ligação ao ActRIIB resulta em inibição de múltiplos ligandos além da miostatina, o que contribui tanto para a eficácia quanto para os efeitos adversos.",
    benefits: [
      "Potente inibição da miostatina e ligandos relacionados",
      "Aumento significativo da massa muscular em estudos clínicos iniciais",
      "Potencial terapêutico para doenças musculares degenerativas",
      "Mecanismo de ação bem caracterizado",
      "Aumento documentado da massa muscular magra em voluntários saudáveis"
    ],
    sideEffects: [
      { name: "Sangramentos nasais (epistaxe)", severity: "common" },
      { name: "Sangramento gengival", severity: "occasional" },
      { name: "Telangiectasias cutâneas", severity: "occasional" }
    ],
    dosage: [
      { protocol: "Quinzenal (em estudos)", dose: "0.1-3mg/kg a cada 2 semanas", notes: "Em ensaios clínicos, doses de 0.1 a 3mg/kg foram administradas por via subcutânea a cada 2 semanas. O programa foi descontinuado devido a efeitos adversos vasculares (epistaxe, telangiectasias), possivelmente relacionados à inibição de ligandos da família TGF-beta envolvidos na angiogênese." }
    ],
    administration: "Subcutânea",
    halfLife: "~10-12 dias",
    status: "research",
    statusLabel: "Em Pesquisa (descontinuado)"
  }
];
