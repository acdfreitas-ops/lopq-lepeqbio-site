const researchers = [
  {
    name: 'Antonio Carlos Daltro de Freitas',
    role: 'Coordenador · Pesquisador',
    lab: 'LOPQ',
    areas: 'Termodinâmica · Biomassa · SCWG · Inteligência Artificial',
    initials: 'AF',
    sigaa: 'https://sigaa.ufma.br/sigaa/public/docente/portal.jsf?siape=2227888&lc=en_US'
  },
  {
    name: 'Valter Nunes Trindade Junior',
    role: 'Pesquisador',
    lab: 'LOPQ · LEPEQBIO',
    areas: 'Adsorção · Simulação · Engenharia de Processos',
    initials: 'VT',
    sigaa: 'https://sigaa.ufma.br/sigaa/public/docente/portal.jsf?siape=2269327&lc=en_US'
  },
  {
    name: 'Annamaria Doria Souza Vidotti',
    role: 'Pesquisadora',
    lab: 'LEPEQBIO',
    areas: 'Bioprocessos · Microalgas · Fermentação',
    initials: 'AV',
    sigaa: 'https://sigaa.ufma.br/sigaa/public/docente/portal.jsf?siape=2268838&lc=pt_BR'
  },
  {
    name: 'Jaiver Efren Jaimes Figueroa',
    role: 'Pesquisador',
    lab: 'LOPQ · LEPEQBIO',
    areas: 'Biorrefinaria · Biomassa · Modelagem · Biocombustíveis',
    initials: 'JF',
    sigaa: 'https://sigaa.ufma.br/sigaa/public/docente/portal.jsf?siape=2274973'
  }
]

const research = [
  ['🌱', 'Biomassa & Bioenergia', 'Valorização de resíduos e biomassas amazônicas.'],
  ['⚗️', 'Engenharia de Processos', 'Modelagem, simulação, termodinâmica e otimização.'],
  ['🤖', 'Inteligência Artificial', 'ANN, Machine Learning e modelos preditivos.'],
  ['🧬', 'Biotecnologia', 'Microalgas, fermentação, bioprocessos e biorreatores.'],
  ['♻️', 'CO₂ & Sustentabilidade', 'Captura, adsorção, utilização de CO₂ e ACV.'],
  ['💻', 'Modelagem Computacional', 'TeS, GCMC, simulação e modelos científicos.']
]

const projects = [
  {
    researcher: 'Antonio Carlos Daltro de Freitas',
    initials: 'AF',
    lab: 'LOPQ',
    code: 'PVCET4932-2026',
    title: 'Redes Neurais Artificiais e Aprendizado de Máquina como Ferramentas de Modelagem e Previsão em Processos Químicos Multivariáveis',
    area: 'Processos Orgânicos',
    year: '2026',
    tags: ['Inteligência Artificial', 'Redes Neurais', 'Machine Learning']
  },
  {
    researcher: 'Antonio Carlos Daltro de Freitas',
    initials: 'AF',
    lab: 'LOPQ · LEPEQBIO',
    code: 'PVCET4938-2026',
    title: 'Biocaptura de CO₂ por microalgas: produção integrada de bioprodutos e energia',
    area: 'Processos Bioquímicos',
    year: '2026',
    tags: ['Microalgas', 'CO₂', 'Bioprodutos']
  },
  {
    researcher: 'Antonio Carlos Daltro de Freitas',
    initials: 'AF',
    lab: 'LOPQ',
    code: 'PVCET3413-2023',
    title: 'ESTUDO DE VIABILIDADE TERMODINÂMICA DA TRANSFORMAÇÃO TERMOQUÍMICA DE RESÍDUOS AGROINDUSTRIAIS EM HIDROGÊNIO UTILIZANDO METODOLOGIAS DE OTIMIZAÇÃO GLOBAL',
    area: 'Tratamentos e Aproveitamento de Rejeitos',
    year: '2023',
    tags: ['Termodinâmica', 'Biomassa', 'Hidrogênio']
  },
  {
    researcher: 'Annamaria Doria Souza Vidotti',
    initials: 'AV',
    lab: 'LEPEQBIO',
    code: 'PVCET4932-2026',
    title: 'Redes Neurais Artificiais e Aprendizado de Máquina como Ferramentas de Modelagem e Previsão em Processos Químicos Multivariáveis',
    area: 'Processos Orgânicos',
    year: '2026',
    tags: ['Inteligência Artificial', 'Redes Neurais', 'Machine Learning']
  },

  {
    researcher: 'Annamaria Doria Souza Vidotti',
    initials: 'AV',
    lab: 'LEPEQBIO',
    code: 'PVCET4938-2026',
    title: 'Biocaptura de CO₂ por microalgas: produção integrada de bioprodutos e energia',
    area: 'Processos Bioquímicos',
    year: '2026',
    tags: ['Microalgas', 'CO₂', 'Bioprodutos']
  },
  {
    researcher: 'Valter Nunes Trindade Junior',
    initials: 'VT',
    lab: 'LOPQ · LEPEQBIO',
    code: 'PVCET5038-2026',
    title: 'Formação de sistemas bifásicos em misturas contendo água, compostos orgânicos e cloreto de cálcio',
    area: 'Operações de Separação e Mistura',
    year: '2026',
    tags: ['Sistemas Bifásicos', 'Separação', 'Simulação']
  },
  {
    researcher: 'Valter Nunes Trindade Junior',
    initials: 'VT',
    lab: 'LOPQ · LEPEQBIO',
    code: 'PVCET5411-2026',
    title: 'INFLUÊNCIA DA DEGRADAÇÃO DO ABACATE NA QUALIDADE DO ÓLEO EXTRAÍDO E SUA APLICAÇÃO EM BIODIESEL',
    area: 'Óleos',
    year: '2026',
    tags: ['Óleos', 'Abacate', 'Biodiesel']
  },
  {
    researcher: 'Valter Nunes Trindade Junior',
    initials: 'VT',
    lab: 'LOPQ · LEPEQBIO',
    code: 'PVCET3478-2023',
    title: 'Avaliação técnico econômica de processos: biorrefinarias',
    area: 'Processos Orgânicos',
    year: '2023',
    tags: ['Biorrefinaria', 'Avaliação Econômica', 'Processos']
  },

  {
    researcher: 'Jaiver Efren Jaimes Figueroa',
    initials: 'JF',
    lab: 'LOPQ · LEPEQBIO',
    code: 'PVCET4985-2026',
    title: 'Hidrogênio Verde como Vetor de Transição Energética na Indústria do Alumínio: Projeto Piloto de Substituição de Combustíveis Fósseis e Mitigação de CO₂ no Maranhão',
    area: 'Processos Industriais de Engenharia Química',
    year: '2026',
    tags: ['Hidrogênio Verde', 'CO₂', 'Indústria']
  },
  {
    researcher: 'Jaiver Efren Jaimes Figueroa',
    initials: 'JF',
    lab: 'LOPQ · LEPEQBIO',
    code: 'PICET4406-2025',
    title: 'PROGRAMA DE QUALIDADE DA GRADUAÇÃO: MELHORIA DE LABORATÓRIOS E INCENTIVO AO ENSINO',
    area: 'Interdisciplinar',
    year: '2025',
    tags: ['Ensino', 'Laboratórios', 'Graduação']
  },
  {
    researcher: 'Jaiver Efren Jaimes Figueroa',
    initials: 'JF',
    lab: 'LOPQ · LEPEQBIO',
    code: 'PICET4411-2024',
    title: 'Programa multidisciplinar de formação de recursos humanos em áreas de interesse do setor do petróleo - PRH 54.1',
    area: 'Engenharia Química',
    year: '2024',
    tags: ['PRH 54.1', 'Petróleo', 'Formação']
  },
  {
    researcher: 'Jaiver Efren Jaimes Figueroa',
    initials: 'JF',
    lab: 'LOPQ · LEPEQBIO',
    code: 'PVCET3495-2023',
    title: 'MODELAGEM DE CRESCIMENTO CELULAR E CONSUMO DE SUBSTRATO DE CULTIVOS DE MICROALGAS',
    area: 'Produtos Naturais',
    year: '2023',
    tags: ['Microalgas', 'Modelagem', 'Bioprocessos']
  }
]
const publications = [
  {
    year: '2026',
    type: 'Artigo científico',
    journal: 'Starch / Stärke',
    title:
      'Supercritical Water Gasification of Cassava Starch as a Model Component of Cassava Wastewater: Thermodynamic and Experimental Analysis',
    authorsGroup: [
      'Antonio Carlos Daltro de Freitas'
    ],
    doi: '10.1002/star.70250',
    link: 'https://doi.org/10.1002/star.70250',
    tags: ['SCWG', 'Hidrogênio', 'Biomassa', 'Termodinâmica']
  },

  {
    year: '2026',
    type: 'Artigo científico',
    journal: 'Chemical Engineering Transactions',
    title:
      'Experimental and Thermodynamic Assessment of Caryocar Brasiliense (Pequi) Stone for Hydrogen Production via Supercritical Water Gasification',
    authorsGroup: [
      'Antonio Carlos Daltro de Freitas',
      'Annamaria Doria Souza Vidotti'
    ],
    doi: '10.3303/CET26125025',
    link: 'https://doi.org/10.3303/CET26125025',
    tags: ['Pequi', 'SCWG', 'Hidrogênio', 'Biomassa']
  },

  {
    year: '2026',
    type: 'Trabalho completo em congresso',
    journal: 'COBICET 2026',
    title:
      'Avaliação do efeito do binômio concentração de solvente x temperatura na extração de pigmentos da microalga Chlorella vulgaris em regime autotrófico',
    authorsGroup: [
      'Antonio Carlos Daltro de Freitas',
      'Annamaria Doria Souza Vidotti'
    ],
    doi: '10.29327/27640582.1603277',
    link:
      'https://www.even3.com.br/anais/cobicet2026-628540/1603277-avaliacao-do-efeito-do-binomio-concentracao-de--solvente-x-temperatura-na-extracao-de-pigmentos-da--microalga-ch/',
    tags: ['Microalgas', 'Pigmentos', 'Bioprocessos', 'Extração']
  },

  {
    year: '2026',
    type: 'Trabalho completo em congresso',
    journal: 'COBICET 2026',
    title:
      'Uso de redes neurais artificiais na estimativa de hidrogênio em ligas de alumínio em ambiente industrial',
    authorsGroup: [
      'Antonio Carlos Daltro de Freitas',
      'Annamaria Doria Souza Vidotti'
    ],
    doi: '10.29327/27640582.1589279',
    link:
      'https://www.even3.com.br/anais/cobicet2026-628540/1589279-uso-de-redes-neurais-artificiais-na-estimativa-de-hidrogenio-em-ligas-de-aluminio-em-ambiente-industrial/',
    tags: ['Inteligência Artificial', 'Redes Neurais', 'Hidrogênio', 'ML']
  },

  {
    year: '2026',
    type: 'Artigo científico',
    journal: 'Chemical Engineering Transactions',
    title:
      'Gasification of Agricultural Waste from Maranhão, Brazil: Process Simulation',
    authorsGroup: [
      'Jaiver Efren Jaimes Figueroa'
    ],
    doi: '10.3303/CET26125023',
    link: 'https://doi.org/10.3303/CET26125023',
    tags: ['Gaseificação', 'Biomassa', 'Maranhão', 'Simulação']
  },

  {
    year: '2026',
    type: 'Artigo científico',
    journal: 'Chemical Engineering Transactions',
    title:
      'Syngas Production from Biomass in a Fixed Bed Gasifier using Aspen Plus™: Modelling and Simulation',
    authorsGroup: [
      'Jaiver Efren Jaimes Figueroa'
    ],
    doi: '10.3303/CET26125034',
    link: 'https://doi.org/10.3303/CET26125034',
    tags: ['Syngas', 'Biomassa', 'Aspen Plus', 'Modelagem']
  },

  {
    year: '2026',
    type: 'Publicação em repositório',
    journal: 'Zenodo',
    title:
      'Regressão de parâmetros NRTL para misturas de xileno: uma análise de robustez em sistemas de baixa volatilidade',
    authorsGroup: [
      'Valter Nunes Trindade Junior'
    ],
    doi: '10.5281/zenodo.19594437',
    link: 'https://doi.org/10.5281/zenodo.19594437',
    tags: ['NRTL', 'Equilíbrio de Fases', 'Modelagem']
  },

  {
    year: '2026',
    type: 'Publicação em repositório',
    journal: 'Zenodo',
    title:
      'Cálculo de equilíbrio líquido-líquido pela minimização da energia de Gibbs no sistema metanol + acrilonitrila + água',
    authorsGroup: [
      'Valter Nunes Trindade Junior'
    ],
    doi: '10.5281/zenodo.19500458',
    link: 'https://doi.org/10.5281/zenodo.19500458',
    tags: ['Equilíbrio Líquido-Líquido', 'Energia de Gibbs', 'Termodinâmica']
  },

  {
    year: '2026',
    type: 'Publicação em repositório',
    journal: 'Zenodo',
    title:
      'Adsorção de azul de metileno em meio aquoso com carvão de endocarpo do coco babaçu',
    authorsGroup: [
      'Antonio Carlos Daltro de Freitas',
      'Valter Nunes Trindade Junior'
    ],
    doi: '10.5281/zenodo.22896467',
    link: 'https://doi.org/10.5281/zenodo.22896467',
    tags: ['Adsorção', 'Biochar', 'Babaçu', 'Tratamento de Água']
  }
]

export default function Home() {
  return <>
    <header className="header">
      <div className="brand">
  <img src="/images/ufma.png" alt="UFMA - Universidade Federal do Maranhão" />
</div>

<div className="labBrand lopq">
  <img src="/images/LOPQ.png" alt="LOPQ - Laboratório de Otimização de Processos Químicos" />
</div>

<div className="labBrand lepeq">
  <img src="/images/lepeqbio.png" alt="LEPEQBIO - Laboratório de Engenharia de Processos Químicos e Biotecnológicos" />
</div>
      <nav><a href="#inicio">Início</a><a href="#laboratorios">Laboratórios</a><a href="#pesquisa">Pesquisa</a><a href="#projetos">Projetos</a><a href="#equipe">Pesquisadores</a><a href="#publicacoes">Publicações</a><a href="#software">Software & Dados</a><a href="#contato">Contato</a></nav>
    </header>

    <main>
      <section
  id="inicio"
  className="hero"
  style={{ backgroundImage: "url('/images/hero-banner.png')" }}
>
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">UFMA · ENGENHARIA DE PROCESSOS</p>
          <h1>Engenharia, Biotecnologia e <em>Inteligência Artificial</em> para processos sustentáveis</h1>
          <p>Pesquisa científica aplicada à transformação de biomassa, desenvolvimento de bioprocessos, modelagem computacional e otimização de processos químicos e biotecnológicos.</p>
          <div className="actions"><a className="btn primary" href="#laboratorios">Conheça nossos laboratórios →</a><a className="btn ghost" href="#pesquisa">Conheça nossa pesquisa →</a></div>
        </div>
      </section>

     <section id="laboratorios" className="section labs">

  <div className="sectionHead">
    <p className="eyebrow">NOSSOS LABORATÓRIOS</p>
    <h2>Pesquisa integrada em processos químicos e biotecnológicos</h2>
    <p>
      Dois laboratórios, uma abordagem multidisciplinar para transformar
      conhecimento científico em soluções tecnológicas sustentáveis.
    </p>
  </div>

  <div className="labsGrid">

    <article className="labCard lopqCard">

      <div className="labLogo">
        <img
          src="/images/LOPQ.png"
          alt="LOPQ - Laboratório de Otimização de Processos Químicos"
        />
      </div>

      <div className="labNumber">01</div>

      <h2>LOPQ</h2>

      <h3>
        Laboratório de Otimização de Processos Químicos
      </h3>

      <p>
        Pesquisa em modelagem, simulação, termodinâmica, otimização e
        inteligência artificial aplicadas a processos químicos e à
        valorização de biomassas.
      </p>

      <div className="labTags">
        <span>Biomassa</span>
        <span>SCWG</span>
        <span>H₂</span>
        <span>Termodinâmica</span>
        <span>IA</span>
      </div>

      <a href="#pesquisa" className="labLink">
        Conheça o LOPQ →
      </a>

    </article>


    <article className="labCard lepeqCard">

      <div className="labLogo">
        <img
          src="/images/lepeqbio.png"
          alt="LEPEQBIO - Laboratório de Engenharia de Processos Químicos e Biotecnológicos"
        />
      </div>

      <div className="labNumber">02</div>

      <h2>LEPEQBIO</h2>

      <h3>
        Laboratório de Engenharia de Processos Químicos e Biotecnológicos
      </h3>

      <p>
        Pesquisa e desenvolvimento de processos químicos e biotecnológicos,
        com foco em bioprocessos, microalgas, biorrefinaria e tecnologias
        sustentáveis.
      </p>

      <div className="labTags">
        <span>Bioprocessos</span>
        <span>Microalgas</span>
        <span>Biorrefinaria</span>
        <span>CO₂</span>
        <span>Biotecnologia</span>
      </div>

      <a href="#pesquisa" className="labLink">
        Conheça o LEPEQBIO →
      </a>

    </article>

  </div>

</section>

<section id="pesquisa" className="section researchSection">

  <div className="sectionHead researchHeader">
    <p className="eyebrow">ÁREAS E PROJETOS DE PESQUISA</p>

    <h2>
      Ciência, engenharia e tecnologia para processos sustentáveis
    </h2>

    <p>
      As pesquisas do LOPQ e do LEPEQBIO integram engenharia química,
      biotecnologia, caracterização experimental, modelagem computacional
      e inteligência artificial para o desenvolvimento de processos e
      tecnologias sustentáveis.
    </p>
  </div>


  <div className="researchGrid">

    <article className="researchCard">

      <div className="researchTop">
        <img
          src="/images/research/biochar.png"
          alt="Produção de Biochar"
        />
        <span>01</span>
      </div>

      <h3>Produção de Biochar</h3>

      <p>
        Conversão termoquímica de biomassas e resíduos para produção
        de biochar e materiais carbonáceos destinados a aplicações
        ambientais, energéticas e tecnológicas.
      </p>

      <div className="researchTags">
        <span>Biomassa</span>
        <span>Biochar</span>
        <span>Pirólise</span>
      </div>

      <a href="#projetos" className="researchLink">
        Ver projetos →
      </a>

    </article>


    <article className="researchCard">

      <div className="researchTop">
        <img
          src="/images/research/termodinamica.png"
          alt="Avaliação Termodinâmica de Processos"
        />
        <span>02</span>
      </div>

      <h3>Avaliação Termodinâmica de Processos</h3>

      <p>
        Avaliação do equilíbrio químico, energia de Gibbs,
        propriedades termodinâmicas e desempenho de processos
        de conversão de biomassa e sistemas químicos.
      </p>

      <div className="researchTags">
        <span>Termodinâmica</span>
        <span>Equilíbrio</span>
        <span>SCWG</span>
      </div>

      <a href="#projetos" className="researchLink">
        Ver projetos →
      </a>

    </article>


    <article className="researchCard">

      <div className="researchTop">
        <img
          src="/images/research/modelagem.png"
          alt="Modelagem e Simulação"
        />
        <span>03</span>
      </div>

      <h3>Modelagem e Simulação</h3>

      <p>
        Desenvolvimento de modelos matemáticos e computacionais
        para simulação, previsão, otimização e análise de processos
        químicos e biotecnológicos.
      </p>

      <div className="researchTags">
        <span>TeS</span>
        <span>GCMC</span>
        <span>Simulação</span>
        <span>Python</span>
      </div>

      <a href="#projetos" className="researchLink">
        Ver projetos →
      </a>

    </article>


    <article className="researchCard">

      <div className="researchTop">
        <img
          src="/images/research/inteligencia-artificial.png"
          alt="Inteligência Artificial e Redes Neurais"
        />
        <span>04</span>
      </div>

      <h3>Inteligência Artificial e Redes Neurais</h3>

      <p>
        Desenvolvimento e aplicação de redes neurais artificiais,
        machine learning e modelos preditivos em processos químicos
        e biotecnológicos.
      </p>

      <div className="researchTags">
        <span>ANN</span>
        <span>Machine Learning</span>
        <span>Predição</span>
      </div>

      <a href="#projetos" className="researchLink">
        Ver projetos →
      </a>

    </article>


    <article className="researchCard">

      <div className="researchTop">
        <img
          src="/images/research/adsorcao.png"
          alt="Adsorção"
        />
        <span>05</span>
      </div>

      <h3>Adsorção</h3>

      <p>
        Investigação experimental e computacional da adsorção
        de gases e contaminantes utilizando biochar, materiais
        porosos e outros materiais adsorventes.
      </p>

      <div className="researchTags">
        <span>Adsorção</span>
        <span>Biochar</span>
        <span>GCMC</span>
      </div>

      <a href="#projetos" className="researchLink">
        Ver projetos →
      </a>

    </article>


    <article className="researchCard">

      <div className="researchTop">
        <img
          src="/images/research/fotocatalise.png"
          alt="Fotocatálise"
        />
        <span>06</span>
      </div>

      <h3>Fotocatálise</h3>

      <p>
        Desenvolvimento e avaliação de processos fotocatalíticos
        para tratamento ambiental, transformação de contaminantes
        e desenvolvimento de tecnologias de remediação.
      </p>

      <div className="researchTags">
        <span>Fotocatálise</span>
        <span>Tratamento</span>
        <span>Remediação</span>
      </div>

      <a href="#projetos" className="researchLink">
        Ver projetos →
      </a>

    </article>


    <article className="researchCard">

      <div className="researchTop">
        <img
          src="/images/research/microalgas.png"
          alt="Microalgas e Bioprocessos"
        />
        <span>07</span>
      </div>

      <h3>Microalgas e Bioprocessos</h3>

      <p>
        Cultivo e utilização de microalgas, captura biológica
        de carbono, produção de biomassa e desenvolvimento,
        modelagem e otimização de bioprocessos.
      </p>

      <div className="researchTags">
        <span>Microalgas</span>
        <span>Bioprocessos</span>
        <span>CO₂</span>
      </div>

      <a href="#projetos" className="researchLink">
        Ver projetos →
      </a>

    </article>


    <article className="researchCard">

      <div className="researchTop">
        <img
          src="/images/research/co2.png"
          alt="Captura e Utilização de CO₂"
        />
        <span>08</span>
      </div>

      <h3>Captura e Utilização de CO₂</h3>

      <p>
        Desenvolvimento e avaliação de estratégias para captura,
        adsorção e utilização de CO₂ utilizando materiais carbonáceos,
        processos químicos e tecnologias biológicas.
      </p>

      <div className="researchTags">
        <span>CO₂</span>
        <span>Captura</span>
        <span>Adsorção</span>
        <span>Utilização</span>
      </div>

      <a href="#projetos" className="researchLink">
        Ver projetos →
      </a>

    </article>

  </div>

</section>
      <section className="stats"><div><strong>2</strong><span>Laboratórios</span></div><div><strong>4</strong><span>Pesquisadores</span></div><div><strong>∞</strong><span>Possibilidades de pesquisa</span></div><div><strong>UFMA</strong><span>Maranhão · Brasil</span></div></section>

     <section id="projetos" className="section projectsSection">

  <div className="sectionHead projectsHeader">
    <p className="eyebrow">PESQUISA EM ANDAMENTO</p>

    <h2>Projetos de Pesquisa</h2>

    <p>
      Projetos desenvolvidos pelos pesquisadores do LOPQ e LEPEQBIO
      em engenharia de processos, biotecnologia, modelagem,
      termodinâmica e tecnologias sustentáveis.
    </p>
  </div>

  <div className="projectsResearchers">

  {[
    'Antonio Carlos Daltro de Freitas',
    'Annamaria Doria Souza Vidotti',
    'Valter Nunes Trindade Junior',
    'Jaiver Efren Jaimes Figueroa'
  ].map((researcherName) => {

    const researcherProjects = projects.filter(
      project => project.researcher === researcherName
    );

    const researcher = researcherProjects[0];

    return (
      <div
        className="researcherProjects"
        key={researcherName}
      >
          <div className="researcherProjectsHeader">

            <div className="researcherAvatar">
              {researcher.initials}
            </div>

            <div>
              <p className="eyebrow">
                PESQUISADOR
              </p>

              <h3>
                {researcherName}
              </h3>

              <span>
                {researcher.lab}
              </span>
            </div>

            <div className="projectCount">
              <strong>
                {researcherProjects.length}
              </strong>

              <span>
                {researcherProjects.length === 1
                  ? 'projeto'
                  : 'projetos'}
              </span>
            </div>

          </div>

          <div className="projectsGrid">

            {researcherProjects.map((project) => (

              <article
                className="researchProjectCard"
                key={project.code}
              >

                <div className="projectTop">

                  <span className="projectCode">
                    {project.code}
                  </span>

                  <span className="projectYear">
                    {project.year}
                  </span>

                </div>

                <h4>
                  {project.title}
                </h4>

                <div className="projectArea">
                  {project.area}
                </div>

                <div className="projectTags">

                  {project.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

                <a
                  href="#contato"
                  className="projectLink"
                >
                  Ver projeto →
                </a>

              </article>

            ))}

          </div>

        </div>
      );
    })}

  </div>

</section>

    <section id="software" className="section split">

  {/* SOFTWARE */}
  <div>

    <p className="eyebrow">
      TECNOLOGIA CIENTÍFICA
    </p>

    <h2>
      Software & Dados
    </h2>

    <div className="softwareGrid">

      <article className="softwareCard">

        <div className="softwareIcon">
          TeS
        </div>

        <b>
          TeS
        </b>

        <span>
          Thermodynamic Equilibrium Simulation
        </span>

        <p>
          Software open source para simulação de equilíbrio
          termodinâmico e análise de sistemas reacionais,
          baseado na minimização da energia de Gibbs.
        </p>

        <small>
          Python · Thermodynamics · Gibbs Energy · Open Source
        </small>

        <a
          href="https://pypi.org/project/tes-thermo/"
          target="_blank"
          rel="noopener noreferrer"
          className="softwareLink"
        >
          Acessar no PyPI →
        </a>

      </article>

    </div>

  </div>


  {/* PUBLICAÇÕES */}
  <div
    id="publicacoes"
    className="pubs"
  >

    <p className="eyebrow">
      PRODUÇÃO CIENTÍFICA
    </p>

    <h2>
      Publicações
    </h2>

    <p className="publicationsIntro">
      Produção científica dos pesquisadores do LOPQ e LEPEQBIO
      a partir de 2026.
    </p>

    <div className="publicationsList">

      {publications.map((publication) => (

        <article
          className="publicationItem"
          key={publication.doi}
        >

          <h3>
            {publication.title}
          </h3>

          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="publicationDoi"
          >
            DOI: {publication.doi}
          </a>

        </article>

      ))}

    </div>

  </div>

</section>
     <section id="equipe" className="section team">

  <div className="sectionHead teamHeader">

    <p className="eyebrow">
      NOSSA EQUIPE
    </p>

    <h2>
      Pesquisadores
    </h2>

    <p>
      Equipe multidisciplinar dedicada ao desenvolvimento,
      modelagem, otimização e aplicação de processos químicos,
      biotecnológicos e computacionais.
    </p>

  </div>


  <div className="researchersGrid">

    {researchers.map((researcher) => (

      <article
        className="researcherCard"
        key={researcher.name}
      >

        <div className="researcherCardTop">

          <div className="researcherAvatar">
            {researcher.initials}
          </div>

          <div className="researcherLab">
            {researcher.lab}
          </div>

        </div>


        <div className="researcherInfo">

          <h3>
            {researcher.name}
          </h3>

          <strong>
            {researcher.role}
          </strong>

          <p>
            {researcher.areas}
          </p>

        </div>


        <div className="researcherActions">

         <a
  href={researcher.sigaa}
  target="_blank"
  rel="noopener noreferrer"
  className="researcherLink"
>
  Perfil no SIGAA →
</a>

        </div>

      </article>

    ))}

  </div>

</section>
    </main>

    <footer id="contato">

  <div className="footerMain">

    <div className="footerAbout">

      <div className="footerBrand">
        LOPQ <span>+</span> LEPEQBIO
      </div>

      <p className="footerInstitution">
        Laboratórios de Pesquisa e Otimização em Engenharia de Processos
        Químicos e Biotecnológicos 
      </p>

      <p>
        Universidade Federal do Maranhão ·
        São Luís, Maranhão, Brasil
      </p>

      <p className="footerInnovation">
        <strong>Inovação que transforma ciência em soluções.</strong>
        <br />
        Desenvolvemos conhecimento, tecnologias e processos
        para uma indústria mais sustentável, inteligente e eficiente.
      </p>

    </div>


    <div className="footerLinks">

      <b>Pesquisadores</b>

      <a
        href="#equipe"
      >
        Equipe de pesquisa
      </a>

      <a
        href="#projetos"
      >
        Projetos de pesquisa
      </a>

      <a
        href="#publicacoes"
      >
        Publicações
      </a>

    </div>


    <div className="footerLattes">

  <b>Currículos Lattes</b>

  <a
    href="http://lattes.cnpq.br/2974122116392210"
    target="_blank"
    rel="noopener noreferrer"
  >
    Antonio Carlos Daltro de Freitas →
  </a>

  <a
    href="http://lattes.cnpq.br/5869142387431029"
    target="_blank"
    rel="noopener noreferrer"
  >
    Valter Nunes Trindade Junior →
  </a>

  <a
    href="http://lattes.cnpq.br/5290468802716394"
    target="_blank"
    rel="noopener noreferrer"
  >
    Annamaria Doria Souza Vidotti →
  </a>

  <a
    href="http://lattes.cnpq.br/6516022083058455"
    target="_blank"
    rel="noopener noreferrer"
  >
    Jaiver Efren Jaimes Figueroa →
  </a>

</div>
</div>

   <div className="footerBottom">

    <span>
      © 2026 LOPQ · LEPEQBIO · UFMA
    </span>

    <span>
      Engenharia · Ciência · Tecnologia · Inovação
    </span>

  </div>

</footer>

  </>
}