import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {AuthenticationService} from '@services/auth.service';
import {RoutingConstants} from '@shared/constants/routing.constants';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

export const authenticatedGuard: CanActivateFn = (): Observable<boolean> => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  return authService.getCurrentUser().pipe(
    map((user) => {
      if (user) {
        return true;
      }
      router.navigate([RoutingConstants.LOGIN]);
      return false;
    }),
    catchError(() => {
      router.navigate([RoutingConstants.LOGIN]);
      return of(false);
    })
  );
};
