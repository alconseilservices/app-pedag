import { Visitable, Activate, Ordered } from './generics';
/**
 * Représente la spécification générique d'une étape de la mission parcours.
 */
export interface MissionCourseStep extends Visitable, Activate, Ordered {
  /**
   * Infos communes des étapes de la mission.
   * @required
   */
  common: MissionCourseStepCommon;
  /**
   * Nom de la ressources images représentant l'image de fond de l'étape.
   *
   * L'image référencée doit se trouver sous le chemin suivant :
   * `assets/images/${mission.id}/${step.bgName}`
   * @required
   */
  bgName: string;
  [key: string]: any;
}
/**
 * Représente la spécification des informations communes d'une étape de mission.
 */
export interface MissionCourseStepCommon {
  /**
   * Chemin d'activation du `Router` Angular.
   * @required
   */
  path: string;
  /**
   * Titre de l'étape de mission.
   * @required
   */
  title: string;
  /**
   * Texte de suggestion affiché dans l'entête de l'application.
   */
  hint?: string;
}
/**
 * Implémente la spécification des informations communes de l'étape présentation.
 */
export class CommonStepPresentation implements MissionCourseStepCommon {
  /**
   * @inheritdoc
   */
  hint = undefined;
  /**
   * @inheritdoc
   */
  path = 'step-presentation';
  /**
   * @inheritdoc
   */
  title = 'Présentation';
  /**
   * Renvoit une instance de la classe des informations communes de l'étape présentation.
   * @returns `CommonStepPresentation`
   */
  static instance(): CommonStepPresentation {
    return new CommonStepPresentation();
  }
}
/**
 * Implémente la spécification des informations communes de l'étape de collecte d'indices.
 */
export class CommonStepCollecteIndices implements MissionCourseStepCommon {
  /**
   * @inheritdoc
   */
  hint = 'Explorons le décor !';
  /**
   * @inheritdoc
   */
  path = 'step-collecte-indices';
  /**
   * @inheritdoc
   */
  title = 'Indices';
  /**
   * Renvoit une instance de la classe des informations communes de l'étape de collecte d'indices.
   * @returns `CommonStepCollecteIndices`
   */
  static instance(): MissionCourseStepCommon {
    return new CommonStepCollecteIndices();
  }
}
/**
 * Implémente la spécification des informations communes de l'étape d'analyse documentaire'
 */
export class CommonStepAnalyseDoc implements MissionCourseStepCommon {
  /**
   * @inheritdoc
   */
  hint = 'Pour aller plus loin.';
  /**
   * @inheritdoc
   */
  path = 'step-analyse-doc';
  /**
   * @inheritdoc
   */
  title = 'Documents';
  /**
   * Renvoit une instance de la classe des informations communes de l'étape d'analyse documentaire.
   * @returns `CommonStepAnalyseDoc`
   */
  static instance(): MissionCourseStepCommon {
    return new CommonStepAnalyseDoc();
  }
}
/**
 * Implémente la spécification des informations communes de l'étape de conseil d'expert
 */
export class CommonStepConseilExpert implements MissionCourseStepCommon {
  /**
   * @inheritdoc
   */
  hint = 'Consultons les experts.';
  /**
   * @inheritdoc
   */
  path = 'step-conseils-exp';
  /**
   * @inheritdoc
   */
  title = 'Experts';
  /**
   * Renvoit une instance de la classe des informations communes de l'étape de conseil d'expert.
   * @returns `CommonStepConseilExpert`
   */
  static instance(): MissionCourseStepCommon {
    return new CommonStepConseilExpert();
  }
}
/**
 * Implémente la spécification des informations communes de l'étape de proposition de solution.
 */
export class CommonStepPropSolution implements MissionCourseStepCommon {
  /**
   * @inheritdoc
   */
  hint = 'A vous de décider !';
  /**
   * @inheritdoc
   */
  path = 'step-prop-solutions';
  /**
   * @inheritdoc
   */
  title = 'Solutions';
  /**
   * Renvoit une instance de la classe des informations communes de l'étape de proposition de solution.
   * @returns `CommonStepPropSolution`
   */
  static instance(): MissionCourseStepCommon {
    return new CommonStepPropSolution();
  }
}
/**
 * Implémente la spécification des informations communes de l'étape de messages clés.
 */
export class CommonStepMessagesCles implements MissionCourseStepCommon {
  /**
   * @inheritdoc
   */
  hint = 'Ce qu\'il faut retenir.';
  /**
   * @inheritdoc
   */
  path = 'step-messages-cles';
  /**
   * @inheritdoc
   */
  title = 'Messages-clés';
  /**
   * Renvoit une instance de la classe des informations communes de l'étape de messages clés.
   * @returns `CommonStepMessagesCles`
   */
  static instance(): MissionCourseStepCommon {
    return new CommonStepMessagesCles();
  }
}

