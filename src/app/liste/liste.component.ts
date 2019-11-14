import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest';
import { GuestsService } from "../guests.service";

import { FormsModule } from '@angular/forms'; 
import { CheckinsService } from '../checkins.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  allGuests: Guest[];
  displayedGuestsList: Guest[];

  filtrerListe(recherche: string){
    // TODO-AMELIO : Ici, un timout pour ne pas jouer trop souvent le filtrage.
    // TODO-AMELIO : Sur la partie HTML, ajouter un bouton pour sortir (d'un coup) de la recherche
    this.displayedGuestsList = this.allGuests.filter(guest => this.correspond(recherche,guest));
    //alert('Vous avez tapé ' + recherche);
  }
  

  constructor(private guestService: GuestsService, private checkinService: CheckinsService) { }

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
    /*
      TODO-AMELIO : Ne pas créer ces variables,
      apeller normStrart directement dans l'expression ||
      (Pour sortir du if le nom ne correspond pas.)
      
      Au fait, cette expression est elle compilée en "vrai if" pas TS ?
      (le type de retour est un boolen (Si ca n'est pas le cas
      il faudra écrire un if explicite pour que cette remarque fasse sens)
    */
    var nomOk = this.normStart(elementListe.nom, recherche);
    var prenomOk = this.normStart(elementListe.prenom, recherche);
    return nomOk || prenomOk;
  }
  
  private sansAccent(str): string {
    return RemoveAccents(str);
  }
  
  
  private normStart(a, b): boolean {
    // a starts whith b en ignorant accents et casse.
    
    /*
      TODO-AMELIO : Subrtinguer a (comparé) à la longuer de b (recherche)
      pour éviter de passer le RemoveAccent sur toute la chaine.
    */
    return this.sansAccent(a.toLowerCase()).startsWith(this.sansAccent(b.toLowerCase()));
  }

}

function RemoveAccents(strAccents) {
  var strAccents = strAccents.split('');
  var strAccentsOut = new Array();
  var strAccentsLen = strAccents.length;
  var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
  var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
  for (var y = 0; y < strAccentsLen; y++) {
    if (accents.indexOf(strAccents[y]) != -1) {
      strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
    } else
      strAccentsOut[y] = strAccents[y];
  }
  var strOut = strAccentsOut.join('');
  return strOut;
}
