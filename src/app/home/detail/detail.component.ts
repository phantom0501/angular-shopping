import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/_core/models/product';
import { ProductServiceService } from 'src/app/_core/services/product-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  productDetails: Product = new Product();
  quantityProduct: number = 1;
  title: string = 'lorem';
  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService
  ) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails(): void {
    const params: Params = this.route.params.pipe();
    let { id } = params.value;
    this.productService
      .getProductDetails(id)
      .pipe()
      .subscribe((p) => (this.productDetails = p));
  }

  handleQuantity(value: boolean): void {
    if (value) {
      this.quantityProduct++;
    } else if (this.quantityProduct > 1) {
      this.quantityProduct--;
    }
  }
}
