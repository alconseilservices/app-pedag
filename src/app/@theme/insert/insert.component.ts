import { Component, OnInit, HostListener, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { HintText } from 'src/app/@commons/models/generics';

@Component({
  selector: 'app-theme-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  insertBtn = 'insert_btn_notif';
  @Input() insertText: HintText;
  @Output() opened: EventEmitter<void> = new EventEmitter();

  @ViewChild('insertBtnElm') el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('enterScene')
  clickInside() {
    this.insertText.visited = true;
    this.insertBtn = 'insert_btn_opened';
    this.opened.emit(null);
  }

  @HostListener('exitScene')
  clickOutside(div) {
    this.insertBtn = this.insertText.visited ? 'insert_btn_notif_visited' : 'insert_btn_notif';
  }

}
