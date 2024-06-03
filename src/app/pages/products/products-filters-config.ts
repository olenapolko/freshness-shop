import {FilterConfig} from '../../shared/interfaces/filter-config.interface';
import {categories} from '../../shared/enums/categories.enums';
import {brands} from '../../shared/enums/brands.enums';
import {ratings} from '../../shared/enums/rating.enums';
import {FieldType} from '../../shared/enums/field-type.enum';
import {MIN_PRICE, MAX_PRICE} from './constants';

export const productsFilterConfig: FilterConfig = {
  fields: [
    {
      type: FieldType.CHECKBOX,
      name: 'categories',
      label: 'Categories',
      options: categories.map((category) => category.label)
    },
    {
      type: FieldType.CHECKBOX,
      name: 'brands',
      label: 'Brands',
      options: brands.map((brand) => brand.label)
    },
    {
      type: FieldType.CHECKBOX,
      name: 'rating',
      label: 'Rating',
      options: ratings.map((rating) => rating.label)
    },
    {
      type: FieldType.SLIDER,
      name: 'price',
      label: 'Price',
      min: MIN_PRICE,
      max: MAX_PRICE,
      step: 1
    }
  ]
};
