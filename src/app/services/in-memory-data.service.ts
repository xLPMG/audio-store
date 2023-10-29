import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../data/product';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const products = [
      {
        id: 1,
        name: 'Bose QuietComfort Ultra Headphones',
        brand: 'Bose',
        price: 499.95,
        category: ['headphones', 'new'],
        description: ''
      }
      ];
    return {products};
  }

  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1;
  }
}