import { Component, Input } from '@angular/core';
import { Order } from '../order';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-window',
  imports: [CommonModule, RouterModule],
  templateUrl: './order-window.component.html',
  styleUrl: './order-window.component.css'
})
export class OrderWindowComponent {
  @Input() item!: Order;
}
