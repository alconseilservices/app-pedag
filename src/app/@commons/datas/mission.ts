import { MobilityMission } from '../models/mobility-mission';
import { Path } from '../models/mobility-mission-step';

export const Mission: MobilityMission = {
  devMode: true,
  creditsPicto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet',
  creditsTransilien: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  `,
  creditsTralalere: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  `,
  creditsMain: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  `,
  playerScore: 0,
  videoIntro: '3_Fonctionnement_d_une_centrale_photovoltaique_1.mp4',
  description: `
    Aider Yanis et Inès dans leur itinéraire.<br><br>Pour cela,
    vous devrez faire des choix. Attention à ne pas perdre trop de
    temps afin d'arriver à temps pour la fête.<br><br>Bonne chance !
    `,
  steps: [
    {
      path: Path.ETAPE_QCM_INDEX,
      insertText: {
        value: `
          Demain, vous accompagnez le groupe de jeunes au Stade de France. Vous partirez de Saint-Ouen-l'Aumône Liesse.
		      Le rendez-vous avec les autres groupes est fixé à 14h15 à Montigny Beauchamp.<br><br>Comment faites-vous ?
        `
      },
      landingImage: 'S01',
      choices: [
        {
          value: 'Vous verrez demain à la gare.',
          goodChoice: false,
          score: 2,
          responseImage: 'S01_R1',
          responseFace: 'face_frere',
          responseFaceName: 'Le frère',
          responseHint: 'Vous risquez d\'attendre ! Regardez sur une appli.'
        },
        {
          value: 'Vous allez sur l\'application SNCF.',
          goodChoice: true,
          score: 0,
          responseImage: 'S01_R2',
          responseFace: 'face_frere',
          responseFaceName: 'Le frère',
          responseHint: 'Je sais que la C et la H y vont mais je ne connais pas les horaires.'
        },
        {
          value: 'Vous demandez à votre frère.',
          goodChoice: false,
          score: 1,
          responseImage: 'S01_R1',
          responseFace: 'face_frere',
          responseFaceName: 'Le frère',
          responseHint: 'Je sais que la C et la H y vont mais je ne connais pas les horaires.'
        }
      ]
    },
    {
      path: Path.ETAPE_IMAGE_INTERACTIVE,
      insertText: {
        value:`
        Dans le train, vous recevez un message expliquant que le rendez-vous a changé.
       <br><br>Vous devez désormais retrouver directement les autres groupes à l'arrêt La Plaine Stade de France à 15h15.
       <br><br> Repérez les éléments qui vous permettent de trouver un nouvel itinéraire.
        `
      },
      backgroundImage: 'S05',
      indications: [
        {
          hidden: true,
          width: 120,
          height: 150,
          x: 300,
          y: 410,
          text: `L'application peut vous aider à trouver un nouvel itinéraire. Malheureusement, vous n'avez pas de réseau !`
        },
        {
          hidden: true,
          width: 430,
          height: 130,
          x: 600,
          y: 90,
          text: 'Ce schéma permet de repérer où vous êtes sur la ligne et les stations desservies par le train',
          image: {
            file: 'S05-IC-02',
            left: 0,
            top: 0,
            height: 100
          }
        },
        {
          hidden: true,
          width: 200,
          height: 230,
          x: 380,
          y: 200,
          text: 'Ce plan affiche toutes les lignes de train du réseau en Ile-de-france. Il permet de trouver votre itinéraire.',
        },
        {
          hidden: true,
          width: 100,
          height: 130,
          x: 1030,
          y: 100,
          text: `Le signal d’alarme est réservé aux situations qui présentent un danger
          (feu, vitre cassée...). Un usage injustifié est passible d'une amende.`,
          image: {
            file: 'S02-IC-04',
            left: 0,
            top: 0,
            height: 100
          }
        },
        {
          hidden: true,
          width: 95,
          height: 110,
          x: 1130,
          y: 100,
          text: `
            Si vous êtes témoin d’une agression ou d'un malaise voyageur,
            le 3117 est le meilleur moyen de joindre les secours et d’assurer la prise en charge
           du voyageur à la gare suivante.
          `
        }
      ]
    },
    {
      path: Path.ETAPE_IMAGE_INTERACTIVE,
      insertText: {
        value: `
            C'est le jour de votre sortie au Stade de France, vous retrouvez les jeunes devant la gare.
          <br><br> Identifiez les différents modes de transport sur cette image.
          `
      },
      backgroundImage: 'S02',
      indications: [
        {
          hidden: true,
          width: 210,
          height: 90,
          x: 0,
          y: 375,
          text: `
            Le train fonctionne grâce à l\'électricité qui est acheminée par la caténaire,
            Il émet peu de gaz à effet de serre. Il est interdit de monter sur un train ou de s'approcher de la caténaire.
            Le risque électrique est présent 24h/24 et 7j/7 !
          `,
          image: {
            file: 'S02-IC-01',
            left: 0,
            top: 0,
            height: 100
          }
        },
        {
          hidden: true,
          width: 320,
          height: 150,
          x: 390,
          y: 350,
          text: `
            Le vélo, c'est écologique et pratique. Des abris sécurisés existent
            pour garer son vélo. On y accède grâce à un abonnement sur la carte Navigo.
            `,
        },
        {
          hidden: true,
          width: 310,
          height: 165,
          x: 880,
          y: 370,
          text: `
            Le bus est un mode de transport pratique en ville. Mais pour de plus
            grandes distances, le train est plus rapide.
          `
        },
        {
          hidden: true,
          width: 70,
          height: 100,
          x: 760,
          y: 420,
          text: `
            La marche à pied est le moyen de déplacement le plus utilisé en Ile-de-France.
          `
        },
        {
          hidden: true,
          width: 120,
          height: 150,
          x: 1100,
          y: 270,
          text: `
            Le covoiturage est un moyen de transport économique et écologique.
            Cela permet de réunir plusieurs personnes qui font le même trajet quotidien ou occasionnel.
          `
        }
      ]
    },
    {
      path: Path.ETAPE_QCM_INDEX,
      insertText: {
        value: `
        Vous devez adapter votre itinéraire pour aller directement à l'arrêt La Plaine Stade de France. <br><br>Que faîtes-vous ?
      `
      },
      landingImage: 'S06',
      choices: [
        {
          value: 'Vous restez dans le RER C jusqu\'à Paris.',
          goodChoice: false,
          score: 1,
          responseImage: 'S06-R1-R3',
          responseFace: 'face',
          responseFaceName: 'Inès',
          responseHint: 'Regardons le plan à nouveau. Je pense qu\'il doit y avoir un itinéraire plus rapide.'
        },
        {
          value: 'Vous changez à Ermont Eaubonne pour prendre la ligne H.',
          goodChoice: true,
          score: 0,
          responseImage: 'S01_R1',
          responseFace: 'face_man',
          responseFaceName: 'Yanis',
          responseHint: 'Ca y est, on arrive ! Préparez-vous à descendre'
        },
        {
          value: 'Vous changez à Ermont Eaubonne pour prendre la ligne J.',
          goodChoice: false,
          score: 2,
          responseImage: 'S06-R1-R3',
          responseFace: 'face',
          responseFaceName: 'Inès',
          responseHint: 'Regardons le plan à nouveau. Il y a peut-être un itinéraire  avec moins de changements.'
     }
      ]
    }
  ],
  keyMessages: [
    {
      message : 'Préparer son itinéraire, c\'est voyager plus tranquille.',
      file: 'S01',
      left: 0,
      top: 0,
      height: 100,
      visited : false
    },
    {
      message : 'Connaître la destination des trains, permet de s\'orienter en gare.',
      file: 'S03-IC-01',
      left: 0,
      top: 0,
      height: 100,
      visited : false
    },
    {
      message : 'En cas d\'imprévu, les plans permettent de trouver un nouvel itinéraire.',
      file: 'S06',
      left: 0,
      top: 0,
      height: 100,
      visited : false
    },
    {
      message : 'Ne jamais traverser les voies.',
      file: 'S08-IC-01',
      left: 0,
      top: 0,
      height: 100,
      visited : false
    },
    {
      message : 'Les écrans de quai permettent de vérifier les stations desservies.',
      file: 'S08-IC-01',
      left: 0,
      top: 0,
      height: 100,
      visited : false
    },
    {
      message : 'Bloquer les portes est une fausse bonne idée.',
      file: 'S08-IC-01',
      left: 0,
      top: 0,
      height: 100,
      visited : false
    }
  ],
  endVideos: [
    {
      file: 'vid',
      minScore: 0,
      maxScore: 10
    }
  ]
};
