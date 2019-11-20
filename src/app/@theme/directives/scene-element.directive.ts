import { Directive, Input, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSceneElement]'
})
export class SceneElementDirective implements OnInit {

  element: any;

  @Input() sceneElTop: string;
  @Input() sceneElLeft: string;

  @Input() sceneElInsertX: boolean;

  @Input() sceneElCenterH: boolean;
  @Input() sceneElCenterV: boolean;

  @Input() sceneElWidth: string;
  @Input() sceneElWidthRatio: string;
  @Input() sceneElHeight: string;

  @Input() sceneElPadTop: string;
  @Input() sceneElPadBottom: string;
  @Input() sceneElPadLeft: string;
  @Input() sceneElPadRight: string;

  constructor(private el: ElementRef) {

  }

  ngOnInit() {

    if (this.el.nativeElement.nodeName.toLowerCase().startsWith('app-')) {
      this.element = this.el.nativeElement.firstChild;
    } else {
      this.element = this.el.nativeElement;
    }

    this.element.style.position = 'absolute';
    this.element.style.top = this.sceneElTop;

    if (this.sceneElInsertX) {
      this.element.style.left = '100vw';
    } else {
      this.element.style.left =  this.sceneElLeft;
    }

    if (this.sceneElWidth) {
      this.element.style.width = this.sceneElWidth;
    }
    if (this.sceneElWidthRatio) {
      this.element.style.width = 'calc(' + this.sceneElHeight + ' * ' + this.sceneElWidthRatio +  ')';
    }
    if (this.sceneElHeight) {
      this.element.style.height = this.sceneElHeight;
    }

    if (this.sceneElPadTop) {
      this.element.style.paddingTop = this.sceneElPadTop;
    }
    if (this.sceneElPadBottom) {
      this.element.style.paddingBottom = this.sceneElPadBottom;
    }
    if (this.sceneElPadLeft) {
      this.element.style.paddingLeft = this.sceneElPadLeft;
    }
    if (this.sceneElPadRight) {
      this.element.style.paddingRight = this.sceneElPadRight;
    }

    if (this.sceneElCenterH) {
      this.element.style.left = '50%';
      this.element.style.transform = 'translateX(-50%)';
    }

    if (this.sceneElCenterV) {
      this.element.style.top = '50%';
      this.element.style.transform += ' translateY(-50%)';
    }

  }

  @HostListener('click', ['$event.target'])
  clickInside(div) {
    if (this.element.contains(div) && this.sceneElInsertX) {
      this.element.style.left =  this.sceneElLeft;
    }
  }

  @HostListener('document:click', ['$event.target'])
  clickOutside(div) {
    if (!this.element.contains(div) && this.sceneElInsertX) {
      this.element.style.left =  '100vw';
    }
  }

  /**
   * manage left offset
   */
  manageLeftOffset(): void {
    if (this.sceneElInsertX) {
      if (this.element.style.left !== '100vw') {
        this.element.style.left = '100vw';
      } else {
        this.element.style.left =  this.sceneElLeft;
      }
    } else {
      this.element.style.left =  this.sceneElLeft;
    }
  }

}
