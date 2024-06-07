import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailsComponent} from './product-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {PrimaryButtonComponent} from '@shared/components/buttons/primary/primary-button.component';
import {SecondaryButtonComponent} from '@shared/components/buttons/secondary/secondary-button.component';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailsComponent
  }
];

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    PrimaryButtonComponent,
    SecondaryButtonComponent
  ]
})
export class ProductDetailsModule {}
