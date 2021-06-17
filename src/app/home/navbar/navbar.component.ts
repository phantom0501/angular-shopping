import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Product } from 'src/app/_core/models/product';
import { CartService } from 'src/app/_core/services/cart.service';
import { ProductService } from 'src/app/_core/services/product.service';
import { UsersService } from 'src/app/_core/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cartCount: number = 0;
  products: Product[] = [];
  userLogin: any = localStorage.getItem('userLogin')
    ? JSON.parse(localStorage.getItem('userLogin') || '')
    : '';

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private userService: UsersService,
    private route: Router
  ) {
    this.cartService.cartSubject.subscribe((data) => (this.cartCount = data));
  }

  ngOnInit(): void {
    this.myCartCount();
    this.productService
      .getProducts()
      .subscribe((product) => (this.products = product));
  }

  search(term: string): void {}

  logout(): void {
    if (localStorage.getItem('userLogin')) {
      localStorage.removeItem('userLogin');
      this.route.navigate(['/']).then(() => {
        window.location.reload();
      });
    }
  }

  myUserLogin(): void {}

  myCartCount(): void {
    if (localStorage.getItem('localCart') !== null) {
      let cartLocal = JSON.parse(localStorage.getItem('localCart') || '{}');
      this.cartCount = cartLocal.length;
    }
  }
}
