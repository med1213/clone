import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DealProductsComponent } from '../views/deal-products/deal-products.component';

const routes : Routes = [
  {
    path: '',
    component: DealProductsComponent
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
export class DealProductsRoutingModule { }
