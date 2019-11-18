import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionIndexComponent } from './mission-index/mission-index.component';
import { ImageInteractiveComponent } from './image-interactive/image-interactive.component';

const routes: Routes = [
  {
    path: ':id',
    component: MissionIndexComponent,
    children: [
      {
        path: 'etape-image-interactive',
        component: ImageInteractiveComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionRoutingModule { }
