import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login() {
    localStorage.setItem('SeesionUser', 'akshay');
  }

  gettoken() {
    return !!localStorage.getItem('SeesionUser');
  }
}
