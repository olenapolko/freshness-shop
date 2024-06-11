import { ValidatorFn } from '@angular/forms';
import {FieldType} from '../enums/field-type.enum';

export interface FilterField {
  type: FieldType;
  name: string;
  label: string;
  options?: (number | string)[];
  min?: number;
  max?: number;
  step?: number;
  useIcons?: boolean;
  validators?: ValidatorFn[];
}

export interface FilterConfig {
  fields: FilterField[];
}
