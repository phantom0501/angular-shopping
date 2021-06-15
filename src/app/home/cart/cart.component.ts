import { Product } from './../../_core/models/product';
import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, AfterViewChecked {
  cartStore: any[] = [];
  local: any = localStorage.getItem('localCart');
  localPare: Product[] = JSON.parse(this.local);

  constructor() {}

  ngOnInit(): void {
    this.cartStore = this.localPare;
  }

  handleQuantity(cartItem: number, value: boolean): void {
    let index = this.cartStore.findIndex((item) => item.id === cartItem);

    if (value && index !== -1) {
      this.cartStore[index].quantity++;
    } else if (this.cartStore[index].quantity > 1) {
      this.cartStore[index].quantity--;
    }
  }

  delete(cartItem: Product): void {
    let index = this.localPare.findIndex((item) => item.id === cartItem.id);
    if (index !== -1) {
      this.localPare.splice(index, 1);
    }

    localStorage.setItem('localCart', JSON.stringify(this.localPare));
  }

  ngAfterViewChecked(): void {}
}
