import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {DynamicFormComponent} from '@shared/components/form/dynamic-form.component';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register.component';
import {PrimaryButtonComponent} from '@shared/components/buttons/primary/primary-button.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    DynamicFormComponent,
    PrimaryButtonComponent,
    RouterModule.forChild(routes)
  ],
  exports: [RegisterComponent]
})
export class RegisterModule {}
