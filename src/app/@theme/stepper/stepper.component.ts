import { Component, OnInit } from '@angular/core';
import { MissionCourse } from 'src/app/@commons/models/mission-course';
import { MissionCourseStep } from 'src/app/@commons/models/mission-course-step';
import { MissionsService } from 'src/app/@commons/services/missions.service';

@Component({
  selector: 'app-theme-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  activStep: MissionCourseStep;
  missionCourse: MissionCourse;

  constructor(private service: MissionsService) {
  }

  ngOnInit() {
    this.missionCourse = this.service.activMissionSource.getValue();
    this.service.activMissionSource$
      .subscribe(mission => this.missionCourse = mission);
    this.activStep = this.service.activStepSource.getValue();
    this.service.activStepSource$
      .subscribe(step => this.activStep = step);
  }

  visitStep(step: MissionCourseStep) {
    this.service.activateMissionStep(step.index);
  }

}
