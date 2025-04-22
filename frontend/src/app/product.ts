import { Category } from "./category";
import { Customer } from "./customer";

export interface Product {
    id: number; // assuming you return the ID from backend
    title: string;
    description?: string | null;
    price: number;
    image_url?: string | null;
    stock: number;
    category: Category; // or use a Category interface if you expand the relation
    seller: Customer;   // or a User interface if you expand it
    created_at: string; // ISO date string
}  