import {Component, Input} from '@angular/core';
import {ProductInterface} from '../../interfaces/product.interface';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {PrimaryButtonComponent} from '../buttons/primary/primary-button.component';
import {SecondaryButtonComponent} from '../buttons/secondary/secondary-button.component';
import {MatCardModule} from '@angular/material/card';
import {SharedModule} from '../../shared.module';
import {Permissions} from '../../enums/permissions.enum';
import {AddToCartButtonComponent} from '../buttons/add-to-cart/add-to-cart-button.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    MatCardModule,
    SharedModule,
    AddToCartButtonComponent
  ],
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {
  @Input() product!: ProductInterface;
  stars: number[] = [];

  public Permissions = Permissions;

  dateToFormat: string = '2024-06-20T00:00:00.000Z';
  numberToFormat: number = 1234.56;

  ngOnInit(): void {
    this.stars = Array(this.product.rating ?? 0)
      .fill(0)
      .map((_, i) => i + 1);
  }

  calculateDiscountedPrice(price: number, discount?: number): number {
    if (discount) {
      return price - (price * discount) / 100;
    }
    return price;
  }
}
