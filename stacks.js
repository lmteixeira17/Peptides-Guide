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
    synergy: "Semax aumenta BDNF e melhora a neurotransmiss\u00e3o dopamin\u00e9rgica e serotonin\u00e9rgica, melhorando foco e mem\u00f3ria. Selank modula o sistema GABAergico e tamb\u00e9m aumenta BDNF, reduzindo ansiedade sem causar sonol\u00eancia. Juntos, criam um estado de 'fluxo cognitivo': alta performance mental com calma emocional. Ambos aprovados na R\u00fassia como medicamentos.",
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
  }
];
