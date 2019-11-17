import { MissionCourse } from '../models/mission-course';
// tslint:disable-next-line: max-line-length
import { CommonStepPresentation, CommonStepCollecteIndices, CommonStepAnalyseDoc, CommonStepConseilExpert, CommonStepPropSolution, CommonStepMessagesCles } from '../models/mission-course-step';

export const Mission5: MissionCourse = {
  id: 'm5',
  name: 'Énergies & climat',
  level: 'l',
  description: 'Énergies & climat',
  mandatory: true,
  activ: true,
  steps: [
    {
      index: 1,
      common: CommonStepPresentation.instance(),
      bgName: 'mission5-d1.jpg',
      visited: false,
      activ: false,
      presTitle: 'Bienvenue dans la mission',
      // tslint:disable-next-line: max-line-length
      presText: 'Le ministre de l’écologie et de la transition énergétique doit proposer au président et au premier ministre une stratégie pour diminuer les émissions de gaz à effet de serre en France.<br/><br/>Votre mission ? Étudier les habitudes actuelles polluantes et les alternatives plus « propres » puis l’aider à trouver la stratégie la plus efficace pour réduire et stabiliser nos émissions de gaz à effet de serre.<br/><br/>C’est parti !',
      presImage: 'Mission5_compagnon.svg'
    },
    {
      index: 2,
      common: CommonStepCollecteIndices.instance(),
      bgName: 'mission5-d1.jpg',
      visited: false,
      activ: false,
      indices: [
        {
          x: 838,
          y: 200,
          visited: false,
          title: 'Combustions et émissions de gaz à effet de serre',
          image: 'M5_D1_I1.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'La combustion des énergies fossiles (gaz, pétrole et charbon) émet de grandes quantités de C02 dans l’atmosphère. Lorsque cette quantité augmente trop, elle provoque le réchauffement de la planète et des dérèglements climatiques.'
        },
        {
          x: 946,
          y: 976,
          visited: false,
          title: 'Transports et émissions de gaz à effet de serre',
          image: 'M5_D1_I2.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Les transports sont le secteur le plus énergivore et le plus polluant. Ils représentent près d’1/3 des émissions de gaz à effet de serre en France.'
        },
        {
          x: 1275,
          y: 404,
          visited: false,
          title: 'Les émissions du secteur résidentiel-tertiaire',
          image: 'M5_D1_I3.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Le secteur du bâtiment est polluant (bureaux, logements, commerces). C’est le 2e plus gros émetteur de gaz à effet de serre. Il représente aussi la moitié de la consommation d’énergie en France.'
        },
        {
          x: 121,
          y: 384,
          visited: false,
          title: 'Le secteur de l\'industrie',
          image: 'M5_D1_I4.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Depuis 1990, le secteur de l’industrie a nettement réduit son empreinte carbone. Il reste toutefois le 3e secteur le plus polluant en France.'
        },
        {
          x: 862,
          y: 684,
          visited: false,
          title: 'Le secteur du numérique',
          image: 'M5_D1_I5.png',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Plus récent que les autres, le numérique est l’un des secteurs qui consomme le plus d’énergie, dont la croissance est la plus rapide et dont la pollution est aujourd’hui équivalente à celle de l’aviation.'
        },
      ]
    },
    {
      index: 3,
      common: CommonStepCollecteIndices.instance(),
      bgName: 'mission5-d2.jpg',
      visited: false,
      activ: false,
      indices: [
        {
          x: 479,
          y: 273,
          visited: false,
          title: 'La transition énergétique',
          video: 'M5_D2_I1.mp4',
        },
        {
          x: 550,
          y: 810,
          visited: false,
          title: 'Les Smart grids',
          video: 'M5_D2_I2.mp4',
        },
        {
          x: 1412,
          y: 309,
          visited: false,
          title: 'La taxe sur les émissions de gaz à effet de serre',
          image: 'M5_D2_I3.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'La taxe carbone, appelée « Contribution Climat Énergie », a été mise en place en 2014 à destination des professionnels pour limiter la consommation de ressources fossiles dans toutes les activités polluantes.',
        },
        {
          x: 317,
          y: 740,
          visited: false,
          title: 'L’éclairage public',
          image: 'M5_D2_I4.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'Bien éclairer tout en faisant attention à sa consommation est possible, que ce soit à l’intérieur d’un bâtiment ou à l’extérieur.'
        },
        {
          x: 1064,
          y: 846,
          visited: false,
          title: 'L’éco-mobilité',
          image: 'M5_D2_I5.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'L\'éco-mobilité consiste à privilégier les moyens de transports silencieux, moins polluants et qui ont un impact limité sur le paysage. Différentes solutions, individuelles ou collectives, existent.'
        },
      ]
    },
    {
      index: 4,
      common: CommonStepAnalyseDoc.instance(),
      bgName: 'mission5-d2.jpg',
      visited: false,
      activ: false,
      docs: [
        {
          docTitle: 'Big data et énergie',
          docFile: 'M5-doc1.pdf',
          docExtension: 'application/pdf'
        },
        {
          docTitle: 'Le CO2 en France',
          docFile: 'M5-doc2.pdf',
          docExtension: 'application/pdf'
        },
        {
          docTitle: 'Bâtiments et rénovation',
          docFile: 'M5-doc3.pdf',
          docExtension: 'application/pdf'
        },
        {
          docTitle: 'Consommation et production',
          docFile: 'M5-doc4.pdf',
          docExtension: 'application/pdf'
        },
        {
          docTitle: 'L’éco-mobilité',
          docFile: 'M5-doc5.pdf',
          docExtension: 'application/pdf'
        },
        {
          docTitle: 'Réchauffement climatique',
          docFile: 'M5-doc6.pdf',
          docExtension: 'application/pdf'
        },
      ]
    },
    {
      index: 5,
      common: CommonStepConseilExpert.instance(),
      bgName: 'mission5-d2.jpg',
      visited: false,
      activ: false,
      conseils: [
        {
          name: 'Inès',
          job: 'Directrice développement durable',
          image: 'Mission5_expert1.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Je suis un leader ! Mon rôle est de motiver et manager mes équipes selon les ressources dont je dispose. Mon poste à responsabilité m’oblige à prendre de la hauteur sur notre activité et à être curieux, ce qui me permet d’avoir une bonne vision globale du secteur.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Nous faisons appel à l’énergie en permanence pour satisfaire nos différents besoins quotidiens. Le mix énergétique français utilise des énergies bas carbone : le nucléaire, avec 19 centrales, permet de produire plus de 70% de l’électricité utilisée. L’hydraulique en produit environ 10%. D’autres sources d’énergies renouvelables vont davantage être exploitées, comme le soleil avec les panneaux photovoltaïques.'
        },
        {
          name: 'Jules',
          job: 'Technicien d’exploitation',
          image: 'Mission5_expert2.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Je veille au bon fonctionnement des installations de production d’électricité : je conduis à distance les installations et réalise des manœuvres sur place. Les deux sont nécessaires. J’aime avoir une vision à distance couplée à une vision concrète, sur le terrain.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'La complémentarité entre les énergies nucléaire et renouvelables dans le mix énergétique français fait de la France l’un des 6 pays les moins émetteurs de C02 pour produire de l’électricité. Les énergies renouvelables et nucléaire n’émettent pas de gaz à effet de serre. Le panache qui s’échappe des cheminées dites aéroréfrigérantes est constitué de vapeur d’eau.'
        },
        {
          name: 'Sarah',
          job: 'Conseillère Collectivités Territoriales',
          image: 'Mission5_expert3.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Je conseille les villes ou les agglomérations sur des sujets fondamentaux tels que la politique énergétique des territoires, l’aménagement, la rénovation, la production d’énergies... J’ai un bon sens relationnel et j’apprécie faire le lien entre mon entreprise et les élus notamment.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Il existe aujourd’hui de nombreux dispositifs qui permettent de changer les pratiques de consommation d’énergie et de réduire les émissions de gaz à effet de serre : mobilité électrique, covoiturage et autopartage pour les transports, renforcement de l’efficacité énergétique dans le bâtiment, domotique, éco-gestes…'
        }
      ]
    },
    {
      index: 6,
      common: CommonStepPropSolution.instance(),
      bgName: 'mission5-d2.jpg',
      visited: false,
      activ: false,
      solutions: [
        {
          title: 'Imposer la taxe carbone à tous les émetteurs de gaz à effet de serre, même aux particuliers',
          // tslint:disable-next-line: max-line-length
          solution: 'À différentes échelles, les industries, professionnels et particuliers émettent des gaz à effet de serre. Vous êtes convaincus qu’appliquer une taxe carbone à tous les consommateurs, en l’adaptant à leur profil et à la quantité de gaz à effet de serre qu’il émettent, permettra de les pousser à repenser leurs modes de consommation.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Il existe aujourd’hui 4 autres types de taxes payées par les consommateurs d’électricité : la contribution tarifaire d’acheminement, les taxes locales sur la consommation finale d’électricité, la contribution au service public de l’électricité et la TVA. Ces taxes ont des bénéficiaires (communes, départements, état…) et rôles différents.',
          bg: 'S1.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission5_expert3.svg',
          visited: false,
          selected: false,
        },
        {
          title: 'Développer davantage l’utilisation des nouvelles technologies dans les secteurs les plus émetteurs de gaz à effet de serre',
          // tslint:disable-next-line: max-line-length
          solution: 'Le bâtiment et les transports sont les secteurs les plus énergivores et émetteurs de gaz à effet de serre. Efficacité énergétique, éco-gestes, éco-mobilité : vous êtes convaincus que le développement des nouvelles technologies permettra d’apporter des solutions innovantes pour réduire les émissions et le réchauffement de la planète.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Des solutions existent pour modifier les pratiques de consommation et diminuer son empreinte carbone. La domotique permet par exemple : d’optimiser la consommation d’énergie, d’automatiser des éco-gestes, d’améliorer le confort des résidents, de favoriser l’efficacité énergétique des bâtiments et appareils électriques, de faire des économies, tout en respectant l’environnement.',
          bg: 'S2.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission5_expert1.svg',
          visited: false,
          selected: false,
        },
        {
          title: 'Inciter à la production individuelle en complément de la production centralisée',
          // tslint:disable-next-line: max-line-length
          solution: 'À grande échelle, il n’est aujourd’hui pas possible d’utiliser uniquement les sources d’énergies renouvelables du fait de leur intermittence. Mais vous êtes convaincus que leur utilisation pourrait être développée dans le secteur résidentiel-tertiaire, en utilisant par exemple la géothermie ou les pompes à chaleur pour le chauffage, et le photovoltaïque pour l’électricité.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Du fait de leur insuffisance et de leur intermittence, les sources d’énergies renouvelables sont utilisées aujourd’hui en France en complémentarité de l’énergie nucléaire pour produire de l’électricité. Il est également possible d’intégrer ces énergies renouvelables chez soi, en installant par exemple des panneaux photovoltaïques sur le toit pour produire de l’électricité.',
          bg: 'S3.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission5_expert2.svg',
          visited: false,
          selected: false,
        }
      ]
    },
    {
      index: 7,
      common: CommonStepMessagesCles.instance(),
      bgName: 'mission5-d2.jpg',
      visited: false,
      activ: false,
      messagesCles: [
        {
          // tslint:disable-next-line: max-line-length
          message : 'Une trop grande quantité de gaz à effet de serre dans l’atmosphère accentue le réchauffement et les dérèglements climatiques.',
          wimg: 'MC1.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Les combustions des énergies fossiles émettent de grandes quantités de C02.',
          wimg: 'MC2.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Les trois secteurs les plus polluants sont les transports, le résidentiel-tertiaire et l’industrie.',
          wimg: 'MC3.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Les nouvelles technologies consomment de plus en plus d’énergie mais elles permettent aussi de contrôler sa consommation.',
          wimg: 'MC4.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Mieux consommer l’énergie permet de  limiter les émissions de gaz à effet de serre et le réchauffement climatique.',
          wimg: 'MC5.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Nous sommes tous responsables, à notre échelle, de l’impact de notre comportement sur l’environnement.',
          wimg: 'MC6.jpg',
          wx: '0',
          wy: '0',
          visited : false
        }
      ]
    }
  ]
};
