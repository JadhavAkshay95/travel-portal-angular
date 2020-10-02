import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationGuard } from 'src/app/shared/gaurds/authentication.guard';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.authService.login();
    this.router.navigateByUrl('/home');
  }
}
