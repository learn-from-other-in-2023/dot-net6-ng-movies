import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { NgmaterialModule } from './ngmaterial/ngmaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './modules/home/home.component';
import { ProductsListComponent } from './modules/products/products-list/products-list.component';
import { NotFoundComponent } from './core/errors/not-found/not-found.component';
import { ProductQuickviewComponent } from './modules/products/product-quickview/product-quickview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsListComponent,
    NotFoundComponent,
    ProductQuickviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgmaterialModule,
    SharedModule,
    BrowserAnimationsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
