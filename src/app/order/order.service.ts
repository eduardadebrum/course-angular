import { Injectable } from '@angular/core';
import { ShoppingCartService } from 'app/restaurants/restauran-detail/shopping-cart/shopping-cart.service';
import { CartItem } from 'app/restaurants/restauran-detail/shopping-cart/cart-item';

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService) { }

  cartItems() : CartItem[] {
    return this.cartService.items
  }
}
