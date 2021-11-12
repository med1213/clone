import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewProductsComponent } from '../views/new-products/new-products.component';

const routes : Routes = [
  {
    path: '',
    component: NewProductsComponent
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
export class NewProductsRoutingModule { }
