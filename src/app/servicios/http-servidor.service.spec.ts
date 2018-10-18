import { TestBed } from '@angular/core/testing';

import { HttpServidorService } from './http-servidor.service';

describe('HttpServidorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpServidorService = TestBed.get(HttpServidorService);
    expect(service).toBeTruthy();
  });
});
