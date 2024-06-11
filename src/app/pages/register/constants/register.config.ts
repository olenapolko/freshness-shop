import { FilterConfig } from '@shared/interfaces/filter-config.interface';
import { FieldType } from '@shared/enums/field-type.enum';
import { Validators } from '@angular/forms';

export const registerFormConfig: FilterConfig = {
  fields: [
    {
      type: FieldType.TEXT,
      name: 'firstName',
      label: 'First Name',
      validators: [Validators.required, Validators.minLength(3)]
    },
    {
      type: FieldType.TEXT,
      name: 'lastName',
      label: 'Last Name',
      validators: [Validators.required, Validators.minLength(3)]
    },
    {
      type: FieldType.TEXT,
      name: 'email',
      label: 'Email',
      validators: [Validators.required, Validators.email]
    },
    {
      type: FieldType.TEXT,
      name: 'phoneNumber',
      label: 'Phone Number',
    },
    {
      type: FieldType.PASSWORD,
      name: 'password',
      label: 'Password',
      validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z]{2})(?=.*[a-z]{2})(?=.*\d{2})(?=.*[@$!%*?&]{2})/),
      ]
    },
    {
      type: FieldType.PASSWORD,
      name: 'confirmPassword',
      label: 'Confirm Password',
      validators: [
        Validators.required
      ]
    }
  ]
};
