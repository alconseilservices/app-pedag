import { Component, OnInit, HostListener, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-theme-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  visited = false;
  insertBtn = 'insert_btn_notif';
  @Input() insertText: string;

  @ViewChild('insertBtnElm') el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('enterScene')
  clickInside() {
    this.visited = true;
    this.insertBtn = 'insert_btn_opened';
  }

  @HostListener('exitScene')
  clickOutside(iv) {
    this.insertBtn = this.visited ? 'insert_btn_notif_visited' : 'insert_btn_notif';
  }

}
