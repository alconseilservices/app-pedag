import { MissionCourse } from '../models/mission-course';
// tslint:disable-next-line: max-line-length
import { CommonStepPresentation, CommonStepCollecteIndices, CommonStepAnalyseDoc, CommonStepConseilExpert, CommonStepPropSolution, CommonStepMessagesCles } from '../models/mission-course-step';

export const Mission7: MissionCourse = {
  id: 'm7',
  name: 'L’éco-mobilité',
  level: undefined,
  description: 'L’éco-mobilité',
  mandatory: false,
  activ: true,
  steps: [
    {
      index: 1,
      common: CommonStepPresentation.instance(),
      bgName: 'mission7.jpg',
      visited: false,
      activ: false,
      presTitle: 'Bienvenue dans la mission',
      // tslint:disable-next-line: max-line-length
      presText: 'Vous êtes en stage au service Développement durable de votre ville, Marc en est le responsable.<br/>Votre objectif ? L’aider à repenser les moyens de déplacement de la ville pour réduire la pollution de l’air.<br/>Votre mission ? Étudier l’impact des différents modes de déplacement sur l’environnement puis imaginer différentes propositions.<br/><br/>C’est parti !',
      presImage: 'Mission7_compagnon.svg'
    },
    {
      index: 2,
      common: CommonStepCollecteIndices.instance(),
      bgName: 'mission7.jpg',
      visited: false,
      activ: false,
      indices: [
        {
          x: 155,
          y: 391,
          visited: false,
          title: 'Des émissions nocives pour l’homme et l’environnement',
          image: 'M7_I1.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'En brûlant dans les moteurs des voitures, les carburants issus du pétrole émettent des substances nocives pour la santé et l’environnement. Cette combustion émet aussi du CO2 dont l’augmentation contribue au réchauffement climatique.'
        },
        {
          x: 892,
          y: 560,
          visited: false,
          title: 'Les transports en commun',
          image: 'M7_I2.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'L’accès, la promiscuité ou le manque de confort sont souvent mis en avant pour préférer la voiture aux transports en commun. Ils ont pourtant de nombreux avantages...'
        },
        {
          x: 604,
          y: 940,
          visited: false,
          title: 'Des transports inégaux face à la pollution',
          image: 'M7_I3.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Les transports représentent le secteur le plus émetteur de gaz à effet de serre mais ils ne sont pas tous égaux en matière de pollution atmosphérique et sonore.'
        },
        {
          x: 946,
          y: 782,
          visited: false,
          title: 'Le covoiturage',
          image: 'M7_I4.png',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Le covoiturage consiste à partager une voiture entre plusieurs personnes pour faire un même trajet. Ce dispositif a plusieurs avantages.'
        },
        {
          x: 1608,
          y: 511,
          visited: false,
          title: 'Les transports électriques',
          video: 'M7_I5.mp4',
        },
      ]
    },
    {
      index: 3,
      common: CommonStepConseilExpert.instance(),
      bgName: 'mission7.jpg',
      visited: false,
      activ: false,
      conseils: [
        {
          name: 'Théo',
          job: 'Chef de projets transports',
          image: 'Mission7_expert1.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Engagé dans la promotion d’une mobilité propre, je suis en constante relation avec mes clients pour créer le projet de transports le plus adapté à leurs besoins. Pour quelqu’un comme moi qui adore trouver des réponses aux questions et aider les autres, ce métier est parfait !',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Pour les petits trajets, la marche à pieds, le vélo, la trottinette… ne consomment pas d’énergies fossiles. Le covoiturage et les transports publics consomment et polluent beaucoup moins que les voitures individuelles. Je vous conseille donc de multiplier les propositions de modes de déplacement à mettre à disposition des usagers pour les encourager à limiter les déplacements en voiture.'
        },
        {
          name: 'Laura',
          job: 'Stagiaire éco-mobilité',
          image: 'Mission7_expert2.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'J’effectue actuellement un stage de 6 mois. Au quotidien, j’aide mon responsable à concevoir des offres d’installation de bornes de recharge électrique en France. J’apprends beaucoup à son contact et j’espère être embauchée à la fin de mon stage.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Bien que la pollution des moyens de transports dépende de la longueur du trajet, la voiture et l’avion sont ceux qui produisent le plus de gaz à effet de serre. Ils sont aussi sources de pollution sonore. Je vous conseille de privilégier les transports électriques qui émettent quant à eux beaucoup moins de gaz à effet de serre et sont moins bruyants que les transports utilisant des sources d’énergies fossiles.'
        },
        {
          name: 'Ethan',
          job: 'Chercheur en stockage d’électricité',
          image: 'Mission7_expert3.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Mon métier consiste à trouver des solutions pour stocker l’électricité. Passionné par les voitures depuis l’enfance, je cherche aujourd’hui à trouver des solutions pour que les batteries des véhicules électriques soient encore plus performantes.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Avec la démocratisation de la voiture, les habitants ont pris l’habitude de l’utiliser pour de nombreux déplacements, y compris pour de petits trajets qui restent malgré tout très polluants. Je vous conseille de rendre plus accessibles un maximum de lieux (écoles, services, commerces, loisirs) en faisant passer des lignes de bus électriques ou de tramways à proximité et en les répertoriant sur les arrêts de bus.'
        }
      ]
    },
    {
      index: 4,
      common: CommonStepPropSolution.instance(),
      bgName: 'mission7.jpg',
      visited: false,
      activ: false,
      solutions: [
        {
          title: 'Intégrer des transports électriques dans l’offre de transport public pour remplacer les transports à essence',
          // tslint:disable-next-line: max-line-length
          solution: 'Pour limiter les déplacements en voiture, des lignes de transports peuvent être ajoutées dans les zones moins desservies. La transition peut se faire progressivement et sans déranger les usagers dans leurs déplacements quotidiens. Ce choix réduira considérablement l’empreinte carbone de chaque usager.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'La transition des transports à essence vers des transports plus « propres » peut impliquer l’installation de lignes de tramways pour remplacer certaines lignes de bus. Le tramway est le transport en commun le moins polluant.',
          bg: 'S1.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission7_expert1.svg',
          visited: false,
          selected: false,
        },
        {
          title: 'Encourager l’utilisation des moyens de transports individuels tels que les vélos, skateboards et trottinettes…',
          // tslint:disable-next-line: max-line-length
          solution: 'Le vélo, la trottinette, le skateboard, les rollers permettent aux usagers de se rendre précisément là où ils le souhaitent. Selon la distance qu’ils ont à parcourir et le moyen de déplacement choisi, ils peuvent réaliser tout le trajet avec. Cette solution permet aussi d’utiliser ses muscles et d’être actif dans ses déplacements quotidiens !',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Certaines collectivités locales ont mis en place des primes pour l’achat de vélo électrique. Pour encourager l’utilisation de ces modes de transports doux, il est nécessaire de développer la construction de pistes cyclables et des parkings adaptés à proximité des lieux de vie.',
          bg: 'S2.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission7_expert2.svg',
          visited: false,
          selected: false,
        },
        {
          title: 'Mettre en place des services de vélos, scooters et voitures électriques en accès « libre »',
          // tslint:disable-next-line: max-line-length
          solution: 'À l’aide d’un abonnement payant, les usagers accèdent à ces moyens de transport quand ils le souhaitent pour se déplacer. Une fois arrivés, ils raccordent le véhicule à une borne de chargement.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Il ne faut pas confondre covoiturage et auto-partage ! L’auto-partage consiste à mettre à disposition des véhicules en libre-service. Ce dispositif permet de n’utiliser une voiture qu’en cas de besoin. Certains réseaux d’auto-partage existent à l’échelle des villes ou de la France.',
          bg: 'S3.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission7_expert3.svg',
          visited: false,
          selected: false,
        }
      ]
    },
    {
      index: 5,
      common: CommonStepMessagesCles.instance(),
      bgName: 'mission7.jpg',
      visited: false,
      activ: false,
      messagesCles: [
        {
          // tslint:disable-next-line: max-line-length
          message : 'Le secteur du transport est aujourd’hui le principal contributeur d’émissions de gaz à effet de serre en Europe',
          wimg: 'MC1.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Pour des trajets inférieurs à 1km qui pourraient être faits à pied ou en vélo, plus de 50% des Français utilisent leur voiture.',
          wimg: 'MC2.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Sur de courtes distances, la voiture est le moyen de transport le plus polluant.',
          wimg: 'MC3.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Les transports électriques, individuels ou collectifs sont une bonne alternative pour limiter la pollution sonore et atmosphérique.',
          wimg: 'MC4.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Le covoiturage et l’auto-partage sont des alternatives écologiques à la voiture personnelle.',
          wimg: 'MC5.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Ramenés à l’échelle d’un voyageur, le tramway ou le métro polluent 100 fois moins qu’une voiture.',
          wimg: 'MC6.jpg',
          wx: '0',
          wy: '0',
          visited : false
        }
      ]
    }
  ]
};
