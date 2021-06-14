import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_core/models/product';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss'],
})
export class BestSellerComponent implements OnInit {
  @Input() products: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    this.filterTheBest();
    console.log(this.products);
  }

  filterTheBest(): void {
    let bestProduct = this.products.filter((item) => item.danhGia === 10);

    this.products = bestProduct.splice(0, 12).reverse();
  }
}
