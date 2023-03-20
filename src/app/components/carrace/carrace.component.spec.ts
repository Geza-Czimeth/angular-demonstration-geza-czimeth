import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CarraceComponent} from './carrace.component';
import {CarService} from "../../services/car.service";
import {Car} from "../shared/car.model";

describe('CarraceComponent', () => {
  let component: CarraceComponent;
  let fixture: ComponentFixture<CarraceComponent>;
  let injectedCarService: CarService;
  const car1: Car = new Car('Ferrari', 'Sport', 1, '123');
  const car2: Car = new Car('Porsche', 'Sport', 12, '123');
  let cars: Car[] = [car1, car2];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarraceComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CarraceComponent);
    component = fixture.componentInstance;
    injectedCarService = TestBed.inject(CarService);
    spyOn(injectedCarService, 'getCars').and.returnValue(cars);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Car list is acquired from CarService', () => {
    expect(component.cars).toEqual(cars);
  });

  it('startRace determines winning car properly', () => {
    component.startRace();
    expect(component.winnerCar).toEqual(car2);
  });

  it('no winner car is set if no car entered into the race', () => {
    component.cars = [];
    component.startRace();
    expect(component.winnerCar).toBeUndefined();
  });
});
