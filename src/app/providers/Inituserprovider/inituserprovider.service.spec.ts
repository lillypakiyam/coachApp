import { TestBed } from '@angular/core/testing';

import { InituserproviderService } from './inituserprovider.service';

describe('InituserproviderService', () => {
  let service: InituserproviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InituserproviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
