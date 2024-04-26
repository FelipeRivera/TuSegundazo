/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CarListComponent } from './car-list.component';
import { CarService } from '../car.service';
import { Car } from '../car';

describe('CarListComponent', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CarListComponent],
      providers: [CarService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    for (let i = 0; i < 3; i++) {
      const car = new Car(i, "marcax", "lineax", "referenciax", i, i, "colorx", "imgx");
      component.cars.push(car)
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Component has a table with 3 cars and 1 header", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeCloseTo(component.cars.length + 1);
  });
});