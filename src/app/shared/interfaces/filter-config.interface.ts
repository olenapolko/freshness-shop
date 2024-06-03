import {FieldType} from '../enums/field-type.enum';

export interface FilterField {
  type: FieldType;
  name: string;
  label: string;
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
}

export interface FilterConfig {
  fields: FilterField[];
}
