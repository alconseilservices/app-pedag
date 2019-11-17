import { Component, OnInit, Input } from '@angular/core';
import { MessageCle } from 'src/app/@commons/models/step-messagescles';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { AssetService } from 'src/app/@commons/util/asset.service';

@Component({
  selector: 'app-theme-card-msg-cle',
  templateUrl: './card-msg-cle.component.html',
  styleUrls: ['./card-msg-cle.component.css']
})
export class CardMsgCleComponent implements OnInit {

  @Input() missionId: string;
  @Input() index: number;
  @Input() activMessage: MessageCle;

  constructor(private sanitizer: DomSanitizer, public asset: AssetService) { }

  ngOnInit() {
  }

  background(): SafeStyle {
    if (this.activMessage.visited) {
      return this.sanitizer.bypassSecurityTrustStyle(
        `#FFFFFF`
      );
    } else {
      return this.sanitizer.bypassSecurityTrustStyle(
        `${this.activMessage.wx} ${this.activMessage.wy} ` +
        `no-repeat url(${this.asset.resolveLocation('./assets/images/', this.missionId, this.activMessage.wimg)})` +
        `,rgba(253, 255, 254, 0.3)`
      );
    }
  }

  msgSelected() {
    this.activMessage.visited = true;
  }

}
