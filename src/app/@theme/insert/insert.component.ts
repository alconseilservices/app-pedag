import { Component, OnInit, HostListener, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-theme-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  visited = false;
  insertBtn = 'insert_btn_notif';
  @Input() insertText: string;
  @Output() opened: EventEmitter<void> = new EventEmitter();

  @ViewChild('insertBtnElm') el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('enterScene')
  clickInside() {
    this.visited = true;
    this.insertBtn = 'insert_btn_opened';
    this.opened.emit(null);
  }

  @HostListener('exitScene')
  clickOutside(iv) {
    this.insertBtn = this.visited ? 'insert_btn_notif_visited' : 'insert_btn_notif';
  }

}
