import { TestBed } from '@angular/core/testing';

import { IdeesServiceService } from './idees-service.service';

describe('IdeesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdeesServiceService = TestBed.get(IdeesServiceService);
    expect(service).toBeTruthy();
  });
});
