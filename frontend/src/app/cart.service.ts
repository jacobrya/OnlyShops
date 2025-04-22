import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private backendUrl = 'http://127.0.0.1:8000/api/cart/';

  constructor(private http: HttpClient) { }

  addToCart(product: Product, quantity: number): Observable<any> {
    return this.http.post(this.backendUrl, 
      {
        product_id: product.id,
        quantity: quantity
      }
    )
  }

  getCart(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.backendUrl);
  }

  deleteFromCart(cartId: number): Observable<void> {
    return this.http.delete<void>(`${this.backendUrl}`,
      {
        body: {
          cart_id: cartId
        }
      }
    );
  }

  deleteAllFromCart(): Observable<void> {
    return this.http.delete<void>(`${this.backendUrl}clear/`);
  }
}
