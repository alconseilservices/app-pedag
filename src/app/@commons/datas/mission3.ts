import { MissionCourse } from '../models/mission-course';
// tslint:disable-next-line: max-line-length
import { CommonStepPresentation, CommonStepCollecteIndices, CommonStepAnalyseDoc, CommonStepConseilExpert, CommonStepPropSolution, CommonStepMessagesCles } from '../models/mission-course-step';

export const Mission3: MissionCourse = {
  id: 'm3',
  name: 'Énergies & climat',
  level: 'c1',
  description: 'Énergies & climat',
  mandatory: true,
  activ: true,
  steps: [
    {
      index: 1,
      common: CommonStepPresentation.instance(),
      bgName: 'mission3-decor1.jpg',
      visited: false,
      activ: false,
      presTitle: 'Bienvenue dans la mission',
      // tslint:disable-next-line: max-line-length
      presText: 'Le directeur de votre collège souhaite faire de votre établissement un modèle en matière d’économie d’énergie et réduire ses émissions de gaz à effet de serre. Il propose à tous les élèves volontaires de participer à un comité de réflexion pour imaginer un plan adapté à votre collège. Vous êtes volontaires pour rejoindre l’équipe ! Votre mission ?<br/><br/>Étudier votre établissement de l’intérieur et de l’extérieur pour trouver les solutions les plus adaptées.<br/><br/>C’est parti !',
      presImage: 'Mission3_compagnon.svg'
    },
    {
      index: 2,
      common: CommonStepCollecteIndices.instance(),
      bgName: 'mission3-decor1.jpg',
      visited: false,
      activ: false,
      indices: [
        {
          x: 1450,
          y: 880,
          visited: false,
          title: 'Les transports',
          image: 'M3_D1_I1.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Les transports sont le secteur le plus énergivore et le plus polluant. Ils représentent près d’1/3 des émissions de gaz à effet de serre en France.'
        },
        {
          x: 1064,
          y: 351,
          visited: false,
          title: 'Le bâtiment de l’établissement scolaire',
          image: 'M3_D1_I2.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Le bâtiment est le secteur le plus consommateur d’énergie et le 2e plus gros émetteur de gaz à effet de serre en France. Il représente aussi près de la moitié de la consommation totale d’énergie en France.'
        },
        {
          x: 291,
          y: 220,
          visited: false,
          title: 'Les aménagements énergétiques',
          image: 'M3_D1_I3.jpg',
          text: 'Comme dans une habitation, les différents espaces de l’établissement scolaire peuvent être aménagés pour faire des économies d’énergie et réduire ses émissions de gaz à effet de serre.'
        },
        {
          x: 567,
          y: 744,
          visited: false,
          title: 'Des solutions numériques',
          image: 'M3_D1_I4.png',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Les nouvelles technologies permettent de maîtriser sa consommations d’énergie, et donc de consommer mieux, en faisant des économies, en gardant son niveau de confort et en respectant l’environnement.'
        },
      ]
    },
    {
      index: 3,
      common: CommonStepCollecteIndices.instance(),
      bgName: 'mission3-decor2.jpg',
      visited: false,
      activ: false,
      indices: [
        {
          x: 1412,
          y: 159,
          visited: false,
          title: 'L’éclairage',
          image: 'M3_D2_I1.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Bien éclairer tout en faisant attention à sa consommation est possible. Dans cet établissement, l’éclairage fonctionne uniquement avec des interrupteurs, et les lampes consomment beaucoup d’énergie.'
        },
        {
          x: 591,
          y: 409,
          visited: false,
          title: 'Le numérique',
          image: 'M3_D2_I2.png',
          // tslint:disable-next-line: max-line-length
          text: 'Le numérique est l’un des secteurs qui consomment le plus, en particulier si les appareils sont anciens, qu’ils restent allumés ou en veille en permanence… Sa pollution est aujourd’hui équivalente à celle de l’aviation.'
        },
        {
          x: 1613,
          y: 475,
          visited: false,
          title: 'Le chauffage',
          image: 'M3_D2_I3.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'Le chauffage représente 2/3 de la consommation électrique des foyers. Le choix de l’emplacement et du modèle des chauffages est important pour faire des économies. La bonne isolation des murs des bâtiments l’est également.'
        },
        {
          x: 1444,
          y: 827,
          visited: false,
          title: 'Le choix des équipements et appareils',
          image: 'M3_D2_I4.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'Certains appareils consomment plus que d\'autres. Il est possible de faire des économies d\'énergie en choisissant mieux ses équipements.'
        },
      ]
    },
    {
      index: 4,
      common: CommonStepAnalyseDoc.instance(),
      bgName: 'mission3-decor2.jpg',
      visited: false,
      activ: false,
      docs: [
        {
          docTitle: 'Le kWh',
          docFile: 'M3-doc1.pdf',
          docExtension: 'application/pdf'
        },
        {
          docTitle: 'La consommation électrique',
          docFile: 'M3-doc2.pdf',
          docExtension: 'application/pdf'
        },
        {
          docTitle: 'Le diagnostic thermique',
          docFile: 'M3-doc3.pdf',
          docExtension: 'application/pdf'
        },
        {
          docTitle: 'École écologique',
          docFile: 'M3-doc4.pdf',
          docExtension: 'application/pdf'
        },
        {
          docTitle: 'École et consommation',
          docFile: 'M3-doc5.pdf',
          docExtension: 'application/pdf'
        },
        {
          docTitle: 'Réchauffement climatique',
          docFile: 'M3-doc6.pdf',
          docExtension: 'application/pdf'
        },
      ]
    },
    {
      index: 5,
      common: CommonStepConseilExpert.instance(),
      bgName: 'mission3-decor2.jpg',
      visited: false,
      activ: false,
      conseils: [
        {
          name: 'Paul',
          job: 'Ingénieur performance énergétique',
          image: 'Mission3_expert1.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Je réalise des projets d’efficacité énergétique. J’étudie les bâtiments et propose des conseils pour leur construction ou leur rénovation. Il n’est plus possible, aujourd’hui, que nous continuions à gaspiller de l’énergie !',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Pour respecter les nouvelles réglementations, faire des économies, réduire les émissions de gaz à effet de serre et préserver l’environnement, il est possible d’utiliser moins d’énergie tout en gardant des services équivalents. C’est ce que l’on appelle l’efficacité énergétique. Dans un bâtiment, le choix de matériaux et techniques de construction ou de rénovation adaptés permet d’améliorer son efficacité énergétique.'
        },
        {
          name: 'Méline',
          job: 'Conseillère commerciale',
          image: 'Mission3_expert2.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'J’accompagne des collectivités, des entreprises ou des particuliers pour analyser leurs pratiques de consommation et les aider dans la mise en place d’alternatives écologiques qui réduisent la pollution. Je suis très attachée à la préservation de l’environnement.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Les éco-gestes sont des réflexes simples de la vie quotidienne qui permettent de réduire sa consommation et sa facture énergétique, mais aussi son empreinte carbone sur la planète, tout en préservant son confort.'
        },
        {
          name: 'Julie',
          job: 'Cheffe de projet domotique',
          image: 'Mission3_expert3.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Mon métier m\'amène à concevoir des solutions électriques pour limiter la consommation énergétique d\'un bâtiment ou d\'une habitation. J\'imagine les bâtiments du futur et j\'adore ça ! Même à mon échelle, j\'ai l\'impression de contribuer au progrès de notre société.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'La domotique permet à chacun de gérer sa consommation d’énergie. C’est l’ensemble des technologies électroniques, informatiques et de télécommunications utilisées pour rendre l’habitat « intelligent ». Elles automatisent et coordonnent les fonctions de sécurité, de confort, de gestion de l’énergie et de communication.'
        }
      ]
    },
    {
      index: 6,
      common: CommonStepPropSolution.instance(),
      bgName: 'mission3-decor2.jpg',
      visited: false,
      activ: false,
      solutions: [
        {
          title: 'Améliorer l’efficacité énergétique des bâtiments',
          // tslint:disable-next-line: max-line-length
          solution: 'Pour mettre aux normes écologiques l’établissement scolaire, nous commencerons par étudier les bâtiments, murs, terrains et eaux environnantes. Des travaux d’assainissement puis de rénovation peuvent être nécessaires. Il faudra pour cela choisir des matériaux écologiques et adaptés.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Toutes ces étapes prennent du temps et demandent de l’argent. Pour améliorer l’efficacité énergétique, il peut aussi être question de changer les éclairages (lampes fluorescentes au profit de LEDs par exemple), renforcer l’isolation des bâtiments ou cultiver les espaces verts et des jardins partagés.',
          bg: 'S1.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission3_expert1.svg',
          visited: false,
          selected: false,
        },
        {
          title: 'Mettre en place de nouvelles habitudes de consommation',
          // tslint:disable-next-line: max-line-length
          solution: 'Vous êtes convaincus qu’il faut commencer par inciter les élèves et le personnel de l’établissement à réfléchir et adopter des gestes et habitudes de consommation plus écologiques. Chacun peut être rendu plus actif et responsable dans le fonctionnement écologique de l’établissement.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Les exemples sont nombreux : tri des déchets, recyclage, réutilisation, fabrication locale, adaptation de la consommation (chauffage, éclairage, appareils électroniques) à l’occupation des salles, transports plus propres et collectifs. Ces changements ont également un intérêt économique pour l’établissement.',
          bg: 'S2.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission3_expert2.svg',
          visited: false,
          selected: false,
        },
        {
          title: 'Utiliser les nouvelles technologies contre le gaspillage',
          // tslint:disable-next-line: max-line-length
          solution: 'Les nouvelles technologies, comme la domotique, permettent d’analyser et de gérer au mieux la consommation d’énergie, mais aussi de garder un niveau de confort optimal, tout en réduisant son empreinte écologique et en préservant l’environnement.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'En plus de lutter contre le gaspillage d’énergie, les nouvelles technologies ont aussi d’autres fonctions utiles pour l’établissement scolaire : prévenir les risques en identifiant les anomalies et les fuites ou la fumée, améliorer le confort grâce aux ouvertures automatiques...',
          bg: 'S3.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission3_expert3.svg',
          visited: false,
          selected: false,
        }
      ]
    },
    {
      index: 7,
      common: CommonStepMessagesCles.instance(),
      bgName: 'mission3-decor2.jpg',
      visited: false,
      activ: false,
      messagesCles: [
        {
          // tslint:disable-next-line: max-line-length
          message : 'Réduire sa consommation d’énergie permet de limiter les émissions de gaz à effet de serre et le réchauffement climatique.',
          wimg: 'MC1.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Bien choisir ses équipements électriques est un bon moyen de réduire sa consommation d’énergie.',
          wimg: 'MC2.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Il existe des éco-gestes pour réduire sa consommation d’énergie : éteindre les lumières, ne pas laisser les appareils en veille...',
          wimg: 'MC3.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Les nouvelles technologies consomment beaucoup d’énergie mais sont aussi utiles pour contrôler sa consommation.',
          wimg: 'MC4.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Réduire sa consommation d’énergie permet aussi de faire des économies et d’être un citoyen responsable.',
          wimg: 'MC5.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Aller à l’école à pied, à vélo ou en transports en commun sont de bons moyens de limiter notre impact sur l’environnement.',
          wimg: 'MC6.jpg',
          wx: '0',
          wy: '0',
          visited : false
        }
      ]
    }
  ]
};
