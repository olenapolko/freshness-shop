import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductCardComponent} from '../../shared/components/product-card/product-card.component';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [{path: '', component: ProductsComponent}];

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ProductCardComponent, SharedModule]
})
export class ProductsModule {}
