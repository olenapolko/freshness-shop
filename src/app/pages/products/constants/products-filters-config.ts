import {FilterConfig} from '@shared/interfaces/filter-config.interface';
import {categories} from '@shared/enums/categories.enums';
import {brands} from '@shared/enums/brands.enums';
import {FieldType} from '@shared/enums/field-type.enum';
import {MIN_PRICE, MAX_PRICE} from './constants';

export const productsFilterConfig: FilterConfig = {
  fields: [
    {
      type: FieldType.CHECKBOX,
      name: 'categories',
      label: 'Categories',
      options: categories.map((category) => category.value)
    },
    {
      type: FieldType.CHECKBOX,
      name: 'brands',
      label: 'Brands',
      options: brands.map((brand) => brand.value)
    },
    {
      type: FieldType.CHECKBOX,
      name: 'rating',
      label: 'Rating',
      options: [1, 2, 3, 4, 5],
      hasIcons: true
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
