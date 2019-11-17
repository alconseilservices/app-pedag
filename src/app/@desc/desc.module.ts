import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MursRoutingModule } from './desc-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DescIndexComponent } from './desc-index/desc-index.component';

@NgModule({
  declarations: [
    DescIndexComponent,
  ],
  imports: [
    CommonModule,
    MursRoutingModule,
    ThemeModule,
    FlexLayoutModule,
    DragDropModule
  ]
})
export class DescModule { }
