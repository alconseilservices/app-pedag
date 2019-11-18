import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinIndexComponent } from './fin-index/fin-index.component';

const routes: Routes = [
  {path: '', component: FinIndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinRoutingModule { }
