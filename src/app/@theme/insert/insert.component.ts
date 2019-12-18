import { Component, OnInit, HostListener, ViewChild, ElementRef, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { HintText } from 'src/app/@commons/models/generics';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-theme-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit, OnChanges {

  insertBtn = 'insert_btn_notif';
  @Input() insertText: HintText;
  @Input() insertOpenState: boolean;
  @Output() opened: EventEmitter<void> = new EventEmitter();

  @ViewChild('insertBtnElm') el: ElementRef;

  /**
   *
   */
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.refreshInsertBtn();
      }
    });
  }

  ngOnChanges() {
    this.refreshInsertBtn();
  }

  /**
   *
   */
  ngOnInit() {
    this.refreshInsertBtn();
  }

  refreshInsertBtn(): void {
    this.insertBtn = this.insertText.visited ? 'insert_btn_notif_visited' : 'insert_btn_notif';
  }

  /**
   *
   */
  openClose(): void {
    this.insertOpenState = !this.insertOpenState;
    if (this.insertOpenState) {
      this.insertText.visited = true;
      this.insertBtn = 'insert_btn_opened';
      this.opened.emit(null);
    } else {
      this.insertBtn = this.insertText.visited ? 'insert_btn_notif_visited' : 'insert_btn_notif';
    }
  }

}
