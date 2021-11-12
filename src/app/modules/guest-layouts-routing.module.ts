import { Routes } from '@angular/router';

export const GuestLayoutsRoutingModule: Routes = [
  { 
    path: '',
    loadChildren: () => import('./home-view.module').then(m => m.HomeViewModule)
  },
  { 
    path: 'cart',
    loadChildren: () => import('./cart.module').then(m => m.CartModule)
  },
  {
    path: 'product-detail/:id',
    loadChildren: () => import('./products-detail.module').then(m => m.ProductsDetailModule)
  }
];
