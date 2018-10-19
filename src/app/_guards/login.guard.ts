import { AuthService } from './../_services/auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService) { }

  canActivate() {
    if (this.authService.getToken()) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }
}
