import { Component, OnInit } from '@angular/core';
import { MissionMobilite } from 'src/app/@commons/models/mission-mobilite';
import { MissionsService } from 'src/app/@commons/services/missions.service';

@Component({
  selector: 'app-desc-index',
  templateUrl: './desc-index.component.html',
  styleUrls: ['./desc-index.component.css']
})
export class DescIndexComponent implements OnInit {

  mission: MissionMobilite;

  constructor(private missionService: MissionsService) {
  }

  ngOnInit() {
    this.missionService.missionMobilite()
      .subscribe((mission: MissionMobilite) => this.mission = mission);
  }

}
