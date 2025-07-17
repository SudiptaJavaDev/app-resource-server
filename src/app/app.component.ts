import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';  
import { CartService } from './cart/cart.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
            CommonModule, 
            RouterOutlet, 
            NavBarComponent, 
            ShopComponent, 
            HomeComponent,
            AppComponent,
            AboutComponent
          ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  pageTitle:string = "Welcome to Stylish Online Shopping";

  constructor(private cartService: CartService) {
    console.log("AppComponent initialized");
  }

  ngOnInit(): void {
    this.loadBasket();
  }

  loadBasket() {
    const cartId = localStorage.getItem('angular_cart_id');
    if(cartId) {
      this.cartService.getCart(cartId).subscribe({
        next: response => {
          console.log("Cart Initialized");
          console.log(response);
        },
        error: error=> console.log(error)
     });
       
       
    }
  }
  
}
