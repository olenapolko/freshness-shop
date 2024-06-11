// import { Component, OnInit } from '@angular/core';
// import { FilterConfig } from '@shared/interfaces/filter-config.interface';
// import { Router } from '@angular/router';
// import { AuthenticationService } from '@services/auth.service';
// import { registerFormConfig } from './constants/register.config';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent implements OnInit {
//   registerFormConfig: FilterConfig = registerFormConfig;
//   loading = false;
//   submitted = false;
//   formValues: any = {};

//   constructor(
//     private router: Router,
//     private authenticationService: AuthenticationService
//   ) {}

//   ngOnInit(): void {}

//   onFormChanged(value: any): void {
//     this.formValues = value;
//   }

//   onSubmit(): void {
//     this.submitted = true;
//     if (this.formValues.password !== this.formValues.confirmPassword) {
//       return;
//     }
//     this.loading = true;

//     const { email, password, firstName, lastName } = this.formValues;
//     this.authenticationService.register(email, password, firstName, lastName).subscribe(
//       (data: any) => {
//         console.log(data);

//         this.router.navigate(['/']);
//       },
//       (error: any) => {
//         console.log(error);
//         this.loading = false;
//       }
//     );
//   }
// }

import {Component, OnInit} from '@angular/core';
import {FilterConfig} from '@shared/interfaces/filter-config.interface';
import {Router} from '@angular/router';
import {AuthenticationService} from '@services/auth.service';
import {registerFormConfig} from './constants/register.config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFormConfig: FilterConfig = registerFormConfig;
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  onFormChanged(value: any): void {
    this.onSubmit(value);
  }

  onSubmit(value?: any): void {
    this.submitted = true;
    if (value.password !== value.confirmPassword) {
      return;
    }
    this.loading = true;

    const {email, password, firstName, lastName} = value;
    this.authenticationService.register(email, password, firstName, lastName).subscribe({
      next: (data: any) => {
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        this.loading = false;
      }
    });
  }
}
