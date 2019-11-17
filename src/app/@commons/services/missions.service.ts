import { Injectable } from '@angular/core';
import { Mission1 } from '../datas/mission1';
import { MissionCourse } from '../models/mission-course';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MissionCourseStep } from '../models/mission-course-step';
import { Mission2 } from '../datas/mission2';
import { Mission1Intro } from '../datas/mission1intro';
import {Mission2Intro} from '../datas/mission2intro';
import {Mission3} from '../datas/mission3';
import {Mission3Intro} from '../datas/mission3intro';
import {Mission4} from '../datas/mission4';
import {Mission4Intro} from '../datas/mission4intro';
import {Mission5} from '../datas/mission5';
import {Mission5Intro} from '../datas/mission5intro';
import {Mission6} from '../datas/mission6';
import {Mission7} from '../datas/mission7';
import {Mission8} from '../datas/mission8';
import {Mission10} from '../datas/mission10';
import {Mission9} from '../datas/mission9';
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

  public activMissionSource: BehaviorSubject<MissionCourse>;
  public activMissionSource$: Observable<MissionCourse>;
  public activStepSource: BehaviorSubject<MissionCourseStep>;
  public activStepSource$: Observable<MissionCourseStep>;

  private MISSIONS$: Observable<MissionCourse>;
  private refMissions: MissionCourse[];

  constructor() {
    this.refMissions = [
      JSON.parse(JSON.stringify(Mission1)),
      JSON.parse(JSON.stringify(Mission1Intro)),
      JSON.parse(JSON.stringify(Mission2)),
      JSON.parse(JSON.stringify(Mission2Intro)),
      JSON.parse(JSON.stringify(Mission3)),
      JSON.parse(JSON.stringify(Mission3Intro)),
      JSON.parse(JSON.stringify(Mission4)),
      JSON.parse(JSON.stringify(Mission4Intro)),
      JSON.parse(JSON.stringify(Mission5)),
      JSON.parse(JSON.stringify(Mission5Intro)),
      JSON.parse(JSON.stringify(Mission6)),
      JSON.parse(JSON.stringify(Mission7)),
      JSON.parse(JSON.stringify(Mission8)),
      JSON.parse(JSON.stringify(Mission9)),
      JSON.parse(JSON.stringify(Mission10)),
    ];
    this.MISSIONS$ = from([
      Mission1,
      Mission1Intro,
      Mission2,
      Mission2Intro,
      Mission3,
      Mission3Intro,
      Mission4,
      Mission4Intro,
      Mission5,
      Mission5Intro,
      Mission6,
      Mission7,
      Mission8,
      Mission9,
      Mission10,
    ]);
    this.activMissionSource = new BehaviorSubject<MissionCourse>(Mission1);
    this.activMissionSource$ = this.activMissionSource.asObservable();
    this.activStepSource = new BehaviorSubject<MissionCourseStep>(Mission1.steps[0]);
    this.activStepSource$ = this.activStepSource.asObservable();

    this.missionSource = new BehaviorSubject<MissionMobilite>(Mission);
    this.missionSource$ = this.missionSource.asObservable();

    this.etapeActiveSource = new BehaviorSubject<MissionMobiliteEtape>(Mission.etapes[0]);
    this.etapeActiveSource$ = this.etapeActiveSource.asObservable();

  }

  missionMobilite(): Observable<MissionMobilite> {
    return this.missionSource$;
  }

  missions(): Observable<MissionCourse> {
    return this.MISSIONS$;
  }

  mission(missionId: string, intro: boolean): Observable<MissionCourse>  {
    return this.MISSIONS$
      .pipe(
        filter((mission: MissionCourse) => {
          if (intro) {
            return mission.id === missionId && mission.intro === intro;
          } else {
            return mission.id === missionId && typeof mission.intro === 'undefined';
          }
        })
      );
  }

  activateMission(missionId: string, intro: boolean, reset?: boolean): void {
    this.activMissionSource.getValue().activ = false;
    this.mission(missionId, intro)
      .subscribe(mission => {
        mission.activ = true;
        if (mission.activ) {
          if (reset) {
            const refMission = this.refMissions.find((item) => item.id === missionId && (
                (intro === true && item.intro === true) ||
                (typeof intro === 'undefined' && typeof item.intro === 'undefined')
              ));
            Object.assign(mission, refMission);
          }
          mission.visited = true;
          this.activMissionSource.next(mission);
          this.activStepSource.next(mission.steps[0]);
        }
      });
  }

  activateMissionStep(index: number): void {
    const mission = this.activMissionSource.getValue();
    if (mission && mission.steps) {
      mission.steps.forEach(step => {
        step.activ = step.index === index;
        if (step.activ) {
          this.activStepSource.next(step);
        }
      });
    }
  }


}
