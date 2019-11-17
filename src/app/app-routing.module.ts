import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './@home/home.module#HomeModule' },
  { path: 'intro', loadChildren: './@intro/intro.module#IntroModule' },
  { path: 'desc', loadChildren: './@desc/desc.module#DescModule' },
  { path: 'mission', loadChildren: './@mission/mission.module#MissionModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
