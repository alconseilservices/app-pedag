import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeRoutingModule } from './home-routing.module';
import { HomeIndexComponent } from './home-index/home-index.component';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  declarations: [HomeIndexComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    ThemeModule
  ]
})
export class HomeModule { }
