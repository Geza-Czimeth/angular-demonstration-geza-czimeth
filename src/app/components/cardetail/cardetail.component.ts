import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarService} from "../../services/car.service";
import {Car} from "../shared/car.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit, OnDestroy {

  selectedCar: Car;
  carSelectionSubscription: Subscription;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.carSelectionSubscription = this.carService.carSelectedSubject.subscribe((selectedCar) => {
      console.log("Car object received: " + selectedCar)
      this.selectedCar = selectedCar;
    });
  }

  ngOnDestroy(): void {
    if (!this.carSelectionSubscription.closed) {
      this.carSelectionSubscription.unsubscribe();
    }
    console.log("CardetailComponent destroyed")
  }

  decreaseSpeed() {
    this.selectedCar.speed = this.selectedCar.speed + 10;
    this.carService.updateCar(this.selectedCar);
  }

  increaseSpeed() {
    this.selectedCar.speed = this.selectedCar.speed - 10;
    this.carService.updateCar(this.selectedCar);
  }

  deleteCar() {
    this.carService.deleteCar(this.selectedCar);
    this.selectedCar = null;
  }
}
