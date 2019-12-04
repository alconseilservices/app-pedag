import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { AssetService } from 'src/app/@commons/util/asset.service';
import { KeyMessage } from 'src/app/@commons/models/generics';

@Component({
  selector: 'app-theme-card-msg-cle',
  templateUrl: './card-msg-cle.component.html',
  styleUrls: ['./card-msg-cle.component.css']
})
export class CardMsgCleComponent implements OnInit {

  @Input() index: number;
  @Input() activMessage: KeyMessage;

  constructor(private sanitizer: DomSanitizer, public asset: AssetService) { }

  ngOnInit() {
  }

  msgSelected() {
    this.activMessage.visited = true;
  }

  textBackground(): SafeStyle {
    if (this.activMessage.visited) {
      return `rgba(255, 255, 255, 0.85)`;
    } else {
      return undefined;
    }
  }
}
