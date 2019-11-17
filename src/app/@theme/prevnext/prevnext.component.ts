import { Component, OnInit, Input } from '@angular/core';
import { MissionsService } from 'src/app/@commons/services/missions.service';
import { MissionMobilite } from 'src/app/@commons/models/mission-mobilite';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theme-prevnext',
  templateUrl: './prevnext.component.html',
  styleUrls: ['./prevnext.component.css']
})
export class PrevnextComponent implements OnInit {

  @Input() nextRoute: string;
  @Input() previousRoute: string;
  mission: MissionMobilite;

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

}
