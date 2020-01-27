import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ToursPage } from './tours.page';
import { ToursRoutingModule } from './tours-routing.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ToursRoutingModule
  ],
  declarations: [ToursPage]
})
export class ToursPageModule {}
