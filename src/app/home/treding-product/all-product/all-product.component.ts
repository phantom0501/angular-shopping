import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_core/models/product';
import { CartService } from 'src/app/_core/services/cart.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
})
export class AllProductComponent implements OnInit, AfterViewChecked {
  @Input() products: Product[] = [];
  cartItem: Product[] = localStorage.getItem('localCart')
    ? JSON.parse(localStorage.getItem('localCart') || '{}')
    : [];
  cartNumber: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(product: Product): void {
    let quantity: any = 1;
    let productUpdate = { ...product, quantity };
    let index = this.cartItem.findIndex((item) => item.id === productUpdate.id);
    if (index !== -1) {
      this.cartItem[index].quantity++;
    } else {
      this.cartItem.push(productUpdate);
    }
    localStorage.setItem('localCart', JSON.stringify(this.cartItem));

    this.cartNumberFunc();
  }

  cartNumberFunc(): void {
    let cartValue = JSON.parse(localStorage.getItem('localCart') || '{}');
    this.cartNumber = cartValue.length;
    this.cartService.cartSubject.next(this.cartNumber);
  }

  ngAfterViewChecked(): void {}
}
