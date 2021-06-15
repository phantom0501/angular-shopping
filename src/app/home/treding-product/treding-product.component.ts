import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_core/models/product';
import { ProductService } from 'src/app/_core/services/product.service';

@Component({
  selector: 'app-treding-product',
  templateUrl: './treding-product.component.html',
  styleUrls: ['./treding-product.component.scss'],
})
export class TredingProductComponent implements OnInit {
  tabProducts: string[] = ['All', 'BestSeller', 'New'];
  selectedTab?: string;
  products: Product[] = [];
  productCart: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.selectedTab = this.tabProducts[0];
    this.getProducts();
  }

  chooseTab(tabValue: string): void {
    this.selectedTab = tabValue;
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe((product) => (this.products = product));
  }
}
