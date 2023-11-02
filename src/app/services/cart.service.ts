import { Product } from '../data/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = new Map<Product, number>();

  addToCart(product: Product) {
    let containsItem = false;
    for(let p of this.items){
      if(product.id == p[0].id){
        containsItem = true;
        this.items.set(p[0], p[1]+1);
        break;
      }
    }
    if(!containsItem) this.items.set(product, 1);
  }

  removeFromCart(product: Product) {
    for(let p of this.items){
      if(product.id == p[0].id){
        if(p[1]-1<=0) this.items.delete(p[0]);
        else this.items.set(p[0],p[1]-1);
        break;
      }
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items.clear();
    return this.items;
  }

  getTotal(): number {
    let sum = 0;
    this.items.forEach((amount: number, product: Product) => {
      sum += amount * product.price;
    });
    return sum;
  }
}
