import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionIndexComponent } from './mission-index/mission-index.component';

const routes: Routes = [
  {
    path: '',
    component: MissionIndexComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionRoutingModule { }
