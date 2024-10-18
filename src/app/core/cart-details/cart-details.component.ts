import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../shared/model/cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.css',
})
export class CartDetailsComponent {
  @Input() items: CartItem[] = [];
  @Output() increment: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() decrement: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() remove: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  incrementItemQuantity(item: CartItem) {
    this.increment.emit(item);
  }
  decrementItemQuantity(item: CartItem) {
    this.decrement.emit(item);
  }
  removeCartItem(item: CartItem) {
    this.remove.emit(item);
  }
}
