import { TestBed } from '@angular/core/testing';

import { NgxNgBanksService } from './ngx-ng-banks.service';

describe('NgxNgBanksService', () => {
  let service: NgxNgBanksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNgBanksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
