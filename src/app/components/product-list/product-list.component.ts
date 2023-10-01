import { Component, Input, OnInit, OnChanges  } from '@angular/core';

import { products, Product } from '../../data/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  @Input() category: string | null | undefined = null;
  products: Array<Product> | undefined;

  ngOnInit(): void {
    this.ngOnChanges();
  }

  ngOnChanges(): void {
    if(this.category){
      this.products = products.filter((p) => p.category === this.category);
    } else {
      this.products = [...products];
    }
  }
}
