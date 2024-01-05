import { Component,OnInit } from '@angular/core';
import { Product } from '../models/products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products : Array<Product>=[]

  constructor(private productService : ProductsService){}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next:data =>{
        this.products = data
      },
      error: error =>{
        alert(error)
      }
      
    })
  }


  onSearchTextChanged(filterText: string) {
    this.productService.getAllProducts()
      .subscribe({
        next: (products) => {
          if(filterText !== ''){
            this.products = products.filter(product => product?.name?.toLowerCase().includes(filterText.toLowerCase()))
          }
          else{
            this.products = products
          }
      },
        error: (error) => {
          alert('Network error, please try again later.')
        }
      })
  }


  onFilterValueChanged(filterText: string) {
    this.productService.getAllProducts()
      .subscribe({
        next: (products) => {
          if(filterText !== ''){
            this.products = products.filter(product => product?.category?.toLowerCase().includes(filterText.toLowerCase()))
          }
          else{
            this.products = products
          }
      },
        error: (error) => {
          alert('Network error, please try again later.')
        }
      })
  }

}
