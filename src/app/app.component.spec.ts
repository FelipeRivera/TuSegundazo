import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CarListComponent } from './car/car-list/car-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
      ],
      declarations: [
        AppComponent,
        CarListComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have an img element with src="./assets/img/header.png"', () => {
    const imgElement = debug.query(By.css('img'));
    expect(imgElement?.nativeElement.src).toContain('/assets/img/header.png');
  });

  it('should have an img element with alt="Imagen central"', () => {
    const imgElement = debug.query(By.css('img'));
    expect(imgElement?.nativeElement.alt).toEqual('Imagen central');
  });

});