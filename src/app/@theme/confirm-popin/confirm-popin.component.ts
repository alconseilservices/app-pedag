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
      <div class="confirm-popin-face"></div>
      <div class="confirm-popin-text app-text-medium">{{userConfirmedAction.message}}</div>
      <div class="confirm-popin-yes app-btn-label" (click)="doConfirm(true)">Oui</div>
      <div class="confirm-popin-no app-btn-label" (click)="doConfirm(false)">Non</div>
    </div>`
  ,
  styles: [
    `.confirm-popin-container {
      position: absolute;
      width: 38.802083333333333vw;
      height: 27.083333333333333vh;
      background: rgba(255, 255, 255, 0.95);
      box-shadow: 0px 4px 10px #09357A;
      border-radius: 15px;
      top: 11.666666666666667vh;
      left: 30.520833333333333vw;
    }`,
    `.confirm-popin-face {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 5vh;
      height: 5vh;
      background-color: #88E7C9;
      background-image: url(./assets/images/face.png);
      background-repeat: no-repeat;
      background-size: 100%;
      box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.7);
      border-radius: 50%;
    }`,
    `.confirm-popin-text {
      position: absolute;
      left: 13.83%;
      right: 11.28%;
      top: 25.54%;
      bottom: 49.85%;
      text-align: center;
      color: #09357A;
    }`,
    `.confirm-popin-yes {
      position: absolute;
      left: 20.13%;
      right: 51.14%;
      top: 66.15%;
      bottom: 20.31%;
      line-height: 3.5vh;
      text-align: center;
      color: #FFFFFF;
      background: #09357A;
      border-radius: 100px;
    }`,
    `.confirm-popin-no {
      position: absolute;
      left: 53.83%;
      right: 17.45%;
      top: 66.15%;
      bottom: 20.31%;
      line-height: 3.5vh;
      text-align: center;
      color: #FFFFFF;
      background: #09357A;
      border-radius: 100px;
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

