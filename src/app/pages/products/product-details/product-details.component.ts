import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductInterface} from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!: ProductInterface;
  activeIndex = 0;
  stars: number[] = [];
  discountedPrice!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.product = data['productDetails'];
      this.discountedPrice = this.calculateDiscountedPrice(this.product.price, this.product.discount);
      this.stars = Array(this.product.rating)
        .fill(0)
        .map((_, i) => i + 1);
    });
  }

  handleThumbnailClick(index: number): void {
    this.activeIndex = index;
  }

  calculateDiscountedPrice(price: number, discount?: number): number {
    if (discount) {
      return price - (price * discount) / 100;
    }
    return price;
  }
}
