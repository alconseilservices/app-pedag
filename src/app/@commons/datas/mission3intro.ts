import { MissionCourse } from '../models/mission-course';
// tslint:disable-next-line: max-line-length
import { CommonStepPresentation, CommonStepCollecteIndices, CommonStepAnalyseDoc, CommonStepConseilExpert, CommonStepPropSolution, CommonStepMessagesCles } from '../models/mission-course-step';

export const Mission3Intro: MissionCourse = {
  id: 'm3',
  intro: true,
  name: 'Tronc commun missions 1 et 3',
  level: undefined,
  description: 'Tronc commun missions 1 et 3',
  mandatory: true,
  activ: true,
  steps: [
    {
      index: 1,
      common: CommonStepPresentation.instance(),
      bgName: 'EDF-ECRAN-ACCUEIL.png',
      visited: false,
      activ: false,
      presTitle: 'Bienvenue dans le tronc commun !',
      // tslint:disable-next-line: max-line-length
      presText: 'Avant de vous lancer dans une ou plusieurs missions, vous allez en apprendre plus sur la production d’électricité et sur les différentes sources d’énergie.<br/><br/> C’est parti !',
      presImage: 'Tronc commun_compagnon.svg'
    },
    {
      index: 2,
      common: CommonStepCollecteIndices.instance(),
      bgName: 'Intro-Ecran-1.png',
      visited: false,
      activ: false,
      indices: [
        {
          x: 172,
          y: 817,
          visited: false,
          title: 'L’électricité dans notre vie de tous les jours',
          image: 'TC_E1_I1.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Répartition des usages de l’électricité dans les foyers.'
        },
        {
          x: 429,
          y: 284,
          visited: false,
          title: 'Une énergie naturelle ou artificielle',
          image: 'TC_E1_I2.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Il existe de l’électricité naturelle : la foudre, l’électricité statique créée par le frottement ou encore les décharges électriques produites par certains animaux.'
        },
      ]
    },
    {
      index: 3,
      common: CommonStepCollecteIndices.instance(),
      bgName: 'Intro-Ecran-2.jpg',
      visited: false,
      activ: false,
      indices: [
        {
          x: 232,
          y: 649,
          visited: false,
          title: 'La production d’électricité',
          video: 'TC_E2_I1.mp4'
        },
        {
          x: 1528,
          y: 326,
          visited: false,
          title: 'Les sources d’énergie pour produire de l’électricité',
          image: 'TC_E2_I2.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'On distingue 3 types de sources d’énergie : fossile, fissile et renouvelable.'
        },
        {
          x: 1089,
          y: 426,
          visited: false,
          title: 'Le mix électrique de la France',
          image: 'TC_E2_I3.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'On appelle “mix électrique” la combinaison de différentes sources d’énergie pour produire de l’électricité. En combinant énergie nucléaire et énergies renouvelables, le mix électrique de la France émet très peu de CO2.'
        },
      ]
    },
    {
      index: 4,
      common: CommonStepCollecteIndices.instance(),
      bgName: 'Intro-Ecran-3.png',
      visited: false,
      activ: false,
      indices: [
        {
          x: 604,
          y: 412,
          visited: false,
          title: 'Qu’est-ce qu’une énergie fossile ?',
          image: 'TC_E3_I1.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'Les sources d’énergies fossiles sont le charbon, le gaz et le pétrole. Elles sont issues de la décomposition de matières organiques et on les trouve en sous-sol. Elles sont brûlées dans les centrales thermiques pour produire de l’électricité.'
        },
      ]
    },
    {
      index: 5,
      common: CommonStepCollecteIndices.instance(),
      bgName: 'Intro-Ecran-4.png',
      visited: false,
      activ: false,
      indices: [
        {
          x: 1331,
          y: 730,
          visited: false,
          title: 'Qu’est-ce que l’énergie nucléaire ?',
          video: 'common/TC_E4_I1.mp4'
        },
        {
          x: 284,
          y: 224,
          visited: false,
          title: 'Le nucléaire en France',
          image: 'TC_E4_I2.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'L’énergie nucléaire est la première source d’électricité en France. Il existe 19 centrales nucléaires.'
        },
        {
          x: 1347,
          y: 464,
          visited: false,
          title: 'Les nuages des centrales nucléaires',
          image: 'TC_E4_I3.png',
          // tslint:disable-next-line: max-line-length
          text: 'De quoi sont composés ces nuages blancs qui s’échappent des grandes tours de réfrigération des centrales nucléaires ?'
        },
      ]
    },
    {
      index: 6,
      common: CommonStepCollecteIndices.instance(),
      bgName: 'Intro-Ecran-5.png',
      visited: false,
      activ: false,
      indices: [
        {
          x: 762,
          y: 870,
          visited: false,
          title: 'L’énergie hydraulique',
          image: 'TC_E5_I1.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'La force de l’eau permet de produire de l’électricité dans des centrales hydrauliques. Cette force dépend de la hauteur de la chute d’eau et de son débit.'
        },
        {
          x: 1615,
          y: 269,
          visited: false,
          title: 'L’énergie éolienne',
          image: 'TC_E5_I2.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'La force du vent fait tourner les pales de l’éolienne pour produire de l’électricité.'
        },
        {
          x: 960,
          y: 149,
          visited: false,
          title: 'L’énergie solaire',
          image: 'TC_E5_I3.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'La lumière du soleil permet de produire de l’électricité à partir de panneaux photovoltaïques.'
        },
        {
          xx: 318,
          y: 906,
          visited: false,
          title: 'La biomasse',
          image: 'TC_E5_I4.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'Des déchets organiques comme le bois, les végétaux ou les ordures ménagères sont brûlés pour produire de l’électricité.'
        },
        {
          x: 1289,
          y: 728,
          visited: false,
          title: 'La géothermie',
          image: 'TC_E5_I5.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'La chaleur de la Terre ou l’eau très chaude des nappes en sous-sol sont utilisées comme sources d’énergie pour produire de l’électricité.'
        },
        {
          x: 1114,
          y: 970,
          visited: false,
          title: 'Les énergies marines',
          image: 'TC_E5_I6.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'Les énergies marines permettent de produire de l’électricité à partir des courants marins (hydroliennes) ou des marées (usines marémotrices).'
        },
      ]
    },
    {
      index: 7,
      common: CommonStepCollecteIndices.instance(),
      bgName: 'Intro-Ecran-6.jpg',
      visited: false,
      activ: false,
      indices: [
        {
          x: 1020,
          y: 976,
          visited: false,
          title: 'Les émissions de gaz à effet de serre',
          image: 'TC_E6_I1.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'Dans les pays qui utilisent des sources d’énergie fossiles, la production d’électricité émet du CO2. C’est un gaz à effet de serre qui provoque l’augmentation de la température de l’atmosphère.'
        },
        {
          x: 815,
          y: 205,
          visited: false,
          title: 'Limiter la hausse des températures sur Terre',
          image: 'TC_E6_I2.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'Pour limiter le réchauffement climatique, chaque pays doit changer sa manière de produire de l’électricité et d’utiliser les énergies au quotidien.'
        },

      ]
    },
    {
      index: 8,
      common: CommonStepMessagesCles.instance(),
      bgName: 'Intro-Ecran-6.jpg',
      visited: false,
      activ: false,
      messagesCles: [
        {
          // tslint:disable-next-line: max-line-length
          message: 'Pour produire de l’électricité, nous avons besoin de différentes sources d’énergies.',
          wimg: 'MC1I.jpg',
          wx: '0',
          wy: '0',
          visited: false
        },
        {
          // tslint:disable-next-line: max-line-length
          message: 'Dans le monde, les énergies fossiles sont les plus utilisées pour produire de l’électricité mais elles émettent du C02.',
          wimg: 'MC2I.jpg',
          wx: '0',
          wy: '0',
          visited: false
        },
        {
          // tslint:disable-next-line: max-line-length
          message: 'Le réchauffement climatique provoqué par les émissions de gaz à effet de serre entraîne des dérèglements climatiques.',
          wimg: 'MC3I.jpg',
          wx: '0',
          wy: '0',
          visited: false
        },
        {
          // tslint:disable-next-line: max-line-length
          message: 'Les principales sources d’énergies renouvelables en France sont l’hydraulique, l’éolien et le solaire.',
          wimg: 'MC4I.jpg',
          wx: '0',
          wy: '0',
          visited: false
        },
        {
          // tslint:disable-next-line: max-line-length
          message: 'Le mix électrique de la France combine énergie nucléaire et énergies renouvelables.',
          wimg: 'MC5I.jpg',
          wx: '0',
          wy: '0',
          visited: false
        },
        {
          // tslint:disable-next-line: max-line-length
          message: 'Grâce à son mix électrique, la France est l’un des pays les moins émetteurs de CO2.',
          wimg: 'MC6I.jpg',
          wx: '0',
          wy: '0',
          visited: false
        }
      ]
    }
  ]
};
