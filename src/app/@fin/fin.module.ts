import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinRoutingModule } from './fin-routing.module';
import { FinIndexComponent } from './fin-index/fin-index.component';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  declarations: [
    FinIndexComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    FinRoutingModule,
  ]
})
export class FinModule { }
