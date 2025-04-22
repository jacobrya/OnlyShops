import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { OrderWindowComponent } from "../order-window/order-window.component";

@Component({
  selector: 'app-orders',
  imports: [CommonModule, RouterModule, OrderWindowComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];

  constructor(private orderService: OrderService) {
    
  }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(
      (orders: Order[]) => {
        this.orders = orders;
        console.log("orders retrieved");
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    )
  }
}
