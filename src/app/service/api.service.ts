import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProduct() {
    // return this.http.get<any>("https://fakestoreapi.com/products")
    return this.http.get<any>("http://localhost:3000/products")
    .pipe(map((res:any) => {
      return res;
    }))
  }
  getOne(id: any) {
    // return this.http.get<any>("http://localhost:3000/products/"+ id)
    return this.http.get<any>("https://fakestoreapi.com/products/"+ id)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  getProductIn() {
    // return this.http.get<any>("https://fakestoreapi.com/products")
    return this.http.get<any>("http://localhost:3000/productArray")
    .pipe(map((res:any) => {
      return res;
    }))
  }
  getOneIn(id: any) {
    // return this.http.get<any>("https://fakestoreapi.com/products/"+ id)
    return this.http.get<any>("http://localhost:3000/productArray/"+ id)
    .pipe(map((res:any) => {
      return res;
    }))
  }
}
