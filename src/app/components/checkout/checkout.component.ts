import { Component, OnInit, Input } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
// export class CheckoutComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

  export class CheckoutComponent {
    // @Input() product:any;
    selectedProducts: any = [];

    constructor(private checkoutService: CheckoutService) {
      this.selectedProducts = this.checkoutService.getSelectedProducts();
      debugger

    }


    // selectedProducts = [
    //   { name: 'Product 1', price: 29.99 },
    //   { name: 'Product 2', price: 39.99 },
    //   { name: 'Product 3', price: 49.99 }
    // ];
  
    removeProduct(product:any) {
      console.log('Removing:', product);
    //   // here you can put your remove logic
    //   // for example, you can remove the product from the array
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

}
