import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CarlistComponent} from './carlist.component';
import {RouterTestingModule} from "@angular/router/testing";
import {CardetailComponent} from "../cardetail/cardetail.component";
import {AddCarComponent} from "../add-car/add-car.component";
import {CarService} from "../../services/car.service";
import {Car} from "../shared/car.model";

describe('CarlistComponent', () => {
  let component: CarlistComponent;
  let fixture: ComponentFixture<CarlistComponent>;
  let injectedCarService: CarService;
  const car1: Car = new Car('Ferrari', 'Sport', 1, '123');
  const car2: Car = new Car('Porsche', 'Sport', 1, '123');
  let cars: Car[] = [car1, car2];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarlistComponent, CardetailComponent, AddCarComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
    fixture = TestBed.createComponent(CarlistComponent);
    component = fixture.componentInstance;
    injectedCarService = TestBed.inject(CarService);
    spyOn(injectedCarService, 'getCars').and.returnValue(cars);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit loads cars from CarService', () => {
    expect(component.cars).toEqual(cars);
  });

  it('ngOnInit subscribes to carSelectedSubject', () => {
    expect(component.carListSubscription).not.toBeNull();
  });

  it('ngOnDestroy unsubscribes to carSelectedSubject', () => {
    const myObservableSpy = spyOn(component.carListSubscription, 'unsubscribe');
    component.ngOnDestroy();
    expect(myObservableSpy).toHaveBeenCalled();
  });

  it('carSelected method sets the right index', () => {
    let carIndex = 1;
    component.carSelected(carIndex);
    expect(component.selectedCarIndex).toEqual(carIndex);
  });

  it('carSelected method publishes the selected car', () => {
    let carIndex = 1;
    const myObservableSpy = spyOn(injectedCarService.carSelectedSubject, 'next')
    component.carSelected(carIndex);
    expect(myObservableSpy).toHaveBeenCalledWith(cars[carIndex]);
  });
});
