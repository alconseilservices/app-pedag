import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayerStackComponent } from './layer-stack/layer-stack.component';
import { HeaderComponent } from './header/header.component';
import { LayerComponent } from './layer/layer.component';
import { ImgBgComponent } from './img-bg/img-bg.component';
import { CardComponent } from './card/card.component';
import { StepperComponent } from './stepper/stepper.component';
import { ContentComponent } from './content/content.component';
import { PrevnextComponent } from './prevnext/prevnext.component';
import { ConfirmPopinComponent } from './confirm-popin/confirm-popin.component';
import { TabBtnComponent } from './tab-btn/tab-btn.component';
import { TabBtnGrpComponent } from './tab-btn-grp/tab-btn-grp.component';
import { EditablePostitComponent } from './editable-postit/editable-postit.component';
import { FormsModule } from '@angular/forms';
import { DocCardComponent } from './card-doc/card-doc.component';
import { BulleComponent } from './bulle/bulle.component';
import { CardSolutionComponent } from './card-solution/card-solution.component';
import { CardMsgCleComponent } from './card-msg-cle/card-msg-cle.component';
import { WideImgBgComponent } from './wide-img-bg/wide-img-bg.component';
import { SceneDirective } from './directives/scene.directive';
import { SceneElementDirective } from './directives/scene-element.directive';
import { HeaderDirective } from './directives/header.directive';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { WallpaperDirective } from './directives/wallpaper.directive';
import { ProgressComponent } from './progress/progress.component';
import { DimSyncDirective } from './directives/dim-sync.directive';


@NgModule({
  declarations: [
    LayerStackComponent,
    HeaderComponent,
    LayerComponent,
    ImgBgComponent,
    CardComponent,
    StepperComponent,
    ContentComponent,
    PrevnextComponent,
    ConfirmPopinComponent,
    TabBtnComponent,
    TabBtnGrpComponent,
    EditablePostitComponent,
    DocCardComponent,
    BulleComponent,
    CardSolutionComponent,
    CardMsgCleComponent,
    WideImgBgComponent,
    SceneDirective,
    SceneElementDirective,
    HeaderDirective,
    VideoPlayerComponent,
    WallpaperDirective,
    ProgressComponent,
    DimSyncDirective
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
    CardComponent,
    StepperComponent,
    ContentComponent,
    PrevnextComponent,
    ConfirmPopinComponent,
    TabBtnComponent,
    TabBtnGrpComponent,
    EditablePostitComponent,
    DocCardComponent,
    BulleComponent,
    CardSolutionComponent,
    CardMsgCleComponent,
    WideImgBgComponent,
    SceneElementDirective,
    SceneDirective,
    HeaderDirective,
    VideoPlayerComponent,
    WallpaperDirective,
    ProgressComponent,
    DimSyncDirective
  ]
})
export class ThemeModule { }
