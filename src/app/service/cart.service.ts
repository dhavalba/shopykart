import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor(private http: HttpClient) { }
  getProducts() {
    return this.productList.asObservable();
  }
  setProducts(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtocart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.gettotalprice();
    console.log(this.cartItemList);
  }
  gettotalprice(): number {
    let grandtotal = 0;
    this.cartItemList.map((a:any) => {
      grandtotal = grandtotal+a.total;
    })
    return grandtotal;

  }
  removecartitem(product: any) {
    this.cartItemList.map((a:any, index: any)=> {
      if(product.id === a.id) {
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
    // localStorage.setItem("productList",JSON.stringify(this.productList));
  }
  removeallcart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
    // localStorage.setItem("productList",JSON.stringify(this.productList));
  }
}
