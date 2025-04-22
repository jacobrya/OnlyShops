import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from '../cart';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-window',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cart-window.component.html',
  styleUrl: './cart-window.component.css'
})
export class CartWindowComponent {
  @Input() item!: Cart;
  @Output() removeItemEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output() increaseQuantityEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output() decreaseQuantityEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output() quantityChangeEmitter: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }
  
  removeFromCart(): void {
    this.removeItemEmitter.emit();
  }

  increaseQuantity(): void {
    this.increaseQuantityEmitter.emit();
  }

  decreaseQuantity(): void {
    this.decreaseQuantityEmitter.emit();
  }

  onQuantityChange(item: Cart): void {
    let quantity = Number(item.quantity);
    if (isNaN(quantity) || quantity < 1) {
      quantity = 1;
      item.quantity = 1;
    } else if (quantity > item.product.stock) {
      quantity = item.product.stock;
      item.quantity = item.product.stock;
    } else {
      item.quantity = quantity;
    } 

    this.quantityChangeEmitter.emit(quantity);
  }
}
