import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { User } from '../../../services/user';

@Component({
  selector: 'app-displayuser',
  imports: [JsonPipe],
  templateUrl: './displayuser.html',
  styleUrl: './displayuser.css',
})
export class Displayuser {
   userService = inject(User);
}
