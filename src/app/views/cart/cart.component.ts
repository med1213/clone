import { Component, OnInit } from '@angular/core';
import { ProductDeal } from 'src/app/models/product-deal.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  carts: ProductDeal[] = [];
  total: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItems.subscribe(data => this.carts = data);
    if(this.carts) this.getTotal(this.carts);
  }

  deleteCartIterm(i:number) {
    this.carts.splice(i, 1);
    this.cartService.setCartData(this.carts);
    this.getTotal(this.carts)
  }

  validateInput(event:any, i:number) {
    const qty = +event.target.value;
    if (qty < 1) {
      event.target.value = this.carts[i].qty;
      return;
    }
    this.QtyUpdated(qty, i);
  }
  private QtyUpdated(qty: number, i: number) {
    this.carts[i].qty = qty;
    this.cartService.setCartData(this.carts);
    this.getTotal(this.carts)
  }

  getTotal(data: any){
    let sub = 0;
    for(const item of data)
    sub += item.pricesale * item.qty;
    this.total = sub
  }
}
