import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../data/product';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from '../../services/cart.service';
import { Observable, map, find } from 'rxjs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  product: Observable<Product> | undefined;
  products: Observable<Product[]> | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productsService: ProductsService) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.products = this.productsService.getProducts();
    this.product = this.products.pipe(map(products => products.find(product => product.id === productIdFromRoute))) as Observable<Product>;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert(product.name+' has been added to your cart');
  }
}