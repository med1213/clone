import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductDeal } from '../models/product-deal.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {



  // ******use localStorage***** \\

  newStorage = [];
  cartItems = new BehaviorSubject([]);

  constructor() {
    const ls = this.getCartData();
    if (ls) this.cartItems.next(ls);
  }
  addItem(product: ProductDeal) {
    const ls = this.getCartData();
    let exist: ProductDeal;

    if (ls) {
      exist = ls.find((item) => {return item.id == product.id});
      if (exist) {
        exist.qty++;
        this.setCartData(ls);
      }
    }
    else {
      const newData = [product];
      this.setCartData(newData);
      this.newStorage.push(product);
      this.setCartData(this.newStorage);

    }
  }

  setCartData(data: any) {
    localStorage.setItem('cart', JSON.stringify(data));
    this.cartItems.next(this.getCartData());
  }
  getCartData() {
    return JSON.parse(localStorage.getItem('cart'));
  }
}
