import { MissionCourseStep } from './mission-course-step';
/**
 * Représente la spécification d'une étape de présentation.
 */
export interface StepPresentation extends MissionCourseStep {
  /**
   * Titre de la présentation
   * @required
   */
  presTitle: string;
  /**
   * Texte de la présentation
   * @required
   * @html_support
   */
  presText: string;
  /**
   * Image de la présentation.
   *
   * L'image référencée doit se trouver sous le chemin suivant :
   * `assets/images/${mission.id}/${step.image}`
   * @required
   */
  presImage: string;
}
