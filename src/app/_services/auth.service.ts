import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private TOKEN = 'applicationToken';

  constructor() { }

  getToken(): string {
    return localStorage.getItem(this.TOKEN);
  }

  login() {
    throw new Error('Login not implemented');
  }

  logout() {
    localStorage.removeItem(this.TOKEN);
  }
}
