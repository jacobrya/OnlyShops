import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ProductsService } from '../product.service';
import { Category } from '../category';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductWindowComponent } from "../product-window/product-window.component";

@Component({
  selector: 'app-category',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ProductWindowComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];

  selectedCategoryId: number | null = null;
  searchQuery: string = '';

  constructor(private categoryService: CategoryService, private productService: ProductsService) {
    
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );

    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  filteredProducts(): Product[] {
    return this.products.filter(product => {
      const matchesCategory = !this.selectedCategoryId || product.category.id === this.selectedCategoryId;
      const matchesSearch = product.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }
}
