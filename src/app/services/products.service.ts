import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductInterface} from '@shared/interfaces/product.interface';
import {HttpClient} from '@angular/common/http';
import {baseUrl, getAllProductsUrl} from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl: string = baseUrl;
  getAllProductsUrl: string = getAllProductsUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(`${this.baseUrl}/${this.getAllProductsUrl}`);
  }

  getProductDetails(id: string): Observable<ProductInterface> {
    return this.http.get<ProductInterface>(`${this.baseUrl}/${this.getAllProductsUrl}/${id}`);
  }
}
