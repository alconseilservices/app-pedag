import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { PrevnextComponent } from './prevnext/prevnext.component';
import { ConfirmPopinComponent } from './confirm-popin/confirm-popin.component';
import { FormsModule } from '@angular/forms';
import { WideImgBgComponent } from './wide-img-bg/wide-img-bg.component';
import { SceneDirective } from './directives/scene.directive';
import { SceneElementDirective } from './directives/scene-element.directive';
import { HeaderDirective } from './directives/header.directive';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { CardMsgCleComponent } from './card-msg-cle/card-msg-cle.component';
import { WallpaperDirective } from './directives/wallpaper.directive';
import { ProgressComponent } from './progress/progress.component';
import { DimSyncDirective } from './directives/dim-sync.directive';
import { InsertComponent } from './insert/insert.component';
import { ModalUtilComponent } from './modal-util/modal-util.component';


@NgModule({
  declarations: [
    HeaderComponent,
    PrevnextComponent,
    ConfirmPopinComponent,
    ModalUtilComponent,
    WideImgBgComponent,
    SceneDirective,
    SceneElementDirective,
    HeaderDirective,
    VideoPlayerComponent,
    WallpaperDirective,
    ProgressComponent,
    DimSyncDirective,
    InsertComponent,
    CardMsgCleComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    PrevnextComponent,
    ConfirmPopinComponent,
    ModalUtilComponent,
    WideImgBgComponent,
    SceneElementDirective,
    SceneDirective,
    HeaderDirective,
    VideoPlayerComponent,
    WallpaperDirective,
    ProgressComponent,
    DimSyncDirective,
    InsertComponent,
    CardMsgCleComponent,
  ]
})
export class ThemeModule { }
