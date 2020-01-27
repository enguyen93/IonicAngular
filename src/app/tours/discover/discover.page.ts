import { Component, OnInit } from '@angular/core';
import { ToursService } from '../tours.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html'
})
export class DiscoverPage implements OnInit {

  // Creating an empty list
  private loadedTours = [];

  // Injecting the Tour Service
  constructor(private toursService: ToursService) { }

  // On creation of component populate the list with the hardcoded list that is in the Tour Service
  ngOnInit() {
    this.loadedTours = this.toursService.tours;
  }

}
