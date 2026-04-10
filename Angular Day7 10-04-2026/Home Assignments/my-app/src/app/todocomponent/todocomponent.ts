import { Component, inject } from '@angular/core';
import { Todoservice } from '../../Services/todoservice';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-todocomponent',
  imports: [FormsModule],
  templateUrl: './todocomponent.html',
  styleUrl: './todocomponent.css',
})
export class Todocomponent {
  todoService = inject(Todoservice);

  view: string = 'add';
  taskInput: string = '';
  filter: string = 'all';

  addTask() {
    if (this.taskInput.trim()) {
      this.todoService.addTask(this.taskInput);
      this.taskInput = '';
    }
  }
  get tasks() {
    return this.todoService.getFilteredTasks(this.filter);
  }
  toggle(task: any) {
    this.todoService.changeStatus(task);
  }
  delete(task: any) {
    this.todoService.deleteTask(task);
  }
}
