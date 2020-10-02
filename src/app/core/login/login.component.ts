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

  ngOnInit() {}

  login() {
    this.isInvalidUser = false;

    if (
      this.loginForm.user_login_id === '' ||
      this.loginForm.user_login_password === ''
    ) {
      return;
    }
    if (this.authService.validateUser(this.loginForm)) {
      localStorage.setItem('loginUser', this.loginForm.user_login_id);
      this.router.navigateByUrl('/home');
    } else {
      this.isInvalidUser = true;
    }
  }
}
