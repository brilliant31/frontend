import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralpractitionerComponentComponent } from './generalpractitioner-component.component';

describe('GeneralpractitionerComponentComponent', () => {
  let component: GeneralpractitionerComponentComponent;
  let fixture: ComponentFixture<GeneralpractitionerComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralpractitionerComponentComponent]
    });
    fixture = TestBed.createComponent(GeneralpractitionerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
