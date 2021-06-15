import { Product } from './../../_core/models/product';
import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { JsonpClientBackend } from '@angular/common/http';
import { CartService } from 'src/app/_core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, AfterViewChecked {
  localPare: Product[] = JSON.parse(localStorage.getItem('localCart') || '{}');
  cartNumber: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.localPare;
  }

  handleQuantity(cartItem: number, value: boolean): void {
    let index = this.localPare.findIndex((item) => item.id === cartItem);

    if (value && index !== -1) {
      this.localPare[index].quantity++;
    } else if (this.localPare[index].quantity > 1) {
      this.localPare[index].quantity--;
    }
  }

  delete(cartItem: Product): void {
    let index = this.localPare.findIndex((item) => item.id === cartItem.id);
    if (index !== -1) {
      this.localPare.splice(index, 1);
    }

    localStorage.setItem('localCart', JSON.stringify(this.localPare));

    this.cartNumberFunc();
  }

  cartNumberFunc(): void {
    let cartValue = JSON.parse(localStorage.getItem('localCart') || '{}');
    this.cartNumber = cartValue.length;
    this.cartService.cartSubject.next(this.cartNumber);
  }

  ngAfterViewChecked(): void {}
}
