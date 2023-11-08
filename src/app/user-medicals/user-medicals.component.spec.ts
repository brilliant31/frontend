import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMedicalsComponent } from './user-medicals.component';

describe('UserMedicalsComponent', () => {
  let component: UserMedicalsComponent;
  let fixture: ComponentFixture<UserMedicalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMedicalsComponent]
    });
    fixture = TestBed.createComponent(UserMedicalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
