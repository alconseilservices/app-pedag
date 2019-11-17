import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserConfirmedAction, ConfirmedAction } from '../confirm-popin/confirm-popin.component';
import { ConfirmPopinService } from '../confirm-popin/confirm-popin.service';


@Component({
  selector: 'app-theme-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() showIcon = false;
  @Output() userConfirmedAction: EventEmitter<UserConfirmedAction> = new EventEmitter();

  showQuitBtn = true;

  constructor(private confirmPopinService: ConfirmPopinService) {}

  ngOnInit() {
  }

  quitApp() {
    this.confirmPopinService.popin({
      type : ConfirmedAction.QUIT_APP,
      message : 'Êtes-vous certain de vouloir quitter l’application ?',
      route: undefined,
      response: false
    } as UserConfirmedAction)
    .subscribe((response: UserConfirmedAction) => {
      if (!response.response) {
        this.confirmPopinService.popout();
      }
    });
  }

  goToHome() {
    this.confirmPopinService.popin({
      type : ConfirmedAction.CHANGE_ROUTE,
      message : 'Êtes-vous certain de vouloir revenir au menu principal ?',
      route: ['/menu'],
      response: false
    } as UserConfirmedAction)
    .subscribe((response: UserConfirmedAction) => {
      this.confirmPopinService.popout();
    });
  }

  maximize(): void {
  }

}
