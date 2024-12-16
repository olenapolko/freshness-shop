import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductInterface} from '@shared/interfaces/product.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl: string = environment.baseUrl;
  private getAllProductsUrl: string = `${this.baseUrl}/products`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(this.getAllProductsUrl);
  }

  getProductDetails(id: string): Observable<ProductInterface> {
    return this.http.get<ProductInterface>(`${this.getAllProductsUrl}/${id}`);
  }
}
