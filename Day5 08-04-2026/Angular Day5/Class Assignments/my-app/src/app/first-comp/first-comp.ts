import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-comp',
  imports: [FormsModule],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
})
export class FirstComp {
  name:string = "Anant"
  style:string = `color:red; text-decoration:underline`
  style2:string = `text-decoration:underline`
  isHidden:boolean = false;
  ipVal:string = '';

  click(){
    console.log(this.isHidden)
    this.isHidden = !this.isHidden;
  }

  // inputValChange(str:string){
  //   console.log(this.ipVal);
  //   this.ipVal=str
  //   console.log(this.ipVal)
  // }
}
