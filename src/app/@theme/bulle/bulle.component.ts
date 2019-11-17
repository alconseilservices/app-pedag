import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { MissionCourse } from 'src/app/@commons/models/mission-course';
import { ConseilExpert } from 'src/app/@commons/models/step-conseilsexp';
import { AssetService } from 'src/app/@commons/util/asset.service';

@Component({
  selector: 'app-theme-bulle',
  templateUrl: './bulle.component.html',
  styleUrls: ['./bulle.component.css']
})
export class BulleComponent implements OnInit {

  @Input() width: string;
  @Input() height: string;
  @Input() activMission: MissionCourse;
  @Input() activConseil: ConseilExpert;

  constructor(
    private sanitizer: DomSanitizer,
    public asset: AssetService
  ) { }

  ngOnInit() {
  }

  background(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(
      `center -10% / 70% no-repeat url(` +
      `${this.asset.resolveLocation('./assets/images/', this.activMission.id, this.activConseil.image)}), #88E7C9`
    );
  }

  @HostBinding('style')
  get style() {
    return this.sanitizer.bypassSecurityTrustStyle(
      `--app-theme-bulle-height: ${this.height}; --app-theme-bulle-width: ${this.width};`
    );
  }

}
