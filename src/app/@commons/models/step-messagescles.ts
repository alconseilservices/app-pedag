import { MissionCourseStep } from './mission-course-step';
import { ImageWindow, Visitable } from './generics';
/**
 * Représente la spécification d'une étape de messages clés.
 */
export interface StepMessagesCles extends MissionCourseStep {
  /**
   * Liste des messages clés.
   * @required
   */
  messagesCles: MessageCle[];
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
