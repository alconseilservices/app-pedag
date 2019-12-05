import { Component, OnInit, Input } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { Choice } from 'src/app/@commons/models/generics';
import { MobilityMission } from 'src/app/@commons/models/mobility-mission';
import { MobilityMissionQcm } from 'src/app/@commons/models/mobility-mission-step';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-qcm-resultat',
  templateUrl: './qcm-resultat.component.html',
  styleUrls: ['./qcm-resultat.component.css']
})
export class QcmResultatComponent implements OnInit {

  @Input() mission: MobilityMission;
  @Input() etape: MobilityMissionQcm;
  etapeIndex: number;
  activeChoice: Choice;

  choiceStatusLogo: string;

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
    if (this.etape.choices) {
      this.activeChoice = this.etape.choices.find(c => c.activ);
      if (this.activeChoice) {
        if (this.activeChoice.goodChoice) {
          this.choiceStatusLogo = 'qcm_result_ok';
        } else {
          this.choiceStatusLogo = 'qcm_result_ko';
        }
      }
    }
  }

  ngOnInit() {
  }

  resultImage(): SafeStyle {
    if (this.activeChoice) {
      return this.sanitizer.bypassSecurityTrustStyle(
        `url(./assets/images/${this.activeChoice.responseImage}.png) center / 100% no-repeat`);
    } else {
      return undefined;
    }
  }

}
