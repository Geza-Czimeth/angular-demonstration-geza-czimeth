import {Component, OnDestroy, OnInit} from '@angular/core';
import {Car} from "../shared/car.model";
import {ActivatedRoute, Params} from "@angular/router";
import {CarService} from "../../services/car.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit, OnDestroy {

  selectedCarIndex: number = -1;

  cars: Car[];

  carListSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private carService: CarService) {

  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.selectedCarIndex = params['id'] ? +params['id'] : -1;
      if (this.selectedCarIndex != -1) {
        this.carService.carSelectedSubject.next(this.carService.getCars()[this.selectedCarIndex]);
      }
      console.log("Car selected with index: " + this.selectedCarIndex);
    });
    this.cars = this.carService.getCars();
    this.carService.carListChanged.subscribe(() => {
      this.selectedCarIndex=-1;
      this.cars = this.carService.getCars();
    });
  }

  ngOnDestroy(): void {
    if (this.carListSubscription && !this.carListSubscription.closed) {
      this.carListSubscription.unsubscribe();
    }
  }
}
