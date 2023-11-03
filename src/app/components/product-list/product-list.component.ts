import { Component, Input, OnInit, OnChanges  } from '@angular/core';

import { Product } from '../../data/product';
import { ProductsService } from 'src/app/services/products.service';
import { Observable, of, map } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  @Input() categories: string[] | null | undefined = null;
  @Input() shouldScroll: string | null | undefined = null;

  constructor(private productsService: ProductsService){}

  products: Observable<Product[]> | undefined;
  productList: Observable<Product[]> | undefined;

  ngOnInit(): void {
    this.productList = this.productsService.getProducts();
    this.ngOnChanges();
    this.setProducts();
  }

  ngOnChanges(): void {
  }

  setProducts(): void {
    if(this.productList){
      this.products = this.productList;
    if(this.categories){
      for(var category of this.categories){
        this.products = this.products.pipe(map((products: Product[]) => products.filter((p) => p.category.some(i => i === category))));
        //this.products = this.products.pipe(map((products: Product[]) => products.filter((p) => p.category.includes(category))));
      }
    }
  }
  }
}
