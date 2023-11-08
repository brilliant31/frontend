import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLabsComponent } from './user-labs.component';

describe('UserLabsComponent', () => {
  let component: UserLabsComponent;
  let fixture: ComponentFixture<UserLabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLabsComponent]
    });
    fixture = TestBed.createComponent(UserLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
