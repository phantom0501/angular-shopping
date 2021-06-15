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
  }

  filterTheBest(): void {
    this.products = this.products
      .filter((item) => item.price < 100)
      .sort((a, b) => a.price - b.price);
  }
}
