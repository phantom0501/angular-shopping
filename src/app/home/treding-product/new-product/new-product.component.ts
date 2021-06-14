import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_core/models/product';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {
  @Input() products: Product[] = [];
  constructor() {}

  ngOnInit(): void {
    this.filterNewProduct();
  }

  filterNewProduct(): void {
    let filterProduct = this.products.filter((item) => item.danhGia !== 10);

    this.products = filterProduct;
  }
}
