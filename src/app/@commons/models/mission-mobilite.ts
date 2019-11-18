import { MissionMobiliteEtape } from './mission-mobilite-etape';
import { MessageCle } from './generics';

/**
 * Représente une spécification pour une mission mibilite
 */
export interface MissionMobilite {
  /**
   * nom de la vidéo mp4 d'introduction ./assets/videos/${introNomVideo}
   * @required
   */
  introNomVideo: string;
  /**
   * description de la mission
   * supporte les tags html
   * @required
   */
  descriptionTexte: string;
  /**
   * Etapes de la mission de mobilité
   * @required
   */
  etapes?: MissionMobiliteEtape[];
  /**
   * Liste des messages clés
   * @required
   */
  messagesCles: MessageCle[];
}
