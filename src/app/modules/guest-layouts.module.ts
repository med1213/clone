import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GuestLayoutsRoutingModule } from './guest-layouts-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(GuestLayoutsRoutingModule)
  ]
})
export class GuestLayoutsModule { }
