import { Component, OnInit, Input } from '@angular/core';
import { MobilityMission } from 'src/app/@commons/models/mobility-mission';
import { MobilityMissionInteractiveImage } from 'src/app/@commons/models/mobility-mission-step';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd, Event } from '@angular/router';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { Indication } from 'src/app/@commons/models/generics';

@Component({
  selector: 'app-mission-image-interactive',
  templateUrl: './image-interactive.component.html',
  styleUrls: ['./image-interactive.component.css']
})
export class ImageInteractiveComponent implements OnInit {

  @Input() mission: MobilityMission;
  @Input() etape: MobilityMissionInteractiveImage;
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
    this.etape = this.mission.steps[this.etapeIndex] as MobilityMissionInteractiveImage;
  }

  ngOnInit() {
  }

  background(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(
      `center center / auto no-repeat url(./assets/mission/${this.etape.backgroundImage}.png`
    );
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
