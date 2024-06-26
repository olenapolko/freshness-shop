import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from '../layout/header/header.component';
import {FooterComponent} from '../layout/footer/footer.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {SmoothGrowDirective} from './directives/smooth-grow.directive';
import {HasPermissionsDirective} from './directives/has-permissions.directive';
import {LocaleNumberFormatPipe} from './pipes/locale-number-format.pipe';
import {LocaleDatePipe} from './pipes/locale-date-format.pipe';
import {FilterComponent} from './components/filter/filter.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    MatProgressSpinnerModule,
    SmoothGrowDirective,
    HasPermissionsDirective,
    LocaleNumberFormatPipe,
    LocaleDatePipe,
    FilterComponent,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MatProgressSpinnerModule,
    SmoothGrowDirective,
    HasPermissionsDirective,
    LocaleNumberFormatPipe,
    LocaleDatePipe,
    FilterComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
