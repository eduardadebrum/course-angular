import { Injectable } from '@angular/core';
import { ShoppingCartService } from 'app/restaurants/restauran-detail/shopping-cart/shopping-cart.service';
import { CartItem } from 'app/restaurants/restauran-detail/shopping-cart/cart-item';
import { Observable } from 'rxjs/Observable';
import { Order } from './order.model';
import { Http, Headers, RequestOptions } from '@angular/http';
import { META_API } from '../app.api';

@Injectable()
export class OrderService {
 
  constructor(private cartService: ShoppingCartService, private http: Http) { }

  cartItems(): CartItem[] {
    return this.cartService.items
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item)
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item)
  }

  itemsValue(): number {
    return this.cartService.total()
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    return this.http
      .post(`${META_API}/orders`, JSON.stringify(order), new RequestOptions({ headers: headers }))
      .map(response => response.json())
  }

  clear(): void {
    return this.cartService.clear()
  }

}
