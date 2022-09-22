import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { Guest } from "./guest";
import { CheckinsService } from './checkins.service';
import { EnvironmentService } from './environment.service';

@Injectable()
export class GuestsService {

  // TODO Gestion Asynchrone encore très approximative !!
  // Liste vierge si accès direct Resa+ 

  private guests: Guest[] = [];

  private listId: String;


  fetchGuests(){
    return Observable.create((observer) => {
      this.environmentService.getEnvironmentConfig().subscribe((config) => {
        this.http.get(config.guestsResourceURL).subscribe((guestsData) => {
          observer.next(guestsData);
        });
      })
    });
  }


  getAllGuests(): Observable<Guest[]> {

    this.eventuallyLoadGuests();
    return of(this.guests); // BOF BOF..
  }

  getAssociatedGuests(id: string): Observable<Guest[]> {
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

  private parseGuestArray(jsonData: any){   
    this.listId = jsonData.id;
    jsonData.guests.forEach(jsonGuest => {
      this.guests.push(this.guestFromJson(jsonGuest));
    });
  }

  private guestFromJson(jsonGuest: any) : Guest{
    let fullId = this.listId + '-' + jsonGuest.id;
    let g = new Guest(jsonGuest.nom, jsonGuest.prenom, jsonGuest.mail, fullId, 0);

    if((!g.isCheckedIn()) && this.checkinsService.isCheckedIn(g.id)){
      // i.e. if guest I has been stored as checked-in in local storage
      g.checkins++;
    }
    return g;
  }


  constructor(
    private checkinsService: CheckinsService,
    private http: HttpClient,
    private environmentService: EnvironmentService) { 

  }

}

