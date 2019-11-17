import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appScene]'
})
export class SceneDirective implements OnInit {

  @Input() sceneWidth = '100%';
  @Input() sceneHeight = '100%';
  @Input() sceneWallpaper: string;

  constructor(private el: ElementRef) {
    el.nativeElement.style.position = 'relative';
  }

  ngOnInit() {
    if (this.sceneWidth) {
      this.el.nativeElement.style.width = this.sceneWidth;
      this.el.nativeElement.style.height = this.sceneHeight;
    }
    if (this.sceneWallpaper) {
      this.el.nativeElement.style.backgroundImage = 'url(' + this.sceneWallpaper + ')';
      this.el.nativeElement.style.backgroundRepeat = 'no-repeat';
      this.el.nativeElement.style.backgroundSize = 'cover';
    }
  }

}
