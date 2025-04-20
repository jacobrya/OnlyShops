import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';

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
                title: "Home"
            },
            {
                path: 'cart',
                component: CartComponent,
                title: "Your Cart"
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
        redirectTo: "login",
    }
];
