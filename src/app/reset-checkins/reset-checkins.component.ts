import { Component, OnInit } from '@angular/core';
import { CheckinsService } from '../checkins.service';
import { GuestsService } from '../guests.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-reset-checkins',
  templateUrl: './reset-checkins.component.html',
  styleUrls: ['./reset-checkins.component.css']
})
export class ResetCheckinsComponent implements OnInit {

  constructor(
    private checkinsService: CheckinsService,
    private guestService: GuestsService,
  private router: Router) { }

  reset(){ 
    this.checkinsService.clearCheckins();
    this.guestService.clearGuests();
    this.router.navigateByUrl('/liste');
  }

  ngOnInit() {
    
  }

}
