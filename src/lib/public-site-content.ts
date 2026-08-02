import type { SupportedLanguage } from './i18n';

export type LocalisedText = Record<SupportedLanguage, string>;

export interface PageLink {
  label: LocalisedText;
  href: string;
  external?: boolean;
}

export interface PageSection {
  heading: LocalisedText;
  paragraphs?: LocalisedText[];
  bullets?: LocalisedText[];
  links?: PageLink[];
}

export interface PublicPageDefinition {
  id: string;
  path: string;
  title: LocalisedText;
  eyebrow: LocalisedText;
  summary: LocalisedText;
  description: LocalisedText;
  status?: LocalisedText;
  effectiveDate?: string;
  printable?: boolean;
  legalDocument?: boolean;
  sections: PageSection[];
}

export const L = (en: string, cy: string, pt: string, es: string, fr: string): LocalisedText => ({ en, cy, pt, es, fr });

export const uiText = {
  home: L('Home', 'Hafan', 'Início', 'Inicio', 'Accueil'),
  about: L('About', 'Amdanom', 'Sobre', 'Acerca de', 'À propos'),
  brands: L('Brands and services', 'Brandiau a gwasanaethau', 'Marcas e serviços', 'Marcas y servicios', 'Marques et services'),
  structure: L('Group structure', 'Strwythur y grŵp', 'Estrutura do grupo', 'Estructura del grupo', 'Structure du groupe'),
  corporate: L('Corporate', 'Corfforaethol', 'Corporativo', 'Corporativo', 'Entreprise'),
  trustCentre: L('Trust and governance', 'Ymddiriedaeth a llywodraethu', 'Confiança e governação', 'Confianza y gobernanza', 'Confiance et gouvernance'),
  supportCentre: L('Help and support', 'Cymorth a chefnogaeth', 'Ajuda e suporte', 'Ayuda y soporte', 'Aide et assistance'),
  serviceStatus: L('Service status', 'Statws gwasanaeth', 'Estado do serviço', 'Estado del servicio', 'État du service'),
  announcements: L('Announcements', 'Cyhoeddiadau', 'Anúncios', 'Anuncios', 'Annonces'),
  partner: L('Partner with us', 'Partnerwch â ni', 'Seja nosso parceiro', 'Colabore con nosotros', 'Devenir partenaire'),
  contact: L('Contact', 'Cysylltu', 'Contacto', 'Contacto', 'Contact'),
  policies: L('Policies', 'Polisïau', 'Políticas', 'Políticas', 'Politiques'),
  terms: L('Terms of Service', 'Telerau Gwasanaeth', 'Termos de Serviço', 'Términos del Servicio', 'Conditions de service'),
  privacy: L('Privacy Policy', 'Polisi Preifatrwydd', 'Política de Privacidade', 'Política de Privacidad', 'Politique de confidentialité'),
  cookies: L('Cookie Policy', 'Polisi Cwcis', 'Política de Cookies', 'Política de Cookies', 'Politique relative aux cookies'),
  complaints: L('Complaints Policy', 'Polisi Cwynion', 'Política de Reclamações', 'Política de Quejas', 'Politique de réclamations'),
  intellectualProperty: L('Intellectual Property Statement', 'Datganiad Eiddo Deallusol', 'Declaração de Propriedade Intelectual', 'Declaración de Propiedad Intelectual', 'Déclaration de propriété intellectuelle'),
  accessibility: L('Accessibility Statement', 'Datganiad Hygyrchedd', 'Declaração de Acessibilidade', 'Declaración de Accesibilidad', 'Déclaration d’accessibilité'),
  security: L('Security and Vulnerability Disclosure', 'Diogelwch a Datgelu Gwendidau', 'Segurança e Divulgação de Vulnerabilidades', 'Seguridad y Divulgación de Vulnerabilidades', 'Sécurité et divulgation des vulnérabilités'),
  affiliate: L('Affiliate and Commercial Disclosure', 'Datgeliad Cysylltiedig a Masnachol', 'Divulgação de Afiliados e Comercial', 'Divulgación de Afiliados y Comercial', 'Déclaration d’affiliation et commerciale'),
  formerServices: L('Former services', 'Gwasanaethau blaenorol', 'Serviços anteriores', 'Servicios anteriores', 'Anciens services'),
  sitemap: L('Sitemap', 'Map y wefan', 'Mapa do site', 'Mapa del sitio', 'Plan du site'),
  printPdf: L('Print or save as PDF', 'Argraffu neu gadw fel PDF', 'Imprimir ou guardar como PDF', 'Imprimir o guardar como PDF', 'Imprimer ou enregistrer en PDF'),
  authoritativeNotice: L(
    'The English version is the authoritative legal version. Translations are provided for accessibility and convenience.',
    'Y fersiwn Saesneg yw’r fersiwn gyfreithiol awdurdodol. Darperir cyfieithiadau er hygyrchedd a chyfleustra.',
    'A versão inglesa é a versão jurídica oficial. As traduções são fornecidas por acessibilidade e conveniência.',
    'La versión inglesa es la versión jurídica oficial. Las traducciones se facilitan por accesibilidad y comodidad.',
    'La version anglaise est la version juridique faisant autorité. Les traductions sont fournies pour l’accessibilité et la commodité.'
  ),
  lastReviewed: L('Last reviewed', 'Adolygwyd ddiwethaf', 'Última revisão', 'Última revisión', 'Dernière révision'),
  companyDetails: L('Company details', 'Manylion y cwmni', 'Dados da empresa', 'Datos de la empresa', 'Coordonnées de la société'),
  language: L('Language', 'Iaith', 'Idioma', 'Idioma', 'Langue'),
  menu: L('Menu', 'Dewislen', 'Menu', 'Menú', 'Menu'),
  close: L('Close', 'Cau', 'Fechar', 'Cerrar', 'Fermer'),
  readMore: L('Read more', 'Darllen mwy', 'Ler mais', 'Leer más', 'En savoir plus'),
} as const;

const company = {
  name: 'JA Group Services Ltd',
  number: '16314179',
  address: '167–169 Great Portland Street, 5th Floor, London, W1W 5PF, United Kingdom',
  phone: '020 3834 2790',
  generalEmail: 'hello@jagroupservices.co.uk',
  complaintsEmail: 'complaints@jagroupservices.co.uk',
  dataProtectionEmail: 'dataprotection@jagroupservices.co.uk',
  financeEmail: 'finance@jagroupservices.co.uk',
  governanceEmail: 'governance@jagroupservices.co.uk',
  boardEmail: 'board@jagroupservices.co.uk',
  itEmail: 'it@jagroupservices.co.uk',
  ico: 'ZB877370',
};

const commonCompanySection: PageSection = {
  heading: uiText.companyDetails,
  bullets: [
    L(`Legal entity: ${company.name}`, `Endid cyfreithiol: ${company.name}`, `Entidade jurídica: ${company.name}`, `Entidad jurídica: ${company.name}`, `Entité juridique : ${company.name}`),
    L(`Company number: ${company.number}`, `Rhif y cwmni: ${company.number}`, `Número da empresa: ${company.number}`, `Número de empresa: ${company.number}`, `Numéro d’entreprise : ${company.number}`),
    L(`Registered office: ${company.address}`, `Swyddfa gofrestredig: ${company.address}`, `Sede registada: ${company.address}`, `Domicilio social: ${company.address}`, `Siège social : ${company.address}`),
    L(`ICO registration: ${company.ico}`, `Cofrestriad ICO: ${company.ico}`, `Registo no ICO: ${company.ico}`, `Registro ICO: ${company.ico}`, `Enregistrement ICO : ${company.ico}`),
  ],
};

const pages: PublicPageDefinition[] = [
  {
    id: 'home',
    path: '/',
    title: L('JA Group Services Ltd', 'JA Group Services Ltd', 'JA Group Services Ltd', 'JA Group Services Ltd', 'JA Group Services Ltd'),
    eyebrow: L('Digital platforms · Customer services · Accountable operations', 'Llwyfannau digidol · Gwasanaethau cwsmeriaid · Gweithrediadau atebol', 'Plataformas digitais · Apoio ao cliente · Operações responsáveis', 'Plataformas digitales · Atención al cliente · Operaciones responsables', 'Plateformes numériques · Service client · Opérations responsables'),
    summary: L(
      'We develop, operate and manage digital platforms, customer services and selected partner-supported services for individuals and organisations.',
      'Rydym yn datblygu, gweithredu a rheoli llwyfannau digidol, gwasanaethau cwsmeriaid a gwasanaethau dethol a gefnogir gan bartneriaid ar gyfer unigolion a sefydliadau.',
      'Desenvolvemos, operamos e gerimos plataformas digitais, serviços de apoio ao cliente e serviços selecionados apoiados por parceiros para particulares e organizações.',
      'Desarrollamos, operamos y gestionamos plataformas digitales, servicios de atención al cliente y servicios seleccionados respaldados por socios para particulares y organizaciones.',
      'Nous développons, exploitons et gérons des plateformes numériques, des services clients et certains services soutenus par des partenaires pour les particuliers et les organisations.'
    ),
    description: L('Official corporate website of JA Group Services Ltd.', 'Gwefan gorfforaethol swyddogol JA Group Services Ltd.', 'Site corporativo oficial da JA Group Services Ltd.', 'Sitio corporativo oficial de JA Group Services Ltd.', 'Site institutionnel officiel de JA Group Services Ltd.'),
    sections: [
      {
        heading: L('What we do', 'Yr hyn rydym yn ei wneud', 'O que fazemos', 'Lo que hacemos', 'Ce que nous faisons'),
        paragraphs: [
          L(
            'JA Group Services Ltd brings digital platforms, central customer operations, governance, data protection and commercial relationships together under one operating company.',
            'Mae JA Group Services Ltd yn dod â llwyfannau digidol, gweithrediadau cwsmeriaid canolog, llywodraethu, diogelu data a pherthnasoedd masnachol ynghyd o dan un cwmni gweithredu.',
            'A JA Group Services Ltd reúne plataformas digitais, operações centrais de clientes, governação, proteção de dados e relações comerciais numa única empresa operacional.',
            'JA Group Services Ltd reúne plataformas digitales, operaciones centrales de clientes, gobernanza, protección de datos y relaciones comerciales bajo una única empresa operativa.',
            'JA Group Services Ltd réunit les plateformes numériques, les opérations clients centrales, la gouvernance, la protection des données et les relations commerciales au sein d’une même société d’exploitation.'
          ),
        ],
        bullets: [
          L('Digital platforms and customer accounts', 'Llwyfannau digidol a chyfrifon cwsmeriaid', 'Plataformas digitais e contas de clientes', 'Plataformas digitales y cuentas de clientes', 'Plateformes numériques et comptes clients'),
          L('Customer support, complaints and service administration', 'Cymorth i gwsmeriaid, cwynion a gweinyddu gwasanaethau', 'Apoio ao cliente, reclamações e administração de serviços', 'Atención al cliente, quejas y administración de servicios', 'Assistance client, réclamations et administration des services'),
          L('Reseller, affiliate and partner-supported services', 'Gwasanaethau ailwerthu, cysylltiedig a gefnogir gan bartneriaid', 'Serviços de revenda, afiliados e apoiados por parceiros', 'Servicios de reventa, afiliados y respaldados por socios', 'Services de revente, d’affiliation et soutenus par des partenaires'),
          L('Governance, security and data protection oversight', 'Goruchwyliaeth llywodraethu, diogelwch a diogelu data', 'Supervisão de governação, segurança e proteção de dados', 'Supervisión de gobernanza, seguridad y protección de datos', 'Supervision de la gouvernance, de la sécurité et de la protection des données'),
        ],
      },
      {
        heading: L('Our operating portfolio', 'Ein portffolio gweithredu', 'O nosso portefólio operacional', 'Nuestra cartera operativa', 'Notre portefeuille opérationnel'),
        bullets: [
          L('Profile Centre — digital profile and identity tools', 'Profile Centre — offer proffil digidol a hunaniaeth', 'Profile Centre — ferramentas de perfil e identidade digital', 'Profile Centre — herramientas de perfil e identidad digital', 'Profile Centre — outils de profil et d’identité numériques'),
          L('Planyx — experience and itinerary planning', 'Planyx — cynllunio profiadau a theithlenni', 'Planyx — planeamento de experiências e itinerários', 'Planyx — planificación de experiencias e itinerarios', 'Planyx — planification d’expériences et d’itinéraires'),
          L('JA Domain Hub — domain and digital identity support', 'JA Domain Hub — cymorth parth a hunaniaeth ddigidol', 'JA Domain Hub — apoio a domínios e identidade digital', 'JA Domain Hub — soporte de dominios e identidad digital', 'JA Domain Hub — assistance aux domaines et à l’identité numérique'),
        ],
        links: [
          { label: L('View brands and services', 'Gweld brandiau a gwasanaethau', 'Ver marcas e serviços', 'Ver marcas y servicios', 'Voir les marques et services'), href: '/about-our-divisions' },
          { label: uiText.supportCentre, href: '/help-and-support' },
          { label: uiText.trustCentre, href: '/trust-and-governance' },
        ],
      },
      commonCompanySection,
    ],
  },
  {
    id: 'about',
    path: '/about-us',
    title: L('About JA Group Services Ltd', 'Am JA Group Services Ltd', 'Sobre a JA Group Services Ltd', 'Acerca de JA Group Services Ltd', 'À propos de JA Group Services Ltd'),
    eyebrow: L('Who we are', 'Pwy ydym ni', 'Quem somos', 'Quiénes somos', 'Qui sommes-nous'),
    summary: L('A technology and service-management company operating digital platforms and central customer functions.', 'Cwmni technoleg a rheoli gwasanaethau sy’n gweithredu llwyfannau digidol a swyddogaethau cwsmeriaid canolog.', 'Uma empresa de tecnologia e gestão de serviços que opera plataformas digitais e funções centrais de clientes.', 'Una empresa de tecnología y gestión de servicios que opera plataformas digitales y funciones centrales de clientes.', 'Une société de technologie et de gestion de services exploitant des plateformes numériques et des fonctions clients centrales.'),
    description: L('Learn about JA Group Services Ltd and its operating model.', 'Dysgwch am JA Group Services Ltd a’i fodel gweithredu.', 'Conheça a JA Group Services Ltd e o seu modelo operacional.', 'Conozca JA Group Services Ltd y su modelo operativo.', 'Découvrez JA Group Services Ltd et son modèle opérationnel.'),
    sections: [
      {
        heading: L('Our purpose', 'Ein diben', 'O nosso propósito', 'Nuestro propósito', 'Notre mission'),
        paragraphs: [
          L('Our purpose is to make useful digital services easier to access, understand and manage, while keeping responsibilities, support routes and governance clear.', 'Ein diben yw gwneud gwasanaethau digidol defnyddiol yn haws eu cyrchu, eu deall a’u rheoli, gan gadw cyfrifoldebau, llwybrau cymorth a llywodraethu yn glir.', 'O nosso objetivo é tornar os serviços digitais úteis mais fáceis de aceder, compreender e gerir, mantendo claras as responsabilidades, os canais de apoio e a governação.', 'Nuestro objetivo es facilitar el acceso, la comprensión y la gestión de servicios digitales útiles, manteniendo claras las responsabilidades, las vías de soporte y la gobernanza.', 'Notre objectif est de rendre les services numériques utiles plus faciles d’accès, de compréhension et de gestion, tout en maintenant des responsabilités, des voies d’assistance et une gouvernance claires.'),
        ],
      },
      {
        heading: L('How we operate', 'Sut rydym yn gweithredu', 'Como operamos', 'Cómo operamos', 'Notre fonctionnement'),
        bullets: [
          L('We develop and manage our own platforms where stated.', 'Rydym yn datblygu ac yn rheoli ein llwyfannau ein hunain lle nodir hynny.', 'Desenvolvemos e gerimos as nossas próprias plataformas quando indicado.', 'Desarrollamos y gestionamos nuestras propias plataformas cuando así se indica.', 'Nous développons et gérons nos propres plateformes lorsque cela est indiqué.'),
          L('We may facilitate or resell approved third-party services.', 'Gallwn hwyluso neu ailwerthu gwasanaethau trydydd parti cymeradwy.', 'Podemos facilitar ou revender serviços aprovados de terceiros.', 'Podemos facilitar o revender servicios aprobados de terceros.', 'Nous pouvons faciliter ou revendre des services tiers approuvés.'),
          L('We provide first-line customer support and escalate provider-level matters where required.', 'Rydym yn darparu cymorth rheng flaen i gwsmeriaid ac yn uwchgyfeirio materion lefel darparwr pan fo angen.', 'Prestamos apoio de primeira linha e encaminhamos questões ao nível do fornecedor quando necessário.', 'Prestamos soporte de primera línea y escalamos las cuestiones al proveedor cuando sea necesario.', 'Nous fournissons une assistance de premier niveau et transmettons les questions relevant du fournisseur lorsque nécessaire.'),
          L('Material decisions remain subject to Board oversight.', 'Mae penderfyniadau sylweddol yn parhau i fod yn ddarostyngedig i oruchwyliaeth y Bwrdd.', 'As decisões materiais permanecem sujeitas à supervisão do Conselho.', 'Las decisiones importantes siguen sujetas a la supervisión del Consejo.', 'Les décisions importantes restent soumises à la supervision du Conseil.'),
        ],
      },
      {
        heading: L('Company history', 'Hanes y cwmni', 'História da empresa', 'Historia de la empresa', 'Histoire de la société'),
        bullets: [
          L('Incorporated on 13 March 2025 as J&A Hubstore Limited.', 'Ymgorfforwyd ar 13 Mawrth 2025 fel J&A Hubstore Limited.', 'Constituída em 13 de março de 2025 como J&A Hubstore Limited.', 'Constituida el 13 de marzo de 2025 como J&A Hubstore Limited.', 'Constituée le 13 mars 2025 sous le nom de J&A Hubstore Limited.'),
          L('Subsequently named J A Training Ltd and JA Learning Hub Ltd.', 'Fe’i henwyd wedyn yn J A Training Ltd a JA Learning Hub Ltd.', 'Posteriormente denominada J A Training Ltd e JA Learning Hub Ltd.', 'Posteriormente denominada J A Training Ltd y JA Learning Hub Ltd.', 'Puis renommée J A Training Ltd et JA Learning Hub Ltd.'),
          L('Renamed JA Group Services Ltd on 5 December 2025 to reflect a broader operating model.', 'Ailenwyd yn JA Group Services Ltd ar 5 Rhagfyr 2025 i adlewyrchu model gweithredu ehangach.', 'Renomeada JA Group Services Ltd em 5 de dezembro de 2025 para refletir um modelo operacional mais amplo.', 'Renombrada JA Group Services Ltd el 5 de diciembre de 2025 para reflejar un modelo operativo más amplio.', 'Renommée JA Group Services Ltd le 5 décembre 2025 afin de refléter un modèle opérationnel plus large.'),
        ],
      },
      commonCompanySection,
    ],
  },
  {
    id: 'brands',
    path: '/about-our-divisions',
    title: uiText.brands,
    eyebrow: L('Operating portfolio', 'Portffolio gweithredu', 'Portefólio operacional', 'Cartera operativa', 'Portefeuille opérationnel'),
    summary: L('Our platforms and trading division form part of JA Group Services Ltd and are not separate legal entities.', 'Mae ein llwyfannau a’n his-adran fasnachu yn rhan o JA Group Services Ltd ac nid ydynt yn endidau cyfreithiol ar wahân.', 'As nossas plataformas e divisão comercial fazem parte da JA Group Services Ltd e não são entidades jurídicas separadas.', 'Nuestras plataformas y división comercial forman parte de JA Group Services Ltd y no son entidades jurídicas independientes.', 'Nos plateformes et notre division commerciale font partie de JA Group Services Ltd et ne constituent pas des entités juridiques distinctes.'),
    description: L('Information about the operating brands of JA Group Services Ltd.', 'Gwybodaeth am frandiau gweithredu JA Group Services Ltd.', 'Informação sobre as marcas operacionais da JA Group Services Ltd.', 'Información sobre las marcas operativas de JA Group Services Ltd.', 'Informations sur les marques opérationnelles de JA Group Services Ltd.'),
    sections: [
      {
        heading: L('Profile Centre', 'Profile Centre', 'Profile Centre', 'Profile Centre', 'Profile Centre'),
        paragraphs: [L('A digital profile platform for individuals and organisations, supporting controlled sharing of contact information, links, media, documents and QR-based profiles.', 'Llwyfan proffil digidol ar gyfer unigolion a sefydliadau, sy’n cefnogi rhannu rheoledig o wybodaeth gyswllt, dolenni, cyfryngau, dogfennau a phroffiliau QR.', 'Uma plataforma de perfis digitais para particulares e organizações, com partilha controlada de contactos, ligações, multimédia, documentos e perfis QR.', 'Una plataforma de perfiles digitales para particulares y organizaciones, con intercambio controlado de contactos, enlaces, contenidos, documentos y perfiles QR.', 'Une plateforme de profils numériques pour les particuliers et les organisations, permettant le partage contrôlé de coordonnées, liens, médias, documents et profils QR.')],
        links: [{ label: L('Visit Profile Centre', 'Ymweld â Profile Centre', 'Visitar o Profile Centre', 'Visitar Profile Centre', 'Visiter Profile Centre'), href: 'https://profilecentre.jagroupservices.co.uk/', external: true }],
      },
      {
        heading: L('Planyx', 'Planyx', 'Planyx', 'Planyx', 'Planyx'),
        paragraphs: [L('An experience and itinerary-planning platform that helps users organise travel, days out and shared plans while discovering selected partner options.', 'Llwyfan cynllunio profiadau a theithlenni sy’n helpu defnyddwyr i drefnu teithio, diwrnodau allan a chynlluniau a rennir wrth ddarganfod opsiynau partner dethol.', 'Uma plataforma de planeamento de experiências e itinerários que ajuda a organizar viagens, passeios e planos partilhados, incluindo opções selecionadas de parceiros.', 'Una plataforma de planificación de experiencias e itinerarios que ayuda a organizar viajes, salidas y planes compartidos, además de descubrir opciones seleccionadas de socios.', 'Une plateforme de planification d’expériences et d’itinéraires permettant d’organiser voyages, sorties et projets partagés, tout en découvrant certaines offres partenaires.')],
        links: [{ label: L('Visit Planyx', 'Ymweld â Planyx', 'Visitar o Planyx', 'Visitar Planyx', 'Visiter Planyx'), href: 'https://planyx.jagroupservices.co.uk/', external: true }],
      },
      {
        heading: L('JA Domain Hub', 'JA Domain Hub', 'JA Domain Hub', 'JA Domain Hub', 'JA Domain Hub'),
        paragraphs: [L('A trading division providing domain-registration support, digital identity support and reseller-based access to authorised domain, hosting and digital platforms. It is not a registry, accredited registrar, hosting operator or telecommunications provider.', 'Is-adran fasnachu sy’n darparu cymorth cofrestru parthau, cymorth hunaniaeth ddigidol a mynediad ailwerthu at lwyfannau parth, cynnal a digidol awdurdodedig. Nid yw’n gofrestrfa, cofrestrydd achrededig, gweithredwr cynnal na darparwr telathrebu.', 'Uma divisão comercial que presta apoio ao registo de domínios, identidade digital e acesso por revenda a plataformas autorizadas de domínios, alojamento e serviços digitais. Não é um registo, registrador acreditado, operador de alojamento ou fornecedor de telecomunicações.', 'Una división comercial que presta apoyo en registro de dominios, identidad digital y acceso mediante reventa a plataformas autorizadas de dominios, alojamiento y servicios digitales. No es un registro, registrador acreditado, operador de alojamiento ni proveedor de telecomunicaciones.', 'Une division commerciale fournissant une assistance à l’enregistrement de domaines, à l’identité numérique et un accès en revente à des plateformes autorisées de domaines, d’hébergement et de services numériques. Elle n’est ni registre, ni bureau d’enregistrement accrédité, ni hébergeur, ni opérateur de télécommunications.')],
        links: [{ label: L('Visit JA Domain Hub', 'Ymweld â JA Domain Hub', 'Visitar o JA Domain Hub', 'Visitar JA Domain Hub', 'Visiter JA Domain Hub'), href: 'https://jadomainhub.jagroupservices.co.uk/', external: true }],
      },
      {
        heading: L('Legal status', 'Statws cyfreithiol', 'Estatuto jurídico', 'Situación jurídica', 'Statut juridique'),
        paragraphs: [L('All customer contracts, liabilities, complaints and data-controller responsibilities sit with JA Group Services Ltd unless a service page expressly identifies an independent third-party provider.', 'Mae pob contract cwsmer, atebolrwydd, cwyn a chyfrifoldeb rheolydd data gyda JA Group Services Ltd oni bai bod tudalen gwasanaeth yn nodi darparwr trydydd parti annibynnol yn benodol.', 'Todos os contratos com clientes, responsabilidades, reclamações e obrigações de responsável pelo tratamento pertencem à JA Group Services Ltd, salvo indicação expressa de um fornecedor terceiro independente.', 'Todos los contratos con clientes, responsabilidades, quejas y obligaciones como responsable del tratamiento corresponden a JA Group Services Ltd, salvo que se identifique expresamente a un proveedor tercero independiente.', 'Tous les contrats clients, responsabilités, réclamations et obligations de responsable du traitement relèvent de JA Group Services Ltd, sauf lorsqu’un fournisseur tiers indépendant est expressément identifié.')],
      },
    ],
  },
  {
    id: 'structure',
    path: '/our-group-structure',
    title: uiText.structure,
    eyebrow: L('Ownership and governance', 'Perchnogaeth a llywodraethu', 'Propriedade e governação', 'Propiedad y gobernanza', 'Propriété et gouvernance'),
    summary: L('JSDS Group Ltd is the parent company, majority shareholder, person with significant control and Corporate Director of JA Group Services Ltd.', 'JSDS Group Ltd yw’r rhiant-gwmni, y cyfranddaliwr mwyafrifol, y person â rheolaeth sylweddol a Chyfarwyddwr Corfforaethol JA Group Services Ltd.', 'A JSDS Group Ltd é a empresa-mãe, acionista maioritária, pessoa com controlo significativo e Diretora Corporativa da JA Group Services Ltd.', 'JSDS Group Ltd es la empresa matriz, accionista mayoritaria, persona con control significativo y Directora Corporativa de JA Group Services Ltd.', 'JSDS Group Ltd est la société mère, l’actionnaire majoritaire, la personne exerçant un contrôle significatif et l’Administrateur personne morale de JA Group Services Ltd.'),
    description: L('The legal and governance relationship between JSDS Group Ltd and JA Group Services Ltd.', 'Y berthynas gyfreithiol a llywodraethu rhwng JSDS Group Ltd a JA Group Services Ltd.', 'A relação jurídica e de governação entre a JSDS Group Ltd e a JA Group Services Ltd.', 'La relación jurídica y de gobernanza entre JSDS Group Ltd y JA Group Services Ltd.', 'La relation juridique et de gouvernance entre JSDS Group Ltd et JA Group Services Ltd.'),
    sections: [
      {
        heading: L('Parent company', 'Rhiant-gwmni', 'Empresa-mãe', 'Empresa matriz', 'Société mère'),
        paragraphs: [L('JSDS Group Ltd is a separate company and provides parent-company oversight, majority ownership and representation through its appointment as Corporate Director.', 'Mae JSDS Group Ltd yn gwmni ar wahân ac yn darparu goruchwyliaeth rhiant-gwmni, perchnogaeth fwyafrifol a chynrychiolaeth drwy ei benodiad yn Gyfarwyddwr Corfforaethol.', 'A JSDS Group Ltd é uma empresa distinta e exerce supervisão de grupo, propriedade maioritária e representação através da sua nomeação como Diretora Corporativa.', 'JSDS Group Ltd es una empresa separada que ejerce supervisión de grupo, propiedad mayoritaria y representación mediante su nombramiento como Directora Corporativa.', 'JSDS Group Ltd est une société distincte qui assure la supervision du groupe, la détention majoritaire et la représentation en qualité d’Administrateur personne morale.')],
      },
      {
        heading: L('Board of Directors', 'Bwrdd y Cyfarwyddwyr', 'Conselho de Administração', 'Consejo de Administración', 'Conseil d’administration'),
        bullets: [
          L('Mr Alfie Thomas Holywood Murray — Director, Chief Executive Officer and Data Protection Officer.', 'Mr Alfie Thomas Holywood Murray — Cyfarwyddwr, Prif Swyddog Gweithredol a Swyddog Diogelu Data.', 'Mr Alfie Thomas Holywood Murray — Diretor, Diretor Executivo e Encarregado da Proteção de Dados.', 'Mr Alfie Thomas Holywood Murray — Director, Director Ejecutivo y Delegado de Protección de Datos.', 'M. Alfie Thomas Holywood Murray — Administrateur, Directeur général et Délégué à la protection des données.'),
          L('JSDS Group Ltd — Corporate Director.', 'JSDS Group Ltd — Cyfarwyddwr Corfforaethol.', 'JSDS Group Ltd — Diretora Corporativa.', 'JSDS Group Ltd — Directora Corporativa.', 'JSDS Group Ltd — Administrateur personne morale.'),
          L('Mr Jack Nicolau Sousa Da Silva acts as the authorised representative of JSDS Group Ltd when it acts as Corporate Director. He is not a current individual director of JA Group Services Ltd.', 'Mae Mr Jack Nicolau Sousa Da Silva yn gweithredu fel cynrychiolydd awdurdodedig JSDS Group Ltd pan fydd yn gweithredu fel Cyfarwyddwr Corfforaethol. Nid yw’n gyfarwyddwr unigol cyfredol JA Group Services Ltd.', 'Mr Jack Nicolau Sousa Da Silva atua como representante autorizado da JSDS Group Ltd quando esta exerce a função de Diretora Corporativa. Não é atualmente diretor individual da JA Group Services Ltd.', 'Mr Jack Nicolau Sousa Da Silva actúa como representante autorizado de JSDS Group Ltd cuando esta ejerce como Directora Corporativa. No es actualmente director individual de JA Group Services Ltd.', 'M. Jack Nicolau Sousa Da Silva agit en qualité de représentant autorisé de JSDS Group Ltd lorsque celle-ci exerce ses fonctions d’Administrateur personne morale. Il n’est pas actuellement administrateur individuel de JA Group Services Ltd.'),
        ],
      },
      {
        heading: L('Division of responsibility', 'Rhannu cyfrifoldeb', 'Divisão de responsabilidades', 'División de responsabilidades', 'Répartition des responsabilités'),
        bullets: [
          L('The Board retains governance, strategy and reserved matters.', 'Mae’r Bwrdd yn cadw llywodraethu, strategaeth a materion a gadwyd yn ôl.', 'O Conselho mantém a governação, a estratégia e as matérias reservadas.', 'El Consejo conserva la gobernanza, la estrategia y las materias reservadas.', 'Le Conseil conserve la gouvernance, la stratégie et les matières réservées.'),
          L('The Chief Executive Officer manages day-to-day operations subject to Board oversight.', 'Mae’r Prif Swyddog Gweithredol yn rheoli gweithrediadau o ddydd i ddydd yn ddarostyngedig i oruchwyliaeth y Bwrdd.', 'O Diretor Executivo gere as operações diárias sob supervisão do Conselho.', 'El Director Ejecutivo gestiona las operaciones diarias bajo la supervisión del Consejo.', 'Le Directeur général gère les opérations quotidiennes sous la supervision du Conseil.'),
          L('JA Group Services Ltd remains responsible for its own contracts, liabilities, records and statutory duties.', 'Mae JA Group Services Ltd yn parhau’n gyfrifol am ei gontractau, ei rwymedigaethau, ei gofnodion a’i ddyletswyddau statudol ei hun.', 'A JA Group Services Ltd continua responsável pelos seus próprios contratos, responsabilidades, registos e deveres legais.', 'JA Group Services Ltd sigue siendo responsable de sus propios contratos, obligaciones, registros y deberes legales.', 'JA Group Services Ltd demeure responsable de ses propres contrats, responsabilités, registres et obligations légales.'),
        ],
      },
      commonCompanySection,
    ],
  },
  {
    id: 'partner',
    path: '/partner-with-us',
    title: uiText.partner,
    eyebrow: L('Partnership programme', 'Rhaglen bartneriaeth', 'Programa de parcerias', 'Programa de colaboración', 'Programme de partenariat'),
    summary: L('We are developing a controlled route for suitable technology, reseller, affiliate, supplier and commercial relationships.', 'Rydym yn datblygu llwybr rheoledig ar gyfer perthnasoedd technoleg, ailwerthu, cysylltiedig, cyflenwyr a masnachol addas.', 'Estamos a desenvolver um processo controlado para relações adequadas de tecnologia, revenda, afiliação, fornecimento e colaboração comercial.', 'Estamos desarrollando un proceso controlado para relaciones adecuadas de tecnología, reventa, afiliación, suministro y colaboración comercial.', 'Nous développons un parcours contrôlé pour les relations technologiques, de revente, d’affiliation, de fourniture et de collaboration commerciale appropriées.'),
    description: L('Information for organisations interested in working with JA Group Services Ltd.', 'Gwybodaeth i sefydliadau sydd â diddordeb mewn gweithio gyda JA Group Services Ltd.', 'Informação para organizações interessadas em trabalhar com a JA Group Services Ltd.', 'Información para organizaciones interesadas en trabajar con JA Group Services Ltd.', 'Informations pour les organisations souhaitant travailler avec JA Group Services Ltd.'),
    status: L('Public applications are not yet open.', 'Nid yw ceisiadau cyhoeddus ar agor eto.', 'As candidaturas públicas ainda não estão abertas.', 'Las solicitudes públicas aún no están abiertas.', 'Les candidatures publiques ne sont pas encore ouvertes.'),
    sections: [
      {
        heading: L('Relationships we may consider', 'Perthnasoedd y gallwn eu hystyried', 'Relações que poderemos considerar', 'Relaciones que podremos considerar', 'Relations que nous pouvons envisager'),
        bullets: [
          L('Technology and platform providers', 'Darparwyr technoleg a llwyfannau', 'Fornecedores de tecnologia e plataformas', 'Proveedores de tecnología y plataformas', 'Fournisseurs de technologies et de plateformes'),
          L('Authorised reseller and service arrangements', 'Trefniadau ailwerthu a gwasanaeth awdurdodedig', 'Acordos autorizados de revenda e serviços', 'Acuerdos autorizados de reventa y servicios', 'Accords autorisés de revente et de services'),
          L('Affiliate and referral relationships', 'Perthnasoedd cysylltiedig ac atgyfeirio', 'Relações de afiliação e referência', 'Relaciones de afiliación y referencia', 'Relations d’affiliation et de recommandation'),
          L('Suppliers and professional service providers', 'Cyflenwyr a darparwyr gwasanaethau proffesiynol', 'Fornecedores e prestadores de serviços profissionais', 'Proveedores y prestadores de servicios profesionales', 'Fournisseurs et prestataires de services professionnels'),
        ],
      },
      {
        heading: L('Minimum standards', 'Safonau gofynnol', 'Normas mínimas', 'Normas mínimas', 'Normes minimales'),
        bullets: [
          L('Verifiable legal identity and genuine business purpose', 'Hunaniaeth gyfreithiol ddilysadwy a diben busnes dilys', 'Identidade jurídica verificável e finalidade comercial legítima', 'Identidad jurídica verificable y finalidad comercial legítima', 'Identité juridique vérifiable et finalité commerciale légitime'),
          L('Clear customer value and defined responsibilities', 'Gwerth clir i gwsmeriaid a chyfrifoldebau diffiniedig', 'Valor claro para o cliente e responsabilidades definidas', 'Valor claro para el cliente y responsabilidades definidas', 'Valeur client claire et responsabilités définies'),
          L('Appropriate security, privacy and service standards', 'Safonau diogelwch, preifatrwydd a gwasanaeth priodol', 'Normas adequadas de segurança, privacidade e serviço', 'Normas adecuadas de seguridad, privacidad y servicio', 'Normes appropriées de sécurité, de confidentialité et de service'),
          L('Written approval and contractual terms before public launch', 'Cymeradwyaeth ysgrifenedig a thelerau cytundebol cyn lansiad cyhoeddus', 'Aprovação escrita e termos contratuais antes do lançamento público', 'Aprobación escrita y condiciones contractuales antes del lanzamiento público', 'Approbation écrite et conditions contractuelles avant tout lancement public'),
        ],
      },
      {
        heading: L('Early enquiries', 'Ymholiadau cynnar', 'Contactos iniciais', 'Consultas iniciales', 'Premières prises de contact'),
        paragraphs: [L('An expression of interest does not create an application, partnership, approval or financial commitment. Material arrangements remain subject to the required internal approval, including Board approval where applicable.', 'Nid yw mynegi diddordeb yn creu cais, partneriaeth, cymeradwyaeth nac ymrwymiad ariannol. Mae trefniadau sylweddol yn parhau’n ddarostyngedig i’r gymeradwyaeth fewnol ofynnol, gan gynnwys cymeradwyaeth y Bwrdd lle bo’n berthnasol.', 'Uma manifestação de interesse não cria uma candidatura, parceria, aprovação ou compromisso financeiro. Os acordos materiais continuam sujeitos às aprovações internas necessárias, incluindo a aprovação do Conselho quando aplicável.', 'Una manifestación de interés no crea una solicitud, colaboración, aprobación ni compromiso financiero. Los acuerdos importantes siguen sujetos a las aprobaciones internas necesarias, incluida la del Consejo cuando corresponda.', 'Une manifestation d’intérêt ne constitue ni une candidature, ni un partenariat, ni une approbation, ni un engagement financier. Les accords importants restent soumis aux approbations internes requises, y compris celle du Conseil le cas échéant.')],
        links: [{ label: L('Send an early enquiry', 'Anfon ymholiad cynnar', 'Enviar um contacto inicial', 'Enviar una consulta inicial', 'Envoyer une première demande'), href: 'mailto:hello@jagroupservices.co.uk?subject=Partnership%20Enquiry', external: true }],
      },
    ],
  },
  {
    id: 'contact',
    path: '/contactus',
    title: uiText.contact,
    eyebrow: L('Contact head office', 'Cysylltu â’r brif swyddfa', 'Contactar a sede', 'Contactar con la sede', 'Contacter le siège'),
    summary: L('Use the correct channel so your enquiry reaches the right team.', 'Defnyddiwch y sianel gywir fel bod eich ymholiad yn cyrraedd y tîm priodol.', 'Utilize o canal correto para que o seu pedido chegue à equipa adequada.', 'Utilice el canal correcto para que su consulta llegue al equipo adecuado.', 'Utilisez le canal approprié afin que votre demande parvienne à la bonne équipe.'),
    description: L('Contact information for JA Group Services Ltd.', 'Gwybodaeth gyswllt ar gyfer JA Group Services Ltd.', 'Informações de contacto da JA Group Services Ltd.', 'Información de contacto de JA Group Services Ltd.', 'Coordonnées de JA Group Services Ltd.'),
    sections: [
      {
        heading: L('General contact', 'Cyswllt cyffredinol', 'Contacto geral', 'Contacto general', 'Contact général'),
        bullets: [
          L(`Telephone: ${company.phone}`, `Ffôn: ${company.phone}`, `Telefone: ${company.phone}`, `Teléfono: ${company.phone}`, `Téléphone : ${company.phone}`),
          L(`General enquiries: ${company.generalEmail}`, `Ymholiadau cyffredinol: ${company.generalEmail}`, `Questões gerais: ${company.generalEmail}`, `Consultas generales: ${company.generalEmail}`, `Demandes générales : ${company.generalEmail}`),
          L('Business hours: Monday to Friday, 09:00–17:00 UK time, excluding bank holidays.', 'Oriau busnes: Dydd Llun i ddydd Gwener, 09:00–17:00 amser y DU, ac eithrio gwyliau banc.', 'Horário: segunda a sexta-feira, 09:00–17:00, hora do Reino Unido, exceto feriados.', 'Horario: de lunes a viernes, de 09:00 a 17:00, hora del Reino Unido, salvo festivos.', 'Horaires : du lundi au vendredi, de 09 h 00 à 17 h 00, heure du Royaume-Uni, hors jours fériés.'),
        ],
      },
      {
        heading: L('Specialist channels', 'Sianeli arbenigol', 'Canais especializados', 'Canales especializados', 'Canaux spécialisés'),
        bullets: [
          L(`Complaints and feedback: ${company.complaintsEmail}`, `Cwynion ac adborth: ${company.complaintsEmail}`, `Reclamações e comentários: ${company.complaintsEmail}`, `Quejas y comentarios: ${company.complaintsEmail}`, `Réclamations et commentaires : ${company.complaintsEmail}`),
          L(`Data protection: ${company.dataProtectionEmail}`, `Diogelu data: ${company.dataProtectionEmail}`, `Proteção de dados: ${company.dataProtectionEmail}`, `Protección de datos: ${company.dataProtectionEmail}`, `Protection des données : ${company.dataProtectionEmail}`),
          L(`Finance and billing: ${company.financeEmail}`, `Cyllid a bilio: ${company.financeEmail}`, `Finanças e faturação: ${company.financeEmail}`, `Finanzas y facturación: ${company.financeEmail}`, `Finance et facturation : ${company.financeEmail}`),
          L(`Governance: ${company.governanceEmail}`, `Llywodraethu: ${company.governanceEmail}`, `Governação: ${company.governanceEmail}`, `Gobernanza: ${company.governanceEmail}`, `Gouvernance : ${company.governanceEmail}`),
          L(`Board correspondence: ${company.boardEmail}`, `Gohebiaeth y Bwrdd: ${company.boardEmail}`, `Correspondência do Conselho: ${company.boardEmail}`, `Correspondencia del Consejo: ${company.boardEmail}`, `Correspondance du Conseil : ${company.boardEmail}`),
          L(`Website and security issues: ${company.itEmail}`, `Materion gwefan a diogelwch: ${company.itEmail}`, `Questões de site e segurança: ${company.itEmail}`, `Problemas del sitio web y seguridad: ${company.itEmail}`, `Problèmes de site et de sécurité : ${company.itEmail}`),
        ],
      },
      {
        heading: L('Telephone menu', 'Dewislen ffôn', 'Menu telefónico', 'Menú telefónico', 'Menu téléphonique'),
        bullets: [
          L('Press 1 for the Administration and Support Help Desk.', 'Pwyswch 1 ar gyfer y Ddesg Gymorth Gweinyddu a Chymorth.', 'Prima 1 para o Balcão de Administração e Apoio.', 'Pulse 1 para el Servicio de Administración y Soporte.', 'Appuyez sur 1 pour le service Administration et Assistance.'),
          L('Press 2 for JA Domain Hub.', 'Pwyswch 2 ar gyfer JA Domain Hub.', 'Prima 2 para o JA Domain Hub.', 'Pulse 2 para JA Domain Hub.', 'Appuyez sur 2 pour JA Domain Hub.'),
          L('Press 3 for the Chief Executive Officer’s Office.', 'Pwyswch 3 ar gyfer Swyddfa’r Prif Swyddog Gweithredol.', 'Prima 3 para o Gabinete do Diretor Executivo.', 'Pulse 3 para la Oficina del Director Ejecutivo.', 'Appuyez sur 3 pour le bureau du Directeur général.'),
          L('Press 4 for complaints and customer feedback.', 'Pwyswch 4 ar gyfer cwynion ac adborth cwsmeriaid.', 'Prima 4 para reclamações e comentários de clientes.', 'Pulse 4 para quejas y comentarios de clientes.', 'Appuyez sur 4 pour les réclamations et commentaires clients.'),
          L('Press 5 for the Data Protection Officer.', 'Pwyswch 5 ar gyfer y Swyddog Diogelu Data.', 'Prima 5 para o Encarregado da Proteção de Dados.', 'Pulse 5 para el Delegado de Protección de Datos.', 'Appuyez sur 5 pour le Délégué à la protection des données.'),
          L('Press 6 for partners and suppliers. Press 7 for the Legal Office.', 'Pwyswch 6 ar gyfer partneriaid a chyflenwyr. Pwyswch 7 ar gyfer y Swyddfa Gyfreithiol.', 'Prima 6 para parceiros e fornecedores. Prima 7 para o Gabinete Jurídico.', 'Pulse 6 para socios y proveedores. Pulse 7 para la Oficina Jurídica.', 'Appuyez sur 6 pour les partenaires et fournisseurs. Appuyez sur 7 pour le service juridique.'),
        ],
      },
      commonCompanySection,
    ],
  },
  {
    id: 'trust',
    path: '/trust-and-governance',
    title: uiText.trustCentre,
    eyebrow: L('Corporate accountability', 'Atebolrwydd corfforaethol', 'Responsabilidade corporativa', 'Responsabilidad corporativa', 'Responsabilité d’entreprise'),
    summary: L('A public summary of how JA Group Services Ltd is owned, governed and held accountable.', 'Crynodeb cyhoeddus o sut mae JA Group Services Ltd yn cael ei berchnogi, ei lywodraethu a’i ddal yn atebol.', 'Um resumo público de como a JA Group Services Ltd é detida, governada e responsabilizada.', 'Un resumen público de cómo se posee, gobierna y controla JA Group Services Ltd.', 'Un résumé public de la manière dont JA Group Services Ltd est détenue, gouvernée et tenue responsable.'),
    description: L('Public governance and accountability information.', 'Gwybodaeth llywodraethu ac atebolrwydd cyhoeddus.', 'Informação pública sobre governação e responsabilidade.', 'Información pública sobre gobernanza y responsabilidad.', 'Informations publiques sur la gouvernance et la responsabilité.'),
    sections: [
      {
        heading: L('Governance hierarchy', 'Hierarchaeth lywodraethu', 'Hierarquia de governação', 'Jerarquía de gobernanza', 'Hiérarchie de gouvernance'),
        bullets: [
          L('Applicable law', 'Cyfraith berthnasol', 'Legislação aplicável', 'Legislación aplicable', 'Droit applicable'),
          L('Articles of Association', 'Erthyglau Cymdeithasu', 'Estatutos', 'Estatutos sociales', 'Statuts'),
          L('Corporate Governance Charter 2026', 'Siarter Llywodraethu Corfforaethol 2026', 'Carta de Governação Corporativa 2026', 'Carta de Gobernanza Corporativa 2026', 'Charte de gouvernance d’entreprise 2026'),
          L('Approved policies, frameworks and operational instructions', 'Polisïau, fframweithiau a chyfarwyddiadau gweithredol cymeradwy', 'Políticas, quadros e instruções operacionais aprovados', 'Políticas, marcos e instrucciones operativas aprobados', 'Politiques, cadres et instructions opérationnelles approuvés'),
        ],
      },
      {
        heading: L('Board authority', 'Awdurdod y Bwrdd', 'Autoridade do Conselho', 'Autoridad del Consejo', 'Autorité du Conseil'),
        paragraphs: [L('The Board retains authority over governance, strategy, statutory filings, accounts, financial control, material contracts, major policies, divisions and significant legal, compliance or risk matters.', 'Mae’r Bwrdd yn cadw awdurdod dros lywodraethu, strategaeth, ffeilio statudol, cyfrifon, rheolaeth ariannol, contractau sylweddol, polisïau mawr, is-adrannau a materion cyfreithiol, cydymffurfio neu risg sylweddol.', 'O Conselho mantém autoridade sobre governação, estratégia, obrigações legais, contas, controlo financeiro, contratos materiais, políticas principais, divisões e matérias jurídicas, de conformidade ou risco significativas.', 'El Consejo conserva autoridad sobre gobernanza, estrategia, presentaciones legales, cuentas, control financiero, contratos importantes, políticas principales, divisiones y asuntos jurídicos, de cumplimiento o riesgo significativos.', 'Le Conseil conserve l’autorité sur la gouvernance, la stratégie, les dépôts légaux, les comptes, le contrôle financier, les contrats importants, les politiques majeures, les divisions et les questions juridiques, de conformité ou de risque significatives.')],
      },
      {
        heading: L('Executive management', 'Rheolaeth weithredol', 'Gestão executiva', 'Gestión ejecutiva', 'Direction exécutive'),
        paragraphs: [L('The Chief Executive Officer manages day-to-day operations under delegated authority and must escalate material risks and reserved matters to the Board.', 'Mae’r Prif Swyddog Gweithredol yn rheoli gweithrediadau o ddydd i ddydd o dan awdurdod dirprwyedig ac mae’n rhaid iddo uwchgyfeirio risgiau sylweddol a materion a gadwyd yn ôl i’r Bwrdd.', 'O Diretor Executivo gere as operações diárias ao abrigo de autoridade delegada e deve encaminhar riscos materiais e matérias reservadas ao Conselho.', 'El Director Ejecutivo gestiona las operaciones diarias con autoridad delegada y debe elevar al Consejo los riesgos importantes y las materias reservadas.', 'Le Directeur général gère les opérations quotidiennes dans le cadre de pouvoirs délégués et doit saisir le Conseil des risques importants et des matières réservées.')],
      },
      {
        heading: L('Public accountability routes', 'Llwybrau atebolrwydd cyhoeddus', 'Canais públicos de responsabilidade', 'Vías públicas de responsabilidad', 'Voies publiques de responsabilité'),
        links: [
          { label: uiText.complaints, href: '/complaints-policy' },
          { label: uiText.privacy, href: '/privacy-policy' },
          { label: uiText.security, href: '/security-and-vulnerability-disclosure' },
          { label: uiText.structure, href: '/our-group-structure' },
        ],
      },
    ],
  },
  {
    id: 'support',
    path: '/help-and-support',
    title: uiText.supportCentre,
    eyebrow: L('Head Office Customer Operations', 'Gweithrediadau Cwsmeriaid y Brif Swyddfa', 'Operações de Clientes da Sede', 'Operaciones de Clientes de la Sede', 'Opérations clients du siège'),
    summary: L('Find the correct route for account access, billing, complaints, data rights and service support.', 'Dewch o hyd i’r llwybr cywir ar gyfer mynediad cyfrif, bilio, cwynion, hawliau data a chymorth gwasanaeth.', 'Encontre o canal correto para acesso à conta, faturação, reclamações, direitos de dados e suporte de serviço.', 'Encuentre la vía correcta para acceso a cuentas, facturación, quejas, derechos de datos y soporte del servicio.', 'Trouvez la voie appropriée pour l’accès au compte, la facturation, les réclamations, les droits relatifs aux données et l’assistance.'),
    description: L('Support routes for customers of JA Group Services Ltd.', 'Llwybrau cymorth i gwsmeriaid JA Group Services Ltd.', 'Canais de apoio para clientes da JA Group Services Ltd.', 'Vías de soporte para clientes de JA Group Services Ltd.', 'Voies d’assistance pour les clients de JA Group Services Ltd.'),
    sections: [
      {
        heading: L('Account access and recovery', 'Mynediad ac adfer cyfrif', 'Acesso e recuperação de conta', 'Acceso y recuperación de cuenta', 'Accès et récupération de compte'),
        paragraphs: [L('Use the recovery options shown on the relevant platform first. If you cannot regain access, contact the Administration and Support Help Desk. Never send a password, authentication code or full payment-card details by email.', 'Defnyddiwch yr opsiynau adfer ar y llwyfan perthnasol yn gyntaf. Os na allwch adennill mynediad, cysylltwch â’r Ddesg Gymorth Gweinyddu a Chymorth. Peidiwch byth ag anfon cyfrinair, cod dilysu na manylion cerdyn talu llawn drwy e-bost.', 'Utilize primeiro as opções de recuperação apresentadas na plataforma relevante. Se não conseguir recuperar o acesso, contacte o Balcão de Administração e Apoio. Nunca envie palavras-passe, códigos de autenticação ou dados completos de cartão por email.', 'Utilice primero las opciones de recuperación de la plataforma correspondiente. Si no puede recuperar el acceso, contacte con el Servicio de Administración y Soporte. Nunca envíe contraseñas, códigos de autenticación ni datos completos de tarjetas por correo electrónico.', 'Utilisez d’abord les options de récupération proposées sur la plateforme concernée. Si vous ne parvenez pas à rétablir l’accès, contactez le service Administration et Assistance. N’envoyez jamais de mot de passe, de code d’authentification ou de données complètes de carte par courriel.')],
      },
      {
        heading: L('Billing and renewals', 'Bilio ac adnewyddu', 'Faturação e renovações', 'Facturación y renovaciones', 'Facturation et renouvellements'),
        paragraphs: [L(`Send billing enquiries to ${company.financeEmail}. Include the service name, invoice or order reference and a clear description, but do not include full card details.`, `Anfonwch ymholiadau bilio i ${company.financeEmail}. Cynhwyswch enw’r gwasanaeth, cyfeirnod yr anfoneb neu’r archeb a disgrifiad clir, ond peidiwch â chynnwys manylion cerdyn llawn.`, `Envie questões de faturação para ${company.financeEmail}. Inclua o nome do serviço, a referência da fatura ou encomenda e uma descrição clara, mas não inclua dados completos do cartão.`, `Envíe consultas de facturación a ${company.financeEmail}. Incluya el nombre del servicio, la referencia de factura o pedido y una descripción clara, pero no incluya datos completos de la tarjeta.`, `Envoyez les demandes de facturation à ${company.financeEmail}. Indiquez le nom du service, la référence de facture ou de commande et une description claire, sans communiquer les données complètes de la carte.`)],
      },
      {
        heading: L('Complaints and data rights', 'Cwynion a hawliau data', 'Reclamações e direitos de dados', 'Quejas y derechos de datos', 'Réclamations et droits relatifs aux données'),
        links: [
          { label: uiText.complaints, href: '/complaints-policy' },
          { label: uiText.privacy, href: '/privacy-policy' },
          { label: L('Email the Complaints Office', 'E-bostio’r Swyddfa Gwynion', 'Enviar email ao Gabinete de Reclamações', 'Enviar correo a la Oficina de Quejas', 'Écrire au service Réclamations'), href: `mailto:${company.complaintsEmail}`, external: true },
          { label: L('Email the Data Protection Officer', 'E-bostio’r Swyddog Diogelu Data', 'Enviar email ao Encarregado da Proteção de Dados', 'Enviar correo al Delegado de Protección de Datos', 'Écrire au Délégué à la protection des données'), href: `mailto:${company.dataProtectionEmail}`, external: true },
        ],
      },
      {
        heading: L('Suspected fraud or security issue', 'Amheuaeth o dwyll neu fater diogelwch', 'Suspeita de fraude ou problema de segurança', 'Sospecha de fraude o problema de seguridad', 'Suspicion de fraude ou problème de sécurité'),
        paragraphs: [L(`Report suspected account compromise, impersonation or website vulnerabilities to ${company.itEmail}. For immediate danger or crime in progress, contact the emergency services.`, `Rhowch wybod am gyfaddawdu cyfrif, dynwared neu wendidau gwefan a amheuir i ${company.itEmail}. Ar gyfer perygl uniongyrchol neu drosedd ar y gweill, cysylltwch â’r gwasanaethau brys.`, `Comunique suspeitas de comprometimento de conta, falsificação de identidade ou vulnerabilidades do site para ${company.itEmail}. Em caso de perigo imediato ou crime em curso, contacte os serviços de emergência.`, `Comunique sospechas de cuenta comprometida, suplantación o vulnerabilidades del sitio a ${company.itEmail}. En caso de peligro inmediato o delito en curso, contacte con los servicios de emergencia.`, `Signalez toute suspicion de compromission de compte, d’usurpation ou de vulnérabilité du site à ${company.itEmail}. En cas de danger immédiat ou d’infraction en cours, contactez les services d’urgence.`)],
      },
    ],
  },
  {
    id: 'status',
    path: '/service-status',
    title: uiText.serviceStatus,
    eyebrow: L('Operational communications', 'Cyfathrebu gweithredol', 'Comunicações operacionais', 'Comunicaciones operativas', 'Communications opérationnelles'),
    summary: L('This page records public incident and maintenance notices for JA Group Services websites and customer services.', 'Mae’r dudalen hon yn cofnodi hysbysiadau cyhoeddus am ddigwyddiadau a chynnal a chadw ar gyfer gwefannau a gwasanaethau cwsmeriaid JA Group Services.', 'Esta página regista avisos públicos de incidentes e manutenção dos sites e serviços de apoio ao cliente da JA Group Services.', 'Esta página registra avisos públicos de incidentes y mantenimiento de los sitios y servicios de atención al cliente de JA Group Services.', 'Cette page recense les avis publics d’incident et de maintenance concernant les sites et services clients de JA Group Services.'),
    description: L('Public service-status information.', 'Gwybodaeth statws gwasanaeth cyhoeddus.', 'Informação pública sobre o estado dos serviços.', 'Información pública sobre el estado de los servicios.', 'Informations publiques sur l’état des services.'),
    status: L('No public major-incident notice is currently published on this page.', 'Nid oes hysbysiad digwyddiad mawr cyhoeddus wedi’i gyhoeddi ar y dudalen hon ar hyn o bryd.', 'Não existe atualmente qualquer aviso público de incidente grave publicado nesta página.', 'Actualmente no hay ningún aviso público de incidente grave publicado en esta página.', 'Aucun avis public d’incident majeur n’est actuellement publié sur cette page.'),
    sections: [
      {
        heading: L('Services covered', 'Gwasanaethau a gwmpesir', 'Serviços abrangidos', 'Servicios cubiertos', 'Services couverts'),
        bullets: [
          L('JA Group Services corporate website and central customer support', 'Gwefan gorfforaethol JA Group Services a chymorth cwsmeriaid canolog', 'Site corporativo da JA Group Services e apoio central ao cliente', 'Sitio corporativo de JA Group Services y soporte central al cliente', 'Site institutionnel de JA Group Services et assistance client centrale'),
          L('Profile Centre', 'Profile Centre', 'Profile Centre', 'Profile Centre', 'Profile Centre'),
          L('Planyx', 'Planyx', 'Planyx', 'Planyx', 'Planyx'),
          L('JA Domain Hub', 'JA Domain Hub', 'JA Domain Hub', 'JA Domain Hub', 'JA Domain Hub'),
          L('Customer identity and account-support functions', 'Swyddogaethau hunaniaeth cwsmeriaid a chymorth cyfrifon', 'Funções de identidade de clientes e apoio a contas', 'Funciones de identidad del cliente y soporte de cuentas', 'Fonctions d’identité client et d’assistance aux comptes'),
        ],
      },
      {
        heading: L('How incidents are communicated', 'Sut y cyfathrebir digwyddiadau', 'Como comunicamos incidentes', 'Cómo comunicamos los incidentes', 'Comment les incidents sont communiqués'),
        paragraphs: [L('Where a material incident affects customers, Head Office may publish an incident notice, maintenance notice or service-specific message. Absence of a notice is not a guarantee of uninterrupted service.', 'Pan fydd digwyddiad sylweddol yn effeithio ar gwsmeriaid, gall y Brif Swyddfa gyhoeddi hysbysiad digwyddiad, hysbysiad cynnal a chadw neu neges gwasanaeth-benodol. Nid yw diffyg hysbysiad yn warant o wasanaeth di-dor.', 'Quando um incidente material afeta clientes, a Sede pode publicar um aviso de incidente, manutenção ou mensagem específica do serviço. A ausência de aviso não garante serviço ininterrupto.', 'Cuando un incidente importante afecta a los clientes, la Sede puede publicar un aviso de incidente, mantenimiento o mensaje específico del servicio. La ausencia de aviso no garantiza un servicio ininterrumpido.', 'Lorsqu’un incident important affecte les clients, le siège peut publier un avis d’incident, de maintenance ou un message propre au service. L’absence d’avis ne garantit pas un service ininterrompu.')],
      },
      {
        heading: L('Report a problem', 'Rhoi gwybod am broblem', 'Comunicar um problema', 'Informar de un problema', 'Signaler un problème'),
        links: [{ label: uiText.supportCentre, href: '/help-and-support' }, { label: uiText.contact, href: '/contactus' }],
      },
    ],
  },
  {
    id: 'announcements',
    path: '/announcements',
    title: uiText.announcements,
    eyebrow: L('Company notices', 'Hysbysiadau’r cwmni', 'Avisos da empresa', 'Avisos de la empresa', 'Avis de la société'),
    summary: L('Official public notices and material service updates issued by JA Group Services Ltd.', 'Hysbysiadau cyhoeddus swyddogol a diweddariadau gwasanaeth sylweddol a gyhoeddwyd gan JA Group Services Ltd.', 'Avisos públicos oficiais e atualizações materiais de serviços emitidos pela JA Group Services Ltd.', 'Avisos públicos oficiales y actualizaciones importantes de servicios emitidos por JA Group Services Ltd.', 'Avis publics officiels et mises à jour importantes des services publiés par JA Group Services Ltd.'),
    description: L('Public company announcements.', 'Cyhoeddiadau cyhoeddus y cwmni.', 'Anúncios públicos da empresa.', 'Anuncios públicos de la empresa.', 'Annonces publiques de la société.'),
    sections: [
      {
        heading: L('Current notices', 'Hysbysiadau cyfredol', 'Avisos atuais', 'Avisos actuales', 'Avis actuels'),
        paragraphs: [L('No additional material corporate announcement is published through this page at the time of this review. Operational incidents are published through the Service Status page.', 'Nid oes unrhyw gyhoeddiad corfforaethol sylweddol ychwanegol wedi’i gyhoeddi drwy’r dudalen hon ar adeg yr adolygiad hwn. Cyhoeddir digwyddiadau gweithredol drwy’r dudalen Statws Gwasanaeth.', 'Não existe qualquer anúncio corporativo material adicional publicado nesta página na data desta revisão. Os incidentes operacionais são publicados na página Estado do Serviço.', 'No se publica ningún anuncio corporativo importante adicional en esta página en la fecha de esta revisión. Los incidentes operativos se publican en la página Estado del Servicio.', 'Aucune autre annonce importante de l’entreprise n’est publiée sur cette page à la date de la présente révision. Les incidents opérationnels sont publiés sur la page État du service.')],
      },
      {
        heading: L('Historic service notice', 'Hysbysiad gwasanaeth hanesyddol', 'Aviso histórico de serviço', 'Aviso histórico de servicio', 'Avis historique de service'),
        paragraphs: [L('JA Learning Hub was permanently closed as an operational and public-facing division with effect from 23 May 2026. JA Group Services Ltd continues to exist and operate independently of that closed division.', 'Caewyd JA Learning Hub yn barhaol fel is-adran weithredol a chyhoeddus o 23 Mai 2026. Mae JA Group Services Ltd yn parhau i fodoli a gweithredu’n annibynnol ar yr is-adran gaeedig honno.', 'A JA Learning Hub foi encerrada permanentemente como divisão operacional e pública com efeitos a partir de 23 de maio de 2026. A JA Group Services Ltd continua a existir e a operar independentemente dessa divisão encerrada.', 'JA Learning Hub se cerró permanentemente como división operativa y pública con efecto desde el 23 de mayo de 2026. JA Group Services Ltd continúa existiendo y operando con independencia de dicha división cerrada.', 'JA Learning Hub a été définitivement fermée en tant que division opérationnelle et publique à compter du 23 mai 2026. JA Group Services Ltd continue d’exister et d’exercer ses activités indépendamment de cette division fermée.')],
        links: [{ label: uiText.formerServices, href: '/former-services' }],
      },
    ],
  },
  {
    id: 'former-services',
    path: '/former-services',
    title: uiText.formerServices,
    eyebrow: L('Historic information', 'Gwybodaeth hanesyddol', 'Informação histórica', 'Información histórica', 'Informations historiques'),
    summary: L('Clear information about closed services and former company names.', 'Gwybodaeth glir am wasanaethau sydd wedi cau ac enwau blaenorol y cwmni.', 'Informação clara sobre serviços encerrados e nomes anteriores da empresa.', 'Información clara sobre servicios cerrados y nombres anteriores de la empresa.', 'Informations claires sur les services fermés et les anciennes dénominations de la société.'),
    description: L('Historic service and company-name information.', 'Gwybodaeth am wasanaethau ac enwau cwmni hanesyddol.', 'Informação histórica sobre serviços e nomes da empresa.', 'Información histórica sobre servicios y nombres de la empresa.', 'Informations historiques sur les services et les dénominations de la société.'),
    sections: [
      {
        heading: L('JA Learning Hub closure', 'Cau JA Learning Hub', 'Encerramento da JA Learning Hub', 'Cierre de JA Learning Hub', 'Fermeture de JA Learning Hub'),
        paragraphs: [L('The Board resolved that JA Learning Hub would permanently close as an operational and public-facing division with effect from 23 May 2026. It was a trading division only and not a separate legal entity. Historic records remain under the control of JA Group Services Ltd and are retained only where necessary.', 'Penderfynodd y Bwrdd y byddai JA Learning Hub yn cau’n barhaol fel is-adran weithredol a chyhoeddus o 23 Mai 2026. Is-adran fasnachu yn unig oedd hi ac nid endid cyfreithiol ar wahân. Mae cofnodion hanesyddol yn parhau o dan reolaeth JA Group Services Ltd ac fe’u cedwir dim ond lle bo angen.', 'O Conselho decidiu encerrar permanentemente a JA Learning Hub como divisão operacional e pública com efeitos a partir de 23 de maio de 2026. Era apenas uma divisão comercial e não uma entidade jurídica separada. Os registos históricos permanecem sob controlo da JA Group Services Ltd e são conservados apenas quando necessário.', 'El Consejo resolvió cerrar permanentemente JA Learning Hub como división operativa y pública con efecto desde el 23 de mayo de 2026. Era únicamente una división comercial y no una entidad jurídica independiente. Los registros históricos permanecen bajo el control de JA Group Services Ltd y se conservan solo cuando es necesario.', 'Le Conseil a décidé de fermer définitivement JA Learning Hub en tant que division opérationnelle et publique à compter du 23 mai 2026. Il s’agissait uniquement d’une division commerciale et non d’une entité juridique distincte. Les archives historiques restent sous le contrôle de JA Group Services Ltd et ne sont conservées que lorsque cela est nécessaire.')],
      },
      {
        heading: L('Former legal names', 'Enwau cyfreithiol blaenorol', 'Nomes jurídicos anteriores', 'Nombres jurídicos anteriores', 'Anciennes dénominations sociales'),
        bullets: [
          L('J&A Hubstore Limited', 'J&A Hubstore Limited', 'J&A Hubstore Limited', 'J&A Hubstore Limited', 'J&A Hubstore Limited'),
          L('J A Training Ltd', 'J A Training Ltd', 'J A Training Ltd', 'J A Training Ltd', 'J A Training Ltd'),
          L('JA Learning Hub Ltd', 'JA Learning Hub Ltd', 'JA Learning Hub Ltd', 'JA Learning Hub Ltd', 'JA Learning Hub Ltd'),
          L('Current legal name: JA Group Services Ltd', 'Enw cyfreithiol cyfredol: JA Group Services Ltd', 'Nome jurídico atual: JA Group Services Ltd', 'Nombre jurídico actual: JA Group Services Ltd', 'Dénomination sociale actuelle : JA Group Services Ltd'),
        ],
      },
      {
        heading: L('Avoiding confusion', 'Osgoi dryswch', 'Evitar confusão', 'Evitar confusiones', 'Éviter toute confusion'),
        paragraphs: [L('Historic websites, cached search results or documents may contain former names. They do not indicate that a closed service remains active. Current service information is available on the Brands and Services page.', 'Gall gwefannau hanesyddol, canlyniadau chwilio wedi’u storio neu ddogfennau gynnwys enwau blaenorol. Nid ydynt yn dangos bod gwasanaeth caeedig yn parhau’n weithredol. Mae gwybodaeth gwasanaeth gyfredol ar gael ar y dudalen Brandiau a Gwasanaethau.', 'Sites históricos, resultados em cache ou documentos podem conter nomes anteriores. Isso não significa que um serviço encerrado continue ativo. A informação atual está na página Marcas e Serviços.', 'Los sitios históricos, resultados en caché o documentos pueden contener nombres anteriores. Esto no indica que un servicio cerrado siga activo. La información actual se encuentra en la página Marcas y Servicios.', 'Des sites historiques, résultats en cache ou documents peuvent contenir d’anciennes dénominations. Cela ne signifie pas qu’un service fermé reste actif. Les informations actuelles figurent sur la page Marques et services.')],
      },
    ],
  },
  {
    id: 'terms',
    path: '/terms-of-service',
    title: uiText.terms,
    eyebrow: L('Legal terms', 'Telerau cyfreithiol', 'Termos jurídicos', 'Términos legales', 'Conditions juridiques'),
    summary: L('Terms governing use of the corporate website and services supplied or facilitated by JA Group Services Ltd.', 'Telerau sy’n llywodraethu defnydd o’r wefan gorfforaethol a gwasanaethau a gyflenwir neu a hwylusir gan JA Group Services Ltd.', 'Termos que regem a utilização do site corporativo e dos serviços fornecidos ou facilitados pela JA Group Services Ltd.', 'Términos que rigen el uso del sitio corporativo y de los servicios suministrados o facilitados por JA Group Services Ltd.', 'Conditions régissant l’utilisation du site institutionnel et des services fournis ou facilités par JA Group Services Ltd.'),
    description: L('Terms of Service for JA Group Services Ltd.', 'Telerau Gwasanaeth JA Group Services Ltd.', 'Termos de Serviço da JA Group Services Ltd.', 'Términos del Servicio de JA Group Services Ltd.', 'Conditions de service de JA Group Services Ltd.'),
    effectiveDate: '2 August 2026',
    printable: true,
    legalDocument: true,
    sections: [
      {
        heading: L('1. Company and scope', '1. Cwmni a chwmpas', '1. Empresa e âmbito', '1. Empresa y alcance', '1. Société et champ d’application'),
        paragraphs: [
          L(`These Terms apply to the corporate website, associated subdomains, customer portals and services operated, supplied, resold, facilitated or promoted by ${company.name}.`, `Mae’r Telerau hyn yn berthnasol i’r wefan gorfforaethol, is-barthau cysylltiedig, pyrth cwsmeriaid a gwasanaethau a weithredir, a gyflenwir, a ailwerthir, a hwylusir neu a hyrwyddir gan ${company.name}.`, `Estes Termos aplicam-se ao site corporativo, subdomínios associados, portais de clientes e serviços operados, fornecidos, revendidos, facilitados ou promovidos pela ${company.name}.`, `Estos Términos se aplican al sitio corporativo, subdominios asociados, portales de clientes y servicios operados, suministrados, revendidos, facilitados o promocionados por ${company.name}.`, `Les présentes Conditions s’appliquent au site institutionnel, aux sous-domaines associés, aux portails clients et aux services exploités, fournis, revendus, facilités ou promus par ${company.name}.`),
          L('Service-specific terms shown before purchase or registration also apply. If they conflict with these general Terms, the service-specific terms prevail for that service.', 'Mae telerau gwasanaeth-benodol a ddangosir cyn prynu neu gofrestru hefyd yn berthnasol. Os ydynt yn gwrthdaro â’r Telerau cyffredinol hyn, y telerau gwasanaeth-benodol sy’n drech ar gyfer y gwasanaeth hwnnw.', 'Também se aplicam os termos específicos apresentados antes da compra ou registo. Em caso de conflito, prevalecem os termos específicos do serviço.', 'También se aplican los términos específicos mostrados antes de la compra o el registro. En caso de conflicto, prevalecen los términos específicos del servicio.', 'Les conditions propres au service présentées avant l’achat ou l’inscription s’appliquent également. En cas de conflit, elles prévalent pour le service concerné.'),
        ],
      },
      {
        heading: L('2. Our operating role', '2. Ein rôl weithredu', '2. A nossa função operacional', '2. Nuestra función operativa', '2. Notre rôle opérationnel'),
        paragraphs: [L('Depending on the service, we may act as the direct provider, platform operator, service manager, reseller, affiliate, introducer or administrative intermediary. The relevant page will explain when an independent provider supplies the underlying product or infrastructure.', 'Yn dibynnu ar y gwasanaeth, gallwn weithredu fel darparwr uniongyrchol, gweithredwr llwyfan, rheolwr gwasanaeth, ailwerthwr, cysylltai, cyflwynydd neu gyfryngwr gweinyddol. Bydd y dudalen berthnasol yn egluro pan fydd darparwr annibynnol yn cyflenwi’r cynnyrch neu’r seilwaith sylfaenol.', 'Consoante o serviço, podemos atuar como fornecedor direto, operador de plataforma, gestor de serviço, revendedor, afiliado, introdutor ou intermediário administrativo. A página relevante indicará quando um fornecedor independente fornece o produto ou a infraestrutura subjacente.', 'Según el servicio, podemos actuar como proveedor directo, operador de plataforma, gestor del servicio, revendedor, afiliado, introductor o intermediario administrativo. La página correspondiente indicará cuándo un proveedor independiente suministra el producto o la infraestructura subyacente.', 'Selon le service, nous pouvons agir en qualité de fournisseur direct, opérateur de plateforme, gestionnaire de service, revendeur, affilié, apporteur ou intermédiaire administratif. La page concernée indique lorsqu’un fournisseur indépendant fournit le produit ou l’infrastructure sous-jacente.')],
      },
      {
        heading: L('3. Eligibility and accounts', '3. Cymhwystra a chyfrifon', '3. Elegibilidade e contas', '3. Requisitos y cuentas', '3. Éligibilité et comptes'),
        bullets: [
          L('You must have legal capacity to enter the relevant contract.', 'Rhaid bod gennych y gallu cyfreithiol i ymrwymo i’r contract perthnasol.', 'Deve ter capacidade jurídica para celebrar o contrato relevante.', 'Debe tener capacidad jurídica para celebrar el contrato correspondiente.', 'Vous devez avoir la capacité juridique de conclure le contrat concerné.'),
          L('Business users confirm that they have authority to bind their organisation.', 'Mae defnyddwyr busnes yn cadarnhau bod ganddynt awdurdod i rwymo eu sefydliad.', 'Os utilizadores empresariais confirmam que têm autoridade para vincular a organização.', 'Los usuarios empresariales confirman que tienen autoridad para obligar a su organización.', 'Les utilisateurs professionnels confirment qu’ils sont habilités à engager leur organisation.'),
          L('Information supplied must be accurate and kept up to date.', 'Rhaid i wybodaeth a ddarperir fod yn gywir ac yn gyfredol.', 'As informações fornecidas devem ser exatas e atualizadas.', 'La información facilitada debe ser exacta y mantenerse actualizada.', 'Les informations fournies doivent être exactes et tenues à jour.'),
          L('You are responsible for protecting login credentials and reporting suspected compromise promptly.', 'Chi sy’n gyfrifol am ddiogelu manylion mewngofnodi a rhoi gwybod am gyfaddawdu a amheuir yn brydlon.', 'É responsável por proteger as credenciais e comunicar rapidamente qualquer suspeita de comprometimento.', 'Es responsable de proteger sus credenciales y comunicar con prontitud cualquier posible compromiso.', 'Vous êtes responsable de la protection de vos identifiants et devez signaler rapidement toute compromission présumée.'),
        ],
      },
      {
        heading: L('4. Acceptable use', '4. Defnydd derbyniol', '4. Utilização aceitável', '4. Uso aceptable', '4. Utilisation acceptable'),
        bullets: [
          L('Do not use our services unlawfully, fraudulently or to harm another person.', 'Peidiwch â defnyddio ein gwasanaethau’n anghyfreithlon, yn dwyllodrus nac i niweidio person arall.', 'Não utilize os serviços de forma ilegal, fraudulenta ou para prejudicar terceiros.', 'No utilice los servicios de forma ilegal, fraudulenta ni para perjudicar a terceros.', 'N’utilisez pas nos services de manière illégale, frauduleuse ou pour nuire à autrui.'),
          L('Do not attempt unauthorised access, security testing, disruption, scraping or circumvention of controls.', 'Peidiwch â cheisio mynediad anawdurdodedig, profi diogelwch, tarfu, sgrapio neu osgoi rheolaethau.', 'Não tente acesso não autorizado, testes de segurança, perturbação, recolha automatizada ou contorno de controlos.', 'No intente acceder sin autorización, realizar pruebas de seguridad, interrumpir, extraer datos ni eludir controles.', 'Ne tentez pas d’accès non autorisé, de test de sécurité, de perturbation, d’extraction automatisée ou de contournement des contrôles.'),
          L('Do not upload unlawful, infringing, abusive or malicious content.', 'Peidiwch ag uwchlwytho cynnwys anghyfreithlon, tramgwyddus, camdriniol neu faleisus.', 'Não carregue conteúdos ilegais, infratores, abusivos ou maliciosos.', 'No cargue contenido ilegal, infractor, abusivo o malicioso.', 'Ne téléversez aucun contenu illégal, contrefaisant, abusif ou malveillant.'),
        ],
      },
      {
        heading: L('5. Prices, payment, renewals and cancellation', '5. Prisiau, taliad, adnewyddu a chanslo', '5. Preços, pagamentos, renovações e cancelamento', '5. Precios, pagos, renovaciones y cancelación', '5. Prix, paiement, renouvellements et résiliation'),
        paragraphs: [L('Prices, billing frequency, renewal terms and any cancellation rights are shown before purchase. Consumer rights under applicable law are not excluded. Where a third party is the contracting provider, its payment and cancellation terms apply.', 'Dangosir prisiau, amlder bilio, telerau adnewyddu ac unrhyw hawliau canslo cyn prynu. Ni chaiff hawliau defnyddwyr o dan gyfraith berthnasol eu heithrio. Pan fo trydydd parti yn ddarparwr contractio, mae ei delerau talu a chanslo yn berthnasol.', 'Os preços, a periodicidade de faturação, os termos de renovação e os direitos de cancelamento são apresentados antes da compra. Os direitos legais do consumidor não são excluídos. Quando um terceiro é o fornecedor contratual, aplicam-se os respetivos termos de pagamento e cancelamento.', 'Los precios, la frecuencia de facturación, las condiciones de renovación y los derechos de cancelación se muestran antes de la compra. No se excluyen los derechos legales del consumidor. Cuando un tercero sea el proveedor contractual, se aplicarán sus condiciones de pago y cancelación.', 'Les prix, la fréquence de facturation, les conditions de renouvellement et les droits de résiliation sont indiqués avant l’achat. Les droits légaux des consommateurs ne sont pas exclus. Lorsqu’un tiers est le fournisseur contractuel, ses conditions de paiement et de résiliation s’appliquent.')],
      },
      {
        heading: L('6. Third-party and affiliate services', '6. Gwasanaethau trydydd parti a chysylltiedig', '6. Serviços de terceiros e afiliados', '6. Servicios de terceros y afiliados', '6. Services tiers et d’affiliation'),
        paragraphs: [L('Where you contract directly with a third party, that provider is responsible for its service, fulfilment, pricing, refunds and provider-level complaints. We may receive commission or another commercial benefit, which does not increase your statutory rights or make us responsible for the third party’s performance.', 'Pan fyddwch yn contractio’n uniongyrchol â thrydydd parti, y darparwr hwnnw sy’n gyfrifol am ei wasanaeth, cyflawni, prisio, ad-daliadau a chwynion lefel darparwr. Gallwn dderbyn comisiwn neu fudd masnachol arall, nad yw’n cynyddu eich hawliau statudol nac yn ein gwneud yn gyfrifol am berfformiad y trydydd parti.', 'Quando contrata diretamente com um terceiro, esse fornecedor é responsável pelo serviço, cumprimento, preços, reembolsos e reclamações ao nível do fornecedor. Podemos receber uma comissão ou outro benefício comercial, o que não aumenta os seus direitos legais nem nos torna responsáveis pelo desempenho do terceiro.', 'Cuando contrate directamente con un tercero, dicho proveedor será responsable del servicio, cumplimiento, precios, reembolsos y quejas a nivel de proveedor. Podemos recibir una comisión u otro beneficio comercial, lo que no aumenta sus derechos legales ni nos hace responsables del desempeño del tercero.', 'Lorsque vous contractez directement avec un tiers, celui-ci est responsable de son service, de l’exécution, des prix, des remboursements et des réclamations relevant du fournisseur. Nous pouvons percevoir une commission ou un autre avantage commercial, sans que cela n’accroisse vos droits légaux ni ne nous rende responsables de l’exécution du tiers.')],
      },
      {
        heading: L('7. Availability and changes', '7. Argaeledd a newidiadau', '7. Disponibilidade e alterações', '7. Disponibilidad y cambios', '7. Disponibilité et modifications'),
        paragraphs: [L('We may maintain, improve, suspend or withdraw features where reasonably necessary. We do not promise uninterrupted availability. Material changes affecting an existing paid service will be communicated as required by contract and law.', 'Gallwn gynnal, gwella, atal neu dynnu nodweddion yn ôl lle bo hynny’n rhesymol angenrheidiol. Nid ydym yn addo argaeledd di-dor. Bydd newidiadau sylweddol sy’n effeithio ar wasanaeth taledig presennol yn cael eu cyfathrebu fel sy’n ofynnol gan gontract a chyfraith.', 'Podemos manter, melhorar, suspender ou retirar funcionalidades quando razoavelmente necessário. Não garantimos disponibilidade ininterrupta. Alterações materiais a serviços pagos existentes serão comunicadas conforme exigido por contrato e lei.', 'Podemos mantener, mejorar, suspender o retirar funciones cuando sea razonablemente necesario. No garantizamos disponibilidad ininterrumpida. Los cambios importantes que afecten a servicios de pago existentes se comunicarán conforme al contrato y la ley.', 'Nous pouvons maintenir, améliorer, suspendre ou retirer des fonctionnalités lorsque cela est raisonnablement nécessaire. Nous ne garantissons pas une disponibilité ininterrompue. Toute modification importante affectant un service payant existant sera communiquée conformément au contrat et à la loi.')],
      },
      {
        heading: L('8. Intellectual property', '8. Eiddo deallusol', '8. Propriedade intelectual', '8. Propiedad intelectual', '8. Propriété intellectuelle'),
        paragraphs: [L('Company and group branding, website content, software, designs and documentation are protected by intellectual-property rights. No rights are transferred except the limited permission necessary to use the service lawfully. Third-party material remains owned by its respective owner.', 'Mae brandio’r cwmni a’r grŵp, cynnwys gwefan, meddalwedd, dyluniadau a dogfennau wedi’u diogelu gan hawliau eiddo deallusol. Ni throsglwyddir unrhyw hawliau ac eithrio’r caniatâd cyfyngedig sy’n angenrheidiol i ddefnyddio’r gwasanaeth yn gyfreithlon. Mae deunydd trydydd parti yn parhau’n eiddo i’w berchennog priodol.', 'A marca do grupo e da empresa, conteúdos do site, software, designs e documentação estão protegidos por direitos de propriedade intelectual. Nenhum direito é transferido, exceto a autorização limitada necessária para utilizar legalmente o serviço. Os materiais de terceiros pertencem aos respetivos proprietários.', 'La marca del grupo y de la empresa, el contenido del sitio, el software, los diseños y la documentación están protegidos por derechos de propiedad intelectual. No se transfieren derechos salvo el permiso limitado necesario para utilizar legalmente el servicio. El material de terceros pertenece a sus respectivos titulares.', 'Les marques du groupe et de la société, le contenu du site, les logiciels, les créations et la documentation sont protégés par des droits de propriété intellectuelle. Aucun droit n’est transféré, à l’exception de l’autorisation limitée nécessaire à l’utilisation licite du service. Les éléments de tiers restent la propriété de leurs titulaires respectifs.')],
      },
      {
        heading: L('9. Liability', '9. Atebolrwydd', '9. Responsabilidade', '9. Responsabilidad', '9. Responsabilité'),
        paragraphs: [L('Nothing in these Terms excludes liability that cannot lawfully be excluded, including liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation. Subject to that rule, liability is limited to losses that are a reasonably foreseeable result of our breach and to the extent permitted by applicable law.', 'Nid oes dim yn y Telerau hyn yn eithrio atebolrwydd na ellir ei eithrio’n gyfreithlon, gan gynnwys atebolrwydd am farwolaeth neu anaf personol a achosir gan esgeulustod, twyll neu gamliwiad twyllodrus. Yn ddarostyngedig i hynny, mae atebolrwydd wedi’i gyfyngu i golledion sy’n ganlyniad rhesymol ragweladwy i’n tor-contract ac i’r graddau a ganiateir gan gyfraith berthnasol.', 'Nada nestes Termos exclui responsabilidade que não possa ser legalmente excluída, incluindo morte ou lesão pessoal causada por negligência, fraude ou declaração fraudulenta. Sujeita a essa regra, a responsabilidade limita-se às perdas razoavelmente previsíveis resultantes do nosso incumprimento e na medida permitida por lei.', 'Nada de estos Términos excluye responsabilidad que no pueda excluirse legalmente, incluida la muerte o lesión personal causada por negligencia, fraude o declaración fraudulenta. Sujeta a esa regla, la responsabilidad se limita a las pérdidas razonablemente previsibles derivadas de nuestro incumplimiento y en la medida permitida por la ley.', 'Aucune disposition des présentes Conditions n’exclut une responsabilité qui ne peut légalement l’être, notamment en cas de décès ou de dommage corporel causé par négligence, fraude ou déclaration frauduleuse. Sous réserve de cette règle, la responsabilité est limitée aux pertes raisonnablement prévisibles résultant de notre manquement et dans la mesure permise par la loi applicable.')],
      },
      {
        heading: L('10. Suspension and termination', '10. Atal a therfynu', '10. Suspensão e cessação', '10. Suspensión y terminación', '10. Suspension et résiliation'),
        paragraphs: [L('We may suspend or terminate access for material breach, fraud, security risk, non-payment or legal necessity, using a proportionate process where practicable. You may close or cancel a service using the process stated for that service, subject to outstanding obligations.', 'Gallwn atal neu derfynu mynediad am dor-contract sylweddol, twyll, risg diogelwch, diffyg talu neu angen cyfreithiol, gan ddefnyddio proses gymesur lle bo’n ymarferol. Gallwch gau neu ganslo gwasanaeth gan ddefnyddio’r broses a nodir ar gyfer y gwasanaeth hwnnw, yn ddarostyngedig i rwymedigaethau sy’n weddill.', 'Podemos suspender ou terminar o acesso por incumprimento material, fraude, risco de segurança, falta de pagamento ou necessidade legal, utilizando um processo proporcional quando possível. Pode encerrar ou cancelar um serviço através do procedimento indicado, sujeito a obrigações pendentes.', 'Podemos suspender o cancelar el acceso por incumplimiento grave, fraude, riesgo de seguridad, impago o necesidad legal, utilizando un proceso proporcionado cuando sea posible. Puede cerrar o cancelar un servicio mediante el procedimiento indicado, sujeto a obligaciones pendientes.', 'Nous pouvons suspendre ou résilier l’accès en cas de manquement grave, fraude, risque de sécurité, défaut de paiement ou nécessité légale, selon une procédure proportionnée lorsque cela est possible. Vous pouvez fermer ou résilier un service conformément à la procédure indiquée, sous réserve des obligations restant dues.')],
      },
      {
        heading: L('11. Complaints, governing law and contact', '11. Cwynion, cyfraith lywodraethol a chyswllt', '11. Reclamações, lei aplicável e contacto', '11. Quejas, ley aplicable y contacto', '11. Réclamations, droit applicable et contact'),
        paragraphs: [L(`Complaints may be submitted to ${company.complaintsEmail}. These Terms are governed by the law of England and Wales. Consumers retain any mandatory rights to bring proceedings in another competent UK jurisdiction where applicable.`, `Gellir cyflwyno cwynion i ${company.complaintsEmail}. Llywodraethir y Telerau hyn gan gyfraith Cymru a Lloegr. Mae defnyddwyr yn cadw unrhyw hawliau gorfodol i ddod ag achos mewn awdurdodaeth gymwys arall yn y DU lle bo’n berthnasol.`, `As reclamações podem ser enviadas para ${company.complaintsEmail}. Estes Termos são regidos pela lei de Inglaterra e País de Gales. Os consumidores mantêm os direitos imperativos de recorrer a outra jurisdição competente do Reino Unido quando aplicável.`, `Las quejas pueden enviarse a ${company.complaintsEmail}. Estos Términos se rigen por las leyes de Inglaterra y Gales. Los consumidores conservan cualquier derecho imperativo a acudir a otra jurisdicción competente del Reino Unido cuando corresponda.`, `Les réclamations peuvent être adressées à ${company.complaintsEmail}. Les présentes Conditions sont régies par le droit de l’Angleterre et du pays de Galles. Les consommateurs conservent tout droit impératif de saisir une autre juridiction compétente du Royaume-Uni lorsque cela s’applique.`)],
      },
      commonCompanySection,
    ],
  },
  {
    id: 'privacy',
    path: '/privacy-policy',
    title: uiText.privacy,
    eyebrow: L('UK GDPR transparency information', 'Gwybodaeth tryloywder GDPR y DU', 'Informação de transparência do RGPD do Reino Unido', 'Información de transparencia del RGPD del Reino Unido', 'Informations de transparence au titre du RGPD britannique'),
    summary: L('How JA Group Services Ltd collects, uses, shares, retains and protects personal data.', 'Sut mae JA Group Services Ltd yn casglu, defnyddio, rhannu, cadw a diogelu data personol.', 'Como a JA Group Services Ltd recolhe, utiliza, partilha, conserva e protege dados pessoais.', 'Cómo JA Group Services Ltd recopila, utiliza, comparte, conserva y protege los datos personales.', 'Comment JA Group Services Ltd collecte, utilise, partage, conserve et protège les données à caractère personnel.'),
    description: L('Privacy information for JA Group Services Ltd websites and services.', 'Gwybodaeth preifatrwydd ar gyfer gwefannau a gwasanaethau JA Group Services Ltd.', 'Informação de privacidade dos sites e serviços da JA Group Services Ltd.', 'Información de privacidad de los sitios y servicios de JA Group Services Ltd.', 'Informations de confidentialité concernant les sites et services de JA Group Services Ltd.'),
    effectiveDate: '2 August 2026',
    printable: true,
    legalDocument: true,
    sections: [
      {
        heading: L('1. Data controller and Data Protection Officer', '1. Rheolydd data a Swyddog Diogelu Data', '1. Responsável pelo tratamento e Encarregado da Proteção de Dados', '1. Responsable del tratamiento y Delegado de Protección de Datos', '1. Responsable du traitement et Délégué à la protection des données'),
        paragraphs: [L(`${company.name} is the data controller for personal data it determines how and why to process. The Data Protection Officer is Mr Alfie Thomas Holywood Murray and can be contacted at ${company.dataProtectionEmail}.`, `${company.name} yw’r rheolydd data ar gyfer data personol y mae’n penderfynu sut a pham i’w brosesu. Y Swyddog Diogelu Data yw Mr Alfie Thomas Holywood Murray a gellir cysylltu ag ef yn ${company.dataProtectionEmail}.`, `${company.name} é responsável pelo tratamento dos dados pessoais cujas finalidades e meios determina. O Encarregado da Proteção de Dados é Mr Alfie Thomas Holywood Murray e pode ser contactado em ${company.dataProtectionEmail}.`, `${company.name} es responsable del tratamiento de los datos personales cuyos fines y medios determina. El Delegado de Protección de Datos es Mr Alfie Thomas Holywood Murray y puede contactarse en ${company.dataProtectionEmail}.`, `${company.name} est responsable du traitement des données à caractère personnel dont elle détermine les finalités et les moyens. Le Délégué à la protection des données est M. Alfie Thomas Holywood Murray, joignable à ${company.dataProtectionEmail}.`)],
      },
      {
        heading: L('2. Scope', '2. Cwmpas', '2. Âmbito', '2. Alcance', '2. Champ d’application'),
        paragraphs: [L('This Policy applies to the corporate website, Profile Centre, Planyx, JA Domain Hub, customer-support and Head Office operational systems, and related communications. A service-specific notice may provide additional information.', 'Mae’r Polisi hwn yn berthnasol i’r wefan gorfforaethol, Profile Centre, Planyx, JA Domain Hub, systemau cymorth i gwsmeriaid a gweithredol y Brif Swyddfa, a chyfathrebiadau cysylltiedig. Gall hysbysiad gwasanaeth-benodol ddarparu gwybodaeth ychwanegol.', 'Esta Política aplica-se ao site corporativo, Profile Centre, Planyx, JA Domain Hub, sistemas de apoio ao cliente e operações da Sede, bem como às comunicações relacionadas. Um aviso específico do serviço pode fornecer informação adicional.', 'Esta Política se aplica al sitio corporativo, Profile Centre, Planyx, JA Domain Hub, sistemas de soporte al cliente y operaciones de la Sede, así como a comunicaciones relacionadas. Un aviso específico del servicio puede proporcionar información adicional.', 'La présente Politique s’applique au site institutionnel, à Profile Centre, Planyx, JA Domain Hub, aux systèmes d’assistance client et d’exploitation du siège, ainsi qu’aux communications associées. Un avis propre au service peut fournir des informations complémentaires.')],
      },
      {
        heading: L('3. Personal data we may process', '3. Data personol y gallwn eu prosesu', '3. Dados pessoais que podemos tratar', '3. Datos personales que podemos tratar', '3. Données à caractère personnel susceptibles d’être traitées'),
        bullets: [
          L('Identity and contact data, including name, email, telephone number and postal address', 'Data hunaniaeth a chyswllt, gan gynnwys enw, e-bost, rhif ffôn a chyfeiriad post', 'Dados de identificação e contacto, incluindo nome, email, telefone e endereço postal', 'Datos de identidad y contacto, incluidos nombre, correo electrónico, teléfono y dirección postal', 'Données d’identité et de contact, notamment nom, adresse électronique, téléphone et adresse postale'),
          L('Account, profile, service and support records', 'Cofnodion cyfrif, proffil, gwasanaeth a chymorth', 'Registos de conta, perfil, serviço e apoio', 'Registros de cuenta, perfil, servicio y soporte', 'Données de compte, de profil, de service et d’assistance'),
          L('Billing, transaction and limited payment-reference information', 'Gwybodaeth bilio, trafodion a chyfeirnod talu cyfyngedig', 'Informações de faturação, transações e referências limitadas de pagamento', 'Información de facturación, transacciones y referencias limitadas de pago', 'Informations de facturation, de transaction et références de paiement limitées'),
          L('Technical, device, log, security and usage data', 'Data technegol, dyfais, log, diogelwch a defnydd', 'Dados técnicos, de dispositivo, registo, segurança e utilização', 'Datos técnicos, de dispositivo, registro, seguridad y uso', 'Données techniques, d’appareil, de journal, de sécurité et d’utilisation'),
          L('Communications, complaints, data-rights requests and governance records', 'Cyfathrebiadau, cwynion, ceisiadau hawliau data a chofnodion llywodraethu', 'Comunicações, reclamações, pedidos de direitos e registos de governação', 'Comunicaciones, quejas, solicitudes de derechos y registros de gobernanza', 'Communications, réclamations, demandes d’exercice de droits et registres de gouvernance'),
        ],
      },
      {
        heading: L('4. How data is collected', '4. Sut y cesglir data', '4. Como os dados são recolhidos', '4. Cómo se recopilan los datos', '4. Comment les données sont collectées'),
        bullets: [
          L('Directly from you through forms, accounts, email, telephone or support interactions', 'Yn uniongyrchol gennych drwy ffurflenni, cyfrifon, e-bost, ffôn neu ryngweithio cymorth', 'Diretamente através de formulários, contas, email, telefone ou interações de apoio', 'Directamente mediante formularios, cuentas, correo, teléfono o interacciones de soporte', 'Directement auprès de vous par formulaires, comptes, courriels, téléphone ou échanges avec l’assistance'),
          L('Automatically from websites, applications and security systems', 'Yn awtomatig o wefannau, cymwysiadau a systemau diogelwch', 'Automaticamente através de sites, aplicações e sistemas de segurança', 'Automáticamente mediante sitios, aplicaciones y sistemas de seguridad', 'Automatiquement à partir des sites, applications et systèmes de sécurité'),
          L('From approved providers, payment processors, identity providers or public sources where lawful', 'Gan ddarparwyr cymeradwy, proseswyr taliadau, darparwyr hunaniaeth neu ffynonellau cyhoeddus lle bo’n gyfreithlon', 'A partir de fornecedores aprovados, processadores de pagamento, fornecedores de identidade ou fontes públicas quando legal', 'De proveedores aprobados, procesadores de pagos, proveedores de identidad o fuentes públicas cuando sea legal', 'Auprès de fournisseurs approuvés, prestataires de paiement, fournisseurs d’identité ou sources publiques lorsque cela est licite'),
        ],
      },
      {
        heading: L('5. Purposes and lawful bases', '5. Dibenion a seiliau cyfreithlon', '5. Finalidades e fundamentos jurídicos', '5. Finalidades y bases jurídicas', '5. Finalités et bases juridiques'),
        bullets: [
          L('Contract and pre-contract steps — to create accounts, supply services, administer subscriptions and provide support', 'Contract a chamau cyn-contract — i greu cyfrifon, cyflenwi gwasanaethau, gweinyddu tanysgrifiadau a darparu cymorth', 'Contrato e diligências pré-contratuais — para criar contas, fornecer serviços, administrar subscrições e prestar apoio', 'Contrato y medidas precontractuales — para crear cuentas, prestar servicios, administrar suscripciones y proporcionar soporte', 'Contrat et mesures précontractuelles — pour créer des comptes, fournir des services, administrer des abonnements et assurer l’assistance'),
          L('Legal obligation — for company, tax, accounting, consumer, safeguarding and regulatory requirements', 'Rhwymedigaeth gyfreithiol — ar gyfer gofynion cwmni, treth, cyfrifyddu, defnyddwyr, diogelu a rheoleiddio', 'Obrigação legal — para requisitos societários, fiscais, contabilísticos, de consumo, salvaguarda e regulação', 'Obligación legal — para requisitos societarios, fiscales, contables, de consumo, protección y regulatorios', 'Obligation légale — pour les exigences sociétaires, fiscales, comptables, de consommation, de protection et réglementaires'),
          L('Legitimate interests — to secure systems, prevent fraud, manage operations, improve services and establish or defend legal claims', 'Buddiannau dilys — i ddiogelu systemau, atal twyll, rheoli gweithrediadau, gwella gwasanaethau a sefydlu neu amddiffyn hawliadau cyfreithiol', 'Interesses legítimos — para proteger sistemas, prevenir fraude, gerir operações, melhorar serviços e exercer ou defender direitos legais', 'Intereses legítimos — para proteger sistemas, prevenir el fraude, gestionar operaciones, mejorar servicios y formular o defender reclamaciones', 'Intérêts légitimes — pour sécuriser les systèmes, prévenir la fraude, gérer les opérations, améliorer les services et exercer ou défendre des droits en justice'),
          L('Consent — for optional cookies, marketing or other processing where consent is the appropriate basis', 'Cydsyniad — ar gyfer cwcis dewisol, marchnata neu brosesu arall lle mai cydsyniad yw’r sail briodol', 'Consentimento — para cookies opcionais, marketing ou outro tratamento quando esta seja a base adequada', 'Consentimiento — para cookies opcionales, marketing u otros tratamientos cuando sea la base adecuada', 'Consentement — pour les cookies facultatifs, la prospection ou tout autre traitement lorsque cette base est appropriée'),
        ],
      },
      {
        heading: L('6. Sharing and service providers', '6. Rhannu a darparwyr gwasanaeth', '6. Partilha e prestadores de serviços', '6. Cesiones y proveedores de servicios', '6. Partage et prestataires'),
        paragraphs: [L('We may share necessary data with hosting and cloud providers, Microsoft identity and productivity services, Cloudflare services, payment processors, communications providers, customer-support platforms, authorised resellers and professional advisers. Some providers act as processors and others as independent controllers. We do not sell personal data.', 'Gallwn rannu data angenrheidiol â darparwyr cynnal a chwmwl, gwasanaethau hunaniaeth a chynhyrchiant Microsoft, gwasanaethau Cloudflare, proseswyr taliadau, darparwyr cyfathrebu, llwyfannau cymorth i gwsmeriaid, ailwerthwyr awdurdodedig a chynghorwyr proffesiynol. Mae rhai darparwyr yn gweithredu fel proseswyr ac eraill fel rheolwyr annibynnol. Nid ydym yn gwerthu data personol.', 'Podemos partilhar dados necessários com fornecedores de alojamento e cloud, serviços de identidade e produtividade da Microsoft, serviços Cloudflare, processadores de pagamento, fornecedores de comunicações, plataformas de apoio ao cliente, revendedores autorizados e consultores profissionais. Alguns atuam como subcontratantes e outros como responsáveis independentes. Não vendemos dados pessoais.', 'Podemos compartir los datos necesarios con proveedores de alojamiento y nube, servicios de identidad y productividad de Microsoft, servicios de Cloudflare, procesadores de pagos, proveedores de comunicaciones, plataformas de soporte, revendedores autorizados y asesores profesionales. Algunos actúan como encargados y otros como responsables independientes. No vendemos datos personales.', 'Nous pouvons partager les données nécessaires avec des fournisseurs d’hébergement et de services cloud, des services d’identité et de productivité Microsoft, des services Cloudflare, des prestataires de paiement, de communication, d’assistance client, des revendeurs autorisés et des conseils professionnels. Certains agissent comme sous-traitants et d’autres comme responsables indépendants. Nous ne vendons pas les données personnelles.')],
      },
      {
        heading: L('7. International transfers', '7. Trosglwyddiadau rhyngwladol', '7. Transferências internacionais', '7. Transferencias internacionales', '7. Transferts internationaux'),
        paragraphs: [L('Where data is transferred outside the United Kingdom, we use an applicable adequacy decision, recognised contractual safeguards or another lawful transfer mechanism, together with supplementary measures where required.', 'Pan drosglwyddir data y tu allan i’r Deyrnas Unedig, rydym yn defnyddio penderfyniad digonolrwydd perthnasol, mesurau diogelu cytundebol cydnabyddedig neu fecanwaith trosglwyddo cyfreithlon arall, ynghyd â mesurau ychwanegol lle bo angen.', 'Quando os dados são transferidos para fora do Reino Unido, utilizamos uma decisão de adequação aplicável, salvaguardas contratuais reconhecidas ou outro mecanismo legal, juntamente com medidas complementares quando necessário.', 'Cuando los datos se transfieren fuera del Reino Unido, utilizamos una decisión de adecuación aplicable, garantías contractuales reconocidas u otro mecanismo legal, junto con medidas complementarias cuando sea necesario.', 'Lorsque des données sont transférées hors du Royaume-Uni, nous utilisons une décision d’adéquation applicable, des garanties contractuelles reconnues ou un autre mécanisme licite, assorti de mesures complémentaires si nécessaire.')],
      },
      {
        heading: L('8. Retention', '8. Cadw', '8. Conservação', '8. Conservación', '8. Conservation'),
        paragraphs: [L('Retention depends on the purpose, contract, legal requirement, complaint or dispute risk and the nature of the record. Data is deleted, anonymised or restricted when no longer required. Closed-service records remain subject to the same controls.', 'Mae cadw’n dibynnu ar y diben, y contract, y gofyniad cyfreithiol, y risg o gŵyn neu anghydfod a natur y cofnod. Caiff data ei ddileu, ei ddienwio neu ei gyfyngu pan nad oes ei angen mwyach. Mae cofnodion gwasanaethau caeedig yn parhau’n ddarostyngedig i’r un rheolaethau.', 'A conservação depende da finalidade, contrato, obrigação legal, risco de reclamação ou litígio e natureza do registo. Os dados são apagados, anonimizados ou restringidos quando deixam de ser necessários. Os registos de serviços encerrados permanecem sujeitos aos mesmos controlos.', 'La conservación depende de la finalidad, el contrato, la obligación legal, el riesgo de queja o litigio y la naturaleza del registro. Los datos se eliminan, anonimizan o restringen cuando dejan de ser necesarios. Los registros de servicios cerrados siguen sujetos a los mismos controles.', 'La durée de conservation dépend de la finalité, du contrat, des obligations légales, du risque de réclamation ou de litige et de la nature du dossier. Les données sont supprimées, anonymisées ou limitées lorsqu’elles ne sont plus nécessaires. Les dossiers de services fermés restent soumis aux mêmes contrôles.')],
      },
      {
        heading: L('9. Security and incidents', '9. Diogelwch a digwyddiadau', '9. Segurança e incidentes', '9. Seguridad e incidentes', '9. Sécurité et incidents'),
        paragraphs: [L('We use access controls, secure cloud services, encryption in transit, authentication controls, monitoring, backups, audit records and incident procedures appropriate to the risk. No internet service can be guaranteed completely secure. Suspected incidents should be reported promptly.', 'Rydym yn defnyddio rheolaethau mynediad, gwasanaethau cwmwl diogel, amgryptio wrth drosglwyddo, rheolaethau dilysu, monitro, copïau wrth gefn, cofnodion archwilio a gweithdrefnau digwyddiadau sy’n briodol i’r risg. Ni ellir gwarantu bod unrhyw wasanaeth rhyngrwyd yn gwbl ddiogel. Dylid rhoi gwybod am ddigwyddiadau a amheuir yn brydlon.', 'Utilizamos controlos de acesso, serviços cloud seguros, encriptação em trânsito, autenticação, monitorização, cópias de segurança, registos de auditoria e procedimentos de incidente adequados ao risco. Nenhum serviço online pode ser garantido como totalmente seguro. Suspeitas de incidentes devem ser comunicadas rapidamente.', 'Utilizamos controles de acceso, servicios de nube seguros, cifrado en tránsito, autenticación, supervisión, copias de seguridad, registros de auditoría y procedimientos de incidentes adecuados al riesgo. Ningún servicio en línea puede garantizarse como totalmente seguro. Los incidentes sospechosos deben comunicarse con prontitud.', 'Nous utilisons des contrôles d’accès, des services cloud sécurisés, le chiffrement en transit, des contrôles d’authentification, la surveillance, des sauvegardes, des journaux d’audit et des procédures de gestion des incidents adaptées au risque. Aucun service en ligne ne peut être garanti totalement sûr. Tout incident présumé doit être signalé rapidement.')],
      },
      {
        heading: L('10. Children and young people', '10. Plant a phobl ifanc', '10. Crianças e jovens', '10. Niños y jóvenes', '10. Enfants et jeunes'),
        paragraphs: [L('Public account services are intended for the minimum age stated by the relevant platform. Where we process information about a young person through an approved private programme or safeguarding activity, access is restricted, records are handled on a need-to-know basis and parental or guardian information is obtained where appropriate.', 'Bwriedir gwasanaethau cyfrif cyhoeddus ar gyfer yr oedran lleiaf a nodir gan y llwyfan perthnasol. Pan fyddwn yn prosesu gwybodaeth am berson ifanc drwy raglen breifat gymeradwy neu weithgaredd diogelu, cyfyngir mynediad, ymdrinnir â chofnodion ar sail angen gwybod a cheir gwybodaeth rhiant neu warcheidwad lle bo’n briodol.', 'Os serviços públicos de conta destinam-se à idade mínima indicada na plataforma. Quando tratamos dados de jovens num programa privado aprovado ou atividade de salvaguarda, o acesso é restrito, os registos são tratados segundo a necessidade de conhecimento e são obtidas informações dos pais ou responsáveis quando apropriado.', 'Los servicios públicos de cuentas están destinados a la edad mínima indicada por la plataforma. Cuando tratamos información de jóvenes en un programa privado aprobado o actividad de protección, el acceso se limita, los registros se gestionan según la necesidad de conocer y se obtiene información de padres o tutores cuando procede.', 'Les services de compte destinés au public sont réservés à l’âge minimum indiqué par la plateforme concernée. Lorsque nous traitons des informations sur un jeune dans le cadre d’un programme privé approuvé ou d’une activité de protection, l’accès est limité, les dossiers sont gérés selon le principe du besoin d’en connaître et les informations parentales sont obtenues le cas échéant.')],
      },
      {
        heading: L('11. Automated decisions', '11. Penderfyniadau awtomataidd', '11. Decisões automatizadas', '11. Decisiones automatizadas', '11. Décisions automatisées'),
        paragraphs: [L('We do not currently use solely automated decision-making that produces legal or similarly significant effects. If this changes, appropriate information, safeguards and rights will be provided.', 'Nid ydym ar hyn o bryd yn defnyddio penderfyniadau awtomataidd yn unig sy’n cynhyrchu effeithiau cyfreithiol neu debyg sylweddol. Os bydd hyn yn newid, darperir gwybodaeth, mesurau diogelu a hawliau priodol.', 'Não utilizamos atualmente decisões exclusivamente automatizadas que produzam efeitos jurídicos ou semelhantes significativos. Se isso mudar, serão fornecidas informações, salvaguardas e direitos adequados.', 'Actualmente no utilizamos decisiones exclusivamente automatizadas que produzcan efectos jurídicos o similares significativos. Si esto cambia, se facilitarán información, garantías y derechos adecuados.', 'Nous n’utilisons actuellement aucune décision fondée exclusivement sur un traitement automatisé produisant des effets juridiques ou similaires significatifs. Si cela change, des informations, garanties et droits appropriés seront fournis.')],
      },
      {
        heading: L('12. Your rights and complaints', '12. Eich hawliau a’ch cwynion', '12. Os seus direitos e reclamações', '12. Sus derechos y reclamaciones', '12. Vos droits et réclamations'),
        paragraphs: [L(`Depending on the circumstances, you may have rights of access, rectification, erasure, restriction, objection, portability and withdrawal of consent. Send requests to ${company.dataProtectionEmail}. We normally respond within one calendar month, subject to lawful extensions. You may also complain to the Information Commissioner’s Office.`, `Yn dibynnu ar yr amgylchiadau, efallai y bydd gennych hawliau mynediad, cywiro, dileu, cyfyngu, gwrthwynebu, cludadwyedd a thynnu cydsyniad yn ôl. Anfonwch geisiadau i ${company.dataProtectionEmail}. Fel arfer rydym yn ymateb o fewn un mis calendr, yn ddarostyngedig i estyniadau cyfreithlon. Gallwch hefyd gwyno i Swyddfa’r Comisiynydd Gwybodaeth.`, `Consoante as circunstâncias, poderá ter direitos de acesso, retificação, apagamento, limitação, oposição, portabilidade e retirada do consentimento. Envie pedidos para ${company.dataProtectionEmail}. Normalmente respondemos no prazo de um mês, sujeito a prorrogações legais. Pode também reclamar junto do Information Commissioner’s Office.`, `Según las circunstancias, puede tener derechos de acceso, rectificación, supresión, limitación, oposición, portabilidad y retirada del consentimiento. Envíe las solicitudes a ${company.dataProtectionEmail}. Normalmente respondemos en un mes natural, sujeto a prórrogas legales. También puede reclamar ante la Information Commissioner’s Office.`, `Selon les circonstances, vous pouvez disposer de droits d’accès, de rectification, d’effacement, de limitation, d’opposition, de portabilité et de retrait du consentement. Adressez vos demandes à ${company.dataProtectionEmail}. Nous répondons normalement dans un délai d’un mois civil, sous réserve des prolongations légales. Vous pouvez également saisir l’Information Commissioner’s Office.`)],
      },
      {
        heading: L('13. Updates', '13. Diweddariadau', '13. Atualizações', '13. Actualizaciones', '13. Mises à jour'),
        paragraphs: [L('We review this Policy when services, providers or law materially change. The current version and review date are published on this page.', 'Rydym yn adolygu’r Polisi hwn pan fydd gwasanaethau, darparwyr neu gyfraith yn newid yn sylweddol. Cyhoeddir y fersiwn gyfredol a’r dyddiad adolygu ar y dudalen hon.', 'Revemos esta Política quando os serviços, fornecedores ou a lei mudam de forma material. A versão atual e a data de revisão são publicadas nesta página.', 'Revisamos esta Política cuando cambian sustancialmente los servicios, proveedores o la ley. La versión vigente y la fecha de revisión se publican en esta página.', 'Nous révisons la présente Politique lorsque les services, les prestataires ou la législation évoluent de manière importante. La version en vigueur et la date de révision sont publiées sur cette page.')],
      },
      commonCompanySection,
    ],
  },
  {
    id: 'cookies',
    path: '/cookies-policy',
    title: uiText.cookies,
    eyebrow: L('Storage and access technologies', 'Technolegau storio a mynediad', 'Tecnologias de armazenamento e acesso', 'Tecnologías de almacenamiento y acceso', 'Technologies de stockage et d’accès'),
    summary: L('How this website uses cookies and similar technologies, and how you can control optional use.', 'Sut mae’r wefan hon yn defnyddio cwcis a thechnolegau tebyg, a sut y gallwch reoli defnydd dewisol.', 'Como este site utiliza cookies e tecnologias semelhantes e como pode controlar a utilização opcional.', 'Cómo utiliza este sitio las cookies y tecnologías similares y cómo puede controlar su uso opcional.', 'Comment ce site utilise les cookies et technologies similaires et comment vous pouvez contrôler les usages facultatifs.'),
    description: L('Cookie information for the JA Group Services corporate website.', 'Gwybodaeth cwcis ar gyfer gwefan gorfforaethol JA Group Services.', 'Informação sobre cookies do site corporativo da JA Group Services.', 'Información sobre cookies del sitio corporativo de JA Group Services.', 'Informations relatives aux cookies du site institutionnel de JA Group Services.'),
    effectiveDate: '2 August 2026',
    printable: true,
    legalDocument: true,
    sections: [
      {
        heading: L('1. What these technologies are', '1. Beth yw’r technolegau hyn', '1. O que são estas tecnologias', '1. Qué son estas tecnologías', '1. Nature de ces technologies'),
        paragraphs: [L('Cookies and similar storage or access technologies place or read information on a browser or device. They may be required for security and functionality or used, with permission where required, for preferences and analytics.', 'Mae cwcis a thechnolegau storio neu fynediad tebyg yn gosod neu’n darllen gwybodaeth ar borwr neu ddyfais. Gallant fod yn ofynnol ar gyfer diogelwch a swyddogaeth neu gael eu defnyddio, gyda chaniatâd lle bo angen, ar gyfer dewisiadau a dadansoddeg.', 'Cookies e tecnologias semelhantes armazenam ou leem informações no navegador ou dispositivo. Podem ser necessárias para segurança e funcionalidade ou utilizadas, com autorização quando exigida, para preferências e análise.', 'Las cookies y tecnologías similares almacenan o leen información en el navegador o dispositivo. Pueden ser necesarias para seguridad y funcionamiento o utilizarse, con permiso cuando sea necesario, para preferencias y análisis.', 'Les cookies et technologies similaires stockent ou lisent des informations sur un navigateur ou un appareil. Ils peuvent être nécessaires à la sécurité et au fonctionnement ou utilisés, avec autorisation lorsque cela est requis, pour les préférences et l’analyse.')],
      },
      {
        heading: L('2. Categories used', '2. Categorïau a ddefnyddir', '2. Categorias utilizadas', '2. Categorías utilizadas', '2. Catégories utilisées'),
        bullets: [
          L('Strictly necessary — security, network management, consent records, session operation and essential website functions', 'Hollol angenrheidiol — diogelwch, rheoli rhwydwaith, cofnodion cydsyniad, gweithrediad sesiwn a swyddogaethau hanfodol y wefan', 'Estritamente necessários — segurança, gestão de rede, registos de consentimento, sessões e funções essenciais', 'Estrictamente necesarias — seguridad, gestión de red, registros de consentimiento, sesiones y funciones esenciales', 'Strictement nécessaires — sécurité, gestion du réseau, preuve du consentement, sessions et fonctions essentielles'),
          L('Functional — remembering selected preferences such as language or display settings', 'Swyddogaethol — cofio dewisiadau fel iaith neu osodiadau arddangos', 'Funcionais — recordar preferências como idioma ou apresentação', 'Funcionales — recordar preferencias como idioma o presentación', 'Fonctionnels — mémoriser des préférences telles que la langue ou l’affichage'),
          L('Analytics — measuring use and performance where valid consent or another lawful exception applies', 'Dadansoddeg — mesur defnydd a pherfformiad lle mae cydsyniad dilys neu eithriad cyfreithlon arall yn berthnasol', 'Analíticos — medir utilização e desempenho quando existe consentimento válido ou outra exceção legal', 'Analíticas — medir el uso y rendimiento cuando exista consentimiento válido u otra excepción legal', 'Analyse — mesurer l’utilisation et les performances lorsqu’un consentement valable ou une autre exception légale s’applique'),
        ],
      },
      {
        heading: L('3. Consent and controls', '3. Cydsyniad a rheolaethau', '3. Consentimento e controlos', '3. Consentimiento y controles', '3. Consentement et contrôles'),
        paragraphs: [L('Non-essential technologies are not intended to be activated before the required choice is recorded. You can accept, reject or change optional preferences through Cookie Settings. Withdrawing consent does not affect previous lawful processing.', 'Ni fwriedir actifadu technolegau nad ydynt yn hanfodol cyn cofnodi’r dewis gofynnol. Gallwch dderbyn, gwrthod neu newid dewisiadau dewisol drwy Gosodiadau Cwcis. Nid yw tynnu cydsyniad yn ôl yn effeithio ar brosesu cyfreithlon blaenorol.', 'As tecnologias não essenciais não devem ser ativadas antes de registada a escolha necessária. Pode aceitar, rejeitar ou alterar preferências em Definições de Cookies. A retirada do consentimento não afeta o tratamento anterior lícito.', 'Las tecnologías no esenciales no deben activarse antes de registrar la elección necesaria. Puede aceptar, rechazar o cambiar preferencias en Configuración de Cookies. La retirada del consentimiento no afecta al tratamiento lícito anterior.', 'Les technologies non essentielles ne sont pas destinées à être activées avant l’enregistrement du choix requis. Vous pouvez accepter, refuser ou modifier les préférences dans Paramètres des cookies. Le retrait du consentement n’affecte pas les traitements licites antérieurs.')],
      },
      {
        heading: L('4. Third-party technologies', '4. Technolegau trydydd parti', '4. Tecnologias de terceiros', '4. Tecnologías de terceros', '4. Technologies tierces'),
        paragraphs: [L('Embedded services, support tools or trust widgets may be supplied by third parties and may use their own technologies. We review these integrations and aim to prevent non-essential use before the required choice. Following an external link takes you to the other provider’s policy.', 'Gall gwasanaethau wedi’u hymgorffori, offer cymorth neu widgets ymddiriedaeth gael eu cyflenwi gan drydydd partïon a defnyddio eu technolegau eu hunain. Rydym yn adolygu’r integreiddiadau hyn ac yn ceisio atal defnydd nad yw’n hanfodol cyn y dewis gofynnol. Mae dilyn dolen allanol yn mynd â chi at bolisi’r darparwr arall.', 'Serviços incorporados, ferramentas de apoio ou widgets de confiança podem ser fornecidos por terceiros e utilizar tecnologias próprias. Revemos estas integrações e procuramos impedir utilização não essencial antes da escolha necessária. Ao seguir uma ligação externa, aplica-se a política do outro fornecedor.', 'Los servicios integrados, herramientas de soporte o widgets de confianza pueden ser suministrados por terceros y utilizar sus propias tecnologías. Revisamos estas integraciones y procuramos impedir el uso no esencial antes de la elección necesaria. Al seguir un enlace externo se aplica la política del otro proveedor.', 'Les services intégrés, outils d’assistance ou widgets de confiance peuvent être fournis par des tiers et utiliser leurs propres technologies. Nous examinons ces intégrations et cherchons à empêcher tout usage non essentiel avant le choix requis. En suivant un lien externe, vous relevez de la politique de l’autre fournisseur.')],
      },
      {
        heading: L('5. Browser controls and retention', '5. Rheolaethau porwr a chadw', '5. Controlos do navegador e conservação', '5. Controles del navegador y conservación', '5. Contrôles du navigateur et conservation'),
        paragraphs: [L('Browser settings can delete or block technologies, but blocking necessary items may prevent parts of the website from working. Consent records and preferences are retained only for a proportionate period and refreshed when required.', 'Gall gosodiadau porwr ddileu neu rwystro technolegau, ond gall rhwystro eitemau angenrheidiol atal rhannau o’r wefan rhag gweithio. Cedwir cofnodion cydsyniad a dewisiadau am gyfnod cymesur yn unig ac fe’u hadnewyddir pan fo angen.', 'As definições do navegador podem eliminar ou bloquear tecnologias, mas o bloqueio de itens necessários pode impedir partes do site de funcionar. Os registos de consentimento e preferências são conservados apenas por período proporcional e renovados quando necessário.', 'La configuración del navegador puede eliminar o bloquear tecnologías, pero bloquear elementos necesarios puede impedir el funcionamiento de partes del sitio. Los registros de consentimiento y preferencias se conservan solo durante un periodo proporcionado y se renuevan cuando procede.', 'Les paramètres du navigateur peuvent supprimer ou bloquer ces technologies, mais le blocage des éléments nécessaires peut empêcher certaines parties du site de fonctionner. Les preuves de consentement et préférences ne sont conservées que pendant une durée proportionnée et renouvelées lorsque nécessaire.')],
      },
      {
        heading: L('6. Contact', '6. Cyswllt', '6. Contacto', '6. Contacto', '6. Contact'),
        paragraphs: [L(`Questions about cookies or privacy may be sent to ${company.dataProtectionEmail}.`, `Gellir anfon cwestiynau am gwcis neu breifatrwydd i ${company.dataProtectionEmail}.`, `Questões sobre cookies ou privacidade podem ser enviadas para ${company.dataProtectionEmail}.`, `Las preguntas sobre cookies o privacidad pueden enviarse a ${company.dataProtectionEmail}.`, `Les questions relatives aux cookies ou à la confidentialité peuvent être adressées à ${company.dataProtectionEmail}.`)],
      },
      commonCompanySection,
    ],
  },
  {
    id: 'complaints',
    path: '/complaints-policy',
    title: uiText.complaints,
    eyebrow: L('Customer accountability', 'Atebolrwydd cwsmeriaid', 'Responsabilidade perante o cliente', 'Responsabilidad ante el cliente', 'Responsabilité envers les clients'),
    summary: L('How to raise a complaint and how JA Group Services Ltd will acknowledge, investigate and respond.', 'Sut i godi cwyn a sut y bydd JA Group Services Ltd yn cydnabod, ymchwilio ac ymateb.', 'Como apresentar uma reclamação e como a JA Group Services Ltd irá acusar, investigar e responder.', 'Cómo presentar una queja y cómo JA Group Services Ltd la acusará, investigará y responderá.', 'Comment déposer une réclamation et comment JA Group Services Ltd l’accusera réception, l’examinera et y répondra.'),
    description: L('Complaints procedure for JA Group Services Ltd.', 'Gweithdrefn gwynion JA Group Services Ltd.', 'Procedimento de reclamações da JA Group Services Ltd.', 'Procedimiento de quejas de JA Group Services Ltd.', 'Procédure de réclamation de JA Group Services Ltd.'),
    effectiveDate: '2 August 2026',
    printable: true,
    legalDocument: true,
    sections: [
      {
        heading: L('1. Scope and principles', '1. Cwmpas ac egwyddorion', '1. Âmbito e princípios', '1. Alcance y principios', '1. Champ d’application et principes'),
        paragraphs: [L('This Policy applies to complaints about our services, administration, communications, conduct, contractual performance and customer support. We aim to handle complaints fairly, proportionately, confidentially and without disadvantaging a person for having complained.', 'Mae’r Polisi hwn yn berthnasol i gwynion am ein gwasanaethau, gweinyddu, cyfathrebu, ymddygiad, perfformiad cytundebol a chymorth i gwsmeriaid. Ein nod yw ymdrin â chwynion yn deg, yn gymesur, yn gyfrinachol a heb roi person dan anfantais am gwyno.', 'Esta Política aplica-se a reclamações sobre serviços, administração, comunicações, conduta, cumprimento contratual e apoio ao cliente. Procuramos tratar reclamações de forma justa, proporcional, confidencial e sem prejudicar quem reclama.', 'Esta Política se aplica a quejas sobre servicios, administración, comunicaciones, conducta, cumplimiento contractual y atención al cliente. Procuramos tramitar las quejas de forma justa, proporcionada, confidencial y sin perjudicar a quien reclame.', 'La présente Politique s’applique aux réclamations concernant nos services, notre administration, nos communications, notre conduite, l’exécution contractuelle et l’assistance client. Nous les traitons de manière équitable, proportionnée et confidentielle, sans pénaliser le réclamant.')],
      },
      {
        heading: L('2. How to complain', '2. Sut i gwyno', '2. Como reclamar', '2. Cómo presentar una queja', '2. Comment déposer une réclamation'),
        paragraphs: [L(`Email ${company.complaintsEmail} or write to the registered office. Include your name and contact details, the relevant service or account reference, what happened, key dates, supporting evidence and the outcome sought. Reasonable adjustments and alternative formats are available on request.`, `E-bostiwch ${company.complaintsEmail} neu ysgrifennwch at y swyddfa gofrestredig. Cynhwyswch eich enw a’ch manylion cyswllt, y gwasanaeth neu gyfeirnod cyfrif perthnasol, beth ddigwyddodd, dyddiadau allweddol, tystiolaeth ategol a’r canlyniad a geisir. Mae addasiadau rhesymol a fformatau amgen ar gael ar gais.`, `Envie email para ${company.complaintsEmail} ou escreva para a sede registada. Inclua nome e contactos, serviço ou referência de conta, descrição, datas, provas e resultado pretendido. Ajustes razoáveis e formatos alternativos estão disponíveis mediante pedido.`, `Escriba a ${company.complaintsEmail} o al domicilio social. Incluya nombre y contacto, servicio o referencia de cuenta, hechos, fechas, pruebas y solución solicitada. Se ofrecen ajustes razonables y formatos alternativos previa solicitud.`, `Écrivez à ${company.complaintsEmail} ou au siège social. Indiquez vos coordonnées, le service ou la référence de compte, les faits, les dates, les justificatifs et la solution souhaitée. Des aménagements raisonnables et formats alternatifs sont disponibles sur demande.`)],
      },
      {
        heading: L('3. Acknowledgement and investigation', '3. Cydnabod ac ymchwilio', '3. Confirmação e investigação', '3. Acuse e investigación', '3. Accusé de réception et examen'),
        paragraphs: [L('We aim to acknowledge a complaint within five working days and issue a substantive Stage One response within fourteen working days. Complex matters may take longer; if so, we will explain why and provide an updated timeframe. Records may be reviewed and relevant providers consulted where necessary.', 'Ein nod yw cydnabod cwyn o fewn pum diwrnod gwaith a chyhoeddi ymateb Cam Un sylweddol o fewn pedwar diwrnod gwaith ar ddeg. Gall materion cymhleth gymryd mwy o amser; os felly, byddwn yn egluro pam ac yn darparu amserlen wedi’i diweddaru. Gellir adolygu cofnodion ac ymgynghori â darparwyr perthnasol lle bo angen.', 'Procuramos acusar a reclamação em cinco dias úteis e emitir resposta substancial de Primeira Fase em catorze dias úteis. Questões complexas podem demorar mais; nesse caso explicaremos e indicaremos novo prazo. Poderemos rever registos e consultar fornecedores relevantes.', 'Procuramos acusar recibo en cinco días laborables y emitir una respuesta sustantiva de Primera Fase en catorce días laborables. Los asuntos complejos pueden tardar más; en tal caso explicaremos el motivo y daremos un nuevo plazo. Podremos revisar registros y consultar a proveedores pertinentes.', 'Nous visons un accusé de réception sous cinq jours ouvrables et une réponse substantielle de première étape sous quatorze jours ouvrables. Les dossiers complexes peuvent nécessiter plus de temps ; nous en expliquerons alors la raison et donnerons un nouveau délai. Nous pouvons examiner les dossiers et consulter les prestataires concernés.')],
      },
      {
        heading: L('4. Outcome and remedies', '4. Canlyniad a rhwymedïau', '4. Resultado e soluções', '4. Resultado y soluciones', '4. Conclusion et mesures correctives'),
        paragraphs: [L('The response will summarise the complaint, investigation, findings and decision, including whether it is upheld, partly upheld or not upheld. Appropriate remedies may include an explanation, correction, apology, re-performance, refund, price reduction or process improvement where required by law, contract or fairness.', 'Bydd yr ymateb yn crynhoi’r gŵyn, yr ymchwiliad, y canfyddiadau a’r penderfyniad, gan gynnwys a yw’n cael ei chadarnhau, ei chadarnhau’n rhannol neu beidio. Gall rhwymedïau priodol gynnwys eglurhad, cywiriad, ymddiheuriad, ailberfformio, ad-daliad, gostyngiad pris neu welliant proses lle bo hynny’n ofynnol gan gyfraith, contract neu degwch.', 'A resposta resumirá a reclamação, investigação, conclusões e decisão, incluindo se é procedente, parcialmente procedente ou improcedente. As soluções podem incluir explicação, correção, pedido de desculpa, repetição, reembolso, redução de preço ou melhoria de processo quando exigido por lei, contrato ou equidade.', 'La respuesta resumirá la queja, investigación, conclusiones y decisión, indicando si se estima, estima parcialmente o desestima. Las soluciones pueden incluir explicación, corrección, disculpa, nueva prestación, reembolso, reducción de precio o mejora del proceso cuando lo exijan la ley, el contrato o la equidad.', 'La réponse résumera la réclamation, l’examen, les conclusions et la décision, en précisant si elle est fondée, partiellement fondée ou non fondée. Les mesures peuvent comprendre explication, correction, excuses, nouvelle exécution, remboursement, réduction de prix ou amélioration du processus lorsque la loi, le contrat ou l’équité l’exigent.')],
      },
      {
        heading: L('5. Stage Two review', '5. Adolygiad Cam Dau', '5. Revisão de Segunda Fase', '5. Revisión de Segunda Fase', '5. Examen de deuxième étape'),
        paragraphs: [L('After Stage One, you may request a Stage Two group-level review. It is not automatic and must be referred through JA Group Services Ltd. JSDS Group Ltd may review the handling and governance of the complaint but does not replace any external statutory remedy.', 'Ar ôl Cam Un, gallwch ofyn am adolygiad lefel grŵp Cam Dau. Nid yw’n awtomatig a rhaid ei gyfeirio drwy JA Group Services Ltd. Gall JSDS Group Ltd adolygu’r modd yr ymdriniwyd â’r gŵyn a’i llywodraethu ond nid yw’n disodli unrhyw rwymedi statudol allanol.', 'Após a Primeira Fase, pode pedir uma revisão de Segunda Fase ao nível do grupo. Não é automática e deve ser encaminhada através da JA Group Services Ltd. A JSDS Group Ltd pode rever o tratamento e a governação da reclamação, sem substituir qualquer recurso legal externo.', 'Tras la Primera Fase puede solicitar una revisión de Segunda Fase a nivel de grupo. No es automática y debe remitirse a través de JA Group Services Ltd. JSDS Group Ltd puede revisar la tramitación y gobernanza de la queja, sin sustituir ningún recurso legal externo.', 'Après la première étape, vous pouvez demander un examen de deuxième étape au niveau du groupe. Il n’est pas automatique et doit être transmis par JA Group Services Ltd. JSDS Group Ltd peut examiner le traitement et la gouvernance de la réclamation, sans remplacer les recours légaux externes.')],
      },
      {
        heading: L('6. Data protection and third-party matters', '6. Diogelu data a materion trydydd parti', '6. Proteção de dados e questões de terceiros', '6. Protección de datos y asuntos de terceros', '6. Protection des données et questions de tiers'),
        paragraphs: [L(`Data-protection complaints are handled by the Data Protection Officer through ${company.dataProtectionEmail}. Where a complaint concerns an independent provider’s service, we will explain our role and may refer or assist with escalation, but the provider remains responsible for matters within its contract or control.`, `Mae cwynion diogelu data yn cael eu trin gan y Swyddog Diogelu Data drwy ${company.dataProtectionEmail}. Pan fo cwyn yn ymwneud â gwasanaeth darparwr annibynnol, byddwn yn egluro ein rôl a gallwn gyfeirio neu gynorthwyo ag uwchgyfeirio, ond y darparwr sy’n parhau’n gyfrifol am faterion o fewn ei gontract neu reolaeth.`, `As reclamações de proteção de dados são tratadas pelo Encarregado através de ${company.dataProtectionEmail}. Quando a reclamação diz respeito ao serviço de um fornecedor independente, explicaremos o nosso papel e poderemos encaminhar ou apoiar a escalada, mas o fornecedor continua responsável pelo que está sob o seu contrato ou controlo.`, `Las quejas de protección de datos son gestionadas por el Delegado mediante ${company.dataProtectionEmail}. Cuando una queja se refiera al servicio de un proveedor independiente, explicaremos nuestro papel y podremos remitir o ayudar a escalar, pero el proveedor seguirá siendo responsable de lo que esté bajo su contrato o control.`, `Les réclamations relatives à la protection des données sont traitées par le Délégué à ${company.dataProtectionEmail}. Lorsqu’une réclamation concerne le service d’un fournisseur indépendant, nous expliquerons notre rôle et pourrons orienter ou aider à l’escalade, mais le fournisseur reste responsable de ce qui relève de son contrat ou de son contrôle.`)],
      },
      {
        heading: L('7. External rights and records', '7. Hawliau allanol a chofnodion', '7. Direitos externos e registos', '7. Derechos externos y registros', '7. Droits externes et dossiers'),
        paragraphs: [L('Nothing in this Policy removes statutory rights to contact the Information Commissioner’s Office, Trading Standards, a competent regulator or the courts. Complaint records are retained securely for governance, audit, legal and improvement purposes in accordance with data-protection requirements.', 'Nid oes dim yn y Polisi hwn yn dileu hawliau statudol i gysylltu â Swyddfa’r Comisiynydd Gwybodaeth, Safonau Masnach, rheoleiddiwr cymwys neu’r llysoedd. Cedwir cofnodion cwynion yn ddiogel at ddibenion llywodraethu, archwilio, cyfreithiol a gwella yn unol â gofynion diogelu data.', 'Nada nesta Política elimina os direitos legais de contactar o Information Commissioner’s Office, Trading Standards, regulador competente ou tribunais. Os registos de reclamações são conservados de forma segura para governação, auditoria, fins legais e melhoria, de acordo com a proteção de dados.', 'Nada de esta Política elimina los derechos legales de contactar con la Information Commissioner’s Office, Trading Standards, un regulador competente o los tribunales. Los registros se conservan de forma segura para gobernanza, auditoría, fines legales y mejora, conforme a protección de datos.', 'La présente Politique ne supprime aucun droit légal de saisir l’Information Commissioner’s Office, Trading Standards, un régulateur compétent ou les tribunaux. Les dossiers de réclamation sont conservés de manière sécurisée à des fins de gouvernance, d’audit, juridiques et d’amélioration, conformément à la protection des données.')],
      },
      commonCompanySection,
    ],
  },
  {
    id: 'ip',
    path: '/ip-statement',
    title: uiText.intellectualProperty,
    eyebrow: L('Brand, copyright and trade marks', 'Brand, hawlfraint a nodau masnach', 'Marca, direitos de autor e marcas comerciais', 'Marca, derechos de autor y marcas comerciales', 'Marque, droit d’auteur et marques'),
    summary: L('Ownership and permitted use of JA Group Services and group intellectual property.', 'Perchnogaeth a defnydd a ganiateir o eiddo deallusol JA Group Services a’r grŵp.', 'Propriedade e utilização permitida da propriedade intelectual da JA Group Services e do grupo.', 'Propiedad y uso permitido de la propiedad intelectual de JA Group Services y del grupo.', 'Propriété et utilisation autorisée de la propriété intellectuelle de JA Group Services et du groupe.'),
    description: L('Intellectual-property statement for JA Group Services Ltd.', 'Datganiad eiddo deallusol ar gyfer JA Group Services Ltd.', 'Declaração de propriedade intelectual da JA Group Services Ltd.', 'Declaración de propiedad intelectual de JA Group Services Ltd.', 'Déclaration de propriété intellectuelle de JA Group Services Ltd.'),
    effectiveDate: '2 August 2026',
    printable: true,
    legalDocument: true,
    sections: [
      {
        heading: L('1. Ownership and control', '1. Perchnogaeth a rheolaeth', '1. Propriedade e controlo', '1. Propiedad y control', '1. Propriété et contrôle'),
        paragraphs: [L('Branding, goodwill, trade marks, logos, trading names, domains, designs, documents and other intellectual property may be owned or controlled by JSDS Group Ltd and licensed or permitted for operational use by JA Group Services Ltd. Nothing on this website transfers ownership.', 'Gall brandio, ewyllys da, nodau masnach, logos, enwau masnachu, parthau, dyluniadau, dogfennau ac eiddo deallusol arall fod yn eiddo i JSDS Group Ltd neu dan ei reolaeth ac wedi’u trwyddedu neu eu caniatáu i’w defnyddio’n weithredol gan JA Group Services Ltd. Nid oes dim ar y wefan hon yn trosglwyddo perchnogaeth.', 'A marca, reputação, marcas comerciais, logótipos, nomes comerciais, domínios, designs, documentos e outros direitos podem ser detidos ou controlados pela JSDS Group Ltd e licenciados ou autorizados para utilização operacional pela JA Group Services Ltd. Nada neste site transfere propriedade.', 'La marca, reputación, marcas comerciales, logotipos, nombres comerciales, dominios, diseños, documentos y demás propiedad intelectual pueden pertenecer o estar controlados por JSDS Group Ltd y utilizarse por JA Group Services Ltd mediante licencia o autorización. Nada de este sitio transfiere la propiedad.', 'Les marques, la clientèle, les logos, noms commerciaux, domaines, créations, documents et autres droits peuvent être détenus ou contrôlés par JSDS Group Ltd et concédés ou autorisés à JA Group Services Ltd pour son exploitation. Aucun élément de ce site ne transfère la propriété.')],
      },
      {
        heading: L('2. Copyright', '2. Hawlfraint', '2. Direitos de autor', '2. Derechos de autor', '2. Droit d’auteur'),
        paragraphs: [L('Unless stated otherwise, website text, layouts, original graphics, documents and software are protected by copyright and related rights. You may view and print material for personal information or legitimate internal business reference. Reproduction, republication, modification, sale or commercial exploitation requires prior written permission unless allowed by law.', 'Oni nodir fel arall, mae testun y wefan, cynlluniau, graffeg wreiddiol, dogfennau a meddalwedd wedi’u diogelu gan hawlfraint a hawliau cysylltiedig. Gallwch weld ac argraffu deunydd at wybodaeth bersonol neu gyfeirio busnes mewnol dilys. Mae angen caniatâd ysgrifenedig ymlaen llaw ar gyfer atgynhyrchu, ailgyhoeddi, addasu, gwerthu neu ecsbloetio masnachol oni chaniateir hynny gan y gyfraith.', 'Salvo indicação em contrário, textos, layouts, gráficos originais, documentos e software estão protegidos por direitos de autor. Pode visualizar e imprimir para informação pessoal ou referência interna legítima. Reprodução, republicação, alteração, venda ou exploração comercial exige autorização escrita prévia, salvo permissão legal.', 'Salvo indicación contraria, los textos, diseños, gráficos originales, documentos y software están protegidos por derechos de autor. Puede ver e imprimir material para información personal o referencia empresarial interna legítima. La reproducción, republicación, modificación, venta o explotación comercial requiere autorización escrita previa, salvo que la ley lo permita.', 'Sauf indication contraire, les textes, mises en page, graphismes originaux, documents et logiciels sont protégés par le droit d’auteur. Vous pouvez les consulter et les imprimer à titre d’information personnelle ou de référence interne légitime. Toute reproduction, republication, modification, vente ou exploitation commerciale nécessite une autorisation écrite préalable, sauf disposition légale contraire.')],
      },
      {
        heading: L('3. Trade marks and brand names', '3. Nodau masnach ac enwau brand', '3. Marcas e nomes comerciais', '3. Marcas y nombres comerciales', '3. Marques et noms commerciaux'),
        paragraphs: [L('Use of a company, group, platform or division name does not grant a licence to use that name, logo or branding. Any reference to UK00004342542 is to a trade mark application unless and until registration is confirmed on the official UK register.', 'Nid yw defnyddio enw cwmni, grŵp, llwyfan neu is-adran yn rhoi trwydded i ddefnyddio’r enw, y logo na’r brandio hwnnw. Mae unrhyw gyfeiriad at UK00004342542 yn gyfeiriad at gais nod masnach oni bai a hyd nes y cadarnheir cofrestriad ar gofrestr swyddogol y DU.', 'A utilização do nome de uma empresa, grupo, plataforma ou divisão não concede licença para utilizar esse nome, logótipo ou marca. Qualquer referência a UK00004342542 diz respeito a um pedido de marca até que o registo seja confirmado no registo oficial do Reino Unido.', 'El uso del nombre de una empresa, grupo, plataforma o división no concede licencia para utilizar dicho nombre, logotipo o marca. Toda referencia a UK00004342542 se refiere a una solicitud de marca salvo y hasta que se confirme su registro en el registro oficial del Reino Unido.', 'L’utilisation du nom d’une société, d’un groupe, d’une plateforme ou d’une division n’accorde aucune licence d’utilisation de ce nom, logo ou identité. Toute référence à UK00004342542 désigne une demande de marque tant que l’enregistrement n’est pas confirmé au registre officiel du Royaume-Uni.')],
      },
      {
        heading: L('4. Third-party rights', '4. Hawliau trydydd parti', '4. Direitos de terceiros', '4. Derechos de terceros', '4. Droits des tiers'),
        paragraphs: [L('Third-party names, logos, software, images and services remain the property of their respective owners. Their appearance does not imply ownership, endorsement or a partnership beyond the stated arrangement.', 'Mae enwau, logos, meddalwedd, delweddau a gwasanaethau trydydd parti yn parhau’n eiddo i’w perchnogion priodol. Nid yw eu hymddangosiad yn awgrymu perchnogaeth, cymeradwyaeth na phartneriaeth y tu hwnt i’r trefniant a nodir.', 'Nomes, logótipos, software, imagens e serviços de terceiros pertencem aos respetivos proprietários. A sua presença não implica propriedade, aprovação ou parceria além do acordo indicado.', 'Los nombres, logotipos, programas, imágenes y servicios de terceros pertenecen a sus respectivos titulares. Su aparición no implica propiedad, respaldo ni colaboración más allá del acuerdo indicado.', 'Les noms, logos, logiciels, images et services de tiers restent la propriété de leurs titulaires respectifs. Leur présence n’implique ni propriété, ni approbation, ni partenariat au-delà de l’accord indiqué.')],
      },
      {
        heading: L('5. Linking, quotation and permissions', '5. Dolenni, dyfynnu a chaniatâd', '5. Ligações, citações e autorizações', '5. Enlaces, citas y permisos', '5. Liens, citations et autorisations'),
        paragraphs: [L(`Fair and lawful linking to public pages is permitted provided it is not misleading and does not imply endorsement. Requests for broader use or reports of suspected infringement should be sent to ${company.governanceEmail}.`, `Caniateir dolenni teg a chyfreithlon i dudalennau cyhoeddus ar yr amod nad ydynt yn gamarweiniol ac nad ydynt yn awgrymu cymeradwyaeth. Dylid anfon ceisiadau am ddefnydd ehangach neu adroddiadau am doriad a amheuir i ${company.governanceEmail}.`, `É permitida a ligação justa e legal a páginas públicas, desde que não seja enganadora nem implique aprovação. Pedidos de utilização mais ampla ou denúncias de infração devem ser enviados para ${company.governanceEmail}.`, `Se permiten enlaces justos y legales a páginas públicas siempre que no sean engañosos ni impliquen respaldo. Las solicitudes de uso más amplio o denuncias de infracción deben enviarse a ${company.governanceEmail}.`, `Les liens licites et loyaux vers les pages publiques sont autorisés à condition de ne pas être trompeurs ni de suggérer une approbation. Les demandes d’utilisation plus large ou signalements d’atteinte doivent être adressés à ${company.governanceEmail}.`)],
      },
      commonCompanySection,
    ],
  },
  {
    id: 'accessibility',
    path: '/accessibility-statement',
    title: uiText.accessibility,
    eyebrow: L('Inclusive digital access', 'Mynediad digidol cynhwysol', 'Acesso digital inclusivo', 'Acceso digital inclusivo', 'Accès numérique inclusif'),
    summary: L('Our approach to making the corporate website usable by as many people as reasonably possible.', 'Ein dull o wneud y wefan gorfforaethol yn ddefnyddiadwy gan gynifer o bobl ag sy’n rhesymol bosibl.', 'A nossa abordagem para tornar o site corporativo utilizável pelo maior número possível de pessoas.', 'Nuestro enfoque para que el sitio corporativo pueda ser utilizado por el mayor número posible de personas.', 'Notre démarche visant à rendre le site institutionnel utilisable par le plus grand nombre possible de personnes.'),
    description: L('Accessibility statement for the JA Group Services corporate website.', 'Datganiad hygyrchedd ar gyfer gwefan gorfforaethol JA Group Services.', 'Declaração de acessibilidade do site corporativo da JA Group Services.', 'Declaración de accesibilidad del sitio corporativo de JA Group Services.', 'Déclaration d’accessibilité du site institutionnel de JA Group Services.'),
    effectiveDate: '2 August 2026',
    printable: true,
    sections: [
      {
        heading: L('Our commitment', 'Ein hymrwymiad', 'O nosso compromisso', 'Nuestro compromiso', 'Notre engagement'),
        paragraphs: [L('We aim to make this website perceivable, operable, understandable and robust, and to work towards WCAG 2.2 Level AA. JA Group Services Ltd is a private company and this voluntary statement does not claim that public-sector accessibility regulations apply to it.', 'Ein nod yw gwneud y wefan hon yn ganfyddadwy, yn weithredadwy, yn ddealladwy ac yn gadarn, a gweithio tuag at WCAG 2.2 Lefel AA. Mae JA Group Services Ltd yn gwmni preifat ac nid yw’r datganiad gwirfoddol hwn yn honni bod rheoliadau hygyrchedd y sector cyhoeddus yn berthnasol iddo.', 'Procuramos tornar este site percetível, operável, compreensível e robusto e trabalhar para cumprir WCAG 2.2 nível AA. A JA Group Services Ltd é uma empresa privada e esta declaração voluntária não afirma que a regulamentação do setor público lhe seja aplicável.', 'Procuramos que este sitio sea perceptible, operable, comprensible y robusto y trabajar hacia WCAG 2.2 nivel AA. JA Group Services Ltd es una empresa privada y esta declaración voluntaria no afirma que le sean aplicables las normas del sector público.', 'Nous visons à rendre ce site perceptible, utilisable, compréhensible et robuste, et à progresser vers les WCAG 2.2 niveau AA. JA Group Services Ltd est une société privée et la présente déclaration volontaire n’affirme pas que la réglementation du secteur public lui soit applicable.')],
      },
      {
        heading: L('Features provided', 'Nodweddion a ddarperir', 'Funcionalidades disponíveis', 'Funciones disponibles', 'Fonctionnalités proposées'),
        bullets: [
          L('Responsive layouts for desktop, tablet and mobile', 'Cynlluniau ymatebol ar gyfer bwrdd gwaith, llechen a ffôn symudol', 'Layouts responsivos para computador, tablet e telemóvel', 'Diseños adaptables para ordenador, tableta y móvil', 'Mises en page adaptatives pour ordinateur, tablette et mobile'),
          L('Keyboard-accessible navigation and visible focus states', 'Llywio drwy fysellfwrdd a chyflyrau ffocws gweladwy', 'Navegação por teclado e foco visível', 'Navegación por teclado y foco visible', 'Navigation au clavier et focus visible'),
          L('Light, dark and system display modes', 'Moddau arddangos golau, tywyll a system', 'Modos claro, escuro e do sistema', 'Modos claro, oscuro y del sistema', 'Modes clair, sombre et système'),
          L('Five complete language versions of every public page', 'Pum fersiwn iaith gyflawn o bob tudalen gyhoeddus', 'Cinco versões linguísticas completas de cada página pública', 'Cinco versiones lingüísticas completas de cada página pública', 'Cinq versions linguistiques complètes de chaque page publique'),
          L('Printable policy pages that can be saved as PDF', 'Tudalennau polisi argraffadwy y gellir eu cadw fel PDF', 'Páginas de políticas imprimíveis que podem ser guardadas em PDF', 'Páginas de políticas imprimibles que pueden guardarse como PDF', 'Pages de politiques imprimables pouvant être enregistrées en PDF'),
        ],
      },
      {
        heading: L('Known limitations', 'Cyfyngiadau hysbys', 'Limitações conhecidas', 'Limitaciones conocidas', 'Limites connues'),
        paragraphs: [L('Some third-party widgets or externally hosted services may not be fully controlled by us. Translated legal content is provided for convenience and the English legal version remains authoritative. We continue to review contrast, keyboard operation, labels, headings and screen-reader behaviour as pages change.', 'Efallai na fydd rhai widgets trydydd parti neu wasanaethau a gynhelir yn allanol dan ein rheolaeth lawn. Darperir cynnwys cyfreithiol wedi’i gyfieithu er hwylustod ac mae’r fersiwn gyfreithiol Saesneg yn parhau’n awdurdodol. Rydym yn parhau i adolygu cyferbyniad, gweithrediad bysellfwrdd, labeli, penawdau ac ymddygiad darllenydd sgrin wrth i dudalennau newid.', 'Alguns widgets de terceiros ou serviços externos podem não estar totalmente sob o nosso controlo. O conteúdo jurídico traduzido é fornecido por conveniência e a versão inglesa permanece oficial. Continuamos a rever contraste, teclado, rótulos, títulos e funcionamento com leitores de ecrã.', 'Algunos widgets de terceros o servicios externos pueden no estar totalmente bajo nuestro control. El contenido jurídico traducido se ofrece por comodidad y la versión inglesa sigue siendo la oficial. Seguimos revisando contraste, teclado, etiquetas, encabezados y funcionamiento con lectores de pantalla.', 'Certains widgets tiers ou services hébergés à l’extérieur peuvent ne pas être entièrement sous notre contrôle. Les traductions juridiques sont fournies par commodité et la version anglaise reste la version faisant autorité. Nous continuons à vérifier le contraste, le clavier, les libellés, les titres et le fonctionnement avec les lecteurs d’écran.')],
      },
      {
        heading: L('Feedback and alternative formats', 'Adborth a fformatau amgen', 'Comentários e formatos alternativos', 'Comentarios y formatos alternativos', 'Retours et formats alternatifs'),
        paragraphs: [L(`If you cannot access information or need a reasonable adjustment or alternative format, contact ${company.generalEmail}. Include the page, the problem, the format required and any assistive technology used. We will consider the request and respond as soon as reasonably practicable.`, `Os na allwch gyrchu gwybodaeth neu os oes angen addasiad rhesymol neu fformat amgen arnoch, cysylltwch â ${company.generalEmail}. Cynhwyswch y dudalen, y broblem, y fformat sydd ei angen ac unrhyw dechnoleg gynorthwyol a ddefnyddir. Byddwn yn ystyried y cais ac yn ymateb cyn gynted ag sy’n rhesymol ymarferol.`, `Se não conseguir aceder a informações ou precisar de ajuste razoável ou formato alternativo, contacte ${company.generalEmail}. Indique a página, o problema, o formato necessário e a tecnologia de apoio utilizada. Analisaremos o pedido e responderemos assim que razoavelmente possível.`, `Si no puede acceder a la información o necesita un ajuste razonable o formato alternativo, contacte con ${company.generalEmail}. Indique la página, el problema, el formato necesario y la tecnología de apoyo utilizada. Estudiaremos la solicitud y responderemos tan pronto como sea razonablemente posible.`, `Si vous ne pouvez pas accéder à une information ou avez besoin d’un aménagement raisonnable ou d’un format alternatif, contactez ${company.generalEmail}. Indiquez la page, le problème, le format souhaité et la technologie d’assistance utilisée. Nous examinerons la demande et répondrons dès que raisonnablement possible.`)],
      },
      {
        heading: L('Escalation', 'Uwchgyfeirio', 'Escalada', 'Escalación', 'Escalade'),
        paragraphs: [L(`Accessibility complaints may be raised through ${company.complaintsEmail}. Nothing in this statement removes rights under the Equality Act 2010 or other applicable law.`, `Gellir codi cwynion hygyrchedd drwy ${company.complaintsEmail}. Nid oes dim yn y datganiad hwn yn dileu hawliau o dan Ddeddf Cydraddoldeb 2010 na chyfraith berthnasol arall.`, `Reclamações de acessibilidade podem ser apresentadas através de ${company.complaintsEmail}. Nada nesta declaração elimina direitos ao abrigo da Equality Act 2010 ou outra lei aplicável.`, `Las quejas de accesibilidad pueden presentarse mediante ${company.complaintsEmail}. Nada de esta declaración elimina derechos conforme a la Equality Act 2010 u otra ley aplicable.`, `Les réclamations relatives à l’accessibilité peuvent être adressées à ${company.complaintsEmail}. La présente déclaration ne supprime aucun droit au titre de l’Equality Act 2010 ou de toute autre loi applicable.`)],
      },
      commonCompanySection,
    ],
  },
  {
    id: 'security',
    path: '/security-and-vulnerability-disclosure',
    title: uiText.security,
    eyebrow: L('Responsible reporting', 'Adrodd cyfrifol', 'Comunicação responsável', 'Comunicación responsable', 'Signalement responsable'),
    summary: L('How customers and security researchers can report suspected vulnerabilities safely and responsibly.', 'Sut y gall cwsmeriaid ac ymchwilwyr diogelwch roi gwybod am wendidau a amheuir yn ddiogel ac yn gyfrifol.', 'Como clientes e investigadores de segurança podem comunicar vulnerabilidades de forma segura e responsável.', 'Cómo pueden clientes e investigadores de seguridad comunicar vulnerabilidades de forma segura y responsable.', 'Comment les clients et chercheurs en sécurité peuvent signaler des vulnérabilités de manière sûre et responsable.'),
    description: L('Vulnerability disclosure policy for JA Group Services Ltd.', 'Polisi datgelu gwendidau JA Group Services Ltd.', 'Política de divulgação de vulnerabilidades da JA Group Services Ltd.', 'Política de divulgación de vulnerabilidades de JA Group Services Ltd.', 'Politique de divulgation des vulnérabilités de JA Group Services Ltd.'),
    effectiveDate: '2 August 2026',
    printable: true,
    sections: [
      {
        heading: L('How to report', 'Sut i adrodd', 'Como comunicar', 'Cómo comunicar', 'Comment signaler'),
        paragraphs: [L(`Email ${company.itEmail} with the affected website or service, a clear description, reproducible steps, expected and actual behaviour, potential impact and safe supporting evidence. Do not include unnecessary personal data, credentials or unlawfully obtained information.`, `E-bostiwch ${company.itEmail} gydag enw’r wefan neu’r gwasanaeth yr effeithir arno, disgrifiad clir, camau atgynhyrchu, yr ymddygiad disgwyliedig a gwirioneddol, yr effaith bosibl a thystiolaeth ategol ddiogel. Peidiwch â chynnwys data personol diangen, manylion mewngofnodi na gwybodaeth a gafwyd yn anghyfreithlon.`, `Envie email para ${company.itEmail} com o site ou serviço afetado, descrição clara, passos de reprodução, comportamento esperado e observado, impacto potencial e provas seguras. Não inclua dados pessoais desnecessários, credenciais ou informação obtida ilegalmente.`, `Envíe un correo a ${company.itEmail} con el sitio o servicio afectado, descripción clara, pasos de reproducción, comportamiento esperado y real, posible impacto y pruebas seguras. No incluya datos personales innecesarios, credenciales ni información obtenida ilegalmente.`, `Envoyez un courriel à ${company.itEmail} en indiquant le site ou service concerné, une description claire, les étapes de reproduction, le comportement attendu et observé, l’impact potentiel et des éléments de preuve sûrs. N’incluez pas de données personnelles inutiles, d’identifiants ni d’informations obtenues illégalement.`)],
      },
      {
        heading: L('Permitted good-faith activity', 'Gweithgarwch ewyllys da a ganiateir', 'Atividade de boa-fé permitida', 'Actividad de buena fe permitida', 'Activité de bonne foi autorisée'),
        bullets: [
          L('Use only accounts and data you own or are expressly authorised to test.', 'Defnyddiwch gyfrifon a data rydych yn berchen arnynt neu y mae gennych awdurdod penodol i’w profi yn unig.', 'Utilize apenas contas e dados próprios ou que esteja expressamente autorizado a testar.', 'Utilice únicamente cuentas y datos propios o que esté expresamente autorizado a probar.', 'N’utilisez que des comptes et données vous appartenant ou que vous êtes expressément autorisé à tester.'),
          L('Use the minimum interaction needed to demonstrate the issue.', 'Defnyddiwch y rhyngweithio lleiaf sydd ei angen i ddangos y mater.', 'Utilize a interação mínima necessária para demonstrar o problema.', 'Utilice la interacción mínima necesaria para demostrar el problema.', 'Limitez-vous aux interactions minimales nécessaires pour démontrer le problème.'),
          L('Stop if personal data, confidential information or another person’s account becomes accessible.', 'Stopiwch os daw data personol, gwybodaeth gyfrinachol neu gyfrif person arall yn hygyrch.', 'Pare se ficar acessível a dados pessoais, informação confidencial ou conta de terceiro.', 'Deténgase si accede a datos personales, información confidencial o la cuenta de otra persona.', 'Arrêtez si des données personnelles, informations confidentielles ou le compte d’une autre personne deviennent accessibles.'),
          L('Report promptly and allow reasonable time for investigation before public disclosure.', 'Rhowch wybod yn brydlon a chaniatáu amser rhesymol ar gyfer ymchwilio cyn datgeliad cyhoeddus.', 'Comunique rapidamente e conceda tempo razoável para investigação antes de divulgação pública.', 'Comunique con prontitud y conceda un plazo razonable de investigación antes de divulgar públicamente.', 'Signalez rapidement et laissez un délai raisonnable d’enquête avant toute divulgation publique.'),
        ],
      },
      {
        heading: L('Out of scope and prohibited activity', 'Y tu allan i’r cwmpas a gweithgarwch gwaharddedig', 'Fora de âmbito e atividades proibidas', 'Fuera de alcance y actividades prohibidas', 'Hors périmètre et activités interdites'),
        bullets: [
          L('Denial of service, destructive testing or disruption', 'Gwrthod gwasanaeth, profion dinistriol neu darfu', 'Negação de serviço, testes destrutivos ou perturbação', 'Denegación de servicio, pruebas destructivas o interrupción', 'Déni de service, tests destructifs ou perturbation'),
          L('Social engineering, phishing, impersonation or contacting customers or staff', 'Peirianneg gymdeithasol, gwe-rwydo, dynwared neu gysylltu â chwsmeriaid neu staff', 'Engenharia social, phishing, falsificação de identidade ou contacto com clientes ou pessoal', 'Ingeniería social, phishing, suplantación o contacto con clientes o personal', 'Ingénierie sociale, hameçonnage, usurpation ou prise de contact avec des clients ou du personnel'),
          L('Automated scanning that materially affects service performance', 'Sganio awtomataidd sy’n effeithio’n sylweddol ar berfformiad gwasanaeth', 'Varrimento automatizado que afete materialmente o desempenho', 'Escaneo automatizado que afecte significativamente al rendimiento', 'Analyse automatisée affectant sensiblement les performances'),
          L('Accessing, changing, downloading or retaining data beyond what is strictly necessary', 'Cyrchu, newid, lawrlwytho neu gadw data y tu hwnt i’r hyn sy’n gwbl angenrheidiol', 'Aceder, alterar, descarregar ou conservar dados além do estritamente necessário', 'Acceder, modificar, descargar o conservar datos más allá de lo estrictamente necesario', 'Accéder, modifier, télécharger ou conserver des données au-delà du strict nécessaire'),
          L('Demanding payment, threatening disclosure or acting unlawfully', 'Mynnu taliad, bygwth datgeliad neu weithredu’n anghyfreithlon', 'Exigir pagamento, ameaçar divulgação ou atuar ilegalmente', 'Exigir pagos, amenazar con divulgar o actuar ilegalmente', 'Exiger un paiement, menacer de divulguer ou agir illégalement'),
        ],
      },
      {
        heading: L('What to expect', 'Beth i’w ddisgwyl', 'O que esperar', 'Qué esperar', 'À quoi vous attendre'),
        paragraphs: [L('We aim to acknowledge a credible report, assess severity, preserve evidence and coordinate remediation. Timescales depend on complexity and provider involvement. We do not promise payment or a bounty. We will not pursue legal action solely for accidental, proportionate, good-faith research that follows this policy, although this is not permission to break the law or third-party terms.', 'Ein nod yw cydnabod adroddiad credadwy, asesu difrifoldeb, cadw tystiolaeth a chydlynu adferiad. Mae amserlenni’n dibynnu ar gymhlethdod a chyfranogiad darparwyr. Nid ydym yn addo taliad na gwobr. Ni fyddwn yn cymryd camau cyfreithiol dim ond oherwydd ymchwil ddamweiniol, gymesur, ewyllys da sy’n dilyn y polisi hwn, er nad yw hyn yn ganiatâd i dorri’r gyfraith na thelerau trydydd parti.', 'Procuramos acusar um relatório credível, avaliar a gravidade, preservar provas e coordenar a correção. Os prazos dependem da complexidade e do envolvimento de fornecedores. Não prometemos pagamento ou recompensa. Não iniciaremos ação legal apenas por investigação acidental, proporcional e de boa-fé que siga esta política, embora isto não seja autorização para infringir a lei ou termos de terceiros.', 'Procuramos acusar un informe creíble, evaluar la gravedad, conservar pruebas y coordinar la corrección. Los plazos dependen de la complejidad y de los proveedores. No prometemos pagos ni recompensas. No emprenderemos acciones legales únicamente por una investigación accidental, proporcionada y de buena fe que siga esta política, aunque esto no autoriza a infringir la ley ni las condiciones de terceros.', 'Nous visons à accuser réception d’un signalement crédible, à évaluer sa gravité, préserver les preuves et coordonner la correction. Les délais dépendent de la complexité et de l’implication de prestataires. Aucun paiement ni prime n’est promis. Nous n’engagerons pas de poursuites uniquement pour une recherche accidentelle, proportionnée et de bonne foi respectant cette politique, sans que cela n’autorise à enfreindre la loi ou les conditions de tiers.')],
      },
      commonCompanySection,
    ],
  },
  {
    id: 'affiliate',
    path: '/affiliate-disclosure',
    title: uiText.affiliate,
    eyebrow: L('Commercial transparency', 'Tryloywder masnachol', 'Transparência comercial', 'Transparencia comercial', 'Transparence commerciale'),
    summary: L('How affiliate, referral, reseller and partner-supported relationships may affect links, recommendations and contracts.', 'Sut y gall perthnasoedd cysylltiedig, atgyfeirio, ailwerthu a gefnogir gan bartneriaid effeithio ar ddolenni, argymhellion a chontractau.', 'Como as relações de afiliação, referência, revenda e apoio de parceiros podem afetar ligações, recomendações e contratos.', 'Cómo pueden afectar las relaciones de afiliación, referencia, reventa y apoyo de socios a enlaces, recomendaciones y contratos.', 'Comment les relations d’affiliation, de recommandation, de revente et de partenariat peuvent affecter les liens, recommandations et contrats.'),
    description: L('Commercial and affiliate disclosure for JA Group Services Ltd.', 'Datgeliad masnachol a chysylltiedig JA Group Services Ltd.', 'Divulgação comercial e de afiliados da JA Group Services Ltd.', 'Divulgación comercial y de afiliados de JA Group Services Ltd.', 'Déclaration commerciale et d’affiliation de JA Group Services Ltd.'),
    effectiveDate: '2 August 2026',
    printable: true,
    sections: [
      {
        heading: L('Commercial relationships', 'Perthnasoedd masnachol', 'Relações comerciais', 'Relaciones comerciales', 'Relations commerciales'),
        paragraphs: [L('We may receive commission, referral fees, discounted reseller pricing, service credits or another commercial benefit when a user follows a marked link, registers with a provider or purchases an eligible product. This does not normally change the price unless clearly stated.', 'Gallwn dderbyn comisiwn, ffioedd atgyfeirio, prisiau ailwerthu gostyngol, credydau gwasanaeth neu fudd masnachol arall pan fydd defnyddiwr yn dilyn dolen wedi’i nodi, yn cofrestru gyda darparwr neu’n prynu cynnyrch cymwys. Nid yw hyn fel arfer yn newid y pris oni nodir yn glir.', 'Podemos receber comissão, taxa de referência, preços de revenda com desconto, créditos de serviço ou outro benefício quando o utilizador segue uma ligação identificada, se regista num fornecedor ou compra produto elegível. Isso normalmente não altera o preço, salvo indicação clara.', 'Podemos recibir comisiones, tarifas de referencia, precios de reventa descontados, créditos de servicio u otro beneficio cuando el usuario sigue un enlace identificado, se registra con un proveedor o compra un producto elegible. Esto normalmente no cambia el precio salvo que se indique claramente.', 'Nous pouvons percevoir une commission, des frais de recommandation, des tarifs de revente réduits, des crédits de service ou un autre avantage lorsqu’un utilisateur suit un lien identifié, s’inscrit auprès d’un fournisseur ou achète un produit éligible. Cela ne modifie généralement pas le prix, sauf indication claire.')],
      },
      {
        heading: L('Who contracts with you', 'Pwy sy’n contractio gyda chi', 'Quem contrata consigo', 'Quién contrata con usted', 'Votre cocontractant'),
        paragraphs: [L('Where JA Group Services Ltd is the seller or service provider, your contract is with us. Where a page redirects you to an independent affiliate or provider and states that it supplies the service, your contract is with that provider and its terms, privacy information, refunds and complaints process apply.', 'Pan mai JA Group Services Ltd yw’r gwerthwr neu’r darparwr gwasanaeth, mae eich contract gyda ni. Pan fydd tudalen yn eich ailgyfeirio at gysylltai neu ddarparwr annibynnol ac yn nodi mai ef sy’n cyflenwi’r gwasanaeth, mae eich contract gyda’r darparwr hwnnw ac mae ei delerau, gwybodaeth preifatrwydd, ad-daliadau a phroses gwynion yn berthnasol.', 'Quando a JA Group Services Ltd é o vendedor ou prestador, o contrato é connosco. Quando a página o encaminha para um afiliado ou fornecedor independente e indica que este fornece o serviço, o contrato é com esse fornecedor e aplicam-se os seus termos, privacidade, reembolsos e reclamações.', 'Cuando JA Group Services Ltd sea el vendedor o proveedor, el contrato será con nosotros. Cuando una página le redirija a un afiliado o proveedor independiente e indique que este presta el servicio, el contrato será con dicho proveedor y se aplicarán sus términos, privacidad, reembolsos y quejas.', 'Lorsque JA Group Services Ltd est le vendeur ou prestataire, votre contrat est conclu avec nous. Lorsqu’une page vous redirige vers un affilié ou fournisseur indépendant et précise qu’il fournit le service, votre contrat est conclu avec ce fournisseur et ses conditions, informations de confidentialité, remboursements et procédure de réclamation s’appliquent.')],
      },
      {
        heading: L('Selection and responsibility', 'Dewis a chyfrifoldeb', 'Seleção e responsabilidade', 'Selección y responsabilidad', 'Sélection et responsabilité'),
        paragraphs: [L('We aim to select relevant relationships and explain our role, but a commercial relationship is not a guarantee that every product will suit every user. Users should review the provider’s information and make their own decision. We remain responsible for our own statements and administration; the provider remains responsible for matters within its control.', 'Ein nod yw dewis perthnasoedd perthnasol ac egluro ein rôl, ond nid yw perthynas fasnachol yn warant y bydd pob cynnyrch yn addas i bob defnyddiwr. Dylai defnyddwyr adolygu gwybodaeth y darparwr a gwneud eu penderfyniad eu hunain. Rydym yn parhau’n gyfrifol am ein datganiadau a’n gweinyddu ein hunain; mae’r darparwr yn parhau’n gyfrifol am faterion o fewn ei reolaeth.', 'Procuramos selecionar relações relevantes e explicar o nosso papel, mas uma relação comercial não garante que todos os produtos sejam adequados a todos. O utilizador deve rever a informação do fornecedor e decidir. Somos responsáveis pelas nossas declarações e administração; o fornecedor é responsável pelo que controla.', 'Procuramos seleccionar relaciones pertinentes y explicar nuestro papel, pero una relación comercial no garantiza que todos los productos sean adecuados para todos. El usuario debe revisar la información del proveedor y decidir. Somos responsables de nuestras declaraciones y administración; el proveedor de lo que controla.', 'Nous cherchons à sélectionner des relations pertinentes et à expliquer notre rôle, mais une relation commerciale ne garantit pas que chaque produit convienne à chaque utilisateur. L’utilisateur doit examiner les informations du fournisseur et décider. Nous restons responsables de nos propres déclarations et de notre administration ; le fournisseur reste responsable de ce qui relève de son contrôle.')],
      },
      {
        heading: L('How links are identified', 'Sut y nodir dolenni', 'Como as ligações são identificadas', 'Cómo se identifican los enlaces', 'Identification des liens'),
        paragraphs: [L('Where reasonably practicable, affiliate or external-provider links are described as affiliate, partner, sponsored, external or provider links near the relevant content. This page provides the standing disclosure for the website.', 'Lle bo’n rhesymol ymarferol, disgrifir dolenni cysylltiedig neu ddarparwr allanol fel dolenni cysylltiedig, partner, noddedig, allanol neu ddarparwr ger y cynnwys perthnasol. Mae’r dudalen hon yn darparu’r datgeliad sefydlog ar gyfer y wefan.', 'Sempre que razoavelmente possível, as ligações de afiliados ou fornecedores externos são identificadas como afiliado, parceiro, patrocinado, externo ou fornecedor junto do conteúdo. Esta página constitui a divulgação permanente do site.', 'Cuando sea razonablemente posible, los enlaces de afiliados o proveedores externos se identifican como afiliado, socio, patrocinado, externo o proveedor junto al contenido. Esta página constituye la divulgación permanente del sitio.', 'Dans la mesure du raisonnable, les liens d’affiliation ou de fournisseurs externes sont identifiés comme liens affiliés, partenaires, sponsorisés, externes ou fournisseurs à proximité du contenu. La présente page constitue la déclaration permanente du site.')],
      },
      commonCompanySection,
    ],
  },
  {
    id: 'sitemap',
    path: '/sitemap',
    title: uiText.sitemap,
    eyebrow: L('Website navigation', 'Llywio’r wefan', 'Navegação do site', 'Navegación del sitio', 'Navigation du site'),
    summary: L('A complete list of the main public pages on the JA Group Services corporate website.', 'Rhestr gyflawn o brif dudalennau cyhoeddus gwefan gorfforaethol JA Group Services.', 'Lista completa das principais páginas públicas do site corporativo da JA Group Services.', 'Lista completa de las principales páginas públicas del sitio corporativo de JA Group Services.', 'Liste complète des principales pages publiques du site institutionnel de JA Group Services.'),
    description: L('Sitemap for JA Group Services Ltd.', 'Map gwefan JA Group Services Ltd.', 'Mapa do site da JA Group Services Ltd.', 'Mapa del sitio de JA Group Services Ltd.', 'Plan du site de JA Group Services Ltd.'),
    sections: [
      {
        heading: L('Company', 'Cwmni', 'Empresa', 'Empresa', 'Société'),
        links: [
          { label: uiText.home, href: '/' },
          { label: uiText.about, href: '/about-us' },
          { label: uiText.brands, href: '/about-our-divisions' },
          { label: uiText.structure, href: '/our-group-structure' },
          { label: uiText.trustCentre, href: '/trust-and-governance' },
          { label: uiText.announcements, href: '/announcements' },
          { label: uiText.formerServices, href: '/former-services' },
        ],
      },
      {
        heading: L('Customer and commercial', 'Cwsmer a masnachol', 'Cliente e comercial', 'Cliente y comercial', 'Client et commercial'),
        links: [
          { label: uiText.supportCentre, href: '/help-and-support' },
          { label: uiText.serviceStatus, href: '/service-status' },
          { label: uiText.partner, href: '/partner-with-us' },
          { label: uiText.contact, href: '/contactus' },
          { label: uiText.affiliate, href: '/affiliate-disclosure' },
        ],
      },
      {
        heading: uiText.policies,
        links: [
          { label: uiText.terms, href: '/terms-of-service' },
          { label: uiText.privacy, href: '/privacy-policy' },
          { label: uiText.cookies, href: '/cookies-policy' },
          { label: uiText.complaints, href: '/complaints-policy' },
          { label: uiText.intellectualProperty, href: '/ip-statement' },
          { label: uiText.accessibility, href: '/accessibility-statement' },
          { label: uiText.security, href: '/security-and-vulnerability-disclosure' },
        ],
      },
    ],
  },
];

export const publicPages = Object.fromEntries(pages.map((page) => [page.id, page])) as Record<string, PublicPageDefinition>;

export const publicPageList = pages;

export function text(value: LocalisedText, language: SupportedLanguage): string {
  return value[language] || value.en;
}
