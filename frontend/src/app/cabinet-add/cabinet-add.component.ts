import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../product.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-cabinet-add',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './cabinet-add.component.html',
  styleUrl: './cabinet-add.component.css'
})
export class CabinetAddComponent implements OnInit  {
  categories: Category[] = [];
  prodForm: FormGroup;

  constructor(private fb: FormBuilder, private prodService: ProductsService, private categoryService: CategoryService) {
    this.prodForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      price: [0, [Validators.required, Validators.min(1)]],
      image_url: [''],
      stock: [0, [Validators.required, Validators.min(1)]],
      category_id: [0, Validators.required]
    });
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    )
  }


  addProduct(product: Product) {
    this.prodService.addProduct(product).subscribe(
      (response) => {
        console.log('Product added successfully:', response);
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }

  onSubmit() {
    if (this.prodForm.valid) {
      const product: Product = {
        ...this.prodForm.value,
        category: {
          id: this.prodForm.value.category_id,
          name: this.categories.find(cat => cat.id === this.prodForm.value.category_id)?.name || ''
        }
      };
      this.addProduct(product);
    } else {
      console.log('Form is invalid');
    }
  }
}
