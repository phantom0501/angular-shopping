import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_core/models/product';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewChecked {
  local: any = localStorage.getItem('localCart');
  localPare: Product[] = JSON.parse(this.local);
  notifyStore: Product[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewChecked(): void {}
}
