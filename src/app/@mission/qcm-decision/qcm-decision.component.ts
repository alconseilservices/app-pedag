import { Component, OnInit, Input } from '@angular/core';
import { MissionMobilite } from 'src/app/@commons/models/mission-mobilite';
import { MissionMobiliteQcm } from 'src/app/@commons/models/mission-mobilite-etape';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { ActivatedRoute, NavigationEnd, Router, Event } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Choice } from 'src/app/@commons/models/generics';

@Component({
  selector: 'app-qcm-decision',
  templateUrl: './qcm-decision.component.html',
  styleUrls: ['./qcm-decision.component.css']
})
export class QcmDecisionComponent implements OnInit {

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
        this.computeStepInfo();
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
  /**
   *
   * @param choice
   */
  selectChoice(choice: Choice): void {
    choice.activ = true;
  }

}
