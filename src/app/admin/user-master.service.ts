import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleMasterService {
  users: any[] = [
    {
      Id: '1',
      Name: 'Akshay',
      Code: 100,
      Module: 'M',
      Path: 'test',
      Status: '0',
    },
    {
      Id: '2',
      Name: 'Akshay',
      Code: 100,
      Module: 'M',
      Path: 'M',
      Status: '1',
    },
  ];

  constructor() {}

  getUserList() {
    return of(this.users);
  }

  addUser(user) {
    user['Id'] = Math.random() * 1000000000000000000;
    return this.users.push(user);
  }

  deleteUser(user) {
    if (Array.isArray(user)) {
      user.forEach((element) => {
        this.users = this.users.filter(
          (userData) => userData.Id !== element.Id
        );
      });
    } else {
      this.users = this.users.filter((userData) => userData.Id !== user.Id);
    }
  }

  findIndex(user) {
    return this.users.findIndex((userData) => userData.Id === user.Id);
  }

  updateUser(user) {
    this.users.splice(this.findIndex(user), 1, user);
  }
}
