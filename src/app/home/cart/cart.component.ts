import Swal from 'sweetalert2';
import { Product } from './../../_core/models/product';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { CartService } from 'src/app/_core/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, AfterViewChecked {
  localPare: Product[] = JSON.parse(localStorage.getItem('localCart') || '{}');
  orderList?: [number, string];
  cartNumber: number = 0;
  subTotal: number = 0;
  EcoTax: number = 0;
  VAT: number = 0;
  total: number = 0;

  constructor(private router: Router, private cartService: CartService) {
    this.subTotalFunc();
  }

  ngOnInit(): void {
    this.localPare;
    this.subTotalFunc();
  }

  handleQuantity(cartItem: number, value: boolean): void {
    let index = this.localPare.findIndex((item) => item.id === cartItem);

    if (value && index !== -1) {
      if (this.localPare[index].quantity !== 5) {
        this.localPare[index].quantity++;
      }
    } else if (this.localPare[index].quantity > 1) {
      this.localPare[index].quantity--;
    }

    localStorage.setItem('localCart', JSON.stringify(this.localPare));

    this.subTotalFunc();
  }

  delete(cartItem: Product): void {
    let index = this.localPare.findIndex((item) => item.id === cartItem.id);
    if (index !== -1) {
      this.localPare.splice(index, 1);
    }

    localStorage.setItem('localCart', JSON.stringify(this.localPare));

    this.subTotalFunc();
    this.cartNumberFunc();
  }

  subTotalFunc(): void {
    this.subTotal = this.localPare.reduce((subTotal, item) => {
      return (subTotal += item.price * item.quantity);
    }, 0);

    this.EcoTax = this.localPare.reduce((subTotal, item) => {
      return (subTotal += item.quantity);
    }, 0);

    this.VAT = (this.subTotal / 100) * 20;

    this.total = this.subTotal + this.EcoTax + this.VAT;
    localStorage.setItem('localCart', JSON.stringify(this.localPare));
  }

  navigate(): void {
    this.router.navigate(['/']);
  }

  cartNumberFunc(): void {
    let cartValue = JSON.parse(localStorage.getItem('localCart') || '{}');
    this.cartNumber = cartValue.length;
    this.cartService.cartSubject.next(this.cartNumber);
  }

  submit(value: any): void {
    console.log(value);
  }

  openPopupSuccess(): void {
    Swal.fire('Order Success', '', 'success');
  }

  ngAfterViewChecked(): void {}
}
