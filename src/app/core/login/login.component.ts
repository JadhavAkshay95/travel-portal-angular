import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationGuard } from 'src/app/shared/gaurds/authentication.guard';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  keepSigned: boolean;
  loginForm = {
    user_login_id: '',
    user_login_password: '',
  };
  isInvalidUser: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.keepSigned = false;
    this.loginForm.user_login_id = '';
    this.loginForm.user_login_password = '';
    if (localStorage.getItem('rememberMe')) {
      console.log(JSON.parse(localStorage.getItem('rememberMe')));
      this.keepSigned = true;
      this.loginForm.user_login_id = JSON.parse(
        localStorage.getItem('rememberMe')
      ).user_login_id;
      this.loginForm.user_login_password = JSON.parse(
        localStorage.getItem('rememberMe')
      ).user_login_password;
    } 
  }

  login() {
    this.isInvalidUser = false;

    if (
      this.loginForm.user_login_id === '' ||
      this.loginForm.user_login_password === ''
    ) {
      return;
    }
    if (this.authService.validateUser(this.loginForm)) {
      localStorage.setItem('loginUser', JSON.stringify(this.loginForm));
      this.router.navigateByUrl('/home');
    } else {
      this.isInvalidUser = true;
    }
  }

  rememeberMe($event) {
    this.keepSigned = $event.target.checked;
    if ($event.target.checked) {
      localStorage.setItem('rememberMe', JSON.stringify(this.loginForm));
    } else {
      localStorage.removeItem('rememberMe');
    }
  }
}
