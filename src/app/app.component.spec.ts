import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CarListComponent } from './car/car-list/car-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let debug: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientModule
      ],
      declarations: [
        AppComponent, CarListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have an img element with src="./assets/img/header.png"', () => {
    expect(debug.query(By.css('img')).attributes['src']).toEqual(
      "./assets/img/header.png"
    );
  });

  it('should have an img element with alt="Imagen central"', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      "Imagen central"
    );
  });

});