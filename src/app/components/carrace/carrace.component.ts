import {Component, OnInit} from '@angular/core';
import {CarService} from "../../services/car.service";
import {Car} from "../shared/car.model";

@Component({
  selector: 'app-carrace',
  templateUrl: './carrace.component.html',
  styleUrls: ['./carrace.component.css']
})
export class CarraceComponent implements OnInit {

  cars: Car[];

  winnerCar: Car;

  constructor(private carService: CarService) {

  }

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }

  startRace() {
    this.cars = this.cars.sort((car1, car2) => car1.speed < car2.speed ? 1 : -1);
    if (this.cars.length > 0) {
      this.winnerCar = this.cars[0];
    }
  }
}
