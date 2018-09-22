import { TestBed, inject } from '@angular/core/testing';

import { ServicioGenericoService } from './servicio-generico.service';

describe('ServicioGenericoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioGenericoService]
    });
  });

  it('should be created', inject([ServicioGenericoService], (service: ServicioGenericoService) => {
    expect(service).toBeTruthy();
  }));
});
