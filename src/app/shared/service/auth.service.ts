import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  userData = [
    { user_login_id: 'VIKAS', user_login_password: 'Admin@123', '': '' },
    { user_login_id: 'SORA', user_login_password: 'MasterKey20', '': '' },
    { user_login_id: 'GANESH', user_login_password: 'GN@1234', '': '' },
    { user_login_id: 'PDA', user_login_password: 'PDA#123', '': '' },
  ];

  masterTabs = [];
  private subject = new Subject();

  sendMessage(message: string) {
    this.masterTabs.push(message);

    this.subject.next({ message });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  gettoken() {
    return !!localStorage.getItem('loginUser');
  }

  validateUser(requestPayload) {
    return this.userData.filter(
      (user) =>
        user.user_login_id === requestPayload.user_login_id &&
        user.user_login_password === requestPayload.user_login_password
    ).length > 0
      ? true
      : false;
  }

  addMasterTabs(element) {
    this.masterTabs.push(element);
  }

  getMasterTabs() {
    return of(this.masterTabs);
  }
}
