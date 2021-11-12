import { TestBed } from '@angular/core/testing';

import { ProductDealService } from './product-deal.service';

describe('ProductDealService', () => {
  let service: ProductDealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
