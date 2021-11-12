import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BestProductsComponent } from '../views/best-products/best-products.component';

const routes : Routes = [
  {
    path: '',
    component: BestProductsComponent
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
export class BestProductsRoutingModule { }
