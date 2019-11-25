import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-theme-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  @Input() progress: number;

  constructor() { }

  ngOnInit() {

  }

}
