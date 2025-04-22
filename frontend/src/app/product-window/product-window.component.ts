import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../product.service';
import { Product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-window',
  imports: [],
  templateUrl: './product-window.component.html',
  styleUrl: './product-window.component.css'
})
export class ProductWindowComponent {
  @Input() product!: Product;
  constructor(private cart: CartService) {}

  addToCart(product: Product) {
    this.cart.addToCart(product, 1).subscribe(
      (response =>{
        console.log('Product added to cart:', response);
      }),
      (error => {
        console.error('Error adding product to cart:', error);
      })
    )
  }
}
