import { TestBed } from '@angular/core/testing';

import { SignalsDebuggerService } from './signals-debugger.service';

describe('SignalsDebuggerService', () => {
  let service: SignalsDebuggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalsDebuggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
