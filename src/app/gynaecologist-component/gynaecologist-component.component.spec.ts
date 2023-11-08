import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GynaecologistComponentComponent } from './gynaecologist-component.component';

describe('GynaecologistComponentComponent', () => {
  let component: GynaecologistComponentComponent;
  let fixture: ComponentFixture<GynaecologistComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GynaecologistComponentComponent]
    });
    fixture = TestBed.createComponent(GynaecologistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
