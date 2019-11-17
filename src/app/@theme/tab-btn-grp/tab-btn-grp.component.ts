import { Component, OnInit, QueryList, AfterContentInit, ContentChildren, Output, EventEmitter } from '@angular/core';
import { TabBtnComponent } from '../tab-btn/tab-btn.component';

@Component({
  selector: 'app-theme-tab-btn-grp',
  templateUrl: './tab-btn-grp.component.html',
  styleUrls: ['./tab-btn-grp.component.css']
})
export class TabBtnGrpComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabBtnComponent) tabsBtns: QueryList<TabBtnComponent>;
  @Output() tabActivated: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.tabsBtns.forEach((tab: TabBtnComponent) => {
      tab.clicked.subscribe((value: string) => {
        this.tabsBtns.forEach((tab2: TabBtnComponent, index: number) => {
          tab2.activ = tab2.label === value.split(':')[1];
          if (tab2.activ) {
            this.tabActivated.emit(index);
          }
        });
      });
    });
  }

}
