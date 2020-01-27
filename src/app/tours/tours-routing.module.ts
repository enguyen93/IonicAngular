import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ToursPage } from "./tours.page";
import { DiscoverPage } from "./discover/discover.page";
import { OffersPage } from "./offers/offers.page";

const routes: Routes = [
  {
    // This route will be starting with /tours/tabs... because This routing module is inside Tours
    path: "tabs",
    component: ToursPage,
    children: [
      {
        path: "discover",
        children: [
            {
                path: '',
                loadChildren: './discover/discover.module#DiscoverPageModule'
            },
            {
                path: ':tourId',
                loadChildren: './discover/tour-detail/tour-detail.module#TourDetailPageModule'
            }
        ]
      },
      {
        path: "offers",
        children: [
            {
                path: '',
                loadChildren: './offers/offers.module#OffersPageModule'
            },
            {
                path: 'new',
                loadChildren: './offers/new-offer/new-offer.module#NewOfferPageModule'
            },
            {
                path: ':tourId',
                loadChildren: './offers/offer-bookings/offer-bookings.module#OfferBookingsPageModule'
            },
            {
                path: 'edit/:tourId',
                loadChildren: './offers/edit-offer/edit-offer.module#EditOfferPageModule'
            }
        ]
      },
      {
          path: '',
          redirectTo: '/tours/tabs/discover',
          pathMatch: 'full'
      }
    ]
  },
  {
      path: '',
      redirectTo: '/tours/tabs/discover',
      pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToursRoutingModule {}
