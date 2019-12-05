import { Indication, Visitable, Choice, HintText } from './generics';
/**
 *
 */
export enum Path {
  /**
   *
   */
  ETAPE_IMAGE_INTERACTIVE = 'image-interactive',
  /**
   *
   */
  ETAPE_QCM_INDEX = 'qcm-situation',
  /**
   *
   */
  ETAPE_QCM_DECISION = 'qcm-decision',
  /**
   *
   */
  ETAPE_QCM_RESULTAT = 'qcm-resultat'
}

/**
 * Spécification d'une étape de mission mobilite
 */
export interface MobilityMissionStep {
  /**
   * header title
   */
  path: Path;
  /**
   * le texte de l'encart
   */
  insertText: HintText;
  /**
   * liste des indices
   */
  indications?: Indication[];
  /**
   * any
   */
  [key: string]: any;
}

/**
 * Spécification d'une étape d'image d'interactive
 */
export interface MobilityMissionInteractiveImage extends MobilityMissionStep, Visitable {
  /**
   * nom de l'image de fond assets/images/${backgroundImage}.png
   */
  backgroundImage: string;
}

/**
 * Spécification d'une étape QCM
 */
export interface MobilityMissionQcm extends MobilityMissionStep, Visitable {
  /**
   *
   */
  landingImage: string;
  /**
   * liste des choix
   */
  choices: Choice[];
}
