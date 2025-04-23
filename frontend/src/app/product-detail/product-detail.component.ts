import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  private id: number = 0;
  product: Product = {} as Product;

  constructor(private prodService: ProductsService, private route: ActivatedRoute, private cart: CartService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.prodService.getProduct(this.id).subscribe(
      (prod: Product) => {
        this.product = prod;
      },
      (error) => {
        console.error('Error fetching product details:', error);
      }
    );
  }

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
