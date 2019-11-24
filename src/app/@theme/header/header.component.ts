import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserConfirmedAction, ConfirmedAction } from '../confirm-popin/confirm-popin.component';
import { ConfirmPopinService } from '../confirm-popin/confirm-popin.service';
import { Router } from '@angular/router';


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

  constructor(
    private confirmPopinService: ConfirmPopinService,
    private router: Router
  ) {}

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
    this.router.navigate(['home']);
  }

  maximize(): void {
  }

}
