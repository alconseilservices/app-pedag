import { Component, OnInit } from '@angular/core';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { MissionMobilite } from 'src/app/@commons/models/mission-mobilite';

@Component({
  selector: 'app-fin-index',
  templateUrl: './fin-index.component.html',
  styleUrls: ['./fin-index.component.css']
})
export class FinIndexComponent implements OnInit {

  mission: MissionMobilite;

  constructor(private service: MissionsService) {
    this.service.missionMobilite()
      .subscribe((mission: MissionMobilite) => this.mission = mission);
  }

  ngOnInit() {
  }

  computePrevious(): string {
    return 'etapes/' +  (this.mission.etapes.length - 1)
            +  '/' + this.mission.etapes[this.mission.etapes.length - 1].path;
  }

  computeEndVideo(): string {
    return this.mission.endVideos
      .find(v => v.minScore <= this.mission.obtainedScore
          && v.maxScore >= this.mission.obtainedScore).file;
  }

}
