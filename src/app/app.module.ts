import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalErrorHandlerService } from './@commons/util/global-error-handler.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmPopinComponent } from './@theme/confirm-popin/confirm-popin.component';
import { ThemeModule } from './@theme/theme.module';
import { ModalUtilComponent } from './@theme/modal-util/modal-util.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ThemeModule
  ],
  entryComponents: [
    ConfirmPopinComponent,
    ModalUtilComponent
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
