import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  
  selectedProducts :any[] = [];

  constructor() { }


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


}
