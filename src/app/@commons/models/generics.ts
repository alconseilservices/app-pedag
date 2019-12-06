/**
 *
 */
export interface DevMode {
  /**
   *
   */
  devMode?: boolean;
}
/**
 * Permet d'assigner un ordre pour un objet dans une collection d'objets ordonnés.
 */
export interface Ordered {
  /**
   * Index de l'objet dans la collection.
   * @required
   */
  index: number;
}
/**
 *
 */
export interface Dirty {
  /**
   *
   * @required
   */
  dirty?: boolean;
}
/**
 * Permet d'assigner une propriété d'état à un objet activable.
 */
export interface Activate {
  /**
   * Etat de l'objet activable.
   * @required
   */
  activ?: boolean;
}
/**
 * Permet d'assigner une propriété d'état à un objet visitable.
 */
export interface Visitable {
  /**
   * Etat de l'objet visitable.
   * @required
   */
  visited?: boolean;
}
/**
 *
 */
export interface Completable {
  /**
   *
   * @required
   */
  completed?: boolean;
}
/**
 *
 */
export interface ScoredVideo extends Visitable {
  /**
   *
   */
  file: string;
  /**
   *
   */
  minScore: number;
  /**
   *
   */
  maxScore: number;
}
/**
 *
 */
export interface HintText extends Visitable {
  /**
   *
   */
  value: string;
}
/**
 *
 */
export interface ImageScaler {
  /**
   *
   */
  file: string;
  /**
   *
   */
  top: number;
  /**
   *
   */
  left: number;
  /**
   *
   */
  height: number;
}
/**
 *
 */
export interface Choice extends Activate, Dirty {
  /**
   *
   */
  value: string;
  /**
   *
   */
  goodChoice: boolean;
  /**
   *
   */
  score: number;
  /**
   *
   */
  responseImage: string;
  /**
   *
   */
  responseFace: string;
  /**
   *
   */
  responseFaceName: string;
  /**
   *
   */
  responseHint: string;
}
/**
 * Représente les données nécessaires pour afficher une image en fond d'une `div`.
 */
export interface ImageWindow {
  /**
   * URI de l'image de fond (taille requise 1784px × 970px)
   * @required
   */
  wimg: string;
  /**
   * Abscisse en px du coin haut gauche de l'image
   * @required
   */
  wx: string;
  /**
   * Ordonne en px du coin haut gauche de l'image
   * @required
   */
  wy: string;
}
/**
 * Représente la spécification d'un indice.
 */
export interface Indication extends Visitable {
  /**
   * invisible
   */
  hidden: boolean;
  /**
   * Abscisse du l'icone loupe calculé par rapport au gabarit de la maquette figma.
   * @required
   */
  x: number;
  /**
   * Ordonnée du l'icone loupe calculé par rapport au gabarit de la maquette figma
   * @required
   */
  y: number;
  /**
   *
   */
  width: number;
  /**
   *
   */
  height: number;
  /**
   * Titre de l'indice
   * @required
   */
  title?: string;
  /**
   * Image à afficher.
   *
   * L'image référencée doit se trouver sous le chemin suivant :
   * `assets/images/${mission.id}/${step.image}`
   */
  image?: ImageScaler;
  /**
   * Image à afficher.
   *
   * Le fichier référencée doit se trouver sous le chemin suivant :
   * `assets/pdfs/${mission.id}/${step.pdf}`
   */
  pdf?: string;
  /**
   * Pas spécifier encore.
   */
  video?: string;
  /**
   * Texte de l'indice.
   * @required
   */
  text?: string;
}

/**
 * Représente la spécification d'un message clé.
 */
export interface KeyMessage extends ImageScaler, Visitable {
  /**
   * Texte du message clé
   * @required
   * @html_support
   */
  message: string;
}

