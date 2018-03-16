import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest';
import { GuestsService } from "../guests.service";

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  allGuests: Guest[];
  displayedGuestsList: Guest[];

  filtrerListe(recherche: string){
    this.displayedGuestsList = this.allGuests.filter(guest => this.correspond(recherche,guest));
  }
  

  constructor(private guestService: GuestsService) { }

  loadGuests(): void {

    this.guestService.getAllGuests().subscribe(guests => {
      this.allGuests = guests;
      this.displayedGuestsList = guests;
    });

  }

  ngOnInit() {

    this.loadGuests();
  }

  private correspond(recherche, elementListe): boolean {
    var nomOk = this.normStart(elementListe.nom, recherche);
    var prenomOk = this.normStart(elementListe.prenom, recherche);
    return nomOk || prenomOk;
  }
  
  private sansAccent(str): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  }
  
  private normStart(a, b): boolean {
    // a starts whith b en ignorant accents et casse.
    return this.sansAccent(a.toLowerCase()).startsWith(this.sansAccent(b.toLowerCase()));
  }

}
