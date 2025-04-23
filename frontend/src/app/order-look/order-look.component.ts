import { Component, OnInit } from '@angular/core';
import { Order } from '../order'; // Define this interface if not already
import { OrderService } from '../order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-look',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-look.component.html',
  styleUrl: './order-look.component.css',
})
export class OrderLookComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getSellerOrders().subscribe(
      (orders) => {
      this.orders = orders;
    });
  }

  confirmOrder(orderId: number) {
    this.orderService.postAction(orderId, "confirm").subscribe(
      () => this.loadOrders(),
      (error) => {
        console.error('Error confirming order:', error);
        alert('Error confirming order. Please try again later.');
      }
    );
  }

  cancelOrder(orderId: number) {
    this.orderService.postAction(orderId, "cancel").subscribe(
      () => this.loadOrders(),
      (error) => {
        console.error('Error confirming order:', error);
        alert('Error cancelling order. Please try again later.');
      }
    );
  }
}
