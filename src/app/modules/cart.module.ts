import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../views/cart/cart.component';
import { CartRoutingModule } from './cart-routing.module';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  exports: [CartComponent]
})
export class CartModule { }
