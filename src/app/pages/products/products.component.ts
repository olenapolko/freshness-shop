import {Component, OnInit} from '@angular/core';
import {ProductInterface} from '../../shared/interfaces/product.interface';
import {ProductsService} from '../../services/products.service';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  title = 'All products';
  products: ProductInterface[] = [];
  isLoading = true;
  sub$ = new Subject<void>();

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .pipe(takeUntil(this.sub$))
      .subscribe((products) => {
        this.products = products;
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    this.sub$.next();
    this.sub$.complete();
  }
}
