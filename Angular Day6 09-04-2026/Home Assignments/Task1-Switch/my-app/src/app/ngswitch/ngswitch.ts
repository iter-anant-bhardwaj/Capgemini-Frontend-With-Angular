import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  imports: [NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './ngswitch.html',
  styleUrl: './ngswitch.css',
})
export class Ngswitch {
  role: string = '';
  setRole(role:string){
    this.role = role;
  }
}
