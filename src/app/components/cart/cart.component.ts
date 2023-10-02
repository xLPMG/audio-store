import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/data/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();
  getTotal(): number {
    return this.cartService.getTotal();
  }

  getTotalOfItem(product: Product, amount: number): number{
    return product.price*amount;
  }

  increaseItem(product: Product){
    this.cartService.addToCart(product);
  }
  decreaseItem(product: Product){
    this.cartService.removeFromCart(product);
  }

  constructor(
    private cartService: CartService
  ){}
}
