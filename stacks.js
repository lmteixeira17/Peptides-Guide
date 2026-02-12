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
    duration: "12-16 semanas com escalonamento gradual do Semaglutide",
    warnings: "Iniciar Semaglutide com dose baixa para minimizar n\u00e1usea. Monitorar glicemia se diab\u00e9tico.",
    evidenceLevel: "Alto (Semaglutide: ensaios cl\u00ednicos fase 3 STEP)"
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
    duration: "12-20 semanas",
    warnings: "N\u00e1usea pode ser intensa nas primeiras semanas de Tirzepatide. 5-Amino-1MQ ainda tem dados cl\u00ednicos limitados em humanos.",
    evidenceLevel: "Alto (Tirzepatide: SURMOUNT) / Moderado (MOTS-c) / Baixo (5-Amino-1MQ)"
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
    duration: "16-24 semanas com escalonamento gradual do Retatrutide",
    warnings: "Retatrutide ainda est\u00e1 em fase 3 de estudos cl\u00ednicos. N\u00e1usea e efeitos GI podem ser significativos. Monitorar fun\u00e7\u00e3o hep\u00e1tica pelo componente glucagon.",
    evidenceLevel: "Alto (Retatrutide: fase 2 publicado) / Moderado (MOTS-c, NAD+) / Baixo (AOD-9604)"
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
    duration: "12-16 semanas",
    warnings: "Monitorar IGF-1, glicemia e fun\u00e7\u00e3o tireoideana. Tesamorelin pode causar reten\u00e7\u00e3o h\u00eddrica.",
    evidenceLevel: "Alto (Semaglutide, Tesamorelin: aprovados FDA) / Moderado (Ipamorelin)"
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
    duration: "Epithalon: ciclos de 10-20 dias / NAD+ e SS-31: cont\u00ednuo por 8-12 semanas",
    warnings: "SS-31 ainda em ensaios cl\u00ednicos. NAD+ IV pode causar desconforto tor\u00e1cico durante infus\u00e3o. Monitorar press\u00e3o arterial.",
    evidenceLevel: "Moderado (Epithalon: estudos Khavinson) / Moderado (NAD+: estudos Sinclair) / Alto (SS-31: fase 3)"
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
    duration: "Protocolo rotacional ao longo de 12 meses",
    warnings: "Protocolo complexo - recomenda-se supervis\u00e3o m\u00e9dica. Muitos componentes ainda em fase de pesquisa.",
    evidenceLevel: "Moderado a Baixo (maioria em pesquisa pr\u00e9-cl\u00ednica ou cl\u00ednica inicial)"
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
    duration: "6-8 semanas (loading + manuten\u00e7\u00e3o)",
    warnings: "Ambos ainda em fase de pesquisa (sem ensaios cl\u00ednicos em humanos completos para estas indica\u00e7\u00f5es). BPC-157 tem extensa pesquisa pr\u00e9-cl\u00ednica.",
    evidenceLevel: "Moderado (extensa pesquisa pr\u00e9-cl\u00ednica, dados cl\u00ednicos limitados)"
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
    duration: "6-12 semanas dependendo da gravidade",
    warnings: "Todos os componentes est\u00e3o em fase de pesquisa. Consultar profissional de sa\u00fade para les\u00f5es graves.",
    evidenceLevel: "Moderado (pesquisa pr\u00e9-cl\u00ednica extensa) / Baixo (dados cl\u00ednicos humanos)"
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
    duration: "8-12 semanas",
    warnings: "BPC-157 oral pode ter biodisponibilidade vari\u00e1vel. Investigar causas subjacentes de problemas GI.",
    evidenceLevel: "Moderado (BPC-157: extensa pesquisa animal) / Baixo (KPV: estudos iniciais)"
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
    duration: "8-12 semanas, com pausas de 4 semanas entre ciclos",
    warnings: "Administrar em jejum (carboidratos e gorduras suprimem a libera\u00e7\u00e3o de GH). Monitorar IGF-1.",
    evidenceLevel: "Moderado (ambos com estudos cl\u00ednicos, mas n\u00e3o aprovados para esta indica\u00e7\u00e3o)"
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
    duration: "MK-677: cont\u00ednuo / Tesamorelin + Ipamorelin: ciclos de 8-12 semanas",
    warnings: "MK-677 pode causar resist\u00eancia \u00e0 insulina com uso prolongado. Monitorar glicemia, IGF-1 e insulina. Reten\u00e7\u00e3o h\u00eddrica \u00e9 comum.",
    evidenceLevel: "Alto (Tesamorelin: aprovado FDA) / Moderado (Ipamorelin, MK-677: estudos cl\u00ednicos)"
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
    duration: "Ciclos de 2-4 semanas com pausas de 1-2 semanas",
    warnings: "Ambos aprovados na R\u00fassia, mas n\u00e3o em pa\u00edses ocidentais. Irrita\u00e7\u00e3o nasal ocasional.",
    evidenceLevel: "Moderado (ambos aprovados na R\u00fassia com estudos publicados)"
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
    duration: "Cerebrolysin: ciclos de 10-20 dias / Demais: ciclos de 4-8 semanas",
    warnings: "Dihexa tem dados cl\u00ednicos muito limitados. Cerebrolysin requer administra\u00e7\u00e3o profissional. Stack experimental.",
    evidenceLevel: "Moderado (Semax, Selank, Cerebrolysin) / Baixo (Dihexa: pesquisa b\u00e1sica)"
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
    duration: "8-12 semanas",
    warnings: "Timosina Alfa 1 aprovada em alguns pa\u00edses (n\u00e3o FDA). Monitorar marcadores inflamat\u00f3rios.",
    evidenceLevel: "Alto (Timosina Alfa 1: aprovada em v\u00e1rios pa\u00edses) / Baixo-Moderado (KPV, Glutationa)"
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
    duration: "GHK-Cu, Glutationa, Snap-8: cont\u00ednuo / Epithalon: ciclos",
    warnings: "Resultados est\u00e9ticos s\u00e3o graduais (semanas a meses). Glutationa IV requer profissional habilitado.",
    evidenceLevel: "Moderado (GHK-Cu: estudos Pickart) / Baixo-Moderado (demais)"
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
    duration: "8-12 semanas",
    warnings: "Requer treino de resist\u00eancia e nutri\u00e7\u00e3o adequada (prote\u00edna suficiente). Monitorar IGF-1 e glicemia.",
    evidenceLevel: "Alto (Tesamorelin: FDA) / Moderado (Ipamorelin) / Baixo (HGH Frag, BPC-157 para esta indica\u00e7\u00e3o)"
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
    duration: "Protocolo rotacional ao longo de 12 meses",
    warnings: "Protocolo complexo e custoso. Requer acompanhamento m\u00e9dico e exames peri\u00f3dicos. Muitos componentes em fase de pesquisa.",
    evidenceLevel: "Variado - de Alto (Timosina Alfa 1) a Baixo (abordagem combinada n\u00e3o testada)"
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
    duration: "DSIP: ciclos de 2-4 semanas / Melatonina: conforme necess\u00e1rio / Epithalon: ciclos peri\u00f3dicos",
    warnings: "DSIP ainda em pesquisa b\u00e1sica com dados cl\u00ednicos limitados. N\u00e3o combinar com sedativos.",
    evidenceLevel: "Alto (Melatonina) / Moderado (Epithalon) / Baixo (DSIP)"
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
    duration: "Cont\u00ednuo durante TRT ou ciclos de 4-8 semanas para recupera\u00e7\u00e3o",
    warnings: "Kisspeptina ainda em pesquisa b\u00e1sica para esta indica\u00e7\u00e3o. HCG e Gonadorelina requerem prescri\u00e7\u00e3o m\u00e9dica.",
    evidenceLevel: "Alto (HCG: aprovado) / Moderado (Gonadorelina: aprovado para diagn\u00f3stico) / Baixo (Kisspeptina: pesquisa)"
  }
];
