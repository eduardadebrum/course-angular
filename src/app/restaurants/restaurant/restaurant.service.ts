import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { META_API } from 'app/app.api'
import {ErrorHandler} from 'app/app.error.handler'

@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }

  restaurants(): Observable<Restaurant[]> {
    return this.http
      .get(`${META_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  restaurantById(id:string): Observable<Restaurant> {
    return this.http.get(`${META_API}/restaurants/${id}`).map(response => response.json()) 
      .catch(ErrorHandler.handleError);
  }
  
}
