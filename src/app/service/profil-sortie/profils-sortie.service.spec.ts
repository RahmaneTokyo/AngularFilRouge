import { TestBed } from '@angular/core/testing';

import { ProfilsSortieService } from './profils-sortie.service';

describe('ProfilsSortieService', () => {
  let service: ProfilsSortieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilsSortieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
