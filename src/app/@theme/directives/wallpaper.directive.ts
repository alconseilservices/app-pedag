import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appWallpaper]'
})
export class WallpaperDirective implements OnInit {

  @Input('appWallpaper') wallpaperFile: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.el.nativeElement.style.backgroundImage = 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(' + this.wallpaperFile + ')';
    this.el.nativeElement.style.backgroundSize = 'cover';
    this.el.nativeElement.style.backgroundRepeat = 'no-repeat';
  }

}
