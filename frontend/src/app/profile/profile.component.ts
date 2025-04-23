import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { OrderService } from '../order.service';
import { Order } from '../order';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: User = {} as User;
  orders: Order[] = [];

  constructor(private userService: UserService, private orderService: OrderService) { 

  }

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe(
      (user: User) => {
        this.user = user;
      },
      (error: any) => {
        console.error('Error fetching user data:', error);
        alert('Error fetching user data. Please try again later.');
      }
    );

    this.orderService.getAllOrders().subscribe(
      (orders: Order[]) => {
        this.orders = orders;
      },
      (error: any) => {
        console.error('Error fetching orders:', error);
        alert('Error fetching user order. Please try again later.');
      }
    );
  }
}
