import {Subject} from "rxjs";
import {Car} from "../components/shared/car.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn:'root'})
export class CarService{
  carSelectedSubject = new Subject<Car>();
}
