import { Component, OnInit, Input } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { Choice } from 'src/app/@commons/models/generics';
import { MissionMobilite } from 'src/app/@commons/models/mission-mobilite';
import { MissionMobiliteQcm } from 'src/app/@commons/models/mission-mobilite-etape';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-qcm-resultat',
  templateUrl: './qcm-resultat.component.html',
  styleUrls: ['./qcm-resultat.component.css']
})
export class QcmResultatComponent implements OnInit {

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

  resultImage(): SafeStyle {
    const choice = this.etape.choices.filter(c => c.activ)[0];
    if (choice) {
      if (choice.goodChoice) {
        return this.sanitizer.bypassSecurityTrustStyle(
          `url(./../../../assets/images/${this.etape.imageGoodChoice}.png) center / 100% no-repeat`);
      } else {
        return this.sanitizer.bypassSecurityTrustStyle(
          `url(./../../../assets/images/${this.etape.imageBadChoice}.png) center / 100% no-repeat`);
      }
    } else {
      return undefined;
    }
  }

}
