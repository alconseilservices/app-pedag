import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-theme-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css']
})
export class LayerComponent implements OnInit {

  @Input() relativeContainer = false;

  constructor() { }

  ngOnInit() {
  }

}
