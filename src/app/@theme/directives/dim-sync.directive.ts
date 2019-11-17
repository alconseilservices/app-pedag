import { Directive, ElementRef, Input, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[appDimSync]'
})
export class DimSyncDirective implements AfterViewChecked {

  @Input() widthRatio: string;
  @Input() heightRatio: string;
  @Input() squareFitParentHeight: boolean;

  constructor(private el: ElementRef) { }

  ngAfterViewChecked() {
    if (this.squareFitParentHeight) {
      this.el.nativeElement.style.width = this.el.nativeElement.parentElement.style.height;
      this.el.nativeElement.style.height = this.el.nativeElement.parentElement.style.height;
    }
  }
}
