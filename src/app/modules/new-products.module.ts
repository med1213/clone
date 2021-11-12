import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductsComponent } from '../views/new-products/new-products.component';
import { NewProductsRoutingModule } from './new-products-routing.module';



@NgModule({
  declarations: [NewProductsComponent],
  imports: [
    CommonModule,
    NewProductsRoutingModule
  ],
  exports:[NewProductsComponent]
})
export class NewProductsModule { }
