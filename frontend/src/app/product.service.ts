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
}
