import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestLayoutsComponent } from './guest-layouts/guest-layouts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavHeaderComponent } from './share-components/nav-header/nav-header.component';
import { FooterComponent } from './share-components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestLayoutsComponent,
    PageNotFoundComponent,
    NavHeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
