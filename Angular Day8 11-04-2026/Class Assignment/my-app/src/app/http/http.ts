import { Component, inject, OnInit, signal } from '@angular/core';
import {Http as HttpService} from '../../services/http';
import { GitUserType } from '../../types/githubUsers';
import { JsonPipe } from '@angular/common';
import { PlatziUserType } from '../../types/platziUserType';
import { loginType } from '../../types/loginType';
@Component({
  selector: 'app-http',
  imports: [JsonPipe],
  templateUrl: './http.html',
  styleUrl: './http.css',
})
export class Http implements OnInit{
  httpData = inject(HttpService);
  // userData:GitUserType[] = [];
  userData = signal<GitUserType[]>([]);

  ngOnInit(): void{
    this.httpData.getUser().subscribe({
      next:(data) => {
        console.log(data);
        this.userData.set(data);
      },
      error:(ermsg)=>{
        console.log(ermsg);        
      },
      complete:() => {
        console.log("data recieved successfully"); 
      }
    })
  }

  user:PlatziUserType={
    name:'Gautam',
    avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbd0L_YfWgabICwb5uL7cYmV9AVZr93Pb4Potmi75PMjrS3kL3wff4KtGi_epikCwOK-8TnQlYuzjldsLjytDfC15HcbobJYUGM2A94n5QQ&s=10',
    email:'abc@gmail.com',
    password:'123456789'
  }
  addNewUser(){
    this.httpData.addUser(this.user).subscribe({
      next:(data) => {
        console.log(data);
      },
      error:(ermsg)=>{
        console.log(ermsg);        
      },
      complete:() => {
        console.log("data posted successfully"); 
      }

    })
  }

  authUser:loginType={
    email:"admin@mail.com",
    password:"admin123"
  }
  login(){
    this.httpData.login(this.authUser).subscribe({
      next:(data) => {
        console.log(data);
      },
      error:(ermsg)=>{
        console.log(ermsg);        
      },
      complete:() => {
        console.log("login successfully"); 
      }
    })
  }
}
