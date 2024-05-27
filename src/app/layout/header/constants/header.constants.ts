import {ContactLink} from '../../../shared/interfaces/contact-link.interface';
import {InfoLink} from '../../../shared/interfaces/info-link.interface';
import {Category} from '../../../shared/interfaces/category.interface';

export const CONTACTS_LINKS: ContactLink[] = [
  {text: 'Chat with us', href: '#'},
  {text: '+420 336 775 664', href: 'tel:+420336775664'},
  {text: 'info@freshnesecom.com', href: 'mailto:info@freshnesecom.com'}
];

export const INFO_LINKS: InfoLink[] = [
  {text: 'Blog', href: '#'},
  {text: 'About us', href: '#'},
  {text: 'Careers', href: '#'}
];

export const CATEGORIES: Category[] = [
  {name: 'Electronics', brands: ['Sony', 'Samsung', 'LG']},
  {name: 'Food', brands: ['Nestle', 'Pepsi', 'Coca Cola']},
  {name: 'Clothes', brands: ['Nike', 'Adidas', 'Puma']},
  {name: 'Toys', brands: ['Lego', 'Hasbro', 'Mattel']},
  {name: 'Sports & outdoors', brands: ['Wilson', 'Spalding', 'Nike']},
  {name: 'Books', brands: ['Penguin', 'HarperCollins', 'Simon & Schuster']}
];
