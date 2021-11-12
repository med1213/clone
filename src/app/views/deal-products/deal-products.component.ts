import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDeal } from 'src/app/models/product-deal.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductDealService } from 'src/app/services/product-deal.service';

@Component({
  selector: 'app-deal-products',
  templateUrl: './deal-products.component.html',
  styleUrls: ['./deal-products.component.scss']
})
export class DealProductsComponent implements OnInit {

  products: ProductDeal[] = [];
  // product: ProductDeal;

  constructor( 
    private route: ActivatedRoute,
    private productdealService: ProductDealService, 
    private cartService: CartService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.products = this.productdealService.getProductdeal();    
  }

  addToCart(product: ProductDeal){
    this.cartService.addItem(product);    
  }

}

