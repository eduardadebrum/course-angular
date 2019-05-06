import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestauranDetailComponent } from './restaurants/restauran-detail/restauran-detail.component';
import { MenuComponent } from './restaurants/restauran-detail/menu/menu.component';
import { ReviewsComponent } from './restaurants/restauran-detail/reviews/reviews.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    {
        path: 'restaurants/:id', component: RestauranDetailComponent,
        children: [
            { path: '', redirectTo:'menu', pathMatch:'full'},
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent },
        ]
    }
]