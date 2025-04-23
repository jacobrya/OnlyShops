import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  private backendUrl = 'http://127.0.0.1:8000/api/orders/';

  createOrder(): Observable<void> {
    return this.http.post<void>(`${this.backendUrl}create/`, {});
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.backendUrl);
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.backendUrl}${id}/`);
  }

  postAction(id: number, action: string): Observable<Order> {
    return this.http.post<Order>(`${this.backendUrl}${id}/action/`, 
      { action }
    );
  }

  getSellerOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`http://127.0.0.1:8000/api/user-orders`);
  }
}
