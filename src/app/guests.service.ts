import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Guest } from "./guest";
import { CheckinsService } from './checkins.service';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class GuestsService {

  // TODO Gestion Asynchrone encore très approximative !!
  // Liste vierge si accès direct Resa+ 

  private guestLoaded:boolean = false;

  private loadedGuests:Guest[];

  private guestsObservableList:Observable<Guest[]>;

  private guestObserver:Subscriber<Guest[]>;

  updateList(list:Guest[]){
    this.guestObserver.next(list);
  }

  // 
private filteredGuestList:Observable<Guest[]> = new Observable((observer) => {
    this.filterdGuestObserver = observer;
});

private filterdGuestObserver:Subscriber<Guest[]>;

// WIP
tmpGuestURL = 'assets/liste.json';
  
fetchGuests(){
      return this.http.get(this.tmpGuestURL);
}




  getAllGuests(): Observable<Guest[]> {
    if(this.guestLoaded){
        return of(this.loadedGuests);
    } else {
      this.eventuallyLoadGuests();
      return this.guestsObservableList;
    }
    
  }

  getAssociatedGuests(id: number): Observable<Guest[]> {
    // on prend l'id comme critère et non le mail ou l'objet Guest
    // car il faut quelque chose qu'on puisse passer en URL

  
    this.getAllGuests().subscribe(guests => {
      console.log(guests);
      let mail = guests.find(g => g.id == id).mail;
      this.filterdGuestObserver.next(guests.filter(g => g.mail == mail));
    });
    return this.filteredGuestList;
  }

  checkInGuest(guest: Guest){
    guest.checkIn();
    this.checkinsService.setCheckedIn(guest.id);
  }

 

  private eventuallyLoadGuests() {

    // TODO ça ca va dans la construction de l'observableGuest ;)
    if(!this.guestLoaded){
      this.fetchGuests().subscribe(data => {
        this.parseGuestArray(data);
        this.guestLoaded = true;
     });
    }
   
  }


  private parseGuestArray(jsonArray: any){
    let parsedGuests:Guest[] = [];
    let i = 0;
    jsonArray.forEach(jsonGuest => {
      parsedGuests.push(this.guestFromJson(jsonGuest,i));
      i++;
    });
    console.log(parsedGuests.length + " guests récupérés à partir du JSON");
    this.updateList(parsedGuests);
    this.loadedGuests = parsedGuests;

  }

  private guestFromJson(jsonGuest: any, id: number) : Guest{
    let g = new Guest(jsonGuest.nom, jsonGuest.prenom, jsonGuest.mail, id, 0);

    if((!g.isCheckedIn()) && this.checkinsService.isCheckedIn(g.id)){
      // i.e. if guest I has been stored as checked-in in local storage
      g.checkins++;
    }
    return g;
  }


  constructor(private checkinsService: CheckinsService, private http: HttpClient) {
    this.guestsObservableList = new Observable((observer) => {
      console.log("guestsObservableList Instancé");
      this.guestObserver = observer;
    });
    console.log("Dans le constructeur du GuestService")
  }

}

