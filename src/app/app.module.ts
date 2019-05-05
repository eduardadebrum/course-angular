import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'

import { ROUTES } from './app.routes';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';

import {RestaurantService} from './restaurants/restaurant/restaurant.service';
import { RestauranDetailComponent } from './restaurants/src/app/restaurants/restauran-detail/restauran-detail.component';
import { MenuComponent } from './restaurants/restauran-detail/src/app/restaurants/restauran-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurants/restauran-detail/src/app/restaurants/restauran-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurants/restauran-detail/src/app/restaurants/restauran-detail/menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestauranDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // passando array de rotas.
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
