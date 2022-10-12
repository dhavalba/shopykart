import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import {CartdetailsComponent} from './cartdetails/cartdetails.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [
  {path: '', redirectTo: "home", pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cartdetails', component: CartdetailsComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'viewdetails/:id', component: ViewdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
