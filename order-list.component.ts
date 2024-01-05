import { Component, OnInit, ViewChild } from '@angular/core';
import { Order } from '../models/orders';
import { ProductRequestService } from '../services/product-request.service';
import { RouteService } from '../services/route.service';
import { AuthService } from '../services/auth.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  displayedColumns: string[] = ['id','dateOfOrder','customerName', 'customerEmail', 'customerPhone', 'itemName','quantity','totalAmount'];
  orders: Order[] = [];
  

  constructor(private productRequestService : ProductRequestService,
    private authService : AuthService,
    private routeService : RouteService){}

  ngOnInit(): void{
    this.productRequestService.getAllOrderRequest().subscribe({
      next: data => {
        this.orders = data;
      },
      error: err => {
        alert(err);
      }
    });
  }
  
logOut(){
  // this.authService.logout
  this.routeService.navigateToLoginView()
}
}
