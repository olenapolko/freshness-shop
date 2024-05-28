import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from '../layout/header/header.component';
import {FooterComponent} from '../layout/footer/footer.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderComponent, FooterComponent, MatProgressSpinnerModule],
  exports: [HeaderComponent, FooterComponent, MatProgressSpinnerModule]
})
export class SharedModule {}
