var peptideStacks = [
  // =============================================
  // PERDA DE PESO
  // =============================================
  {
    id: "weight-loss-beginner",
    name: "Perda de Peso - Iniciante",
    goal: "weight-loss",
    goalLabel: "Perda de Peso",
    level: "Iniciante",
    description: "Protocolo inicial para perda de peso utilizando um agonista GLP-1 como base, complementado com suporte metab\u00f3lico. Ideal para quem est\u00e1 come\u00e7ando e busca uma abordagem conservadora com boa evid\u00eancia cl\u00ednica.",
    peptides: [
      {
        id: "semaglutide",
        name: "Semaglutide",
        role: "Agente principal - supressor de apetite e regulador glic\u00eamico",
        dose: "0.25mg/semana, escalonando at\u00e9 1.0-2.4mg/semana",
        timing: "1x por semana, mesmo dia"
      },
      {
        id: "l-carnitine",
        name: "L-Carnitina",
        role: "Suporte ao metabolismo de gordura - transporte de \u00e1cidos graxos para mitoc\u00f4ndria",
        dose: "600-2000mg/dia",
        timing: "Di\u00e1rio, pela manh\u00e3 ou antes do exerc\u00edcio"
      },
      {
        id: "vitamin-b12",
        name: "Vitamina B12",
        role: "Suporte energ\u00e9tico e metab\u00f3lico",
        dose: "1000mcg/semana IM ou di\u00e1rio oral",
        timing: "1x por semana (inject\u00e1vel) ou di\u00e1rio (oral)"
      }
    ],
    synergy: "O Semaglutide reduz o apetite e a ingest\u00e3o cal\u00f3rica via GLP-1, enquanto a L-Carnitina otimiza a oxida\u00e7\u00e3o de gordura nas mitoc\u00f4ndrias. A B12 previne defici\u00eancias energ\u00e9ticas comuns durante restri\u00e7\u00e3o cal\u00f3rica. A combina\u00e7\u00e3o potencializa a perda de gordura sem efeitos adversos adicionais significativos.",
    application: "Todos separados. Semaglutide: aplicar via caneta SC própria 1x/semana (não misturar). L-Carnitina: injeção SC separada diária ou suplementação oral. Vitamina B12: injeção IM separada semanal ou via oral diária. As três substâncias possuem formulações, vias e frequências distintas — não misturar na mesma seringa.",
    duration: "12-16 semanas com escalonamento gradual do Semaglutide",
    warnings: "Iniciar Semaglutide com dose baixa para minimizar n\u00e1usea. Monitorar glicemia se diab\u00e9tico.",
    evidenceLevel: "Alto (Semaglutide: ensaios cl\u00ednicos fase 3 STEP)",
    references: [
      "Wilding JPH et al., 2021. 'Once-Weekly Semaglutide in Adults with Overweight or Obesity.' N Engl J Med. (STEP 1) <a href='https://pubmed.ncbi.nlm.nih.gov/33567185/' target='_blank'>[PubMed]</a>",
      "Pooyandjoo M et al., 2016. 'The effect of (L-)carnitine on weight loss in adults: a systematic review and meta-analysis.' Obes Rev. <a href='https://pubmed.ncbi.nlm.nih.gov/27335245/' target='_blank'>[PubMed]</a>"
    ]
  },
  {
    id: "weight-loss-intermediate",
    name: "Perda de Peso - Intermedi\u00e1rio",
    goal: "weight-loss",
    goalLabel: "Perda de Peso",
    level: "Intermedi\u00e1rio",
    description: "Protocolo avan\u00e7ado combinando agonista GLP-1 de nova gera\u00e7\u00e3o com pept\u00eddeo mitocondrial e inibidor de NNMT para maximizar a perda de gordura por m\u00faltiplas vias metab\u00f3licas.",
    peptides: [
      {
        id: "tirzepatide",
        name: "Tirzepatide",
        role: "Agente principal - duplo agonista GIP/GLP-1 com perda de peso superior",
        dose: "2.5mg/semana, escalonando at\u00e9 10-15mg/semana",
        timing: "1x por semana, mesmo dia"
      },
      {
        id: "mots-c",
        name: "MOTS-c",
        role: "Pept\u00eddeo mitocondrial - mim\u00e9tico de exerc\u00edcio, sensibiliza\u00e7\u00e3o \u00e0 insulina",
        dose: "5-10mg, 3x por semana",
        timing: "3x por semana, preferencialmente em dias de exerc\u00edcio"
      },
      {
        id: "5-amino-1mq",
        name: "5-Amino-1MQ",
        role: "Inibidor de NNMT - aumenta metabolismo celular de gordura e n\u00edveis de NAD+",
        dose: "50-100mg/dia oral",
        timing: "Di\u00e1rio, pela manh\u00e3"
      }
    ],
    synergy: "Tirzepatide atua em dois receptores incretnicos (GIP + GLP-1) para supress\u00e3o de apetite e controle glic\u00eamico superiores ao GLP-1 isolado. MOTS-c ativa AMPK e melhora a sensibilidade \u00e0 insulina, atuando como mim\u00e9tico de exerc\u00edcio. 5-Amino-1MQ inibe NNMT nas c\u00e9lulas de gordura, aumentando o gasto energ\u00e9tico celular. As tr\u00eas vias s\u00e3o complementares e n\u00e3o sobrepostas.",
    application: "Todos separados. Tirzepatide: aplicar via caneta SC própria 1x/semana (não misturar). MOTS-c: injeção SC separada nos dias programados. 5-Amino-1MQ: via oral, não requer injeção. Vias e frequências distintas impedem co-administração na mesma seringa.",
    duration: "12-20 semanas",
    warnings: "N\u00e1usea pode ser intensa nas primeiras semanas de Tirzepatide. 5-Amino-1MQ ainda tem dados cl\u00ednicos limitados em humanos.",
    evidenceLevel: "Alto (Tirzepatide: SURMOUNT) / Moderado (MOTS-c) / Baixo (5-Amino-1MQ)",
    references: [
      "Jastreboff AM et al., 2022. 'Tirzepatide Once Weekly for the Treatment of Obesity.' N Engl J Med. (SURMOUNT-1) <a href='https://pubmed.ncbi.nlm.nih.gov/35658024/' target='_blank'>[PubMed]</a>",
      "Lee C et al., 2015. 'The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance.' Cell Metab. <a href='https://pubmed.ncbi.nlm.nih.gov/25738459/' target='_blank'>[PubMed]</a>",
      "Neelakantan H et al., 2017. 'Selective and membrane-permeable small molecule inhibitors of nicotinamide N-methyltransferase reverse high fat diet-induced obesity in mice.' Biochem Pharmacol. <a href='https://pubmed.ncbi.nlm.nih.gov/29155147/' target='_blank'>[PubMed]</a>"
    ]
  },
  {
    id: "weight-loss-advanced",
    name: "Perda de Peso - Avan\u00e7ado",
    goal: "weight-loss",
    goalLabel: "Perda de Peso",
    level: "Avan\u00e7ado",
    description: "Protocolo avan\u00e7ado com o triplo agonista Retatrutide como base, complementado por MOTS-c para otimiza\u00e7\u00e3o mitocondrial e NAD+ para suporte celular. Como sugerido pelo usu\u00e1rio - combina\u00e7\u00e3o de m\u00faltiplas vias metab\u00f3licas.",
    peptides: [
      {
        id: "retatrutide",
        name: "Retatrutide",
        role: "Agente principal - triplo agonista GLP-1/GIP/Glucagon com perda de peso recorde (~24%)",
        dose: "1mg/semana, escalonando at\u00e9 8-12mg/semana",
        timing: "1x por semana"
      },
      {
        id: "mots-c",
        name: "MOTS-c",
        role: "Pept\u00eddeo mitocondrial - mim\u00e9tico de exerc\u00edcio e regulador metab\u00f3lico",
        dose: "5-10mg, 3-5x por semana",
        timing: "3-5x por semana, em dias alternados"
      },
      {
        id: "nad-plus",
        name: "NAD+",
        role: "Coenzima celular - suporte energ\u00e9tico, reparo de DNA e fun\u00e7\u00e3o mitocondrial",
        dose: "100-250mg SC ou 250-500mg IV semanal",
        timing: "2-3x por semana SC, ou 1x semanal IV"
      },
      {
        id: "aod-9604",
        name: "AOD-9604",
        role: "Fragmento lipol\u00edtico do GH - quebra direta de gordura sem efeitos do GH completo",
        dose: "250-500mcg/dia",
        timing: "Di\u00e1rio, em jejum pela manh\u00e3"
      }
    ],
    synergy: "Retatrutide atua em 3 receptores (GLP-1 + GIP + Glucagon), oferecendo a maior perda de peso j\u00e1 registrada em estudos cl\u00ednicos (~24% em 48 semanas). O componente glucagon adicional aumenta o gasto energ\u00e9tico e a lip\u00f3lise hep\u00e1tica. MOTS-c complementa ativando AMPK e melhorando a fun\u00e7\u00e3o mitocondrial. NAD+ sustenta a produ\u00e7\u00e3o de energia celular e reparo de DNA durante o d\u00e9ficit cal\u00f3rico. AOD-9604 adiciona lip\u00f3lise direta sem impactar glicemia.",
    application: "Todos separados. Retatrutide: SC 1x/semana em local próprio. MOTS-c: SC em dias alternados, seringa separada. NAD+: SC separado obrigatoriamente (pH e estabilidade incompatíveis com outros peptídeos) ou IV semanal com profissional. AOD-9604: SC em jejum pela manhã, seringa separada. Nunca misturar NAD+ com peptídeos na mesma seringa.",
    duration: "16-24 semanas com escalonamento gradual do Retatrutide",
    warnings: "Retatrutide ainda est\u00e1 em fase 3 de estudos cl\u00ednicos. N\u00e1usea e efeitos GI podem ser significativos. Monitorar fun\u00e7\u00e3o hep\u00e1tica pelo componente glucagon.",
    evidenceLevel: "Alto (Retatrutide: fase 2 publicado) / Moderado (MOTS-c, NAD+) / Baixo (AOD-9604)",
    references: [
      "Jastreboff AM et al., 2023. 'Triple-Hormone-Receptor Agonist Retatrutide for Obesity - A Phase 2 Trial.' N Engl J Med. <a href='https://pubmed.ncbi.nlm.nih.gov/37351564/' target='_blank'>[PubMed]</a>",
      "Lee C et al., 2015. 'MOTS-c promotes metabolic homeostasis.' Cell Metab. <a href='https://pubmed.ncbi.nlm.nih.gov/25738459/' target='_blank'>[PubMed]</a>",
      "Rajman L et al., 2018. 'Therapeutic Potential of NAD-Boosting Molecules.' Cell. <a href='https://pubmed.ncbi.nlm.nih.gov/29514064/' target='_blank'>[PubMed]</a>"
    ]
  },
  {
    id: "weight-loss-quadruple-pathway",
    name: "Perda de Peso - Qu\u00e1druplo Agonismo (Retatrutide + Cagrilintide)",
    goal: "weight-loss",
    goalLabel: "Perda de Peso",
    level: "Avan\u00e7ado",
    description: "Combina\u00e7\u00e3o investigacional de ponta que ativa 4 vias metab\u00f3licas distintas simultaneamente: GLP-1, GIP e Glucagon (via Retatrutide) + Amilina (via Cagrilintide). O racional baseia-se no sucesso cl\u00ednico do CagriSema (cagrilintide + semaglutide, 22.7% de perda de peso no REDEFINE 1) e nos resultados recordes do Retatrutide (~24-29% de perda de peso no TRIUMPH). A adi\u00e7\u00e3o da via da amilina ao triplo agonismo cria cobertura m\u00e1xima de vias de saciedade, gasto energ\u00e9tico e metabolismo de gordura. Nenhum ensaio cl\u00ednico desta combina\u00e7\u00e3o espec\u00edfica existe ainda.",
    peptides: [
      {
        id: "retatrutide",
        name: "Retatrutide",
        role: "Triplo agonista GLP-1/GIP/Glucagon - supress\u00e3o de apetite, sensibiliza\u00e7\u00e3o \u00e0 insulina e aumento de gasto energ\u00e9tico via glucagon",
        dose: "1mg/semana, escalonando gradualmente at\u00e9 8-12mg/semana",
        timing: "1x por semana, mesmo dia"
      },
      {
        id: "cagrilintide",
        name: "Cagrilintide",
        role: "An\u00e1logo de amilina de longa a\u00e7\u00e3o - saciedade via \u00e1rea postrema e NTS cerebral, retardo do esvaziamento g\u00e1strico por mecanismo distinto do GLP-1",
        dose: "1.2mg/semana, escalonando at\u00e9 2.4-4.5mg/semana",
        timing: "1x por semana (pode ser em dia diferente do Retatrutide para minimizar efeitos GI)"
      }
    ],
    synergy: "Esta combina\u00e7\u00e3o cobre 4 vias metab\u00f3licas n\u00e3o sobrepostas: (1) GLP-1 - supress\u00e3o central de apetite no hipot\u00e1lamo e retardo g\u00e1strico; (2) GIP - sensibiliza\u00e7\u00e3o \u00e0 insulina e metabolismo lip\u00eddico; (3) Glucagon - aumento do gasto energ\u00e9tico, lip\u00f3lise hep\u00e1tica e termog\u00eanese; (4) Amilina - saciedade por vias cerebrais distintas (\u00e1rea postrema e n\u00facleo do trato solit\u00e1rio), complementando o GLP-1. Estudos pr\u00e9-cl\u00ednicos demonstram que an\u00e1logos de amilina + GLP-1 produzem redu\u00e7\u00e3o de peso sin\u00e9rgica (n\u00e3o apenas aditiva). O CagriSema (cagrilintide + semaglutide) comprovou clinicamente que amilina + GLP-1 supera o GLP-1 isolado (22.7% vs ~15% do Wegovy). O Retatrutide, ao substituir o semaglutide por um triplo agonista, teoricamente amplifica ainda mais esse benef\u00edcio ao adicionar as vias GIP e Glucagon.",
    application: "Aplicar em locais de injeção separados. Retatrutide: SC 1x/semana. Cagrilintide: SC 1x/semana (recomenda-se dia diferente do Retatrutide para distribuir efeitos GI). Não misturar na mesma seringa — são moléculas grandes com formulações e estabilidades distintas.",
    duration: "16-24 semanas com escalonamento gradual de ambos os compostos (iniciar Retatrutide primeiro por 4 semanas, depois adicionar Cagrilintide)",
    warnings: "ALTAMENTE EXPERIMENTAL: Nenhum ensaio cl\u00ednico testou esta combina\u00e7\u00e3o espec\u00edfica. Ambos os compostos est\u00e3o em fase 3 e n\u00e3o t\u00eam aprova\u00e7\u00e3o FDA. Efeitos GI podem ser intensos pela combina\u00e7\u00e3o de m\u00faltiplos mecanismos que retardam o esvaziamento g\u00e1strico. Monitorar fun\u00e7\u00e3o hep\u00e1tica (componente glucagon), glicemia, e sinais de desidrata\u00e7\u00e3o. Uso apenas sob supervis\u00e3o m\u00e9dica rigorosa.",
    evidenceLevel: "Te\u00f3rico-Alto: Retatrutide (fase 3, TRIUMPH - NEJM 2023) + Cagrilintide (fase 3, REDEFINE - NEJM 2025) individualmente t\u00eam evid\u00eancia forte. Sinergia amilina+GLP-1 comprovada clinicamente via CagriSema. Combina\u00e7\u00e3o espec\u00edfica Retatrutide+Cagrilintide: sem dados cl\u00ednicos.",
    references: [
      "Jastreboff AM et al., 2023. 'Triple-Hormone-Receptor Agonist Retatrutide for Obesity.' N Engl J Med. <a href='https://pubmed.ncbi.nlm.nih.gov/37351564/' target='_blank'>[PubMed]</a>",
      "Lau DCW et al., 2021. 'Once-weekly cagrilintide for weight management in people with overweight and obesity.' Lancet. <a href='https://pubmed.ncbi.nlm.nih.gov/34798060/' target='_blank'>[PubMed]</a>",
      "Frias JP et al., 2024. 'Efficacy and safety of co-administered once-weekly cagrilintide 2.4 mg with once-weekly semaglutide 2.4 mg in type 2 diabetes.' Lancet. (CagriSema) <a href='https://pubmed.ncbi.nlm.nih.gov/37364590/' target='_blank'>[PubMed]</a>"
    ]
  },
  {
    id: "weight-loss-gh-based",
    name: "Perda de Peso - Base GH + GLP-1",
    goal: "weight-loss",
    goalLabel: "Perda de Peso",
    level: "Intermedi\u00e1rio",
    description: "Combina\u00e7\u00e3o de agonista GLP-1 com otimiza\u00e7\u00e3o do horm\u00f4nio do crescimento para perda de gordura com preserva\u00e7\u00e3o de massa magra. O GH promove lip\u00f3lise enquanto o GLP-1 controla apetite.",
    peptides: [
      {
        id: "semaglutide",
        name: "Semaglutide",
        role: "Supress\u00e3o de apetite via GLP-1",
        dose: "0.25-2.4mg/semana",
        timing: "1x por semana"
      },
      {
        id: "tesamorelin",
        name: "Tesamorelin",
        role: "Estimulador de GH - lip\u00f3lise abdominal comprovada (aprovado FDA)",
        dose: "2mg/dia",
        timing: "Di\u00e1rio, antes de dormir em jejum"
      },
      {
        id: "ipamorelin",
        name: "Ipamorelin",
        role: "Secretagogo seletivo de GH - pulsos fisiol\u00f3gicos sem aumento de cortisol",
        dose: "200-300mcg",
        timing: "1-2x por dia, em jejum (manh\u00e3 e/ou antes de dormir)"
      }
    ],
    synergy: "Semaglutide reduz ingest\u00e3o cal\u00f3rica. Tesamorelin (GHRH) e Ipamorelin (GHSR) atuam sinergicamente para maximizar pulsos de GH: Tesamorelin estimula a libera\u00e7\u00e3o via GHRH e Ipamorelin amplifica via receptor de grelina, sem aumentar cortisol ou prolactina. O GH elevado promove lip\u00f3lise e preserva\u00e7\u00e3o de massa magra durante o d\u00e9ficit cal\u00f3rico.",
    application: "Tesamorelin + Ipamorelin: PODEM ser misturados na mesma seringa SC — combinação clássica e bem estabelecida. Aplicar juntos antes de dormir em jejum. Semaglutide: aplicar SC separadamente 1x/semana via caneta própria (nunca misturar com peptídeos).",
    duration: "12-16 semanas",
    warnings: "Monitorar IGF-1, glicemia e fun\u00e7\u00e3o tireoideana. Tesamorelin pode causar reten\u00e7\u00e3o h\u00eddrica.",
    evidenceLevel: "Alto (Semaglutide, Tesamorelin: aprovados FDA) / Moderado (Ipamorelin)",
    references: [
      "Wilding JPH et al., 2021. 'Once-Weekly Semaglutide in Adults with Overweight or Obesity.' N Engl J Med. (STEP 1) <a href='https://pubmed.ncbi.nlm.nih.gov/33567185/' target='_blank'>[PubMed]</a>",
      "Falutz J et al., 2007. 'Metabolic effects of a growth hormone-releasing factor in patients with HIV.' N Engl J Med. (Tesamorelin) <a href='https://pubmed.ncbi.nlm.nih.gov/26457580/' target='_blank'>[PubMed]</a>",
      "Raun K et al., 1998. 'Ipamorelin, the first selective growth hormone secretagogue.' Eur J Endocrinol. <a href='https://pubmed.ncbi.nlm.nih.gov/9849822/' target='_blank'>[PubMed]</a>"
    ]
  },
  {
    id: "weight-loss-visceral",
    name: "Perda de Gordura Visceral - Protocolo Direcionado",
    goal: "weight-loss",
    goalLabel: "Perda de Peso",
    level: "Avan\u00e7ado",
    description: "Protocolo especificamente direcionado para redu\u00e7\u00e3o de gordura visceral (adiposidade intra-abdominal), o tipo de gordura mais metabolicamente perigoso, associado a s\u00edndrome metab\u00f3lica, resist\u00eancia \u00e0 insulina, esteatose hep\u00e1tica e risco cardiovascular elevado. Combina o \u00fanico agente aprovado pela FDA para gordura visceral (Tesamorelin) com o triplo agonista Retatrutide \u2014 cujo componente glucagon promove lip\u00f3lise hep\u00e1tica e visceral direta \u2014 e um pept\u00eddeo mitocondrial sensibilizador de insulina, atacando as quatro vias principais do ac\u00famulo visceral: lip\u00f3lise mediada por GH, lip\u00f3lise hep\u00e1tica via glucagon, supress\u00e3o de apetite via incretinas e otimiza\u00e7\u00e3o metab\u00f3lica via AMPK.",
    peptides: [
      {
        id: "tesamorelin",
        name: "Tesamorelin",
        role: "Agente principal \u2014 \u00fanico f\u00e1rmaco aprovado FDA especificamente para redu\u00e7\u00e3o de gordura visceral. Estimula GH de forma puls\u00e1til e fisiol\u00f3gica via receptor de GHRH",
        dose: "2mg/dia SC",
        timing: "Di\u00e1rio, antes de dormir em jejum (m\u00ednimo 2h sem comer)"
      },
      {
        id: "retatrutide",
        name: "Retatrutide",
        role: "Triplo agonista GLP-1/GIP/Glucagon \u2014 o componente glucagon \u00e9 o diferencial para gordura visceral: promove lip\u00f3lise hep\u00e1tica direta, termog\u00eanese e oxida\u00e7\u00e3o de \u00e1cidos graxos. Receptores de glucagon s\u00e3o mais expressos no tecido adiposo visceral que no subcut\u00e2neo. Redu\u00e7\u00e3o de >80% da gordura hep\u00e1tica em estudos de Fase 2",
        dose: "1mg/semana, escalonando gradualmente at\u00e9 8-12mg/semana",
        timing: "1x por semana, mesmo dia"
      },
      {
        id: "mots-c",
        name: "MOTS-c",
        role: "Pept\u00eddeo mitocondrial \u2014 sensibiliza\u00e7\u00e3o \u00e0 insulina via AMPK, mim\u00e9tico de exerc\u00edcio. A resist\u00eancia \u00e0 insulina e hiperinsulinemia s\u00e3o fatores-chave no ac\u00famulo de gordura visceral",
        dose: "5-10mg, 3x por semana",
        timing: "3x por semana, preferencialmente em dias de exerc\u00edcio"
      }
    ],
    synergy: "Este protocolo ataca a gordura visceral por 4 vias complementares e n\u00e3o sobrepostas: (1) Tesamorelin estimula GH puls\u00e1til via GHRH, promovendo lip\u00f3lise preferencial no tecido adiposo visceral \u2014 estudos de imagem (CT/MRI) demonstraram 15-20% de redu\u00e7\u00e3o visceral em 26 semanas. (2) Retatrutide adiciona lip\u00f3lise hep\u00e1tica direta via agonismo do receptor de glucagon \u2014 o glucagon ativa a oxida\u00e7\u00e3o de \u00e1cidos graxos no f\u00edgado e promove termog\u00eanese, com >80% de redu\u00e7\u00e3o de gordura hep\u00e1tica em Fase 2. (3) Os componentes GLP-1 e GIP do Retatrutide suprimem o apetite e melhoram a sensibilidade \u00e0 insulina. (4) MOTS-c ativa AMPK, corrigindo a hiperinsulinemia que perpetua o ac\u00famulo visceral. A combina\u00e7\u00e3o Tesamorelin + Retatrutide \u00e9 particularmente potente porque ambos promovem lip\u00f3lise visceral por mecanismos distintos: GH (Tesamorelin) e Glucagon (Retatrutide), criando um efeito aditivo na mobiliza\u00e7\u00e3o de gordura visceral e hep\u00e1tica.",
    application: "Todos separados. Tesamorelin: SC di\u00e1rio antes de dormir em jejum, seringa pr\u00f3pria. Retatrutide: SC 1x/semana, seringa separada (n\u00e3o misturar com Tesamorelin \u2014 frequ\u00eancias e estabilidades diferentes). MOTS-c: SC em dias programados, seringa separada. Cada um aplicado em local de inje\u00e7\u00e3o diferente (abd\u00f4men, coxa ou bra\u00e7o alternando).",
    duration: "16-24 semanas com escalonamento gradual do Retatrutide (iniciar com 1mg e aumentar a cada 4 semanas). Tesamorelin pode ser continuado por 6-12 meses conforme estudos cl\u00ednicos.",
    warnings: "Retatrutide ainda em Fase 3 de estudos cl\u00ednicos (n\u00e3o aprovado FDA). Monitorar rigorosamente: IGF-1, glicemia em jejum, insulina, perfil lip\u00eddico, fun\u00e7\u00e3o hep\u00e1tica (ALT/AST) e fun\u00e7\u00e3o tireoideana. O componente glucagon do Retatrutide pode aumentar a glicemia \u2014 aten\u00e7\u00e3o especial em pr\u00e9-diab\u00e9ticos. N\u00e1usea e efeitos GI podem ser intensos nas primeiras semanas \u2014 escalonamento gradual \u00e9 essencial. Tesamorelin pode causar reten\u00e7\u00e3o h\u00eddrica e artralgia. Realizar exame de imagem (CT ou MRI abdominal) para acompanhar redu\u00e7\u00e3o de gordura visceral e hep\u00e1tica objetivamente. Uso apenas sob supervis\u00e3o m\u00e9dica.",
    evidenceLevel: "Alto (Tesamorelin: aprovado FDA para gordura visceral com dados de imagem) / Alto (Retatrutide: Fase 2/3 publicados com dados de gordura hep\u00e1tica e visceral, ~24% perda de peso) / Moderado (MOTS-c: estudos pr\u00e9-cl\u00ednicos e cl\u00ednicos iniciais)",
    references: [
      "Stanley TL et al., 2014. 'Effect of tesamorelin on visceral fat and liver fat in HIV-infected patients with abdominal fat accumulation.' JAMA. <a href='https://pubmed.ncbi.nlm.nih.gov/28832410/' target='_blank'>[PubMed]</a>",
      "Falutz J et al., 2007. 'Metabolic effects of a growth hormone-releasing factor in patients with HIV.' N Engl J Med. <a href='https://pubmed.ncbi.nlm.nih.gov/26457580/' target='_blank'>[PubMed]</a>",
      "Jastreboff AM et al., 2023. 'Triple-Hormone-Receptor Agonist Retatrutide for Obesity \u2014 A Phase 2 Trial.' N Engl J Med. <a href='https://pubmed.ncbi.nlm.nih.gov/37351564/' target='_blank'>[PubMed]</a>",
      "Rosenstock J et al., 2023. 'Retatrutide, a GIP, GLP-1 and Glucagon Receptor Agonist, for People with Type 2 Diabetes: a randomised, double-blind, placebo and active-comparator-controlled, parallel-group, phase 2 trial.' Lancet. <a href='https://pubmed.ncbi.nlm.nih.gov/37385280/' target='_blank'>[PubMed]</a>",
      "Lee C et al., 2015. 'The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance.' Cell Metab. <a href='https://pubmed.ncbi.nlm.nih.gov/25738459/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // ANTI-ENVELHECIMENTO
  // =============================================
  {
    id: "anti-aging-cellular",
    name: "Anti-Envelhecimento - Rejuvenescimento Celular",
    goal: "anti-aging",
    goalLabel: "Anti-Envelhecimento",
    level: "Intermedi\u00e1rio",
    description: "Protocolo focado na regenera\u00e7\u00e3o celular atrav\u00e9s de ativa\u00e7\u00e3o da telomerase, suporte mitocondrial e reparo de DNA. Combina os principais pept\u00eddeos anti-aging com mecanismos complementares.",
    peptides: [
      {
        id: "epithalon",
        name: "Epithalon",
        role: "Ativador de telomerase - prote\u00e7\u00e3o e alongamento de tel\u00f4meros",
        dose: "5-10mg/dia por 10-20 dias",
        timing: "Ciclos de 10-20 dias a cada 4-6 meses"
      },
      {
        id: "nad-plus",
        name: "NAD+",
        role: "Coenzima essencial - reparo de DNA via sirtu\u00ednas, produ\u00e7\u00e3o de energia celular",
        dose: "100-250mg SC ou 250-500mg IV",
        timing: "2-3x por semana SC, ou 1x semanal IV"
      },
      {
        id: "ss-31",
        name: "SS-31 (Elamipretide)",
        role: "Prote\u00e7\u00e3o mitocondrial direta - estabiliza cardiolipina na membrana interna",
        dose: "4mg/dia SC",
        timing: "Di\u00e1rio durante ciclos de 4-8 semanas"
      }
    ],
    synergy: "Epithalon ativa a telomerase, protegendo os tel\u00f4meros contra o encurtamento associado ao envelhecimento. NAD+ alimenta as sirtu\u00ednas (SIRT1-7) para reparo de DNA e regulacao epigen\u00e9tica. SS-31 penetra diretamente na membrana mitocondrial interna, estabilizando a cardiolipina e restaurando a fun\u00e7\u00e3o da cadeia de transporte de el\u00e9trons. Juntos, atuam nos 3 pilares do envelhecimento celular: tel\u00f4meros, DNA nuclear e mitoc\u00f4ndrias.",
    application: "Todos separados. Epithalon: SC em um local de injeção. SS-31 (Elamipretide): SC em outro local de injeção. NAD+: SC separado obrigatoriamente (pH diferente, pode degradar outros compostos) ou IV semanal com profissional. Não misturar nenhum destes na mesma seringa.",
    duration: "Epithalon: ciclos de 10-20 dias / NAD+ e SS-31: cont\u00ednuo por 8-12 semanas",
    warnings: "SS-31 ainda em ensaios cl\u00ednicos. NAD+ IV pode causar desconforto tor\u00e1cico durante infus\u00e3o. Monitorar press\u00e3o arterial.",
    evidenceLevel: "Moderado (Epithalon: estudos Khavinson) / Moderado (NAD+: estudos Sinclair) / Alto (SS-31: fase 3)",
    references: [
      "Khavinson VK et al., 2003. 'Epithalon peptide induces telomerase activity and telomere elongation in human somatic cells.' Bull Exp Biol Med. <a href='https://pubmed.ncbi.nlm.nih.gov/15455129/' target='_blank'>[PubMed]</a>",
      "Yoshino J et al., 2021. 'Nicotinamide mononucleotide increases muscle insulin sensitivity in prediabetic women.' Science. <a href='https://pubmed.ncbi.nlm.nih.gov/33888596/' target='_blank'>[PubMed]</a>",
      "Szeto HH, 2014. 'First-in-class cardiolipin-protective compound as a therapeutic agent to restore mitochondrial bioenergetics.' Br J Pharmacol. (SS-31/Elamipretide) <a href='https://pubmed.ncbi.nlm.nih.gov/24117165/' target='_blank'>[PubMed]</a>"
    ]
  },
  {
    id: "anti-aging-comprehensive",
    name: "Anti-Envelhecimento - Protocolo Completo",
    goal: "anti-aging",
    goalLabel: "Anti-Envelhecimento",
    level: "Avan\u00e7ado",
    description: "Protocolo abrangente combinando rejuvenescimento celular, otimiza\u00e7\u00e3o mitocondrial, suporte neuroend\u00f3crino e regenera\u00e7\u00e3o tecidual. Para uso rotacional ao longo do ano.",
    peptides: [
      {
        id: "epithalon",
        name: "Epithalon",
        role: "Ativador de telomerase e regulador da gl\u00e2ndula pineal",
        dose: "5-10mg/dia por 10-20 dias",
        timing: "Ciclos a cada 4-6 meses"
      },
      {
        id: "mots-c",
        name: "MOTS-c",
        role: "Pept\u00eddeo mitocondrial - exerc\u00edcio mim\u00e9tico e regulador metab\u00f3lico",
        dose: "5-10mg, 3x por semana",
        timing: "3x por semana cont\u00ednuo"
      },
      {
        id: "nad-plus",
        name: "NAD+",
        role: "Suporte a sirtu\u00ednas e reparo de DNA",
        dose: "250mg SC 2-3x por semana",
        timing: "2-3x por semana"
      },
      {
        id: "ghk-cu",
        name: "GHK-Cu",
        role: "Pept\u00eddeo de cobre - remodela\u00e7\u00e3o tecidual, col\u00e1geno e reparo da pele",
        dose: "1-2mg/dia SC ou t\u00f3pico",
        timing: "Di\u00e1rio"
      },
      {
        id: "pinealon",
        name: "Pinealon",
        role: "Biorregulador da gl\u00e2ndula pineal - suporte neuroend\u00f3crino",
        dose: "10-20mg/dia por 10-15 dias",
        timing: "Ciclos a cada 4-6 meses, pode coincidir com Epithalon"
      }
    ],
    synergy: "Abordagem multifacetada: Epithalon + Pinealon restauram a fun\u00e7\u00e3o pineal e a telomerase. MOTS-c + NAD+ otimizam a fun\u00e7\u00e3o mitocondrial e o metabolismo energ\u00e9tico. GHK-Cu promove remodela\u00e7\u00e3o tecidual e s\u00edntese de col\u00e1geno. Cada componente atua em um pilar diferente do envelhecimento.",
    application: "GHK-Cu: NUNCA misturar com outros peptídeos — o cobre pode catalisar a degradação de outros compostos. Aplicar SC em local isolado ou uso tópico. Epithalon + Pinealon: podem ser aplicados na mesma sessão em locais diferentes (ambos biorreguladores peptídicos curtos). MOTS-c: SC separado. NAD+: SC separado obrigatoriamente (pH incompatível) ou IV.",
    duration: "Protocolo rotacional ao longo de 12 meses",
    warnings: "Protocolo complexo - recomenda-se supervis\u00e3o m\u00e9dica. Muitos componentes ainda em fase de pesquisa.",
    evidenceLevel: "Moderado a Baixo (maioria em pesquisa pr\u00e9-cl\u00ednica ou cl\u00ednica inicial)",
    references: [
      "Khavinson VK et al., 2003. 'Epithalon peptide induces telomerase activity.' Bull Exp Biol Med. <a href='https://pubmed.ncbi.nlm.nih.gov/15455129/' target='_blank'>[PubMed]</a>",
      "Lee C et al., 2015. 'MOTS-c promotes metabolic homeostasis.' Cell Metab. <a href='https://pubmed.ncbi.nlm.nih.gov/25738459/' target='_blank'>[PubMed]</a>",
      "Pickart L et al., 2012. 'The human tripeptide GHK-Cu in prevention of oxidative stress and degenerative conditions of aging.' Oxid Med Cell Longev. <a href='https://pubmed.ncbi.nlm.nih.gov/22666519/' target='_blank'>[PubMed]</a>",
      "Khavinson VK, 2002. 'Peptides and Ageing.' Neuroendocrinol Lett. (Pinealon/biorreguladores) <a href='https://pubmed.ncbi.nlm.nih.gov/12374906/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // CURA E RECUPERACAO
  // =============================================
  {
    id: "healing-tendon-ligament",
    name: "Recupera\u00e7\u00e3o - Tend\u00f5es e Ligamentos",
    goal: "healing",
    goalLabel: "Cura e Recupera\u00e7\u00e3o",
    level: "Intermedi\u00e1rio",
    description: "O stack cl\u00e1ssico de recupera\u00e7\u00e3o de les\u00f5es musculoesquel\u00e9ticas. BPC-157 e TB-500 s\u00e3o os dois pept\u00eddeos mais pesquisados para cura tecidual, com mecanismos complementares.",
    peptides: [
      {
        id: "bpc-157",
        name: "BPC-157",
        role: "Pept\u00eddeo g\u00e1strico protetor - angiog\u00eanese, cicatriza\u00e7\u00e3o e anti-inflama\u00e7\u00e3o",
        dose: "250-500mcg, 2x por dia",
        timing: "2x por dia, preferencialmente pr\u00f3ximo ao local da les\u00e3o"
      },
      {
        id: "tb-500",
        name: "TB-500",
        role: "Timosina Beta 4 - migra\u00e7\u00e3o celular, diferencia\u00e7\u00e3o e reparo tecidual",
        dose: "2-5mg, 2x por semana (loading), depois 2mg/semana",
        timing: "Fase de carga: 2x/semana por 4-6 semanas, depois manuten\u00e7\u00e3o semanal"
      }
    ],
    synergy: "BPC-157 promove angiog\u00eanese (forma\u00e7\u00e3o de novos vasos) e modula o \u00f3xido n\u00edtrico no local da les\u00e3o, enquanto TB-500 facilita a migra\u00e7\u00e3o celular e remodela\u00e7\u00e3o da actina. Juntos, o BPC-157 cria a infraestrutura vascular e o TB-500 direciona as c\u00e9lulas reparadoras ao local. A combina\u00e7\u00e3o \u00e9 amplamente considerada sin\u00e9rgica na comunidade de pesquisa.",
    application: "BPC-157 + TB-500: PODEM ser misturados na mesma seringa SC — esta é a combinação mais clássica e amplamente utilizada para mistura. Aplicar a injeção próximo ao local da lesão para maximizar a ação local de ambos os peptídeos.",
    duration: "6-8 semanas (loading + manuten\u00e7\u00e3o)",
    warnings: "Ambos ainda em fase de pesquisa (sem ensaios cl\u00ednicos em humanos completos para estas indica\u00e7\u00f5es). BPC-157 tem extensa pesquisa pr\u00e9-cl\u00ednica.",
    evidenceLevel: "Moderado (extensa pesquisa pr\u00e9-cl\u00ednica, dados cl\u00ednicos limitados)",
    references: [
      "Sikiric P et al., 2018. 'Brain-gut Axis and Pentadecapeptide BPC 157: Theoretical and Practical Implications.' Curr Neuropharmacol. <a href='https://pubmed.ncbi.nlm.nih.gov/27138887/' target='_blank'>[PubMed]</a>",
      "Goldstein AL et al., 2012. 'Thymosin beta4: a multi-functional regenerative peptide.' Expert Opin Biol Ther. <a href='https://pubmed.ncbi.nlm.nih.gov/22074294/' target='_blank'>[PubMed]</a>"
    ]
  },
  {
    id: "healing-full-recovery",
    name: "Recupera\u00e7\u00e3o - Protocolo Completo",
    goal: "healing",
    goalLabel: "Cura e Recupera\u00e7\u00e3o",
    level: "Avan\u00e7ado",
    description: "Protocolo completo para recupera\u00e7\u00e3o de les\u00f5es graves ou cr\u00f4nicas, adicionando pept\u00eddeo de cobre para col\u00e1geno e antimicrobiano para preven\u00e7\u00e3o de infec\u00e7\u00e3o.",
    peptides: [
      {
        id: "bpc-157",
        name: "BPC-157",
        role: "Base de cicatriza\u00e7\u00e3o - angiog\u00eanese e anti-inflama\u00e7\u00e3o",
        dose: "500mcg, 2x por dia",
        timing: "2x por dia, pr\u00f3ximo \u00e0 les\u00e3o"
      },
      {
        id: "tb-500",
        name: "TB-500",
        role: "Reparo tecidual e migra\u00e7\u00e3o celular",
        dose: "5mg, 2x por semana (loading)",
        timing: "2x por semana por 4 semanas, depois 2mg/semana"
      },
      {
        id: "ghk-cu",
        name: "GHK-Cu",
        role: "Pept\u00eddeo de cobre - s\u00edntese de col\u00e1geno, elastina e glicosaminoglicanos",
        dose: "1-2mg/dia",
        timing: "Di\u00e1rio, sist\u00eamico ou local"
      },
      {
        id: "kpv",
        name: "KPV",
        role: "Anti-inflamat\u00f3rio potente - modulador de NF-kB e antimicrobiano",
        dose: "200-500mcg/dia",
        timing: "Di\u00e1rio"
      }
    ],
    synergy: "BPC-157 e TB-500 fornecem a base de reparo tecidual. GHK-Cu adiciona s\u00edntese de col\u00e1geno e remodelagem da matriz extracelular, essencial para tend\u00f5es e ligamentos. KPV, derivado da alfa-MSH, reduz inflama\u00e7\u00e3o via inibi\u00e7\u00e3o de NF-kB e possui propriedades antimicrobianas, prevenindo complica\u00e7\u00f5es.",
    application: "BPC-157 + TB-500: podem ser misturados na mesma seringa SC e aplicados próximo à lesão. GHK-Cu: aplicar SEPARADAMENTE — NUNCA misturar com outros peptídeos (cobre catalisa degradação). Usar SC em local distinto ou via tópica. KPV: aplicar SC em seringa separada.",
    duration: "6-12 semanas dependendo da gravidade",
    warnings: "Todos os componentes est\u00e3o em fase de pesquisa. Consultar profissional de sa\u00fade para les\u00f5es graves.",
    evidenceLevel: "Moderado (pesquisa pr\u00e9-cl\u00ednica extensa) / Baixo (dados cl\u00ednicos humanos)",
    references: [
      "Sikiric P et al., 2018. 'Brain-gut Axis and Pentadecapeptide BPC 157.' Curr Neuropharmacol. <a href='https://pubmed.ncbi.nlm.nih.gov/27138887/' target='_blank'>[PubMed]</a>",
      "Goldstein AL et al., 2012. 'Thymosin beta4: a multi-functional regenerative peptide.' Expert Opin Biol Ther. <a href='https://pubmed.ncbi.nlm.nih.gov/22074294/' target='_blank'>[PubMed]</a>",
      "Pickart L et al., 2012. 'GHK-Cu in prevention of oxidative stress and degenerative conditions.' Oxid Med Cell Longev. <a href='https://pubmed.ncbi.nlm.nih.gov/22666519/' target='_blank'>[PubMed]</a>",
      "Kannengiesser K et al., 2008. 'Melanocortin-derived tripeptide KPV has anti-inflammatory potential in murine models of IBD.' Inflamm Bowel Dis. <a href='https://pubmed.ncbi.nlm.nih.gov/18092346/' target='_blank'>[PubMed]</a>"
    ]
  },
  {
    id: "healing-gut",
    name: "Sa\u00fade Intestinal - Reparo do TGI",
    goal: "healing",
    goalLabel: "Cura e Recupera\u00e7\u00e3o",
    level: "Intermedi\u00e1rio",
    description: "Protocolo direcionado para reparo da mucosa gastrointestinal, \u00fatil em s\u00edndromes de permeabilidade intestinal, IBD e les\u00f5es da mucosa.",
    peptides: [
      {
        id: "bpc-157",
        name: "BPC-157",
        role: "Pept\u00eddeo g\u00e1strico - prote\u00e7\u00e3o e reparo direto da mucosa GI",
        dose: "250-500mcg, 2x por dia",
        timing: "Via oral ou subcut\u00e2nea, 2x por dia em jejum"
      },
      {
        id: "kpv",
        name: "KPV",
        role: "Anti-inflamat\u00f3rio intestinal - inibi\u00e7\u00e3o de citocinas pr\u00f3-inflamat\u00f3rias",
        dose: "200-500mcg/dia oral",
        timing: "Di\u00e1rio, via oral para a\u00e7\u00e3o local no TGI"
      },
      {
        id: "glutathione",
        name: "Glutationa",
        role: "Antioxidante master - prote\u00e7\u00e3o contra estresse oxidativo intestinal",
        dose: "500-1000mg/dia oral ou 600mg IV 1x/semana",
        timing: "Di\u00e1rio oral ou semanal IV"
      }
    ],
    synergy: "BPC-157 \u00e9 naturalmente derivado do suco g\u00e1strico e tem a\u00e7\u00e3o direta na prote\u00e7\u00e3o da mucosa. KPV reduz a inflama\u00e7\u00e3o intestinal atuando nas c\u00e9lulas epiteliais e imunes do intestino. Glutationa protege contra o estresse oxidativo que perpetua a les\u00e3o tecidual. A combina\u00e7\u00e3o aborda reparo, inflama\u00e7\u00e3o e estresse oxidativo simultaneamente.",
    application: "Protocolo intestinal com foco em via oral. BPC-157 e KPV: podem ser tomados por via oral simultaneamente, em jejum para melhor absorção. Se via SC, aplicar em seringas separadas. Glutationa: via oral separada das refeições, ou IV semanal com profissional habilitado (não misturar com peptídeos).",
    duration: "8-12 semanas",
    warnings: "BPC-157 oral pode ter biodisponibilidade vari\u00e1vel. Investigar causas subjacentes de problemas GI.",
    evidenceLevel: "Moderado (BPC-157: extensa pesquisa animal) / Baixo (KPV: estudos iniciais)",
    references: [
      "Sikiric P et al., 2022. 'Stable gastric pentadecapeptide BPC 157-therapy and the nervous system.' Curr Pharm Des. <a href='https://pubmed.ncbi.nlm.nih.gov/37242459/' target='_blank'>[PubMed]</a>",
      "Seiwerth S et al., 2014. 'BPC 157 effect on healing.' J Physiol Pharmacol. <a href='https://pubmed.ncbi.nlm.nih.gov/23782145/' target='_blank'>[PubMed]</a>",
      "Kannengiesser K et al., 2008. 'Melanocortin-derived tripeptide KPV has anti-inflammatory potential in murine models of IBD.' Inflamm Bowel Dis. <a href='https://pubmed.ncbi.nlm.nih.gov/18092346/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // HORMONIO DO CRESCIMENTO
  // =============================================
  {
    id: "gh-classic-stack",
    name: "Otimiza\u00e7\u00e3o de GH - Stack Cl\u00e1ssico",
    goal: "growth-hormone",
    goalLabel: "Horm\u00f4nio do Crescimento",
    level: "Intermedi\u00e1rio",
    description: "A combina\u00e7\u00e3o mais popular de secretagogos de GH. CJC-1295 (GHRH) e Ipamorelin (GHSR) atuam em receptores diferentes para criar pulsos sinergisticos de GH que mimetizam o padr\u00e3o fisiol\u00f3gico.",
    peptides: [
      {
        id: "cjc-1295-no-dac",
        name: "CJC-1295 sem DAC (Mod GRF 1-29)",
        role: "An\u00e1logo de GHRH - sinaliza a hip\u00f3fise para liberar GH",
        dose: "100-200mcg por aplica\u00e7\u00e3o",
        timing: "2-3x por dia (manh\u00e3, p\u00f3s-treino e antes de dormir)"
      },
      {
        id: "ipamorelin",
        name: "Ipamorelin",
        role: "Secretagogo seletivo de GH via receptor de grelina - sem aumento de cortisol",
        dose: "200-300mcg por aplica\u00e7\u00e3o",
        timing: "Combinado com CJC-1295 nos mesmos hor\u00e1rios"
      }
    ],
    synergy: "CJC-1295 atua no receptor de GHRH e Ipamorelin no receptor de grelina (GHS-R). Quando combinados, produzem um efeito sinerg\u00edstico: o pulso de GH resultante \u00e9 significativamente maior do que a soma dos dois individualmente. Ipamorelin \u00e9 o secretagogo mais seletivo, n\u00e3o aumentando cortisol nem prolactina, ao contr\u00e1rio de GHRP-2 e GHRP-6.",
    application: "CJC-1295 sem DAC + Ipamorelin: DEVEM ser misturados na mesma seringa SC — esta é a combinação padrão e mais utilizada na prática clínica. Reconstituir no mesmo vial ou aspirar para a mesma seringa. Aplicar juntos em jejum nos horários programados (manhã, pós-treino e/ou antes de dormir).",
    duration: "8-12 semanas, com pausas de 4 semanas entre ciclos",
    warnings: "Administrar em jejum (carboidratos e gorduras suprimem a libera\u00e7\u00e3o de GH). Monitorar IGF-1.",
    evidenceLevel: "Moderado (ambos com estudos cl\u00ednicos, mas n\u00e3o aprovados para esta indica\u00e7\u00e3o)",
    references: [
      "Teichman SL et al., 2006. 'Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295.' J Clin Endocrinol Metab. <a href='https://pubmed.ncbi.nlm.nih.gov/16352683/' target='_blank'>[PubMed]</a>",
      "Raun K et al., 1998. 'Ipamorelin, the first selective growth hormone secretagogue.' Eur J Endocrinol. <a href='https://pubmed.ncbi.nlm.nih.gov/9849822/' target='_blank'>[PubMed]</a>"
    ]
  },
  {
    id: "gh-comprehensive",
    name: "Otimiza\u00e7\u00e3o de GH - Protocolo Completo",
    goal: "growth-hormone",
    goalLabel: "Horm\u00f4nio do Crescimento",
    level: "Avan\u00e7ado",
    description: "Stack completo para maximiza\u00e7\u00e3o do GH combinando secretagogos com MK-677 oral para manuten\u00e7\u00e3o de n\u00edveis elevados 24h.",
    peptides: [
      {
        id: "tesamorelin",
        name: "Tesamorelin",
        role: "GHRH anal\u00f3gico aprovado FDA - estimula\u00e7\u00e3o de GH com redu\u00e7\u00e3o de gordura visceral",
        dose: "2mg/dia",
        timing: "Antes de dormir, em jejum"
      },
      {
        id: "ipamorelin",
        name: "Ipamorelin",
        role: "Amplificador de pulso de GH via receptor de grelina",
        dose: "200-300mcg",
        timing: "Combinado com Tesamorelin antes de dormir"
      },
      {
        id: "mk-677",
        name: "MK-677 (Ibutamoren)",
        role: "Secretagogo oral de GH - eleva\u00e7\u00e3o sustentada de GH e IGF-1 por 24h",
        dose: "10-25mg/dia oral",
        timing: "Pela manh\u00e3 ou \u00e0 noite (pode causar sonol\u00eancia)"
      }
    ],
    synergy: "Tesamorelin (GHRH) + Ipamorelin (grelina) criam pulsos noturnos potentes de GH. MK-677 oral mant\u00e9m eleva\u00e7\u00e3o sustentada de GH e IGF-1 durante o dia. A combina\u00e7\u00e3o resulta em otimiza\u00e7\u00e3o 24 horas do eixo GH/IGF-1.",
    application: "Tesamorelin + Ipamorelin: PODEM ser misturados na mesma seringa SC — combinação bem estabelecida. Aplicar juntos antes de dormir em jejum. MK-677 (Ibutamoren): via oral, administrar separadamente pela manhã ou à noite. Não requer injeção.",
    duration: "MK-677: cont\u00ednuo / Tesamorelin + Ipamorelin: ciclos de 8-12 semanas",
    warnings: "MK-677 pode causar resist\u00eancia \u00e0 insulina com uso prolongado. Monitorar glicemia, IGF-1 e insulina. Reten\u00e7\u00e3o h\u00eddrica \u00e9 comum.",
    evidenceLevel: "Alto (Tesamorelin: aprovado FDA) / Moderado (Ipamorelin, MK-677: estudos cl\u00ednicos)",
    references: [
      "Falutz J et al., 2007. 'Metabolic effects of a growth hormone-releasing factor in patients with HIV.' N Engl J Med. (Tesamorelin) <a href='https://pubmed.ncbi.nlm.nih.gov/26457580/' target='_blank'>[PubMed]</a>",
      "Raun K et al., 1998. 'Ipamorelin, the first selective growth hormone secretagogue.' Eur J Endocrinol. <a href='https://pubmed.ncbi.nlm.nih.gov/9849822/' target='_blank'>[PubMed]</a>",
      "Nass R et al., 2008. 'Effects of an oral ghrelin mimetic on body composition and clinical outcomes in healthy older adults.' Ann Intern Med. (MK-677) <a href='https://pubmed.ncbi.nlm.nih.gov/18981485/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // COGNITIVO
  // =============================================
  {
    id: "cognitive-focus",
    name: "Cognitivo - Foco e Ansiedade",
    goal: "cognitive",
    goalLabel: "Cognitivo",
    level: "Iniciante",
    description: "Stack cl\u00e1ssico russo para otimiza\u00e7\u00e3o cognitiva. Semax melhora foco e mem\u00f3ria enquanto Selank reduz ansiedade, criando um estado de clareza mental sem agita\u00e7\u00e3o.",
    peptides: [
      {
        id: "semax",
        name: "Semax",
        role: "Nootr\u00f3pico - aumento de BDNF, foco, mem\u00f3ria e neuroprote\u00e7\u00e3o",
        dose: "200-600mcg/dia intranasal",
        timing: "1-2x por dia, manh\u00e3 e in\u00edcio da tarde"
      },
      {
        id: "selank",
        name: "Selank",
        role: "Ansiol\u00edtico peptidergico - redu\u00e7\u00e3o de ansiedade sem seda\u00e7\u00e3o",
        dose: "250-500mcg/dia intranasal",
        timing: "1-2x por dia, pode ser combinado com Semax"
      }
    ],
    synergy: "Semax aumenta BDNF e melhora a neurotransmiss\u00e3o dopamin\u00e9rgica e serotonin\u00e9rgica, melhorando foco e mem\u00f3ria. Selank modula o sistema GABA\u00e9rgico e tamb\u00e9m aumenta BDNF, reduzindo ansiedade sem causar sonol\u00eancia. Juntos, criam um estado de 'fluxo cognitivo': alta performance mental com calma emocional. Ambos aprovados na R\u00fassia como medicamentos.",
    application: "Semax + Selank: PODEM ser aplicados na mesma sessão por via intranasal — aplicar sequencialmente, um spray em cada narina ou alternando. Alguns fornecedores oferecem formulações combinadas. Não requerem injeção.",
    duration: "Ciclos de 2-4 semanas com pausas de 1-2 semanas",
    warnings: "Ambos aprovados na R\u00fassia, mas n\u00e3o em pa\u00edses ocidentais. Irrita\u00e7\u00e3o nasal ocasional.",
    evidenceLevel: "Moderado (ambos aprovados na R\u00fassia com estudos publicados)",
    references: [
      "Eremin KO et al., 2005. 'Semax, an ACTH(4-10) analogue with nootropic properties, activates dopaminergic and serotoninergic brain systems in rodents.' Neurochem Res. <a href='https://pubmed.ncbi.nlm.nih.gov/16362768/' target='_blank'>[PubMed]</a>",
      "Semenova TP et al., 2010. 'Selank has an anxiolytic effect and increases the mRNA levels of the BDNF gene.' Bull Exp Biol Med. <a href='https://pubmed.ncbi.nlm.nih.gov/20919548/' target='_blank'>[PubMed]</a>"
    ]
  },
  {
    id: "cognitive-advanced",
    name: "Cognitivo - Neuroplasticidade Avan\u00e7ada",
    goal: "cognitive",
    goalLabel: "Cognitivo",
    level: "Avan\u00e7ado",
    description: "Stack avan\u00e7ado para maximiza\u00e7\u00e3o da neuroplasticidade, sinaptog\u00eanese e BDNF. Combina m\u00faltiplos mecanismos de a\u00e7\u00e3o para otimiza\u00e7\u00e3o cognitiva profunda.",
    peptides: [
      {
        id: "semax",
        name: "Semax",
        role: "Base nootr\u00f3pica - BDNF, dopamina e serotonina",
        dose: "400-600mcg/dia intranasal",
        timing: "2x por dia"
      },
      {
        id: "selank",
        name: "Selank",
        role: "Modulador ansiol\u00edtico e imunomodulador",
        dose: "250-500mcg/dia intranasal",
        timing: "2x por dia"
      },
      {
        id: "dihexa",
        name: "Dihexa",
        role: "Potente sinaptog\u00eanico - estimula forma\u00e7\u00e3o de novas sinapses",
        dose: "10-20mg/dia oral",
        timing: "Di\u00e1rio pela manh\u00e3"
      },
      {
        id: "cerebrolysin",
        name: "Cerebrolysin",
        role: "Complexo neurotr\u00f3fico - fatores de crescimento neural combinados",
        dose: "5-10ml IM",
        timing: "Di\u00e1rio ou em dias alternados por 10-20 dias"
      }
    ],
    synergy: "Semax e Selank elevam BDNF por vias diferentes. Dihexa, an\u00e1logo de angiotensina IV, \u00e9 descrito como 10 milh\u00f5es de vezes mais potente que BDNF na promo\u00e7\u00e3o de sinaptog\u00eanese (Harding et al., 2014). Cerebrolysin fornece uma mistura de fatores neurotr\u00f3ficos que suportam a sobreviv\u00eancia neuronal. A combina\u00e7\u00e3o ataca neuroplasticidade por m\u00faltiplas vias.",
    application: "Semax + Selank: aplicar intranasal na mesma sessão (um por narina ou sequencialmente). Dihexa: via oral, administrar separadamente. Cerebrolysin: injeção IM obrigatória com volume alto (5-10ml) — requer administração por profissional habilitado. Não misturar Cerebrolysin com outros compostos na mesma seringa.",
    duration: "Cerebrolysin: ciclos de 10-20 dias / Demais: ciclos de 4-8 semanas",
    warnings: "Dihexa tem dados cl\u00ednicos muito limitados. Cerebrolysin requer administra\u00e7\u00e3o profissional. Stack experimental.",
    evidenceLevel: "Moderado (Semax, Selank, Cerebrolysin) / Baixo (Dihexa: pesquisa b\u00e1sica)",
    references: [
      "Eremin KO et al., 2005. 'Semax activates dopaminergic and serotoninergic brain systems.' Neurochem Res. <a href='https://pubmed.ncbi.nlm.nih.gov/16362768/' target='_blank'>[PubMed]</a>",
      "McCoy AT et al., 2013. 'Evaluation of metabolically stabilized angiotensin IV analogs as procognitive/antidementia agents.' J Pharmacol Exp Ther. (Dihexa) <a href='https://pubmed.ncbi.nlm.nih.gov/23055539/' target='_blank'>[PubMed]</a>",
      "Alvarez XA et al., 2006. 'Cerebrolysin reduces microglial activation in vivo and in vitro.' J Neurol Sci. <a href='https://pubmed.ncbi.nlm.nih.gov/10961440/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // SISTEMA IMUNOLOGICO
  // =============================================
  {
    id: "immune-support",
    name: "Suporte Imunol\u00f3gico - Protocolo Completo",
    goal: "immune",
    goalLabel: "Sistema Imunol\u00f3gico",
    level: "Intermedi\u00e1rio",
    description: "Protocolo para fortalecimento do sistema imunol\u00f3gico combinando imunomodula\u00e7\u00e3o, anti-inflama\u00e7\u00e3o e suporte antioxidante. \u00datil em per\u00edodos de maior vulnerabilidade ou recupera\u00e7\u00e3o.",
    peptides: [
      {
        id: "thymosin-alpha-1",
        name: "Timosina Alfa 1",
        role: "Imunomodulador principal - ativa\u00e7\u00e3o de c\u00e9lulas T e NK",
        dose: "1.6mg SC, 2x por semana",
        timing: "2x por semana, dias alternados"
      },
      {
        id: "kpv",
        name: "KPV",
        role: "Anti-inflamat\u00f3rio e antimicrobiano - modula\u00e7\u00e3o de NF-kB",
        dose: "200-500mcg/dia",
        timing: "Di\u00e1rio"
      },
      {
        id: "glutathione",
        name: "Glutationa",
        role: "Antioxidante master - detoxifica\u00e7\u00e3o e prote\u00e7\u00e3o celular",
        dose: "600-1500mg IV semanal ou 500mg oral di\u00e1rio",
        timing: "Semanal IV ou di\u00e1rio oral"
      }
    ],
    synergy: "Timosina Alfa 1 fortalece a imunidade adaptativa (c\u00e9lulas T, NK, dendriticas). KPV reduz inflama\u00e7\u00e3o cr\u00f4nica que suprime a fun\u00e7\u00e3o imune e possui a\u00e7\u00e3o antimicrobiana direta. Glutationa protege as c\u00e9lulas imunes contra estresse oxidativo e suporta a detoxifica\u00e7\u00e3o hep\u00e1tica. A combina\u00e7\u00e3o cria um ambiente \u00f3timo para fun\u00e7\u00e3o imunol\u00f3gica.",
    application: "Todos separados. Timosina Alfa 1: SC nos dias programados, seringa própria. KPV: SC diário em local de injeção diferente, seringa separada. Glutationa: via oral diária ou IV semanal com profissional. Não misturar Timosina Alfa 1 com KPV na mesma seringa devido a diferentes estabilidades e concentrações.",
    duration: "8-12 semanas",
    warnings: "Timosina Alfa 1 aprovada em alguns pa\u00edses (n\u00e3o FDA). Monitorar marcadores inflamat\u00f3rios.",
    evidenceLevel: "Alto (Timosina Alfa 1: aprovada em v\u00e1rios pa\u00edses) / Baixo-Moderado (KPV, Glutationa)",
    references: [
      "Garaci E et al., 2012. 'Thymosin alpha 1: from bench to bedside.' Ann N Y Acad Sci. <a href='https://pubmed.ncbi.nlm.nih.gov/17600290/' target='_blank'>[PubMed]</a>",
      "Kannengiesser K et al., 2008. 'KPV has anti-inflammatory potential in murine models of IBD.' Inflamm Bowel Dis. <a href='https://pubmed.ncbi.nlm.nih.gov/18092346/' target='_blank'>[PubMed]</a>",
      "Forman HJ et al., 2009. 'Glutathione: Overview of its protective roles, measurement, and biosynthesis.' Mol Aspects Med. <a href='https://pubmed.ncbi.nlm.nih.gov/18796312/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // PELE E ESTETICA
  // =============================================
  {
    id: "skin-rejuvenation",
    name: "Rejuvenescimento da Pele",
    goal: "skin",
    goalLabel: "Pele e Est\u00e9tica",
    level: "Intermedi\u00e1rio",
    description: "Protocolo para rejuvenescimento cut\u00e2neo combinando s\u00edntese de col\u00e1geno, antioxida\u00e7\u00e3o e ativa\u00e7\u00e3o da telomerase para combater o envelhecimento da pele por m\u00faltiplas vias.",
    peptides: [
      {
        id: "ghk-cu",
        name: "GHK-Cu",
        role: "S\u00edntese de col\u00e1geno, elastina e remodelagem da matriz extracelular",
        dose: "1-2mg/dia SC ou t\u00f3pico 1-2%",
        timing: "Di\u00e1rio"
      },
      {
        id: "epithalon",
        name: "Epithalon",
        role: "Ativador de telomerase - rejuvenescimento celular",
        dose: "5-10mg/dia por 10-20 dias",
        timing: "Ciclos a cada 4-6 meses"
      },
      {
        id: "glutathione",
        name: "Glutationa",
        role: "Antioxidante e clareamento cut\u00e2neo via inibi\u00e7\u00e3o da tirosinase",
        dose: "600-1500mg IV semanal",
        timing: "1-2x por semana"
      },
      {
        id: "snap-8",
        name: "Snap-8",
        role: "Anti-rugas t\u00f3pico - relaxamento muscular tipo botox",
        dose: "T\u00f3pico 3-10%",
        timing: "2x ao dia na pele limpa"
      }
    ],
    synergy: "GHK-Cu estimula fibroblastos a produzirem col\u00e1geno I, III e elastina, restaurando a firmeza da pele. Epithalon rejuvenesce as c\u00e9lulas via telomerase. Glutationa clareia a pele inibindo a melanog\u00eanese e protege contra dano oxidativo UV. Snap-8 relaxa as micro-contra\u00e7\u00f5es que formam linhas de express\u00e3o. Abordagem completa: estrutura + celular + prote\u00e7\u00e3o + suaviza\u00e7\u00e3o.",
    application: "Quatro vias diferentes — todos separados. GHK-Cu: SC ou tópico (NUNCA misturar com outros peptídeos — cobre degrada compostos). Epithalon: SC em local separado do GHK-Cu. Glutationa: IV com profissional habilitado. Snap-8: uso exclusivamente tópico na pele limpa. Cada um aplicado por sua via específica.",
    duration: "GHK-Cu, Glutationa, Snap-8: cont\u00ednuo / Epithalon: ciclos",
    warnings: "Resultados est\u00e9ticos s\u00e3o graduais (semanas a meses). Glutationa IV requer profissional habilitado.",
    evidenceLevel: "Moderado (GHK-Cu: estudos Pickart) / Baixo-Moderado (demais)",
    references: [
      "Pickart L et al., 2012. 'The human tripeptide GHK-Cu in prevention of oxidative stress and degenerative conditions of aging.' Oxid Med Cell Longev. <a href='https://pubmed.ncbi.nlm.nih.gov/22666519/' target='_blank'>[PubMed]</a>",
      "Khavinson VK et al., 2003. 'Epithalon induces telomerase activity.' Bull Exp Biol Med. <a href='https://pubmed.ncbi.nlm.nih.gov/15455129/' target='_blank'>[PubMed]</a>",
      "Arjinpathana N, Asawanonda P, 2012. 'Glutathione as an oral whitening agent: a randomized, double-blind, placebo-controlled study.' J Dermatolog Treat. <a href='https://pubmed.ncbi.nlm.nih.gov/20524875/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // COMPOSICAO CORPORAL
  // =============================================
  {
    id: "body-recomp",
    name: "Recomposi\u00e7\u00e3o Corporal - Perder Gordura e Ganhar M\u00fasculo",
    goal: "body-comp",
    goalLabel: "Composi\u00e7\u00e3o Corporal",
    level: "Avan\u00e7ado",
    description: "Protocolo para simultaneamente reduzir gordura corporal e manter/ganhar massa muscular, combinando lip\u00f3lise, otimiza\u00e7\u00e3o de GH e suporte anab\u00f3lico.",
    peptides: [
      {
        id: "tesamorelin",
        name: "Tesamorelin",
        role: "Redu\u00e7\u00e3o de gordura visceral comprovada + eleva\u00e7\u00e3o de GH",
        dose: "2mg/dia",
        timing: "Antes de dormir, em jejum"
      },
      {
        id: "ipamorelin",
        name: "Ipamorelin",
        role: "Amplifica\u00e7\u00e3o de pulsos de GH para lip\u00f3lise e anabolismo",
        dose: "200-300mcg",
        timing: "Combinado com Tesamorelin + 1 dose p\u00f3s-treino"
      },
      {
        id: "hgh-fragment-176-191",
        name: "HGH Fragment 176-191",
        role: "Lip\u00f3lise direta sem efeitos anab\u00f3licos - complementa o GH para queima de gordura",
        dose: "250-500mcg/dia",
        timing: "Manh\u00e3 em jejum (separado dos secretagogos de GH)"
      },
      {
        id: "bpc-157",
        name: "BPC-157",
        role: "Recupera\u00e7\u00e3o muscular e articular durante treino intenso",
        dose: "250-500mcg/dia",
        timing: "P\u00f3s-treino"
      }
    ],
    synergy: "Tesamorelin + Ipamorelin maximizam a libera\u00e7\u00e3o natural de GH, promovendo lip\u00f3lise e s\u00edntese proteica. O HGH Fragment adiciona lip\u00f3lise espec\u00edfica sem interferir na sinaliza\u00e7\u00e3o de IGF-1. BPC-157 acelera a recupera\u00e7\u00e3o entre treinos, permitindo maior volume e intensidade. O resultado \u00e9 um ambiente hormonal que favorece simultaneamente perda de gordura e ganho/manuten\u00e7\u00e3o muscular.",
    application: "Tesamorelin + Ipamorelin: PODEM ser misturados na mesma seringa SC — aplicar juntos antes de dormir em jejum. HGH Fragment 176-191: SC separado pela manhã em jejum (timing diferente dos secretagogos, não misturar). BPC-157: SC separado, preferencialmente pós-treino em local próximo à área treinada.",
    duration: "8-12 semanas",
    warnings: "Requer treino de resist\u00eancia e nutri\u00e7\u00e3o adequada (prote\u00edna suficiente). Monitorar IGF-1 e glicemia.",
    evidenceLevel: "Alto (Tesamorelin: FDA) / Moderado (Ipamorelin) / Baixo (HGH Frag, BPC-157 para esta indica\u00e7\u00e3o)",
    references: [
      "Falutz J et al., 2007. 'Metabolic effects of a growth hormone-releasing factor in patients with HIV.' N Engl J Med. (Tesamorelin) <a href='https://pubmed.ncbi.nlm.nih.gov/26457580/' target='_blank'>[PubMed]</a>",
      "Raun K et al., 1998. 'Ipamorelin, the first selective growth hormone secretagogue.' Eur J Endocrinol. <a href='https://pubmed.ncbi.nlm.nih.gov/9849822/' target='_blank'>[PubMed]</a>",
      "Sikiric P et al., 2018. 'BPC 157: Theoretical and Practical Implications.' Curr Neuropharmacol. <a href='https://pubmed.ncbi.nlm.nih.gov/27138887/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // LONGEVIDADE / SAUDE GERAL
  // =============================================
  {
    id: "longevity-protocol",
    name: "Longevidade - Protocolo de Sa\u00fade Geral",
    goal: "anti-aging",
    goalLabel: "Anti-Envelhecimento",
    level: "Avan\u00e7ado",
    description: "Protocolo abrangente para otimiza\u00e7\u00e3o da sa\u00fade geral e longevidade, cobrindo todos os principais pilares: mitoc\u00f4ndrias, tel\u00f4meros, inflama\u00e7\u00e3o, imunidade e fun\u00e7\u00e3o cognitiva.",
    peptides: [
      {
        id: "epithalon",
        name: "Epithalon",
        role: "Tel\u00f4meros e gl\u00e2ndula pineal",
        dose: "5-10mg/dia por 10-20 dias",
        timing: "Ciclos 2-3x por ano"
      },
      {
        id: "nad-plus",
        name: "NAD+",
        role: "Reparo de DNA e energia celular",
        dose: "250mg SC 2-3x/semana",
        timing: "Cont\u00ednuo"
      },
      {
        id: "thymosin-alpha-1",
        name: "Timosina Alfa 1",
        role: "Rejuvenescimento imunol\u00f3gico",
        dose: "1.6mg 2x/semana",
        timing: "Cont\u00ednuo ou ciclos de 3 meses"
      },
      {
        id: "bpc-157",
        name: "BPC-157",
        role: "Prote\u00e7\u00e3o gastrointestinal e reparo tecidual",
        dose: "250mcg/dia",
        timing: "Cont\u00ednuo ou ciclos"
      },
      {
        id: "semax",
        name: "Semax",
        role: "Neuroprote\u00e7\u00e3o e BDNF",
        dose: "200-400mcg/dia intranasal",
        timing: "Ciclos de 2-4 semanas"
      }
    ],
    synergy: "Cada pept\u00eddeo aborda um pilar fundamental da longevidade: Epithalon (tel\u00f4meros), NAD+ (energia/DNA), Timosina Alfa 1 (imunossenesc\u00eancia), BPC-157 (integridade GI e reparo) e Semax (neuroprote\u00e7\u00e3o). N\u00e3o h\u00e1 sobreposi\u00e7\u00e3o significativa de mecanismos, maximizando o benef\u00edcio com m\u00ednima redund\u00e2ncia.",
    application: "Protocolo rotacional — nem todos utilizados simultaneamente. Semax: via intranasal, separado. NAD+: SC separado obrigatoriamente (não misturar). Epithalon: SC em ciclos periódicos, seringa própria. BPC-157 e Timosina Alfa 1: podem ser aplicados no mesmo dia, porém em seringas e locais de injeção separados.",
    duration: "Protocolo rotacional ao longo de 12 meses",
    warnings: "Protocolo complexo e custoso. Requer acompanhamento m\u00e9dico e exames peri\u00f3dicos. Muitos componentes em fase de pesquisa.",
    evidenceLevel: "Variado - de Alto (Timosina Alfa 1) a Baixo (abordagem combinada n\u00e3o testada)",
    references: [
      "Khavinson VK et al., 2003. 'Epithalon induces telomerase activity and telomere elongation.' Bull Exp Biol Med. <a href='https://pubmed.ncbi.nlm.nih.gov/15455129/' target='_blank'>[PubMed]</a>",
      "Rajman L et al., 2018. 'Therapeutic Potential of NAD-Boosting Molecules.' Cell. <a href='https://pubmed.ncbi.nlm.nih.gov/29514064/' target='_blank'>[PubMed]</a>",
      "Garaci E et al., 2012. 'Thymosin alpha 1: from bench to bedside.' Ann N Y Acad Sci. <a href='https://pubmed.ncbi.nlm.nih.gov/17600290/' target='_blank'>[PubMed]</a>",
      "Sikiric P et al., 2018. 'BPC 157: Theoretical and Practical Implications.' Curr Neuropharmacol. <a href='https://pubmed.ncbi.nlm.nih.gov/27138887/' target='_blank'>[PubMed]</a>",
      "Eremin KO et al., 2005. 'Semax activates dopaminergic and serotoninergic brain systems.' Neurochem Res. <a href='https://pubmed.ncbi.nlm.nih.gov/16362768/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // SONO
  // =============================================
  {
    id: "sleep-optimization",
    name: "Otimiza\u00e7\u00e3o do Sono",
    goal: "sleep",
    goalLabel: "Sono",
    level: "Iniciante",
    description: "Protocolo para melhoria da qualidade do sono utilizando pept\u00eddeos e horm\u00f4nios que regulam o ciclo circadiano e promovem sono profundo (ondas delta).",
    peptides: [
      {
        id: "dsip",
        name: "DSIP",
        role: "Pept\u00eddeo indutor de sono delta - promove ondas cerebrais de sono profundo",
        dose: "100-300mcg antes de dormir",
        timing: "30-60 min antes de deitar"
      },
      {
        id: "melatonin-injectable",
        name: "Melatonina",
        role: "Regulador do ciclo circadiano",
        dose: "0.5-3mg antes de dormir",
        timing: "30-60 min antes de deitar"
      },
      {
        id: "epithalon",
        name: "Epithalon",
        role: "Regula\u00e7\u00e3o da gl\u00e2ndula pineal - normaliza produ\u00e7\u00e3o end\u00f3gena de melatonina",
        dose: "5-10mg/dia por 10-20 dias",
        timing: "Ciclos a cada 4-6 meses"
      }
    ],
    synergy: "DSIP atua diretamente na promo\u00e7\u00e3o de ondas delta (sono profundo restaurador). Melatonina sincroniza o rel\u00f3gio circadiano e facilita o adormecimento. Epithalon, em ciclos peri\u00f3dicos, restaura a fun\u00e7\u00e3o da gl\u00e2ndula pineal, normalizando a produ\u00e7\u00e3o end\u00f3gena de melatonina a longo prazo.",
    application: "DSIP e Epithalon: podem ser aplicados SC na mesma sessão antes de dormir, porém em seringas separadas para garantir dosagem precisa de cada um. Melatonina: via oral, tomar no mesmo horário das injeções (30-60 minutos antes de deitar). Os três compostos têm ação noturna e complementar.",
    duration: "DSIP: ciclos de 2-4 semanas / Melatonina: conforme necess\u00e1rio / Epithalon: ciclos peri\u00f3dicos",
    warnings: "DSIP ainda em pesquisa b\u00e1sica com dados cl\u00ednicos limitados. N\u00e3o combinar com sedativos.",
    evidenceLevel: "Alto (Melatonina) / Moderado (Epithalon) / Baixo (DSIP)",
    references: [
      "Schneider-Helmert D & Schoenenberger GA, 1983. 'Effects of DSIP in man.' Neuropsychobiology. <a href='https://pubmed.ncbi.nlm.nih.gov/6689058/' target='_blank'>[PubMed]</a>",
      "Ferracioli-Oda E et al., 2013. 'Meta-analysis: melatonin for the treatment of primary sleep disorders.' PLoS One. <a href='https://pubmed.ncbi.nlm.nih.gov/23691095/' target='_blank'>[PubMed]</a>",
      "Khavinson VK et al., 2003. 'Epithalon induces telomerase activity.' Bull Exp Biol Med. <a href='https://pubmed.ncbi.nlm.nih.gov/15455129/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // HORMONAL MASCULINO
  // =============================================
  {
    id: "male-hormone-support",
    name: "Suporte Hormonal Masculino",
    goal: "hormonal",
    goalLabel: "Hormonal e Reprodutivo",
    level: "Intermedi\u00e1rio",
    description: "Protocolo para suporte \u00e0 fun\u00e7\u00e3o hormonal masculina, incluindo manuten\u00e7\u00e3o da fun\u00e7\u00e3o testicular durante TRT ou recupera\u00e7\u00e3o p\u00f3s-ciclo.",
    peptides: [
      {
        id: "hcg",
        name: "HCG",
        role: "Mimetiza LH - mant\u00e9m fun\u00e7\u00e3o testicular e espermatog\u00eanese",
        dose: "250-500 UI, 2-3x por semana",
        timing: "2-3x por semana, em dias alternados"
      },
      {
        id: "gonadorelin",
        name: "Gonadorelina",
        role: "GnRH sint\u00e9tico - estimula libera\u00e7\u00e3o natural de LH e FSH",
        dose: "100mcg SC, 2x por semana",
        timing: "2x por semana"
      },
      {
        id: "kisspeptin-10",
        name: "Kisspeptina-10",
        role: "Estimulador a montante de GnRH - ativa o eixo HPG de forma fisiol\u00f3gica",
        dose: "Dosagem em pesquisa: variada",
        timing: "Em estudo"
      }
    ],
    synergy: "Cada pept\u00eddeo atua em um n\u00edvel diferente do eixo hipot\u00e1lamo-hip\u00f3fise-gonadal (HPG): Kisspeptina estimula neur\u00f4nios GnRH no hipot\u00e1lamo, Gonadorelina estimula a hip\u00f3fise a liberar LH/FSH, e HCG atua diretamente nas c\u00e9lulas de Leydig dos test\u00edculos. A combina\u00e7\u00e3o oferece estimula\u00e7\u00e3o em m\u00faltiplos n\u00edveis do eixo.",
    application: "Todos separados — não misturar. HCG: SC em seringa própria (proteína glicoproteica grande, incompatível com mistura). Gonadorelina: SC em seringa separada. Kisspeptina-10: SC em seringa separada. Aplicar em locais de injeção diferentes e, preferencialmente, em horários ou dias alternados para evitar saturação do eixo HPG.",
    duration: "Cont\u00ednuo durante TRT ou ciclos de 4-8 semanas para recupera\u00e7\u00e3o",
    warnings: "Kisspeptina ainda em pesquisa b\u00e1sica para esta indica\u00e7\u00e3o. HCG e Gonadorelina requerem prescri\u00e7\u00e3o m\u00e9dica.",
    evidenceLevel: "Alto (HCG: aprovado) / Moderado (Gonadorelina: aprovado para diagn\u00f3stico) / Baixo (Kisspeptina: pesquisa)",
    references: [
      "Coviello AD et al., 2008. 'Low-dose human chorionic gonadotropin maintains intratesticular testosterone in normal men with testosterone-induced gonadotropin suppression.' J Clin Endocrinol Metab. <a href='https://pubmed.ncbi.nlm.nih.gov/15713727/' target='_blank'>[PubMed]</a>",
      "Dhillo WS et al., 2005. 'Kisspeptin-54 stimulates the hypothalamic-pituitary gonadal axis in human males.' J Clin Endocrinol Metab. <a href='https://pubmed.ncbi.nlm.nih.gov/39834030/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // SAUDE SEXUAL FEMININA
  // =============================================
  {
    id: "female-sexual-health",
    name: "Sa\u00fade Sexual Feminina",
    goal: "hormonal",
    goalLabel: "Hormonal e Reprodutivo",
    level: "Iniciante",
    description: "Protocolo para melhora da fun\u00e7\u00e3o sexual feminina combinando o \u00fanico pept\u00eddeo aprovado pela FDA para transtorno do desejo sexual hipoativo (TDSH) em mulheres pr\u00e9-menop\u00e1usicas com ocitocina intranasal para facilitar v\u00ednculo e excita\u00e7\u00e3o. Abordagem que atua no sistema nervoso central por vias complementares \u2014 melanocortina e ocitocinérgica.",
    peptides: [
      {
        id: "pt-141",
        name: "PT-141 (Bremelanotida)",
        role: "Agonista MC4R \u2014 ativa\u00e7\u00e3o central do desejo sexual no hipot\u00e1lamo. Aprovado FDA (Vyleesi) para TDSH feminino",
        dose: "1.75mg SC conforme necessidade",
        timing: "45 minutos antes da atividade sexual. M\u00e1ximo 1 dose/dia, 8 doses/m\u00eas"
      },
      {
        id: "oxytocin",
        name: "Ocitocina",
        role: "Horm\u00f4nio do v\u00ednculo \u2014 facilita excita\u00e7\u00e3o, orgasmo e conex\u00e3o emocional. Reduz ansiedade via modula\u00e7\u00e3o da am\u00eddgdala",
        dose: "10-24 UI intranasal",
        timing: "30-60 minutos antes da atividade"
      }
    ],
    synergy: "PT-141 atua via receptor MC4R no hipot\u00e1lamo ativando vias neurais de desejo e excita\u00e7\u00e3o sexual, enquanto a Ocitocina reduz a ansiedade de performance e facilita a conex\u00e3o emocional atrav\u00e9s da modula\u00e7\u00e3o da am\u00eddgdala. Os mecanismos s\u00e3o completamente n\u00e3o sobrepostos: melanocortina (PT-141) e ocitocinérgico (Ocitocina), criando um efeito complementar sobre o desejo (PT-141) e a facilita\u00e7\u00e3o emocional (Ocitocina).",
    application: "Vias diferentes \u2014 separados. PT-141: inje\u00e7\u00e3o SC 45 minutos antes, seringa pr\u00f3pria (caneta Vyleesi ou SC manual). Ocitocina: spray intranasal, 30-60 minutos antes. N\u00e3o h\u00e1 necessidade de misturar pois as vias s\u00e3o distintas (SC vs intranasal).",
    duration: "Conforme necessidade (uso sob demanda, n\u00e3o cont\u00ednuo)",
    warnings: "PT-141 pode causar n\u00e1usea transit\u00f3ria e hipertens\u00e3o leve. N\u00e3o usar mais de 1 dose/dia nem mais de 8 doses/m\u00eas (conforme bula FDA). Contraindicado em hipertens\u00e3o n\u00e3o controlada e doen\u00e7a cardiovascular.",
    evidenceLevel: "Alto (PT-141/Bremelanotida: aprovado FDA \u2014 ensaios RECONNECT) / Moderado (Ocitocina: estudos de comportamento social publicados, dados para fun\u00e7\u00e3o sexual espec\u00edfica limitados)",
    references: [
      "Kingsberg SA et al., 2019. 'Bremelanotide for the treatment of hypoactive sexual desire disorder.' Obstet Gynecol. (RECONNECT trials) <a href='https://pubmed.ncbi.nlm.nih.gov/31599847/' target='_blank'>[PubMed]</a>",
      "Clayton AH et al., 2016. 'Bremelanotide for female sexual dysfunctions in premenopausal women.' Exp Opin Investig Drugs. <a href='https://pubmed.ncbi.nlm.nih.gov/27751477/' target='_blank'>[PubMed]</a>",
      "Kosfeld M et al., 2005. 'Oxytocin increases trust in humans.' Nature. <a href='https://pubmed.ncbi.nlm.nih.gov/15931222/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // PROTECAO CARDIOVASCULAR
  // =============================================
  {
    id: "cardiovascular-protection",
    name: "Prote\u00e7\u00e3o Cardiovascular",
    goal: "anti-aging",
    goalLabel: "Anti-Envelhecimento",
    level: "Avan\u00e7ado",
    description: "Protocolo de prote\u00e7\u00e3o cardiovascular combinando pept\u00eddeos com a\u00e7\u00e3o cardioprotetora, vascular e energ\u00e9tica. Hexarelin possui a\u00e7\u00e3o cardioprotetora documentada independente do GH via receptor CD36, enquanto os biorreguladores Vesugen e Cardiogen suportam o endot\u00e9lio e o mioc\u00e1rdio respectivamente. NAD+ sustenta a fun\u00e7\u00e3o mitocondrial card\u00edaca.",
    peptides: [
      {
        id: "hexarelin",
        name: "Hexarelin",
        role: "Cardioprotetor direto via receptor CD36 \u2014 prote\u00e7\u00e3o contra isquemia e apoptose de cardiomi\u00f3citos, independente do efeito sobre GH",
        dose: "100-200mcg, 2x por dia",
        timing: "2x por dia, em jejum"
      },
      {
        id: "vesugen",
        name: "Vesugen",
        role: "Biorregulador vascular \u2014 suporte ao endot\u00e9lio, produ\u00e7\u00e3o de \u00f3xido n\u00edtrico e elasticidade vascular",
        dose: "10-20mg/dia por 10-15 dias",
        timing: "Ciclos de 10-15 dias a cada 4-6 meses"
      },
      {
        id: "cardiogen",
        name: "Cardiogen",
        role: "Biorregulador card\u00edaco \u2014 suporte ao mioc\u00e1rdio, contratilidade e metabolismo energ\u00e9tico card\u00edaco",
        dose: "10-20mg/dia por 10-15 dias",
        timing: "Ciclos de 10-15 dias, pode coincidir com Vesugen"
      },
      {
        id: "nad-plus",
        name: "NAD+",
        role: "Suporte mitocondrial card\u00edaco \u2014 energia celular, reparo de DNA e ativa\u00e7\u00e3o de sirtu\u00ednas cardioprotetoras (SIRT1/SIRT3)",
        dose: "250mg SC 2-3x/semana ou 500mg IV semanal",
        timing: "2-3x por semana SC ou semanal IV"
      }
    ],
    synergy: "Hexarelin possui atividade cardioprotetora documentada independente de sua a\u00e7\u00e3o sobre GH, mediada pelo receptor CD36 nos cardiomi\u00f3citos, protegendo contra isquemia e apoptose. Vesugen suporta o endot\u00e9lio vascular e a elasticidade arterial. Cardiogen atua diretamente no m\u00fasculo card\u00edaco mantendo a fun\u00e7\u00e3o contr\u00e1til. NAD+ sustenta a fun\u00e7\u00e3o mitocondrial card\u00edaca via sirtu\u00ednas (SIRT1 e SIRT3 s\u00e3o cardioprotetoras) e reparo de DNA. A combina\u00e7\u00e3o aborda sa\u00fade cardiovascular em 4 n\u00edveis: mioc\u00e1rdio (Hexarelin + Cardiogen), endot\u00e9lio (Vesugen), vasculatura e energia celular (NAD+).",
    application: "Hexarelin: SC nos hor\u00e1rios programados, seringa pr\u00f3pria. Vesugen + Cardiogen: podem ser aplicados SC na mesma sess\u00e3o em locais diferentes (ambos biorreguladores pept\u00eddicos curtos com perfil compat\u00edvel). NAD+: SC separado obrigatoriamente (pH incompat\u00edvel, degrada outros compostos) ou IV semanal com profissional.",
    duration: "Hexarelin: ciclos de 4-8 semanas (risco de dessensibiliza\u00e7\u00e3o do receptor com uso cont\u00ednuo) / Biorreguladores: ciclos de 10-15 dias a cada 4-6 meses / NAD+: cont\u00ednuo",
    warnings: "Hexarelin pode aumentar cortisol e prolactina \u2014 monitorar. N\u00e3o substitui tratamento cardiol\u00f3gico convencional. Monitorar IGF-1, press\u00e3o arterial, perfil lip\u00eddico e fun\u00e7\u00e3o card\u00edaca. Biorreguladores t\u00eam dados cl\u00ednicos limitados.",
    evidenceLevel: "Moderado (Hexarelin: estudos de cardioprote\u00e7\u00e3o publicados) / Baixo (Vesugen, Cardiogen: biorreguladores de Khavinson) / Moderado (NAD+: estudos cl\u00ednicos iniciais)",
    references: [
      "Arvat E et al., 2001. 'Endocrine activities of ghrelin, a natural growth hormone secretagogue (GHS), in humans: comparison and interactions with hexarelin.' J Clin Endocrinol Metab. <a href='https://pubmed.ncbi.nlm.nih.gov/15966564/' target='_blank'>[PubMed]</a>",
      "Khavinson VK et al., 2011. 'Tissue-specific effects of short peptides in old primates.' Bull Exp Biol Med. (Vesugen, Cardiogen) <a href='https://pubmed.ncbi.nlm.nih.gov/22808515/' target='_blank'>[PubMed]</a>",
      "Rajman L et al., 2018. 'Therapeutic Potential of NAD-Boosting Molecules.' Cell Metab. <a href='https://pubmed.ncbi.nlm.nih.gov/29514064/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // HUMOR E BEM-ESTAR MENTAL
  // =============================================
  {
    id: "mood-wellbeing",
    name: "Humor e Bem-Estar Mental",
    goal: "cognitive",
    goalLabel: "Cognitivo",
    level: "Intermedi\u00e1rio",
    description: "Protocolo para melhora do humor, redu\u00e7\u00e3o da depress\u00e3o e bem-estar emocional. Combina um antidepressivo peptid\u00e9rgico com mecanismo inovador (bloqueio de canal TREK-1), um ansiol\u00edtico sem seda\u00e7\u00e3o e ocitocina para suporte ao humor e conex\u00e3o social.",
    peptides: [
      {
        id: "pe-22-28",
        name: "PE-22-28",
        role: "Antidepressivo peptid\u00e9rgico \u2014 bloqueio do canal TREK-1, aumenta atividade serotonin\u00e9rgica e promove neurog\u00eanese hipocampal",
        dose: "50-200mcg/dia",
        timing: "Di\u00e1rio, pela manh\u00e3"
      },
      {
        id: "selank",
        name: "Selank",
        role: "Ansiol\u00edtico sem seda\u00e7\u00e3o \u2014 modula\u00e7\u00e3o GABA\u00e9rgica indireta, aumento de BDNF. Aprovado na R\u00fassia",
        dose: "250-500mcg/dia intranasal",
        timing: "1-2x por dia, intranasal"
      },
      {
        id: "oxytocin",
        name: "Ocitocina",
        role: "Modula\u00e7\u00e3o do humor e v\u00ednculo social \u2014 reduz atividade da am\u00eddgdala, facilita comportamento pr\u00f3-social",
        dose: "10-24 UI intranasal",
        timing: "1x por dia, intranasal"
      }
    ],
    synergy: "PE-22-28 atua como antidepressivo via bloqueio do canal de pot\u00e1ssio TREK-1, aumentando a atividade serotonin\u00e9rgica por mecanismo distinto dos ISRS tradicionais, com in\u00edcio de a\u00e7\u00e3o potencialmente mais r\u00e1pido. Selank reduz ansiedade sem causar seda\u00e7\u00e3o ou depend\u00eancia, modulando GABA e aumentando BDNF no hipocampo. Ocitocina melhora o humor social e reduz isola\u00e7\u00e3o emocional. Os tr\u00eas atuam em sistemas neuroqui\u00edmicos distintos (serotonina via TREK-1, GABA/BDNF, ocitocina), criando uma abordagem multimodal para depress\u00e3o e ansiedade.",
    application: "Selank + Ocitocina: podem ser administrados por via intranasal na mesma sess\u00e3o \u2014 aplicar sequencialmente, um por narina ou alternando, com intervalo de 5 minutos entre eles. PE-22-28: SC ou intranasal em seringa/spray separado.",
    duration: "PE-22-28 e Selank: ciclos de 4-8 semanas com avalia\u00e7\u00e3o / Ocitocina: conforme necessidade",
    warnings: "PE-22-28 tem dados cl\u00ednicos muito limitados em humanos \u2014 uso experimental. N\u00e3o substituir medicamentos antidepressivos prescritos sem orienta\u00e7\u00e3o m\u00e9dica. Selank aprovado na R\u00fassia, n\u00e3o em pa\u00edses ocidentais.",
    evidenceLevel: "Baixo (PE-22-28: pesquisa pr\u00e9-cl\u00ednica) / Moderado (Selank: aprovado na R\u00fassia) / Moderado (Ocitocina: estudos comportamentais publicados)",
    references: [
      "Semenova TP et al., 2010. 'Selank has an anxiolytic effect and increases the mRNA levels of the BDNF gene.' Bull Exp Biol Med. <a href='https://pubmed.ncbi.nlm.nih.gov/20919548/' target='_blank'>[PubMed]</a>",
      "Kosfeld M et al., 2005. 'Oxytocin increases trust in humans.' Nature. <a href='https://pubmed.ncbi.nlm.nih.gov/15931222/' target='_blank'>[PubMed]</a>",
      "Zozulya AA et al., 2001. 'Selank (TP-7) as anxiolytic peptide.' Bull Exp Biol Med. <a href='https://pubmed.ncbi.nlm.nih.gov/17415472/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // SAUDE ARTICULAR E CARTILAGEM
  // =============================================
  {
    id: "healing-joint-cartilage",
    name: "Recupera\u00e7\u00e3o - Sa\u00fade Articular e Cartilagem",
    goal: "healing",
    goalLabel: "Cura e Recupera\u00e7\u00e3o",
    level: "Intermedi\u00e1rio",
    description: "Protocolo direcionado para reparo e manuten\u00e7\u00e3o da sa\u00fade articular e cartilaginosa, \u00fatil em osteoartrite, desgaste articular e recupera\u00e7\u00e3o de les\u00f5es condral/osteocondral. Combina pept\u00eddeos de reparo tecidual com biorregulador espec\u00edfico para cartilagem.",
    peptides: [
      {
        id: "bpc-157",
        name: "BPC-157",
        role: "Pept\u00eddeo g\u00e1strico protetor \u2014 angiog\u00eanese, anti-inflama\u00e7\u00e3o e acelera\u00e7\u00e3o do reparo tecidual em tend\u00f5es, ligamentos e cartilagem",
        dose: "250-500mcg, 2x por dia",
        timing: "2x por dia, preferencialmente pr\u00f3ximo \u00e0 articula\u00e7\u00e3o afetada"
      },
      {
        id: "tb-500",
        name: "TB-500",
        role: "Timosina Beta 4 \u2014 migra\u00e7\u00e3o celular, remodela\u00e7\u00e3o da actina e reparo tecidual. Melhora da flexibilidade articular",
        dose: "2-5mg, 2x por semana (loading), depois 2mg/semana",
        timing: "Fase de carga: 2x/semana por 4-6 semanas, depois manuten\u00e7\u00e3o semanal"
      },
      {
        id: "cartalax",
        name: "Cartalax",
        role: "Biorregulador de cartilagem \u2014 estimula s\u00edntese de proteoglicanos, col\u00e1geno tipo II e componentes da matriz cartilaginosa",
        dose: "10-20mg/dia por 10-15 dias",
        timing: "Ciclos de 10-15 dias a cada 3-6 meses"
      }
    ],
    synergy: "BPC-157 promove angiog\u00eanese e redu\u00e7\u00e3o da inflama\u00e7\u00e3o no local da les\u00e3o, criando as condi\u00e7\u00f5es para reparo. TB-500 facilita a migra\u00e7\u00e3o de c\u00e9lulas reparadoras e a remodela\u00e7\u00e3o tecidual, melhorando a flexibilidade articular. Cartalax, como biorregulador espec\u00edfico do tecido cartilaginoso, modula a express\u00e3o g\u00eanica em condr\u00f3citos para estimular a s\u00edntese de componentes da matriz cartilaginosa (proteoglicanos, col\u00e1geno tipo II). A combina\u00e7\u00e3o aborda reparo articular em 3 n\u00edveis: inflama\u00e7\u00e3o (BPC-157), mobiliza\u00e7\u00e3o celular (TB-500) e regenera\u00e7\u00e3o cartilaginosa (Cartalax).",
    application: "BPC-157 + TB-500: PODEM ser misturados na mesma seringa SC \u2014 combina\u00e7\u00e3o cl\u00e1ssica e bem estabelecida. Aplicar pr\u00f3ximo \u00e0 articula\u00e7\u00e3o afetada. Cartalax: SC em seringa separada, pode ser aplicado no mesmo dia em local diferente.",
    duration: "BPC-157 + TB-500: 6-8 semanas (loading + manuten\u00e7\u00e3o) / Cartalax: ciclos de 10-15 dias a cada 3-6 meses",
    warnings: "BPC-157 e TB-500 em fase de pesquisa (dados cl\u00ednicos humanos limitados). Cartalax com dados predominantemente de biorregula\u00e7\u00e3o (Khavinson). Para les\u00f5es articulares graves, consultar ortopedista.",
    evidenceLevel: "Moderado (BPC-157, TB-500: extensa pesquisa pr\u00e9-cl\u00ednica) / Baixo (Cartalax: biorregulador de Khavinson)",
    references: [
      "Sikiric P et al., 2018. 'Brain-gut Axis and Pentadecapeptide BPC 157: Theoretical and Practical Implications.' Curr Neuropharmacol. <a href='https://pubmed.ncbi.nlm.nih.gov/27138887/' target='_blank'>[PubMed]</a>",
      "Goldstein AL et al., 2012. 'Thymosin beta4: a multi-functional regenerative peptide.' Expert Opin Biol Ther. <a href='https://pubmed.ncbi.nlm.nih.gov/22074294/' target='_blank'>[PubMed]</a>",
      "Khavinson VK, 2002. 'Peptides and Ageing.' Neuroendocrinol Lett. (Cartalax) <a href='https://pubmed.ncbi.nlm.nih.gov/12374906/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // BRONZEAMENTO E FOTOPROTECAO
  // =============================================
  {
    id: "skin-tanning-protection",
    name: "Bronzeamento e Fotoprote\u00e7\u00e3o",
    goal: "skin",
    goalLabel: "Pele e Est\u00e9tica",
    level: "Iniciante",
    description: "Protocolo para bronzeamento seguro e prote\u00e7\u00e3o cut\u00e2nea contra danos UV. Melanotan I estimula a produ\u00e7\u00e3o de eumelanina fotoprotetora enquanto GHK-Cu repara e fortalece a pele, e Glutationa protege contra o estresse oxidativo induzido pela radia\u00e7\u00e3o ultravioleta.",
    peptides: [
      {
        id: "melanotan-1",
        name: "Melanotan I (Afamelanotide)",
        role: "Estimula\u00e7\u00e3o da melanog\u00eanese \u2014 ativa MC1R para produ\u00e7\u00e3o de eumelanina fotoprotetora. Aprovado EU (Scenesse) para PPE",
        dose: "1mg/dia por 10 dias (carga), depois 1mg/semana (manuten\u00e7\u00e3o)",
        timing: "Di\u00e1rio na fase de carga, depois semanal"
      },
      {
        id: "ghk-cu",
        name: "GHK-Cu (t\u00f3pico)",
        role: "Reparo cut\u00e2neo \u2014 s\u00edntese de col\u00e1geno, elastina e prote\u00e7\u00e3o contra fotoenvelhecimento. Uso t\u00f3pico para a\u00e7\u00e3o direta na pele",
        dose: "T\u00f3pico 1-2% ou 1mg/dia SC",
        timing: "Di\u00e1rio, aplica\u00e7\u00e3o t\u00f3pica ap\u00f3s banho ou SC"
      },
      {
        id: "glutathione",
        name: "Glutationa",
        role: "Antioxidante master \u2014 neutraliza radicais livres gerados pela UV, protege contra fotodano e clareia manchas de hiperpigmenta\u00e7\u00e3o",
        dose: "600-1000mg IV semanal ou 500mg/dia oral",
        timing: "Semanal IV ou di\u00e1rio oral"
      }
    ],
    synergy: "Melanotan I estimula melanocitos via MC1R a produzirem eumelanina (pigmento escuro fotoprotetor), resultando em bronzeamento sem exposi\u00e7\u00e3o solar excessiva. GHK-Cu repara e fortalece a estrutura cut\u00e2nea (col\u00e1geno, elastina), prevenindo o fotoenvelhecimento que acompanha a exposi\u00e7\u00e3o solar. Glutationa protege contra o estresse oxidativo induzido pela UV e previne hiperpigmenta\u00e7\u00e3o irregular (manchas). A combina\u00e7\u00e3o cria bronzeamento uniforme + prote\u00e7\u00e3o estrutural + defesa antioxidante.",
    application: "Tr\u00eas vias diferentes \u2014 todos separados. Melanotan I: SC em seringa pr\u00f3pria. GHK-Cu: preferencialmente t\u00f3pico (s\u00e9rum/creme) para a\u00e7\u00e3o direta na pele. Se SC, NUNCA misturar com outros pept\u00eddeos (cobre catalisa degrada\u00e7\u00e3o). Glutationa: via oral di\u00e1ria ou IV semanal com profissional.",
    duration: "Melanotan I: fase de carga 10 dias + manuten\u00e7\u00e3o semanal / GHK-Cu e Glutationa: cont\u00ednuo",
    warnings: "Melanotan I pode causar escurecimento de pintas existentes \u2014 monitorar nevos com dermatologista. N\u00e1usea e rubor s\u00e3o comuns nas primeiras doses. N\u00e3o usar como substituto do protetor solar. GHK-Cu t\u00f3pico n\u00e3o deve ser misturado com outros pept\u00eddeos.",
    evidenceLevel: "Alto (Melanotan I/Afamelanotide: aprovado EU para PPE) / Moderado (GHK-Cu: estudos Pickart) / Alto (Glutationa: estudos de antioxida\u00e7\u00e3o publicados)",
    references: [
      "Dorr RT et al., 2004. 'Effects of a superpotent melanotropic peptide in combination with solar UV radiation on tanning of the skin in human volunteers.' Arch Dermatol. <a href='https://pubmed.ncbi.nlm.nih.gov/15262693/' target='_blank'>[PubMed]</a>",
      "Pickart L et al., 2012. 'The human tripeptide GHK-Cu in prevention of oxidative stress and degenerative conditions of aging.' Oxid Med Cell Longev. <a href='https://pubmed.ncbi.nlm.nih.gov/22666519/' target='_blank'>[PubMed]</a>",
      "Forman HJ et al., 2009. 'Glutathione: Overview of its protective roles, measurement, and biosynthesis.' Mol Aspects Med. <a href='https://pubmed.ncbi.nlm.nih.gov/18796312/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // MIMETISMO DE EXERCICIO
  // =============================================
  {
    id: "exercise-mimetic",
    name: "Mimetismo de Exerc\u00edcio - Protocolo Metab\u00f3lico",
    goal: "body-comp",
    goalLabel: "Composi\u00e7\u00e3o Corporal",
    level: "Intermedi\u00e1rio",
    description: "Protocolo que combina tr\u00eas compostos mim\u00e9ticos de exerc\u00edcio com mecanismos distintos para reproduzir parcialmente os benef\u00edcios metab\u00f3licos do exerc\u00edcio f\u00edsico. \u00datil como adjuvante em pacientes com limita\u00e7\u00f5es de mobilidade ou para potencializar os efeitos do treinamento.",
    peptides: [
      {
        id: "mots-c",
        name: "MOTS-c",
        role: "Pept\u00eddeo mitocondrial \u2014 ativador de AMPK, sensibiliza\u00e7\u00e3o \u00e0 insulina e regula\u00e7\u00e3o metab\u00f3lica. Miocina exerc\u00edcio-mim\u00e9tica end\u00f3gena",
        dose: "5-10mg, 3-5x por semana",
        timing: "3-5x por semana, preferencialmente em dias de exerc\u00edcio"
      },
      {
        id: "aicar",
        name: "AICAR",
        role: "Ativador direto de AMPK via an\u00e1logo de AMP \u2014 aumenta oxida\u00e7\u00e3o de gorduras, biog\u00eanese mitocondrial e capta\u00e7\u00e3o de glicose independente de insulina",
        dose: "50-150mg/dia SC",
        timing: "Di\u00e1rio, pela manh\u00e3 ou antes do exerc\u00edcio"
      },
      {
        id: "slu-pp-332",
        name: "SLU-PP-332",
        role: "Agonista de ERR \u2014 mimetiza adapta\u00e7\u00f5es do treinamento de resist\u00eancia, aumenta capacidade oxidativa muscular e biog\u00eanese mitocondrial",
        dose: "250mcg/dia oral",
        timing: "Di\u00e1rio, oral"
      }
    ],
    synergy: "Os tr\u00eas compostos ativam vias mim\u00e9ticas de exerc\u00edcio por mecanismos distintos e complementares: (1) MOTS-c ativa AMPK via transloca\u00e7\u00e3o nuclear e modula\u00e7\u00e3o da via do folato, reproduzindo a sinaliza\u00e7\u00e3o metab\u00f3lica end\u00f3gena do exerc\u00edcio. (2) AICAR ativa AMPK diretamente atrav\u00e9s de seu metab\u00f3lito ZMP (an\u00e1logo de AMP), for\u00e7ando a c\u00e9lula a entrar em estado de d\u00e9ficit energ\u00e9tico simulado. (3) SLU-PP-332 ativa receptores ERR, que regulam a biog\u00eanese mitocondrial e adapta\u00e7\u00f5es musculares ao exerc\u00edcio aer\u00f3bico. A combina\u00e7\u00e3o cria m\u00faltiplas vias de ativa\u00e7\u00e3o metab\u00f3lica que se complementam.",
    application: "Todos separados \u2014 vias e formula\u00e7\u00f5es distintas. MOTS-c: SC nos dias programados, seringa pr\u00f3pria. AICAR: SC em seringa separada ou oral conforme formula\u00e7\u00e3o. SLU-PP-332: via oral, n\u00e3o requer inje\u00e7\u00e3o.",
    duration: "8-12 semanas com avalia\u00e7\u00e3o de resultados",
    warnings: "AICAR e SLU-PP-332 t\u00eam dados cl\u00ednicos muito limitados em humanos. AICAR pode causar hipoglicemia \u2014 monitorar glicemia. N\u00e3o substitui o exerc\u00edcio f\u00edsico real, que oferece benef\u00edcios neuromusculares, \u00f3sseos e psicol\u00f3gicos adicionais. AICAR \u00e9 substância proibida pela WADA em competi\u00e7\u00f5es esportivas.",
    evidenceLevel: "Moderado (MOTS-c: estudos cl\u00ednicos iniciais) / Moderado (AICAR: estudos pr\u00e9-cl\u00ednicos robustos) / Baixo (SLU-PP-332: pesquisa inicial)",
    references: [
      "Lee C et al., 2015. 'The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance.' Cell Metab. <a href='https://pubmed.ncbi.nlm.nih.gov/25738459/' target='_blank'>[PubMed]</a>",
      "Reynolds JC et al., 2021. 'MOTS-c is an exercise-induced mitochondrial-encoded regulator of age-dependent physical decline.' Nat Commun. <a href='https://pubmed.ncbi.nlm.nih.gov/33473109/' target='_blank'>[PubMed]</a>",
      "Narkar VA et al., 2008. 'AMPK and PPARdelta agonists are exercise mimetics.' Cell. (AICAR) <a href='https://pubmed.ncbi.nlm.nih.gov/18674809/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // IMUNIDADE AVANCADA
  // =============================================
  {
    id: "immune-advanced",
    name: "Imunidade Avan\u00e7ada - Infec\u00e7\u00f5es Cr\u00f4nicas e Imunomodula\u00e7\u00e3o",
    goal: "immune",
    goalLabel: "Sistema Imunol\u00f3gico",
    level: "Avan\u00e7ado",
    description: "Protocolo avan\u00e7ado para fortalecimento imunol\u00f3gico profundo, particularmente \u00fatil em infec\u00e7\u00f5es cr\u00f4nicas, imunodefici\u00eancias e imunossenesc\u00eancia avan\u00e7ada. Combina imunomoduladores com pept\u00eddeo antimicrobiano end\u00f3geno e anti-inflamat\u00f3rio.",
    peptides: [
      {
        id: "thymosin-alpha-1",
        name: "Timosina Alfa 1",
        role: "Imunomodulador principal \u2014 ativa\u00e7\u00e3o de c\u00e9lulas T, NK e dendr\u00edticas. Aprovado em v\u00e1rios pa\u00edses para hepatite cr\u00f4nica",
        dose: "1.6mg SC, 2-3x por semana",
        timing: "2-3x por semana, dias alternados"
      },
      {
        id: "thymalin",
        name: "Thymalin",
        role: "Restaurador da fun\u00e7\u00e3o t\u00edmica \u2014 promove diferencia\u00e7\u00e3o de linf\u00f3citos T imaturos e regula equil\u00edbrio CD4/CD8",
        dose: "5-10mg/dia IM por 5-10 dias",
        timing: "Ciclos de 5-10 dias a cada 6 meses"
      },
      {
        id: "ll-37",
        name: "LL-37",
        role: "Pept\u00eddeo antimicrobiano end\u00f3geno \u2014 atividade direta contra bact\u00e9rias, v\u00edrus e fungos, neutraliza\u00e7\u00e3o de endotoxinas e destrui\u00e7\u00e3o de biofilmes",
        dose: "50-100mcg/dia",
        timing: "Di\u00e1rio durante fase ativa de infec\u00e7\u00e3o"
      },
      {
        id: "kpv",
        name: "KPV",
        role: "Anti-inflamat\u00f3rio potente \u2014 inibi\u00e7\u00e3o de NF-kB, redu\u00e7\u00e3o de citocinas pr\u00f3-inflamat\u00f3rias (TNF-\u03b1, IL-6)",
        dose: "200-500mcg/dia",
        timing: "Di\u00e1rio"
      }
    ],
    synergy: "Protocolo que aborda a imunidade em 4 n\u00edveis: (1) Timosina Alfa 1 fortalece a imunidade adaptativa, ativando c\u00e9lulas T, NK e dendr\u00edticas \u2014 o componente com maior evid\u00eancia cl\u00ednica. (2) Thymalin restaura a fun\u00e7\u00e3o do timo, que involui com a idade, recuperando a capacidade de gerar novos linf\u00f3citos T na\u00efve. (3) LL-37 fornece defesa antimicrobiana direta, especialmente \u00fatil contra biofilmes e infec\u00e7\u00f5es cr\u00f4nicas resistentes, al\u00e9m de modular a imunidade inata. (4) KPV reduz a inflama\u00e7\u00e3o cr\u00f4nica que suprime a fun\u00e7\u00e3o imune, criando o ambiente \u00f3timo para a resposta imunol\u00f3gica.",
    application: "Todos separados. Timosina Alfa 1: SC nos dias programados, seringa pr\u00f3pria. Thymalin: IM durante os ciclos de 5-10 dias, seringa separada. LL-37: SC di\u00e1rio em seringa separada. KPV: SC di\u00e1rio em seringa separada, local de inje\u00e7\u00e3o diferente dos demais. N\u00e3o misturar nenhum destes na mesma seringa devido a diferentes estabilidades, concentra\u00e7\u00f5es e vias.",
    duration: "Timosina Alfa 1: 8-12 semanas cont\u00ednuo / Thymalin: ciclos de 5-10 dias / LL-37: durante fase ativa (2-4 semanas) / KPV: 8-12 semanas",
    warnings: "Thymalin requer via intramuscular. LL-37 em altas concentra\u00e7\u00f5es pode ter a\u00e7\u00e3o pr\u00f3-inflamat\u00f3ria \u2014 respeitar dosagem. N\u00e3o usar em condi\u00e7\u00f5es autoimunes ativas sem supervis\u00e3o m\u00e9dica (risco de exacerba\u00e7\u00e3o). Monitorar marcadores inflamat\u00f3rios e hemograma.",
    evidenceLevel: "Alto (Timosina Alfa 1: aprovada em v\u00e1rios pa\u00edses) / Baixo (Thymalin: estudos Khavinson) / Moderado (LL-37: estudos publicados) / Baixo (KPV: estudos pr\u00e9-cl\u00ednicos)",
    references: [
      "Garaci E et al., 2012. 'Thymosin alpha 1: from bench to bedside.' Ann N Y Acad Sci. <a href='https://pubmed.ncbi.nlm.nih.gov/17600290/' target='_blank'>[PubMed]</a>",
      "Khavinson VK & Morozov VG, 2003. 'Peptides of pineal gland and thymus prolong human life.' Neuroendocrinol Lett. (Thymalin) <a href='https://pubmed.ncbi.nlm.nih.gov/14523363/' target='_blank'>[PubMed]</a>",
      "Vandamme D et al., 2012. 'A comprehensive summary of LL-37, the factotum human cathelicidin peptide.' Cell Immunol. <a href='https://pubmed.ncbi.nlm.nih.gov/23246832/' target='_blank'>[PubMed]</a>",
      "Kannengiesser K et al., 2008. 'Melanocortin-derived tripeptide KPV has anti-inflammatory potential in murine models of IBD.' Inflamm Bowel Dis. <a href='https://pubmed.ncbi.nlm.nih.gov/18092346/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // HIPERTROFIA MUSCULAR
  // =============================================
  {
    id: "muscle-hypertrophy",
    name: "Hipertrofia Muscular - Protocolo Anab\u00f3lico",
    goal: "growth-hormone",
    goalLabel: "Horm\u00f4nio do Crescimento",
    level: "Avan\u00e7ado",
    description: "Protocolo anab\u00f3lico avan\u00e7ado para maximiza\u00e7\u00e3o da hipertrofia muscular, combinando secretagogos de GH para estimula\u00e7\u00e3o hormonal, IGF-1 LR3 para efeito anab\u00f3lico direto e Follistatin 344 para inibi\u00e7\u00e3o da miostatina. Abordagem multimodal que cria um ambiente hormonal \u00f3timo para crescimento muscular.",
    peptides: [
      {
        id: "cjc-1295-no-dac",
        name: "CJC-1295 sem DAC (Mod GRF 1-29)",
        role: "An\u00e1logo de GHRH \u2014 sinaliza a hip\u00f3fise para liberar GH de forma puls\u00e1til",
        dose: "100-200mcg por aplica\u00e7\u00e3o",
        timing: "2-3x por dia (manh\u00e3, p\u00f3s-treino e antes de dormir)"
      },
      {
        id: "ipamorelin",
        name: "Ipamorelin",
        role: "Secretagogo seletivo de GH via receptor de grelina \u2014 amplifica pulsos de GH sem aumentar cortisol ou prolactina",
        dose: "200-300mcg por aplica\u00e7\u00e3o",
        timing: "Combinado com CJC-1295 nos mesmos hor\u00e1rios"
      },
      {
        id: "igf-1-lr3",
        name: "IGF-1 LR3",
        role: "Fator de crescimento anab\u00f3lico direto \u2014 promove hiperplasia muscular (aumento do n\u00famero de fibras) e s\u00edntese proteica. Maior biodisponibilidade que IGF-1 nativo",
        dose: "20-50mcg/dia",
        timing: "Di\u00e1rio, p\u00f3s-treino. Ciclos de 4-6 semanas"
      },
      {
        id: "follistatin-344",
        name: "Follistatin 344",
        role: "Inibidor de miostatina \u2014 remove o freio natural do crescimento muscular neutralizando o GDF-8",
        dose: "100mcg/dia por 10-30 dias",
        timing: "Di\u00e1rio durante ciclos curtos de 10-30 dias"
      }
    ],
    synergy: "Combina\u00e7\u00e3o de 4 mecanismos anab\u00f3licos n\u00e3o sobrepostos: (1) CJC-1295 + Ipamorelin maximizam a libera\u00e7\u00e3o end\u00f3gena de GH atrav\u00e9s de dois receptores (GHRH + grelina), criando pulsos sinerg\u00edsticos. (2) IGF-1 LR3 fornece estimula\u00e7\u00e3o anab\u00f3lica direta independente do GH, promovendo hiperplasia muscular (novas fibras) al\u00e9m de hipertrofia. (3) Follistatin 344 neutraliza a miostatina, removendo o principal regulador negativo do crescimento muscular. O resultado \u00e9 maximiza\u00e7\u00e3o do sinal anab\u00f3lico (GH + IGF-1) com remo\u00e7\u00e3o simult\u00e2nea do sinal catab\u00f3lico (miostatina).",
    application: "CJC-1295 sem DAC + Ipamorelin: DEVEM ser misturados na mesma seringa SC \u2014 combina\u00e7\u00e3o padr\u00e3o e cl\u00e1ssica. Aplicar juntos em jejum. IGF-1 LR3: SC separado, preferencialmente p\u00f3s-treino em seringa pr\u00f3pria. Follistatin 344: SC separado em outro local de inje\u00e7\u00e3o. N\u00e3o misturar IGF-1 LR3 nem Follistatin 344 com os secretagogos.",
    duration: "CJC-1295 + Ipamorelin: ciclos de 8-12 semanas / IGF-1 LR3: ciclos de 4-6 semanas / Follistatin: ciclos curtos de 10-30 dias",
    warnings: "IGF-1 LR3 pode causar hipoglicemia \u2014 consumir carboidratos ap\u00f3s aplica\u00e7\u00e3o e monitorar glicemia rigorosamente. Follistatin 344 tem dados cl\u00ednicos em humanos extremamente limitados. Uso prolongado de IGF-1 pode aumentar risco de crescimento celular descontrolado. Monitorar IGF-1 s\u00e9rico, glicemia, insulina e fun\u00e7\u00e3o hep\u00e1tica. Requer treino de resist\u00eancia e nutri\u00e7\u00e3o adequada (prote\u00edna >2g/kg/dia).",
    evidenceLevel: "Moderado (CJC-1295 + Ipamorelin: estudos cl\u00ednicos) / Moderado (IGF-1 LR3: dados farmacol\u00f3gicos) / Baixo (Follistatin: predominantemente pr\u00e9-cl\u00ednico)",
    references: [
      "Teichman SL et al., 2006. 'Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295.' J Clin Endocrinol Metab. <a href='https://pubmed.ncbi.nlm.nih.gov/16352683/' target='_blank'>[PubMed]</a>",
      "Raun K et al., 1998. 'Ipamorelin, the first selective growth hormone secretagogue.' Eur J Endocrinol. <a href='https://pubmed.ncbi.nlm.nih.gov/9849822/' target='_blank'>[PubMed]</a>",
      "Laron Z, 2001. 'Insulin-like growth factor 1 (IGF-1): a growth hormone.' Mol Pathol. (IGF-1 LR3) <a href='https://pubmed.ncbi.nlm.nih.gov/40718994/' target='_blank'>[PubMed]</a>",
      "Lee SJ & McPherron AC, 2001. 'Regulation of myostatin activity and muscle growth.' Proc Natl Acad Sci USA. (Follistatin) <a href='https://pubmed.ncbi.nlm.nih.gov/11701425/' target='_blank'>[PubMed]</a>"
    ]
  },
  // =============================================
  // NOVAS COMBINAÇÕES - PEPTÍDEOS DE NOVA GERAÇÃO
  // =============================================
  {
    id: "weight-loss-hepatic",
    name: "Perda de Peso - Foco Hep\u00e1tico (Esteatose/MASH)",
    goal: "weight-loss",
    goalLabel: "Perda de Peso",
    level: "Intermedi\u00e1rio",
    description: "Protocolo direcionado para perda de peso com foco na sa\u00fade hep\u00e1tica. Pemvidutide \u00e9 o \u00fanico agonista dual GLP-1/glucagon com dados espec\u00edficos de redu\u00e7\u00e3o de gordura hep\u00e1tica (at\u00e9 -78% em MASH), complementado com NAD+ para fun\u00e7\u00e3o mitocondrial hep\u00e1tica e Glutationa para prote\u00e7\u00e3o antioxidante do f\u00edgado.",
    peptides: [
      {
        id: "pemvidutide",
        name: "Pemvidutide",
        role: "Agente principal \u2014 agonista dual GLP-1/glucagon que promove perda de peso e redu\u00e7\u00e3o direta de gordura hep\u00e1tica via a\u00e7\u00e3o do glucagon no f\u00edgado",
        dose: "1.2-2.4mg/semana SC",
        timing: "1x por semana, mesmo dia"
      },
      {
        id: "nad-plus",
        name: "NAD+",
        role: "Precursor metab\u00f3lico \u2014 restaura n\u00edveis de NAD+ hep\u00e1tico, melhora fun\u00e7\u00e3o mitocondrial e metabolismo lip\u00eddico no f\u00edgado",
        dose: "250-500mg IV, 1-2x por semana",
        timing: "1-2x por semana, infus\u00e3o IV lenta (2-4h)"
      },
      {
        id: "glutathione",
        name: "Glutationa",
        role: "Antioxidante master \u2014 prote\u00e7\u00e3o hepatocelular contra estresse oxidativo, essencial na MASH/NAFLD",
        dose: "600-1200mg IV, 1-2x por semana",
        timing: "1-2x por semana, pode ser combinado com NAD+ na mesma sess\u00e3o IV"
      }
    ],
    synergy: "Pemvidutide combina a\u00e7\u00e3o GLP-1 (supress\u00e3o de apetite, controle glic\u00eamico) com a\u00e7\u00e3o glucagon (lipog\u00eanese hep\u00e1tica reduzida, oxida\u00e7\u00e3o de gordura aumentada). Nos estudos MOMENTUM, demonstrou redu\u00e7\u00e3o de 78% na gordura hep\u00e1tica em pacientes com MASH. NAD+ melhora a fun\u00e7\u00e3o mitocondrial das c\u00e9lulas hep\u00e1ticas, otimizando o metabolismo lip\u00eddico. Glutationa protege os hepat\u00f3citos contra o estresse oxidativo que acompanha a mobiliza\u00e7\u00e3o intensa de gordura hep\u00e1tica.",
    application: "Pemvidutide: SC 1x/semana em seringa pr\u00f3pria \u2014 NUNCA misturar. NAD+: infus\u00e3o IV separada \u2014 NUNCA misturar com outros compostos na mesma seringa. Glutationa: IV separada, pode ser administrada na mesma sess\u00e3o de infus\u00e3o que o NAD+ (sequencialmente, n\u00e3o simultaneamente). Todas as tr\u00eas subst\u00e2ncias possuem vias e formula\u00e7\u00f5es distintas.",
    duration: "16-24 semanas (acompanhamento com ultrassom hep\u00e1tico e enzimas ALT/AST/GGT)",
    warnings: "Pemvidutide est\u00e1 em fase 2b/3 \u2014 ainda n\u00e3o aprovado pela FDA. N\u00e1usea e diarreia s\u00e3o comuns nas primeiras semanas. O componente glucagon pode elevar ligeiramente a glicemia em jejum \u2014 monitorar em diab\u00e9ticos. NAD+ IV pode causar flush, n\u00e1usea e c\u00e3ibras durante infus\u00e3o. Monitorar enzimas hep\u00e1ticas (ALT, AST, GGT), perfil lip\u00eddico e glicemia regularmente.",
    evidenceLevel: "Alto (Pemvidutide: fase 2b MOMENTUM com dados de redu\u00e7\u00e3o hep\u00e1tica robustos, designa\u00e7\u00e3o Breakthrough Therapy FDA) / Moderado (NAD+) / Moderado (Glutationa)",
    references: [
      "Loomba R et al., 2024. 'Pemvidutide, a GLP-1/glucagon dual receptor agonist, for MASH with liver fibrosis: MOMENTUM phase 2b randomised trial.' Lancet Gastroenterol Hepatol. <a href='https://pubmed.ncbi.nlm.nih.gov/39303720/' target='_blank'>[PubMed]</a>",
      "Frias JP et al., 2023. 'Safety and efficacy of pemvidutide (ALT-801) in overweight or obesity.' Lancet. <a href='https://pubmed.ncbi.nlm.nih.gov/38519155/' target='_blank'>[PubMed]</a>",
      "Honda Y et al., 2017. 'Efficacy of glutathione for the treatment of nonalcoholic fatty liver disease.' BMC Gastroenterol. <a href='https://pubmed.ncbi.nlm.nih.gov/29110623/' target='_blank'>[PubMed]</a>"
    ]
  },
  {
    id: "metabolic-mash-fgf21",
    name: "MASH/NASH - Eixo FGF21 + Prote\u00e7\u00e3o Hep\u00e1tica",
    goal: "weight-loss",
    goalLabel: "Perda de Peso",
    level: "Avan\u00e7ado",
    description: "Protocolo investigacional para doen\u00e7a hep\u00e1tica metab\u00f3lica (MASH/NASH), usando a nova classe de an\u00e1logos de FGF21 como eixo central. Pegozafermin e Efruxifermin t\u00eam dados de Fase 2 robustos em gordura hep\u00e1tica, resolu\u00e7\u00e3o de MASH/NASH e melhora de fibrose. O protocolo lista ambos como alternativas terap\u00eauticas da mesma classe — normalmente escolher UM, n\u00e3o combinar os dois.",
    peptides: [
      {
        id: "pegozafermin",
        name: "Pegozafermin",
        role: "Alternativa FGF21 principal — melhora gordura hep\u00e1tica, triglicer\u00eddeos e sensibilidade \u00e0 insulina em MASH/NASH",
        dose: "15-30mg/semana ou 44mg a cada 2 semanas",
        timing: "SC semanal ou quinzenal conforme protocolo de estudo"
      },
      {
        id: "efruxifermin",
        name: "Efruxifermin",
        role: "Alternativa FGF21 principal — redu\u00e7\u00e3o de gordura hep\u00e1tica, resolu\u00e7\u00e3o de MASH/NASH e potencial melhora de fibrose",
        dose: "28-50mg/semana",
        timing: "SC 1x por semana conforme protocolo de estudo"
      },
      {
        id: "glutathione",
        name: "Glutationa",
        role: "Suporte antioxidante hep\u00e1tico — prote\u00e7\u00e3o contra estresse oxidativo associado \u00e0 MASH/NAFLD",
        dose: "600-1200mg IV, 1-2x por semana",
        timing: "IV em sess\u00f5es separadas, com profissional habilitado"
      },
      {
        id: "nad-plus",
        name: "NAD+",
        role: "Suporte mitocondrial — otimiza metabolismo energ\u00e9tico hep\u00e1tico e fun\u00e7\u00e3o celular durante interven\u00e7\u00e3o metab\u00f3lica",
        dose: "250-500mg IV, 1x por semana",
        timing: "IV semanal, separado dos pept\u00eddeos SC"
      }
    ],
    synergy: "FGF21 atua em f\u00edgado e tecido adiposo via FGFR1c/beta-Klotho, reduzindo lipog\u00eanese hep\u00e1tica, melhorando sensibilidade \u00e0 insulina, triglicer\u00eddeos e inflama\u00e7\u00e3o metab\u00f3lica. Pegozafermin e Efruxifermin s\u00e3o alternativas da mesma classe, n\u00e3o uma combina\u00e7\u00e3o obrigat\u00f3ria. Glutationa adiciona prote\u00e7\u00e3o antioxidante hepatocelular e NAD+ oferece suporte mitocondrial, abordando dano oxidativo e metabolismo energ\u00e9tico que acompanham MASH/NASH.",
    application: "Escolher UM an\u00e1logo FGF21 (Pegozafermin OU Efruxifermin) — n\u00e3o combinar os dois rotineiramente por mecanismo sobreposto e aus\u00eancia de dados cl\u00ednicos da combina\u00e7\u00e3o. FGF21: SC em seringa pr\u00f3pria. Glutationa e NAD+: IV separados ou sequenciais em ambiente supervisionado. NUNCA misturar NAD+ ou Glutationa com pept\u00eddeos SC na mesma seringa.",
    duration: "12-24 semanas, com acompanhamento de ALT, AST, GGT, perfil lip\u00eddico, glicemia/insulina e imagem hep\u00e1tica quando dispon\u00edvel",
    warnings: "Pegozafermin e Efruxifermin ainda est\u00e3o em estudos cl\u00ednicos e n\u00e3o s\u00e3o aprovados para uso comercial amplo. N\u00e1usea, diarreia e rea\u00e7\u00f5es no local da inje\u00e7\u00e3o s\u00e3o comuns. N\u00e3o usar como substituto de avalia\u00e7\u00e3o hepatol\u00f3gica, elastografia, controle de diabetes, perda ponderal estruturada ou manejo de risco cardiovascular. Evitar combinar dois FGF21 sem estudo espec\u00edfico e supervis\u00e3o especializada.",
    evidenceLevel: "Alto para os compostos FGF21 isolados em Fase 2 (Pegozafermin, Efruxifermin) / Moderado para Glutationa e NAD+ como suporte / Baixo para o protocolo combinado completo",
    references: [
      "Loomba R et al., 2023. 'Randomized, Controlled Trial of the FGF21 Analogue Pegozafermin in NASH.' N Engl J Med. <a href='https://pubmed.ncbi.nlm.nih.gov/37356033/' target='_blank'>[PubMed]</a>",
      "Harrison SA et al., 2023. 'Safety and efficacy of once-weekly efruxifermin versus placebo in non-alcoholic steatohepatitis (HARMONY): a multicentre, randomised, double-blind, placebo-controlled, phase 2b trial.' Lancet Gastroenterol Hepatol. <a href='https://pubmed.ncbi.nlm.nih.gov/37802088/' target='_blank'>[PubMed]</a>",
      "Honda Y et al., 2017. 'Efficacy of glutathione for the treatment of nonalcoholic fatty liver disease.' BMC Gastroenterol. <a href='https://pubmed.ncbi.nlm.nih.gov/29110623/' target='_blank'>[PubMed]</a>"
    ]
  },
  {
    id: "genetic-obesity-mc4r-support",
    name: "Obesidade Gen\u00e9tica Rara - MC4R + Suporte Metab\u00f3lico",
    goal: "weight-loss",
    goalLabel: "Perda de Peso",
    level: "Especializado",
    description: "Protocolo especializado para obesidade monog\u00eanica rara com hiperfagia grave, centrado no Setmelanotide. Diferente de stacks comuns de perda de peso, este protocolo s\u00f3 faz sentido quando h\u00e1 diagn\u00f3stico gen\u00e9tico compat\u00edvel (POMC, PCSK1, LEPR ou s\u00edndrome de Bardet-Biedl) e acompanhamento por equipe especializada.",
    peptides: [
      {
        id: "setmelanotide",
        name: "Setmelanotide",
        role: "Agente principal — agonista MC4R que restaura sinaliza\u00e7\u00e3o da via leptina-melanocortina e reduz hiperfagia genética",
        dose: "1-3mg/dia SC conforme idade, peso e tolerabilidade",
        timing: "Di\u00e1rio, mesmo hor\u00e1rio, com escalonamento gradual"
      },
      {
        id: "l-carnitine",
        name: "L-Carnitina",
        role: "Suporte metab\u00f3lico — transporte de \u00e1cidos graxos para oxida\u00e7\u00e3o mitocondrial durante perda ponderal",
        dose: "600-2000mg/dia",
        timing: "Di\u00e1rio, pela manh\u00e3 ou antes de exerc\u00edcio"
      },
      {
        id: "vitamin-b12",
        name: "Vitamina B12",
        role: "Suporte nutricional — preven\u00e7\u00e3o de defici\u00eancia durante restri\u00e7\u00e3o cal\u00f3rica e melhora de energia",
        dose: "1000mcg/semana IM ou dose oral diária equivalente",
        timing: "Semanal IM ou diariamente por via oral"
      }
    ],
    synergy: "Setmelanotide atua diretamente no receptor MC4R, corrigindo a falha central de saciedade em subgrupos gen\u00e9ticos raros. L-Carnitina e B12 n\u00e3o tratam a causa da hiperfagia, mas ajudam no suporte metab\u00f3lico e nutricional durante redu\u00e7\u00e3o de ingest\u00e3o alimentar e perda de peso. A combina\u00e7\u00e3o \u00e9 de suporte, n\u00e3o de sinergia farmacol\u00f3gica direta.",
    application: "Setmelanotide: SC di\u00e1rio em seringa/caneta pr\u00f3pria, nunca misturar. L-Carnitina: oral ou inje\u00e7\u00e3o separada. B12: oral ou IM separada. As subst\u00e2ncias t\u00eam vias e frequ\u00eancias distintas; n\u00e3o coadministrar na mesma seringa.",
    duration: "Tratamento cr\u00f4nico quando indicado, com avalia\u00e7\u00e3o de resposta em 12-16 semanas e seguimento gen\u00e9tico/endocrinol\u00f3gico",
    warnings: "N\u00e3o \u00e9 protocolo para obesidade comum. Exige confirma\u00e7\u00e3o diagn\u00f3stica e monitoramento m\u00e9dico. Hiperpigmenta\u00e7\u00e3o, n\u00e1usea e rea\u00e7\u00f5es no local da inje\u00e7\u00e3o s\u00e3o frequentes. Monitorar crescimento em pediatria, press\u00e3o arterial, comportamento alimentar, humor e eventos gastrointestinais.",
    evidenceLevel: "Alto para Setmelanotide nas indica\u00e7\u00f5es aprovadas / Moderado para suporte nutricional / Baixo para o protocolo combinado como stack",
    references: [
      "Clément K et al., 2020. 'Efficacy and safety of setmelanotide, an MC4R agonist, in individuals with severe obesity due to LEPR or POMC deficiency: single-arm, open-label, multicentre, phase 3 trials.' Lancet Diabetes Endocrinol. <a href='https://pubmed.ncbi.nlm.nih.gov/33137293/' target='_blank'>[PubMed]</a>",
      "Haqq AM et al., 2022. 'Efficacy and safety of setmelanotide, a melanocortin-4 receptor agonist, in patients with Bardet-Biedl syndrome and Alstr\u00f6m syndrome: a multicentre, randomised, double-blind, placebo-controlled, phase 3 trial with an open-label period.' Lancet Diabetes Endocrinol. <a href='https://pubmed.ncbi.nlm.nih.gov/36356613/' target='_blank'>[PubMed]</a>",
      "Pooyandjoo M et al., 2016. 'The effect of (L-)carnitine on weight loss in adults: a systematic review and meta-analysis.' Obes Rev. <a href='https://pubmed.ncbi.nlm.nih.gov/27335245/' target='_blank'>[PubMed]</a>"
    ]
  },
  {
    id: "intestinal-failure-adaptation",
    name: "Intestino Curto - Adapta\u00e7\u00e3o Intestinal + Reparo de Mucosa",
    goal: "healing",
    goalLabel: "Cura e Recupera\u00e7\u00e3o",
    level: "Especializado",
    description: "Protocolo especializado para s\u00edndrome do intestino curto com insufici\u00eancia intestinal, centrado no Teduglutide, an\u00e1logo de GLP-2 aprovado para reduzir depend\u00eancia de suporte parenteral. BPC-157 e Glutationa entram como suporte te\u00f3rico de mucosa/estresse oxidativo, n\u00e3o como substitutos da terapia nutricional e gastroenterol\u00f3gica formal.",
    peptides: [
      {
        id: "teduglutide",
        name: "Teduglutide",
        role: "Agente principal — an\u00e1logo GLP-2 que promove adapta\u00e7\u00e3o intestinal e reduz necessidade de nutri\u00e7\u00e3o parenteral",
        dose: "0.05mg/kg/dia SC",
        timing: "Di\u00e1rio, mesmo hor\u00e1rio, com monitoramento de hidrata\u00e7\u00e3o e eletr\u00f3litos"
      },
      {
        id: "bpc-157",
        name: "BPC-157",
        role: "Suporte de mucosa — pept\u00eddeo g\u00e1strico com dados pr\u00e9-cl\u00ednicos de reparo, angiog\u00eanese e prote\u00e7\u00e3o intestinal",
        dose: "250-500mcg, 1-2x por dia",
        timing: "Oral ou SC, separado do Teduglutide"
      },
      {
        id: "glutathione",
        name: "Glutationa",
        role: "Suporte antioxidante — redu\u00e7\u00e3o de estresse oxidativo sist\u00eamico e mucoso em contexto inflamat\u00f3rio/nutricional complexo",
        dose: "600-1200mg IV, 1x por semana ou conforme protocolo cl\u00ednico",
        timing: "IV semanal, separado dos pept\u00eddeos SC"
      }
    ],
    synergy: "Teduglutide \u00e9 o componente com evid\u00eancia humana forte: ativa GLP-2R, aumenta superf\u00edcie absortiva e favorece adapta\u00e7\u00e3o intestinal. BPC-157 pode complementar, de forma experimental, com sinaliza\u00e7\u00e3o de reparo e prote\u00e7\u00e3o mucosa. Glutationa oferece suporte antioxidante em pacientes com inflama\u00e7\u00e3o, nutri\u00e7\u00e3o parenteral e maior carga metab\u00f3lica. A sinergia cl\u00ednica formal do trio ainda n\u00e3o foi testada.",
    application: "Teduglutide: SC di\u00e1rio, seringa/caneta pr\u00f3pria. BPC-157: oral ou SC separado, nunca misturar com Teduglutide. Glutationa: IV em sess\u00e3o separada com profissional. Manter suporte nutricional, hidrata\u00e7\u00e3o, eletr\u00f3litos e acompanhamento gastroenterol\u00f3gico como base obrigat\u00f3ria.",
    duration: "24 semanas para avalia\u00e7\u00e3o inicial de resposta, podendo ser terapia cr\u00f4nica quando indicada; suporte BPC/Glutationa por 8-12 semanas conforme objetivo",
    warnings: "Uso altamente especializado. Teduglutide pode causar dor abdominal, distens\u00e3o, reten\u00e7\u00e3o de fluidos, obstru\u00e7\u00e3o intestinal e crescimento de p\u00f3lipos; colonoscopia e rastreio conforme protocolo s\u00e3o importantes. Ajustes do suporte parenteral devem ser feitos por equipe especializada para evitar hiper-hidrata\u00e7\u00e3o, desidrata\u00e7\u00e3o ou dist\u00farbios eletrol\u00edticos.",
    evidenceLevel: "Alto para Teduglutide em s\u00edndrome do intestino curto / Moderado-Baixo para BPC-157 / Moderado para Glutationa / Baixo para o protocolo combinado completo",
    references: [
      "Jeppesen PB et al., 2012. 'Teduglutide reduces need for parenteral support among patients with short bowel syndrome with intestinal failure.' Gastroenterology. <a href='https://pubmed.ncbi.nlm.nih.gov/22982184/' target='_blank'>[PubMed]</a>",
      "Kocoshis SA et al., 2020. 'Safety and Efficacy of Teduglutide in Pediatric Patients With Intestinal Failure due to Short Bowel Syndrome: A 24-Week, Phase III Study.' JPEN J Parenter Enteral Nutr. <a href='https://pubmed.ncbi.nlm.nih.gov/31495952/' target='_blank'>[PubMed]</a>",
      "Sikiric P et al., 2022. 'Stable gastric pentadecapeptide BPC 157-therapy and the nervous system.' Curr Pharm Des. <a href='https://pubmed.ncbi.nlm.nih.gov/37242459/' target='_blank'>[PubMed]</a>"
    ]
  },
  {
    id: "weight-loss-monthly",
    name: "Perda de Peso - Dosagem Mensal (Simplificado)",
    goal: "weight-loss",
    goalLabel: "Perda de Peso",
    level: "Iniciante",
    description: "Protocolo simplificado de perda de peso com apenas 1 inje\u00e7\u00e3o por m\u00eas. MariTide (maridebart cafraglutide) \u00e9 o primeiro anticorpo anti-GIP com agonismo GLP-1 de a\u00e7\u00e3o ultra-longa, permitindo dosagem mensal com efic\u00e1cia comparada a agentes semanais. Complementado com suporte metab\u00f3lico oral/inject\u00e1vel b\u00e1sico.",
    peptides: [
      {
        id: "maridebart-cafraglutide",
        name: "Maridebart Cafraglutide (MariTide)",
        role: "Agente principal \u2014 anticorpo anti-GIP conjugado com agonista GLP-1, produ\u00e7\u00e3o de saciedade e controle glic\u00eamico com meia-vida ultra-longa (~21-24 dias)",
        dose: "420mg SC/m\u00eas (dose \u00fanica)",
        timing: "1x por m\u00eas"
      },
      {
        id: "l-carnitine",
        name: "L-Carnitina",
        role: "Suporte metab\u00f3lico \u2014 transporte de \u00e1cidos graxos para oxida\u00e7\u00e3o mitocondrial",
        dose: "600-2000mg/dia",
        timing: "Di\u00e1rio, pela manh\u00e3 ou antes do exerc\u00edcio"
      },
      {
        id: "vitamin-b12",
        name: "Vitamina B12",
        role: "Suporte energ\u00e9tico \u2014 previne defici\u00eancia durante restri\u00e7\u00e3o cal\u00f3rica induzida pelo GLP-1",
        dose: "1000mcg/semana IM ou di\u00e1rio oral",
        timing: "1x por semana (inject\u00e1vel) ou di\u00e1rio (oral)"
      }
    ],
    synergy: "MariTide combina duas a\u00e7\u00f5es complementares: (1) o anticorpo anti-GIP bloqueia o receptor GIP, reduzindo armazenamento de gordura, e (2) o pept\u00eddeo GLP-1 conjugado suprime apetite e melhora controle glic\u00eamico. A meia-vida ultra-longa (~21-24 dias) permite dosagem mensal, melhorando drasticamente a ader\u00eancia. L-Carnitina otimiza a oxida\u00e7\u00e3o da gordura mobilizada. B12 mant\u00e9m n\u00edveis energ\u00e9ticos adequados durante a restri\u00e7\u00e3o cal\u00f3rica.",
    application: "MariTide: SC 1x/m\u00eas em seringa pr\u00f3pria \u2014 NUNCA misturar com outros compostos. L-Carnitina: inje\u00e7\u00e3o SC separada di\u00e1ria ou suplementa\u00e7\u00e3o oral. Vitamina B12: inje\u00e7\u00e3o IM separada semanal ou via oral di\u00e1ria. Vias e frequ\u00eancias completamente distintas.",
    duration: "12-24 semanas (3-6 doses mensais de MariTide)",
    warnings: "MariTide est\u00e1 em fase 3 (programa MARITIME) \u2014 ainda n\u00e3o aprovado. N\u00e1usea e v\u00f4mitos s\u00e3o os efeitos adversos mais comuns, especialmente na primeira dose. Perda de peso pode ser muito r\u00e1pida (at\u00e9 ~20% em 12 meses) \u2014 monitorar massa muscular e nutri\u00e7\u00e3o proteica. Rea\u00e7\u00f5es no local de inje\u00e7\u00e3o podem ocorrer. Monitorar glicemia, perfil lip\u00eddico e massa corporal magra.",
    evidenceLevel: "Alto (MariTide: fase 2 com -14.5% de perda de peso, programa fase 3 MARITIME em andamento) / Moderado (L-Carnitina: meta-an\u00e1lises) / Baixo (B12: suporte)",
    references: [
      "Riesmeyer J et al., 2024. 'Maridebart cafraglutide (MariTide), a GIP receptor antibody GLP-1 receptor agonist, in overweight/obesity: phase 2 trial.' Nat Med. <a href='https://pubmed.ncbi.nlm.nih.gov/39702709/' target='_blank'>[PubMed]</a>",
      "Pooyandjoo M et al., 2016. 'The effect of (L-)carnitine on weight loss in adults: a systematic review and meta-analysis.' Obes Rev. <a href='https://pubmed.ncbi.nlm.nih.gov/27335245/' target='_blank'>[PubMed]</a>"
    ]
  },
  {
    id: "weight-loss-glp1-biased",
    name: "Perda de Peso - Agonista GLP-1 de Nova Gera\u00e7\u00e3o + Metabolismo",
    goal: "weight-loss",
    goalLabel: "Perda de Peso",
    level: "Intermedi\u00e1rio",
    description: "Protocolo combinando ecnoglutida, um agonista GLP-1 com perfil farmacol\u00f3gico favorecendo sinaliza\u00e7\u00e3o biased (menor n\u00e1usea, melhor toler\u00e2ncia GI), com MOTS-c como mim\u00e9tico de exerc\u00edcio e L-Carnitina para otimizar metabolismo de gordura. Ideal para pacientes que n\u00e3o toleram bem outros agonistas GLP-1.",
    peptides: [
      {
        id: "ecnoglutide",
        name: "Ecnoglutida",
        role: "Agente principal \u2014 agonista GLP-1 de longa a\u00e7\u00e3o com mecanismo biased que favorece sinaliza\u00e7\u00e3o via prote\u00edna G (eficaz) sobre \u03b2-arrestina (eventos GI adversos), resultando em melhor toler\u00e2ncia gastrointestinal",
        dose: "1.5-4.5mg/semana SC",
        timing: "1x por semana"
      },
      {
        id: "mots-c",
        name: "MOTS-c",
        role: "Pept\u00eddeo mitocondrial \u2014 ativa AMPK, melhora sensibilidade \u00e0 insulina e atua como mim\u00e9tico de exerc\u00edcio",
        dose: "5-10mg, 3x por semana",
        timing: "3x por semana, preferencialmente em dias de exerc\u00edcio"
      },
      {
        id: "l-carnitine",
        name: "L-Carnitina",
        role: "Transportador de \u00e1cidos graxos \u2014 facilita oxida\u00e7\u00e3o de gordura na mitoc\u00f4ndria, sinergia com MOTS-c",
        dose: "600-2000mg/dia",
        timing: "Di\u00e1rio, pela manh\u00e3 ou antes do exerc\u00edcio"
      }
    ],
    synergy: "Ecnoglutida suprime apetite e melhora controle glic\u00eamico via GLP-1 com melhor perfil de toler\u00e2ncia GI que outros agonistas da classe. MOTS-c ativa AMPK nas c\u00e9lulas musculares e adiposas, mimetizando os benef\u00edcios metab\u00f3licos do exerc\u00edcio (melhora da sensibilidade \u00e0 insulina, aumento da oxida\u00e7\u00e3o de gordura). L-Carnitina \u00e9 sinerg\u00edstica com MOTS-c, pois transporta os \u00e1cidos graxos mobilizados para dentro das mitoc\u00f4ndrias ativadas, maximizando a queima de gordura.",
    application: "Ecnoglutida: SC 1x/semana em seringa pr\u00f3pria \u2014 NUNCA misturar. MOTS-c: inje\u00e7\u00e3o SC separada nos dias programados. L-Carnitina: inje\u00e7\u00e3o SC separada di\u00e1ria ou suplementa\u00e7\u00e3o oral. Todas as tr\u00eas subst\u00e2ncias t\u00eam formula\u00e7\u00f5es e frequ\u00eancias distintas \u2014 n\u00e3o misturar.",
    duration: "12-20 semanas",
    warnings: "Ecnoglutida est\u00e1 aprovada na China para DM2, mas ainda em avalia\u00e7\u00e3o para obesidade. Embora tenha perfil GI superior, n\u00e1usea leve ainda pode ocorrer nas primeiras semanas. MOTS-c tem dados cl\u00ednicos limitados em humanos. Monitorar glicemia, perfil lip\u00eddico e composi\u00e7\u00e3o corporal. Manter ingest\u00e3o proteica adequada para preservar massa muscular.",
    evidenceLevel: "Alto (Ecnoglutida: fase 3 com -14.9% de perda de peso, aprovada na China) / Moderado (MOTS-c) / Moderado (L-Carnitina)",
    references: [
      "Ji L et al., 2025. 'Ecnoglutide for type 2 diabetes in China: a randomised, double-blind, phase 3 trial.' Lancet Diabetes Endocrinol. <a href='https://pubmed.ncbi.nlm.nih.gov/39674224/' target='_blank'>[PubMed]</a>",
      "Lee C et al., 2015. 'The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance.' Cell Metab. <a href='https://pubmed.ncbi.nlm.nih.gov/25738459/' target='_blank'>[PubMed]</a>",
      "Pooyandjoo M et al., 2016. 'The effect of (L-)carnitine on weight loss in adults: a systematic review and meta-analysis.' Obes Rev. <a href='https://pubmed.ncbi.nlm.nih.gov/27335245/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // PERDA DE PESO - 100% ORAL
  // =============================================
  {
    id: "weight-loss-oral",
    name: "Perda de Peso - 100% Oral (Sem Inje\u00e7\u00f5es)",
    goal: "weight-loss",
    goalLabel: "Perda de Peso",
    level: "Iniciante",
    description: "Primeiro stack de perda de peso completamente oral, eliminando a necessidade de qualquer inje\u00e7\u00e3o. Combina o agonista GLP-1 oral de nova gera\u00e7\u00e3o (orforglipron) com suporte metab\u00f3lico cl\u00e1ssico. Ideal para pacientes com avers\u00e3o a agulhas ou que preferem conveni\u00eancia m\u00e1xima.",
    peptides: [
      {
        id: "orforglipron",
        name: "Orforglipron",
        role: "Agonista oral n\u00e3o-pept\u00eddico do receptor GLP-1 \u2014 redu\u00e7\u00e3o de apetite, retardo do esvaziamento g\u00e1strico e melhora glic\u00eamica",
        dose: "36-72mg/dia (ap\u00f3s escalonamento)",
        timing: "1x ao dia, com ou sem alimentos"
      },
      {
        id: "l-carnitine",
        name: "L-Carnitina",
        role: "Transportador de \u00e1cidos graxos para oxida\u00e7\u00e3o mitocondrial \u2014 potencializa a queima de gordura mobilizada pelo GLP-1",
        dose: "500-2000mg/dia oral",
        timing: "Di\u00e1rio, pela manh\u00e3 ou antes do exerc\u00edcio"
      },
      {
        id: "vitamin-b12",
        name: "Vitamina B12",
        role: "Cofator metab\u00f3lico essencial \u2014 suporte \u00e0 produ\u00e7\u00e3o de energia e preven\u00e7\u00e3o de fadiga durante restri\u00e7\u00e3o cal\u00f3rica",
        dose: "1000mcg/dia sublingual ou oral",
        timing: "Di\u00e1rio, pela manh\u00e3"
      }
    ],
    synergy: "Orforglipron reduz o apetite e o esvaziamento g\u00e1strico via GLP-1R, promovendo d\u00e9ficit cal\u00f3rico sustent\u00e1vel. L-Carnitina maximiza a utiliza\u00e7\u00e3o dos \u00e1cidos graxos liberados, transportando-os para oxida\u00e7\u00e3o mitocondrial. B12 mant\u00e9m a produ\u00e7\u00e3o energ\u00e9tica e previne fadiga associada \u00e0 restri\u00e7\u00e3o cal\u00f3rica. Todos os tr\u00eas s\u00e3o administrados por via oral.",
    application: "Todos via oral \u2014 sem necessidade de inje\u00e7\u00f5es. Orforglipron: comprimido 1x/dia. L-Carnitina: c\u00e1psula ou l\u00edquido oral. B12: comprimido sublingual ou oral.",
    duration: "12-24 semanas com monitoramento de peso e composi\u00e7\u00e3o corporal",
    warnings: "Orforglipron est\u00e1 em Fase 3 \u2014 ainda n\u00e3o aprovado. Escalonamento de dose obrigat\u00f3rio para minimizar n\u00e1usea. Manter ingest\u00e3o proteica adequada para preservar massa muscular. N\u00e3o substitui dieta e exerc\u00edcio.",
    evidenceLevel: "Alto (Orforglipron: Fase 3 ACHIEVE) / Moderado (L-Carnitina: meta-an\u00e1lise) / Alto (B12: bem estabelecido)",
    references: [
      "Rosenstock J et al., 2026. 'Efficacy and safety of once-daily oral orforglipron compared with oral semaglutide in adults with type 2 diabetes (ACHIEVE-3).' Lancet. <a href='https://pubmed.ncbi.nlm.nih.gov/41765029/' target='_blank'>[PubMed]</a>",
      "Wharton S et al., 2025. 'Oral Semaglutide at a Dose of 25 mg in Adults with Overweight or Obesity.' N Engl J Med. <a href='https://pubmed.ncbi.nlm.nih.gov/40934115/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // PERDA DE PESO - ORAL AVANCADO
  // =============================================
  {
    id: "weight-loss-oral-advanced",
    name: "Perda de Peso - Oral Avan\u00e7ado (Dual GLP-1/Amilina)",
    goal: "weight-loss",
    goalLabel: "Perda de Peso",
    level: "Intermedi\u00e1rio",
    description: "Stack avan\u00e7ado centrado no amycretin, o primeiro agonista dual oral GLP-1/amilina. Com dados de at\u00e9 13% de perda de peso em 12 semanas, \u00e9 potencialmente o oral mais potente em desenvolvimento. Combinado com MOTS-c para ativa\u00e7\u00e3o metab\u00f3lica e 5-Amino-1MQ para inibi\u00e7\u00e3o de NNMT.",
    peptides: [
      {
        id: "amycretin",
        name: "Amycretin",
        role: "Agonista dual oral GLP-1/amilina \u2014 supress\u00e3o de apetite por duas vias complementares, potencialmente o oral mais potente",
        dose: "Dose em investiga\u00e7\u00e3o (escalonamento)",
        timing: "1x ao dia, oral"
      },
      {
        id: "mots-c",
        name: "MOTS-c",
        role: "Pept\u00eddeo mitocondrial \u2014 ativador de AMPK, sensibiliza\u00e7\u00e3o \u00e0 insulina e mim\u00e9tico de exerc\u00edcio",
        dose: "5-10mg SC, 3-5x por semana",
        timing: "3-5x por semana, preferencialmente em dias de exerc\u00edcio"
      },
      {
        id: "5-amino-1mq",
        name: "5-Amino-1MQ",
        role: "Inibidor de NNMT \u2014 ativa o metabolismo de gordura e previne acumula\u00e7\u00e3o adiposa via reprograma\u00e7\u00e3o metab\u00f3lica",
        dose: "50-100mg/dia oral",
        timing: "Di\u00e1rio, pela manh\u00e3"
      }
    ],
    synergy: "Amycretin suprime o apetite por duas vias distintas: GLP-1 (saciedade central e retardo g\u00e1strico) e amilina (saciedade adicional e inibi\u00e7\u00e3o de glucagon). MOTS-c ativa AMPK nas c\u00e9lulas musculares, mimetizando exerc\u00edcio e aumentando oxida\u00e7\u00e3o de gorduras. 5-Amino-1MQ inibe NNMT, reprogramando o metabolismo adiposo para favorecer lip\u00f3lise. Os tr\u00eas atuam em vias n\u00e3o-sobrepostas.",
    application: "Amycretin: oral 1x/dia. 5-Amino-1MQ: oral, di\u00e1rio. MOTS-c: \u00fanica inje\u00e7\u00e3o SC do stack, em seringa pr\u00f3pria nos dias programados. N\u00e3o misturar MOTS-c com outros compostos.",
    duration: "12-20 semanas",
    warnings: "Amycretin est\u00e1 em Fase 2 \u2014 dados cl\u00ednicos ainda limitados. MOTS-c e 5-Amino-1MQ s\u00e3o experimentais. Monitorar glicemia, perfil lip\u00eddico e composi\u00e7\u00e3o corporal. Manter ingest\u00e3o proteica adequada.",
    evidenceLevel: "Moderado (Amycretin: Fase 2 promissora) / Moderado (MOTS-c) / Baixo (5-Amino-1MQ: dados pr\u00e9-cl\u00ednicos)",
    references: [
      "Fu L et al., 2026. 'Amycretin in obesity: Mechanisms, clinical efficacy, and future perspectives.' Metabolism. <a href='https://pubmed.ncbi.nlm.nih.gov/41850421/' target='_blank'>[PubMed]</a>",
      "Bailey CJ et al., 2026. 'Long-acting amylin-related peptides as therapies for obesity and type 2 diabetes.' Peptides. <a href='https://pubmed.ncbi.nlm.nih.gov/41747885/' target='_blank'>[PubMed]</a>",
      "Vienghirun J et al., 2026. 'GLP-1 Receptor/Dual Agonists for Weight Loss: A Systematic Review and Network Meta-Analysis of RCTs.' Diabetes Obes Metab. <a href='https://pubmed.ncbi.nlm.nih.gov/41872986/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // RECOMPOSICAO CORPORAL - MAXIMA
  // =============================================
  {
    id: "body-recomp-max",
    name: "Recomposi\u00e7\u00e3o Corporal - M\u00e1xima (Anti-Miostatina + GLP-1)",
    goal: "body-comp",
    goalLabel: "Composi\u00e7\u00e3o Corporal",
    level: "Avan\u00e7ado",
    description: "Stack revolucion\u00e1rio combinando bimagrumab (o \u00fanico agente que reduz gordura E aumenta massa magra simultaneamente) com semaglutida para perda de peso potente e tesamorelin para otimiza\u00e7\u00e3o do GH. Baseado em ensaio cl\u00ednico de Fase 2 que demonstrou superioridade da combina\u00e7\u00e3o bimagrumab+semaglutida.",
    peptides: [
      {
        id: "bimagrumab",
        name: "Bimagrumab",
        role: "Anticorpo anti-ActRII \u2014 bloqueia miostatina/activina, promovendo ganho de massa magra E perda de massa gorda simultaneamente",
        dose: "10mg/kg IV a cada 4 semanas",
        timing: "Infus\u00e3o IV mensal"
      },
      {
        id: "semaglutide",
        name: "Semaglutida",
        role: "Agonista GLP-1 \u2014 redu\u00e7\u00e3o robusta de peso com saciedade central e retardo g\u00e1strico",
        dose: "0.25-2.4mg SC/semana (escalonamento)",
        timing: "1x por semana, dia fixo"
      },
      {
        id: "tesamorelin",
        name: "Tesamorelin",
        role: "An\u00e1logo de GHRH \u2014 estimula secre\u00e7\u00e3o pulsat\u00edtil de GH, reduz gordura visceral e suporta massa magra",
        dose: "1-2mg SC/dia",
        timing: "Di\u00e1rio, \u00e0 noite antes de dormir"
      }
    ],
    synergy: "Bimagrumab bloqueia ActRII, removendo o freio sobre o crescimento muscular e promovendo adiposidade bege/marrom. Semaglutida promove d\u00e9ficit cal\u00f3rico sustent\u00e1vel via GLP-1. Tesamorelin eleva GH de forma fisiol\u00f3gica, reduzindo gordura visceral e suportando anabolismo proteico. O ensaio cl\u00ednico Heymsfield 2026 demonstrou que bimagrumab preserva massa magra durante perda de peso com semaglutida.",
    application: "Bimagrumab: infus\u00e3o IV mensal em ambiente cl\u00ednico \u2014 n\u00e3o \u00e9 para autoadministra\u00e7\u00e3o. Semaglutida: SC 1x/semana, seringa pr\u00f3pria. Tesamorelin: SC di\u00e1rio, seringa pr\u00f3pria. N\u00e3o misturar nenhum dos compostos na mesma seringa.",
    duration: "24-48 semanas (ciclos de bimagrumab com avalia\u00e7\u00e3o a cada 12 semanas)",
    warnings: "Bimagrumab requer infus\u00e3o IV profissional. Pode causar eleva\u00e7\u00e3o transit\u00f3ria de FSH e espasmos musculares. Semaglutida requer escalonamento. Stack de custo elevado e complexidade log\u00edstica. Monitorar composi\u00e7\u00e3o corporal via DEXA.",
    evidenceLevel: "Alto (Semaglutida: Fase 3 STEP) / Moderado-Alto (Bimagrumab: Fase 2 em Nat Med) / Alto (Tesamorelin: aprovado FDA)",
    references: [
      "Heymsfield SB et al., 2026. 'Bimagrumab plus semaglutide alone or in combination for the treatment of obesity: a randomized phase 2 trial.' Nat Med. <a href='https://pubmed.ncbi.nlm.nih.gov/41772149/' target='_blank'>[PubMed]</a>",
      "Kaiser M et al., 2025. 'Bimagrumab: Novel Medical Therapy for Inclusion Body Myositis, Sarcopenia, and Medication-Induced Lean Body Mass Loss.' Cardiol Rev. <a href='https://pubmed.ncbi.nlm.nih.gov/41248895/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // MIMETICO DE EXERCICIO COMPLETO
  // =============================================
  {
    id: "exercise-mimetic-complete",
    name: "Mim\u00e9tico de Exerc\u00edcio - Completo (Triplo Ativador)",
    goal: "body-comp",
    goalLabel: "Composi\u00e7\u00e3o Corporal",
    level: "Intermedi\u00e1rio",
    description: "Stack triplo de mim\u00e9ticos de exerc\u00edcio com o acr\u00e9scimo de apelin-13, o pept\u00eddeo end\u00f3geno que declina com a idade e cujos efeitos reproduzem os benef\u00edcios cardiovasculares e musculares da atividade f\u00edsica. Combina quatro vias distintas de ativa\u00e7\u00e3o metab\u00f3lica.",
    peptides: [
      {
        id: "apelin-13",
        name: "Apelin-13",
        role: "Ligante do receptor APJ \u2014 cardioprote\u00e7\u00e3o, regenera\u00e7\u00e3o muscular, biog\u00eanese mitocondrial e sensibiliza\u00e7\u00e3o \u00e0 insulina. Declina com o envelhecimento",
        dose: "Doses em investiga\u00e7\u00e3o (nmol/kg SC)",
        timing: "Di\u00e1rio, pela manh\u00e3"
      },
      {
        id: "mots-c",
        name: "MOTS-c",
        role: "Pept\u00eddeo mitocondrial \u2014 ativador de AMPK end\u00f3geno, mimetiza sinaliza\u00e7\u00e3o metab\u00f3lica do exerc\u00edcio",
        dose: "5-10mg SC, 3-5x por semana",
        timing: "3-5x por semana"
      },
      {
        id: "aicar",
        name: "AICAR",
        role: "Ativador direto de AMPK via an\u00e1logo de AMP \u2014 for\u00e7a estado de d\u00e9ficit energ\u00e9tico simulado",
        dose: "50-150mg/dia SC",
        timing: "Di\u00e1rio, antes do exerc\u00edcio"
      }
    ],
    synergy: "Apelin-13 ativa o receptor APJ promovendo biog\u00eanese mitocondrial, vasodilata\u00e7\u00e3o e regenera\u00e7\u00e3o muscular \u2014 efeitos que declinam naturalmente com a idade. MOTS-c ativa AMPK por via mitocondrial end\u00f3gena. AICAR ativa AMPK diretamente como an\u00e1logo de AMP. As tr\u00eas vias convergem em aumento da oxida\u00e7\u00e3o de gorduras, biog\u00eanese mitocondrial e melhora da sensibilidade \u00e0 insulina, por mecanismos n\u00e3o-sobrepostos.",
    application: "Todos separados \u2014 vias e formula\u00e7\u00f5es distintas. Apelin-13: SC em seringa pr\u00f3pria. MOTS-c: SC em seringa separada. AICAR: SC em seringa separada. N\u00e3o misturar nenhum composto.",
    duration: "8-12 semanas com avalia\u00e7\u00e3o de resultados",
    warnings: "Apelin-13 tem meia-vida muito curta (~5min); an\u00e1logos est\u00e1veis est\u00e3o em desenvolvimento. AICAR pode causar hipoglicemia \u2014 monitorar glicemia. AICAR \u00e9 substância proibida pela WADA. Stack altamente experimental. N\u00e3o substitui exerc\u00edcio f\u00edsico real.",
    evidenceLevel: "Baixo-Moderado (Apelin-13: pesquisa ativa) / Moderado (MOTS-c) / Moderado (AICAR: pr\u00e9-cl\u00ednico robusto)",
    references: [
      "Davenport AP et al., 2026. 'Apelin receptor pharmacology in the human cardiovascular system and emerging clinical applications.' Pharmacol Rev. <a href='https://pubmed.ncbi.nlm.nih.gov/41895070/' target='_blank'>[PubMed]</a>",
      "Alizadeh Pahlavani H et al., 2022. 'Exercise Therapy for People With Sarcopenic Obesity: Myokines and Adipokines as Effective Actors.' Front Endocrinol. <a href='https://pubmed.ncbi.nlm.nih.gov/35250869/' target='_blank'>[PubMed]</a>",
      "Lee DJ et al., 2026. 'Role of apelin as a biomarker in functional recovery and post-stroke-associated sarcopenia.' PeerJ. <a href='https://pubmed.ncbi.nlm.nih.gov/41809696/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // SAUDE INTESTINAL - BARREIRA
  // =============================================
  {
    id: "gut-barrier",
    name: "Sa\u00fade Intestinal - Restaura\u00e7\u00e3o da Barreira",
    goal: "healing",
    goalLabel: "Cura e Recupera\u00e7\u00e3o",
    level: "Intermedi\u00e1rio",
    description: "Stack focado na restaura\u00e7\u00e3o da integridade da barreira intestinal, combinando o modulador de tight junctions (larazotide) com pept\u00eddeos de reparo mucoso (BPC-157) e anti-inflamat\u00f3rio intestinal (KPV). Indicado para permeabilidade intestinal aumentada, doen\u00e7a cel\u00edaca e condi\u00e7\u00f5es inflamat\u00f3rias intestinais.",
    peptides: [
      {
        id: "larazotide",
        name: "Larazotide",
        role: "Antagonista de zonulina \u2014 restaura tight junctions e previne permeabilidade intestinal aumentada",
        dose: "0.5mg 3x/dia oral",
        timing: "3x ao dia, antes das refei\u00e7\u00f5es"
      },
      {
        id: "bpc-157",
        name: "BPC-157",
        role: "Pentadecapept\u00eddeo g\u00e1strico \u2014 reparo da mucosa intestinal, angiog\u00eanese e modula\u00e7\u00e3o do eixo c\u00e9rebro-intestino",
        dose: "250-500mcg SC/dia ou oral",
        timing: "Di\u00e1rio, em jejum"
      },
      {
        id: "kpv",
        name: "KPV",
        role: "Tripept\u00eddeo anti-inflamat\u00f3rio derivado de \u03b1-MSH \u2014 redu\u00e7\u00e3o da inflama\u00e7\u00e3o intestinal via inibi\u00e7\u00e3o de NF-\u03baB",
        dose: "200-500mcg SC/dia ou oral",
        timing: "Di\u00e1rio, em jejum"
      }
    ],
    synergy: "Larazotide atua na causa da permeabilidade intestinal, bloqueando zonulina e restaurando as tight junctions. BPC-157 promove reparo ativo da mucosa danificada atrav\u00e9s de angiog\u00eanese e modula\u00e7\u00e3o do \u00f3xido n\u00edtrico. KPV suprime a inflama\u00e7\u00e3o intestinal via inibi\u00e7\u00e3o de NF-\u03baB nos enter\u00f3citos. Os tr\u00eas atuam em n\u00edveis diferentes: barreira (larazotide), reparo (BPC-157) e inflama\u00e7\u00e3o (KPV).",
    application: "Larazotide: oral, antes das refei\u00e7\u00f5es \u2014 a\u00e7\u00e3o local no lumen. BPC-157: SC ou oral (estabilidade oral razo\u00e1vel). KPV: SC ou oral. Se usar BPC-157 e KPV injet\u00e1veis, podem ser aplicados SC em locais separados. N\u00e3o misturar na mesma seringa.",
    duration: "8-16 semanas com avalia\u00e7\u00e3o de sintomas e marcadores inflamat\u00f3rios",
    warnings: "Larazotide est\u00e1 em Fase 3 para doen\u00e7a cel\u00edaca. BPC-157 enfrenta escr\u00fat\u00ednio regulat\u00f3rio do FDA. Di\u00e9ta adequada (redu\u00e7\u00e3o de gl\u00faten se cel\u00edaco) \u00e9 essencial em conjunto. Consultar gastroenterologista.",
    evidenceLevel: "Moderado-Alto (Larazotide: Fase 3) / Moderado (BPC-157: extensa pesquisa pr\u00e9-cl\u00ednica) / Moderado (KPV: dados pr\u00e9-cl\u00ednicos)",
    references: [
      "Kim J et al., 2025. 'Larazotide Acetate Protects the Intestinal Mucosal Barrier from Anoxia/Reoxygenation Injury via Various Cellular Mechanisms.' Biomedicines. <a href='https://pubmed.ncbi.nlm.nih.gov/41153766/' target='_blank'>[PubMed]</a>",
      "Girbal-Gonz\u00e1lez M et al., 2025. 'Is There a Future Without Gluten Restrictions for Celiac Patients? Update on Current Treatments.' Nutrients. <a href='https://pubmed.ncbi.nlm.nih.gov/41010485/' target='_blank'>[PubMed]</a>",
      "Sikiric P et al., 2018. 'Brain-gut Axis and Pentadecapeptide BPC 157: Theoretical and Practical Implications.' Curr Neuropharmacol. <a href='https://pubmed.ncbi.nlm.nih.gov/27138887/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // ANTI-INFLAMATORIO SISTEMICO
  // =============================================
  {
    id: "anti-inflammatory",
    name: "Anti-Inflamat\u00f3rio Sist\u00eamico - Tr\u00edplice Via",
    goal: "immune",
    goalLabel: "Sistema Imunol\u00f3gico",
    level: "Intermedi\u00e1rio",
    description: "Stack anti-inflamat\u00f3rio combinando tr\u00eas pept\u00eddeos que atuam em vias complementares do sistema melanocortina e imunol\u00f3gico. Alpha-MSH \u00e9 o pept\u00eddeo end\u00f3geno anti-inflamat\u00f3rio mais potente, KPV \u00e9 seu derivado tripept\u00eddeo com a\u00e7\u00e3o intestinal preferencial, e TA-1 \u00e9 o imunomodulador de refer\u00eancia.",
    peptides: [
      {
        id: "alpha-msh",
        name: "Alpha-MSH",
        role: "Pept\u00eddeo anti-inflamat\u00f3rio end\u00f3geno \u2014 suprime TNF-\u03b1, IL-1\u03b2 e IL-6 via MC1R em macr\u00f3fagos e neutr\u00f3filos",
        dose: "Doses em investiga\u00e7\u00e3o (mcg SC)",
        timing: "Di\u00e1rio, SC"
      },
      {
        id: "kpv",
        name: "KPV",
        role: "Tripept\u00eddeo C-terminal do \u03b1-MSH \u2014 inibi\u00e7\u00e3o de NF-\u03baB com tropismo intestinal. Penetra\u00e7\u00e3o oral vi\u00e1vel",
        dose: "200-500mcg SC/dia ou oral",
        timing: "Di\u00e1rio"
      },
      {
        id: "thymosin-alpha-1",
        name: "Thymosin Alpha-1",
        role: "Imunomodulador \u2014 ativa c\u00e9lulas dendr\u00edticas, NK e T-helper, equilibrando resposta Th1/Th2",
        dose: "1.6mg SC, 2-3x por semana",
        timing: "2-3x por semana"
      }
    ],
    synergy: "Alpha-MSH suprime inflama\u00e7\u00e3o via receptores de melanocortina (MC1R) em c\u00e9lulas imunes inatas, reduzindo citocinas pr\u00f3-inflamat\u00f3rias. KPV, como fragmento ativo do \u03b1-MSH, complementa com a\u00e7\u00e3o anti-inflamat\u00f3ria preferencial no intestino via inibi\u00e7\u00e3o direta de NF-\u03baB. TA-1 modula a resposta imune adaptativa, equilibrando Th1/Th2 e ativando c\u00e9lulas dendr\u00edticas. A combina\u00e7\u00e3o abrange imunidade inata (\u03b1-MSH, KPV) e adaptativa (TA-1).",
    application: "Alpha-MSH: SC em seringa pr\u00f3pria. KPV: SC ou oral, separado. TA-1: SC em seringa pr\u00f3pria. N\u00e3o misturar nenhum composto na mesma seringa.",
    duration: "8-12 semanas com monitoramento de marcadores inflamat\u00f3rios (PCR, IL-6)",
    warnings: "Alpha-MSH causa hiperpigmenta\u00e7\u00e3o cut\u00e2nea como efeito colateral. Meia-vida muito curta (~15min). TA-1 pode exacerbar doen\u00e7as autoimunes ativas \u2014 avaliar antes de iniciar. Consultar imunologista para condi\u00e7\u00f5es autoimunes.",
    evidenceLevel: "Moderado (Alpha-MSH: pesquisa pr\u00e9-cl\u00ednica robusta) / Moderado (KPV: dados in vivo) / Alto (TA-1: aprovado em v\u00e1rios pa\u00edses)",
    references: [
      "Sch\u00e4fer N et al., 2026. 'The \u03b1-MSH-MC1R Axis Modulates Sex-Specific Senescence and Inflammation Processes in Human Articular Chondrocytes and Mice Knee Joints.' Aging Dis. <a href='https://pubmed.ncbi.nlm.nih.gov/41824482/' target='_blank'>[PubMed]</a>",
      "Kamermans A et al., 2019. 'Setmelanotide, a Novel, Selective Melanocortin Receptor-4 Agonist Exerts Anti-inflammatory Actions in Astrocytes and Promotes an Anti-inflammatory Macrophage Phenotype.' Front Immunol. <a href='https://pubmed.ncbi.nlm.nih.gov/31636637/' target='_blank'>[PubMed]</a>",
      "Garaci E et al., 2007. 'Thymosin alpha 1: from bench to bedside.' Ann N Y Acad Sci. <a href='https://pubmed.ncbi.nlm.nih.gov/17600290/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // NEUROPROTECAO COMPLETA
  // =============================================
  {
    id: "neuroprotection-complete",
    name: "Neuroprote\u00e7\u00e3o Completa - Biorregulador + Nootr\u00f3picos + NCAM",
    goal: "cognitive",
    goalLabel: "Cognitivo",
    level: "Avan\u00e7ado",
    description: "Stack cognitivo avan\u00e7ado que combina o biorregulador cortical de Khavinson (Cortagen) com os nootr\u00f3picos nasais cl\u00e1ssicos (Semax, Selank) e o pept\u00eddeo neurog\u00eanico derivado de NCAM (FGL). Aborda neuroprote\u00e7\u00e3o, neurog\u00eanese, plasticidade sin\u00e1ptica e regula\u00e7\u00e3o emocional por quatro vias distintas.",
    peptides: [
      {
        id: "cortagen",
        name: "Cortagen",
        role: "Tetrapept\u00eddeo biorregulador do c\u00f3rtex cerebral \u2014 neuroprote\u00e7\u00e3o epigen\u00e9tica e antioxidante espec\u00edfica do tecido cortical",
        dose: "10-20mg/dia SC ou IN",
        timing: "Di\u00e1rio, em ciclos de 10-20 dias"
      },
      {
        id: "semax",
        name: "Semax",
        role: "An\u00e1logo de ACTH(4-10) \u2014 nootr\u00f3pico com a\u00e7\u00e3o neuroprotetora, ativa\u00e7\u00e3o dopamin\u00e9rgica e serotonin\u00e9rgica e produ\u00e7\u00e3o de BDNF",
        dose: "200-600mcg/dia intranasal",
        timing: "1-2x ao dia, intranasal"
      },
      {
        id: "selank",
        name: "Selank",
        role: "Pept\u00eddeo ansiol\u00edtico \u2014 modula GABA, serotonina e BDNF sem seda\u00e7\u00e3o. Complementa Semax na regula\u00e7\u00e3o emocional",
        dose: "200-600mcg/dia intranasal",
        timing: "1-2x ao dia, intranasal"
      },
      {
        id: "fgl-peptide",
        name: "FGL Peptide",
        role: "Derivado de NCAM \u2014 promove plasticidade sin\u00e1ptica, neurog\u00eanese e mobiliza c\u00e9lulas-tronco neurais end\u00f3genas via FGFR",
        dose: "Vari\u00e1vel conforme estudo (SC)",
        timing: "3-5x por semana, SC"
      }
    ],
    synergy: "Cortagen modula epigeneticamente neur\u00f4nios corticais, normalizando express\u00e3o g\u00eanica e combatendo estresse oxidativo. Semax ativa sistemas dopamin\u00e9rgico e serotonin\u00e9rgico, estimulando BDNF e neuroprote\u00e7\u00e3o. Selank complementa com a\u00e7\u00e3o ansiol\u00edtica e BDNF adicional por vias GABA\u00e9rgicas. FGL promove neurog\u00eanese e plasticidade sin\u00e1ptica via ativa\u00e7\u00e3o de FGFR. As quatro vias (epigen\u00e9tica, monoamin\u00e9rgica, GABA\u00e9rgica e NCAM/FGFR) s\u00e3o n\u00e3o-sobrepostas.",
    application: "Semax + Selank: intranasal na mesma sess\u00e3o (um por narina ou sequencialmente). Cortagen: SC ou intranasal separado. FGL: SC em seringa pr\u00f3pria. N\u00e3o misturar injet\u00e1veis.",
    duration: "Cortagen: ciclos de 10-20 dias / Semax e Selank: ciclos de 4-8 semanas / FGL: 4-8 semanas",
    warnings: "Cortagen e FGL t\u00eam dados cl\u00ednicos limitados em humanos. FGL n\u00e3o possui protocolo de dosagem humana estabelecido. Stack altamente experimental. Monitorar fun\u00e7\u00e3o cognitiva e humor com avalia\u00e7\u00f5es peri\u00f3dicas.",
    evidenceLevel: "Moderado (Semax, Selank: aprovados na R\u00fassia) / Baixo-Moderado (Cortagen: pesquisa pr\u00e9-cl\u00ednica) / Baixo (FGL: pesquisa pr\u00e9-cl\u00ednica)",
    references: [
      "Kolbaev SN et al., 2025. 'The Effect of Peptide Semax, an ACTH(4-10) Analogue, on Intracellular Calcium Dynamics in Rat Brain Neurons.' Bull Exp Biol Med. <a href='https://pubmed.ncbi.nlm.nih.gov/41171324/' target='_blank'>[PubMed]</a>",
      "Ilina AR et al., 2024. 'Prospects for use of short peptides in pharmacotherapeutic correction of Alzheimer disease.' Adv Gerontol. <a href='https://pubmed.ncbi.nlm.nih.gov/38944767/' target='_blank'>[PubMed]</a>",
      "Klein R et al., 2016. 'The NCAM-Peptide FG Loop (FGL) Mobilizes Endogenous Neural Stem Cells after Stroke.' J Neuroimmune Pharmacol. <a href='https://pubmed.ncbi.nlm.nih.gov/27352075/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // REJUVENESCIMENTO CAPILAR
  // =============================================
  {
    id: "hair-rejuvenation",
    name: "Rejuvenescimento Capilar - Duplo Cobre Pept\u00eddeo",
    goal: "skin",
    goalLabel: "Pele e Est\u00e9tica",
    level: "Intermedi\u00e1rio",
    description: "Stack focado em crescimento capilar e sa\u00fade do couro cabeludo, combinando dois pept\u00eddeos de cobre com mecanismos complementares (GHK-Cu e AHK-Cu) e Epithalon para suporte anti-envelhecimento celular. AHK-Cu demonstrou ativa\u00e7\u00e3o direta de c\u00e9lulas da papila d\u00e9rmica, enquanto GHK-Cu modula mais de 4.000 genes envolvidos em regenera\u00e7\u00e3o tecidual.",
    peptides: [
      {
        id: "ahk-cu",
        name: "AHK-Cu",
        role: "Tripept\u00eddeo de cobre \u2014 estimula\u00e7\u00e3o direta de c\u00e9lulas da papila d\u00e9rmica, crescimento capilar e produ\u00e7\u00e3o de VEGF/FGF-7",
        dose: "1-5ppm em s\u00e9rum capilar",
        timing: "1-2x ao dia, aplica\u00e7\u00e3o t\u00f3pica no couro cabeludo"
      },
      {
        id: "ghk-cu",
        name: "GHK-Cu",
        role: "Tripept\u00eddeo de cobre cl\u00e1ssico \u2014 modula\u00e7\u00e3o gen\u00e9tica ampla (4.000+ genes), regenera\u00e7\u00e3o tecidual, anti-inflamat\u00f3rio e antioxidante",
        dose: "1-2ml de solu\u00e7\u00e3o t\u00f3pica",
        timing: "1-2x ao dia, aplica\u00e7\u00e3o t\u00f3pica"
      },
      {
        id: "epithalon",
        name: "Epithalon",
        role: "Tetrapept\u00eddeo ativador de telomerase \u2014 suporte anti-envelhecimento celular para c\u00e9lulas do fol\u00edculo capilar",
        dose: "5-10mg SC/dia em ciclos",
        timing: "Di\u00e1rio por 10-20 dias (ciclos)"
      }
    ],
    synergy: "AHK-Cu ativa diretamente c\u00e9lulas da papila d\u00e9rmica via VEGF e FGF-7, estimulando fase an\u00e1gena do ciclo capilar. GHK-Cu complementa com modula\u00e7\u00e3o gen\u00e9tica ampla que favorece regenera\u00e7\u00e3o tecidual, s\u00edntese de col\u00e1geno e prote\u00e7\u00e3o antioxidante do couro cabeludo. Epithalon ativa telomerase, prolongando a capacidade replicativa das c\u00e9lulas do fol\u00edculo. Os dois cobre-pept\u00eddeos atuam em vias distintas, permitindo sinergia.",
    application: "AHK-Cu: t\u00f3pico no couro cabeludo, 1-2x/dia. GHK-Cu: t\u00f3pico no couro cabeludo, 1-2x/dia (pode ser misturado com AHK-Cu no mesmo s\u00e9rum). NUNCA misturar GHK-Cu com \u00e1cidos (vitamina C, AHA/BHA) \u2014 o cobre \u00e9 inativado. Epithalon: SC em seringa pr\u00f3pria, separado dos t\u00f3picos.",
    duration: "12-24 semanas para avalia\u00e7\u00e3o de crescimento capilar (ciclo capilar \u00e9 lento)",
    warnings: "Resultados capilares requerem meses de uso consistente. N\u00e3o usar cobre-pept\u00eddeos com vitamina C ou \u00e1cidos no mesmo hor\u00e1rio. AHK-Cu tem dados cl\u00ednicos limitados (principalmente in vitro). Excesso de cobre t\u00f3pico pode causar discromia local.",
    evidenceLevel: "Moderado (GHK-Cu: m\u00faltiplos estudos Pickart) / Baixo-Moderado (AHK-Cu: dados in vitro) / Moderado (Epithalon: estudos Khavinson)",
    references: [
      "Pyo HK et al., 2007. 'The effect of tripeptide-copper complex on human hair growth in vitro.' Arch Pharm Res. <a href='https://pubmed.ncbi.nlm.nih.gov/17703734/' target='_blank'>[PubMed]</a>",
      "Pickart L et al., 2018. 'Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data.' Int J Mol Sci. <a href='https://pubmed.ncbi.nlm.nih.gov/29986520/' target='_blank'>[PubMed]</a>",
      "Pickart L et al., 2015. 'GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration.' Biomed Res Int. <a href='https://pubmed.ncbi.nlm.nih.gov/26236730/' target='_blank'>[PubMed]</a>"
    ]
  },

  // =============================================
  // REDUÇÃO LOCALIZADA DE GORDURA
  // =============================================
  {
    id: "localized-fat-reduction",
    name: "Redu\u00e7\u00e3o Localizada de Gordura - Apoptose + Lipol\u00edtico",
    goal: "body-comp",
    goalLabel: "Composi\u00e7\u00e3o Corporal",
    level: "Intermedi\u00e1rio",
    description: "Protocolo combinado para redu\u00e7\u00e3o localizada de gordura subcut\u00e2nea, unindo a apoptose seletiva de adipoc\u00edtos do CBL-514 com a a\u00e7\u00e3o lipol\u00edtica sist\u00eamica do fragmento de GH (AOD-9604) e o suporte metab\u00f3lico mitocondrial do MOTS-c. A combina\u00e7\u00e3o ataca a gordura localizada por tr\u00eas vias distintas: destrui\u00e7\u00e3o direta de c\u00e9lulas de gordura, lip\u00f3lise hormonal e otimiza\u00e7\u00e3o do metabolismo energ\u00e9tico.",
    peptides: [
      {
        id: "cbl-514",
        name: "CBL-514",
        role: "Inibidor de DYRK1b (Caliway Biopharma) \u2014 apoptose seletiva de adipoc\u00edtos via caspase-3/Bax, destrui\u00e7\u00e3o permanente de c\u00e9lulas de gordura no local da inje\u00e7\u00e3o",
        dose: "2,0 mg/cm\u00b2 por sess\u00e3o, inje\u00e7\u00f5es SC em grid na \u00e1rea de gordura",
        timing: "1 sess\u00e3o a cada 4-6 semanas (2-4 sess\u00f5es total)"
      },
      {
        id: "aod-9604",
        name: "AOD-9604",
        role: "Fragmento lipol\u00edtico do GH (hGH 176-191 estabilizado) \u2014 estimula lip\u00f3lise e inibe lipog\u00eanese sem efeitos sist\u00eamicos do GH",
        dose: "300-500 mcg SC/dia",
        timing: "Di\u00e1rio, em jejum pela manh\u00e3"
      },
      {
        id: "mots-c",
        name: "MOTS-c",
        role: "Pept\u00eddeo mitocondrial ativador de AMPK \u2014 aumenta oxida\u00e7\u00e3o de gordura, melhora sensibilidade \u00e0 insulina e metabolismo energ\u00e9tico",
        dose: "5-10mg SC, 3-5x por semana",
        timing: "3-5x por semana, pela manh\u00e3"
      }
    ],
    synergy: "CBL-514 atua localmente inibindo DYRK1b e eliminando adipoc\u00edtos por apoptose seletiva via caspase-3 e Bax/Bcl-2 \u2014 efeito permanente nas c\u00e9lulas tratadas. AOD-9604 complementa de forma sist\u00eamica, estimulando a lip\u00f3lise (quebra de triglicer\u00eddeos) e inibindo a lipog\u00eanese (forma\u00e7\u00e3o de nova gordura) nos adipoc\u00edtos remanescentes, sem afetar glicemia ou IGF-1. MOTS-c ativa AMPK, aumentando o gasto energ\u00e9tico celular e a oxida\u00e7\u00e3o de \u00e1cidos graxos liberados pela lip\u00f3lise, al\u00e9m de melhorar a sensibilidade \u00e0 insulina. As tr\u00eas vias s\u00e3o complementares: destrui\u00e7\u00e3o celular + mobiliza\u00e7\u00e3o de gordura + queima metab\u00f3lica.",
    application: "Todos SEPARADOS \u2014 vias e formula\u00e7\u00f5es completamente distintas. CBL-514: inje\u00e7\u00e3o intrad\u00e9rmica/subcut\u00e2nea direta na \u00e1rea de gordura alvo (realizada em cl\u00ednica, por profissional treinado). AOD-9604: inje\u00e7\u00e3o SC em seringa pr\u00f3pria, longe do local do CBL-514. MOTS-c: inje\u00e7\u00e3o SC em seringa separada. NUNCA misturar nenhum composto na mesma seringa.",
    duration: "12-16 semanas. CBL-514: 2-4 sess\u00f5es em cl\u00ednica a cada 4-6 semanas. AOD-9604 e MOTS-c: uso di\u00e1rio/regular durante todo o per\u00edodo.",
    warnings: "CBL-514 est\u00e1 em ensaio cl\u00ednico Fase 3 (SUPREME-01, FDA IND aprovado) e N\u00c3O est\u00e1 aprovado para uso comercial. Desenvolvido pela Caliway Biopharmaceuticals (Taiwan). Deve ser aplicado por profissional de sa\u00fade treinado em cl\u00ednica. Edema e equimose no local s\u00e3o esperados ap\u00f3s aplica\u00e7\u00e3o. AOD-9604 n\u00e3o afeta glicemia nem IGF-1. Resultados do CBL-514 s\u00e3o permanentes para os adipoc\u00edtos eliminados, mas ganho de peso pode expandir adipoc\u00edtos remanescentes.",
    evidenceLevel: "Alto (CBL-514: Fase IIb publicada com 69,6% resposta, Fase 3 em andamento) / Moderado (AOD-9604: m\u00faltiplos estudos) / Moderado (MOTS-c: dados cl\u00ednicos emergentes)",
    references: [
      "Gold MH et al., 2022. 'Efficacy of a Novel Injection Lipolysis to Induce Targeted Adipocyte Apoptosis: Phase IIa Study of CBL-514.' Dermatol Surg, 48(9), 1002-1008. <a href='https://pubmed.ncbi.nlm.nih.gov/35709509/' target='_blank'>[PubMed]</a>",
      "Gold MH, Schlessinger J et al., 2025. 'Efficacy and Safety of CBL-514 in Reducing Abdominal Subcutaneous Fat: Phase II Study.' Aesthet Surg J, 45(6), 611-623. <a href='https://pubmed.ncbi.nlm.nih.gov/39831981/' target='_blank'>[PubMed]</a>",
      "Heffernan MA et al., 2001. 'The effects of human GH and its lipolytic fragment (AOD9604) on lipid metabolism.' Endocrinology. <a href='https://pubmed.ncbi.nlm.nih.gov/11511536/' target='_blank'>[PubMed]</a>"
    ]
  }
];
