import { Component, OnInit } from '@angular/core';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { MobilityMission } from 'src/app/@commons/models/mobility-mission';

@Component({
  selector: 'app-msg-cles-index',
  templateUrl: './msg-cles-index.component.html',
  styleUrls: ['./msg-cles-index.component.css']
})
export class MsgClesIndexComponent implements OnInit {

  mission: MobilityMission;

  constructor(private service: MissionsService) {
    this.service.missionMobilite()
      .subscribe((mission: MobilityMission) => this.mission = mission);
  }

  ngOnInit() {
  }

}
