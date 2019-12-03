import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

export enum ConfirmedAction {
  CHANGE_ROUTE = 'change_route',
  QUIT_APP = 'quit_app',
  USER_RESPONSE = 'user_response'
}


export interface UserConfirmedAction {
  type: ConfirmedAction;
  message: string;
  route: string | string[];
  response: boolean;
}

@Component({
  selector: 'app-theme-confirm-popin',
  template:
    `<div class="confirm-popin-container">
      <div class="confirm-popin-close" (click)="doConfirm(false)"></div>
      <div class="confirm-popin-text app-text-medium">{{userConfirmedAction.message}}</div>
      <div class="confirm-popin-yes app-btn-label" (click)="doConfirm(true)">Oui</div>
      <div class="confirm-popin-no app-btn-label" (click)="doConfirm(false)">Non</div>
    </div>`
  ,
  styles: [
    `.confirm-popin-container {
      position: absolute;
      width: 50vw;
      height: 28vh;
      background: rgba(60,55,50,.9);
      box-shadow: 0px 0px 30px rgba(32, 32, 32, 0.5);
      border-radius: 15px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }`,
    `.confirm-popin-close {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 5vh;
      height: 5vh;
      background-image: url(./assets/icons/close.png);
      background-repeat: no-repeat;
      background-size: 100%;
      border-radius: 50%;
    }`,
    `.confirm-popin-text {
      position: absolute;
      left: 13.83%;
      right: 11.28%;
      top: 25.54%;
      bottom: 49.85%;
      text-align: center;
      color: white;
      font-size: 2.5vh;
    }`,
    `.confirm-popin-yes {
      position: absolute;
      left: 20.13%;
      right: 51.14%;
      top: 66.15%;
      bottom: 20.31%;
      line-height: 3.9vh;
      text-align: center;
      color: #3C3732;
      background: white;
      border-radius: 100px;
      font-size: 2.5vh;
    }`,
    `.confirm-popin-no {
      position: absolute;
      left: 53.83%;
      right: 17.45%;
      top: 66.15%;
      bottom: 20.31%;
      line-height: 3.9vh;
      text-align: center;
      color: #3C3732;
      background: white;
      border-radius: 100px;
      font-size: 2.5vh;
    }`
  ]
})
export class ConfirmPopinComponent implements OnInit {

  @Input() userConfirmedAction: UserConfirmedAction;
  @Output() userResponse: EventEmitter<UserConfirmedAction> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doConfirm(value: boolean) {
    this.userConfirmedAction.response = value;
    if (this.userConfirmedAction.type === ConfirmedAction.QUIT_APP && value) {
      if (navigator && (navigator as any).app) {
        (navigator as any).app.exitApp();
      } else if (window && window.close) {
        window.close();
      }
    } else if (this.userConfirmedAction.type === ConfirmedAction.CHANGE_ROUTE && value) {
      this.router.navigate(this.userConfirmedAction.route as any[]);
    }
    this.userResponse.emit(this.userConfirmedAction);
  }

}

