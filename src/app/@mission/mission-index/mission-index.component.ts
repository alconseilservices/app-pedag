import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { MissionMobilite } from 'src/app/@commons/models/mission-mobilite';
import { MissionMobiliteEtape, Path } from 'src/app/@commons/models/mission-mobilite-etape';

@Component({
  selector: 'app-mission-index',
  templateUrl: './mission-index.component.html',
  styleUrls: ['./mission-index.component.css']
})
export class MissionIndexComponent implements OnInit {

  etapeIndex: number;
  mission: MissionMobilite;
  etape: MissionMobiliteEtape;
  insertOpened: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: MissionsService) {
      this.service.missionMobilite()
        .subscribe((mission: MissionMobilite) => {
          this.mission = mission;
          this.computeStepInfo();
        });
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          this.computeStepInfo();
        }
      });
  }

  ngOnInit() {
  }

  computeStepInfo(): void {
    this.etapeIndex = parseInt(this.route.snapshot.params.id, 10);
    this.etape = this.mission.etapes[this.etapeIndex];
  }

  computeCustomBtn(): string {
    if (String(this.router.url).endsWith(Path.ETAPE_QCM_INDEX)) {
      return 'Prendre une décision';
    }
  }

  computeNext(): string {
    if (this.mission.etapes[this.etapeIndex].path !== Path.ETAPE_QCM_INDEX) {
      if (!isNaN(this.etapeIndex) && (this.etapeIndex + 1 ) < this.mission.etapes.length) {
        return 'etapes/' + (this.etapeIndex + 1) +  '/' + this.mission.etapes[this.etapeIndex + 1].path;
      } else {
        return 'fin';
      }
    }
  }

  computePrevious(): string {
    if (String(this.router.url).endsWith(Path.ETAPE_QCM_DECISION)) {
      return 'etapes/' + this.etapeIndex +  '/' + Path.ETAPE_QCM_INDEX;
    } else if (!isNaN(this.etapeIndex) && this.etapeIndex > 0) {
      return 'etapes/' + (this.etapeIndex - 1) +  '/' + this.mission.etapes[this.etapeIndex - 1].path;
    } else {
      return 'desc';
    }
  }

  onClickCustomBtn(): void {
    this.router.navigate(['etapes', this.etapeIndex, 'qcm-decision']);
  }

  showBoxShadow(): string {
    if (String(this.router.url).endsWith(Path.ETAPE_QCM_DECISION)) {
      return 'none';
    } else {
      return '0px 0px 20px rgba(60, 55, 50, 0.5)';
    }
  }

}
