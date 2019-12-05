import { MobilityMissionStep } from './mobility-mission-step';
import { KeyMessage, ScoredVideo, DevMode } from './generics';

/**
 * Représente une spécification pour une mission mibilite
 */
export interface MobilityMission extends DevMode {
  /**
   *
   */
  creditsPicto: string;
  /**
   *
   */
  creditsTralalere: string;
  /**
   *
   */
  creditsTransilien: string;
  /**
   *
   */
  creditsMain: string;
  /**
   *
   */
  playerScore: number;
  /**
   * nom de la vidéo mp4 d'introduction ./assets/videos/${videoIntro}
   * @required
   */
  videoIntro: string;
  /**
   * description de la mission
   * supporte les tags html
   * @required
   */
  description: string;
  /**
   * Etapes de la mission de mobilité
   * @required
   */
  steps: MobilityMissionStep[];
  /**
   * Liste des messages clés
   * @required
   */
  keyMessages: KeyMessage[];
  /**
   *
   */
  endVideos: ScoredVideo[];
}
