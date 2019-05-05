import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant/restaurant.service';
import { Restaurant } from '../restaurant/restaurant.model'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'mt-restauran-detail',
  templateUrl: './restauran-detail.component.html',
  styleUrls: ['./restauran-detail.component.css']
})

export class RestauranDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(
    private restaurantsService: RestaurantService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.restaurantsService
      .restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant);
  }

}
