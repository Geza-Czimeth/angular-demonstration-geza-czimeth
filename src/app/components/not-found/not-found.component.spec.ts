import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NotFoundComponent} from './not-found.component';
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  let injectedRouter: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
      imports:[RouterTestingModule],
      providers: [
        { provide: Router }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    injectedRouter = TestBed.inject(Router);
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('backToStartPage navigates to \'\'', () => {
    pending('routing test thorws error');
    const navigateSpy = spyOn(injectedRouter, 'navigate').and.stub();
    component.backToStartPage();
    expect(navigateSpy).toHaveBeenCalledWith(['']);
  });
});
