import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
  products: Product[] = [];
  selectedProducts = []

  @ViewChild("drawer") drawer: any;

  constructor(private checkoutService: CheckoutService,
              private router: Router,
              private productsService: ProductsService
            ) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe(response => {
      this.products = response.data;
    });
  }

    buyProduct(products:any) {
      console.log('Comprando:', products);
      this.checkoutService.addProduct(products);
      this.drawer.open();
    }
}
