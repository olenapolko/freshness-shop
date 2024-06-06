import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {inject} from '@angular/core';
import {ProductsService} from '../../../../services/products.service';
import {ProductInterface} from '../../../../shared/interfaces/product.interface';

export const productDetailsResolver: ResolveFn<ProductInterface> = (route: ActivatedRouteSnapshot) => {
  const id = route.params['id'];
  const productsService: ProductsService = inject(ProductsService);
  return productsService.getProductDetails(id);
};
