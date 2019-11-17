import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor() { }

  /**
   * resolve the asset location : common or specific resource.
   * @param missionId the mission id
   * @param assetName the asset name
   * @param assetParentFolder the folder name
   */
  resolveLocation(assetParentFolder: string, missionId: string, assetName: string): string {
    if (assetName.startsWith('common/')) {
      return assetParentFolder + assetName;
    } else {
      return assetParentFolder + missionId + '/' + assetName;
    }
  }
}
