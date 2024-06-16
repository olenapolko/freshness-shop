import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthenticationService} from '@services/auth.service';
import {RoutingConstants} from '@shared/constants/routing.constants';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

export const unauthenticatedGuard: CanActivateFn = (): Observable<boolean> => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  return authService.getCurrentUser().pipe(
    map((user) => {
      if (user) {
        router.navigate([RoutingConstants.PRODUCTS]);
        return false;
      }
      return true;
    }),
    catchError(() => of(true))
  );
};
