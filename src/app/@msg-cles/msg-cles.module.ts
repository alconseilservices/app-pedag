import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MsgClesRoutingModule } from './msg-cles-routing.module';
import { MsgClesIndexComponent } from './msg-cles-index/msg-cles-index.component';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  declarations: [MsgClesIndexComponent],
  imports: [
    CommonModule,
    ThemeModule,
    MsgClesRoutingModule
  ]
})
export class MsgClesModule { }
