import { TestBed } from '@angular/core/testing';

import { ConfirmPopinService } from './confirm-popin.service';

describe('ConfirmPopinServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmPopinService = TestBed.get(ConfirmPopinService);
    expect(service).toBeTruthy();
  });
});
