import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { AssetService } from 'src/app/@commons/util/asset.service';
import { MessageCle } from 'src/app/@commons/models/generics';

@Component({
  selector: 'app-theme-card-msg-cle',
  templateUrl: './card-msg-cle.component.html',
  styleUrls: ['./card-msg-cle.component.css']
})
export class CardMsgCleComponent implements OnInit {

  @Input() index: number;
  @Input() activMessage: MessageCle;

  constructor(private sanitizer: DomSanitizer, public asset: AssetService) { }

  ngOnInit() {
  }

  background(): SafeStyle {
    if (this.activMessage.visited) {
      return this.sanitizer.bypassSecurityTrustStyle(
        `${this.activMessage.wx} ${this.activMessage.wy} ` +
        `no-repeat url('./assets/images/'${this.activMessage.wimg})` +
        `,rgba(255, 255, 255, 0.6)`
      );
    } else {
      return this.sanitizer.bypassSecurityTrustStyle(
        `${this.activMessage.wx} ${this.activMessage.wy} ` +
        `no-repeat url('./assets/images/'${this.activMessage.wimg})`
      );
    }
  }

  msgSelected() {
    this.activMessage.visited = true;
  }

}
