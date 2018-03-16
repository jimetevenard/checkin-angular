import { Component, OnInit } from '@angular/core';
import { GuestsService } from "../guests.service";

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Guest } from '../guest';



@Component({
  selector: 'app-resa-complement',
  templateUrl: './resa-complement.component.html',
  styleUrls: ['./resa-complement.component.css']
})
export class ResaComplementComponent implements OnInit {
  guestsAssocies: Guest[];


  constructor(
    private guestService: GuestsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.guestService.getAssociatedGuests(+this.route.snapshot.paramMap.get('id')).subscribe(gs => {
      this.guestsAssocies = gs;
    });
  }

}
