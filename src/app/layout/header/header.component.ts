import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from '../../shared/components/buttons/auth/auth.component';
import {CartComponent} from '../../shared/components/buttons/cart/cart.component';
import {LogoutComponent} from '@shared/components/buttons/logout/logout.component';
import {CATEGORIES, CONTACTS_LINKS, INFO_LINKS} from './constants/header.constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AuthComponent, CartComponent, LogoutComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  contactsLinks = CONTACTS_LINKS;
  infoLinks = INFO_LINKS;
  categories = CATEGORIES;

  activeCategory: string | null = null;

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  clearActiveCategory() {
    this.activeCategory = null;
  }
}
