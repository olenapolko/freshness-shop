import {Component, OnInit} from '@angular/core';
import {FilterConfig} from '@shared/interfaces/filter-config.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '@services/auth.service';
import {loginFormConfig} from './constants/login.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormConfig: FilterConfig = loginFormConfig;
  returnUrl: string | undefined;
  loading = false;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    console.log(this.loginFormConfig);
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onFormChanged(value: any): void {
    this.onSubmit(value);
  }

  onSubmit(value?: any): void {
    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(value.email, value.password).subscribe({
      next: (data: any) => {
        this.router.navigate([this.returnUrl]);
        console.log(data);
      },
      error: (error: any) => {
        console.log(error);
        this.loading = false;
      }
    });
  }
}
