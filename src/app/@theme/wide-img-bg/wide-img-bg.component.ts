import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-theme-wide-img-bg',
  templateUrl: './wide-img-bg.component.html',
  styleUrls: ['./wide-img-bg.component.css']
})
export class WideImgBgComponent implements OnInit {

  @Input() imagePath: string;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  background(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`no-repeat url(${this.imagePath})`);
  }

}
