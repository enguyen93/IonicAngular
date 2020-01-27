import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.page.html'
})
export class TourDetailPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  onBookTour() {
    //this.router.navigateByUrl('/tours/tabs/discover');
    this.navCtrl.navigateBack('/tours/tabs/discover');
  }
}
