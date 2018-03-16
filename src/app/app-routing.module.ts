import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListeComponent } from "./liste/liste.component";

const routes = [
  {path: 'liste', component: ListeComponent},
  { path: '', redirectTo: '/liste', pathMatch: 'full' },
]

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}