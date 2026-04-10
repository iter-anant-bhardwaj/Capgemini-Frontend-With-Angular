import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTable, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  imports: [MatTableModule, MatButton],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  displayedColumns: string[] = ['id', 'name', 'age', 'qualification'];
  data = [
    {
      id:1,
      name:"Raju",
      age:30,
      qualification:"UG"
    },
    {
      id:2,
      name:"Yash",
      age:35,
      qualification:"PG"
    },
    {
      id:3,
      name:"Priya",
      age:27,
      qualification:"UG"
    }
  ]
}
