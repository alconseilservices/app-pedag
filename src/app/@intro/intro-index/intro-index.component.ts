import { Component, OnInit } from '@angular/core';
import { MissionCourse } from 'src/app/@commons/models/mission-course';
import { MissionMobilite } from 'src/app/@commons/models/mission-mobilite';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-intro-index',
  templateUrl: './intro-index.component.html',
  styleUrls: ['./intro-index.component.css']
})
export class IntroIndexComponent implements OnInit {

  mission: MissionMobilite;

  isMandatory = true;
  missions: MissionCourse[] = [];

  constructor(private missionService: MissionsService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.missionService.missionMobilite()
      .subscribe((mission: MissionMobilite) => this.mission = mission);
  }

  getVideoRelativeUrl() {
    return './assets/videos/' + this.mission.introNomVideo;
  }
}
