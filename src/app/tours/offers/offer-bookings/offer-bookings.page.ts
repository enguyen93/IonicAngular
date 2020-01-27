import { Component, OnInit } from "@angular/core";
import { Tour } from "../../tour.model";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { ToursService } from "../../tours.service";

@Component({
  selector: "app-offer-bookings",
  templateUrl: "./offer-bookings.page.html",
  styleUrls: ["./offer-bookings.page.scss"]
})
export class OfferBookingsPage implements OnInit {
  tour: Tour;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private toursService: ToursService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has("tourId")) {
        this.navCtrl.navigateBack("/tours/tabs/offers");
        return;
      }
      this.tour = this.toursService.getTour(paramMap.get('tourId'))
    });
  }
}
