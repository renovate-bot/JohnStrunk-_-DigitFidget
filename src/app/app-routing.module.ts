import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component'
import { GameboardComponent } from './gameboard/gameboard.component'
import { MenuComponent } from './menu/menu.component'

const routes: Routes = [
  { path: '', redirectTo: '/menu/main', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'game/:size', component: GameboardComponent },
  { path: 'menu/:menu-name', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
