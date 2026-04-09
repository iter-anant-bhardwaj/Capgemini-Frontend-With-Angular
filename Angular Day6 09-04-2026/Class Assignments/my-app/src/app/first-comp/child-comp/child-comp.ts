import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Service } from '../../../services/service';

@Component({
  selector: 'app-child-comp',
  imports: [],
  templateUrl: './child-comp.html',
  styleUrl: './child-comp.css',
  providers:[Service]
})
export class ChildComp {
  @Input() nameGiven:string='';
  @Input() nameButton:string='';

  @Output() data = new EventEmitter<string>();
  sendData(){
    this.data.emit("Hello Parent Child Here");
  }


  ser = inject(Service)
  d:string[] = []
  addName(){
    this.ser.names.push("Raju");
    console.log(this.ser.names);
  }
}
