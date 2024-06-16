import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {Router} from '@angular/router';
import {AuthenticationService} from '@services/auth.service';
import {SnackbarService} from '@services/snackbar.service';
import {RoutingConstants} from '@shared/constants/routing.constants';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './logout.component.html'
})
export class LogoutComponent {
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private snackbarService: SnackbarService
  ) {}

  logout(): void {
    this.authService.logout().subscribe({
      next: (data: any) => {
        this.snackbarService.showSuccess('Logout successful!');
        this.router.navigate([`/${RoutingConstants.LOGIN}`]);
      }
    });
  }
}
