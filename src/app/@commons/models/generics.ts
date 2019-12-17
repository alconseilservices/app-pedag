/**
 * Propriété d'état pour activer/désactiver le mode développement.
 *
 * Le mode développement permet de mettre en évidence des éléments
 * de l'IHM afin de faciliter le développement et le bug
 */
export interface DevMode {
  /**
   * true si le mode dev est active
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
 * Propriété d'état pour un objet consommé par une quelconque fonction.
 */
export interface Dirty {
  /**
   * true si l'objet est déjo consommé par une quelconque fonction.
   * @required
   */
  dirty?: boolean;
}
/**
 * Permet d'assigner une propriété d'état à un objet activable.
 */
export interface Activate {
  /**
   * true si l'objet est activé.
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
 * Permet d'assigner une propriété d'état à un objet avec un tâche-completion.
 */
export interface Completable {
  /**
   * true si la tâche appliquée à l'objet est complétée.
   * @required
   */
  completed?: boolean;
}
/**
 * Définie un fichier vidéo de type mp4 avec une valeur de score min et max.
 */
export interface ScoredVideo extends Visitable {
  /**
   * Nom du fichier sans l'extension.
   */
  file: string;
  /**
   * Valeur du score minimum.
   */
  minScore: number;
  /**
   * Valeur du score maximum.
   */
  maxScore: number;
}
/**
 * Définit un texte visitable.
 */
export interface HintText extends Visitable {
  /**
   * Valeur du texte.
   */
  value: string;
}
/**
 * Définit une image PNG associée à des coordonnées top/left
 * et à un facteur échelle appliqué à la heuteur de l'image.
 */
export interface ImageScaler {
  /**
   * Nom du fichier sans l'extension.
   */
  file: string;
  /**
   * Position en % par rapport à la limite supérieure du conteneur.
   */
  top: number;
  /**
   * Position en % par rapport à la limite gauche du conteneur.
   */
  left: number;
  /**
   * % appliqué à la hauteur de l'image.
   *
   * Agit comme un facteur d'agrandissement.
   */
  height: number;
}
/**
 * Représente un objet choix activable.
 */
export interface Choice extends Activate, Dirty {
  /**
   * Texte du choix.
   */
  value: string;
  /**
   * true si le choix est valide.
   */
  goodChoice: boolean;
  /**
   * valeur du score associé au choix.
   */
  score: number;
  /**
   * Nom de l'image illustration sans l'extension associé au choix.
   */
  responseImage: string;
  /**
   * Nom de l'image visage-personnage sans l'extension associé au choix.
   */
  responseFace: string;
  /**
   * Nom du visage-personnage associé au choix.
   */
  responseFaceName: string;
  /**
   * Texte associé au choix.
   */
  responseHint: string;
  /**
   * Liste des indices associés aux choix.
   */
  indications?: Indication[];
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

