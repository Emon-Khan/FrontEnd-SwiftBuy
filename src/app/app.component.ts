import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { ShopComponent } from './shop/shop.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavBarComponent,
    ShopComponent,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'SwiftBuy43';
  pageTitle: string = 'Welcome to SwiftBuy online shop';
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.loadBasket();
  }
  loadBasket() {
    const cartId = localStorage.getItem('angular_cart_id');
    if (cartId) {
      this.cartService.getCart(cartId).subscribe({
        next: (response) => {
          console.log('Cart Initialized');
          console.log(response);
        },
        error: (error) => console.log(error),
      });
    }
  }
}
