import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductCardComponent} from '@shared/components/product-card/product-card.component';
import {SharedModule} from '@shared/shared.module';
import {productDetailsResolver} from './services/resolvers/product-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: ':id',
    loadChildren: () => import('./product-details/product-details.module').then((m) => m.ProductDetailsModule),
    resolve: {
      productDetails: productDetailsResolver
    }
  }
];

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ProductCardComponent, SharedModule]
})
export class ProductsModule {}
