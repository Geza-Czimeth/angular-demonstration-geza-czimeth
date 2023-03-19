import { Component } from '@angular/core';
import {Car} from "../shared/car.model";

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent {

  cars: Car[] = [
    {
      name: 'Amber Fantasy',
      type: 'Sportcar',
      speed: 12,
      imagePath: 'https://en.vnmod.net/wp-content/uploads/2022/02/020220221643773546.png'
    },
    {
      name: 'Retro thunder',
      type: 'Classic',
      speed: 11,
      imagePath: 'https://i.pinimg.com/originals/d0/0f/df/d00fdf570efd37d5a93e04d37722ad91.jpg'
    }
  ];
}
