import { TestBed } from '@angular/core/testing';

import { EjerciciosUd33ServicesService } from './ejercicios-ud33-services.service';

describe('EjerciciosUd33ServicesService', () => {
  let service: EjerciciosUd33ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjerciciosUd33ServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
