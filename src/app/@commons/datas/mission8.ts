import { MissionCourse } from '../models/mission-course';
// tslint:disable-next-line: max-line-length
import { CommonStepPresentation, CommonStepCollecteIndices, CommonStepAnalyseDoc, CommonStepConseilExpert, CommonStepPropSolution, CommonStepMessagesCles } from '../models/mission-course-step';

export const Mission8: MissionCourse = {
  id: 'm8',
  name: 'Électricité, habitat et éco-quartier',
  level: undefined,
  description: 'Électricité, habitat et éco-quartier',
  mandatory: false,
  activ: true,
  steps: [
    {
      index: 1,
      common: CommonStepPresentation.instance(),
      bgName: 'mission8.jpg',
      visited: false,
      activ: false,
      presTitle: 'Bienvenue dans la mission !',
      // tslint:disable-next-line: max-line-length
      presText: 'Vous êtes en stage au service environnement de votre département. Eva, votre responsable, est chargée de réhabiliter un vieux quartier industriel en friche pour le transformer en éco-quartier.<br/>Elle vous demande de réduire la consommation énergétique de ce nouveau quartier.<br/>Votre mission ? Étudier le quartier en friche et les caractéristiques des éco-quartiers pour imaginer un projet adapté.<br/><br/>C’est parti !',
      presImage: 'Mission8_compagnon.svg'
    },
    {
      index: 2,
      common: CommonStepCollecteIndices.instance(),
      bgName: 'mission8.jpg',
      visited: false,
      activ: false,
      indices: [
        {
          x: 493,
          y: 994,
          visited: false,
          title: 'Les risques dus aux friches urbaines',
          image: 'M8_I1.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Les friches urbaines sont des terrains ou des bâtiments abandonnés, en ville ou aux alentours. Ils peuvent avoir été pollués par leurs précédentes activités et devenir polluants à leur tour.'
        },
        {
          x: 227,
          y: 476,
          visited: false,
          title: 'La consommation des bâtiments',
          image: 'M8_I2.png',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Dans les bâtiments, le chauffage, la climatisation, l\'éclairage, l\'eau chaude, les appareils électriques... représentent près de la moitié de la consommation totale d\'énergie en France.'
        },
        {
          x: 1261,
          y: 687,
          visited: false,
          title: 'Les habitats passifs',
          image: 'M8_I3.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Les habitats passifs sont des bâtiments dont la consommation énergétique au m2 est très faible, voire nulle.'
        },
        {
          x: 1676,
          y: 219,
          visited: false,
          title: 'L’utilisation de chauffages solaires',
          image: 'M8_I4.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Le soleil est une source d’énergie renouvelable. Les applications du solaire thermique dans le bâtiment consistent à capter le rayonnement du soleil afin de chauffer de l’eau.'
        },
        {
          x: 741,
          y: 526,
          visited: false,
          title: 'La thermographie',
          image: 'M8_I5.jpeg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'La thermographie est une technique qui utilise une caméra thermique à infrarouge pour repérer les anomalies présentes dans un bâtiment sans en abîmer les matériaux.'
        },
      ]
    },
    {
      index: 3,
      common: CommonStepConseilExpert.instance(),
      bgName: 'mission8.jpg',
      visited: false,
      activ: false,
      conseils: [
        {
          name: 'Lana',
          job: 'Chercheuse en efficacité énergétique',
          image: 'Mission8_expert1.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Avec mes collègues, je mène des actions de veille et de développement en matière de performance énergétique. Mes travaux de recherche s’orientent à la fois sur les usages énergétiques et leur pilotage, sur l’autoproduction et sur l’enveloppe des bâtiments.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Les bâtiments anciens ont parfois des solutions de chauffage qui consomment beaucoup d’énergie et qui émettent plus de C02. Je vous conseille de vous concentrer sur des solutions qui consomment moins d’énergie. Elles ne sont pas nécessairement plus coûteuses et préservent le niveau de confort des habitants : pompe à chaleur, chauffages radiants...'
        },
        {
          name: 'Clémence',
          job: 'Alternante espaces verts',
          image: 'Mission8_expert2.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'J’accompagne mon tuteur dans des travaux paysagers dans toute la région sur des espaces verts. Je suis passionnée par la nature, j’aime me déplacer et travailler en extérieur. Cette alternance de deux ans me convient donc très bien.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Les espaces verts et les façades végétales absorbent le C02 et sont donc un moyen de réduire les émissions de gaz à effet de serre. La végétation favorise la biodiversité et rend aussi la vie des habitants plus agréable.'
        },
        {
          name: 'Raphaël',
          job: 'Formateur',
          image: 'Mission8_expert3.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Cela fait 20 ans que je travaille dans l’énergie et j’ai occupé différents postes. Aujourd’hui, je suis formateur de chefs de projets. Comme un enseignant, je fais preuve de pédagogie pour transmettre au mieux mon savoir au sein de l’entreprise. C’est très valorisant !',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Pour réduire les émissions de GES d’un quartier, il existe plusieurs possibilités : faciliter l’accès à des appareils électriques sobres en consommation d’énergie, encourager les habitants à mettre en place au quotidien des « éco-gestes » (économie d’énergie, recyclage), utiliser les nouvelles technologies et la domotique.'
        }
      ]
    },
    {
      index: 4,
      common: CommonStepPropSolution.instance(),
      bgName: 'mission8.jpg',
      visited: false,
      activ: false,
      solutions: [
        {
          title: 'Réaliser des travaux de rénovation',
          // tslint:disable-next-line: max-line-length
          solution: 'En utilisant diverses techniques pour étudier la qualité du terrain et les murs des vieux bâtiments, rénover les bâtiments permettra de conserver leur cachet et de réaliser des économies d’énergie grâce à l’isolation des bâtiments rénovés.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Un des critères incontournables d’un éco-quartier concerne la consommation énergétique. Un éco-quartier doit aspirer à un bilan énergétique neutre, c’est-à-dire que la production et la consommation se compensent. Il doit limiter la consommation des sources d’énergies fossiles et favoriser les énergies bas carbone. Les travaux de rénovation peuvent donc intégrer l’installation de panneaux photovoltaïques pour utiliser l’énergie solaire, et des moyens de récupération et d’assainissement des eaux de pluie, par exemple.',
          bg: 'S1.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission8_expert2.svg',
          visited: false,
          selected: false,
        },
        {
          title: 'Favoriser des éco-gestes chez les habitants',
          // tslint:disable-next-line: max-line-length
          solution: 'Vous trouvez qu’il faut conseiller les habitants pour qu’ils adoptent un mode de vie plus écologique ?<br/>Rénover les bâtiments pour les rendre écologiques et durables est une bonne chose mais a moins d’impact si les habitants de l’éco-quartier ne font pas attention à leur consommation d’énergie et aux gestes du quotidien. La domotique et les smartgrids permettent par exemple de contrôler la consommation d’énergie.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Les éco-gestes ont un impact sur l’environnement et permettent d’agir à différents niveaux comme optimiser l’utilisation des appareils électriques qui utilisent une grande quantité d’énergie. Il est conseillé, entre autres, de ne faire tourner son lave-linge que quand il est plein, de faire sécher de préférence les vêtements à l’air libre, de débrancher les chargeurs de téléphone ou d’ordinateur une fois que la recharge est terminée... Il y en a encore plein d’autres qui sont faciles à transformer en automatismes.',
          bg: 'S2.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission8_expert3.svg',
          visited: false,
          selected: false,
        },
        {
          title: 'Raser les bâtiments pour mieux reconstruire',
          // tslint:disable-next-line: max-line-length
          solution: 'Vous pensez qu’il serait plus judicieux de déconstruire les bâtiments, ou ce qu’il en reste, pour en reconstruire de nouveaux, en utilisant les nouveaux matériaux et techniques écologiques et économiques pour créer un éco-quartier flambant neuf.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Rénover des bâtiments anciens pour les mettre aux normes écologiques actuelles demande de commencer par étudier les bâtiments, le sol et les eaux environnantes pour avoir une vision d’ensemble de la qualité des murs et du terrain. Une fois le bilan établi, des travaux d’assainissement peuvent être nécessaires, selon les activités qui étaient pratiquées sur le terrain. Ce n’est qu’ensuite que les travaux de rénovation peuvent commencer en utilisant des matériaux et des méthodes écologiques. Toutes ces étapes prennent du temps et demandent beaucoup d’argent.',
          bg: 'S3.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission8_expert1.svg',
          visited: false,
          selected: false,
        }
      ]
    },
    {
      index: 5,
      common: CommonStepMessagesCles.instance(),
      bgName: 'mission8.jpg',
      visited: false,
      activ: false,
      messagesCles: [
        {
          // tslint:disable-next-line: max-line-length
          message : 'En France, le secteur du bâtiment représente près de la moitié de la consommation totale d’énergie et est le 2e plus gros émetteur de GES.',
          wimg: 'MC1.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Une bonne isolation des bâtiments est essentielle pour diminuer la consommation énergétique.',
          wimg: 'MC2.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Les toits, murs et fenêtres sont à isoler en priorité car ils sont responsables de la majorité des déperditions thermiques d’un habitat.',
          wimg: 'MC3.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Pour limiter notre consommation d’énergie, chacun peut mettre en place des éco-gestes au quotidien.',
          wimg: 'MC4.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Les nouvelles technologies comme la domotique permettent à chacun de nous de mieux contrôler sa consommation d’énergie.',
          wimg: 'MC5.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Les murs végétaux et le développement d’espaces verts absorbent le CO2 et favorisent la biodiversité.',
          wimg: 'MC6.jpg',
          wx: '0',
          wy: '0',
          visited : false
        }
      ]
    }
  ]
};
