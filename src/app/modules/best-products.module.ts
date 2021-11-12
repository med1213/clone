import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestProductsComponent } from '../views/best-products/best-products.component';
import { BestProductsRoutingModule } from './best-products-routing.module';



@NgModule({
  declarations: [BestProductsComponent],
  imports: [
    CommonModule,
    BestProductsRoutingModule
  ],
  exports: [BestProductsComponent]
})
export class BestProductsModule { }
