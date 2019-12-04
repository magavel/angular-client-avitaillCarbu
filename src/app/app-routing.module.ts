import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //on pointe vers le module sur lequel on souhaite faire du lazyloading
  //permet de faire du lazyloading sur le route
  // le lazy loading est une fonction qui fait appel à la fonction import()
  // puis si on a récuperer un module m retour le module StationsModule
  {path: '', loadChildren: ()=> import('./stations/stations.module').then(m=>m.StationsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
