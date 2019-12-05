import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { MobilityMission } from 'src/app/@commons/models/mobility-mission';


@Component({
  selector: 'app-theme-modal-util',
  template:
    `<div class="modal-util-container">
      <div class="modal-util-container-main" fxLayout="column" fxLayoutGap="40px">
        <img class="modal-util-close" (click)="doExit()" src="./assets/icons/close.png">
        <div fxLayout="row" fxLayoutAlign="40px" fxLayoutAlign="center end">
          <div class="modal-util-title-icon"></div>
          <div class="modal-util-title-text">Crédits</div>
        </div>
        <div class="modal-util-credits-text-main" [innerHTML]="mission.creditsMain"></div>
        <div fxLayout="row" fxLayoutGap="40px">
          <div fxLayout="column">
            <div class="modal-util-credits-logo-transilien"></div>
            <div class="modal-util-credits-text-main" [innerHTML]="mission.creditsTransilien"></div>
          </div>
          <div fxLayout="column">
            <div class="modal-util-credits-logo-tralalere"></div>
            <div class="modal-util-credits-text-main" [innerHTML]="mission.creditsTransilien"></div>
          </div>
        </div>
        <div class="modal-util-credits-text-main" [innerHTML]="mission.creditsPicto"></div>
      </div>
    </div>`
  ,
  styles: [
    `.modal-util-container {
      position: absolute;
      width: 80vw;
      height: 75vh;
      background: rgba(60,55,50,.9);
      box-shadow: 0px 0px 30px rgba(32, 32, 32, 0.5);
      border-radius: 15px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }`,
    `.modal-util-container-main {
      position: absolute;
      overflow: auto;
      height: 100%;
      width: 100%;
      padding: 3vh;
    }`,
    `.modal-util-close {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 5vh;
      height: 5vh;
    }`,
    `.modal-util-title-icon {
      background: url(./../../../assets/icons/credits_white.png) center / cover no-repeat;
      height: 5vh;
      width: 5vh;
    }`,
    `.modal-util-title-text {
      font-family: 'Avenir-Heavy';
      font-size: 4vh;
      line-height: 3vh;
      margin-left: 20px;
      color: white;
    }`,
    `.modal-util-credits-text-main {
      font-family: 'Avenir';
      font-size: 2.8vh;
      color: white;
    }`,
    `.modal-util-credits-logo-transilien {
      overflow: hidden;
      background: url('./../../../assets/images/Nvx_logo_TN_2019_CMJN_complet 1.png') no-repeat;
      height: 8vh;
    }`,
    `.modal-util-credits-logo-tralalere {
      overflow: hidden;
      background: url('./../../../assets/images/tralalere_logo.png') left / 30% no-repeat;
      height: 8vh;
    }`
  ]
})
export class ModalUtilComponent implements OnInit {

  mission: MobilityMission;
  @Output() action: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private router: Router,
    private service: MissionsService
  ) {
    this.service.missionMobilite()
      .subscribe((mission: MobilityMission) => this.mission = mission);
  }

  ngOnInit() {
  }

  doExit() {
    this.action.emit('exit');
  }

}

