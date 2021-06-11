import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treding-product',
  templateUrl: './treding-product.component.html',
  styleUrls: ['./treding-product.component.scss'],
})
export class TredingProductComponent implements OnInit {
  tabProducts: string[] = ['All', 'BestSeller', 'New'];

  selectedTab?: string;

  constructor() {}

  ngOnInit(): void {
    this.selectedTab = this.tabProducts[0];
  }

  chooseTab(tabValue: string): void {
    this.selectedTab = tabValue;
  }
}
