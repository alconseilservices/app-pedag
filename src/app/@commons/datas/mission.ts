import { MobilityMission } from '../models/mobility-mission';
import { Path } from '../models/mobility-mission-step';

export const Mission: MobilityMission = {
  devMode: false,
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
  videoIntro: 'video_intro',
  description: `
    Conseiller Yanis et Inès dans leur itinéraire.<br><br>Pour cela,
    vous devrez les aider à faire des choix. Attention à ne pas perdre trop de
    temps afin d'arriver à l'heure à la fête.<br><br>Bonne chance !
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
          responseHint: 'Bon choix ! Vous aurez toutes les infos.',
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
            Le train fonctionne grâce à l\'électricité qui est acheminée par la caténaire.
            Il émet peu de gaz à effet de serre. Il est interdit de monter sur un train ou de s'approcher de la caténaire.
            Le risque électrique est présent 24h/24 et 7j/7 !
          `,
          image: {
            file: 'S02_IC_01',
            left: 0,
            top: 0,
            height: 100
          }
        },
        {
          hidden: true,
          width: 110,
          height: 250,
          x: 650,
          y: 400,
          text: `
            Le vélo, c'est écologique et pratique. Des abris sécurisés existent
            pour garer son vélo. On y accède grâce à un abonnement sur la carte Navigo.
            `,
        },
        {
          hidden: true,
          width: 230,
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
          width: 150,
          height: 220,
          x: 80,
          y: 450,
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
        Le groupe est au complet. Vous devez prendre le train qui va à Montigny Beauchamp.<br><br>Sur quel quai devez-vous aller ?
        `
      },
      landingImage: 'S03',
      choices: [
        {
          value: 'Vous devez aller sur le quai 2.',
          goodChoice: true,
          score: 0,
          responseImage: 'S03_R1',
          responseFace: 'face_garcon',
          responseFaceName: 'Un des jeunes',
          responseHint: 'C\'est le bon quai ! '
        },
        {
          value: 'Vous devez aller sur le quai 1.',
          goodChoice: false,
          score: 1,
          responseImage: 'S03_R2',
          responseFace: 'face_man',
          responseFaceName: 'Yanis',
          responseHint: 'Regardons la destination sur l’application.',
        }
      ],
      indications: [
        {
          hidden: false,
          width: 310,
          height: 300,
          x: 160,
          y: 50,
          text: `
          -Ticket Origine-Destination : permet de voyager en train depuis sa gare de départ jusqu’à sa gare d’arrivée.
          <br>-Ticket Jeunes Week-end : ce forfait à prix réduit permet d’effectuer un nombre illimité de voyages, pendant une journée, à l’intérieur des zones tarifaires choisies.
          <br>-Voir les tarifs réduits selon la situation de sa famille (CMU, RSA, famille nombreuse, etc) sur Vianavigo.fr
          `,
          image: {
            file: 'S03_IC_01',
            left: 0,
            top: 0,
            height: 100
          }
        },
        {
          hidden: false,
          width: 230,
          height: 150,
          x: 590,
          y: 0,
          image: {
            file: 'S03_IC_02',
            left: 0,
            top: 0,
            height: 100
          }
        },
        {
          hidden: false,
          width: 230,
          height: 150,
          x: 825,
          y: 0,
          image: {
            file: 'S03_IC_03',
            left: 0,
            top: 0,
            height: 100
          }
        }
      ]
    },
    {
      path: Path.ETAPE_IMAGE_INTERACTIVE,
      insertText: {
        value: `
        Votre train est à quai.<br><br> Identifiez les personnes qui ont un comportement gênant ou dangereux.
      `
      },
      backgroundImage: 'S04',
      indications: [
        {
          hidden: true,
          width: 230,
          height: 310,
          x: 330,
          y: 230,
          // tslint:disable-next-line: max-line-length
          text: `Il est important de laisser descendre les autres voyageurs avant de monter dans le train, cela évite les conflits et le train peut repartir plus vite.`,
        },
        {
          hidden: true,
          width: 150,
          height: 330,
          x: 920,
          y: 230,
          // tslint:disable-next-line: max-line-length
          text: 'Il est dangereux de circuler en trottinette dans les gares et sur les quais. Un des risques est de tomber ou faire tomber quelqu\'un sur les rails. Cette action est aussi passible d\'une amende. ',

        },
        {
          hidden: true,
          width: 115,
          height: 230,
          x: 1110,
          y: 230,
          // tslint:disable-next-line: max-line-length
          text: 'Lorsque le train passe, l\'air qu\'il déplace provoque un effet de souffle qui peut déséquilibrer, voire aspirer la personne et l\'entraîner sur les rails, sous les roues du train. ',
          video:'S04_IC_02',
        },
      ]
    },
    {
      path: Path.ETAPE_IMAGE_INTERACTIVE,
      insertText: {
        value: `
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
            file: 'S05_IC_02',
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
          text: 'Ce plan affiche toutes les lignes de train du réseau en Ile-de-France. Il permet de trouver votre itinéraire.',
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
            file: 'S05_IC_04',
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
          `,
          image: {
            file: 'S05_IC_05',
            left: 0,
            top: 0,
            height: 100
          }

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
          responseImage: 'S06_R1',
          responseFace: 'face',
          responseFaceName: 'Inès',
          responseHint: 'Regardons le plan à nouveau. Je pense qu\'il doit y avoir un itinéraire plus rapide.'
        },
        {
          value: 'Vous changez à Ermont Eaubonne pour prendre la ligne H.',
          goodChoice: true,
          score: 0,
          responseImage: 'S06_R02',
          responseFace: 'face_man',
          responseFaceName: 'Yanis',
          responseHint: 'Ça y est, on arrive ! Préparez-vous à descendre.'
        },
        {
          value: 'Vous changez à Ermont Eaubonne pour prendre la ligne J.',
          goodChoice: false,
          score: 2,
          responseImage: 'S06_R1',
          responseFace: 'face',
          responseFaceName: 'Inès',
          responseHint: 'Regardons le plan à nouveau. Il y a peut-être un itinéraire  avec moins de changements.'
        }
      ],
      indications: [
      ]
    },
    {
      path: Path.ETAPE_QCM_INDEX,
      insertText: {
        value: `
        Vous êtes en train de descendre à Ermont Eaubonne quand vous entendez un voyageur dire que le train pour Paris va
        arriver sur le quai d'en face.
        <br><br>Que faîtes-vous ?
        `
        },
      landingImage: 'S07',
      choices: [
        {
          value: 'Vous prenez le souterrain en courant.',
          goodChoice: false,
          score: 1,
          responseImage: 'S07_R1',
          responseFace: 'face',
          responseFaceName: 'Inès',
          responseHint: 'Je crois qu\'on a raté le train !  '
        },
        {
          value: ' Vous décidez de traverser par les voies.',
          goodChoice: false,
          score: 2,
          responseImage: 'S07_R2',
          responseFace: 'face_agent',
          responseFaceName: 'L\'agent SNCF',
          responseHint: 'Il est très dangereux de traverser les voies ! Vous devez passer par le souterrain.',
        },
        {
          value: 'Vous prenez le souterrain tranquillement. ',
          goodChoice: true,
          score: 0,
          responseImage: 'S07_R3',
          responseFace: 'face_man',
          responseFaceName: 'Yanis',
          responseHint: 'C\'est bon, on est arrivé à temps !',
          indications: [
            {
              hidden: false,
              width: 120,
              height: 400,
              x: 1100,
              y: 180,
              video: 'S07_IC_01',
            },
      ]
        }
      ],
    },
    {
      path: Path.ETAPE_IMAGE_INTERACTIVE,
      insertText: {
        value: `
        Vous êtes arrivés à la Gare du Nord.
       <br><br>Identifiez les éléments qui vous permettent de trouver votre train.
          `
      },
      backgroundImage: 'S08',
      indications: [
        {
          hidden: true,
          width: 200,
          height: 600,
          x: 0,
          y: 0,
          text: `
          - Navigo Semaine, Mois ou Annuel : ce forfait permet de voyager de manière illimitée à l'intérieur des zones tarifaires choisies.
          <br>- IMAGINE R : c'est un Navigo annuel à tarif réduit pour les jeunes.
          Voir également les tarifs réduits selon la situation de sa famille (CMU, RSA, famille nombreuse, etc) sur vianavigo.fr
          `,
          image: {
            file: 'S08_IC_01',
            left: 0,
            top: 0,
            height: 100
          }
        },
        {
          hidden: true,
          width: 180,
          height: 100,
          x: 390,
          y: 140,
           image: {
            file: 'S08_IC_03',
            left: 0,
            top: 0,
            height: 100
          }

        },
        {
          hidden: true,
          width: 80,
          height: 100,
          x: 480,
          y: 260,
          image: {
            file: 'S08_IC_02',
            left: 0,
            top: 0,
            height: 100
          }
        },
        {
          hidden: true,
          width: 250,
          height: 430,
          x: 920,
          y: 100,
          image: {
            file: 'S08_IC_04',
            left: 0,
            top: 0,
            height: 100
          }
        },
      ]
    },
    {
      path: Path.ETAPE_QCM_INDEX,
      insertText: {
        value: `
        Vous arrivez sur le quai.<br><br>Quel train devez-vous prendre ?
        `
      },
      landingImage: 'S09',
      choices: [
        {
          value: ' Le train à destination de l\'Aéroport Charles de Gaulle, à l\'approche, voie 43.',
          goodChoice: false,
          score: 2,
          responseImage: 'S09_R1',
          responseFace: 'face_man',
          responseFaceName: 'Yanis',
          responseHint: 'Ce n\'est pas le bon train. Il ne s\'arrête pas à La plaine Stade de France. '
        },
        {
          value: 'Le train à destination  de l\'Aéroport Charles de Gaulle, qui arrive voie 43 dans 4 minutes.',
          goodChoice: true,
          score: 0,
          responseImage: 'S09_R2',
          responseFace: 'face_man',
          responseFaceName: 'Yanis',
          responseHint: 'C\'est le bon train, notre arrêt est affiché !',
        },
        {
          value: 'Le train destination de Villiers le Bel à quai, voie 41.',
          goodChoice: false,
          score: 2,
          responseImage: 'S09_R3',
          responseFace: 'face',
          responseFaceName: 'Inès',
          responseHint: 'Attendez, c\'est la D !',
        }
      ],
      indications: [
      {
        hidden: false,
        width: 100,
        height: 80,
        x: 230,
        y: 120,
        image: {
          file: 'S09_IC_01',
          left: 0,
          top: 0,
          height: 100
        }
      },
      {
        hidden: false,
        width: 100,
        height: 80,
        x: 375,
        y: 120,
        image: {
          file: 'S09_IC_02',
          left: 0,
          top: 0,
          height: 100
        }
      },
      {
        hidden: false,
        width: 100,
        height: 80,
        x: 715,
        y: 120,
        image: {
          file: 'S09_IC_03',
          left: 0,
          top: 0,
          height: 100
        }
      },
      {
        hidden: false,
        width: 100,
        height: 80,
        x: 850,
        y: 120,
        image: {
          file: 'S09_IC_04',
          left: 0,
          top: 0,
          height: 100
        }
      },
      ]
    },
    {
      path: Path.ETAPE_QCM_INDEX,
      insertText: {
        value: `
        Vous venez de monter dans le train. Un homme arrive en courant alors que les portes sont en train de se fermer.
        <br><br> Que faites-vous ?
        `
      },
      landingImage: 'S10',
      choices: [
        {
          value: 'Vous bloquez les portes.',
          goodChoice: false,
          score: 2,
          responseImage: 'S10_R1',
          responseFace: 'face',
          responseFaceName: 'Inès',
          responseHint: 'Quelque chose me dit qu\'on n\'aurait pas dû.'
        },
        {
          value: 'Vous laissez le train partir.',
          goodChoice: true,
          score: 0,
          responseImage: 'S10_R2',
          responseFace: 'face_man',
          responseFaceName: 'Yanis',
          responseHint: 'On est arrivé !',
          indications: [
            {
              hidden: false,
              width: 140,
              height: 250,
              x: 580,
              y: 350,
              video:'S10_IC_01'
            }
            ]
        }
      ],

    }
  ],
  keyMessages: [
    {
      message : 'Préparer son itinéraire, c\'est voyager plus tranquillement.',
      file: 'S01_R2',
      left: 0,
      top: 0,
      height: 100,
      visited : false
    },
    {
      message : 'Connaître la destination des trains, permet de s\'orienter en gare.',
      file: 'S03',
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
      file: 'S07_R2',
      left: 0,
      top: 0,
      height: 100,
      visited : false
    },
    {
      message : 'Les écrans de quai permettent de vérifier les stations desservies.',
      file: 'S09',
      left: 0,
      top: 0,
      height: 100,
      visited : false
    },
    {
      message : 'Bloquer les portes est une fausse bonne idée.',
      file: 'S10_R1',
      left: 0,
      top: 0,
      height: 100,
      visited : false
    }
  ],
  endVideos: [
    {
      file: 'video_conclusion_A',
      minScore: 0,
      maxScore: 2
    },
    {
      file: 'video_conclusion_B',
      minScore: 3,
      maxScore: 7
    },
    {
      file: 'video_conclusion_C',
      minScore: 8,
      maxScore: 11
    }
  ]
};
