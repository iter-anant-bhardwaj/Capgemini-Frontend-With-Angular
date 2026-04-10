import { Injectable } from '@angular/core';
import { UserType } from '../Types/usertypes';

@Injectable({
  providedIn: 'root',
})
export class User {
  userData: UserType[] = [
    {
      name: 'Anant',
      role: 'Admin',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Raj',
      role: 'User',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
  ];
  addUser(user: UserType) {
    this.userData.push(user);
    console.log(this.userData);
  }
}
