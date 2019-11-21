import { MissionMobilite } from '../models/mission-mobilite';
import { Path } from '../models/mission-mobilite-etape';

export const Mission: MissionMobilite = {
  videoIntro: '3_Fonctionnement_d_une_centrale_photovoltaique_1.mp4',
  description: `
      Aider Yanis et Inès dans leur itinéraire.<br><br>Pour cela,
      vous devrez faire des choix. Attention à ne pas perdre trop de
      temps afin d\'arriver à temps pour la fête.<br><br>Bonne chance !
      `,
  etapes: [
    {
      path: Path.ETAPE_IMAGE_INTERACTIVE,
      insertText: `
        En route pour retrouver les autres groupes,
        vous recevez un message expliquant que le rendez-vous a
        changé.<br><br>Vous devez désormais les retrouver directement
        à l\'arrêt La Plaine Stade de France à 15h15.<br><br> Repérez
        les éléments qui vous permettent de trouver un nouvel itinéraire.
        `,
      backgroundImage: 'S051',
      indices: [
        {
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
    }
  ],
  messagesCles: [
    {
      message : '^Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor \
                sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.$',
      wimg: 'MC1.jpg',
      wx: '0',
      wy: '0',
      visited : false
    },
    {
      // tslint:disable-next-line: max-line-length
      message : '^Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, \
                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.$',
      wimg: 'MC2.jpg',
      wx: '0',
      wy: '0',
      visited : false
    },
    {
      // tslint:disable-next-line: max-line-length
      message : '^Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, \
                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.$',
      wimg: 'MC3.jpg',
      wx: '0',
      wy: '0',
      visited : false
    },
    {
      // tslint:disable-next-line: max-line-length
      message : '^Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, \
                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.$',
      wimg: 'MC4.jpg',
      wx: '0',
      wy: '0',
      visited : false
    },
    {
      // tslint:disable-next-line: max-line-length
      message : '^Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, \
                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.$',
      wimg: 'MC5.jpg',
      wx: '0',
      wy: '0',
      visited : false
    },
    {
      // tslint:disable-next-line: max-line-length
      message : '^Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, \
                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.$',
      wimg: 'MC6.jpg',
      wx: '0',
      wy: '0',
      visited : false
    }
  ]
};
