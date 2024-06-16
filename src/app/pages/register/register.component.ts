import {Component, OnInit} from '@angular/core';
import {FilterConfig} from '@shared/interfaces/filter-config.interface';
import {Router} from '@angular/router';
import {AuthenticationService} from '@services/auth.service';
import {registerFormConfig} from './constants/register.config';
import {SnackbarService} from '@services/snackbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFormConfig: FilterConfig = registerFormConfig;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {}

  onFormChanged(value: any): void {
    this.onSubmit(value);
  }

  onSubmit(value?: any): void {
    if (value.password !== value.confirmPassword) {
      this.snackbarService.showError('Passwords do not match');
      return;
    }

    const {email, password, firstName, lastName} = value;
    this.authenticationService.register(email, password, firstName, lastName).subscribe({
      next: () => {
        this.snackbarService.showSuccess('Registration successful!');
        this.router.navigate(['/']);
      }
    });
  }
}
