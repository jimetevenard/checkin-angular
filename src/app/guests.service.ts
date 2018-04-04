import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Guest } from "./guest";
import { CheckinsService } from './checkins.service';

@Injectable()
export class GuestsService {

  // DUR TEMPORAIRE !!

  // TODO le futur
  // * GuestService (cette classe) qui contien la liste en mémoire
  // * un autre Service dédié HttpServiceProvider qui va chercher 

  private guests: Guest[] = [];

  getAllGuests(): Observable<Guest[]> {

    this.eventuallyLoadGuests();
    return of(this.guests);
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
    // MethodName Award

    if (this.guests.length < 1) {
      TEST_GUESTS.forEach(jsonGuest => {
        // TMP wrap json/objet typescript

        let g = new Guest(jsonGuest.nom, jsonGuest.prenom, jsonGuest.mail, jsonGuest.id, jsonGuest.checkins);
        if((!g.isCheckedIn()) && this.checkinsService.isCheckedIn(g.id)){
          g.checkins++;
        }
        this.guests.push(g);
      });
    }
  }


  constructor(private checkinsService: CheckinsService) { 

  }

}

const TEST_GUESTS = [{"nom":"alioua","prenom":"nacira","mail":"nacirapointaliouaatgmailpointcom","checkins":0,"id":8},
{"nom":"André","prenom":"Léa","mail":"andre_leaathotmailpointfr","checkins":0,"id":77},
{"nom":"Anot","prenom":"Jean","mail":"valentinerinneratgmailpointcom","checkins":0,"id":118},
{"nom":"Asher","prenom":"Sam","mail":"nataliepointgpointdennisatgmailpointcom","checkins":0,"id":24},
{"nom":"Balsas George","prenom":"Lola","mail":"guillermopointvdbatorangepointfr","checkins":0,"id":12},
{"nom":"BARRES","prenom":"ELISA","mail":"lacourdcontesatgmailpointcom","checkins":0,"id":5},
{"nom":"BECKER ","prenom":"Charlin ","mail":"charlinepointbecker12atgmailpointcom","checkins":0,"id":53},
{"nom":"Benichou","prenom":"Jeanne","mail":"royerdianeathotmailpointcom","checkins":0,"id":18},
{"nom":"Berroche","prenom":"Prisca","mail":"priscapointberrocheatbibliosansfrontierespointorg","checkins":0,"id":14},
{"nom":"Blanc ","prenom":"Felix ","mail":"felixpointblancatgadzpointorg","checkins":0,"id":86},
{"nom":"Bonichon","prenom":"Marie","mail":"hors-resa","checkins":0,"id":128},
{"nom":"Bouchez","prenom":"Joséphine","mail":"Carlito","checkins":0,"id":135},
{"nom":"Bouchez","prenom":"Joséphine","mail":"Carlito","checkins":0,"id":136},
{"nom":"Bouissou","prenom":"Anais","mail":"jeannepointhiretatgmailpointcom","checkins":0,"id":104},
{"nom":"BOUVET","prenom":"Michael","mail":"bouvetmichael94atgmailpointcom","checkins":0,"id":90},
{"nom":"Brin","prenom":"Adèle ","mail":"priscapointberrocheatbibliosansfrontierespointorg","checkins":0,"id":13},
{"nom":"Brissy","prenom":"Xavier","mail":"menassepointcamilleatgmailpointcom","checkins":0,"id":46},
{"nom":"Cahn","prenom":"Clémentine ","mail":"clementinepointcahnathotmailpointcom","checkins":0,"id":60},
{"nom":"calvez","prenom":"stephanie","mail":"stephcalatyahoopointfr","checkins":0,"id":95},
{"nom":"Cancelier","prenom":"Hortense","mail":"slemasneatemdpointfr","checkins":0,"id":114},
{"nom":"Carbonne","prenom":"Manon","mail":"manonpointcarbonneatgmailpointcom","checkins":0,"id":33},
{"nom":"Caubert","prenom":"Firmin","mail":"firmin_caubertathotmailpointfr","checkins":0,"id":83},
{"nom":"Caubert","prenom":"Firmin","mail":"firmin_caubertathotmailpointfr","checkins":0,"id":84},
{"nom":"Cayol","prenom":"Mathilde","mail":"marinepointseguraatsciencespopointfr","checkins":0,"id":22},
{"nom":"Cayotte","prenom":"Celine","mail":"stephanepointcayotteatgmailpointcom","checkins":0,"id":54},
{"nom":"Cayotte","prenom":"Stéphane","mail":"stephanepointcayotteatgmailpointcom","checkins":0,"id":55},
{"nom":"Chabré","prenom":"Samuel","mail":"Carlito","checkins":0,"id":133},
{"nom":"Chenieau","prenom":"Paul","mail":"manonpointcarbonneatgmailpointcom","checkins":0,"id":32},
{"nom":"Chevalier","prenom":"Quentin","mail":"chevalierquentatgmailpointcom","checkins":0,"id":31},
{"nom":"Chevron ","prenom":"Mélanie ","mail":"chevronpointmelanieatgmailpointcom","checkins":0,"id":10},
{"nom":"Collon Gardner","prenom":"Lionel David ","mail":"mariedebarthesatgmailpointcom","checkins":0,"id":112},
{"nom":"Cousin","prenom":"Anne Laure","mail":"etiennededbathotmailpointcom","checkins":0,"id":110},
{"nom":"de Barthès","prenom":"Marie","mail":"mariedebarthesatgmailpointcom","checkins":0,"id":113},
{"nom":"De Bisschop","prenom":"Sixtine","mail":"sixtinedbathotmailpointfr","checkins":0,"id":69},
{"nom":"De Bisschop","prenom":"Sixtine","mail":"sixtinedbathotmailpointfr","checkins":0,"id":70},
{"nom":"de Bréchard","prenom":"Louis","mail":"clementpointdebosqueatedupointescpeuropepointeu","checkins":0,"id":109},
{"nom":"de David Beauregard","prenom":"Etienne","mail":"etiennededbathotmailpointcom","checkins":0,"id":111},
{"nom":"de Lapasse","prenom":"Victoire","mail":"victoiredelapasseatgmailpointcom","checkins":0,"id":37},
{"nom":"Defourny","prenom":"Vincent","mail":"vincentpointdefournyathotmailpointcom","checkins":0,"id":56},
{"nom":"Defourny","prenom":"Mercedes ","mail":"astridpointdefournyatgmailpointcom","checkins":0,"id":57},
{"nom":"Defourny","prenom":"Astrid","mail":"astridpointdefournyatgmailpointcom","checkins":0,"id":58},
{"nom":"Delacote","prenom":"Timothée","mail":"timotheepointdelacoteatgmailpointcom","checkins":0,"id":103},
{"nom":"DELFOSSE","prenom":"MARTINE","mail":"lacourdcontesatgmailpointcom","checkins":0,"id":0},
{"nom":"DELFOSSE","prenom":"JULIETTE","mail":"lacourdcontesatgmailpointcom","checkins":0,"id":1},
{"nom":"Delmotte","prenom":"Claire","mail":"Mimi","checkins":0,"id":129},
{"nom":"Delmotte","prenom":"Claire","mail":"Mimi","checkins":0,"id":130},
{"nom":"Dennis","prenom":"Natalie","mail":"nataliepointgpointdennisatgmailpointcom","checkins":0,"id":25},
{"nom":"Depery","prenom":"Marine","mail":"lacombepointanaisatgmailpointcom","checkins":0,"id":44},
{"nom":"DESBOUIGES","prenom":"EMMA","mail":"lacourdcontesatgmailpointcom","checkins":0,"id":4},
{"nom":"Déviante","prenom":"Sophie","mail":"chevalierquentatgmailpointcom","checkins":0,"id":29},
{"nom":"Duchemin","prenom":"Camille","mail":"Carlito","checkins":0,"id":134},
{"nom":"Dupont","prenom":"Margaux","mail":"Jim","checkins":0,"id":137},
{"nom":"Dupuy","prenom":"Sam","mail":"lacombepointanaisatgmailpointcom","checkins":0,"id":43},
{"nom":"Escalade","prenom":"Isabelle","mail":"Jim","checkins":0,"id":138},
{"nom":"Escalade","prenom":"Isabelle","mail":"Jim","checkins":0,"id":139},
{"nom":"Espérabé-Vignau","prenom":"Constance","mail":"celestinepointsmodisathotmailpointfr","checkins":0,"id":120},
{"nom":"Esteve","prenom":"Audrey","mail":"audreypointesteveatedhecpointcom","checkins":0,"id":35},
{"nom":"Eyssautier","prenom":"Camille","mail":"maelysvesir08atgmailpointcom","checkins":0,"id":15},
{"nom":"FAHY","prenom":"Pierre-Marie","mail":"pierrepointmpointfahyatgmailpointcom","checkins":0,"id":38},
{"nom":"FAHY","prenom":"Marine","mail":"FAHYpointMARINEpointVatGMAILpointCOM","checkins":0,"id":39},
{"nom":"FAHY","prenom":"Marine","mail":"FAHYpointMARINEpointVatGMAILpointCOM","checkins":0,"id":40},
{"nom":"Flamant ","prenom":"Quentin ","mail":"charlinepointbecker12atgmailpointcom","checkins":0,"id":52},
{"nom":"Fruchard","prenom":"Julia","mail":"tfruchardatunowpointfr","checkins":0,"id":65},
{"nom":"Fruchard","prenom":"Thibault ","mail":"tfruchardatunowpointfr","checkins":0,"id":66},
{"nom":"Gailly","prenom":"Sara","mail":"mathildepointpatoureauxatgmailpointcom","checkins":0,"id":48},
{"nom":"Galey","prenom":"Adèle","mail":"adelegaleyatgmailpointcom","checkins":0,"id":91},
{"nom":"Galey","prenom":"Adèle","mail":"adelegaleyatgmailpointcom","checkins":0,"id":92},
{"nom":"Galmard","prenom":"Elise","mail":"elisegalmardathotmailpointcom","checkins":0,"id":79},
{"nom":"GERARD","prenom":"CHARLOTTE","mail":"lacourdcontesatgmailpointcom","checkins":0,"id":2},
{"nom":"Gersberg ","prenom":"Melina","mail":"memia67athotmailpointfr","checkins":0,"id":100},
{"nom":"GiSSEROT","prenom":"Quentin","mail":"lucreziazitoatgmailpointcom","checkins":0,"id":63},
{"nom":"Guérin","prenom":"Tilia","mail":"thomasatrecubepointfr","checkins":0,"id":20},
{"nom":"Guérin","prenom":"Thomas","mail":"thomasatrecubepointfr","checkins":0,"id":21},
{"nom":"GUIGNARD","prenom":"Cécile","mail":"cecilepointguignardatessecpointedu","checkins":0,"id":97},
{"nom":"Heguo","prenom":"Alice","mail":"clementpointdebosqueatedupointescpeuropepointeu","checkins":0,"id":108},
{"nom":"Hillion","prenom":"Claire","mail":"bastienpointteinturieratoutlookpointcom","checkins":0,"id":88},
{"nom":"Hiret","prenom":"Jeanne","mail":"jeannepointhiretatgmailpointcom","checkins":0,"id":105},
{"nom":"Hiver","prenom":"Ariane","mail":"Tutur","checkins":0,"id":131},
{"nom":"Hiver","prenom":"Nicolas","mail":"Tutur","checkins":0,"id":132},
{"nom":"JOBERT","prenom":"ELEA","mail":"lacourdcontesatgmailpointcom","checkins":0,"id":3},
{"nom":"Kerkeling","prenom":"Marie","mail":"kerkelingmarieatgmailpointcom","checkins":0,"id":98},
{"nom":"Ku","prenom":"Tzu-Chun","mail":"lacombepointanaisatgmailpointcom","checkins":0,"id":42},
{"nom":"Lacombe","prenom":"Anaïs","mail":"lacombepointanaisatgmailpointcom","checkins":0,"id":45},
{"nom":"Lambin","prenom":"Alexandre","mail":"lambinpointalexandreatgmailpointcom","checkins":0,"id":71},
{"nom":"Lambin","prenom":"Alexandre","mail":"lambinpointalexandreatgmailpointcom","checkins":0,"id":72},
{"nom":"Lambin","prenom":"Alexandre","mail":"lambinpointalexandreatgmailpointcom","checkins":0,"id":73},
{"nom":"Lambin","prenom":"Alexandre","mail":"lambinpointalexandreatgmailpointcom","checkins":0,"id":74},
{"nom":"Lang","prenom":"Geoffroy ","mail":"adelepointsaconneyatgmailpointcom","checkins":0,"id":50},
{"nom":"Laval","prenom":"Charlotte","mail":"hors-resa","checkins":0,"id":126},
{"nom":"Le Coz ","prenom":"Julie","mail":"juliepointlecoz0atgmailpointcom","checkins":0,"id":87},
{"nom":"le Masne","prenom":"Sophie","mail":"slemasneatemdpointfr","checkins":0,"id":115},
{"nom":"Lecercle","prenom":"Arthur","mail":"lecercleatutopiespointcom","checkins":0,"id":101},
{"nom":"Leficher","prenom":"Pia","mail":"lacourdcontesatgmailpointcom","checkins":0,"id":7},
{"nom":"LESACHEY","prenom":"Lucas","mail":"cecilepointguignardatessecpointedu","checkins":0,"id":96},
{"nom":"Lesteven","prenom":"Yuna","mail":"yunapointlestevenathotmailpointfr","checkins":0,"id":117},
{"nom":"Lesteven ","prenom":"Yuna","mail":"yunapointlestevenathotmailpointfr","checkins":0,"id":116},
{"nom":"Lunet","prenom":"Etienne ","mail":"elisegalmardathotmailpointcom","checkins":0,"id":78},
{"nom":"Lusson","prenom":"Juliette","mail":"lacombepointanaisatgmailpointcom","checkins":0,"id":41},
{"nom":"lusson","prenom":"Juliette ","mail":"clementinepointcahnathotmailpointcom","checkins":0,"id":59},
{"nom":"Maigne","prenom":"Marion","mail":"sorokayannatyahoopointfr","checkins":0,"id":81},
{"nom":"MENARD ","prenom":"Colette ","mail":"chevronpointmelanieatgmailpointcom","checkins":0,"id":9},
{"nom":"Ménasse","prenom":"Camille","mail":"menassepointcamilleatgmailpointcom","checkins":0,"id":47},
{"nom":"Mernissi","prenom":"Rita","mail":"audreypointesteveatedhecpointcom","checkins":0,"id":34},
{"nom":"Mézière","prenom":"Astrid","mail":"clementpointdebosqueatedupointescpeuropepointeu","checkins":0,"id":106},
{"nom":"Midy","prenom":"Julien","mail":"timotheepointdelacoteatgmailpointcom","checkins":0,"id":102},
{"nom":"Miltat","prenom":"Quentin","mail":"qpointmiltatatlivepointfr","checkins":0,"id":75},
{"nom":"MONCLIN","prenom":"ELODIE","mail":"elodiepointmonclinatyahoopointfr","checkins":0,"id":62},
{"nom":"Monnot","prenom":"Pauline ","mail":"hors-resa","checkins":0,"id":127},
{"nom":"Morren ","prenom":"Anne","mail":"felixpointblancatgadzpointorg","checkins":0,"id":85},
{"nom":"Mouchtaq","prenom":"Yassine","mail":"elodiepointmonclinatyahoopointfr","checkins":0,"id":61},
{"nom":"Oger","prenom":"Morgane","mail":"morganeogeratgmailpointcom","checkins":0,"id":123},
{"nom":"Patoureaux","prenom":"Mathilde","mail":"mathildepointpatoureauxatgmailpointcom","checkins":0,"id":49},
{"nom":"Perrachon","prenom":"Amaury","mail":"morganeogeratgmailpointcom","checkins":0,"id":122},
{"nom":"Person","prenom":"Thomas","mail":"clementpointdebosqueatedupointescpeuropepointeu","checkins":0,"id":107},
{"nom":"Rappaport","prenom":"Florian","mail":"florianpointrappaportatgadzpointorg","checkins":0,"id":93},
{"nom":"Rappaport","prenom":"Florian","mail":"florianpointrappaportatgadzpointorg","checkins":0,"id":94},
{"nom":"Rasa","prenom":"Nivo","mail":"riana_nivoatyahoopointfr","checkins":0,"id":67},
{"nom":"Rasa","prenom":"Riana","mail":"riana_nivoatyahoopointfr","checkins":0,"id":68},
{"nom":"Rey grange","prenom":"Arthur","mail":"kerkelingmarieatgmailpointcom","checkins":0,"id":99},
{"nom":"Rimbaud","prenom":"Jules","mail":"rimbaudpointjulatgmailpointcom","checkins":0,"id":17},
{"nom":"Rinner","prenom":"Valentine","mail":"valentinerinneratgmailpointcom","checkins":0,"id":119},
{"nom":"Rosenthal","prenom":"Thomas ","mail":"chevalierquentatgmailpointcom","checkins":0,"id":30},
{"nom":"Rousseau","prenom":"Maxime","mail":"chevalierquentatgmailpointcom","checkins":0,"id":28},
{"nom":"Royer","prenom":"Diane","mail":"royerdianeathotmailpointcom","checkins":0,"id":19},
{"nom":"Rubinstein","prenom":"Anouk","mail":"anoukpointrubinsteinatgmailpointcom","checkins":0,"id":76},
{"nom":"Saconney","prenom":"Adèle","mail":"adelepointsaconneyatgmailpointcom","checkins":0,"id":51},
{"nom":"Segura","prenom":"Marine","mail":"marinepointseguraatsciencespopointfr","checkins":0,"id":23},
{"nom":"Smodis","prenom":"Célestine","mail":"celestinepointsmodisathotmailpointfr","checkins":0,"id":121},
{"nom":"Soroka","prenom":"Yann ","mail":"sorokayannatyahoopointfr","checkins":0,"id":82},
{"nom":"Souplet","prenom":"Claudette","mail":"FAHYpointMARINEpointVatGMAILpointCOM","checkins":0,"id":26},
{"nom":"Souplet","prenom":"Georges","mail":"FAHYpointMARINEpointVatGMAILpointCOM","checkins":0,"id":27},
{"nom":"Tahiri","prenom":"Maïa","mail":"lacourdcontesatgmailpointcom","checkins":0,"id":6},
{"nom":"Taïbi","prenom":"Samira","mail":"samirapointtaibiatessecpointedu","checkins":0,"id":124},
{"nom":"Taïbi","prenom":"Samira","mail":"samirapointtaibiatessecpointedu","checkins":0,"id":125},
{"nom":"Teinturier","prenom":"Bastien","mail":"bastienpointteinturieratoutlookpointcom","checkins":0,"id":89},
{"nom":"van delft","prenom":"Bastien","mail":"guillermopointvdbatorangepointfr","checkins":0,"id":11},
{"nom":"Vésir","prenom":"Maelys","mail":"maelysvesir08atgmailpointcom","checkins":0,"id":16},
{"nom":"Wuilleme","prenom":"Pauline ","mail":"victoiredelapasseatgmailpointcom","checkins":0,"id":36},
{"nom":"Zeboudj","prenom":"Olivia","mail":"oliviapointzeboudjatgmailpointcom","checkins":0,"id":80},
{"nom":"ZITO","prenom":"Lucrezia","mail":"lucreziazitoatgmailpointcom","checkins":0,"id":64}];
