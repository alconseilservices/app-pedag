import { Component, OnInit, Input } from '@angular/core';
import { MissionCourse } from 'src/app/@commons/models/mission-course';
import { Router } from '@angular/router';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ConfirmPopinService } from '../confirm-popin/confirm-popin.service';
import { ConfirmedAction, UserConfirmedAction } from '../confirm-popin/confirm-popin.component';

@Component({
  selector: 'app-theme-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() mission: MissionCourse;

  constructor(
    private sanitize: DomSanitizer,
    private router: Router,
    private missionsService: MissionsService,
    private confirmPopinService: ConfirmPopinService) { }

  ngOnInit() {
  }

  goToMission(introduction: boolean) {
    this.missionsService.mission(this.mission.id, introduction)
      .subscribe((miss) => {
        if (miss.visited) {
          this.confirmPopinService.popin({
            type : ConfirmedAction.USER_RESPONSE,
            message : 'Voulez vous reprendre la mission sauvegardée ?',
            route: undefined,
            response: false
          } as UserConfirmedAction)
          .subscribe((response: UserConfirmedAction) => {
            if (response.response === true) {
              this.missionsService.activateMission(this.mission.id, introduction);
              this.router.navigate(['mission']);
            } else {
              this.missionsService.activateMission(this.mission.id, introduction, true);
              this.router.navigate(['mission']);
            }
            this.confirmPopinService.popout();
          });
        } else {
          this.missionsService.activateMission(this.mission.id, introduction);
          this.router.navigate(['mission']);
        }
      });
  }

  safeLevelBgImage(): SafeStyle {
    return this.sanitize.bypassSecurityTrustStyle('url(assets/pictos/' + this.mission.level + '.png');
  }

  safeBgImageStyle(): SafeStyle {
    return this.sanitize.bypassSecurityTrustStyle('url(assets/images/' + this.mission.id + '/menu_card_bg.png');
  }

}
