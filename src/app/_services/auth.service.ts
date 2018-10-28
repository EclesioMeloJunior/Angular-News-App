import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private TOKEN = 'applicationToken';

  constructor(private authFirebase: AngularFireAuth) { }

  get authenticated(): boolean {
    return this.authFirebase.authState !== null;
  }

  get currentUser() {
    return this.authFirebase;
  }

  googleAuthentication(): Observable<firebase.auth.UserCredential> {
    return new Observable(handle => {
      const auth = new firebase.auth.GoogleAuthProvider();

      auth.addScope('email');
      auth.addScope('profile');

      this.authFirebase.auth
        .signInWithPopup(auth)
        .then(response => handle.next(response));
    });
  }

  logout(): Promise<void> {
    return this.authFirebase.auth.signOut();
  }
}
