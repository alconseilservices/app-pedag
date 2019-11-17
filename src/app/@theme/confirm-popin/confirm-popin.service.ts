import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef, ComponentRef, EventEmitter } from '@angular/core';
import { ConfirmPopinComponent, UserConfirmedAction } from './confirm-popin.component';


@Injectable({
  providedIn: 'root'
})
export class ConfirmPopinService {

  confirmPopinComponentRef: ComponentRef<ConfirmPopinComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  popin(userConfirmedAction: UserConfirmedAction): EventEmitter<UserConfirmedAction> {

    this.confirmPopinComponentRef = this.componentFactoryResolver
      .resolveComponentFactory(ConfirmPopinComponent)
      .create(this.injector);

    this.confirmPopinComponentRef.instance.userConfirmedAction = userConfirmedAction;

    this.appRef.attachView(this.confirmPopinComponentRef.hostView);

    const domElem = (this.confirmPopinComponentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);

    return this.confirmPopinComponentRef.instance.userResponse;
  }

  popout() {
    this.appRef.detachView(this.confirmPopinComponentRef.hostView);
    this.confirmPopinComponentRef.destroy();
  }
}
