import { Component, OnInit, Input } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

  export class CheckoutComponent {
    selectedProducts: any = [];

    constructor(private checkoutService: CheckoutService) {
      this.selectedProducts = this.checkoutService.getSelectedProducts();
    }
  
    removeProduct(product:any) {
      console.log('Removing:', product);
      const index = this.selectedProducts.indexOf(product);
      this.selectedProducts.splice(index, 1);
    }

    getTotal() {
      return this.selectedProducts.reduce((acc:number, product:any) => acc + product.price, 0);
    }

    productAdded = 'product'
    onAddingToCart(product:string){
      this.productAdded
    }

    orderProduct(product:any){
      console.log("product ordered", product)
      this.checkoutService.orderSelectedProducts(product).subscribe()
    }

}
