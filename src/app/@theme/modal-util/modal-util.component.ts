import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-theme-modal-util',
  template:
    `<div class="modal-util-container">

    </div>`
  ,
  styles: [
    `.modal-util-container {
      position: absolute;
      width: 75vw;
      height: 65vh;
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
    }`,
    `.confirm-popin-yes {
      position: absolute;
      left: 20.13%;
      right: 51.14%;
      top: 66.15%;
      bottom: 20.31%;
      line-height: 3.5vh;
      text-align: center;
      color: #3C3732;
      background: white;
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
      color: #3C3732;
      background: white;
      border-radius: 100px;
    }`
  ]
})
export class ModalUtilComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doExit() {
  }

}

