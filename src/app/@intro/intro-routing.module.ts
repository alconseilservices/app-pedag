import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroIndexComponent } from './intro-index/intro-index.component';

const routes: Routes = [
  {path: '', component: IntroIndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroRoutingModule { }
