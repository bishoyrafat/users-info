import { TestBed } from '@angular/core/testing';

import { LoaderHandlingService } from './loader-handling.service';

describe('LoaderHandlingService', () => {
  let service: LoaderHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderHandlingService);
  });

  it('should Loader service to be instantiated', () => {
    expect(service).toBeTruthy();
  });
});
