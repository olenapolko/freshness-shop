import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app.routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LayoutComponent} from './layout/layout.component';
import {ErrorInterceptor} from './interceptors/error.interceptor';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [BrowserModule, SharedModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {}
