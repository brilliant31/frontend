import { TestBed } from '@angular/core/testing';

import { CardiologistService } from './cardiologist.service';

describe('CardiologistService', () => {
  let service: CardiologistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardiologistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
