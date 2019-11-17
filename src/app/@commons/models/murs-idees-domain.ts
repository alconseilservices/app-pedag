/**
 * Représente la classification d'une catégorie.
 */
export interface Categorie {
  /**
   * ID de la catégorie
   * @required
   */
  id: number;
  /**
   * Nom de la catégorie
   * @required
   */
  name: string;
  /**
   * Code couleur du badge de catégorie.
   * @required
   */
  color: string;
  /**
   * Code couleur de la bordure du badge de catégorie.
   */
  borderColor?: string;
}
/**
 * Représente une idée classifiable dans une `Categorie`.
 */
export interface Idee {
  /**
   * ID de la catégorie
   * @required
   */
  id: number;
  /**
   * Nom de la catégorie
   * @required
   */
  name: string;
  /**
   * Catégorie de l'idée
   * @required
   */
  categorie: Categorie;
  /**
   * Labels de classification de l'idée dans différentes listes.
   * @required
   */
  tags: ListIdentifier[];
}
/**
 * Labels liste.
 * Cette enum permet de placer l'idée dans une des listes d'affichage.
 */
export enum ListIdentifier {
  LIST1 = 'LIST1',
  LIST2 = 'LIST2',
  LIST3 = 'LIST3',
  LIST4 = 'LIST4',
}
