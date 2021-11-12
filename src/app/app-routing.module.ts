import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestLayoutsComponent } from './guest-layouts/guest-layouts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: GuestLayoutsComponent,

    children: [
      {
        path: '',
        loadChildren: () => import('./modules/guest-layouts.module').then( m => m.GuestLayoutsModule)
      }
    ]
  },
  {
    path: '404', component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
