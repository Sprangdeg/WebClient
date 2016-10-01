/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StryktipsetService } from './stryktipset.service';

describe('Service: Stryktipset', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StryktipsetService]
    });
  });

  it('should ...', inject([StryktipsetService], (service: StryktipsetService) => {
    expect(service).toBeTruthy();
  }));
});
