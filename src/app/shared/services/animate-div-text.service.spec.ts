import { TestBed } from '@angular/core/testing';

import { AnimateDivTextService } from './animate-div-text.service';

describe('AnimateDivTextService', () => {
  let service: AnimateDivTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimateDivTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
