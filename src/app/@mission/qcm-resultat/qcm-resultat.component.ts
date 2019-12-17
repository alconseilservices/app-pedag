import { Component, OnInit, Input } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { Choice, Indication } from 'src/app/@commons/models/generics';
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
  activeIndice: Indication;

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
          this.etape.completed = true;
          if (!this.activeChoice.dirty) { // add choice score to player score if first choice made
            this.mission.playerScore += this.activeChoice.score;
            this.activeChoice.dirty = true;
          }
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
        `url(./assets/mission/${this.activeChoice.responseImage}.png) center / 100% no-repeat`);
    } else {
      return undefined;
    }
  }

  closeModal() {
    this.activeIndice = undefined;
  }

  videoPath(indice: Indication): string {
    return `./assets/mission/${indice.video}.mp4`;
  }

  computeIndicationVisibility(indice: Indication): SafeStyle {
    if (indice.visited || !indice.hidden) {
      return '1';
    } else {
      return '0';
    }
  }

  computeWidth(indice: Indication): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(((indice.width * 100) / 1229) + '%');
  }

  computeHeight(indice: Indication): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(((indice.height * 100) / 681) + '%');
  }

  computeX(indice: Indication): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(((indice.x * 100) / 1229) + '%');
  }

  computeY(indice: Indication): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(((indice.y * 100) / 681) + '%');
  }

  showIndice(indice: Indication) {
    indice.visited = true;
    this.activeIndice = indice;
  }

  computeImageAsBg(): SafeStyle {
    if (this.activeIndice) {
      return this.sanitizer.bypassSecurityTrustStyle(
        `url(./assets/mission/${this.activeIndice.image.file}.png) center / cover no-repeat`
      );
    } else {
      return undefined;
    }
  }

}
