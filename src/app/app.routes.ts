import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PDP_ROUTES } from './pdp/pdp.routs';

export const routes: Routes = [
   
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component:HomeComponent },
    { path: 'about', loadChildren: () => import('./about/about.routes').then(r => r.ABOUT_ROUTES) },
    {
        path: 'shop',
        loadChildren: () => import('./shop/shop.routes').then(r => r.SHOP_ROUTES)
    },
      
    {
      path: 'cart', loadChildren: () => import('./cart/cart.routes').then(r=>r.CART_ROUTES)
    },

    {
      path: 'checkout', loadChildren: () => import('./checkout/checkout.routes').then(r=>r.CHECKOUT_ROUTES ),


    },
  
    {
      path: 'product', children: PDP_ROUTES
    },

  ];
