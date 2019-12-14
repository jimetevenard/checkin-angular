import { Injectable } from '@angular/core';
import { WindowRefService } from './window-ref.service';

@Injectable()
export class CheckinsService {

  private storage: any; // bof bof

  constructor(private winRef: WindowRefService) {
    this.storage = winRef.nativeWindow.localStorage;
  }

  setCheckedIn(guestId: string){
    this.storage.setItem(this.keyName(guestId),true);
  }

  isCheckedIn(guestId: string): boolean {
    let value = this.storage.getItem(this.keyName(guestId));
    return value == 'true';
  }

  clearCheckins() {
    for(let i = 0; i < this.storage.length; i++){
      let key = this.storage.key(i);
      if(this.isCheckinKey(key)){
        this.storage.removeItem(key);
      }
    }
  }

  tmpCountCheckins(): number {
    // Je le fais comme ça pour récupérer
    // les checkins existants d'hier soir sur l'IPAD
    // A l'avenir un simple attribut count:number dans cette classe fera le job

    let count = 0;
    for(let i = 0; i < this.storage.length; i++){
      let key = this.storage.key(i);
      if(this.isCheckinKey(key) && (this.storage.getItem(key) == 'true')){
        count++;
      }
    }
    return count;
  }

  private keyName(id: string): string{
    return PREFIX + id;
  }
  private isCheckinKey(key: string){
    return key.startsWith(PREFIX);
  }

}

const PREFIX = "checked-in-";
