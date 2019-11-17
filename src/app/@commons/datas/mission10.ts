import { MissionCourse } from '../models/mission-course';
// tslint:disable-next-line: max-line-length
import { CommonStepPresentation, CommonStepCollecteIndices, CommonStepAnalyseDoc, CommonStepConseilExpert, CommonStepPropSolution, CommonStepMessagesCles } from '../models/mission-course-step';

export const Mission10: MissionCourse = {
  id: 'm10',
  name: 'Hydroélectricité & sécurité',
  level: undefined,
  description: 'Hydroélectricité & sécurité',
  mandatory: false,
  activ: true,
  steps: [
    {
      index: 1,
      common: CommonStepPresentation.instance(),
      bgName: 'MISSIONS-1-2-10-decor2.jpg',
      visited: false,
      activ: false,
      presTitle: 'Bienvenue dans la mission !',
      // tslint:disable-next-line: max-line-length
      presText: 'Votre classe organise une sortie de fin d’année scolaire à la campagne, à proximité d’un barrage hydroélectrique.<br/>Votre mission ? Étudier les lieux et établir les règles à respecter pour choisir une sortie qui pourra se dérouler en toute sécurité.<br/><br/>C’est parti !',
      presImage: 'Mission1-2-10_compagnon.svg'
    },
    {
      index: 2,
      common: CommonStepCollecteIndices.instance(),
      bgName: 'MISSIONS-1-2-10-decor2.jpg',
      visited: false,
      activ: false,
      indices: [
        {
          x: 318,
          y: 750,
          visited: false,
          title: 'L’eau, une ressource naturelle et renouvelable',
          image: 'M10_I1.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'L’eau est la première des sources d’énergies renouvelables en France et dans le monde. C’est un bien public partagé par tous. Elle a donc de multiples usages.'
        },
        {
          x: 627,
          y: 475,
          visited: false,
          title: 'Le fonctionnement d’une centrale hydraulique',
          video: 'M10_I2.mp4',
        },
        {
          x: 1311,
          y: 340,
          visited: false,
          title: 'Les différentes installations selon les reliefs',
          image: 'M10_I3.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Il existe différentes installations hydroélectriques selon les reliefs : rivières, lacs, mers, montagnes, collines, plaines.'
        },
        {
          x: 1635,
          y: 786,
          visited: false,
          title: 'La force de l’eau et les risques',
          image: 'M10_I4.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Des risques existent en amont et en aval des installations hydrauliques.'
        },
        {
          x: 925,
          y: 649,
          visited: false,
          title: 'Les dispositifs de sécurité',
          image: 'M10_I5.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Des hydroguides sensibilisent le public, des panneaux sont présents le long des cours d’eau et sur les chemins d’accès pour avertir des dangers. Des lignes de flotteurs délimitent les zones à risque.'
        },
      ]
    },
    {
      index: 3,
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
          job: 'Alternant ingénieur environnement',
          image: 'Mission1-2-10_expert3.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Je mesure et réduits l’impact des centrales de production électrique sur la nature. Au quotidien, je fais respecter les normes environnementales pour préserver la biodiversité. J’adore les animaux et la nature. Cette alternance me conforte dans ma vocation.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Chaque projet intègre ce qu’on appelle « l\'éco-socio-conception », c\'est-à-dire qu’il veille à ce que les impacts environnementaux et sociétaux soient positifs et non négatifs, notamment pour la biodiversité et les espèces protégées.'
        }
      ]
    },
    {
      index: 4,
      common: CommonStepPropSolution.instance(),
      bgName: 'MISSIONS-1-2-10-decor2.jpg',
      visited: false,
      activ: false,
      solutions: [
        {
          title: 'Un pique-nique',
          // tslint:disable-next-line: max-line-length
          solution: 'Il y a plein de jolis coins près de la rivière pour s’installer et pique-niquer. Il faudra consulter la météo avant de partir, faire attention à bien s’installer dans une zone autorisée, ne pas s’approcher du bord pour éviter les glissades, ramasser les déchets pour laisser l’endroit propre.',
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
          solution: 'La sortie aura lieu en fin d’année scolaire, il fera beau et chaud. Il sera donc possible de se baigner en faisant bien attention à rester dans les zones autorisées, à ne pas dépasser les bouées de sécurité. Il faudra faire attention aussi aux risques de glissade au bord des rivières.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Les zones interdites d’accès au public sont délimitées par une ligne de flotteurs à une distance d’environ 100m du barrage. Des panneaux danger peuvent indiquer que les berges sont dangereuses, qu’il y a un risque de glissade et/ou d’être emporté par un lâcher d’eau, une variation du débit d’eau.',
          bg: 'S2.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission1-2-10_expert1.svg',
          visited: false,
          selected: false,
        },
        {
          title: 'Une sortie en canoé-kayak',
          // tslint:disable-next-line: max-line-length
          solution: 'Une sortie en canoé-kayak plaira à tous. La classe sera accompagnée par un guide pour ne pas s’aventurer dans des zones à risque, bien respecter les règles de sécurité et comprendre les panneaux de danger.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Les abords des barrages peuvent être très fréquentés en été par des promeneurs, pêcheurs, sportifs, touristes ou habitants du coin.<br/>Des risques sont parfois pris quand on est habitués à venir sur un lieu, qu’on ne connaît pas les dangers ou quand il fait beau et que le risque n’est pas apparent.',
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
      index: 5,
      common: CommonStepMessagesCles.instance(),
      bgName: 'MISSIONS-1-2-10-decor2.jpg',
      visited: false,
      activ: false,
      messagesCles: [
        {
          // tslint:disable-next-line: max-line-length
          message : 'L’eau stockée par les barrages constitue une réserve d’énergie et permet de produire de l’électricité.',
          wimg: 'MC1.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'La force de l’eau fait tourner une turbine et un alternateur qui transforment l’énergie de l’eau en énergie électrique.',
          wimg: 'MC2.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Aux abords des barrages, il existe des risques de glissade, d’aspiration et de montées des eaux.',
          wimg: 'MC3.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Les zones à risques sont signalées par des panneaux ou par des lignes de flotteurs.',
          wimg: 'MC4.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Des hydroguides informent et donnent des conseils à la population pour éviter de prendre des risques.',
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
