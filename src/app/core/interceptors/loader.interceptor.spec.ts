import { TestBed } from '@angular/core/testing';

import { LoaderInterceptor } from './loader.interceptor';

describe('LoaderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoaderInterceptor
      ]
  }));

  it('should interceptor starts intercepts', () => {
    const interceptor: LoaderInterceptor = TestBed.inject(LoaderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
