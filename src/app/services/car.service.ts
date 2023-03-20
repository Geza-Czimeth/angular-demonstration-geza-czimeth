import {Subject} from "rxjs";
import {Car} from "../components/shared/car.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class CarService {
  carSelectedSubject = new Subject<Car>();

  carListChanged = new Subject();

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

  public updateCar(updatedCar: Car) {
    this.cars = this.cars.map(obj => {
      if (obj.name === updatedCar.name) {
        return updatedCar;
      }
      return obj;
    });
  }

  public deleteCar(carToDelete: Car) {
    this.cars = this.cars.filter(car => car.name !== carToDelete.name);
    console.log("Remaining cars:" + this.cars);
    this.carListChanged.next(null);
  }

  getCars(): Car[] {
    return this.cars;
  }

  addCar(newCar: Car) {
    newCar = {...newCar};
    let counter = 0;
    while (this.cars.find(carInList => carInList.name == newCar.name)) {
      counter++;
      newCar.name = newCar.name + '-' + counter;
    }
    this.cars.push(newCar);
  }
}
