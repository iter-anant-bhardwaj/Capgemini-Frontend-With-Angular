import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dash',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './dash.html',
  styleUrl: './dash.css',
})
export class Dash {
  route = inject(Router);
  navigateToHome(){
    this.route.navigateByUrl("");
  }
}
