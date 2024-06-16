import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authenticatedGuard} from './guards/authenticated.guard';
import {unauthenticatedGuard} from './guards/unauthenticated.guard';
import {LayoutComponent} from './layout/layout.component';
import {RoutingConstants} from '@shared/constants/routing.constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutingConstants.PRODUCTS,
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: RoutingConstants.PRODUCTS,
        loadChildren: () => import('./pages/products/products.module').then((m) => m.ProductsModule),
        canActivate: [authenticatedGuard]
      }
    ]
  },
  {
    path: RoutingConstants.REGISTER,
    loadChildren: () => import('./pages/register/register.module').then((m) => m.RegisterModule),
    canActivate: [unauthenticatedGuard]
  },
  {
    path: RoutingConstants.LOGIN,
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
    canActivate: [unauthenticatedGuard]
  },
  {
    path: '**',
    redirectTo: RoutingConstants.PRODUCTS
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
