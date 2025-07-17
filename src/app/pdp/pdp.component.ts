import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop/shop.service';
import { IProduct } from '../shared/model/product';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-pdp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.scss']
})
export class PdpComponent  implements OnInit {

  product: IProduct | any;

  constructor(private route: ActivatedRoute,
     private shopService: ShopService,
     private cartService: CartService) { }

  ngOnInit(): void {
   this.getProductById();
   this.addItemToCart();
  }

  getProductById() {
     const productId = this.route.snapshot.params['productId'];
    this.shopService.getProductById(productId).subscribe((product) => {
      this.product = product;
    });
  }
   addItemToCart() {
    this.product&&this.cartService.addItemToCart(this.product);
  }

}
