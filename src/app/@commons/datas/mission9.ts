import { MissionCourse } from '../models/mission-course';
// tslint:disable-next-line: max-line-length
import { CommonStepPresentation, CommonStepCollecteIndices, CommonStepAnalyseDoc, CommonStepConseilExpert, CommonStepPropSolution, CommonStepMessagesCles } from '../models/mission-course-step';

export const Mission9: MissionCourse = {
  id: 'm9',
  name: 'Histoire-géographie de l’électricité',
  level: undefined,
  description: 'Histoire-géographie de l’électricité',
  mandatory: false,
  activ: true,
  steps: [
    {
      index: 1,
      common: CommonStepPresentation.instance(),
      bgName: 'mission9.jpg',
      visited: false,
      activ: false,
      presTitle: 'Bienvenue dans la mission !',
      // tslint:disable-next-line: max-line-length
      presText: 'Thomas Edison est l’inventeur de l’ampoule. Vous avez atterri chez lui grâce à votre machine à voyager dans le temps, mais elle s’est cassée pendant le voyage. Il vous propose de la réparer.<br/>En échange de son aide, il vous demande de lui expliquer quel rôle a joué son invention dans l’histoire de l’électricité.<br/><br/>C’est parti !',
      presImage: 'Mission9_compagnon.svg'
    },
    {
      index: 2,
      common: CommonStepCollecteIndices.instance(),
      bgName: 'mission9.jpg',
      visited: false,
      activ: false,
      indices: [
        {
          x: 1064,
          y: 748,
          visited: false,
          title: 'Invention de la pile électrique',
          image: 'M9_I1.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'En 1799, en Italie, Alessandro Volta invente la pile électrique. Jusque-là, on ne connaissait que l\'électricité statique. Grâce à cette invention, on peut manipuler le courant électrique.'
        },
        {
          x: 530,
          y: 906,
          visited: false,
          title: 'Invention de la batterie',
          image: 'M9_I2.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'En 1859, en France, Gaston Planté, inspiré de l’invention d’Alessandro Volta, nomme son invention « pile secondaire », désormais appelée « batterie ».'
        },
        {
          x: 318,
          y: 728,
          visited: false,
          title: 'Invention du générateur moderne de courant',
          image: 'M9_I3.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Pour pallier la perte de puissance des moteurs électriques, Zénobe Gramme invente, en 1871, en Belgique, le premier générateur moderne de courant suffisamment puissant pour être utilisé à grande échelle.'
        },
        {
          x: 443,
          y: 399,
          visited: false,
          title: 'Invention de la lampe à incandescence',
          image: 'M9_I4.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Après l’invention en 1813 de la lampe à arc électrique par Humphrey Davy, Thomas Edison améliore le principe pour créer la lampe à incandescence plus connue sous le nom d’ampoule, en 1879, aux États-Unis.'
        },
        {
          x: 1560,
          y: 449,
          visited: false,
          title: 'Invention du transistor',
          image: 'M9_I5.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Inventé en 1947, en Écosse, le transistor est utilisé dans la plupart des objets électroniques et informatiques. Il est issu de l’association de trois chercheurs américains : John Bardeen, Walter Brattain et William Shockley.'
        },
      ]
    },
    {
      index: 3,
      common: CommonStepConseilExpert.instance(),
      bgName: 'mission9.jpg',
      visited: false,
      activ: false,
      conseils: [
        {
          name: 'Nolan',
          job: 'Alternant projets internationaux',
          image: 'Mission9_expert1.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Je participe à l’étude des besoins en électricité dans le monde et au management de nos projets sur place. Cette alternance m’amène à voyager régulièrement, notamment en Afrique. Je suis fier de contribuer à lutter contre les inégalités et développer l’accès à l’électricité.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Il y a 20 ans, 1 personne sur 4 n’avait pas accès à l’électricité dans le monde. Aujourd’hui encore 1 personne sur 9 n’y a pas accès, particulièrement en Afrique subsaharienne et en Asie du Sud.'
        },
        {
          name: 'Sasha',
          job: 'Technicien de recherche',
          image: 'Mission9_expert2.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Je développe des projets en Recherche & Développement avec des laboratoires, universités et acteurs de l’industrie pour trouver et tester des solutions innovantes. Je connais bien les différentes inventions électriques car je suis passionné par l’histoire et les sciences.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'L’histoire de l’électricité comporte d’autres dates-clés : Le mot « électricité » est employé pour la première fois en 1600 par William Gilbert. Plus d’un siècle plus tard, en 1729, Stephen Gray expérimente la conduction électrique. Les premières centrales hydroélectriques apparaissent en 1880. EDF naît en 1946. Puis, en 1963, la première centrale nucléaire s’installe en France.'
        },
        {
          name: 'Rose',
          job: 'Technicienne maintenance',
          image: 'Mission9_expert3.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Je réalise des opérations de maintenance préventives ou correctives sur les sites de production d’électricité. Quotidiennement sur le terrain, j’apprécie être au contact des machines. Depuis toute jeune, j’ai toujours aimé le bricolage et la technologie.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Pour réparer une machine (comme celle à voyager dans le temps), il faut se concentrer sur le moteur à champ magnétique, inventé par Nikola Tesla en 1883 et qui fait avancer la machine, et la lampe néon, inventée par Georges Claude en 1910 et qui en éclaire l’intérieur.'
        }
      ]
    },
    {
      index: 4,
      common: CommonStepPropSolution.instance(),
      bgName: 'mission9.jpg',
      visited: false,
      activ: false,
      solutions: [
        {
          title: 'Son invention a été un tournant dans l’histoire de l’électricité',
          // tslint:disable-next-line: max-line-length
          solution: 'Vous trouvez que cette invention de Thomas Edison a constitué un tournant dans les découvertes et inventions électriques ? Grâce à lui, deux essais d’éclairage public ont eu lieu en 1882 et 1883. La lampe torche, elle, a été inventée en 1899.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Joseph Swan est le véritable inventeur de la lampe à incandescence. Thomas Edison modifie la nature du filament puis fait breveter son invention. L’ampoule a été améliorée, notamment au niveau du filament, puis a ouvert la porte à l’invention d’autres lampes : lampes halogènes, lampes néon, puis lampes LED.',
          bg: 'S1.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission9_expert2.svg',
          visited: false,
          selected: false,
        },
        {
          title: 'Son invention n’est pas à la hauteur des autres découvertes qui ont été faites par la suite',
          // tslint:disable-next-line: max-line-length
          solution: 'L’électricité ne sert pas qu’à s’éclairer. La locomotive électrique créée en 1879 permet par exemple de se déplacer, tout comme la voiture électrique, qui voit le jour en 1899.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Avec la maîtrise de l’électricité, l’homme a pu faire une multitude de découvertes qui ne se limitent pas qu’au fait de pouvoir s’éclairer quand il fait sombre. Des inventions ont vu le jour en médecine, comme la radio aux rayons X, ou en communication avec le téléphone. Et il y en a encore tant d’autres !',
          bg: 'S2.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission9_expert2.svg',
          visited: false,
          selected: false,
        },
        {
          title: 'Son invention est une grande découverte mais il reste encore beaucoup à faire en matière d’électricité dans le monde.',
          // tslint:disable-next-line: max-line-length
          solution: 'Vous trouvez que l’invention de l’ampoule constitue une grande avancée. Mais il faudrait par exemple trouver un moyen de faciliter l’accès à l’électricité dans les zones qui en sont aujourd’hui éloignées ou de diminuer l’utilisation des sources d’énergies fossiles pour réduire les émissions de gaz à effet de serre et le réchauffement climatique.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Il existe dans le monde un très gros écart entre les habitants des zones urbaines, presque tous raccordés à l’électricité, et les ruraux, dont un quart n’y a pas accès. Électrifier les zones rurales nécessite des investissements importants, pour relier des espaces parfois très éloignés et peu peuplés aux réseaux existants ou pour installer des sources d’électricité.',
          bg: 'S3.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission9_expert1.svg',
          visited: false,
          selected: false,
        }
      ]
    },
    {
      index: 5,
      common: CommonStepMessagesCles.instance(),
      bgName: 'mission9.jpg',
      visited: false,
      activ: false,
      messagesCles: [
        {
          // tslint:disable-next-line: max-line-length
          message : 'Le mot “électricité” apparaît en 1600.',
          wimg: 'MC1.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Les inventions électriques se développent essentiellement au cours du XIXe siècle, durant la 2e révolution industrielle.',
          wimg: 'MC2.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'L’électricité a transformé les sociétés et permis le progrès.',
          wimg: 'MC3.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Le secteur de l’électricité n’a cessé d’évoluer depuis sa création.',
          wimg: 'MC4.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'L’accès à l’électricité est inégal. 1 personne sur 9 n’a pas accès à l’électricité dans le monde.',
          wimg: 'MC5.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'C’est en Afrique subsaharienne et dans le sud de l’Asie que les populations ont le moins accès à l’électricité.',
          wimg: 'MC6.jpg',
          wx: '0',
          wy: '0',
          visited : false
        }
      ]
    }
  ]
};
