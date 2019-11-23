import { Directive, ElementRef, Input, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[appDimSync]'
})
export class DimSyncDirective implements AfterViewChecked {

  @Input() syncDim: boolean;
  @Input() syncHeight: string;
  @Input() syncHeightRatio: number;
  @Input() syncWidth: string;
  @Input() syncWidthRatio: number;
  @Input() widthRatio: string;
  @Input() heightRatio: string;
  @Input() squareFitParentHeight: boolean;

  constructor(private el: ElementRef) { }

  ngAfterViewChecked() {
    if (this.syncDim) {
      if (this.syncHeight) {
        this.el.nativeElement.style.height = this.syncHeight;
        this.el.nativeElement.style.width = 'calc(' + this.syncHeight + ' * ' + this.syncWidthRatio +  ')';
      }
      if (this.syncWidth) {
        this.el.nativeElement.style.width = this.syncWidth;
        this.el.nativeElement.style.height = 'calc(' + this.syncWidth + ' * ' + this.syncHeightRatio +  ')';
      }
    }
    if (this.squareFitParentHeight) {
      this.el.nativeElement.style.width = this.el.nativeElement.parentElement.style.height;
      this.el.nativeElement.style.height = this.el.nativeElement.parentElement.style.height;
    }
  }
}
