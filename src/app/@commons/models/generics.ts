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
export interface Choice extends Activate {
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
export interface Indice extends Visitable {
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
 * Représente la spécification d'un message clé.
 */
export interface MessageCle extends ImageWindow, Visitable {
  /**
   * Texte du message clé
   * @required
   * @html_support
   */
  message: string;
}

