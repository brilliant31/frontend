import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DermatologistComponentComponent } from './dermatologist-component.component';

describe('DermatologistComponentComponent', () => {
  let component: DermatologistComponentComponent;
  let fixture: ComponentFixture<DermatologistComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DermatologistComponentComponent]
    });
    fixture = TestBed.createComponent(DermatologistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
