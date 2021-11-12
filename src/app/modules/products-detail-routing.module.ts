import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDetailComponent } from '../views/products-detail/products-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsDetailComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsDetailRoutingModule { }
