import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MissionMobilite } from '../models/mission-mobilite';
import { MissionMobiliteEtape } from '../models/mission-mobilite-etape';
import { Mission } from '../datas/mission';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {

  public missionSource: BehaviorSubject<MissionMobilite>;
  public missionSource$: Observable<MissionMobilite>;
  public etapeActiveSource: BehaviorSubject<MissionMobiliteEtape>;
  public etapeActiveSource$: Observable<MissionMobiliteEtape>;

  constructor() {
    this.missionSource = new BehaviorSubject<MissionMobilite>(Mission);
    this.missionSource$ = this.missionSource.asObservable();

    this.etapeActiveSource = new BehaviorSubject<MissionMobiliteEtape>(Mission.etapes[0]);
    this.etapeActiveSource$ = this.etapeActiveSource.asObservable();

  }

  missionMobilite(): Observable<MissionMobilite> {
    return this.missionSource$;
  }
}
