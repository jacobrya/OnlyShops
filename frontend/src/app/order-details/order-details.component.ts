import { Component, Input, OnInit } from '@angular/core';
import { Order, OrderItem } from '../order';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit {
  @Input() order!: Order;
  private orderId: number = 0;
  orderItems: OrderItem[] = [];

  constructor(private route: ActivatedRoute, private orderService: OrderService) {
    this.orderId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.orderService.getOrderById(this.orderId).subscribe(
      (order: Order) => {
        this.order = order;
        this.orderItems = order.items;
      },
      (error) => {
        console.error('Error fetching order details:', error);
      }
    )
  }
}
