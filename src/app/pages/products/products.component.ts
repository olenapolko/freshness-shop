import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductInterface} from '@shared/interfaces/product.interface';
import {ProductsService} from '@services/products.service';
import {productsFilterConfig} from './constants/products-filters-config';
import { FormGroup } from '@angular/forms';
import { MAX_PRICE, MIN_PRICE } from './constants/constants';
import { DynamicFormComponent } from '@shared/components/form/dynamic-form.component';

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

  @ViewChild(DynamicFormComponent) dynamicFormComponent!: DynamicFormComponent;

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

  resetForm(): void {
    if (this.dynamicFormComponent.dynamicForm) {
      this.dynamicFormComponent.dynamicForm.reset();
      this.dynamicFormComponent.dynamicForm.patchValue({
        price: {
          min: MIN_PRICE,
          max: MAX_PRICE
        }
      });
    }
  }
}
