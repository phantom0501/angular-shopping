import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BannerComponent } from './banner/banner.component';
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { TredingProductComponent } from './treding-product/treding-product.component';
import { HomeComponent } from './home.component';
import { AllProductComponent } from './treding-product/all-product/all-product.component';
import { BestSellerComponent } from './treding-product/best-seller/best-seller.component';
import { NewProductComponent } from './treding-product/new-product/new-product.component';
import { HomeTemplateComponent } from './home-template/home-template.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CarouselComponent,
    BannerComponent,
    TopCategoriesComponent,
    TredingProductComponent,
    HomeComponent,
    AllProductComponent,
    BestSellerComponent,
    NewProductComponent,
    HomeTemplateComponent,
  ],
  exports: [
    NavbarComponent,
    CarouselComponent,
    BannerComponent,
    TopCategoriesComponent,
    TredingProductComponent,
    HomeComponent,
  ],
  imports: [CommonModule],
})
export class HomeModule {}
