import { TestBed } from '@angular/core/testing';
import { CarService } from './car.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Car', () => {
  let service: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarService],
      imports: [HttpClientModule],
    });

    service = TestBed.inject(CarService);
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });
});