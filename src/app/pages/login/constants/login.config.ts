import {FilterConfig} from '@shared/interfaces/filter-config.interface';
import {FieldType} from '@shared/enums/field-type.enum';
import {Validators} from '@angular/forms';

export const loginFormConfig: FilterConfig = {
  fields: [
    {
      type: FieldType.TEXT,
      name: 'email',
      label: 'Email',
      validators: [Validators.required, Validators.email]
    },
    {
      type: FieldType.PASSWORD,
      name: 'password',
      label: 'Password',
      validators: [Validators.required]
    }
  ]
};
