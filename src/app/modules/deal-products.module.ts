import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealProductsComponent } from '../views/deal-products/deal-products.component';
import { DealProductsRoutingModule } from './deal-products-routing.module';



@NgModule({
  declarations: [DealProductsComponent],
  imports: [
    CommonModule,
    DealProductsRoutingModule
  ],
  exports: [DealProductsComponent]
})
export class DealProductsModule { }
