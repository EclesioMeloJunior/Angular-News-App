import { AuthService } from './../_services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (this.authService.getToken()) {
      return true;
    }

    this.router.navigate(['/login'],
      { queryParams: { returnUrl: state.url } });

    return false;
  }
}
