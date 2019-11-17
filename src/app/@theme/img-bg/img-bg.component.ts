import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-theme-img-bg',
  templateUrl: './img-bg.component.html',
  styleUrls: ['./img-bg.component.css']
})
export class ImgBgComponent implements OnInit {

  @Input() showOverlay  = false;
  @Input() imagePath: string;
  @Input() fullScreen: boolean;

  constructor() { }

  ngOnInit() {
  }

}
