import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardetailComponent} from './cardetail.component';
import {Car} from "../shared/car.model";
import {CarService} from "../../services/car.service";

describe('CardetailComponent', () => {
  let component: CardetailComponent;
  let fixture: ComponentFixture<CardetailComponent>;
  let injectedCarService: CarService;
  const car: Car = new Car('Ferrari', 'Sport', 1, '123');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardetailComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    injectedCarService = TestBed.inject(CarService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Decrease speed decreases car speed', () => {
    component.selectedCar = car;
    let originalSpeed = component.selectedCar.speed;
    component.decreaseSpeed();
    expect(component.selectedCar.speed).toBeLessThan(originalSpeed)
  });

  it('Increase speed increases car speed', () => {
    component.selectedCar = car;
    let originalSpeed = component.selectedCar.speed;
    component.increaseSpeed();
    expect(component.selectedCar.speed).toBeGreaterThan(originalSpeed)
  });

  it('Delete car calls service method', () => {
    spyOn(injectedCarService, 'deleteCar');
    component.selectedCar = car;
    component.deleteCar();
    expect(injectedCarService.deleteCar).toHaveBeenCalledWith(car);
    expect(component.selectedCar).toBeNull();
  });

  it('ngOnInit subscribes to carSelectedSubject', () => {
    expect(component.carSelectionSubscription).not.toBeNull();
  });

  it('ngOnDestroy unsubscribes to carSelectedSubject', () => {
    const myObservableSpy = spyOn(component.carSelectionSubscription, 'unsubscribe');
    component.ngOnDestroy();
    expect(myObservableSpy).toHaveBeenCalled();
  });
});
