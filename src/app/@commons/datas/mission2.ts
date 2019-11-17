import { MissionCourse } from '../models/mission-course';
// tslint:disable-next-line: max-line-length
import { CommonStepPresentation, CommonStepCollecteIndices, CommonStepAnalyseDoc, CommonStepConseilExpert, CommonStepPropSolution, CommonStepMessagesCles } from '../models/mission-course-step';

export const Mission2: MissionCourse = {
  id: 'm2',
  name: 'Hydroélectricité & sécurité',
  level: 'c',
  description: 'Hydroélectricité & sécurité',
  mandatory: true,
  activ: true,
  steps: [
    {
      index: 1,
      common: CommonStepPresentation.instance(),
      bgName: 'MISSIONS-1-2-10-decor1.jpg',
      visited: false,
      activ: false,
      presTitle: 'Bienvenue dans la mission',
      // tslint:disable-next-line: max-line-length
      presText: 'Votre classe organise une sortie de fin d’année scolaire à la campagne, à proximité d’un barrage hydroélectrique.<br/><br/>Votre mission ? Étudier les lieux et établir les règles à respecter pour choisir une sortie qui pourra se dérouler en toute sécurité.<br/><br/>C’est parti !',
      presImage: 'Mission1-2-10_compagnon.svg'
    },
    {
      index: 2,
      common: CommonStepCollecteIndices.instance(),
      bgName: 'MISSIONS-1-2-10-decor1.jpg',
      visited: false,
      activ: false,
      indices: [
        {
          x: 172,
          y: 817,
          visited: false,
          title: 'L’eau, une ressource naturelle et renouvelable',
          image: 'M1-2_D1_I1.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'L’eau est la première des sources d’énergies renouvelables en France et dans le monde. Elle est la seconde source d’énergie la plus utilisée au monde, derrière les énergies fossiles.'
        },
        {
          x: 1436,
          y: 523,
          visited: false,
          title: 'De l’eau à l’électricité',
          image: 'M1-2_D1_I2.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Depuis plus de 4000 ans, l’homme utilise la force de l’eau et essaie de la maîtriser grâce à des machines.'
        },
        {
          x: 1677,
          y: 887,
          visited: false,
          title: 'Le fonctionnement d’une centrale hydraulique',
          video: 'M2_D1_I3.mp4',
        },
        {
          x: 916,
          y: 650,
          visited: false,
          title: 'Le stockage',
          image: 'M1-2_D1_I4.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'La construction d’un barrage permet de stocker de l’eau pour l’utiliser à tout moment de l’année selon les besoins.'
        },
      ]
    },
    {
      index: 3,
      common: CommonStepCollecteIndices.instance(),
      bgName: 'MISSIONS-1-2-10-decor2.jpg',
      visited: false,
      activ: false,
      indices: [
        {
          x: 393,
          y: 601,
          visited: false,
          title: 'Les différentes utilisations de l’eau',
          image: 'M1-2_D2_I1.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'L’eau a de multiples utilisations. Elle est un bien public partagée par tous.'
        },
        {
          x: 1677,
          y: 887,
          visited: false,
          title: 'La force de l’eau et les risques',
          image: 'M1-2_D2_I2.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'Des risques existent en amont et en aval des installations hydrauliques.'
        },
        {
          x: 916,
          y: 650,
          visited: false,
          title: 'Les dispositifs de sécurité',
          image: 'M1-2_D2_I3.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'Des hydroguides sensibilisent le public, des panneaux sont présents le long des cours d’eau et sur les chemins d’accès pour avertir des dangers. Des lignes de flotteurs délimitent les zones à risque.'
        },
        {
          x: 1311,
          y: 879,
          visited: false,
          title: 'La préservation de la faune et de la flore',
          image: 'M1-2_D2_I4.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'La faune et la flore sont protégées près des installations. Les barrages sont par exemple équipés pour faciliter le passage des poissons.'
        },
      ]
    },
    {
      index: 4,
      common: CommonStepAnalyseDoc.instance(),
      bgName: 'MISSIONS-1-2-10-decor2.jpg',
      visited: false,
      activ: false,
      docs: [
        {
          docTitle: 'Reliefs ',
          docFile: 'M2-doc1.pdf',
          docExtension: 'application/pdf'
        },
        {
          docTitle: 'Composants',
          docFile: 'M2-doc2.pdf',
          docExtension: 'application/pdf'
        },
        {
          docTitle: 'Article 1',
          docFile: 'M2-doc3.pdf',
          docExtension: 'application/pdf'
        },
        {
          docTitle: 'Article 2',
          docFile: 'M2-doc4.pdf',
          docExtension: 'application/pdf'
        },
        {
          docTitle: 'Article 3',
          docFile: 'M2-doc5.pdf',
          docExtension: 'application/pdf'
        },
      ]
    },
    {
      index: 5,
      common: CommonStepConseilExpert.instance(),
      bgName: 'MISSIONS-1-2-10-decor2.jpg',
      visited: false,
      activ: false,
      conseils: [
        {
          name: 'Camille',
          job: 'Hydroguide',
          image: 'Mission1-2-10_expert1.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Ma mission est d’expliquer au public les risques qui existent près des barrages. Au quotidien, je vais à la rencontre des gens et les préviens des dangers existants. Je mets aussi en place des panneaux de signalisation parce que je ne peux pas être partout à la fois !',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Plusieurs risques peuvent exister : l’aspiration par la force de l’eau, la glissade sur les berges et être emporté par la montée des eaux. Attention à bien respecter les consignes de sécurité (indiquées sur les panneaux) par beau temps ou mauvais temps !'
        },
        {
          name: 'Alison',
          job: 'Responsable sécurité',
          image: 'Mission1-2-10_expert2.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Je veille sur les barrages pour qu’ils ne présentent aucun danger et que les habitants soient en sécurité. Je surveille le matériel sur le terrain et à distance grâce à des milliers de capteurs qui mesurent tout en temps réel. Je mets toute ma rigueur et mon expertise au service de la population.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Les barrages sont surveillés en continu de 3 façons : l’inspection visuelle pour repérer les anomalies, l’auscultation avec des instruments pour analyser le comportement du barrage, les essais périodiques sur certains équipements (comme les vannes) pour vérifier leur bon fonctionnement.'
        },
        {
          name: 'Matheo',
          job: 'Ingénieur environnement',
          image: 'Mission1-2-10_expert3.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Je mesure et minimise l’impact environnemental d’une centrale de production. Au quotidien, je collabore avec différentes équipes pour faire respecter les normes environnementales et préserver la biodiversité. J’adore les animaux et la nature. Ce métier, c’est une vocation !',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Chaque projet intègre ce qu’on appelle « l\'éco-socio-conception », c\'est-à-dire qu’il veille à ce que les impacts environnementaux et sociétaux soient positifs et non négatifs, notamment pour la biodiversité.'
        }
      ]
    },
    {
      index: 6,
      common: CommonStepPropSolution.instance(),
      bgName: 'MISSIONS-1-2-10-decor2.jpg',
      visited: false,
      activ: false,
      solutions: [
        {
          title: 'Un pique-nique',
          // tslint:disable-next-line: max-line-length
          solution: 'Il y a plein de jolis coins près de la rivière pour s’installer et pique-niquer. Il faudra consulter la météo avant de partir, faire attention à bien s’installer dans une zone autorisée, ne pas s’approcher du bord pour éviter les glissades.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Un petit mémo peut être créé avant la sortie pour se rappeler les règles de sécurité à respecter. Attention, les lâchers d’eau peuvent se produire plusieurs fois en 24 heures, de jour comme de nuit. La vigilance est donc toujours de rigueur.',
          bg: 'S1.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission1-2-10_expert2.svg',
          visited: false,
          selected: false,
        },
        {
          title: 'Une grande baignade avec des jeux d’eau',
          // tslint:disable-next-line: max-line-length
          solution: 'La sortie aura lieu en fin d’année scolaire, il fera beau et chaud. Il sera donc possible de se baigner en veillant à bien rester dans les zones autorisées délimitées par les bouées de sécurité. Il faudra faire attention aussi aux risques de glissade au bord des rivières.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Les zones interdites d’accès au public sont délimitées par une ligne de flotteurs à une distance d’environ 100m du barrage. Des panneaux danger peuvent indiquer que les berges sont dangereuses, qu’il y a un risque de glissade et/ou d’être emporté par un lâcher d’eau, une variation du débit d’eau.',
          bg: 'S2.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission1-2-10_expert3.svg',
          visited: false,
          selected: false,
        },
        {
          title: 'Une sortie en canoé-kayak',
          // tslint:disable-next-line: max-line-length
          solution: 'Une sortie en canoé-kayak plaira à tous. La classe sera accompagnée par un guide pour ne pas s’aventurer dans des zones à risque, bien respecter les règles de sécurité et comprendre les panneaux de danger.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Les abords des barrages peuvent être très fréquentés en été par des promeneurs, pêcheurs, sportifs, touristes ou habitants du coin. Des risques sont parfois pris quand on est habitués à venir sur un lieu, qu’on ne connaît pas les dangers ou quand il fait beau et que le risque n’est pas apparent.',
          bg: 'S3.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission1-2-10_expert1.svg',
          visited: false,
          selected: false,
        }
      ]
    },
    {
      index: 7,
      common: CommonStepMessagesCles.instance(),
      bgName: 'MISSIONS-1-2-10-decor2.jpg',
      visited: false,
      activ: false,
      messagesCles: [
        {
          // tslint:disable-next-line: max-line-length
          message : 'L’eau est une source d’énergie renouvelable.',
          wimg: 'MC1.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Stockée grâce à des barrages, l’eau constitue une réserve d’énergie et permet de produire de l’électricité.',
          wimg: 'MC2.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'La force de l’eau fait tourner une turbine et un alternateur qui transforment l’énergie de l’eau en énergie électrique.',
          wimg: 'MC3.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Près des barrages, il existe des risques de glissade, d’aspiration et de montées des eaux.',
          wimg: 'MC4.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Les zones à risques sont signalées par des panneaux ou par des lignes de flotteurs.',
          wimg: 'MC5.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Il est important de respecter les consignes de sécurité et d’être prudent aux abords des barrages.',
          wimg: 'MC6.jpg',
          wx: '0',
          wy: '0',
          visited : false
        }
      ]
    }
  ]
};
