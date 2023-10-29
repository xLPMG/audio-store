import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { InfotabComponent } from './components/infotab/infotab.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './components/about/about.component';
import { CreativityComponent } from './components/creativity/creativity.component';
import { SportsComponent } from './components/sports/sports.component';
import { PilotsComponent } from './components/pilots/pilots.component';
import { PortableComponent } from './components/portable/portable.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkplaceComponent } from './components/workplace/workplace.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeadphonesComponent } from './components/categories/headphones/headphones.component';
import { EarphonesComponent } from './components/categories/earphones/earphones.component';
import { SpeakersComponent } from './components/categories/speakers/speakers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfotabComponent,
    ProductListComponent,
    ProductPageComponent,
    CategoryPageComponent,
    CartComponent,
    AboutComponent,
    CreativityComponent,
    SportsComponent,
    PilotsComponent,
    PortableComponent,
    FooterComponent,
    WorkplaceComponent,
    ContactComponent,
    HeadphonesComponent,
    EarphonesComponent,
    SpeakersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: InfotabComponent },
      { path: 'products/:productId', component: ProductPageComponent },

      { path: 'categories/headphones', component: HeadphonesComponent },
      { path: 'categories/earphones', component: EarphonesComponent },
      { path: 'categories/speakers', component: SpeakersComponent },
      { path: 'categories/:category', component: CategoryPageComponent },

      { path: 'cart', component: CartComponent },
    ]),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
