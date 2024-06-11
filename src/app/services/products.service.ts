import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductInterface} from '@shared/interfaces/product.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl: string = environment.baseUrl;
  getAllProductsUrl: string = environment.endpoints.getAllProducts;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(`${this.baseUrl}/${this.getAllProductsUrl}`);
  }

  getProductDetails(id: string): Observable<ProductInterface> {
    return this.http.get<ProductInterface>(`${this.baseUrl}/${this.getAllProductsUrl}/${id}`);
  }
}
