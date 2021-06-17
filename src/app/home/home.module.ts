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
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeTemplateComponent,
    children: [
      { path: '', component: HomeComponent },

      {
        path: 'detail/:id',
        component: DetailComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
    ],
  },

  { path: 'login', component: LoginComponent },
];

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
    DetailComponent,
    FooterComponent,
    CartComponent,
    LoginComponent,
  ],
  exports: [
    NavbarComponent,
    CarouselComponent,
    BannerComponent,
    TopCategoriesComponent,
    TredingProductComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(homeRoutes),
  ],
})
export class HomeModule {}
