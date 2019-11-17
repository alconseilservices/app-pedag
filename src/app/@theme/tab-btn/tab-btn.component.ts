import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-theme-tab-btn',
  templateUrl: './tab-btn.component.html',
  styleUrls: ['./tab-btn.component.css']
})
export class TabBtnComponent implements OnInit {

  @Input() label: string;
  @Input() activ: boolean;
  @Output() clicked: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  btnClicked() {
    this.activ = !this.activ;
    this.clicked.emit(this.activ + ':' + this.label);
  }

}
