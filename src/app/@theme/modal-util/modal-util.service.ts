import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef, ComponentRef, EventEmitter } from '@angular/core';
import { ModalUtilComponent } from './modal-util.component';


@Injectable({
  providedIn: 'root'
})
export class ModalUtilService {

  modalUtilComponentRef: ComponentRef<ModalUtilComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  popin(): EventEmitter<string> {

    this.modalUtilComponentRef = this.componentFactoryResolver
      .resolveComponentFactory(ModalUtilComponent)
      .create(this.injector);

    this.appRef.attachView(this.modalUtilComponentRef.hostView);

    const domElem = (this.modalUtilComponentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);

    return this.modalUtilComponentRef.instance.action;
  }

  popout() {
    this.appRef.detachView(this.modalUtilComponentRef.hostView);
    this.modalUtilComponentRef.destroy();
  }
}
