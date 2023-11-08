import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeurologistComponentComponent } from './neurologist-component.component';

describe('NeurologistComponentComponent', () => {
  let component: NeurologistComponentComponent;
  let fixture: ComponentFixture<NeurologistComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeurologistComponentComponent]
    });
    fixture = TestBed.createComponent(NeurologistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
