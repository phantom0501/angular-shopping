import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/_core/models/product';
import { ProductService } from 'src/app/_core/services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  productDetails: Product = new Product();
  title: string = 'lorem';
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails(): void {
    const params: Params = this.route.params.pipe();
    let { id } = params.value;

    this.productService
      .getProductDetails(id)
      .subscribe((p) => (this.productDetails = p));
  }
}
