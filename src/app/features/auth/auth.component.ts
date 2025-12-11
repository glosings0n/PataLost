import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styles: `
    .material-symbols-outlined {
      font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  login() {
    this.authService.loginWithGoogle();
    this.router.navigate(['/']);
  }
}