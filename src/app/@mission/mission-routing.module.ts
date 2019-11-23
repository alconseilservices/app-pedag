import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionIndexComponent } from './mission-index/mission-index.component';
import { ImageInteractiveComponent } from './image-interactive/image-interactive.component';
import { QcmIndexComponent } from './qcm-index/qcm-index.component';
import { QcmDecisionComponent } from './qcm-decision/qcm-decision.component';
import { QcmResultatComponent } from './qcm-resultat/qcm-resultat.component';

const routes: Routes = [
  {
    path: ':id',
    component: MissionIndexComponent,
    children: [
      {
        path: 'image-interactive',
        component: ImageInteractiveComponent,
      },
      {
        path: 'qcm-situation',
        component: QcmIndexComponent,
      },
      {
        path: 'qcm-decision',
        component: QcmDecisionComponent,
      },
      {
        path: 'qcm-resultat',
        component: QcmResultatComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionRoutingModule { }
