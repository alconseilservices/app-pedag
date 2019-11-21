import { Component, OnInit } from '@angular/core';
import { MissionMobilite } from 'src/app/@commons/models/mission-mobilite';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desc-index',
  templateUrl: './desc-index.component.html',
  styleUrls: ['./desc-index.component.css']
})
export class DescIndexComponent implements OnInit {

  mission: MissionMobilite;

  constructor(private missionService: MissionsService, private router: Router) {
  }

  ngOnInit() {
    this.missionService.missionMobilite()
      .subscribe((mission: MissionMobilite) => this.mission = mission);
  }

  nextRoute(): string {
    return 'etapes/0/' + this.mission.etapes[0].path;
  }

}
