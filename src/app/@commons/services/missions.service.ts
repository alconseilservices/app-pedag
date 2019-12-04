import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MobilityMission } from '../models/mobility-mission';
import { MobilityMissionStep } from '../models/mobility-mission-step';
import { Mission } from '../datas/mission';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {

  public missionSource: BehaviorSubject<MobilityMission>;
  public missionSource$: Observable<MobilityMission>;
  public etapeActiveSource: BehaviorSubject<MobilityMissionStep>;
  public etapeActiveSource$: Observable<MobilityMissionStep>;

  constructor() {
    this.missionSource = new BehaviorSubject<MobilityMission>(Mission);
    this.missionSource$ = this.missionSource.asObservable();

    this.etapeActiveSource = new BehaviorSubject<MobilityMissionStep>(Mission.steps[0]);
    this.etapeActiveSource$ = this.etapeActiveSource.asObservable();

  }

  missionMobilite(): Observable<MobilityMission> {
    return this.missionSource$;
  }
}
