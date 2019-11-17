import { Indice, Visitable } from './generics';

/**
 * Représente la spécification des informations communes d'une étape de mission.
 */
export interface MissionMobiliteStepCommon {
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
   * icon header
   */
  icon?: string;
  /**
   * Texte de suggestion affiché dans l'entête de l'application.
   */
  hint?: string;
}

/**
 * Spécification d'une étape de mission mobilite
 */
export interface MissionMobiliteEtape {
  /**
   * header title
   */
  common: MissionMobiliteStepCommon;
  /**
   * any
   */
  [key: string]: any;
}

/**
 * Implémente la spécification des informations communes de l'étape introduction.
 */
export class CommonStepIntroduction implements MissionMobiliteStepCommon {
  /**
   * @inheritdoc
   */
  hint = undefined;
  /**
   * @inheritdoc
   */
  path = 'intro';
  /**
   * @inheritdoc
   */
  title = 'Découverte de la mission';
  /**
   * Renvoit une instance de la classe des informations communes de l'étape présentation.
   * @returns `CommonStepIntroduction`
   */
  static instance(): CommonStepIntroduction {
    return new CommonStepIntroduction();
  }
}

/**
 * Spécification d'une étape d'introduction
 */
export interface MissionMibiliteIntroduction extends MissionMobiliteEtape {
  /**
   * nom de la vidéo d'introduction ./assets/videos/${introVideoName}
   * @required
   */
  introVideoName: string;
}

/**
 * Implémente la spécification des informations communes de l'étape description.
 */
export class CommonStepDescription implements MissionMobiliteStepCommon {
  /**
   * @inheritdoc
   */
  hint = undefined;
  /**
   * @inheritdoc
   */
  path = 'intro';
  /**
   * @inheritdoc
   */
  title = 'Découverte de la mission';
  /**
   * Renvoit une instance de la classe des informations communes de l'étape présentation.
   * @returns `CommonStepIntroduction`
   */
  static instance(): CommonStepIntroduction {
    return new CommonStepIntroduction();
  }
}

/**
 * Spécification d'une étape de description
 */
export interface MissionMibiliteDescription extends MissionMobiliteEtape {
  /**
   * description de la mission
   * supporte les tags html
   * @required
   */
  description: string;
}

/**
 * Spécification d'une étape d'image d'interactive
 */
export interface MissionMibiliteImgInteractive extends MissionMobiliteEtape, Visitable {
  /**
   * texte de l'encart
   * supporte les tags html
   * @required
   */
  insertText: string;
  /**
   * Liste des indices à analyser.
   * @required
   */
  indices: Indice[];
}
