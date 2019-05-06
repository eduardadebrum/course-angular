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
import { RestauranDetailComponent } from './restaurants/restauran-detail/restauran-detail.component';
import { MenuComponent } from './restaurants/restauran-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurants/restauran-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurants/restauran-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurants/restauran-detail/reviews/reviews.component';
import { ShoppingCartService } from './restaurants/restauran-detail/shopping-cart/shopping-cart.service';

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
    MenuItemComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // passando array de rotas.
  ],
  providers: [RestaurantService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
