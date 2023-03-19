import {Component, OnInit} from '@angular/core';
import {Car} from "../shared/car.model";
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  addCar: boolean = false;
  car: Car;

  constructor(private carService: CarService) {
  }

  onSubmit() {
    this.carService.addCar(this.car);
    this.addCar=false;
  }

  ngOnInit(): void {
    this.car = new Car('Ferrari', 'Sport', 100,
      'https://img.favcars.com/ferrari/365/ferrari_365_1973_pictures_5_m.jpg');
  }

  addNewCar() {
    this.addCar=true;
  }
}
