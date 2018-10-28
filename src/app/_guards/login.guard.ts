import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { AuthService } from './../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService) { }

  canActivate(
  ): Observable<boolean> | boolean {

    return this.authService.currentUser.authState
      .pipe(
        take(1),
        tap(loggedIn => {
          if (loggedIn) {
            this.router.navigate(['']);
          }
        }),
        map(user => !user),
      );
  }
}
