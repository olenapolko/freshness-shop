import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutingConstants} from '@shared/constants/routing.constants';

export const routes: Routes = [
  {
    path: RoutingConstants.PRODUCTS,
    loadChildren: () => import('./pages/products/products.module').then((m) => m.ProductsModule)
  },
  {path: '**', redirectTo: RoutingConstants.PRODUCTS}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
