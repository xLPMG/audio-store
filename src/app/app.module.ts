import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { InfotabComponent } from './components/infotab/infotab.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfotabComponent,
    ProductListComponent,
    ProductPageComponent,
    CategoryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: InfotabComponent },
      { path: 'products/:productId', component: ProductPageComponent },
      { path: 'categories/:category', component: CategoryPageComponent },
    ]),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
