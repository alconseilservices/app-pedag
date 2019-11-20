import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-theme-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  visited = false;
  insertBtn = 'insert_btn_notif';

  @ViewChild('insertBtnElm') el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click', ['$event.target'])
  clickInside(div) {
    if (this.el.nativeElement.contains(div)) {
      this.visited = true;
      this.insertBtn = 'insert_btn_opened';
    }
  }

  @HostListener('document:click', ['$event.target'])
  clickOutside(div) {
    if (!this.el.nativeElement.contains(div)) {
      this.insertBtn = this.visited ? 'insert_btn_notif_visited' : 'insert_btn_notif';
    }
  }

}
