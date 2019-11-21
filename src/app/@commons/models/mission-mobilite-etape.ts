import { Indice, Visitable } from './generics';

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
  ETAPE_QCM = 'qcm'
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
