import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../product.service';
import { Product } from '../product';
import { ProductWindowComponent } from "../product-window/product-window.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ProductWindowComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private prodService: ProductsService) {

  }

  ngOnInit() {
    this.prodService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}
