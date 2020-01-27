import { Injectable } from "@angular/core";
import { Tour } from "./tour.model";

@Injectable({
  providedIn: "root"
})
export class ToursService {
  private _tours: Tour[] = [
    new Tour(
      "t1",
      "Tour of Ha Long Bay",
      "Visit the most beautiful view Vietnam has to offer, a UNESCO Heritage Site",
      "https://wallpaperaccess.com/full/255791.jpg",
      79.99
    ),
    new Tour(
      "t2",
      "I don't remember what this picture was",
      "I will need to change the description once I find out what the picture was",
      "https://wallpaperaccess.com/full/462310.jpg",
      49.99
    )
  ];

  private _groupTours: Tour[] = [
    new Tour(
      "g1",
      "Look at this happy group tour",
      "This could be you, but you playin",
      "https://www.indochinatour.com/assets/images/classic-theme-pic/15-Days-Vietnam%2C-Cambodia-and-Laos-Small-Group-Tours-in(1).jpg",
      473.99
    ),
    new Tour(
      "g2",
      "A really colorful picture",
      "Damn, I'd love to be on vacation right now",
      "https://789213.smushcdn.com/1504155/wp-content/uploads/2019/09/5c07ea1f01bcb_2120_vn-3.jpg?lossy=1&strip=1&webp=1",
      436.99
    )
  ];

  get groupTours() {
    return [...this._groupTours];
  }

  get tours() {
    return [...this._tours];
  }

  getTour(id: string) {
    return {...this._tours.find(p => p.id === id)};
  }

  constructor() {}
}
