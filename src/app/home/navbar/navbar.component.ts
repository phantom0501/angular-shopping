import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_core/models/product';
import { CartService } from 'src/app/_core/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cartCount: number = 0;

  constructor(private cartService: CartService) {
    this.cartService.cartSubject.subscribe((data) => (this.cartCount = data));
  }

  ngOnInit(): void {
    this.myCartCount();
  }

  myCartCount(): void {
    if (localStorage.getItem('localCart') !== null) {
      let cartLocal = JSON.parse(localStorage.getItem('localCart') || '{}');
      this.cartCount = cartLocal.length;
    }
  }
}
