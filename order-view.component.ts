import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products';
import { Order } from '../models/orders';
import { ProductsService } from '../services/products.service';
import { ProductRequestService } from '../services/product-request.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
  minDate = new Date()
  product: Product = {}
  order: Order = {
    id: 0,
    itemName: '',
    quantity: '',
    dateOfOrder: new Date(),
    customerName: '',
    customerAddress: {
      doorNumber: '',
      streetName: '',
      city: '',
      state: '',
      zipCode: ''
    },
    customerEmail: '',
    customerPhone: '',
    totalAmount: ''
  }
  submitStatus: boolean = false

  constructor(
    private productService: ProductsService,
    private orderRequestService: ProductRequestService,
    private activatedRoute: ActivatedRoute,
    private routeService: RouteService,
    private snackBar: MatSnackBar,
    
    ) {this.minDate.setDate(this.minDate.getDate()) }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      let id = param.get("id") ?? '';
      this.productService.getProduct(id).subscribe(data => {
        this.product = data;
        this.submitStatus = false
      })
    })
  }
  
  makeRequest() {
    if (
      this.order.customerName && this.order.customerEmail && this.order.customerPhone && this.order.dateOfOrder)
      this.product.price=this.order.totalAmount
      this.order.itemName = this.product.name ?? ''
    this.orderRequestService.saveOrderRequest(this.order).subscribe({
      next: (data) => {
        this.snackBar.open("Order Received", "success", {
          duration: 3000
        })
        this.submitStatus = true
        this.routeService.navigateToHomeView()
      },
      error: error => {
        alert(error)
      }
    })
  }

  canDeactivate() {
    if (!this.submitStatus) {
      this.submitStatus = confirm("Are you sure to leave the page,the details you have entered is not stored. Click 'OK' to exit (or) 'Cancel' to continue");
      return this.submitStatus;
    }
    return true
  }
  
calculateTotalPrice(){
  let quantity = this.order.quantity
  if(this.product.price != undefined ){
    this.order.totalAmount = quantity * this.product.price
  }
}
}
