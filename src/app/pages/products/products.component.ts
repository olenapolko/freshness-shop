import {Component, OnInit} from '@angular/core';
import {ProductInterface} from '../../shared/interfaces/product.interface';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  title = 'All products';
  products: ProductInterface[] = [];
  isLoading = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.subscribeToProducts();
  }

  subscribeToProducts(): void {
    this.isLoading = true;
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
      this.isLoading = false;
    });
  }
}
