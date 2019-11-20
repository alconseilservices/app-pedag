import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './@home/home.module#HomeModule' },
  { path: 'intro', loadChildren: './@intro/intro.module#IntroModule' },
  { path: 'desc', loadChildren: './@desc/desc.module#DescModule' },
  { path: 'etapes', loadChildren: './@mission/mission.module#MissionModule' },
  { path: 'fin', loadChildren: './@fin/fin.module#FinModule' },
  { path: 'msg-cles', loadChildren: './@msg-cles/msg-cles.module#MsgClesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
