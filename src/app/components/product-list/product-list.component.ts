import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { Product } from '../../data/product';
import { ProductsService } from 'src/app/services/products.service';
import { Observable, of, map } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() categories: string[] | null | undefined = null;
  @Input() shouldScroll: string | null | undefined = null;

  constructor(private productsService: ProductsService) { }

  products: Product[] | undefined;
  productList: Product[] | undefined;

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productsService.getProducts()
      .subscribe({
        next: (products: Product[]) => { this.productList = products },
        complete: () => this.filterProducts()
      });
  }

  filterProducts(): void {
    if (this.productList) {
      this.products = this.productList;
      if (this.categories) {
        for (let category of this.categories) {
          this.products = this.products.filter((p) => p.category.includes(category));
        }
      }
    }
  }
}
