import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarComponent } from './add-car.component';
import {CarService} from "../../services/car.service";
import {Car} from "../shared/car.model";

const ADD_CAR_METHOD = 'addCar';

describe('AddCarComponent', () => {
  let component: AddCarComponent;
  let fixture: ComponentFixture<AddCarComponent>;
  let injectedCarService: CarService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    injectedCarService = TestBed.inject(CarService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('On submit CarService.addCar is called with the right parameter', () => {
    spyOn(injectedCarService, ADD_CAR_METHOD);
    const car:Car = new Car('','',123,'123');
    component.car =car;
    component.addCar = true;
    component.onSubmit();
    expect(injectedCarService.addCar).toHaveBeenCalledWith(car);
    expect(component.addCar).toEqual(false);
  });

  it('OnInit creates sample car object', () => {
    expect(component.car).not.toBeNull();
  });

  it('addNewCar method sets boolean flag', () => {
    component.addNewCar();
    expect(component.addCar).toEqual(true);
  });

  it('OnSubmit sets error message in case of error', () => {
    const errorMessage = 'Service error';
    const error = new Error(errorMessage);
    spyOn(injectedCarService, ADD_CAR_METHOD).and.throwError(error);
    component.onSubmit()
    expect(component.addCar).toEqual(false);
    expect(component.error).toEqual(errorMessage);
  });
});
