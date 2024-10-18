import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart, CartItem, CartTotals } from '../shared/model/cart';
import { CartService } from './cart.service';
import { CartDetailsComponent } from '../core/cart-details/cart-details.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartDetailsComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cart$!: Observable<Cart | null>;
  cartTotals$!: Observable<CartTotals | null>;

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cart$ = this.cartService.cart$;
    this.cartTotals$ = this.cartService.cartTotals$;
  }
  incrementItemQuantity(item: CartItem) {
    this.cartService.incrementItemQuantity(item);
  }
  decrementItemQuantity(item: CartItem) {
    this.cartService.decrementItemQuantity(item);
  }
  removeCartItem(item: CartItem) {
    this.cartService.removeItemFromCart(item);
  }
}
