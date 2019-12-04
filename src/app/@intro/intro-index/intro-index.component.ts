import { Component, OnInit } from '@angular/core';
import { MobilityMission } from 'src/app/@commons/models/mobility-mission';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-intro-index',
  templateUrl: './intro-index.component.html',
  styleUrls: ['./intro-index.component.css']
})
export class IntroIndexComponent implements OnInit {

  mission: MobilityMission;
  isMandatory = true;

  constructor(private missionService: MissionsService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.missionService.missionMobilite()
      .subscribe((mission: MobilityMission) => this.mission = mission);
  }

  getVideoRelativeUrl() {
    return './assets/videos/' + this.mission.videoIntro;
  }
}
