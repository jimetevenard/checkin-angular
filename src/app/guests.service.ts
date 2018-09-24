import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Guest } from "./guest";
import { CheckinsService } from './checkins.service';

@Injectable()
export class GuestsService {

  // TODO Gestion Asynchrone encore très approximative !!
  // Liste vierge si accès direct Resa+ 

  private guests: Guest[] = [];

  // WIP
  tmpGuestURL = 'assets/liste.json';
  
  fetchGuests(){
      return this.http.get(this.tmpGuestURL);
  }


  getAllGuests(): Observable<Guest[]> {

    this.eventuallyLoadGuests();
    return of(this.guests); // BOF BOF..
  }

  getAssociatedGuests(id: number): Observable<Guest[]> {
    // on prend l'id comme critère et non le mail ou l'objet Guest
    // car il faut quelque chose qu'on puisse passer en URL

    this.eventuallyLoadGuests();
    let mail = this.guests.find(g => g.id == id).mail;
    return of(this.guests.filter(g => g.mail == mail));
  }

  checkInGuest(guest: Guest){
    guest.checkIn();
    this.checkinsService.setCheckedIn(guest.id);
  }

  clearGuests(){
    this.guests = [];
  }

  private eventuallyLoadGuests() {
    if(!this.guestLoaded()){
      this.fetchGuests().subscribe(data => {
        this.parseGuestArray(data);
     });
    }
   
  }

  private guestLoaded(): boolean {
    return this.guests.length > 0;
  }

  private parseGuestArray(jsonArray: any){
    let i = 0;
    jsonArray.forEach(jsonGuest => {
      this.guests.push(this.guestFromJson(jsonGuest,i));
      i++;
    });
  }

  private guestFromJson(jsonGuest: any, id: number) : Guest{
    let g = new Guest(jsonGuest.nom, jsonGuest.prenom, jsonGuest.mail, id, 0);

    if((!g.isCheckedIn()) && this.checkinsService.isCheckedIn(g.id)){
      // i.e. if guest I has been stored as checked-in in local storage
      g.checkins++;
    }
    console.log("Yes ! Created Guest who's name is "+g.nom);
    return g;
  }


  constructor(private checkinsService: CheckinsService, private http: HttpClient) { 

  }

}

