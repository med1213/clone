import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetailComponent } from '../views/products-detail/products-detail.component';
import { ProductsDetailRoutingModule } from './products-detail-routing.module';



@NgModule({
  declarations: [ProductsDetailComponent],
  imports: [
    CommonModule,
    ProductsDetailRoutingModule
  ],
  exports: [ProductsDetailComponent]
})
export class ProductsDetailModule { }
