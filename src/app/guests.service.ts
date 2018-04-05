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

const TEST_GUESTS = [{"nom":"Agez","prenom":"Vincent","mail":"vincagezabagmailpointcom","id":0,"checkins":0},
{"nom":"alioua","prenom":"nacira","mail":"nacirapointaliouaabagmailpointcom","id":1,"checkins":0},
{"nom":"alioua","prenom":"nacira","mail":"nacirapointaliouaabagmailpointcom","id":2,"checkins":0},
{"nom":"allix","prenom":"clémence ","mail":"clems1221abahotmailpointcom","id":3,"checkins":0},
{"nom":"Allys","prenom":"Auberie ","mail":"auberiepointallysabahotmailpointfr","id":4,"checkins":0},
{"nom":"Andrieu","prenom":"Louise","mail":"andrieupointlouiseabagmailpointcom","id":5,"checkins":0},
{"nom":"Andrieu","prenom":"Louise","mail":"andrieupointlouiseabagmailpointcom","id":6,"checkins":0},
{"nom":"Arguairolles","prenom":"Florian","mail":"Florianpointarguairollesabagmailpointcom","id":7,"checkins":0},
{"nom":"Ba","prenom":"Diary","mail":"Carlito","id":8,"checkins":0},
{"nom":"Bacquet ","prenom":"Odile","mail":"odilebacquetabahotmailpointfr","id":9,"checkins":0},
{"nom":"Bailleul Sampebogo","prenom":"Mathilde","mail":"bailleul_mathildeabayahoopointfr","id":10,"checkins":0},
{"nom":"Barre","prenom":"Vianney","mail":"charlottepointsaglierabagmailpointcom","id":11,"checkins":0},
{"nom":"BASSET","prenom":"Sonia","mail":"soniapointbassetabahotmailpointfr","id":12,"checkins":0},
{"nom":"Becker","prenom":"Charline","mail":"cpointbeckerabamrjcpointorg","id":13,"checkins":0},
{"nom":"Becquelin","prenom":"Romain","mail":"Jim","id":14,"checkins":0},
{"nom":"Bertic","prenom":"Damien","mail":"damienpointberticabagmailpointcom","id":15,"checkins":0},
{"nom":"beyl","prenom":"gabrielle","mail":"mpointbourgerieabamrjcpointorg","id":16,"checkins":0},
{"nom":"BIAUD","prenom":"MARJORIE","mail":"marjoriepointbiaudabagmailpointcom","id":17,"checkins":0},
{"nom":"Biou","prenom":"Nabila","mail":"lucilepointgueninabagmailpointcom","id":18,"checkins":0},
{"nom":"Boisvieux","prenom":"Philip","mail":"agathepointchaillotabaskemapointedu","id":19,"checkins":0},
{"nom":"Bonichon","prenom":"Marie","mail":"mariepointbonichonabahotmailpointcom","id":20,"checkins":0},
{"nom":"Bonichon","prenom":"Marie","mail":"mariepointbonichonabahotmailpointcom","id":21,"checkins":0},
{"nom":"Bonnet","prenom":"Margaux","mail":"ineslakroufabahotmailpointfr","id":22,"checkins":0},
{"nom":"Bossard","prenom":"Justine","mail":"Jim","id":23,"checkins":0},
{"nom":"Bouchardeau","prenom":"Louis","mail":"louispointbouchardeauabagmailpointcom","id":24,"checkins":0},
{"nom":"bouchat","prenom":"adele","mail":"bertillepomabahotmailpointcom","id":25,"checkins":0},
{"nom":"Bourasset","prenom":"Céline","mail":"celinepointbourassetabagmailpointcom","id":26,"checkins":0},
{"nom":"Bourgerie","prenom":"Mathilde","mail":"mpointbourgerieabamrjcpointorg","id":27,"checkins":0},
{"nom":"Brion","prenom":"Ben","mail":"hortensepointmdfabagmailpointcom","id":28,"checkins":0},
{"nom":"Cadiou","prenom":"Matthieu ","mail":"agathepointjobertabahotmailpointfr","id":29,"checkins":0},
{"nom":"CANTO","prenom":"Pauline","mail":"cantopaulineabagmailpointcom","id":30,"checkins":0},
{"nom":"Cappe","prenom":"Sophie","mail":"marycapabahotmailpointFR","id":31,"checkins":0},
{"nom":"Cappe de Baillon","prenom":"Marie","mail":"marycapabahotmailpointfr","id":32,"checkins":0},
{"nom":"Carbonne","prenom":"Manon","mail":"Carlito","id":33,"checkins":0},
{"nom":"Cargouët ","prenom":"Corentin ","mail":"anouckpointduboisabagmailpointcom","id":34,"checkins":0},
{"nom":"Cas","prenom":"Paul","mail":"marycapabahotmailpointFR","id":35,"checkins":0},
{"nom":"Chaillot","prenom":"Agathe","mail":"agathepointchaillotabaskemapointedu","id":36,"checkins":0},
{"nom":"Chevalier","prenom":"Anne","mail":"annepointchevallierabagmailpointcom","id":37,"checkins":0},
{"nom":"Chevalier","prenom":"Anne","mail":"annepointchevallierabagmailpointcom","id":38,"checkins":0},
{"nom":"colin","prenom":"lea","mail":"colinpointcelineabalivepointfr","id":39,"checkins":0},
{"nom":"colin","prenom":"gerard","mail":"colinpointcelineabalivepointfr","id":40,"checkins":0},
{"nom":"colin","prenom":"celine ","mail":"colinpointcelineabalivepointfr","id":41,"checkins":0},
{"nom":"cordonnier","prenom":"catherine","mail":"colinpointcelineabalivepointfr","id":42,"checkins":0},
{"nom":"D'amour","prenom":"Marie laure","mail":"mldamourabaorangepointfr","id":43,"checkins":0},
{"nom":"D'amour","prenom":"Marie Laure","mail":"mldamourabaorangepointfr","id":44,"checkins":0},
{"nom":"Da Silva","prenom":"Adélia","mail":"Jim","id":45,"checkins":0},
{"nom":"danino","prenom":"ottavia","mail":"odaninoabahotmailpointfr","id":46,"checkins":0},
{"nom":"de Couessin","prenom":"Adelaide","mail":"apointdecouessinabayahoopointfr","id":47,"checkins":0},
{"nom":"de La Porte","prenom":"Brice","mail":"apointdecouessinabayahoopointfr","id":48,"checkins":0},
{"nom":"de Marcillac","prenom":"Agathe","mail":"agathedemarcillacabagmailpointcom","id":49,"checkins":0},
{"nom":"de Noray","prenom":"Gabriel ","mail":"auberiepointallysabahotmailpointfr","id":50,"checkins":0},
{"nom":"Deau","prenom":"Camille","mail":"Carlito","id":51,"checkins":0},
{"nom":"Delacote","prenom":"Timothee","mail":"timotheepointdelacoteabagmailpointcom","id":52,"checkins":0},
{"nom":"Dembele","prenom":"Asta ","mail":"marinamelladoruizabagmailpointcom","id":53,"checkins":0},
{"nom":"Denis","prenom":"Tiphaine","mail":"tiphainepointdenisabagmailpointcom","id":54,"checkins":0},
{"nom":"Dérothe","prenom":"Benjamin","mail":"marinepointlambert5abagmailpointcom","id":55,"checkins":0},
{"nom":"Do","prenom":"Thomas","mail":"camyl_83abahotmailpointcom","id":56,"checkins":0},
{"nom":"Dubois","prenom":"Anouck","mail":"anouckpointduboisabagmailpointcom","id":57,"checkins":0},
{"nom":"Dujour","prenom":"Ami","mail":"marycapabahotmailpointfr","id":58,"checkins":0},
{"nom":"Duprat","prenom":"Nora","mail":"norapointdupratabagmailpointcom","id":59,"checkins":0},
{"nom":"FAHY","prenom":"Marine","mail":"FAHYpointMARINEpointVabaGMAILpointCOM","id":60,"checkins":0},
{"nom":"FAHY","prenom":"Marine ","mail":"FAHYpointMARINEpointVabaGMAILpointCOM","id":61,"checkins":0},
{"nom":"Ficheux","prenom":"Marion","mail":"mficheuxabahotmailpointfr","id":62,"checkins":0},
{"nom":"FILALI","prenom":"SANDRINE","mail":"sandfilaliabayahoopointfr","id":63,"checkins":0},
{"nom":"Flamant ","prenom":"Quentin","mail":"cpointbeckerabamrjcpointorg","id":64,"checkins":0},
{"nom":"Fompeyrine","prenom":"Noémie","mail":"mimi","id":65,"checkins":0},
{"nom":"Fompeyrine","prenom":"Noémie","mail":"Mimi","id":66,"checkins":0},
{"nom":"Franquet","prenom":"Armand","mail":"emmalejeuneabahotmailpointcom","id":67,"checkins":0},
{"nom":"Fruhling ","prenom":"Francois","mail":"odilebacquetabahotmailpointfr","id":68,"checkins":0},
{"nom":"Gieules","prenom":"Nicolas ","mail":"leapointhirschabaesscapointeu","id":69,"checkins":0},
{"nom":"GODINAT","prenom":"Mailys","mail":"mpointgodinatabalapostepointnet","id":70,"checkins":0},
{"nom":"Guénin","prenom":"Lucile","mail":"lucilepointgueninabagmailpointcom","id":71,"checkins":0},
{"nom":"GUIGNARD","prenom":"Cécile","mail":"cecilepointguignardabaessecpointedu","id":72,"checkins":0},
{"nom":"Hasson ","prenom":"Fanny","mail":"fannyhasdababahotmailpointcom","id":73,"checkins":0},
{"nom":"heiser","prenom":"audrey","mail":"audreypointhsrabagmailpointcom","id":74,"checkins":0},
{"nom":"Hericher","prenom":"Léa","mail":"slimanipointvanessaabayahoopointfr","id":75,"checkins":0},
{"nom":"Hirsch","prenom":"Léa ","mail":"leapointhirschabaesscapointeu","id":76,"checkins":0},
{"nom":"Jacquemin ","prenom":"Pierre ","mail":"agathepointjobertabahotmailpointfr","id":77,"checkins":0},
{"nom":"Jeannenot","prenom":"Edwige","mail":"edwigejeannenotabagmailpointcom","id":78,"checkins":0},
{"nom":"Jobert","prenom":"Agathe ","mail":"agathepointjobertabahotmailpointfr","id":79,"checkins":0},
{"nom":"Kennel","prenom":"Beate","mail":"alethpointrenateauabaorangepointfr","id":80,"checkins":0},
{"nom":"kerebel","prenom":"thomas","mail":"colinpointcelineabalivepointfr","id":81,"checkins":0},
{"nom":"Krajnyak","prenom":"Aniko","mail":"katez21abayahoopointfr","id":82,"checkins":0},
{"nom":"Krajnyak","prenom":"Katalin","mail":"katez21abayahoopointfr","id":83,"checkins":0},
{"nom":"Lakrouf","prenom":"Ines ","mail":"ineslakroufabahotmailpointfr","id":84,"checkins":0},
{"nom":"Lambert","prenom":"Marine","mail":"marinepointlambert5abagmailpointcom","id":85,"checkins":0},
{"nom":"Landais ","prenom":"Nicolas ","mail":"paulinepointpinabawanadoopointfr","id":86,"checkins":0},
{"nom":"Lauras","prenom":"Clara","mail":"agathepointjobertabahotmailpointfr","id":87,"checkins":0},
{"nom":"Le Vaillant","prenom":"Raphaëlle","mail":"raphaellepointlvabahotmailpointfr","id":88,"checkins":0},
{"nom":"Le Vaillant","prenom":"Raphaëlle","mail":"raphaellepointlvabahotmailpointfr","id":89,"checkins":0},
{"nom":"Ledez","prenom":"Maxime","mail":"maellepointloisilabagmailpointcom","id":90,"checkins":0},
{"nom":"Leficher","prenom":"Pia","mail":"lacourdcontesabagmailpointcom","id":91,"checkins":0},
{"nom":"Lejeune","prenom":"Emmanuelle","mail":"emmalejeuneabahotmailpointcom","id":92,"checkins":0},
{"nom":"LESACHEY","prenom":"Lucas","mail":"cecilepointguignardabaessecpointedu","id":93,"checkins":0},
{"nom":"Lesteven","prenom":"Yuna","mail":"norapointdupratabagmailpointcom","id":94,"checkins":0},
{"nom":"Loisil","prenom":"Maëlle","mail":"maellepointloisilabagmailpointcom","id":95,"checkins":0},
{"nom":"Loison","prenom":"Marie","mail":"loisonpointevaabahotmailpointfr","id":96,"checkins":0},
{"nom":"Loison","prenom":"Eva","mail":"loisonpointevaabahotmailpointfr","id":97,"checkins":0},
{"nom":"Martin","prenom":"Hortense","mail":"hortensepointmdfabagmailpointcom","id":98,"checkins":0},
{"nom":"Mellado","prenom":"Marine","mail":"marinamelladoruizabagmailpointcom","id":99,"checkins":0},
{"nom":"Michenot","prenom":"Margot","mail":"margotpointmichenotabagmailpointcom","id":100,"checkins":0},
{"nom":"Midy","prenom":"Julien","mail":"timotheepointdelacoteabagmailpointcom","id":101,"checkins":0},
{"nom":"Monfort","prenom":"Pauline","mail":"mpointbourgerieabamrjcpointorg","id":102,"checkins":0},
{"nom":"Mortazavi","prenom":"Louise","mail":"mortazavipointlouiseabagmailpointcom","id":103,"checkins":0},
{"nom":"Mortazavi","prenom":"Louise","mail":"mortazavipointlouiseabagmailpointcom","id":104,"checkins":0},
{"nom":"Motte","prenom":"Daphné","mail":"bailleul_mathildeabayahoopointfr","id":105,"checkins":0},
{"nom":"Nadane","prenom":"Jérôme","mail":"edwigejeannenotabagmailpointcom","id":106,"checkins":0},
{"nom":"Paillard ","prenom":"Pauline","mail":"mficheuxabahotmailpointfr","id":107,"checkins":0},
{"nom":"Pappalardo","prenom":"Camille","mail":"camyl_83abahotmailpointcom","id":108,"checkins":0},
{"nom":"Pin","prenom":"Pauline ","mail":"paulinepointpinabawanadoopointfr","id":109,"checkins":0},
{"nom":"Pinchaud","prenom":"Maxime","mail":"celinepointbourassetabagmailpointcom","id":110,"checkins":0},
{"nom":"Piron","prenom":"Celine","mail":"pironcabahotmailpointfr","id":111,"checkins":0},
{"nom":"pommier","prenom":"bertille","mail":"bertillepomabahotmailpointcom","id":112,"checkins":0},
{"nom":"rannou","prenom":"nathalie","mail":"nathaliepointrannouababboxpointfr","id":113,"checkins":0},
{"nom":"Raynaud","prenom":"Lucie","mail":"pironcabahotmailpointfr","id":114,"checkins":0},
{"nom":"Renateau","prenom":"Aleth","mail":"alethpointrenateauabaorangepointfr","id":115,"checkins":0},
{"nom":"Ruhlmann","prenom":"Arsene ","mail":"agathedemarcillacabagmailpointcom","id":116,"checkins":0},
{"nom":"Saglier","prenom":"Charlotte","mail":"charlottepointsaglierabagmailpointcom","id":117,"checkins":0},
{"nom":"Slimani","prenom":"Vanessa","mail":"slimanipointvanessaabayahoopointfr","id":118,"checkins":0},
{"nom":"Tahiri","prenom":"Maïa","mail":"lacourdcontesabagmailpointcom","id":119,"checkins":0},
{"nom":"Taïbi","prenom":"Samira","mail":"samirapointtaibiabaessecpointedu","id":120,"checkins":0},
{"nom":"Taïbi","prenom":"Samira","mail":"samirapointtaibiabaessecpointedu","id":121,"checkins":0},
{"nom":"Taieb","prenom":"Jessica","mail":"louispointbouchardeauabagmailpointcom","id":122,"checkins":0},
{"nom":"Tanguy","prenom":"Michel","mail":"manonpointtanguyabahomtailpointcom","id":123,"checkins":0},
{"nom":"Tanguy","prenom":"Manon","mail":"manonpointtanguyabahomtailpointcom","id":124,"checkins":0},
{"nom":"Tiberghien","prenom":"Magali","mail":"Carlito","id":125,"checkins":0},
{"nom":"Tiberghien","prenom":"Magali","mail":"Carlito","id":126,"checkins":0},
{"nom":"Trouillet ","prenom":"Marie-emily","mail":"tropfortmimiabahotmailpointcom","id":127,"checkins":0},
{"nom":"Ussel","prenom":"Romain","mail":"damienpointberticabagmailpointcom","id":128,"checkins":0},
{"nom":"Varillon ","prenom":"Astrid ","mail":"tropfortmimiabahotmailpointcom","id":129,"checkins":0},
{"nom":"venet","prenom":"antoine","mail":"odaninoabahotmailpointfr","id":130,"checkins":0},
{"nom":"Visier","prenom":"Ariane","mail":"auberiepointallysabahotmailpointfr","id":131,"checkins":0},
{"nom":"ysebaert","prenom":"lorraine","mail":"audreypointhsrabagmailpointcom","id":132,"checkins":0}];
