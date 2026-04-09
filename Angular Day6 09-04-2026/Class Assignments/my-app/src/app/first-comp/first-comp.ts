import { Component, inject } from '@angular/core';
import { ChildComp } from './child-comp/child-comp';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Service } from '../../services/service';
import { Test } from '../../services/test';

@Component({
  selector: 'app-first-comp',
  imports: [ChildComp, NgClass, NgStyle, NgIf, NgFor],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
  providers: [Service, Test]
})
export class FirstComp {

//   str:string = "";
//   handleData(data:any){
//     this.str = data;
//     console.log(data);
//   }

//   applyClass:boolean = false;
//   shouldApply(){
//     this.applyClass = !this.applyClass;
//   }

//   arr:number[] = [1,2,3,4,5,6,7,8,9,10];

//   users = [
//   { id: 1, name: 'Anant', age: 21 },
//   { id: 2, name: 'Rahul', age: 22 },
//   { id: 3, name: 'Priya', age: 20 }
// ];

d:Service
constructor(protected data : Service){
  this.d = data;
}
service = inject(Service) //!Recommanded approch
  
test = inject(Test)
namesArr:string[] = this.test.namesArr;
addName(str:string){
  this.test.namesArr.push(str);
  console.log(this.namesArr);
}

ngOnInit(): void{
  this.namesArr = this.test.namesArr;
}
}
