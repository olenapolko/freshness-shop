import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductInterface} from '../shared/interfaces/product.interface';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINTS} from '../shared/constants/endpoints.constant';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductInterface[]> {
    const {baseUrl, getAllProductsUrl} = API_ENDPOINTS;
    return this.http.get<ProductInterface[]>(`${baseUrl}${getAllProductsUrl}`);
  }
}
