import {Pipe, PipeTransform} from '@angular/core';
import {ValidationErrors} from '@angular/forms';

@Pipe({
  name: 'controlErrorHandler',
  standalone: true
})
export class ControlErrorHandlerPipe implements PipeTransform {
  private errorResolver: any = {
    required: () => 'This field is required',
    email: () => 'Invalid email format',
    minlength: (error: ValidationErrors) => `Minimum length is ${error['requiredLength']} characters`,
    incorrectPasswordForm: () => 'Password must include 2 uppercase letters, 2 lowercase letters, 2 numbers, and 2 symbols',
    mismatch: () => 'Passwords don`t match'
  };

  public transform(errorKeys: ValidationErrors): any {
    const validatorError = Object.keys(errorKeys)[0];
    if (this.errorResolver[validatorError]) {
      return this.errorResolver[validatorError](errorKeys[validatorError]);
    }
  }
}
