// permissions.service.ts
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAuthenticated = this.authService.isAuthenticated$;
    isAuthenticated.subscribe((loggedIn) => {
      if (!loggedIn) {
        this.router.navigate(['/auth'], {
          queryParams: { returnUrl: state.url },
        });
        return false;
      }

      return true;
    });
    return true;
  }
}
