import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
// export class OrderComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

export class OrderComponent {
  @Input() order:any;
}


