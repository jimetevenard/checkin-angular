import { Injectable } from '@angular/core';
import { WindowRefService } from './window-ref.service';

@Injectable()
export class CheckinsService {

  private storage: any; // bof bof

  constructor(private winRef: WindowRefService) {
    this.storage = winRef.nativeWindow.localStorage;
  }

  setCheckedIn(guestId: number){
    this.storage.setItem(this.keyName(guestId),true);
  }

  isCheckedIn(guestId: number): boolean {
    let value = this.storage.getItem(this.keyName(guestId));
    return value == 'true';
  }

  clearCheckins() {
    for(let i = 0; i < this.storage.length; i++){
      let key = this.storage.key(i);
      if(this.isCheckinKey(key)){
        this.storage.setItem(key,false);
      }
    }
  }

  private keyName(id: number): string{
    return PREFIX + id;
  }
  private isCheckinKey(key: string){
    return key.startsWith(PREFIX);
  }

}

const PREFIX = "checked-in-";
