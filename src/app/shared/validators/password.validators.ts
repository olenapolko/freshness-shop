import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const pattern = /^(?=.*[A-Z]{2})(?=.*[a-z]{2})(?=.*\d{2})(?=.*[@$!%*?&]{2}).{8,}$/;
    const valid = pattern.test(value);
    return valid
      ? null
      : {pattern: 'Password must include 2 uppercase letters, 2 lowercase letters, 2 numbers, and 2 symbols'};
  };
}

export function confirmPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const passwordControl = control.parent?.get('password')?.value;
    if (control.value === null || control.value === '') {
      return null;
    }
    if (passwordControl !== control.value) {
      return {mismatch: true};
    }
    return null;
  };
}
