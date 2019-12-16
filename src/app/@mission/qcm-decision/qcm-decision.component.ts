import { Component, OnInit, Input } from '@angular/core';
import { MobilityMission } from 'src/app/@commons/models/mobility-mission';
import { MobilityMissionQcm } from 'src/app/@commons/models/mobility-mission-step';
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

  @Input() mission: MobilityMission;
  @Input() etape: MobilityMissionQcm;
  etapeIndex: number;

  constructor(
    private service: MissionsService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
    ) {
    this.service.missionMobilite()
      .subscribe((mission: MobilityMission) => {
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
    this.etape = this.mission.steps[this.etapeIndex] as MobilityMissionQcm;
  }

  ngOnInit() {
  }
  /**
   *
   */
  selectChoice(choice: Choice): void {
    if (choice) {
      this.etape.choices.forEach(c => c.activ = false);
      choice.activ = true;
      setTimeout(() => {
        this.router.navigate(['etapes', this.etapeIndex, 'qcm-resultat']);
      }, 500);
    }
  }
  /**
   *
   * @param cardIndex
   */
  resolveChoiceItem(cardIndex: number): Choice {
    if (cardIndex === 1) {
      if (this.etape.choices.length === 3) {
        return this.etape.choices[1];
      } else {
        return undefined;
      }
    }
    if (cardIndex === 2) {
      if (this.etape.choices.length === 3) {
        return this.etape.choices[2];
      } else {
        return this.etape.choices[1];
      }
    }
  }

}
