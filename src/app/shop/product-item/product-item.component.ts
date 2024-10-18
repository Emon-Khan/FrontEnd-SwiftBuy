import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductDto } from '../../shared/model/products';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product?: ProductDto;
  constructor(private cartService: CartService) {}
  addItemToCart() {
    this.product && this.cartService.addItemToCart(this.product);
  }
}
