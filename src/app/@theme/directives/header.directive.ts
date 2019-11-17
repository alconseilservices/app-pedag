import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeader]'
})
export class HeaderDirective implements OnInit {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#3C3732';
    el.nativeElement.style.opacity = '0.9';
  }

  ngOnInit() {
    this.el.nativeElement.style.borderBottomRightRadius = this.el.nativeElement.style.height;
    this.el.nativeElement.style.borderBottomLeftRadius = this.el.nativeElement.style.height;
  }

}
