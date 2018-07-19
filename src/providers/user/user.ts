import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class User {
  private user: firebase.User;

  constructor(
    public afAuth: AngularFireAuth
  ) {
    afAuth.authState.subscribe(user => {
			this.user = user;
		});
  }

  signInWithEmail(credentials) {
		return this.afAuth.auth.signInWithEmailAndPassword(
      credentials.email,
			credentials.password);
  }
  
  signUp(credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(
      credentials.email,
      credentials.password);
  }
}
