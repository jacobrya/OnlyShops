import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoryComponent } from './category/category.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

export const routes: Routes = [
    {
        path: "log-in",
        component: LoginComponent,
        title: "Log-in"
    },
    {
        path: "sign-in",
        component: SigninComponent,
        title: "Sign-in"
    },
    {
        path: '',
        canActivate: [AuthGuardService],
        children: [
            {
                path: 'home',
                component: HomeComponent,
                title: "Home Page"
            },
            {
                path: 'cart',
                component: CartComponent,
                title: "Your Cart"
            },
            {
                path: 'products/:id',
                component: ProductComponent,
                title: "Product Details"
            },
            {
                path: 'orders',
                component: OrdersComponent,
                title: "Your Orders"
            },
            {
                path: 'orders/:id',
                component: OrderDetailsComponent,
                title: "Your Orders"
            },
            {
                path: 'profile',
                component: ProfileComponent,
                title: "Your Profile"
            },
            {
                path: 'category',
                component: CategoryComponent,
                title: "Category Products"
            }
        ]
    },
    {
        path: 'about',
        component: AboutComponent,
        title: "About Us"
    },
    {
        path: "**",
        redirectTo: "home",
    }
];
