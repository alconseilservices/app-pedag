# Tutorial 1 : initialisation de la mission

Pour commencer, créer le fichier de données de la mission :
`src/app/@common/datas/mission${index}.ts`

````typescript
import { MissionCourse } from '../models/mission-course';

export const Mission1: MissionCourse = {
  id: 'm1',
  intro: false,
  name: 'Zoom sur le mix énergétique',
  level: undefined,
  description: 'Zoom sur le mix énergétique',
  mandatory: true,
  activ: true,
  steps: [
    
  ]
}
````

Ensuite, importer la mission dans le service Angular qui renvoit les données à afficher :
`src/app/@common/services/mission.service.ts`

````typescript
  constructor() {
    this.MISSIONS$ = from([
      Mission1, // importer la mission
      Mission2,
      Mission3,
      ...
    ]);
    // other code
  }

````

Ajouter une image de fond pour la carte menu de la mission avec le nom suivant (dimension en px 472 × 314) `src/assets/images/${mission.id}/menu_card_bg.png`

![](../src/assets/images/m1/menu_card_bg.png)

<a style="float: right;" href="tuto2-step-presentation.md">Aller à l'étape suivante > </a>
