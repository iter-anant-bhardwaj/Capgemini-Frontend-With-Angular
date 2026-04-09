import { Component } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  imports: [],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
})
export class FirstComp {
  view:string = "";
  students = [
    { id: 1, name: 'Anant', age: 22, course: 'B.Tech' },
    { id: 2, name: 'Riya', age: 21, course: 'BCA' },
    { id: 3, name: 'Aman', age: 23, course: 'MCA' },
    { id: 4, name: 'Neha', age: 22, course: 'MBA' }
  ];
  setView(val:string){
    this.view=val;
  }
  
}
