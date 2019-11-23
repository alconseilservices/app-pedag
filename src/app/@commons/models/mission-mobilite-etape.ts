import { Indice, Visitable, Choice } from './generics';
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
export interface MissionMobiliteEtape {
  /**
   * header title
   */
  path: Path;
  /**
   * le texte de l'encart
   */
  insertText: string;
  /**
   * liste des indices
   */
  indices?: Indice[];
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
}

/**
 * Spécification d'une étape QCM
 */
export interface MissionMobiliteQcm extends MissionMobiliteEtape, Visitable {
  /**
   *
   */
  landingImage: string;
  /**
   * liste des choix
   */
  choices: Choice[];
  /**
   *
   */
  imageGoodChoice: string;
  /**
   *
   */
  faceGoodChoice: string;
  /**
   *
   */
  faceNameGoodChoice: string;
  /**
   *
   */
  hintGoodChoice: string;
  /**
   *
   */
  imageBadChoice: string;
  /**
   *
   */
  faceBadChoice: string;
  /**
   *
   */
  faceNameBadChoice: string;
  /**
   *
   */
  hintBadChoice: string;
}
