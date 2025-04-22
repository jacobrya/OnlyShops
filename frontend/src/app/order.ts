import { Product } from "./product";

export interface Order {
    id: number;
    user: number;
    total_amount: string;
    status: string;
    created_at: string;
    items: OrderItem[];
}
  
export interface OrderItem {
    id: number;
    product: Product;
    quantity: number;
    price: string;
}