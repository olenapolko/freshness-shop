import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductInterface} from '../shared/interfaces/product.interface';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINTS} from '../shared/constants/endpoints.constant';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl: string = API_ENDPOINTS.baseUrl;
  getAllProductsUrl: string = API_ENDPOINTS.getAllProductsUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(`${this.baseUrl}/${this.getAllProductsUrl}`);
  }

  getProductDetails(id: string): Observable<ProductInterface> {
    return this.http.get<ProductInterface>(`${this.baseUrl}/${this.getAllProductsUrl}/${id}`);
  }
}
