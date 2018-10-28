import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  googleAuthButton() {
    this.authService.googleAuthentication()
      .subscribe(data => this.router.navigate(['']));
  }
}
