import { MissionCourse } from '../models/mission-course';
// tslint:disable-next-line: max-line-length
import { CommonStepPresentation, CommonStepCollecteIndices, CommonStepAnalyseDoc, CommonStepConseilExpert, CommonStepPropSolution, CommonStepMessagesCles } from '../models/mission-course-step';

export const Mission4: MissionCourse = {
  id: 'm4',
  name: 'Énergies & climat',
  level: 'c2',
  description: 'Énergies & climat',
  mandatory: true,
  activ: true,
  steps: [
    {
      index: 1,
      common: CommonStepPresentation.instance(),
      bgName: 'mission4-D1.jpg',
      visited: false,
      activ: false,
      presTitle: 'Bienvenue dans la mission',
      // tslint:disable-next-line: max-line-length
      presText: 'Vous avez rejoint le conseil municipal des jeunes de la ville, piloté par Léo.<br/><br/>Votre objectif ? L’aider à transformer la ville en Smart city, une ville intelligente qui répondrait aux 3 piliers du développement durable : plus économique, plus sociale et ayant moins d’impact sur l’environnement.<br/><br/>Votre mission ? Étudier les caractéristiques de la ville, puis celles d’une Smart city pour proposer des idées de transformation.<br/><br/>C’est parti !',
      presImage: 'Mission4_compagnon.svg'
    },
    {
      index: 2,
      common: CommonStepCollecteIndices.instance(),
      bgName: 'mission4-D1.jpg',
      visited: false,
      activ: false,
      indices: [
        {
          x: 1095,
          y: 200,
          visited: false,
          title: 'Combustions et émissions de gaz à effet de serre',
          image: 'M4_D1_I1.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'La combustion des énergies fossiles (gaz, pétrole et charbon) émet de grandes quantités de C02 dans l’atmosphère. Lorsque cette quantité augmente trop, elle provoque le réchauffement de la planète et des dérèglements climatiques.'
        },
        {
          x: 1541,
          y: 764,
          visited: false,
          title: 'Transports et émissions de gaz à effet de serre',
          image: 'M4_D1_I2.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Les transports sont le secteur le plus énergivore et le plus polluant. Ils représentent près d’1/3 des émissions de gaz à effet de serre en France.'
        },
        {
          x: 1076,
          y: 686,
          visited: false,
          title: 'Bâtiments et émissions de gaz à effet de serre',
          image: 'M4_D1_I3.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Le secteur du bâtiment est polluant (bureaux, logements, commerces). C’est le 2e plus gros émetteur de gaz à effet de serre. Il représente aussi la moitié de la consommation d’énergie en France.'
        },
        {
          x: 197,
          y: 419,
          visited: false,
          title: 'Les émissions du secteur de l’industrie',
          image: 'M4_D1_I4.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Depuis 1990, le secteur de l’industrie a nettement réduit son empreinte carbone. Il reste toutefois le 3e secteur le plus polluant en France.'
        },
        {
          x: 1542,
          y: 420,
          visited: false,
          title: 'Le secteur du numérique',
          image: 'M4_D1_I5.png',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'Plus récent que les autres, le numérique est l’un des secteurs qui consomme le plus, dont la croissance est la plus rapide et dont la pollution est aujourd’hui équivalente à celle de l’aviation.'
        },
      ]
    },
    {
      index: 3,
      common: CommonStepCollecteIndices.instance(),
      bgName: 'mission4-D2.jpg',
      visited: false,
      activ: false,
      indices: [
        {
          x: 1458,
          y: 674,
          visited: false,
          title: 'La transition énergétique',
          image: 'M4_D2_I1.jpg',
          pdf: 'string',
          // tslint:disable-next-line: max-line-length
          text: 'La transition énergétique a un objectif écologique visant à modifier les modes de production et de consommation : développement des énergies renouvelables, éco-gestes, contrôle de la consommation, mobilité électrique…'
        },
        {
          x: 567,
          y: 744,
          visited: false,
          title: 'Les Smart grids',
          image: 'M4_D2_I2.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'Les smart grids sont des réseaux intelligents qui utilisent les technologies numériques pour améliorer les flux d’électricité entre fournisseurs et consommateurs.'
        },
        {
          x: 896,
          y: 290,
          visited: false,
          title: 'Des bâtiments connectés pour optimiser sa consommation',
          video: 'M4_D2_I3.mp4',
        },
        {
          x: 1412,
          y: 412,
          visited: false,
          title: 'L’ancrage territorial',
          image: 'M4_D2_I4.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'L’ancrage territorial permet de créer des liens durables et citoyens entre une organisation et les acteurs du territoire sur lequel elle s\'installe.'
        },
        {
          x: 282,
          y: 525,
          visited: false,
          title: 'L’éclairage',
          image: 'M4_D2_I5.jpg',
          // tslint:disable-next-line: max-line-length
          text: 'Bien éclairer tout en faisant attention à sa consommation est possible, que ce soit à l’intérieur d’un bâtiment ou à l’extérieur.'
        },
      ]
    },
    {
      index: 4,
      common: CommonStepAnalyseDoc.instance(),
      bgName: 'mission4-D2.jpg',
      visited: false,
      activ: false,
      docs: [
        {
          docTitle: 'Le CO2 en France',
          docFile: 'M4-doc1.pdf',
          docExtension: 'application/pdf'
        },
        {
          docTitle: 'Bâtiments et rénovation',
          docFile: 'M4-doc2.pdf',
          docExtension: 'application/pdf'
        },
        {
          docTitle: '100% bio et local',
          docFile: 'M4-doc3.pdf',
          docExtension: 'application/pdf'
        },
        {
          docTitle: 'L’éco-mobilité',
          docFile: 'M4-doc4.pdf',
          docExtension: 'application/pdf'
        },
        {
          docTitle: 'Réchauffement climatique',
          docFile: 'M4-doc5.pdf',
          docExtension: 'application/pdf'
        }
      ]
    },
    {
      index: 5,
      common: CommonStepConseilExpert.instance(),
      bgName: 'mission4-D2.jpg',
      visited: false,
      activ: false,
      conseils: [
        {
          name: 'Lisa',
          job: 'Directrice du développement durable',
          image: 'Mission4_expert1.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Je suis un leader ! Mon rôle est de motiver et manager mes équipes selon les ressources dont je dispose. Mon poste à responsabilité m’oblige à prendre de la hauteur sur notre activité et à être curieuse, ce qui me permet d’avoir une bonne vision globale du secteur.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Notre économie est basée sur un système « linéaire » qui fonctionne toujours de la même façon : extraire, fabriquer, consommer, puis jeter. Ce système n’est pas adapté aux ressources de notre planète. D’autres modes de fonctionnement existent comme l\'économie circulaire qui permet une production durable, une consommation responsable et une renaissance de l’objet en fin de vie.'
        },
        {
          name: 'Tom',
          job: 'Technicien',
          image: 'Mission4_expert2.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Je veille au bon fonctionnement des installations de production d’électricité : je les conduis à distance et réalise également des manœuvres sur place. J’aime beaucoup cette double vision : à la fois à distance et très concrète sur le terrain.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'La production décentralisée ne permet pas d’avoir un apport en électricité constant. Pour remédier à cette intermittence, une production centralisée d’électricité est en place avec des centrales plus puissantes : thermiques, nucléaires, hydrauliques, et également des parcs éoliens, solaires. Ensemble, ces centrales permettent une production en continu.'
        },
        {
          name: 'Anaïs',
          job: 'Conseillère Collectivités Territoriales',
          image: 'Mission4_expert3.svg',
          // tslint:disable-next-line: max-line-length
          advice: 'Je conseille les villes et agglomérations sur des sujets fondamentaux tels que la politique énergétique des territoires, l’aménagement, la rénovation, la production d’énergies... J’ai un bon sens relationnel et j’apprécie d’être ce lien entre mon entreprise et les élus.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Les smart cities  ont pour objectif de transformer l’environnement urbain en s’appuyant sur les bienfaits des nouvelles technologies tout en veillant au bien-être des habitants. Mais les technologies ne suffisent toutefois pas. Il faut repenser le fonctionnement entier de la ville en remaniant l’administration, l’économie, la mobilité et nos modes de vie.'
        }
      ]
    },
    {
      index: 6,
      common: CommonStepPropSolution.instance(),
      bgName: 'mission4-D2.jpg',
      visited: false,
      activ: false,
      solutions: [
        {
          title: 'Repenser l’économie locale',
          // tslint:disable-next-line: max-line-length
          solution: 'Une smart city est basée sur un système économique différent de celui en place actuellement. Vous êtes convaincus qu’il faut le remplacer par une économie circulaire, qui privilégie la fabrication locale avec des matières locales, et évite de jeter les produits qui ne sont plus utilisés ou cassés en trouvant un moyen de leur donner une deuxième vie.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Pour mettre en place une économie circulaire, il faut changer les habitudes de consommation. Lorsqu’on n’utilise plus un produit, on a la possibilité de le vendre ou de le donner. Des sites Internet existent déjà pour vendre ou acheter/vendre ou donner des produits de seconde main, de l’électro-ménager, des vêtements et accessoires de mode.',
          bg: 'S1.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission4_expert1.svg',
          visited: false,
          selected: false,
        },
        {
          title: 'Développer davantage l’usage des nouvelles technologies chez les particuliers et les professionnels',
          // tslint:disable-next-line: max-line-length
          solution: 'Le bâtiment et les transports sont les secteurs les plus énergivores et émetteurs de gaz à effet de serre. Vous êtes convaincus que les nouvelles technologies permettront d’apporter des solutions innovantes pour mieux consommer en préservant l’environnement et en gardant le niveau de confort des habitants : efficacité énergétique, éco-gestes, éco-mobilité…',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'La domotique permet d’analyser et de gérer la consommation des bâtiments pour améliorer l’efficacité énergétique. Optimisation de la consommation, automatisation d’éco-gestes, confort des résidents, respect de l’environnement, économies sur les factures : la domotique peut avoir d’autres usages, comme la gestion de la sécurité avec une alarme connectée au téléphone des résidents.',
          bg: 'S2.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission4_expert2.svg',
          visited: false,
          selected: false,
        },
        {
          title: 'Mettre en place un nouveau mode de vie avec les habitants',
          // tslint:disable-next-line: max-line-length
          solution: 'Une smart city se construit avec ses habitants en leur proposant un autre mode de vie. Vous êtes convaincus qu’il faut commencer par les habituer à vivre autrement. Ce changement passe par l’intégration d’habitudes écologiques et en leur donnant une position de citoyens actifs et responsables dans le fonctionnement de la ville pour qu’ils soient impliqués dans sa transformation.',
          // tslint:disable-next-line: max-line-length
          goodToKnow: 'Le changement d’habitudes des citoyens peut se faire de différentes manières. La Ville de Paris a par exemple choisi de faire participer ses habitants au choix des projets développés par la ville : ils peuvent voter sur Internet pour leur projet préféré. Des applications mobiles sont aussi développées pour encourager à relever des défis écologiques, améliorer l’efficacité énergétique, mettre en place des éco-gestes…',
          bg: 'S3.jpg',
          bgX: '-20px',
          bgY: '-20px',
          expert_img: 'Mission4_expert3.svg',
          visited: false,
          selected: false,
        }
      ]
    },
    {
      index: 7,
      common: CommonStepMessagesCles.instance(),
      bgName: 'mission4-D2.jpg',
      visited: false,
      activ: false,
      messagesCles: [
        {
          // tslint:disable-next-line: max-line-length
          message : 'Les transports et les bâtiments sont les plus gros consommateurs d’énergie et émetteurs de gaz à effet de serre.',
          wimg: 'MC1.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Les nouvelles technologies consomment de plus en plus d’énergie mais permettent aussi de contrôler sa consommation.',
          wimg: 'MC2.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Une smart city ou “ville intelligente” transforme la ville grâce aux nouvelles technologies.',
          wimg: 'MC3.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'La smart city préserve l’environnement en veillant au bien-être des habitants.',
          wimg: 'MC4.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'La transition vers une smart city passe aussi par une modification de l’économie, de la mobilité et du mode de vie des habitants.',
          wimg: 'MC5.jpg',
          wx: '0',
          wy: '0',
          visited : false
        },
        {
          // tslint:disable-next-line: max-line-length
          message : 'Nous sommes tous responsables, à notre échelle, de notre impact sur l’environnement.',
          wimg: 'MC6.jpg',
          wx: '0',
          wy: '0',
          visited : false
        }
      ]
    }
  ]
};
