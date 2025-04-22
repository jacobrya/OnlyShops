import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../product.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabinet-edit',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './cabinet-edit.component.html',
  styleUrl: './cabinet-edit.component.css'
})
export class CabinetEditComponent implements OnInit {
  prodId: number = 0;
  product: Product = {} as Product;
  changedFields: Partial<Product> = {};

  constructor(private productService: ProductsService, private route: ActivatedRoute) {
    this.prodId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.productService.getProduct(this.prodId).subscribe(
      (prod: Product) => {
        this.product = prod;
      },
      (error: any) => {
        console.error('Error fetching product:', error);
      }
    )
  }

  onFieldChange(field: keyof Product, value: any) {
    this.changedFields[field] = value;
  }

  applyChanges() {
    this.productService.updateProduct(this.product.id, this.changedFields).subscribe(() => {
      this.changedFields = {};
    });
  }

  hasChanges(): boolean {
    return Object.keys(this.changedFields).length > 0;
  }
}
