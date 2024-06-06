import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutingConstants} from './shared/constants/routing.constants';
import {productDetailsResolver} from './pages/products/services/resolvers/product-details.resolver';

export const routes: Routes = [
  {
    path: RoutingConstants.PRODUCTS,
    loadChildren: () => import('./pages/products/products.module').then((m) => m.ProductsModule)
  },
  {
    path: `${RoutingConstants.PRODUCTS}/:id`,
    loadChildren: () =>
      import('./pages/products/product-details/product-details.module').then((m) => m.ProductDetailsModule),
    resolve: {
      productDetails: productDetailsResolver
    }
  },
  {path: '**', redirectTo: RoutingConstants.PRODUCTS}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
