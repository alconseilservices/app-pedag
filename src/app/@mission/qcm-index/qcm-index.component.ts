import { Component, OnInit, Input } from '@angular/core';
import { MissionMobilite } from 'src/app/@commons/models/mission-mobilite';
import { MissionMobiliteQcm } from 'src/app/@commons/models/mission-mobilite-etape';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-qcm-index',
  templateUrl: './qcm-index.component.html',
  styleUrls: ['./qcm-index.component.css']
})
export class QcmIndexComponent implements OnInit {

  @Input() mission: MissionMobilite;
  @Input() etape: MissionMobiliteQcm;
  etapeIndex: number;

  constructor(
    private service: MissionsService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
    ) {
    this.service.missionMobilite()
      .subscribe((mission: MissionMobilite) => {
        this.mission = mission;
        const etapeIndex = parseInt(this.route.parent.snapshot.params.id, 10);
        this.etape = this.mission.etapes[etapeIndex] as MissionMobiliteQcm;
      });
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.computeStepInfo();
      }
    });
  }

  computeStepInfo(): void {
    this.etapeIndex = parseInt(this.route.parent.snapshot.params.id, 10);
    this.etape = this.mission.etapes[this.etapeIndex] as MissionMobiliteQcm;
  }

  ngOnInit() {
  }

}
