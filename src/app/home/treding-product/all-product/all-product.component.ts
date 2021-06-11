import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_core/models/product';
import { ProductServiceService } from 'src/app/_core/services/product-service.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss'],
})
export class AllProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService
      .getProduct()
      .subscribe((product) => (this.products = product));
  }
}
