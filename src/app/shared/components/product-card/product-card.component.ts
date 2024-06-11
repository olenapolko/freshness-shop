import {Component, Input} from '@angular/core';
import {ProductInterface} from '@shared/interfaces/product.interface';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {PrimaryButtonComponent} from '../buttons/primary/primary-button.component';
import {SecondaryButtonComponent} from '../buttons/secondary/secondary-button.component';
import {MatCardModule} from '@angular/material/card';
import {SharedModule} from '@shared/shared.module';
import {Router} from '@angular/router';
import {environment} from '@environments/environment';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, PrimaryButtonComponent, SecondaryButtonComponent, MatCardModule, SharedModule],
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {
  @Input() product!: ProductInterface;
  stars: number[] = [];

  constructor(private router: Router) {}

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

  navigateToProductDetails(event: Event): void {
    event.stopPropagation();
    this.router.navigate([`/${environment.endpoints.getAllProducts}/${this.product._id}`]);
  }
}
