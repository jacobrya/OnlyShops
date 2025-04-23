import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../product.service';
import { Product } from '../product';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-cabinet',
  imports: [CommonModule, RouterModule],
  templateUrl: './cabinet.component.html',
  styleUrl: './cabinet.component.css'
})
export class CabinetComponent implements OnInit {
  user: User = {} as User;
  userProducts: Product[] = [];

  constructor(private productService: ProductsService, private userService: UserService) { 
    
  }

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe(
      (user: User) => {
        this.user = user;
      },
      (error) => {
        console.error('Error fetching user info:', error);
      }
    );

    this.productService.getProducts().subscribe(
      (prods: Product[]) => {
        console.log(prods);
        console.log(this.user);
        this.userProducts = prods.filter((product: Product) => product.seller.id == this.user.id);
      },
      (error) => {
        console.error('Error fetching products:', error);
        alert('Error fetching products. Please try again later.');
      }
    );
  }

  removeProduct(productId: number): void {
    if (confirm('Are you sure you want to remove this product?')) {
      this.productService.deleteProduct(productId).subscribe(
        () => {
          this.userProducts = this.userProducts.filter(p => p.id !== productId);
          console.log(`Product ${productId} removed successfully.`);
        },
        (error) => {
          console.error('Error removing product:', error);
          alert('Failed to remove the product. Try again later.');
        }
      );
    }
  }
  
}
