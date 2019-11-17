import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Doc } from 'src/app/@commons/models/step-analysedoc';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-theme-card-doc',
  templateUrl: './card-doc.component.html',
  styleUrls: ['./card-doc.component.css']
})
export class DocCardComponent implements OnInit {

  @Input() width: string;
  @Input() height: string;
  @Input() activDoc: Doc;
  @Input() index: number;
  @Output() docSelected: EventEmitter<number> = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  @HostBinding('style')
  get style() {
    return this.sanitizer.bypassSecurityTrustStyle(
      `--app-theme-card-doc-height: ${this.height}; --app-theme-card-doc-width: ${this.width};`
    );
  }

  docClicked() {
    this.docSelected.emit(this.index);
  }

}
