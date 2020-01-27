import { Component, OnInit } from '@angular/core';
import { ToursService } from '../tours.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  private loadedOffers = [];

  constructor(private toursService: ToursService) { }



  ngOnInit() {
    this.loadedOffers = this.toursService.groupTours;
  }

}
