import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { META_API } from 'app/app.api'
import { ErrorHandler } from 'app/app.error.handler'
import { MenuItem } from '../restauran-detail/menu-item/menu-item';

@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }

  restaurants(): Observable<Restaurant[]> {
    return this.http
      .get(`${META_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get(`${META_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${META_API}/restaurants/${id}/reviews`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }

  menuOfRestaurant(id:string) : Observable<MenuItem[]> {
    return this.http.get(`${META_API}/restaurants/${id}/menu`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }

}
