import { Injectable } from '@angular/core';
import { WindowRefService } from './window-ref.service';

@Injectable()
export class CheckinsService {

  /**
   * Préfixes de clés utilisées pour stocker les check-in
   * dans le localStorage.
   */
  private static readonly PREFIX = "checked-in-";

  private storage: any; // bof bof

  constructor(private winRef: WindowRefService) {
    this.storage = winRef.nativeWindow.localStorage;
  }

  setCheckedIn(guestId: string) {
    this.storage.setItem(this.keyName(guestId), true);
  }

  isCheckedIn(guestId: string): boolean {
    let value = this.storage.getItem(this.keyName(guestId));
    return value == 'true';
  }

  clearCheckins() {
    Object.keys(this.storage).forEach((key) => {
      if (this.isCheckinKey(key)) {
        this.storage.removeItem(key);
      }
    });
  }

  countCheckins(): number {
    return Object.keys(this.storage).filter((key) => this.isCheckinKey(key)).length;
  }

  private keyName(id: string): string {
    return CheckinsService.PREFIX + id;
  }
  private isCheckinKey(key: string) {
    return key.startsWith(CheckinsService.PREFIX);
  }

}

