import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ApiService } from '../service/api.service';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  id: any;
  data: any;
  filterCategory: any;
  constructor(private route:ActivatedRoute, private api : ApiService, private auth: AuthService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getOneIn();
  }

  getOne() {
    this.api.getOne(this.id).subscribe(data =>{
      this.data = data;
      console.log(data);
    })
  }
  getOneIn() {
    this.api.getOneIn(this.id).subscribe(data =>{
      this.data = data;
      console.log(data);
    })
  }


  dec(data) {
    if(data.quantity != 1){
      data.quantity -=  1;
    }
  }
  inc(data) {
    if(data.quantity != 5){
      data.quantity +=  1;
    }
  }

  itemCart: any = [];
  addCart(data) {
    // console.log(prod);
    let cartDataNull = localStorage.getItem('localCart');
    if(cartDataNull == null){
      let storeDataGet: any = [];
      storeDataGet.push(data);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));
    }else {
      var pid = data.id;
      let index: number = -1;
      this.itemCart = JSON.parse(localStorage.getItem('localCart'));
      for(let i=0; i<this.itemCart.length; i++) {
        if(parseInt(pid) === parseInt(this.itemCart[i].id)){
          this.itemCart[i].quantity = data.quantity;
          index = i;
          break;
        }
      }
        if(index == -1) {
          this.itemCart.push(data);
          localStorage.setItem('localCart', JSON.stringify(this.itemCart));
        }else {
          localStorage.setItem('localCart', JSON.stringify(this.itemCart));
        }
        console.log(data);
    }
    this.cartNumberFun();
    // localStorage.setItem('localCart', JSON.stringify(prod));
  }

  // cart count number display
  cartNumber: number = 0;
  cartNumberFun() {
    var cartValue = JSON.parse(localStorage.getItem('localCart'));
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
    // console.log(this.cartNumber);
  }

}
