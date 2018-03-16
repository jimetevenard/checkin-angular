import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Guest } from "./guest";

@Injectable()
export class GuestsService {

  // DUR TEMPORAIRE !!

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

  private eventuallyLoadGuests() {
    // MethodName Award

    if (this.guests.length < 1) {
      TEST_GUESTS.forEach(jsonGuest => {
        // TMP wrap json/objet typescript

        let g = new Guest(jsonGuest.nom, jsonGuest.prenom, jsonGuest.mail, jsonGuest.id, jsonGuest.checkins);
        this.guests.push(g);
      });
    }
  }


  constructor() { }

}

const TEST_GUESTS = [{ "nom": "Blanc", "prenom": "Tom", "mail": "sed.sem.egestas@quisdiamluctus.org", "checkins": 0, "id": 0 },
{ "nom": "Carpentier", "prenom": "Lilian", "mail": "quis@ac.co.uk", "checkins": 0, "id": 1 },
{ "nom": "Girard", "prenom": "Enzo", "mail": "nisi.a.odio@libero.ca", "checkins": 0, "id": 2 },
{ "nom": "Cordier", "prenom": "Mélanie", "mail": "ut@posuere.edu", "checkins": 1, "id": 3 },
{ "nom": "Barre", "prenom": "Lucas", "mail": "pharetra@gravida.net", "checkins": 0, "id": 4 },
{ "nom": "Brunet", "prenom": "Titouan", "mail": "rutrum.non.hendrerit@aliquet.net", "checkins": 0, "id": 5 },
{ "nom": "Millet", "prenom": "Davy", "mail": "vel.arcu.eu@rhoncusDonec.co.uk", "checkins": 0, "id": 6 },
{ "nom": "Paris", "prenom": "Clotilde", "mail": "dolor@nasceturridiculus.net", "checkins": 0, "id": 7 },
{ "nom": "Henry", "prenom": "Alexis", "mail": "manon.jacquet@toto.com", "checkins": 0, "id": 8 },
{ "nom": "Gerard", "prenom": "Dimitri", "mail": "convallis@dictumProin.ca", "checkins": 0, "id": 9 },
{ "nom": "Guyot", "prenom": "Lauriane", "mail": "augue.Sed@mollis.ca", "checkins": 0, "id": 10 },
{ "nom": "Menard", "prenom": "Cédric", "mail": "Nunc.ac.sem@mattisInteger.org", "checkins": 0, "id": 11 },
{ "nom": "Rousseau", "prenom": "Léane", "mail": "velit.Aliquam@eulacus.net", "checkins": 0, "id": 12 },
{ "nom": "Jacquet", "prenom": "Manon", "mail": "manon.jacquet@toto.com", "checkins": 0, "id": 13 },
{ "nom": "David", "prenom": "Malik", "mail": "arcu.Nunc.mauris@adipiscing.net", "checkins": 0, "id": 14 },
{ "nom": "Bernard", "prenom": "Marie", "mail": "Maecenas.libero@risusquis.edu", "checkins": 0, "id": 15 },
{ "nom": "Pons", "prenom": "Alexandra", "mail": "nonummy@vulputate.edu", "checkins": 0, "id": 16 },
{ "nom": "Laine", "prenom": "Constant", "mail": "lectus.ante.dictum@euerosNam.org", "checkins": 0, "id": 17 },
{ "nom": "Legrand", "prenom": "Kyllian", "mail": "vitae.erat@liberomaurisaliquam.com", "checkins": 0, "id": 18 },
{ "nom": "Dubois", "prenom": "Florian", "mail": "venenatis.a.magna@In.net", "checkins": 0, "id": 19 },
{ "nom": "Fernandez", "prenom": "Clara", "mail": "ipsum.sodales@enimconsequat.org", "checkins": 0, "id": 20 },
{ "nom": "Dubois", "prenom": "Maelys", "mail": "mi.lacinia@auctorMauris.com", "checkins": 0, "id": 21 },
{ "nom": "Olivier", "prenom": "Kilian", "mail": "manon.jacquet@toto.com", "checkins": 0, "id": 22 },
{ "nom": "Gauthier", "prenom": "Dorian", "mail": "Nunc.pulvinar.arcu@rutrum.co.uk", "checkins": 0, "id": 23 },
{ "nom": "Deschamps", "prenom": "Valentine", "mail": "tristique.senectus@necligulaconsectetuer.ca", "checkins": 0, "id": 24 },
{ "nom": "Francois", "prenom": "Colin", "mail": "velit.Sed.malesuada@vitae.net", "checkins": 0, "id": 25 },
{ "nom": "Chevalier", "prenom": "Renaud", "mail": "toto@foo.bar", "checkins": 0, "id": 26 },
{ "nom": "Perrin", "prenom": "Clotilde", "mail": "mi.fringilla@luctuslobortisClass.net", "checkins": 0, "id": 27 },
{ "nom": "Boulanger", "prenom": "Erwan", "mail": "enim.nisl.elementum@mollisPhaselluslibero.net", "checkins": 0, "id": 28 },
{ "nom": "Boyer", "prenom": "Bienvenue", "mail": "dictum.eu@nunc.com", "checkins": 0, "id": 29 },
{ "nom": "Adam", "prenom": "Lina", "mail": "ligula.consectetuer@interdumNuncsollicitudin.org", "checkins": 0, "id": 30 },
{ "nom": "Perez", "prenom": "Ambre", "mail": "Nunc.sollicitudin.commodo@anunc.net", "checkins": 0, "id": 31 },
{ "nom": "Marchand", "prenom": "Jeanne", "mail": "dolor.nonummy.ac@nibhPhasellusnulla.edu", "checkins": 0, "id": 32 },
{ "nom": "Bonnet", "prenom": "Léo", "mail": "toto@foo.bar", "checkins": 0, "id": 33 },
{ "nom": "Berger", "prenom": "Lily", "mail": "Maecenas.mi@faucibusMorbi.edu", "checkins": 0, "id": 34 },
{ "nom": "Cordier", "prenom": "Mathis", "mail": "nisi.Aenean.eget@nequeIn.org", "checkins": 0, "id": 35 },
{ "nom": "Jacquet", "prenom": "Louise", "mail": "hendrerit@venenatis.net", "checkins": 0, "id": 36 },
{ "nom": "Jacob", "prenom": "Yohan", "mail": "magna.a@famesacturpis.edu", "checkins": 0, "id": 37 },
{ "nom": "Garcia", "prenom": "Chloé", "mail": "quis.urna.Nunc@Phaselluselit.co.uk", "checkins": 0, "id": 38 },
{ "nom": "Robin", "prenom": "Fanny", "mail": "lacinia.at@tinciduntnibhPhasellus.org", "checkins": 0, "id": 39 },
{ "nom": "Riviere", "prenom": "Agathe", "mail": "non.quam.Pellentesque@fermentumarcu.co.uk", "checkins": 0, "id": 40 },
{ "nom": "Gauthier", "prenom": "Mélanie", "mail": "nisl.elementum@Nunc.net", "checkins": 0, "id": 41 },
{ "nom": "Prevost", "prenom": "Jeanne", "mail": "Etiam.gravida@quispede.org", "checkins": 0, "id": 42 },
{ "nom": "Menard", "prenom": "Mathilde", "mail": "lacus@interdum.edu", "checkins": 0, "id": 43 }];
