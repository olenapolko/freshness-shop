import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {Router} from '@angular/router';
import {AuthenticationService} from '@services/auth.service';
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
    private router: Router
  ) {}

  logout(): void {
    this.authService.logout().subscribe({
      next: (data: any) => {
        this.router.navigate([`/${RoutingConstants.LOGIN}`]);
      },
      error: (error: any) => {
        console.error('Logout error:', error);
      }
    });
  }
}
