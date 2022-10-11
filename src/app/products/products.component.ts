import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  searchKey: string = ""; //for search
  public productList : any; //all the products which are comming from api we need to store it in productList
  public filterCategory: any;
  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res => {
      this.productList = res;
      this.filterCategory = res;
      // now in json object which we have does not have quantity and total fields
      // so to add in json object we need to do below part
      this.productList.forEach((a:any) => {
        if(a.category === "men's clothing" || a.category === "women's clothing") {
          a.category = "fashion"
        }
        Object.assign(a,{quantity: 1, total: a.price});
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any) => {
      this.searchKey = val;
    })

  }
  addtocart(item: any) {
    this.cartService.addtocart(item);
  }
  // for products category
  filter(category:string) {
    this.filterCategory = this.productList
    .filter((a:any) => {
      if(a.category == category || category == ''){
        return a;
      }
    })
  }
}
