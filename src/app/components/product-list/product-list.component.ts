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
  }

  ngOnChanges(): void {
    if(this.productList){
    if(this.categories){
      for(var category of this.categories){
        this.products = this.productList.pipe(map((products: Product[]) => products.filter((p) => p.category.some(i => { return (i === category) ? true : false;}))));
      }
    } else {
      this.products = this.productList;
    }
  }
  }
}
