import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.component.html',
  styleUrls: ['./cartdetails.component.css']
})
export class CartdetailsComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.cartDetails();
    this.loadCart();
  }
  getCartDetails: any = [];
  cartDetails() {
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart'));
      // console.log(this.getCartDetails);
    }

  }


  dec(id, quantity) {
    for(let i=0; i<this.getCartDetails.length; i++){
      if(this.getCartDetails[i].id === id){
      if(quantity != 1)
      this.getCartDetails[i].quantity = parseInt(quantity) - 1;
      }
      }
      localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
      this.loadCart();
  }
  inc(id, quantity) {
    for(let i=0; i<this.getCartDetails.length;i++){
        if(this.getCartDetails[i].id  === id){
          if(quantity != 5)
          this.getCartDetails[i].quantity = parseInt(quantity) + 1;
        }
      }
      localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
      this.loadCart();
  }

  total: number = 0;
  loadCart() {
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart'));
      this.total = this.getCartDetails.reduce(function(acc, val){
        return acc + (val.price * val.quantity);
      }, 0);
    }
  }

  removeAll() {
    localStorage.removeItem('localCart');
    this.getCartDetails = [];
    this.total = 0;
    this.cartNumber = 0;
    this.auth.cartSubject.next(this.cartNumber);
  }

  singleDelete(id) {
    console.log(id);
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart'));
      for(let i=0; i<this.getCartDetails.length; i++){
        if(this.getCartDetails[i].id === id) {
          this.getCartDetails.splice(i, 1);
          localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
          this.loadCart();
          this.cartNumberFun();
        }
      }
    }
  }

  // for cart count display on header after we delete items
cartNumber: number = 0;
cartNumberFun() {
  var cartValue = JSON.parse(localStorage.getItem('localCart'));
  this.cartNumber = cartValue.length;
  this.auth.cartSubject.next(this.cartNumber);
}
}
