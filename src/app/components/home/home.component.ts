import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  selectedProducts = [
    { name: 'Product 1', price: 29.99 },
    { name: 'Product 2', price: 39.99 },
    { name: 'Product 3', price: 49.99 }];

    username = "Alex"
    title = 'Online Sales Service';

  constructor(private checkoutService: CheckoutService,
              private router: Router
            ) {}


    buyProduct(product:any) {
      debugger
      console.log('Comprando:', product);
      this.checkoutService.addProduct(product);
      this.router.navigate(['home/checkout'])
    }



}
