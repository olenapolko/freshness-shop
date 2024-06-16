import {Component, OnInit} from '@angular/core';
import {FilterConfig} from '@shared/interfaces/filter-config.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '@services/auth.service';
import {loginFormConfig} from './constants/login.config';
import {SnackbarService} from '@services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormConfig: FilterConfig = loginFormConfig;
  returnUrl: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onFormChanged(value: any): void {
    this.onSubmit(value);
  }

  onSubmit(value?: any): void {
    this.authenticationService.login(value.email, value.password).subscribe({
      next: () => {
        this.snackbarService.showSuccess('Login successful!');
        this.router.navigate([this.returnUrl]);
      }
    });
  }
}
