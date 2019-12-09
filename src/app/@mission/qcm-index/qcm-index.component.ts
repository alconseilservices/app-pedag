import { Component, OnInit, Input } from '@angular/core';
import { MobilityMission } from 'src/app/@commons/models/mobility-mission';
import { MobilityMissionQcm } from 'src/app/@commons/models/mobility-mission-step';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Indication } from 'src/app/@commons/models/generics';

@Component({
  selector: 'app-qcm-index',
  templateUrl: './qcm-index.component.html',
  styleUrls: ['./qcm-index.component.css']
})
export class QcmIndexComponent implements OnInit {

  @Input() mission: MobilityMission;
  @Input() etape: MobilityMissionQcm;
  activeIndice: Indication;
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
        const etapeIndex = parseInt(this.route.parent.snapshot.params.id, 10);
        this.etape = this.mission.steps[etapeIndex] as MobilityMissionQcm;
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

  closeModal() {
    this.activeIndice = undefined;
  }

}
