import { Component, OnInit, Input } from '@angular/core';
import { MissionMobilite } from 'src/app/@commons/models/mission-mobilite';
import { MissionMobiliteImgInteractive } from 'src/app/@commons/models/mission-mobilite-etape';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MissionsService } from 'src/app/@commons/services/missions.service';

@Component({
  selector: 'app-mission-image-interactive',
  templateUrl: './image-interactive.component.html',
  styleUrls: ['./image-interactive.component.css']
})
export class ImageInteractiveComponent implements OnInit {

  @Input() mission: MissionMobilite;
  @Input() etape: MissionMobiliteImgInteractive;

  constructor(
    private service: MissionsService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
    ) {
    this.service.missionMobilite()
      .subscribe((mission: MissionMobilite) => {
        this.mission = mission;
        const etapeIndex = parseInt(this.route.parent.snapshot.params.id, 10);
        this.etape = this.mission.etapes[etapeIndex] as MissionMobiliteImgInteractive;
      });

  }

  ngOnInit() {
  }

  background(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(
      `center center / auto no-repeat url(./assets/images/${this.etape.backgroundImage}.png`
    );
  }

}
