import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../services/user';

@Component({
  selector: 'app-adduser',
  imports: [FormsModule],
  templateUrl: './adduser.html',
  styleUrl: './adduser.css',
})
export class Adduser {
  
  name:string = "";
  role:string = "";
  image:string = "";
 
  userService = inject(User);
  handleSubmit(){
    let user = {
      name : this.name,
      role : this.role,
      image : this.image
    };
    this.userService.addUser(user);
    this.name='';
    this.role='';
    this.image='';
  }
}
