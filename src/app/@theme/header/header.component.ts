import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserConfirmedAction, ConfirmedAction } from '../confirm-popin/confirm-popin.component';
import { ConfirmPopinService } from '../confirm-popin/confirm-popin.service';
import { Router } from '@angular/router';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { ElectronService } from 'ngx-electron';


@Component({
  selector: 'app-theme-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() iconName: string;
  @Input() showIcon = false;
  @Output() userConfirmedAction: EventEmitter<UserConfirmedAction> = new EventEmitter();

  showQuitBtn = true;

  constructor(
    private confirmPopinService: ConfirmPopinService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private electronService: ElectronService
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
    this.electronService.ipcRenderer.sendSync('switchFullScreen');
  }

  titleIconBackground(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(
      `url(./assets/icons/${this.iconName}.png) center / cover no-repeat`
    );
  }

}
