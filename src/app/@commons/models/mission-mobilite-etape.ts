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
  title?: string;
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
 * Implémente la spécification des informations communes de l'étape introduction.
 */
export class CommonStepImageInteractive implements MissionMobiliteStepCommon {
  /**
   * @inheritdoc
   */
  hint = undefined;
  /**
   * @inheritdoc
   */
  path = 'image-interactive';
  /**
   * @inheritdoc
   */
  title = 'Découverte de la mission';
  /**
   * Renvoit une instance de la classe des informations communes de l'étape présentation.
   * @returns `CommonStepIntroduction`
   */
  static instance(): CommonStepImageInteractive {
    return new CommonStepImageInteractive();
  }
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
   * le texte de l'encart
   */
  insertText: string;
  /**
   * any
   */
  [key: string]: any;
}



/**
 * Spécification d'une étape d'image d'interactive
 */
export interface MissionMobiliteImgInteractive extends MissionMobiliteEtape, Visitable {
  /**
   * nom de l'image de fond assets/images/${backgroundImage}.png
   */
  backgroundImage: string;
  /**
   * Liste des indices à analyser.
   * @required
   */
  indices: Indice[];
}
