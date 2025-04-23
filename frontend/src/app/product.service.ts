import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private backendUrl = 'http://127.0.0.1:8000/api/products/';

  constructor(private http: HttpClient) {}

  getProducts(categoryId?: number): Observable<Product[]> {
    let params = new HttpParams();
    if (categoryId !== undefined) {
      params = params.set('category', categoryId.toString());
    }

    return this.http.get<Product[]>(this.backendUrl, { params });
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.backendUrl}${id}/`);
  }

  addProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Product>(this.backendUrl, {
        title: product.title,
        description: product.description,
        price: product.price,
        image_url: product.image_url,
        stock: product.stock,
        category_id: product.category.id,
    }, { headers }
    );
  }

  updateProduct(id: number, product: Partial<Product>): Observable<Product> {
    console.log('Updating product:', id, product);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<Product>(`${this.backendUrl}${id}/`, product, { headers });
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.backendUrl}${id}/`);
  }
}
