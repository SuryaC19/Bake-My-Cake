import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class ProductRequestService {
  URL : string ='  http://localhost:3000/orders'
  constructor(private http : HttpClient) { }

  getAllOrderRequest() : Observable<Array<Order>>{
    return this.http.get<Array<Order>>(`${this.URL}`)
  }

  saveOrderRequest(order:Order) : Observable<Order>{
    return this.http.post<Order>(`${this.URL}`,order)
  }
}
