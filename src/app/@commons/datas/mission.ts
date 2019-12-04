import { MobilityMission } from '../models/mobility-mission';
import { Path } from '../models/mobility-mission-step';

export const Mission: MobilityMission = {
  playerScore: 0,
  videoIntro: '3_Fonctionnement_d_une_centrale_photovoltaique_1.mp4',
  description: `
      Aider Yanis et Inès dans leur itinéraire.<br><br>Pour cela,
      vous devrez faire des choix. Attention à ne pas perdre trop de
      temps afin d\'arriver à temps pour la fête.<br><br>Bonne chance !
      `,
  steps: [
    {
      path: Path.ETAPE_IMAGE_INTERACTIVE,
      insertText: {
        value: `
        En route pour retrouver les autres groupes,
        vous recevez un message expliquant que le rendez-vous a
        changé.<br><br>Vous devez désormais les retrouver directement
        à l\'arrêt La Plaine Stade de France à 15h15.<br><br> Repérez
        les éléments qui vous permettent de trouver un nouvel itinéraire.
        `
      },
      backgroundImage: 'S051',
      indications: [
        {
          hidden: true,
          x: 705,
          y: 41,
          text: 'Le signal d\'alarme doit-être utilisé seulement en cas d\'urgence. \
          En cas de malaise voyageur, il ne faut pas tirer le signal d’alarme mais appeler \
          le 3117. Tout abus est passible d\'une amende',
          image: {
            file: 'S051',
            left: -373,
            top: -100,
            height: 500
          }
        }
      ]
    },
    {
      path: Path.ETAPE_QCM_INDEX,
      insertText: {
        value: `
        Suite au message reçu, vous devez adapter votre itinéraire pour aller directement
         à l'arrêt La Plaine Stade de France pour 15h15.<br><br>Que faîtes-vous ?
        `
      },
      landingImage: 'S052',
      choices: [
        {
          value: 'Vous restez dans votre train jusqu\'à Paris.',
          goodChoice: false,
          score: 1
        },
        {
          value: 'Vous changez à Ermont Eaubonne pour prendre la ligne H.',
          goodChoice: false,
          score: 1
        },
        {
          value: 'Vous changez à Ermont Eaubonne pour prendre la ligne J.',
          goodChoice: true,
          score: 1
        }
      ],
      imageGoodChoice: 'test_decorB2',
      faceGoodChoice: 'face_man',
      faceNameGoodChoice: 'Yanis',
      hintGoodChoice: 'Ça y est on arrive ! Préparez-vous à descendre.',
      imageBadChoice: 'test_decorB',
      faceBadChoice: 'face',
      faceNameBadChoice: 'Inès',
      hintBadChoice: 'Regardons le plan à nouveau. Il y a peut-être un itinéraire avec moins de changements.'
    }
  ],
  keyMessages: [
    {
      message : '^Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor \
                sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.$',
      file: 'S051',
      left: 0,
      top: 0,
      height: 100,
      visited : false
    },
    {
      // tslint:disable-next-line: max-line-length
      message : '^Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, \
                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.$',
      file: 'S051',
      left: 0,
      top: 0,
      height: 100,
      visited : false
    },
    {
      // tslint:disable-next-line: max-line-length
      message : '^Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, \
                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.$',
      file: 'S051',
      left: 0,
      top: 0,
      height: 100,
      visited : false
    },
    {
      // tslint:disable-next-line: max-line-length
      message : '^Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, \
                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.$',
      file: 'S051',
      left: 0,
      top: 0,
      height: 100,
      visited : false
    },
    {
      // tslint:disable-next-line: max-line-length
      message : '^Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, \
                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.$',
      file: 'S052',
      left: 0,
      top: 0,
      height: 100,
      visited : false
    },
    {
      // tslint:disable-next-line: max-line-length
      message : '^Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, \
                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.$',
      file: 'S052',
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
