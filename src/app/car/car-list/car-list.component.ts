import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor(private carService: CarService) { }
  cars: Array<Car> = [];
  brandCount: Record<string, number> = {};

  getCars() {
    this.carService.getCars().subscribe({
      next: (cars) => {
        this.cars = cars;
        this.getBrandCount()
      },
      error: (error) => {
        console.error('There was an error:', error)
      }
    });
  }

  getBrandCount() {
    this.cars.forEach((car) => {
      const brand = car.marca;
      if (brand in this.brandCount) {
        this.brandCount[brand]++;
      } else {
        this.brandCount[brand] = 1
      }
    });
  }

  ngOnInit() {
    this.getCars();
  }
}