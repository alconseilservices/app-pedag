import { MissionCourseStep } from './mission-course-step';
import { Activate, Visitable } from './generics';
/**
 * Représente une spécification de la mission parcours.
 */
export interface MissionCourse extends Activate, Visitable {
    /**
     * id de la mission.
     * @example: m1, m2, etc...
     * @required
     */
    id: string;
    /**
     * nom de la mission.
     * @required
     */
    name: string;
    /**
     * true si la mission est une introduction.
     * @required
     */
    intro?: boolean;
    /**
     * niveau de la mission (s'affiche sur les cartes du menu).
     */
    level?: string;
    /**
     * description de la mission.
     *
     * @remarks supporte le contenu html
     * @required
     */
    description: string;
    /**
     * true si la mission appartient au tronc commun
     */
    mandatory?: boolean;
    /**
     * liste des étapes de la mission
     * @required
     */
    steps: MissionCourseStep[];
}
