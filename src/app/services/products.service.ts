import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {PRODUCTS} from '../pages/products/constants/constants';
import {ProductInterface} from '../shared/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProducts(): Observable<ProductInterface[]> {
    return of(PRODUCTS).pipe(delay(1000));
  }
}
