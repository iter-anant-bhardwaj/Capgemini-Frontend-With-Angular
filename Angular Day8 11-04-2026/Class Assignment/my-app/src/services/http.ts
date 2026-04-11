import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GitUserType } from '../types/githubUsers';
import { PlatziUserType } from '../types/platziUserType';
import { loginType } from '../types/loginType';

@Injectable({
  providedIn: 'root',
})
export class Http {
  httpClient = inject(HttpClient);

  baseUrl:string = 'https://api.escuelajs.co/api/v1';


  getUser(){
    return this.httpClient.get<GitUserType[]>(`${this.baseUrl}/users`);
  }

  addUser(user:PlatziUserType){
    return this.httpClient.post(`${this.baseUrl}/users/`,user);
  }

  login(user:loginType){
    return this.httpClient.post<loginType>(`${this.baseUrl}/auth/login`,user)
  }

}
