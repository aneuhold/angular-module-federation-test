import { TestBed } from '@angular/core/testing';

import { AngularExampleLibService } from './angular-example-lib.service';

describe('AngularExampleLibService', () => {
  let service: AngularExampleLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularExampleLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
