import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PediatricianComponentComponent } from './pediatrician-component.component';

describe('PediatricianComponentComponent', () => {
  let component: PediatricianComponentComponent;
  let fixture: ComponentFixture<PediatricianComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PediatricianComponentComponent]
    });
    fixture = TestBed.createComponent(PediatricianComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
