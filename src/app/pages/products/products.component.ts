import {Component, OnInit} from '@angular/core';
import {ProductInterface} from '@shared/interfaces/product.interface';
import {ProductsService} from '@services/products.service';
import {productsFilterConfig} from './constants/products-filters-config';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  title = 'All products';
  products: ProductInterface[] = [];
  isLoading = false;

  filterConfig = productsFilterConfig;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.subscribeToProducts();
  }

  subscribeToProducts(): void {
    this.isLoading = true;
    this.productsService
      .getProducts()
      .subscribe((products) => {
        this.products = products;
      })
      .add(() => (this.isLoading = false));
  }

  onFiltersChanged(filters: any): void {
    console.log('Filters in Products', filters);
  }
}
