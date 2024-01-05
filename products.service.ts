import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL : string = "http://localhost:3000/products"
  constructor(private http : HttpClient) { }

  getAllProducts():Observable<Array<Product>>{
    return this.http.get<Array<Product>>(this.URL)
  }
  getProduct(id : string) : Observable<Product>{
    return this.http.get<Product>(`${this.URL}/${id}`)
  }
}
