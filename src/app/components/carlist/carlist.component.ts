import {Component, OnInit} from '@angular/core';
import {Car} from "../shared/car.model";
import {ActivatedRoute, Params} from "@angular/router";
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {

  selectedCarIndex: number = -1;

  constructor(private activatedRoute: ActivatedRoute, private carService: CarService) {

  }

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

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.selectedCarIndex = params['id'] ? +params['id'] : -1;
      if (this.selectedCarIndex != -1) {
        this.carService.carSelectedSubject.next(this.cars[this.selectedCarIndex]);
      }
      console.log("Car selected with index: " + this.selectedCarIndex);
    });
  }
}
