import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurant/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantsSerivce: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
     // pegar parametro do pai
     console.log('REVIEWS');
    this.reviews = this.restaurantsSerivce
      .reviewsOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}
