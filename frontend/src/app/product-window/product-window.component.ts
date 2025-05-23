import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../product.service';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-window',
  imports: [RouterModule],
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
        alert('Error adding product to cart. Please try again later.');
      })
    )
  }
}
