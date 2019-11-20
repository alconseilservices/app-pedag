import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { MissionMobilite } from 'src/app/@commons/models/mission-mobilite';

@Component({
  selector: 'app-mission-index',
  templateUrl: './mission-index.component.html',
  styleUrls: ['./mission-index.component.css']
})
export class MissionIndexComponent implements OnInit {

  etapeIndex: number;
  mission: MissionMobilite;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: MissionsService) {
      this.service.missionMobilite()
        .subscribe((mission: MissionMobilite) => this.mission = mission);
    }

  ngOnInit() {
    this.etapeIndex = parseInt(this.route.snapshot.params.id, 10);
  }

  computeNext(): string {
    if (!isNaN(this.etapeIndex) && (this.etapeIndex + 1 ) < this.mission.etapes.length) {
      return 'etapes/' + (this.etapeIndex + 1) +  '/' + this.mission.etapes[this.etapeIndex + 1].common.path;
    } else {
      return 'fin';
    }
  }

  computePrevious(): string {
    if (!isNaN(this.etapeIndex) && this.etapeIndex > 1) {
      return 'etapes/' + (this.etapeIndex - 1) +  '/' + this.mission.etapes[this.etapeIndex - 1].common.path;
    } else {
      return 'desc';
    }
  }

}
