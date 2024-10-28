import { TestBed } from '@angular/core/testing';

import { ServizioComuneService } from './servizio-comune.service';

describe('ServizioComuneService', () => {
  let service: ServizioComuneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServizioComuneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
