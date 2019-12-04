import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { MobilityMission } from 'src/app/@commons/models/mobility-mission';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theme-prevnext',
  templateUrl: './prevnext.component.html',
  styleUrls: ['./prevnext.component.css']
})
export class PrevnextComponent implements OnInit {

  @Input() customBtnLabel: string;
  @Input() customBtnEnabled: boolean;
  @Input() customBtnRoute: string;
  @Input() nextRoute: string;
  @Input() previousRoute: string;
  @Output() customBtnClicked: EventEmitter<void> = new EventEmitter();
  mission: MobilityMission;

  constructor(private service: MissionsService, private router: Router) { }

  ngOnInit() {
    this.service.missionMobilite()
      .subscribe(mission => this.mission = mission);
  }

  changeRoute(type: string): void {
    if (type === 'previous') {
      this.router.navigate([this.previousRoute]);
    } else {
      this.router.navigate([this.nextRoute]);
    }
  }

  showBtn(type: string): boolean {
    if (type === 'previous') {
      return this.previousRoute !==  undefined;
    } else {
      return this.nextRoute !==  undefined;
    }
  }

  customBtnClick(): void {
    this.customBtnClicked.emit(null);
  }

  computeCustomBtnBgColor(): string {
    if (this.customBtnEnabled) {
      return '#A1006B';
    } else {
      return '#3C3732';
    }
  }

}
