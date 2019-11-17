import { MissionCourseStep } from './mission-course-step';
/**
 * Représente la spécification d'une étape de conseil d'expert.
 */
export interface StepConseilsExpert extends MissionCourseStep {
  /**
   * Liste des conseils d'experts.
   * @required
   */
  conseils: ConseilExpert[];
}
/**
 * Représente la spécification d'un conseil d'expert.
 */
export interface ConseilExpert {
  /**
   * Nom de l'expert
   * @required
   */
  name: string;
  /**
   * Profession de l'expert
   * @required
   */
  job: string;
  /**
   * Image de l'expert
   *
   * L'image référencée doit se trouver sous le chemin suivant :
   * `assets/images/${mission.id}/${step.image}`
   * @required
   */
  image: string;
  /**
   * Text conseil
   * @required.
   */
  advice: string;
  /**
   * Test _bon à savoir_
   * @required
   */
  goodToKnow: string;
}
