// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  customer = {
    name: '',
    address: '',
    phone: '',
    email: ''
  };

  submitForm() {
    console.log(this.customer);
    // here you can put your form submission logic
    // for example, you can send a request to your server
    // to save the customer information
  }
}

