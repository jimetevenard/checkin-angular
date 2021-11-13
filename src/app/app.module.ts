import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { GuestsService } from "./guests.service";



import { AppComponent } from './app.component';
import { ListeComponent } from './liste/liste.component';
import { AppRoutingModule } from './/app-routing.module';
import { ResaComplementComponent } from './resa-complement/resa-complement.component';
import { CheckinsService } from './checkins.service';
import { WindowRefService } from './window-ref.service';
import { ResetCheckinsComponent } from './reset-checkins/reset-checkins.component';
import { EnvironmentService } from './environment.service';


@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    ResaComplementComponent,
    ResetCheckinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ GuestsService, CheckinsService, WindowRefService, EnvironmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
