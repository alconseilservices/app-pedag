import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayerStackComponent } from './layer-stack/layer-stack.component';
import { HeaderComponent } from './header/header.component';
import { LayerComponent } from './layer/layer.component';
import { ImgBgComponent } from './img-bg/img-bg.component';
import { ContentComponent } from './content/content.component';
import { PrevnextComponent } from './prevnext/prevnext.component';
import { ConfirmPopinComponent } from './confirm-popin/confirm-popin.component';
import { TabBtnComponent } from './tab-btn/tab-btn.component';
import { TabBtnGrpComponent } from './tab-btn-grp/tab-btn-grp.component';
import { FormsModule } from '@angular/forms';
import { WideImgBgComponent } from './wide-img-bg/wide-img-bg.component';
import { SceneDirective } from './directives/scene.directive';
import { SceneElementDirective } from './directives/scene-element.directive';
import { HeaderDirective } from './directives/header.directive';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { WallpaperDirective } from './directives/wallpaper.directive';
import { ProgressComponent } from './progress/progress.component';
import { DimSyncDirective } from './directives/dim-sync.directive';
import { InsertComponent } from './insert/insert.component';


@NgModule({
  declarations: [
    LayerStackComponent,
    HeaderComponent,
    LayerComponent,
    ImgBgComponent,
    ContentComponent,
    PrevnextComponent,
    ConfirmPopinComponent,
    TabBtnComponent,
    TabBtnGrpComponent,
    WideImgBgComponent,
    SceneDirective,
    SceneElementDirective,
    HeaderDirective,
    VideoPlayerComponent,
    WallpaperDirective,
    ProgressComponent,
    DimSyncDirective,
    InsertComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    LayerStackComponent,
    LayerComponent,
    ImgBgComponent,
    ContentComponent,
    PrevnextComponent,
    ConfirmPopinComponent,
    TabBtnComponent,
    TabBtnGrpComponent,
    WideImgBgComponent,
    SceneElementDirective,
    SceneDirective,
    HeaderDirective,
    VideoPlayerComponent,
    WallpaperDirective,
    ProgressComponent,
    DimSyncDirective,
    InsertComponent
  ]
})
export class ThemeModule { }
