import { Component, Input, OnInit, OnChanges  } from '@angular/core';

import { products, Product } from '../../data/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  @Input() category: string | null | undefined = null;
  @Input() shouldScroll: string | null | undefined = null;
  products: Array<Product> | undefined;

  ngOnInit(): void {
    this.ngOnChanges();

    if(this.shouldScroll==="true"){
      const productList = document.querySelector('.productList');
      productList?.classList.add('scroll');
    }
  }

  ngOnChanges(): void {
    if(this.category){
      this.products = products.filter((p) => p.category.some(i => { return (i === this.category) ? true : false;}));
    } else {
      this.products = [...products];
    }
  }
}
