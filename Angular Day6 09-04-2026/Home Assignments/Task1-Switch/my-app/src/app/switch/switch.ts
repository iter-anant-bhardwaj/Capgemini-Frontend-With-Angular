import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  imports: [],
  templateUrl: './switch.html',
  styleUrl: './switch.css',
})
export class Switch {
  role:string="";
  setRole(role:string){
    this.role = role;
  }
}
