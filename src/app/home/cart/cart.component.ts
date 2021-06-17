import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Product } from './../../_core/models/product';
import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { CartService } from 'src/app/_core/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, AfterViewChecked {
  @ViewChild('getInfo') formOrder!: NgForm;
  localPare: Product[] = JSON.parse(localStorage.getItem('localCart') || '{}');
  orderList: any[] = JSON.parse(localStorage.getItem('localUser') || '{}');
  cartNumber: number = 0;
  subTotal: number = 0;
  EcoTax: number = 0;
  VAT: number = 0;
  total: number = 0;
  form!: FormGroup;

  constructor(private router: Router, private cartService: CartService) {
    this.subTotalFunc();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      FullName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9 ]{10}'),
      ]),
      Address: new FormControl('', [Validators.required]),
    });
    this.localPare;
    this.subTotalFunc();
  }

  get FullName() {
    return this.form.get('FullName');
  }

  get Email() {
    return this.form.get('Email');
  }

  get Phone() {
    return this.form.get('Phone');
  }

  get Address() {
    return this.form.get('Address');
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

  submit(): void {
    this.orderList.push(this.form.value);
    this.formOrder.reset();

    localStorage.setItem('localUser', JSON.stringify(this.orderList));
  }

  openPopupSuccess(): void {
    Swal.fire('Order Success', '', 'success');
    this.localPare = [];

    localStorage.setItem('localCart', JSON.stringify(this.localPare));

    this.cartNumberFunc();
  }

  ngAfterViewChecked(): void {}
}
