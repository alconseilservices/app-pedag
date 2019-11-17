import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescIndexComponent } from './desc-index/desc-index.component';

const routes: Routes = [
  {
    path: '',
    component: DescIndexComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MursRoutingModule { }
