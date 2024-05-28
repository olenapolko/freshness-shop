import {Component, OnInit} from '@angular/core';
import {ProductInterface} from '../../shared/interfaces/product.interface';
import {PRODUCTS} from './constants';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  title = 'All products';
  products: ProductInterface[] = [];

  ngOnInit(): void {
    this.products = PRODUCTS;
  }
}
