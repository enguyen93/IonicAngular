import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1', 
      'Landmark 81',
      'In the heart of Saigon',
      'https://ak7.picdn.net/shutterstock/videos/1036634717/thumb/12.jpg',
      473.32
    ),
    new Place(
      'p2', 
      'P2 Vinmark',
      'In the heart of Saigon',
      'https://r-cf.bstatic.com/xdata/images/xphoto/max500_ao/11792583.jpg?k=ac1483fc5abafaa00d29a0a9d5f62d7ee141c672ff51440d6524c1fcc72c40d5&o=',
      43.38
    )
  ];

  get places() {
    return [...this._places];
  }
  constructor() { }
}
