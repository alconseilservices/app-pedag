import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionRoutingModule } from './mission-routing.module';
import { MissionIndexComponent } from './mission-index/mission-index.component';
import { ThemeModule } from '../@theme/theme.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ImageInteractiveComponent } from './image-interactive/image-interactive.component';

@NgModule({
  declarations: [
    MissionIndexComponent,
    ImageInteractiveComponent
  ],
  imports: [
    CommonModule,
    MissionRoutingModule,
    ThemeModule,
    FlexLayoutModule,
    PdfViewerModule,
    HttpClientModule
  ]
})
export class MissionModule { }
