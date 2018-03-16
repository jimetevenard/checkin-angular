import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GuestsService } from "./guests.service";



import { AppComponent } from './app.component';
import { ListeComponent } from './liste/liste.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ListeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ GuestsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
