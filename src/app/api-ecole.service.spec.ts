import { TestBed } from '@angular/core/testing';

import { ApiEcoleService } from './api-ecole.service';

describe('ApiEcoleService', () => {
  let service: ApiEcoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEcoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
