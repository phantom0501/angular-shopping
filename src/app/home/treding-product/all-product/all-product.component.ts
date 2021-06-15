import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_core/models/product';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
})
export class AllProductComponent implements OnInit, AfterViewChecked {
  @Input() products: Product[] = [];
  cartItem: Product[] = [];

  constructor() {}

  ngOnInit(): void {}

  addToCart(product: Product): void {
    let quantity: any = 1;
    let productUpdate = { ...product, quantity };

    this.cartItem.push(productUpdate);

    localStorage.setItem('localCart', JSON.stringify(this.cartItem));
  }

  ngAfterViewChecked(): void {}
}
