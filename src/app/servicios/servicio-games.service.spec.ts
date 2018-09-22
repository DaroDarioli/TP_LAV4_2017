import { TestBed, inject } from '@angular/core/testing';

import { ServicioGamesService } from './servicio-games.service';

describe('ServicioGamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioGamesService]
    });
  });

  it('should be created', inject([ServicioGamesService], (service: ServicioGamesService) => {
    expect(service).toBeTruthy();
  }));
});
