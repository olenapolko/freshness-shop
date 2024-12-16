import {FilterConfig} from '@shared/interfaces/filter-config.interface';
import {FieldType} from '@shared/enums/field-type.enum';
import {Validators} from '@angular/forms';
import {passwordValidator, confirmPasswordValidator} from '@shared/validators/password.validators';

export const registerFormConfig: FilterConfig = {
  fields: [
    {
      type: FieldType.TEXT,
      name: 'firstName',
      label: 'First Name',
      validators: [Validators.required, Validators.minLength(2)]
    },
    {
      type: FieldType.TEXT,
      name: 'lastName',
      label: 'Last Name',
      validators: [Validators.required, Validators.minLength(2)]
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
      label: 'Phone Number'
    },
    {
      type: FieldType.PASSWORD,
      name: 'password',
      label: 'Password',
      validators: [Validators.required, passwordValidator()]
    },
    {
      type: FieldType.PASSWORD,
      name: 'confirmPassword',
      label: 'Confirm Password',
      validators: [Validators.required, confirmPasswordValidator()]
    }
  ]
};
