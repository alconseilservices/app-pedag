import { MissionCourseStep } from './mission-course-step';
import { Visitable } from './generics';
/**
 * Représente la spécification d'une étape de proposition de solutions.
 */
export interface StepPropositionSolutions extends MissionCourseStep {
  /**
   * Liste des solutions.
   * @required
   */
  solutions: Solution[];
}
/**
 * Représente la spécification d'une solution.
 */
export interface Solution extends Visitable {
  /**
   * Title de la solution
   * @required
   */
  title: string;
  /**
   * Texte de la solution.
   * @required
   */
  solution: string;
  /**
   * Texte _bon à savoir_
   * @required
   */
  goodToKnow: string;
  /**
   * Image de l'expert
   *
   * L'image référencée doit se trouver sous le chemin suivant :
   * `assets/images/${mission.id}/${step.image}`
   * @required
   */
  expert_img: string;
  /**
   * Image de fond de la carte de solution
   *
   * L'image référencée doit se trouver sous le chemin suivant :
   * `assets/images/${mission.id}/${step.image}`
   * @required
   */
  bg: string;
  /**
   * Abscisse de la fenêtre affiché de l'image pour la carte solution
   * @required
   */
  bgX: string;
  /**
   * Ordonnée de la fenêtre affiché de l'image pour la carte solution
   * @required
   */
  bgY: string;
  /**
   * Etat de la solution validée
   * @required
   */
  validate: boolean;
}
