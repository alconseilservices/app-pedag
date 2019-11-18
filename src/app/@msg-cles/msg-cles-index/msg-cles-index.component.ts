import { Component, OnInit } from '@angular/core';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { MissionMobilite } from 'src/app/@commons/models/mission-mobilite';

@Component({
  selector: 'app-msg-cles-index',
  templateUrl: './msg-cles-index.component.html',
  styleUrls: ['./msg-cles-index.component.css']
})
export class MsgClesIndexComponent implements OnInit {

  mission: MissionMobilite;

  constructor(private service: MissionsService) {
    this.service.missionMobilite()
      .subscribe((mission: MissionMobilite) => this.mission = mission);
  }

  ngOnInit() {
  }

}
