import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { OrderDetails } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  
  selectedProducts :any[] = [];
  private baseUrl = 'http://localhost:3002/api/orders';

  constructor(private http: HttpClient) { }


  addProduct(product:any) {
    this.selectedProducts.push(product);
    console.log(this.selectedProducts)
    console.log(this.selectedProducts.length)
  }

  removeProduct(product:any) {
    const index = this.selectedProducts.indexOf(product);
    this.selectedProducts.splice(index, 1);
  }

  clearCart() {
    this.selectedProducts = [];
  }

  getSelectedProducts() {
    return this.selectedProducts;
  }

  orderSelectedProducts(products: any[]): Observable<any> {
    // console.log("ordered", products)
    let products_id_list = products.map(product => product.id)

    return this.http.post(`${this.baseUrl}`, products_id_list);
    
  }

}
