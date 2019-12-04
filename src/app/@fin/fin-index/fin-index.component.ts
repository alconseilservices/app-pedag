import { Component, OnInit } from '@angular/core';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { MobilityMission } from 'src/app/@commons/models/mobility-mission';

@Component({
  selector: 'app-fin-index',
  templateUrl: './fin-index.component.html',
  styleUrls: ['./fin-index.component.css']
})
export class FinIndexComponent implements OnInit {

  mission: MobilityMission;

  constructor(private service: MissionsService) {
    this.service.missionMobilite()
      .subscribe((mission: MobilityMission) => this.mission = mission);
  }

  ngOnInit() {
  }

  computePrevious(): string {
    return 'etapes/' +  (this.mission.steps.length - 1)
            +  '/' + this.mission.steps[this.mission.steps.length - 1].path;
  }

  computeEndVideo(): string {
    return this.mission.endVideos
      .find(v => v.minScore <= this.mission.playerScore
          && v.maxScore >= this.mission.playerScore).file;
  }

}
