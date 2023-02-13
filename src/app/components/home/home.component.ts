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
    { name: 'Product 1', image: "Users/alexandreguz/Downloads/tenis.jpeg" , price: 29.99 },
    { name: 'Product 2', price: 39.99 },
    { name: 'Product 3', price: 49.99 }];

products =
  [{
  id: 1, 
  name: "PlayStation 4", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSr-iFW5W8n3_jxNKiclAP_k71Fi9PGcojsMUC-vb8zbwJthbBd", 
  images: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSr-iFW5W8n3_jxNKiclAP_k71Fi9PGcojsMUC-vb8zbwJthbBd;https://static.toiimg.com/thumb/msid-56933980,width-640,resizemode-4,imgsize-85436/56933980.jpg;https://cdn.mos.cms.futurecdn.net/3328be45e8c7fe5194055b4c687fb769-1200-80.jpeg;https://img.etimg.com/thumb/width-640,height-480,imgsize-76492,resizemode-1,msid-52464286/46.jpg", 
  description: "With PS4, gaming becomes a lot more power packed. Ultra-fast processors, high-performance system, real-time game sharing, remote play and lots more makes it the ultimate companion device.",
  price: 240.99,  
  category: "Gaming console",
  category_id: 2}]


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
