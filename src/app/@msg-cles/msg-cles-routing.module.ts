import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsgClesIndexComponent } from './msg-cles-index/msg-cles-index.component';

const routes: Routes = [
  {path: '', component: MsgClesIndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MsgClesRoutingModule { }
