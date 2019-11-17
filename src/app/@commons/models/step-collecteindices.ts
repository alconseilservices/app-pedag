import { MissionCourseStep } from './mission-course-step';
import { Visitable } from './generics';
/**
 * Représente la spécification d'une étape de collecte d'indices.
 */
export interface StepCollecteIndices extends MissionCourseStep {
  /**
   * Liste des indices à analyser.
   * @required
   */
  indices: Indice[];
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
  title: string;
  /**
   * Image à afficher.
   *
   * L'image référencée doit se trouver sous le chemin suivant :
   * `assets/images/${mission.id}/${step.image}`
   */
  image?: string;
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
  video: string;
  /**
   * Texte de l'indice.
   * @required
   */
  text: string;
}
