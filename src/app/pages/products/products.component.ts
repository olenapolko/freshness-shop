import {Component, OnInit} from '@angular/core';
import {ProductInterface} from '../../shared/interfaces/product.interface';
import {ProductsService} from '../../services/products.service';
import {productsFilterConfig} from './products-filters-config';
import {EMPTY, Subject, Subscription, catchError, finalize, takeUntil} from 'rxjs';

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
      .pipe(
        catchError((error) => {
          console.error('Error fetching products', error);
          return EMPTY;
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (products) => {
          this.products = products;
        }
      });
  }

  onFiltersChanged(filters: any): void {
    console.log('Filters in Products', filters);
  }
}
