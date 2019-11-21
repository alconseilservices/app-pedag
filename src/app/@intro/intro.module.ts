import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroRoutingModule } from './intro-routing.module';
import { IntroIndexComponent } from './intro-index/intro-index.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ThemeModule } from '../@theme/theme.module';
import { CommonsModule } from '../@commons/commons.module';

@NgModule({
  declarations: [IntroIndexComponent],
  imports: [
    CommonModule,
    IntroRoutingModule,
    FlexLayoutModule,
    ThemeModule,
    CommonsModule
  ]
})
export class IntroModule { }
