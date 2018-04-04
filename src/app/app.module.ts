import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GuestsService } from "./guests.service";



import { AppComponent } from './app.component';
import { ListeComponent } from './liste/liste.component';
import { AppRoutingModule } from './/app-routing.module';
import { ResaComplementComponent } from './resa-complement/resa-complement.component';
import { CheckinsService } from './checkins.service';
import { WindowRefService } from './window-ref.service';
import { ResetCheckinsComponent } from './reset-checkins/reset-checkins.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    ResaComplementComponent,
    ResetCheckinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ GuestsService, CheckinsService, WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
