import { Injectable } from '@angular/core';
import { ProductDeal } from '../models/product-deal.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDealService {
  products: ProductDeal[] = [
    new ProductDeal(
                    1,
                    'product sale off on friday',
                    250,
                    150,
                    ['../../../assets/imgs/product9.jpg'],
                    1,
                  ),
    new ProductDeal(
                    2,
                    'product sale off on sunday',
                    150,
                    50,
                    ['../../../assets/imgs/product9.jpg'],
                    1,
                  ),
    new ProductDeal(
                    3,
                    'product sale off on monday',
                    220,
                    100,
                    ['../../../assets/imgs/product9.jpg'],
                    2,
                  )
  ];

  constructor() { }

  getProductdeal(){
    return this.products;
  }

  getProduct(id:number){
    return this.products.find(product=> { product.id === id});
  }
}
