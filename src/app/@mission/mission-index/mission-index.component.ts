import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { MissionMobilite } from 'src/app/@commons/models/mission-mobilite';
import { MissionMobiliteEtape, MissionMobiliteQcm, Path } from 'src/app/@commons/models/mission-mobilite-etape';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

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
    private sanitizer: DomSanitizer,
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
    } else if (String(this.router.url).endsWith(Path.ETAPE_QCM_RESULTAT) && this.isBadChoiceMade()) {
      return 'Prendre une autre décision';
    }
  }

  computeNext(): string {
    if (!(
      String(this.router.url).endsWith(Path.ETAPE_QCM_INDEX)
      || String(this.router.url).endsWith(Path.ETAPE_QCM_DECISION)
      || (String(this.router.url).endsWith(Path.ETAPE_QCM_RESULTAT) && this.isBadChoiceMade())
    )) {
      if (!isNaN(this.etapeIndex) && (this.etapeIndex + 1 ) < this.mission.etapes.length) {
        return 'etapes/' + (this.etapeIndex + 1) +  '/' + this.mission.etapes[this.etapeIndex + 1].path;
      } else {
        return 'fin';
      }
    }
  }
  /**
   *
   */
  computePrevious(): string {
    if (String(this.router.url).endsWith(Path.ETAPE_QCM_DECISION)) {
      return 'etapes/' + this.etapeIndex +  '/' + Path.ETAPE_QCM_RESULTAT;
    } else if (!isNaN(this.etapeIndex) && this.etapeIndex > 0) {
      return 'etapes/' + (this.etapeIndex - 1) +  '/' + this.mission.etapes[this.etapeIndex - 1].path;
    } else {
      return 'desc';
    }
  }

  onClickCustomBtn(): void {
    if (String(this.router.url).endsWith(Path.ETAPE_QCM_INDEX)) {
      this.router.navigate(['etapes', this.etapeIndex, 'qcm-decision']);
    } else if (String(this.router.url).endsWith(Path.ETAPE_QCM_RESULTAT)) {
      this.router.navigate(['etapes', this.etapeIndex, 'qcm-decision']);
    }
  }

  showBoxShadow(): SafeStyle {
    if (String(this.router.url).endsWith(Path.ETAPE_QCM_DECISION)) {
      return this.sanitizer.bypassSecurityTrustStyle('none');
    } else {
      return this.sanitizer.bypassSecurityTrustStyle('0px 0px 20px #3c3732');
    }
  }

  isGoodChoiceMade(): boolean {
    if (
      this.etape
      && this.etape.choices
      && this.etape.choices.find(c => c.activ)
      && this.etape.choices.find(c => c.activ).goodChoice) {
      return true;
    } else {
      return false;
    }
  }

  isBadChoiceMade(): boolean {
    if (
      this.etape
      && this.etape.choices
      && this.etape.choices.find(c => c.activ)
      && !this.etape.choices.find(c => c.activ).goodChoice) {
      return true;
    } else {
      return false;
    }
  }

  computeProgress(): number {
    return ((this.etapeIndex + 1) * 100) / this.mission.etapes.length;
  }

}
