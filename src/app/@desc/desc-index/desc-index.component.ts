import { Component, OnInit } from '@angular/core';
import { MobilityMission } from 'src/app/@commons/models/mobility-mission';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desc-index',
  templateUrl: './desc-index.component.html',
  styleUrls: ['./desc-index.component.css']
})
export class DescIndexComponent implements OnInit {

  mission: MobilityMission;

  constructor(private missionService: MissionsService, private router: Router) {
  }

  ngOnInit() {
    this.missionService.missionMobilite()
      .subscribe((mission: MobilityMission) => this.mission = mission);
  }

  nextRoute(): string {
    return 'etapes/0/' + this.mission.steps[0].path;
  }

}
