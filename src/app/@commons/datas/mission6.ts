import { MissionCourse } from '../models/mission-course';
// tslint:disable-next-line: max-line-length
import { CommonStepPresentation, CommonStepCollecteIndices, CommonStepAnalyseDoc, CommonStepConseilExpert, CommonStepPropSolution, CommonStepMessagesCles } from '../models/mission-course-step';

export const Mission6: MissionCourse = {
  id: 'm6',
  name: 'Zoom sur la production d’électricité',
  level: undefined,
  description: 'Zoom sur la production d’électricité',
  mandatory: false,
  activ: true,
  steps: [
    {
      index: 1,
      common: CommonStepPresentation.instance(),
      bgName: 'mission6.jpg',
      visited: false,
      activ: false,
      presTitle: 'Bienvenue dans la mission',
      // tslint:disable-next-line: max-line-length
      presText: 'Julia est présidente d’une magnifique île perdue dans l’Atlantique. L’île est intégralement dépendante du continent dans son approvisionnement en énergie.<br/><br/>Son objectif ? Rendre l’île davantage autonome en restant vigilante aux émissions de gaz à effet de serre.<br/><br/>Votre mission ? Étudier les différentes sources d’énergies possibles, la production d’électricité et les contraintes à prendre en compte pour l’aider dans son choix.<br/><br/>C’est parti !',
      presImage: 'Mission6_compagnon.svg'
    },
    {
      index: 2,
      common: CommonStepCollecteIndices.instance(),
      bgName: 'mission6.jpg',
      visited: false,
      activ: false,
      indices: [
        {
          x: 736,
          y: 789,
          visited: false,
          title: 'Le courant électrique : continu ou alternatif',
          image: 'M6_I0.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Le courant continu est produit par l\'activité chimique d\'une batterie ou d\'une pile dans un circuit électrique fermé. Le courant alternatif est produit par la rotation d’un alternateur, comme dans une centrale électrique.'
        },
        {
          x: 791,
          y: 149,
          visited: false,
          title: 'Le soleil',
          video: 'M6_I1.mp4',
        },
        {
          x: 1692,
          y: 199,
          visited: false,
          title: 'Le vent',
          video: 'M6_I2.mp4',
        },
        {
          x: 151,
          y: 600,
          visited: false,
          title: 'L’eau',
          image: 'M6_I3.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Les centrales hydrauliques utilisent l’énergie cinétique du courant de l’eau (centrale au fil de l’eau) ou l’énergie de la chute d’eau (barrage) pour produire de l’électricité. Les petites centrales au fil de l’eau peuvent alimenter en électricité des sites isolés en zone rurale.'
        },
        {
          x: 512,
          y: 559,
          visited: false,
          title: 'Les atouts et contraintes des îles',
          image: 'M6_I4.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Comme de nombreuses îles, celle-ci est traversée par des rivières et un vent constant diminue la chaleur ressentie. Une partie de sa surface n’est pas habitée et il n’y a pas d’industrie implantée.'
        },
        {
          x: 1385,
          y: 530,
          visited: false,
          title: 'Le stockage sur l’île',
          video: 'M6_I5.mp4',
        },
      ]
    },
    {
      index: 3,
      common: CommonStepConseilExpert.instance(),
      bgName: 'mission6.jpg',
      visited: false,
      activ: false,
      conseils: [
        {
          name: 'Noah',
          job: 'Alternant développement durable',
          image: 'Mission6_expert1.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Ma mission est d’analyser les enjeux d’un territoire pour mettre en place des solutions énergétiques durables adaptées aux spécificités locales. Durant ma mission de deux ans, je voyage régulièrement, notamment dans les îles, pour suivre les projets sur le terrain. Et j’adore ça !',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Chaque mode de production a ses spécificités. Aucun n’est « parfait ». Il faut trouver un équilibre en fonction de la disponibilité des ressources et du besoin en électricité. L’île est rocheuse, entourée d’eau, riche en faune et en flore. Il est important que son développement énergétique ne vienne pas troubler son équilibre écologique et respecte le bien-être des habitants.'
        },
        {
          name: 'Maya',
          job: 'Chercheuse en hydroécologie',
          image: 'Mission6_expert2.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Mon défi : concilier énergie et écologie ! Passionné(e) par la nature, j’étudie les éventuelles incidences des ouvrages de production d’électricité sur les écosystèmes aquatiques pour qu’ils ne soient pas impactés.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'On a besoin de l’électricité au quotidien : pour éclairer, se nourrir, se chauffer, communiquer… Pourtant, cette électricité est difficilement stockable, c’est un enjeu pour les années à venir.  La centrale hydroélectrique  STEP (Station de transfert d’énergie par Pompage) est l’un des rares moyens de stocker l’électricité en quantité importante.'
        },
        {
          name: 'Mathis',
          job: 'Formateur',
          image: 'Mission6_expert3.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Je travaille dans le secteur de l’énergie depuis plus de 20 ans et j’ai changé de métier 5 fois. Aujourd’hui, je suis formateur de chefs de projets et je partage mon expérience au sein de l’entreprise. Transmettre aux autres, c’est hyper valorisant !',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Les bâtiments consomment beaucoup d’énergie. Mais il est possible d’utiliser moins d’énergie tout en gardant des services équivalents. C’est ce qu’on appelle l’efficacité énergétique. Dans un bâtiment, on peut rénover et optimiser l’éclairage, l’isolation… et mieux contrôler sa consommation grâce aux nouvelles technologies.'
        }
      ]
    },
    {
      index: 4,
      common: CommonStepPropSolution.instance(),
      bgName: 'mission6.jpg',
      visited: false,
      activ: false,
      solutions: [
        {
          title: 'Privilégier la force de l’eau de la mer et des cours d’eau qui traversent l’île pour produire de l’électricité',
          // tslint:disable-next-line: max-line-length
          solution: 'L’île est entourée par la mer, et traversée de rivières. L’eau est la plus importante source d’énergie renouvelable et la seule énergie à pouvoir être stockée en masse grâce aux barrages. Elle représente donc selon vous la meilleure solution.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Les atouts de l’énergie hydraulique sont nombreux : puissance, souplesse, renouvelable, pas de combustion, donc pas d’émission de gaz à effet de serre, économique à long terme, elle peut facilement s’adapter à un pique de besoin en électricité par un simple lâcher d’eau. Il faudra être vigilant à son éco-socio-conception pour préserver la biodiversité et sécuriser les lieux.',
          bg: 'S1.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission6_expert2.svg',
          visited: false,
          selected: false,
        },
        {
          title: 'Privilégier la force du vent qui souffle sur l’île pour produire de l’électricité',
          // tslint:disable-next-line: max-line-length
          solution: 'Le vent est une source d’énergie qui n’émet pas de gaz à effet de serre. Les éoliennes pouvant être à la fois placées sur terre et dans la mer, l’utilisation de l’énergie éolienne représente selon vous la meilleure solution.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Les éoliennes sont les descendantes du moulin à vent du Moyen-Âge. L’alternateur qui permet de produire l’électricité est placé dans la nacelle. Attention, leur utilisation dépend néanmoins de la météo. Elles représentent donc une source d’énergie intermittente.',
          bg: 'S2.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission6_expert1.svg',
          visited: false,
          selected: false,
        },
        {
          title: 'Améliorer l\'efficacité énergétique des bâtiments et combiner plusieurs sources d’énergies renouvelables',
// tslint:disable-next-line: max-line-length
          solution: 'L’île regorge de diverses sources d’énergies renouvelables (soleil, vent, eau). Vous trouvez qu’il est plus judicieux de les utiliser toutes ensemble pour parvenir à une production suffisante.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'L’objectif à atteindre serait un bilan énergétique neutre, c’est-à-dire que la production et la consommation se compensent pour limiter la dépendance au continent. En combinant les différentes sources d’énergie, on profite des différents atouts climatiques de l’île. La diversification permet aussi de limiter les problèmes d’approvisionnement.',
          bg: 'S3.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission6_expert3.svg',
          visited: false,
          selected: false,
        }
      ]
    },
    {
      index: 5,
      common: CommonStepMessagesCles.instance(),
      bgName: 'mission6.jpg',
      visited: false,
      activ: false,
      messagesCles: [
        {
          // tslint:disable-next-line: max-line-length
          message : 'Le courant électrique est le résultat d’un déplacement d’électrons libres dans un corps conducteur.',
          wimg: 'MC1.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Il existe des sources d’énergies renouvelables et non renouvelables.',
          wimg: 'MC2.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Les énergies renouvelables utilisent des ressources naturelles inépuisables et n’émettent pas de CO2.',
          wimg: 'MC3.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Les énergies renouvelables complètent les énergies fissiles et fossiles pour composer les mix électriques des pays.',
          wimg: 'MC4.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'L’électricité se stocke difficilement. Son stockage est un enjeu important pour les années à venir.',
          wimg: 'MC5.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'L’efficacité énergétique permet de mieux consommer en préservant l’environnement et son confort.',
          wimg: 'MC6.jpg',
          wx: '0',
          wy: '0',
          visited : false
        }
      ]
    }
  ]
};
