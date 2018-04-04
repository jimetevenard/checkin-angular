import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListeComponent } from "./liste/liste.component";
import { ResaComplementComponent } from './resa-complement/resa-complement.component';
import { ResetCheckinsComponent } from "./reset-checkins/reset-checkins.component";

const routes = [
  {path: 'liste', component: ListeComponent},
  {path: 'resa-plus/:id', component: ResaComplementComponent},
  {path: 'reset', component: ResetCheckinsComponent },
  { path: '', redirectTo: '/liste', pathMatch: 'full' },
]

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}