import { Product } from '../data/products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = new Map<Product, number>();

  addToCart(product: Product) {
    if(this.items.has(product)){
      let count = this.items.get(product);
      if(count) this.items.set(product, count+1);
    }else {
      this.items.set(product, 1);
    }
    
  }

  removeFromCart(product: Product) {
    if(this.items.has(product)){
      let count = this.items.get(product);
      if(count) {
        count--;
        if(count>0)this.items.set(product, count);
        else this.items.delete(product);
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
