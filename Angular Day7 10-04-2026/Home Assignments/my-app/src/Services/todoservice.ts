import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Todoservice {

  tasks: any[] = [];

  addTask(task: string) {
    this.tasks.push({
      title: task,
      status: 'pending'
    });
  }

  changeStatus(task: any) {
    task.status = task.status === 'pending' ? 'finished' : 'pending';
  }

  deleteTask(task: any) {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  getFilteredTasks(filter: string) {
    if (filter === 'pending') {
      return this.tasks.filter(t => t.status === 'pending');
    }
    if (filter === 'finished') {
      return this.tasks.filter(t => t.status === 'finished');
    }
    return this.tasks;
  }
}