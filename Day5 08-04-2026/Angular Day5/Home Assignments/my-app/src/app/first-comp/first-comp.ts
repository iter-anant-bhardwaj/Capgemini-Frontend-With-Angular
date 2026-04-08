import { Component } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  imports: [],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
})
export class FirstComp {
  questions:string[] = [
    "What is your name?",
    "What is your age?",
    "What is your job?",
    "What motivates you?"
  ];

  tasks: string[] = [
    "Workout for 1 hour",
    "Drink a glass of water",
    "Read book for 30 minutes",
    "Complete 10000 steps"
  ];

  styleHead:string = "color:blue"
  styleBox:string = "display:flex; height:100px; border:2px solid black; align-items:center"
  styleButton:string = "margin:10px; padding:10px; cursor:pointer"

  str:string = "";

  displayQuestion(){
    const index = Math.floor(Math.random() * this.questions.length);
    this.str = this.questions[index];
  }

  displayTask(){
    const index = Math.floor(Math.random() * this.tasks.length);
    this.str = this.tasks[index];
  }
}
