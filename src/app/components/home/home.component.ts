import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout-service.service';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';


// export class FormComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
  products: Product[] = [];
  title = 'Online Sales Service';

  constructor(private checkoutService: CheckoutService,
              private router: Router,
              private productsService: ProductsService
            ) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe(response => {
      this.products = response.data;
      debugger;
    });
  }

    buyProduct(products:any) {
      debugger
      console.log('Comprando:', products);
      this.checkoutService.addProduct(products);
      this.router.navigate(['home/checkout'])
    }
}
