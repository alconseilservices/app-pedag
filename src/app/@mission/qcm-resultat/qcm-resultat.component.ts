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
  activeChoice: Choice;

  choiceFaceImage: string;
  choiceFaceName: string;
  choiceImage: string;
  choiceHintText: string;

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
    this.activeChoice = this.etape.choices.find(c => c.activ);
    if (this.activeChoice.goodChoice) {
      this.choiceFaceImage = this.etape.faceGoodChoice;
      this.choiceFaceName = this.etape.faceNameGoodChoice;
      this.choiceImage = this.etape.imageGoodChoice;
      this.choiceHintText = this.etape.hintGoodChoice;
    } else {
      this.choiceFaceImage = this.etape.faceBadChoice;
      this.choiceFaceName = this.etape.faceNameBadChoice;
      this.choiceImage = this.etape.imageBadChoice;
      this.choiceHintText = this.etape.hintBadChoice;
    }
  }

  ngOnInit() {
  }

  resultImage(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(
      `url(./../../../assets/images/${this.choiceImage}.png) center / 100% no-repeat`);
  }

}
