import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type

  loginForm: FormGroup;
  logInError: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public fb: FormBuilder,
  ) {
    this.loginForm = fb.group({
			email: ['nguyenthicamto@gmail.com', Validators.compose([Validators.required, Validators.email])],
			password: ['123456', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
    
  }

  login() {
    let data = this.loginForm.value;

    let credentials = {
      email: data.email,
      password: data.password
    };

    this.user.signInWithEmail(credentials).then(
      () => this.navCtrl.setRoot(MainPage),
      error => this.logInError = error.message
    );
  }
 
}
