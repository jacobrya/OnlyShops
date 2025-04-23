import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../cart';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartWindowComponent } from "../cart-window/cart-window.component";
import { OrderService } from '../order.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterModule, CartWindowComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: Cart[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService, private orderService: OrderService) {
    this.cartItems = [];
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(
      (items: Cart[]) => {
        this.cartItems = items;
        console.log('Cart items:', this.cartItems);
        this.totalPrice = this.getTotalPrice();
      },
      (error) => {
        console.error('Error fetching cart items:', error);
      }
    );
  }

  removeFromCart(cart_id: number): void {
    this.cartService.deleteFromCart(cart_id).subscribe(
      (error) => {
        console.error('Error deleting item from cart:', error);
        return;
      }
    )

    this.cartItems = this.cartItems.filter(item => item.id !== cart_id);
    this.totalPrice = this.getTotalPrice();
  }

  increaseQuantity(cart_id: number): void {
    const item = this.cartItems.find(item => item.id === cart_id);
    if (!item) {
      return;
    }

    this.cartService.addToCart(item?.product!, 1).subscribe(
      (response =>{
        console.log('Product added to cart:', response);
      }),
      (error => {
        console.error('Error adding product to cart:', error);
      })
    )

    item.quantity += 1;
    this.totalPrice = this.getTotalPrice();
  }

  decreaseQuantity(cart_id: number): void {
    const item = this.cartItems.find(item => item.id === cart_id);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
      this.totalPrice = this.getTotalPrice();
    } else if (item && item.quantity === 1) {
      this.removeFromCart(cart_id);
    }
  }

  onQuantityChange(cart_id: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(cart_id);
    }

    const item = this.cartItems.find(item => item.id === cart_id);
    if (item) {
      item.quantity = quantity;
      this.totalPrice = this.getTotalPrice();
      return;
    }
  }

  getTotalPrice(): number {
    let total = 0;
    total = this.cartItems.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }
    , 0);
    return total;
  }

  clear(): void {
    this.cartService.deleteAllFromCart().subscribe(
      (response) => {
        console.log('All items removed from cart:', response);
      },
      (error) => {
        console.error('Error clearing cart:', error);
        alert('Error clearing cart. Please try again later.');
        return;
      }
    );
    this.cartItems = [];
    this.totalPrice = 0;
    console.log('Cart cleared');
  }

  buy(): void {
    this.orderService.createOrder().subscribe(
      ( _ ) => {
        console.log('Order created');
        this.cartItems = [];
        this.totalPrice = 0;
      },
      (error) => {
        console.error('Error creating order:', error);
        alert('Error creating order. Please try again later.');
      }
    );
  }
}
