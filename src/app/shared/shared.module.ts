import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent, 
    FooterComponent
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
