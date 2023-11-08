import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiologistComponentComponent } from './cardiologist-component.component';

describe('CardiologistComponentComponent', () => {
  let component: CardiologistComponentComponent;
  let fixture: ComponentFixture<CardiologistComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardiologistComponentComponent]
    });
    fixture = TestBed.createComponent(CardiologistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
