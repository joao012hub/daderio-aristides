// ============================================================================
// Dadério & Aristides — dados e conteúdo do site
// ----------------------------------------------------------------------------
// ATENÇÃO: endereço, telefone/WhatsApp, e-mail, depoimentos, números de obras e
// CREA são FICTÍCIOS / ILUSTRATIVOS — substituir antes de publicar.
// Dados verificados: nome fantasia, razão social, CNPJ, data de fundação,
// cidade-sede, área de atendimento e serviços (conforme briefing).
// ============================================================================

const img = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const site = {
  name: 'Dadério & Aristides Engenharia e Construção',
  shortName: 'Dadério & Aristides',
  legalName: 'Dadério Engenharia & Consultoria Ltda – ME',
  cnpj: '31.687.972/0001-20',
  founded: '2018-10-04',
  foundedYear: 2018,
  domain: 'https://www.daderioaristides.com.br', // domínio ilustrativo
  // <!-- ENDEREÇO FICTÍCIO — SUBSTITUIR ANTES DE PUBLICAR -->
  address: {
    street: 'Rua das Ametistas, 245',
    district: 'Jardim Aquarius',
    city: 'São José dos Campos',
    state: 'SP',
    zip: '12246-000',
  },
  // <!-- TELEFONE FICTÍCIO — SUBSTITUIR ANTES DE PUBLICAR -->
  phoneDisplay: '(12) 99999-0000',
  phoneE164: '+5512999990000',
  whatsapp: '5512999990000',
  // <!-- E-MAIL FICTÍCIO — SUBSTITUIR ANTES DE PUBLICAR -->
  email: 'contato@daderioaristides.com.br',
  instagram: 'https://www.instagram.com/', // TODO: handle real do cliente
  hours: 'Segunda a sexta, 8h às 18h · Emergências via WhatsApp',
  founder: { name: 'Herllon Dadério', title: 'Engenheiro Civil · MBA em Gestão', crea: 'CREA-SP 5069xxxxxx/D' }, // CREA ILUSTRATIVO
  cities: ['São José dos Campos', 'Jacareí'],
};

export const wa = (text) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
export const waDefault = wa('Olá! Vim pelo site da Dadério & Aristides e quero falar com um engenheiro.');

export const images = {
  hero: img('1541888946425-d81bb19240f5', 1400),
  blueprintDesk: img('1503387762-592deb58ef4e', 1400),
  docs: img('1454165804606-c3d57bc86b40', 1400),
  sketch: img('1581092160562-40aa08e78837', 1400),
  keys: img('1560518883-ce09059eeffa', 1400),
  team: img('1516216628859-9bccecab13ca', 1400),
  workers: img('1504307651254-35680f356dfd', 1400),
  driller: img('1621905251189-08b45d6a269e', 1400),
  scaffold: img('1508450859948-4e04fabaa4ea', 1400),
  scaffoldWorkers: img('1535732820275-9ffd998cac22', 1400),
  rebar: img('1531834685032-c34bf0d84c77', 1400),
  cranes: img('1429497419816-9ca5cfb4571a', 1400),
  excavator: img('1503708928676-1cb796a0891e', 1400),
  earthworks: img('1517089596392-fb9a9033e05b', 1400),
  rain: img('1438449805896-28a666819a20', 1400),
  field: img('1500382017468-9049fed747ef', 1400),
  demolition: img('1517581177682-a085bb7ffb15', 1400),
  house1: img('1600585154340-be6161a56a0c', 1400),
  house2: img('1580587771525-78b9dba3b914', 1400),
  house3: img('1512917774080-9991f1c4c750', 1400),
  house4: img('1568605114967-8130f3a36994', 1400),
  house5: img('1564013799919-ab600027ffc6', 1400),
  house6: img('1523217582562-09d0def993a6', 1400),
  house7: img('1494526585095-c41746248156', 1400),
  house8: img('1416331108676-a22ccb276e35', 1400),
  house9: img('1449844908441-8829872d2607', 1400),
  house10: img('1600596542815-ffad4c1539a9', 1400),
  interior1: img('1600607687939-ce8a6c25118c', 1400),
  interior2: img('1600566753086-00f18fb6b3ea', 1400),
  interior3: img('1502005229762-cf1b2da7c5d6', 1400),
  interior4: img('1590725140246-20acdee442be', 1400),
  roof: img('1503594384566-461fe158e797', 1400),
  carpenter: img('1513467535987-fd81bc7d62f8', 1400),
  warehouse: img('1553413077-190dd305871c', 1400),
  whiteBuilding: img('1487958449943-2429e8be8625', 1400),
};

// ----------------------------------------------------------------------------
// SERVIÇOS — uma página por serviço
// ----------------------------------------------------------------------------
export const services = [
  {
    slug: 'regularizacao-de-imovel',
    num: '01',
    icon: 'document-check',
    title: 'Regularização de imóvel',
    shortTitle: 'Regularização',
    card: 'Habite-se, averbação e alvará para construções, ampliações e reformas feitas sem projeto aprovado. Do levantamento ao cartório.',
    tags: ['Habite-se', 'Averbação', 'Anistia'],
    metaTitle: 'Regularização de Imóvel em São José dos Campos e Jacareí | Dadério & Aristides',
    metaDescription: 'Regularize construção, ampliação ou reforma sem projeto aprovado. Levantamento, projeto, protocolo na prefeitura, Habite-se e averbação. Prazo médio de 45 a 120 dias. Engenheiro responsável com ART.',
    heroImg: images.keys,
    heroAlt: 'Chaves e miniatura de casa sobre mesa — regularização de imóvel',
    prazo: '45 a 120 dias',
    lead: 'Regularização de imóvel é o processo técnico e documental que torna legal, perante a prefeitura e o cartório, uma construção, ampliação ou reforma executada sem projeto aprovado ou sem Habite-se. A Dadério & Aristides faz o levantamento, o projeto de regularização, o protocolo na prefeitura e o acompanhamento até o Habite-se e a averbação na matrícula, em São José dos Campos e Jacareí. O prazo médio é de 45 a 120 dias, conforme a situação do imóvel e a fila do órgão.',
    whatIs: [
      'Todo imóvel tem duas "versões": a que existe de fato e a que consta nos registros da prefeitura e do cartório. Quando uma obra é feita sem projeto aprovado — um quarto a mais, uma edícula, uma cobertura, um segundo pavimento — essas versões deixam de bater. A regularização é o trabalho de engenharia que faz as duas voltarem a coincidir.',
      'Na prática, isso significa medir o que foi construído (levantamento <em>as built</em>), desenhar o projeto de regularização conforme o código de obras e o zoneamento do município, protocolar na prefeitura com ART, responder às exigências técnicas e, ao final, obter o Habite-se e averbar a área construída na matrícula do imóvel.',
    ],
    when: [
      'Você vai <strong>vender ou financiar</strong> e o banco exige matrícula atualizada com Habite-se.',
      'Recebeu <strong>notificação, auto de infração ou embargo</strong> da prefeitura.',
      'A área construída no IPTU ou na matrícula é <strong>diferente da real</strong>.',
      'Está em processo de <strong>inventário, partilha ou divórcio</strong> e o imóvel precisa estar regular.',
      'Precisa de <strong>alvará de funcionamento</strong> para um comércio instalado em imóvel irregular.',
      'Quer <strong>valorizar o patrimônio</strong>: imóvel regular vale mais e vende mais rápido.',
    ],
    process: [
      ['Diagnóstico gratuito', 'Você envia matrícula, carnê de IPTU e fotos pelo WhatsApp. Em até 24 h úteis dizemos se o imóvel é regularizável, por qual caminho e a estimativa de prazo e custo.'],
      ['Levantamento in loco', 'Visita técnica para medição completa da edificação, registro fotográfico e conferência de recuos, afastamentos e taxa de ocupação.'],
      ['Projeto de regularização + ART', 'Elaboração das plantas, memorial descritivo e documentos exigidos pela prefeitura. Emitimos a ART e assinamos como responsáveis técnicos.'],
      ['Protocolo e acompanhamento', 'Protocolamos o processo, acompanhamos a análise e respondemos a todos os "comunique-se" — você não precisa ir à prefeitura.'],
      ['Habite-se e averbação', 'Com o Habite-se emitido, providenciamos a CND de obra (quando aplicável) e orientamos a averbação no cartório de registro de imóveis.'],
    ],
    timeline: [
      ['Diagnóstico e análise documental', 'até 24 h'],
      ['Levantamento e medição', '3 a 5 dias'],
      ['Projeto e memorial', '7 a 15 dias'],
      ['Análise na prefeitura', '30 a 90 dias'],
      ['Habite-se e averbação', '15 a 30 dias'],
    ],
    docs: ['Matrícula atualizada (até 30 dias)', 'Carnê do IPTU do ano vigente', 'RG/CPF ou contrato social do proprietário', 'Projeto aprovado anterior, se existir', 'Fotos da fachada e dos ambientes'],
    faq: [
      ['Imóvel irregular pode ser vendido?', 'Pode, mas com limitações sérias: a maioria dos bancos não financia imóvel sem Habite-se e área averbada, o que reduz o número de compradores e o valor de venda. Regularizar antes de anunciar costuma se pagar sozinho.'],
      ['Quanto custa regularizar um imóvel?', 'Depende da área construída, da complexidade e da situação junto à prefeitura. O investimento envolve honorários de engenharia, taxas municipais e custos de cartório. Use o simulador do site para uma estimativa inicial ou envie a matrícula para um diagnóstico gratuito.'],
      ['Vou pagar multa?', 'Nem sempre. Alguns municípios cobram taxas de regularização proporcionais à área; em outros casos há programas de anistia que reduzem ou isentam. Na análise inicial mapeamos exatamente o cenário do seu imóvel.'],
      ['Apartamento ou casa em condomínio também precisa?', 'Sim. Reformas em apartamentos que alteram planta, fachada ou instalações precisam de plano de reforma (NBR 16280) e ART; casas em condomínio seguem o código de obras do município e as regras internas.'],
    ],
    related: ['aprovacao-de-projeto-prefeitura', 'emissao-de-art', 'laudo-tecnico'],
  },
  {
    slug: 'aprovacao-de-projeto-prefeitura',
    num: '02',
    icon: 'stamp',
    title: 'Aprovação de projeto na prefeitura',
    shortTitle: 'Aprovação na prefeitura',
    card: 'Projeto legal, análise de zoneamento e protocolo até o alvará de construção. Sem idas à prefeitura, sem "comunique-se" sem resposta.',
    tags: ['Alvará', 'Zoneamento', 'Projeto legal'],
    metaTitle: 'Aprovação de Projeto na Prefeitura — SJC e Jacareí | Dadério & Aristides',
    metaDescription: 'Aprovação de projeto e alvará de construção em São José dos Campos e Jacareí. Viabilidade, projeto legal, ART, protocolo e acompanhamento até o alvará. Engenheiro civil responsável.',
    heroImg: images.blueprintDesk,
    heroAlt: 'Engenheiro desenhando sobre planta técnica',
    prazo: '30 a 90 dias',
    lead: 'Aprovação de projeto na prefeitura é a análise e a autorização oficial do projeto de uma construção, ampliação, reforma ou mudança de uso, que resulta no alvará de construção. Sem esse alvará, a obra é irregular e pode ser embargada. A Dadério & Aristides cuida do estudo de viabilidade, do projeto legal conforme o zoneamento e o código de obras, da ART e de todo o trâmite até a emissão do alvará, em São José dos Campos e Jacareí, em geral entre 30 e 90 dias.',
    whatIs: [
      'Antes de qualquer obra, a prefeitura precisa verificar se o que você pretende construir respeita as regras do município: uso permitido para o lote, recuos, taxa de ocupação, coeficiente de aproveitamento, altura, vagas, acessibilidade e áreas permeáveis. Esse projeto "legal" é diferente do projeto de arquitetura ou executivo — ele existe para passar pela análise técnica.',
      'Nosso trabalho é transformar sua intenção (ou o projeto do seu arquiteto) em um processo que a prefeitura aprova: conferimos a viabilidade antes de desenhar, produzimos as pranchas e memoriais no formato exigido, emitimos a ART e acompanhamos a análise até o alvará, respondendo a cada exigência dentro do prazo.',
    ],
    when: [
      'Vai <strong>construir uma casa, galpão ou edificação comercial</strong> em terreno próprio.',
      'Vai <strong>ampliar</strong> (novo pavimento, edícula, garagem, cobertura) uma construção existente.',
      'Precisa de <strong>mudança de uso</strong>: residência que vira clínica, escritório ou loja.',
      'Recebeu um <strong>projeto de arquitetura</strong> e precisa do projeto legal e da aprovação.',
      'O banco exige <strong>alvará e projeto aprovado</strong> para liberar o financiamento da obra.',
      'Vai <strong>demolir</strong> total ou parcialmente uma edificação.',
    ],
    process: [
      ['Estudo de viabilidade', 'Analisamos a matrícula, o zoneamento do lote e as diretrizes municipais para dizer o que pode ser construído — antes de gastar com projeto.'],
      ['Projeto legal e memoriais', 'Elaboramos as pranchas, quadro de áreas, memorial descritivo e formulários exigidos, compatibilizados com o projeto de arquitetura quando houver.'],
      ['ART e protocolo', 'Emitimos a ART de projeto e protocolamos o processo, físico ou eletrônico, conforme o município.'],
      ['Acompanhamento e comunique-se', 'Monitoramos a análise e respondemos a todas as exigências técnicas, ajustando o projeto quando necessário.'],
      ['Alvará de construção', 'Entregamos o alvará e o projeto aprovado carimbado — prontos para iniciar a obra ou apresentar ao banco.'],
    ],
    timeline: [
      ['Estudo de viabilidade', '2 a 5 dias'],
      ['Projeto legal e memoriais', '10 a 20 dias'],
      ['Análise da prefeitura', '20 a 60 dias'],
      ['Emissão do alvará', '5 a 10 dias'],
    ],
    docs: ['Matrícula atualizada do terreno', 'Carnê do IPTU', 'Projeto de arquitetura (se houver)', 'Levantamento topográfico (para terrenos em declive)', 'RG/CPF ou contrato social'],
    faq: [
      ['Posso começar a obra enquanto o projeto está em análise?', 'Não. Obra iniciada sem alvará é irregular e pode ser embargada e multada, além de dificultar a aprovação depois. Nosso acompanhamento reduz o tempo de análise justamente para você começar o quanto antes.'],
      ['Projeto de arquitetura já aprovado serve?', 'O projeto de arquitetura é a base, mas a prefeitura analisa o projeto legal, com quadro de áreas, recuos e memorial no formato exigido. Fazemos essa adequação a partir do projeto do seu arquiteto.'],
      ['Quanto tempo a prefeitura demora?', 'Varia por município, porte da obra e período do ano. Em São José dos Campos e Jacareí, processos bem instruídos costumam levar de 20 a 60 dias em análise. Processos com "comunique-se" mal respondidos podem levar o dobro.'],
      ['A aprovação inclui o Habite-se?', 'O Habite-se é emitido ao final da obra, após vistoria. Podemos assumir também a execução ou apenas o acompanhamento técnico para garantir que a obra saia conforme o aprovado.'],
    ],
    related: ['regularizacao-de-imovel', 'reforma-e-obra', 'emissao-de-art'],
  },
  {
    slug: 'emissao-de-art',
    num: '03',
    icon: 'badge',
    title: 'Emissão de ART',
    shortTitle: 'Emissão de ART',
    card: 'Anotação de Responsabilidade Técnica para obras, projetos, reformas em condomínio e laudos. Emitida em 24 a 72 horas, com vistoria quando necessária.',
    tags: ['CREA', 'NBR 16280', '24–72 h'],
    metaTitle: 'Emissão de ART em São José dos Campos e Jacareí — 24 a 72 h | Dadério & Aristides',
    metaDescription: 'ART de execução de obra, projeto, reforma em condomínio e laudo técnico, emitida por engenheiro civil registrado no CREA-SP. Atendimento em São José dos Campos e Jacareí em até 72 h.',
    heroImg: images.docs,
    heroAlt: 'Documentos e notebook sobre a mesa — emissão de ART',
    prazo: '24 a 72 horas',
    lead: 'ART (Anotação de Responsabilidade Técnica) é o documento registrado no CREA que identifica o engenheiro responsável por uma obra, projeto, laudo ou serviço técnico. É obrigatória por lei (Lei 6.496/77) e exigida por prefeituras, bancos, seguradoras, condomínios e no Habite-se. A Dadério & Aristides emite ART de execução, projeto, reforma, laudo e regularização em São José dos Campos e Jacareí, em 24 a 72 horas, com visita técnica quando o serviço exigir.',
    whatIs: [
      'A ART é o que dá "dono técnico" a um serviço de engenharia: ela registra quem responde, perante o CREA e a lei, pela qualidade e segurança daquele trabalho. Sem ART, uma obra não tem responsável — e é por isso que síndicos, bancos, seguradoras e prefeituras a exigem.',
      'Não emitimos ART "de papel". Antes de assinar, avaliamos o serviço, visitamos a obra quando necessário e orientamos o que precisa ser ajustado. É a diferença entre um documento que protege você e um que só cumpre tabela.',
    ],
    when: [
      'Vai fazer <strong>reforma em apartamento ou condomínio</strong> e o síndico pediu ART e plano de reforma (NBR 16280).',
      'A prefeitura exige ART para o <strong>alvará, o Habite-se ou a regularização</strong>.',
      'O banco ou a seguradora pede <strong>responsável técnico</strong> para liberar financiamento ou apólice.',
      'Sua obra está em andamento <strong>sem engenheiro responsável</strong>.',
      'Precisa de ART para <strong>laudo, vistoria, instalação ou manutenção</strong> (elétrica, hidráulica, estrutura).',
      'Um profissional anterior <strong>deixou a obra</strong> e você precisa de nova responsabilidade técnica.',
    ],
    process: [
      ['Contato e briefing', 'Você nos conta o serviço, endereço e finalidade da ART pelo WhatsApp. Em minutos dizemos qual tipo de ART se aplica e o valor.'],
      ['Análise e visita técnica', 'Para obras e reformas, fazemos vistoria para conhecer o que será executado e orientar ajustes de segurança.'],
      ['Emissão no CREA-SP', 'Preenchemos e registramos a ART no sistema do CREA, com recolhimento da taxa e assinatura do responsável.'],
      ['Entrega e acompanhamento', 'Enviamos a ART assinada em PDF. Em reformas de condomínio, entregamos também o plano de reforma e o termo de encerramento ao final.'],
    ],
    timeline: [
      ['Briefing e orçamento', 'até 2 h úteis'],
      ['Visita técnica (quando necessária)', '1 a 2 dias'],
      ['Registro e entrega da ART', '24 a 72 h'],
    ],
    docs: ['Endereço e dados do proprietário/contratante', 'Descrição do serviço ou projeto', 'Projeto ou croqui, se houver', 'Regulamento do condomínio (para reformas)'],
    faq: [
      ['ART e RRT são a mesma coisa?', 'Não. A ART é emitida por engenheiros registrados no CREA; o RRT é o equivalente para arquitetos, registrado no CAU. Prefeituras e condomínios aceitam ambos, conforme a atribuição profissional.'],
      ['Posso emitir ART para uma obra já concluída?', 'Sim, em muitos casos — após vistoria, registramos a ART com o objetivo adequado (por exemplo, laudo ou regularização), o que é comum em processos de Habite-se.'],
      ['Quanto custa uma ART?', 'O valor tem duas partes: a taxa do CREA, definida em tabela federal conforme o valor do contrato, e os honorários do engenheiro pela análise, vistoria e responsabilidade assumida.'],
      ['Qual é a validade da ART?', 'A ART é válida enquanto durar o serviço registrado. Ao final, pode ser baixada com o termo de conclusão — o que fazemos para você.'],
    ],
    related: ['laudo-tecnico', 'reforma-e-obra', 'regularizacao-de-imovel'],
  },
  {
    slug: 'laudo-tecnico',
    num: '04',
    icon: 'clipboard-search',
    title: 'Laudo técnico',
    shortTitle: 'Laudo técnico',
    card: 'Vistoria de imóvel, trincas e infiltrações, laudo cautelar de vizinhança, estrutural e avaliação. Fundamentado, com ART, aceito por seguradoras e justiça.',
    tags: ['Vistoria', 'Cautelar', 'Estrutural'],
    metaTitle: 'Laudo Técnico de Engenharia — SJC e Jacareí | Dadério & Aristides',
    metaDescription: 'Laudo técnico com ART: vistoria de imóvel, trincas e infiltrações, laudo cautelar de vizinhança, estrutural e de avaliação, em São José dos Campos e Jacareí. Entrega em 5 a 15 dias.',
    heroImg: images.sketch,
    heroAlt: 'Mesa de trabalho com instrumentos e anotações técnicas',
    prazo: '5 a 15 dias',
    lead: 'Laudo técnico de engenharia é um documento assinado por engenheiro, com ART, que avalia e atesta as condições de um imóvel ou de um problema específico: trincas, infiltrações, estrutura, vizinhança de obras, estado de conservação ou valor de mercado. A Dadério & Aristides realiza a vistoria, as medições e entrega laudo fundamentado, aceito por seguradoras, condomínios, prefeituras e na justiça, em São José dos Campos e Jacareí, em 5 a 15 dias.',
    whatIs: [
      'Um laudo não é uma opinião — é uma conclusão técnica rastreável: o que foi observado, como foi medido, qual a causa provável e o que deve ser feito. Por isso ele resolve disputas entre vizinhos, protege quem compra ou aluga e sustenta pedidos de seguro ou ações judiciais.',
      'Atendemos tanto pessoas físicas (compra, aluguel, defeito na obra) quanto condomínios, construtoras e advogados, com linguagem clara e registro fotográfico completo.',
    ],
    when: [
      '<strong>Trincas, fissuras ou infiltrações</strong> apareceram e você precisa saber a causa e a gravidade.',
      'Vai <strong>comprar ou alugar</strong> um imóvel e quer um laudo de vistoria antes de assinar.',
      'Uma <strong>obra vizinha</strong> vai começar e você quer registrar o estado atual do seu imóvel (laudo cautelar).',
      'O <strong>condomínio ou o síndico</strong> precisa de laudo estrutural, de fachada ou de manutenção.',
      'Precisa de <strong>avaliação de imóvel</strong> (NBR 14653) para inventário, partilha, garantia ou negociação.',
      'A <strong>seguradora ou o advogado</strong> pediu parecer técnico para sinistro ou processo.',
    ],
    process: [
      ['Briefing', 'Entendemos a finalidade do laudo (para quem será apresentado) e definimos escopo, prazo e valor.'],
      ['Vistoria técnica', 'Visita com registro fotográfico, medições, ensaios simples (umidade, prumo, nível) e entrevista com moradores quando relevante.'],
      ['Análise e diagnóstico', 'Cruzamos as evidências com normas técnicas e projetos existentes para identificar causas e responsabilidades.'],
      ['Laudo assinado + ART', 'Entrega do laudo em PDF, com conclusões, recomendações, anexos fotográficos e ART registrada.'],
    ],
    timeline: [
      ['Briefing e proposta', 'até 24 h'],
      ['Vistoria', '2 a 5 dias'],
      ['Análise e redação', '3 a 10 dias'],
    ],
    docs: ['Endereço e finalidade do laudo', 'Matrícula ou contrato (para avaliação)', 'Projetos existentes, se houver', 'Fotos ou histórico do problema'],
    faq: [
      ['Qual a diferença entre laudo e parecer técnico?', 'O laudo é mais completo e formal, com vistoria detalhada e metodologia descrita; o parecer é uma manifestação técnica mais objetiva sobre um ponto específico. Indicamos o formato adequado ao seu caso.'],
      ['O laudo serve para a justiça?', 'Sim. Laudos com ART, fundamentação e registro fotográfico são aceitos como prova técnica e podem embasar ações de vizinhança, vícios construtivos e sinistros.'],
      ['Preciso estar presente na vistoria?', 'É recomendável que o proprietário ou responsável acompanhe, para apontar os problemas e dar acesso a todos os ambientes.'],
      ['O laudo cautelar protege contra danos da obra vizinha?', 'Ele registra o estado do seu imóvel antes da obra — a prova necessária para responsabilizar a construtora por danos que surgirem depois.'],
    ],
    related: ['emissao-de-art', 'regularizacao-de-imovel', 'drenagem'],
  },
  {
    slug: 'drenagem',
    num: '05',
    icon: 'drop',
    title: 'Drenagem',
    shortTitle: 'Drenagem',
    card: 'Projeto e execução de drenagem para lotes, quintais, garagens, condomínios e chácaras. Fim de alagamento, umidade e erosão.',
    tags: ['Infiltração', 'Retenção', 'Talude'],
    metaTitle: 'Drenagem de Terreno, Quintal e Chácara — SJC e Jacareí | Dadério & Aristides',
    metaDescription: 'Projeto e execução de drenagem pluvial e de lençol freático para residências, condomínios, chácaras e áreas comerciais em São José dos Campos e Jacareí. Poços de infiltração, drenos, canaletas e reservatórios de retenção.',
    heroImg: images.excavator,
    heroAlt: 'Escavadeira executando serviço de terraplenagem e drenagem',
    prazo: '2 a 4 semanas',
    lead: 'Drenagem é o conjunto de soluções de engenharia que capta, conduz e destina corretamente a água da chuva e do lençol freático, evitando alagamentos, infiltrações, erosão e danos à fundação. A Dadério & Aristides projeta e executa drenagem de lotes, quintais, garagens, condomínios, chácaras e áreas comerciais em São José dos Campos e Jacareí — caixas de captação, drenos, canaletas, poços de infiltração e os reservatórios de retenção exigidos pela prefeitura na aprovação de projetos.',
    whatIs: [
      'Água parada não é só incômodo: ela sobe pela parede, ataca a fundação, faz o muro ceder e transforma quintal em lama. No Vale do Paraíba, com chuvas intensas no verão e lençol freático alto nas áreas próximas ao rio, drenagem mal resolvida é uma das principais causas de patologia em residências e chácaras.',
      'Nosso trabalho começa entendendo por onde a água entra, como o solo se comporta e para onde ela pode ir com segurança. Só então dimensionamos a solução — que pode ser simples, como canaletas e caixas de passagem, ou envolver drenos profundos, poços de infiltração e reservatório de retenção.',
    ],
    when: [
      'O <strong>quintal, a garagem ou o subsolo alagam</strong> em chuva forte.',
      'Há <strong>umidade subindo pelas paredes</strong> ou mofo persistente no térreo.',
      'O <strong>muro de arrimo ou talude</strong> apresenta trincas, abaulamento ou deslizamento.',
      'O terreno está em <strong>declive ou recebe água do vizinho</strong> de cima.',
      'A prefeitura exige <strong>reservatório de retenção</strong> ("piscininha") para aprovar o projeto.',
      'Vai construir ou cercar um <strong>lote em chácara ou loteamento</strong> e quer prevenir antes de gastar.',
    ],
    process: [
      ['Diagnóstico', 'Visita para entender o caminho da água, o tipo de solo, o nível do lençol e os pontos de lançamento possíveis.'],
      ['Projeto de drenagem', 'Dimensionamento hidráulico (vazão, declividade, diâmetros, volume de retenção) com planta e memorial — com ART.'],
      ['Execução', 'Nossa equipe executa escavação, assentamento de tubos, caixas, brita, manta geotêxtil e reaterro, com controle de declividade.'],
      ['Teste e entrega', 'Ensaio com água, registro fotográfico e orientação de manutenção. Entregamos o as built e a ART de execução.'],
    ],
    timeline: [
      ['Diagnóstico e proposta', '2 a 5 dias'],
      ['Projeto de drenagem', '5 a 10 dias'],
      ['Execução', '5 a 20 dias'],
    ],
    docs: ['Endereço e fotos do problema (de preferência durante a chuva)', 'Levantamento topográfico, se houver', 'Projeto aprovado da edificação, se houver'],
    faq: [
      ['Drenagem resolve infiltração na parede?', 'Quando a origem é água do solo ou de superfície, sim — resolvida a causa, a impermeabilização passa a funcionar. Se a origem for outra (telhado, tubulação), o diagnóstico aponta isso antes de qualquer obra.'],
      ['Posso jogar a água da chuva na rua ou na rede de esgoto?', 'Na rede de esgoto, nunca. Na sarjeta, apenas dentro dos limites que o município permite; por isso muitas prefeituras exigem infiltração ou retenção no próprio lote. O projeto define o destino correto.'],
      ['Quanto custa uma drenagem residencial?', 'Depende da área, da extensão de drenos e da necessidade de reservatório. Soluções para quintais e garagens são acessíveis; chácaras e condomínios exigem projeto mais robusto. Fazemos proposta após o diagnóstico.'],
      ['Vocês fazem só o projeto ou também executam?', 'Os dois. Projeto e execução pela mesma equipe evita retrabalho e garante que a solução dimensionada seja a que fica no chão.'],
    ],
    related: ['laudo-tecnico', 'reforma-e-obra', 'aprovacao-de-projeto-prefeitura'],
  },
  {
    slug: 'reforma-e-obra',
    num: '06',
    icon: 'hammer',
    title: 'Reforma, projeto e execução de obra',
    shortTitle: 'Reforma e obra',
    card: 'Do projeto executivo ao acabamento, com cronograma, orçamento por etapa e ART. Casas, apartamentos, comércios e galpões.',
    tags: ['Projeto executivo', 'Cronograma', 'Gerenciamento'],
    metaTitle: 'Reforma, Projeto e Execução de Obra — SJC e Jacareí | Dadério & Aristides',
    metaDescription: 'Reformas residenciais e comerciais, ampliações e construção com engenheiro responsável, cronograma e orçamento fechado por etapa. Plano de reforma NBR 16280 para condomínios. São José dos Campos e Jacareí.',
    heroImg: images.driller,
    heroAlt: 'Profissional com capacete executando reforma',
    prazo: '30 dias a 14 meses',
    lead: 'A Dadério & Aristides projeta e executa reformas e obras residenciais e comerciais com responsabilidade técnica: do projeto executivo ao acabamento, com cronograma, orçamento fechado por etapa e ART. Atendemos casas, apartamentos, comércios e galpões em São José dos Campos e Jacareí — incluindo o plano de reforma exigido por condomínios (NBR 16280) e a aprovação na prefeitura quando a obra exige.',
    whatIs: [
      'A maior parte das reformas que dão errado não falha na mão de obra — falha na falta de projeto, de cronograma e de alguém que responda tecnicamente. Nosso modelo é simples: um engenheiro é o seu único ponto de contato, o orçamento é fechado por etapa antes de começar e cada semana você recebe o status com fotos.',
      'Executamos com equipe própria e parceiros homologados, compramos com critério técnico e documentamos tudo: as built, ART, notas e garantias. Você recebe uma obra que pode ser regularizada, vendida ou financiada sem surpresas.',
    ],
    when: [
      '<strong>Reforma completa ou parcial</strong> de casa ou apartamento (cozinha, banheiros, área gourmet, fachada).',
      '<strong>Ampliação</strong>: novo pavimento, edícula, garagem, cobertura.',
      '<strong>Construção nova</strong> em terreno próprio ou em condomínio fechado.',
      '<strong>Adequação comercial</strong>: loja, clínica, escritório, restaurante, galpão.',
      '<strong>Telhado, impermeabilização e estrutura</strong> com problema recorrente.',
      'Quer apenas o <strong>gerenciamento e a fiscalização</strong> de uma obra já contratada.',
    ],
    process: [
      ['Briefing e visita', 'Entendemos o que você quer, o orçamento disponível e as restrições do imóvel e do condomínio.'],
      ['Anteprojeto e orçamento', 'Estudo preliminar com layout e estimativa por etapa. Você decide com números na mão.'],
      ['Projeto executivo e aprovações', 'Detalhamento técnico, compatibilização de instalações, plano de reforma NBR 16280 e aprovação na prefeitura quando necessário.'],
      ['Execução com acompanhamento', 'Cronograma físico-financeiro, relatório semanal com fotos, controle de qualidade e segurança em obra.'],
      ['Entrega e documentação', 'Vistoria final com checklist, as built, ART baixada e garantias — imóvel pronto para regularizar ou registrar.'],
    ],
    timeline: [
      ['Reforma de apartamento', '30 a 60 dias'],
      ['Reforma de casa / ampliação', '60 a 120 dias'],
      ['Adequação comercial', '30 a 90 dias'],
      ['Construção nova', '8 a 14 meses'],
    ],
    docs: ['Fotos e medidas aproximadas do imóvel', 'Projeto existente, se houver', 'Regulamento e horários do condomínio', 'Referências do que você quer'],
    faq: [
      ['O orçamento é fechado?', 'Sim, por etapa, com escopo definido. Alterações solicitadas durante a obra são orçadas à parte e aprovadas antes de executar — sem surpresa no final.'],
      ['Vocês fazem o projeto de arquitetura e interiores?', 'Trabalhamos com arquitetos parceiros ou com o profissional da sua escolha. Nosso papel é garantir que o projeto seja executável, aprovado e entregue.'],
      ['O que é o plano de reforma NBR 16280?', 'É o documento técnico exigido por condomínios para qualquer reforma em unidade: descreve o que será feito, os impactos na estrutura e nas instalações e traz a ART do responsável. Elaboramos e apresentamos ao síndico.'],
      ['Reforma precisa de aprovação na prefeitura?', 'Quando altera área construída, fachada, estrutura ou uso, sim. Avaliamos isso no briefing e, se necessário, cuidamos da aprovação antes de iniciar.'],
    ],
    related: ['aprovacao-de-projeto-prefeitura', 'emissao-de-art', 'drenagem'],
  },
];

export const serviceBySlug = (slug) => services.find((s) => s.slug === slug);

// ----------------------------------------------------------------------------
// CIDADES
// ----------------------------------------------------------------------------
export const cities = [
  {
    slug: 'sao-jose-dos-campos',
    name: 'São José dos Campos',
    short: 'SJC',
    metaTitle: 'Engenharia, Regularização e Obras em São José dos Campos | Dadério & Aristides',
    metaDescription: 'Engenharia civil em São José dos Campos: regularização de imóvel, aprovação de projeto na prefeitura, ART, laudos, drenagem e reformas. Sede no Jardim Aquarius, atendimento em toda a cidade.',
    heroImg: images.whiteBuilding,
    heroAlt: 'Edificação moderna — atuação em São José dos Campos',
    eyebrow: 'Sede · atendimento em toda a cidade',
    h1: 'Engenharia e regularização em São José dos Campos',
    lead: 'A Dadério & Aristides tem sede em São José dos Campos e atende regularização de imóveis, aprovação de projetos na Prefeitura, emissão de ART, laudos técnicos, drenagem e reformas em todas as regiões da cidade — da Zona Sul aos condomínios do Urbanova e do Jardim Aquarius, passando pela Zona Leste, Norte e pelo distrito de Eugênio de Melo. Visita técnica agendada em até 48 horas.',
    intro: [
      'São José dos Campos é uma cidade de engenharia: a maior economia do Vale do Paraíba, polo aeroespacial e tecnológico, com um dos mercados imobiliários mais dinâmicos do interior paulista. Isso se traduz em milhares de imóveis ampliados ao longo das décadas, muitos ainda sem projeto aprovado ou Habite-se, e em uma demanda constante por reformas em apartamentos, casas em condomínio e pontos comerciais.',
      'Conhecemos o código de obras, o zoneamento e a rotina de protocolos da Prefeitura de São José dos Campos. Isso significa processos bem instruídos desde o início — menos "comunique-se", menos idas e vindas e prazos mais curtos para o seu alvará ou Habite-se.',
    ],
    highlights: [
      ['Zona Sul e Jardim Satélite', 'Alta concentração de casas ampliadas sem projeto. Regularização com Habite-se e averbação é o serviço mais procurado.'],
      ['Jardim Aquarius, Urbanova e Jardim Esplanada', 'Casas de alto padrão e condomínios fechados: aprovação de projetos, construção nova, reformas com plano NBR 16280 e laudos.'],
      ['Vila Ema, Vila Adyana e Centro', 'Edifícios residenciais e comerciais: reformas em apartamentos, adequação de salas e lojas, ART e laudos de fachada.'],
      ['Zona Leste, Zona Norte e Eugênio de Melo', 'Galpões, comércios e lotes em expansão: aprovação, drenagem e regularização para alvará de funcionamento.'],
    ],
    districts: ['Jardim Aquarius', 'Urbanova', 'Jardim Esplanada', 'Vila Ema', 'Vila Adyana', 'Jardim Satélite', 'Bosque dos Eucaliptos', 'Jardim Oriente', 'Parque Industrial', 'Centro', 'Jardim das Indústrias', 'Jardim Colinas', 'Vila Industrial', 'Santana', 'Jardim Apolo', 'Eugênio de Melo', 'Putim', 'Campo dos Alemães', 'Jardim Morumbi', 'Vista Verde', 'Jardim Paulista', 'Jardim São Dimas'],
    cityHall: {
      title: 'Prefeitura de São José dos Campos: o que você precisa saber',
      items: [
        'Projetos de construção, ampliação e regularização passam por análise técnica da Prefeitura, que confere zoneamento, recuos, taxa de ocupação, permeabilidade e acessibilidade antes do alvará.',
        'Imóveis com área construída diferente da cadastrada no IPTU costumam ser identificados em vistorias e recadastramentos — regularizar por iniciativa própria evita autuação e costuma custar menos.',
        'Grande parte dos condomínios da cidade exige ART e plano de reforma (NBR 16280) para qualquer intervenção em unidade — inclusive troca de piso e alterações hidráulicas.',
        'Financiamentos imobiliários na cidade exigem matrícula com Habite-se e área averbada; o volume de negócios travados por irregularidade é alto — e resolvível.',
      ],
      // TODO: confirmar com o cliente nomes de secretarias, sistemas de protocolo e programas de anistia vigentes
    },
    testimonial: 0,
    topServices: ['regularizacao-de-imovel', 'aprovacao-de-projeto-prefeitura', 'reforma-e-obra'],
  },
  {
    slug: 'jacarei',
    name: 'Jacareí',
    short: 'Jacareí',
    metaTitle: 'Engenharia, Regularização e Drenagem em Jacareí | Dadério & Aristides',
    metaDescription: 'Engenharia civil em Jacareí: regularização de casas e chácaras, aprovação de projeto na Prefeitura de Jacareí, ART, laudos, drenagem e reformas. Atendimento no Centro, Jardim Paraíba, Vila Branca, Igarapés e região.',
    heroImg: images.house9,
    heroAlt: 'Residência entre árvores — atuação em Jacareí',
    eyebrow: 'A 20 minutos da sede · visita sem custo',
    h1: 'Engenharia, regularização e drenagem em Jacareí',
    lead: 'A Dadério & Aristides atende Jacareí com regularização de imóveis e chácaras, aprovação de projetos na Prefeitura de Jacareí, emissão de ART, laudos técnicos, drenagem e reformas. Cobrimos o Centro, Jardim Paraíba, Vila Branca, Jardim Flórida, Parque Meia Lua, Igarapés, Bandeira Branca, Jardim Colônia e os loteamentos e condomínios ao longo da Dutra e da Carvalho Pinto, com visita técnica sem custo.',
    intro: [
      'Jacareí cresce rápido: novos loteamentos, condomínios e galpões logísticos ao longo da Rodovia Presidente Dutra e da Carvalho Pinto convivem com bairros consolidados, chácaras e sítios em áreas de expansão urbana. É um perfil de cidade em que dois problemas aparecem com frequência: construções e ampliações feitas sem projeto, à espera de regularização, e terrenos com drenagem insuficiente — especialmente nas regiões mais baixas, próximas ao Rio Paraíba do Sul, onde o lençol freático é alto.',
      'Atendemos Jacareí desde 2021, a 20 minutos da nossa sede. Conhecemos as exigências da Prefeitura de Jacareí para aprovação e regularização, as particularidades de chácaras em transição para uso urbano e as soluções de drenagem que funcionam no solo da região.',
    ],
    highlights: [
      ['Centro, Jardim Paraíba e Vila Branca', 'Bairros consolidados com muitos imóveis ampliados ao longo dos anos: regularização, Habite-se e laudos para compra e venda.'],
      ['Igarapés, Bandeira Branca e chácaras', 'Regularização de edificações em chácaras, cercamento, drenagem de lotes grandes e projetos para área de expansão urbana.'],
      ['Jardim Flórida, Parque Meia Lua e Jardim Colônia', 'Casas e sobrados em loteamentos: aprovação de ampliações, reformas com ART e drenagem de quintal e garagem.'],
      ['Eixo Dutra e Carvalho Pinto', 'Galpões, comércios e condomínios novos: aprovação de projetos, adequações comerciais e reservatórios de retenção.'],
    ],
    districts: ['Centro', 'Jardim Paraíba', 'Vila Branca', 'Jardim Flórida', 'Parque Meia Lua', 'Jardim Santa Maria', 'Jardim Colônia', 'Cidade Salvador', 'Igarapés', 'Bandeira Branca', 'Jardim das Indústrias', 'Jardim Coleginho', 'Jardim Terras de São João', 'Parque dos Príncipes', 'Jardim Pereira do Amparo', 'Parque California', 'Jardim Marister', 'São João', 'Jardim Esper', 'Vila Garcia'],
    cityHall: {
      title: 'Prefeitura de Jacareí: o que você precisa saber',
      items: [
        'Construções, ampliações e regularizações dependem de projeto aprovado e alvará da Prefeitura de Jacareí, com análise de zoneamento e das diretrizes do Plano Diretor.',
        'Chácaras e imóveis em áreas de expansão urbana têm regras próprias de parcelamento, recuo e uso — a viabilidade deve ser conferida antes de qualquer obra ou cercamento.',
        'Lotes em regiões próximas ao Rio Paraíba do Sul e a córregos exigem atenção à drenagem e, em alguns casos, a soluções de retenção para aprovação do projeto.',
        'A regularização por iniciativa do proprietário, antes de notificação, costuma ter processo mais simples e custo menor do que a regularização após autuação.',
      ],
      // TODO: confirmar com o cliente nomes de secretarias, sistemas de protocolo e programas de anistia vigentes
    },
    testimonial: 2,
    topServices: ['regularizacao-de-imovel', 'drenagem', 'laudo-tecnico'],
  },
];

export const cityBySlug = (slug) => cities.find((c) => c.slug === slug);

// ----------------------------------------------------------------------------
// PORTFÓLIO — obras ilustrativas (placeholders)
// ----------------------------------------------------------------------------
export const projects = [
  { id: '0147', cat: 'Regularização', title: 'Regularização de residência com edícula', place: 'Jardim Aquarius', city: 'São José dos Campos', year: 2025, area: '280 m²', result: 'Habite-se e averbação em 58 dias', before: images.scaffold, after: images.house1, desc: 'Casa ampliada em três etapas ao longo de 15 anos, sem projeto. Levantamento as built, projeto de regularização, protocolo e Habite-se — imóvel financiável.' },
  { id: '0139', cat: 'Reforma', title: 'Reforma completa de apartamento', place: 'Vila Ema', city: 'São José dos Campos', year: 2024, area: '96 m²', result: 'Entregue em 45 dias · plano NBR 16280', before: images.demolition, after: images.interior1, desc: 'Integração de sala e cozinha, dois banheiros novos e revisão elétrica completa. Plano de reforma aprovado pelo condomínio e ART baixada na entrega.' },
  { id: '0152', cat: 'Drenagem', title: 'Drenagem de lote em chácara', place: 'Igarapés', city: 'Jacareí', year: 2025, area: '1.200 m²', result: 'Poço de infiltração + 84 m de drenos', before: images.earthworks, after: images.house5, desc: 'Lote alagava a cada chuva forte. Diagnóstico de solo, projeto hidráulico, drenos profundos e poço de infiltração. Sem acúmulo de água desde a entrega.' },
  { id: '0118', cat: 'Projeto', title: 'Aprovação e construção de casa térrea', place: 'Urbanova', city: 'São José dos Campos', year: 2023, area: '320 m²', result: 'Alvará em 41 dias · obra em 11 meses', before: images.rebar, after: images.house2, desc: 'Estudo de viabilidade, projeto legal, aprovação na Prefeitura e execução completa em condomínio fechado, com relatório semanal ao proprietário.' },
  { id: '0131', cat: 'Laudo', title: 'Laudo cautelar de vizinhança', place: 'Centro', city: 'Jacareí', year: 2024, area: '14 imóveis', result: 'Vistoria e laudos em 9 dias', before: images.cranes, after: images.house8, desc: 'Registro do estado de 14 imóveis lindeiros antes do início de um edifício. Laudos individuais com ART, aceitos pela construtora e pelo condomínio.' },
  { id: '0144', cat: 'Reforma', title: 'Adequação de clínica e alvará', place: 'Jardim Satélite', city: 'São José dos Campos', year: 2024, area: '180 m²', result: 'Mudança de uso aprovada · obra em 60 dias', before: images.warehouse, after: images.interior2, desc: 'Casa convertida em clínica: mudança de uso na Prefeitura, acessibilidade, instalações e acabamento. Alvará de funcionamento liberado sem pendências.' },
  { id: '0156', cat: 'Regularização', title: 'Regularização de ampliação de sobrado', place: 'Jardim Paraíba', city: 'Jacareí', year: 2025, area: '140 m² averbados', result: 'Processo concluído em 72 dias', before: images.scaffoldWorkers, after: images.house4, desc: 'Segundo pavimento construído sem projeto. Regularização junto à Prefeitura de Jacareí, Habite-se e averbação para venda com financiamento.' },
  { id: '0122', cat: 'Reforma', title: 'Telhado novo e impermeabilização', place: 'Jardim Esplanada', city: 'São José dos Campos', year: 2023, area: '210 m²', result: 'Fim das infiltrações · 5 anos de garantia', before: images.carpenter, after: images.house6, desc: 'Laudo de infiltração, substituição de estrutura e telhas, calhas e impermeabilização de lajes. Executado em 24 dias com ART.' },
];

// ----------------------------------------------------------------------------
// DEPOIMENTOS — FICTÍCIOS (placeholders para o protótipo)
// ----------------------------------------------------------------------------
export const testimonials = [
  { text: 'Comprei uma casa com ampliação sem averbar e o banco travou o financiamento. Em 50 dias o Herllon resolveu tudo com a prefeitura e o cartório. Só mandei os documentos pelo WhatsApp.', name: 'Mariana S.', place: 'Jardim Aquarius · São José dos Campos', service: 'Regularização', initials: 'MS' },
  { text: 'Reforma do apartamento entregue no prazo, com ART e o plano de reforma que o condomínio exigia. Relatório toda semana com fotos. Zero dor de cabeça com o síndico.', name: 'Ricardo T.', place: 'Vila Ema · São José dos Campos', service: 'Reforma', initials: 'RT' },
  { text: 'Nossa chácara alagava toda chuva forte. Fizeram o diagnóstico, o projeto de drenagem e executaram em duas semanas. Já passou um verão inteiro e não entrou mais água.', name: 'Família Almeida', place: 'Igarapés · Jacareí', service: 'Drenagem', initials: 'FA' },
];

// ----------------------------------------------------------------------------
// NAVEGAÇÃO
// ----------------------------------------------------------------------------
export const nav = [
  { label: 'Serviços', href: 'index.html#servicos', children: services.map((s) => ({ label: s.title, href: `${s.slug}.html`, num: s.num })) },
  { label: 'Obras', href: 'obras.html' },
  { label: 'Cidades', href: 'sao-jose-dos-campos.html', children: cities.map((c) => ({ label: c.name, href: `${c.slug}.html` })) },
  { label: 'Sobre', href: 'sobre.html' },
  { label: 'Contato', href: 'contato.html' },
];
