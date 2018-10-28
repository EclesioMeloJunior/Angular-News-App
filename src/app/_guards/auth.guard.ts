import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { AuthService } from './../_services/auth.service';

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
  ): Observable<boolean> | boolean {

    return this.authService.currentUser.authState
      .pipe(
        take(1),
        tap(loggedIn => {
          if (!loggedIn) {
            console.error('access denied');
            this.router.navigate(['/login'],
              { queryParams: { returnUrl: state.url }});
          }
        }),
        map(user => !!user),
      );
  }
}
