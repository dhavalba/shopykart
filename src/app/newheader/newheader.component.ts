import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-newheader',
  templateUrl: './newheader.component.html',
  styleUrls: ['./newheader.component.css']
})
export class NewheaderComponent implements OnInit {
  public searchTerm : string;
  searchKey: string = ""; //for search
  constructor(private auth: AuthService) {
    this.auth.cartSubject.subscribe((res) => {
      this.cartCount = res;
    })
  }

  ngOnInit(): void {
    this.cartCountNum();
  }
  cartCount: number = 0;
  cartCountNum() {
    if(localStorage.getItem('localCart') != null) {
      var cartitem = JSON.parse(localStorage.getItem('localCart'));
      // console.log(cartitem);
      this.cartCount = cartitem.length;
    }
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.auth.search.next(this.searchTerm);
  }

}
