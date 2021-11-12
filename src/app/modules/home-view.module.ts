import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from '../views/home-view/home-view.component';
import { HomeViewRoutinModule } from './home-view-routin.module';
import { SliderModule } from './slider.module';
import { DealProductsModule } from './deal-products.module';
import { BestProductsModule } from './best-products.module';
import { NewProductsModule } from './new-products.module';



@NgModule({
  declarations: [HomeViewComponent],
  imports: [
    CommonModule,
    HomeViewRoutinModule,
    SliderModule,
    DealProductsModule,
    NewProductsModule,
    BestProductsModule
  ]
})
export class HomeViewModule { }
