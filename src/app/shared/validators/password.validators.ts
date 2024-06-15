import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const pattern = /^(?=(?:.*[A-Z]){2})(?=(?:.*[a-z]){2})(?=(?:.*\d){2})(?=(?:.*[@$!%*?&]){2}).*$/;
    if (value.length < 8) {
      return {minlength: {requiredLength: 8, actualLength: value.length}};
    }
    if (!pattern.test(value)) {
      return {incorrectPasswordForm: true};
    }

    return null;
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
