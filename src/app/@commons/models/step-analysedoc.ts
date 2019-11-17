import { MissionCourseStep } from './mission-course-step';
import { Visitable } from './generics';
/**
 * Représente la spécification d'une étape d'analyse de document.
 */
export interface StepAnalyseDoc extends MissionCourseStep {
  /**
   * Liste des documents à analyser.
   * @required
   */
  docs: Doc[];
}
/**
 * Représente la spécification d'un document à analyser.
 */
export interface Doc extends Visitable {
  /**
   * Titre du document.
   * @required
   */
  docTitle: string;
  /**
   * URL du document.
   */
  docURL?: string;
  /**
   * Nom du fichier à analyser.
   *
   * Le fichier référencée doit se trouver sous le chemin suivant :
   * `assets/pdfs/${mission.id}/${step.docFile}`
   * @required
   */
  docFile: string;
  /**
   * MIME type du fichier.
   * @required
   */
  docExtension: string;
}
