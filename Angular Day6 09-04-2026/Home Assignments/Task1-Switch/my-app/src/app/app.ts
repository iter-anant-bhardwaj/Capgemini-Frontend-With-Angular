import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Switch } from './switch/switch';
import { Ngswitch } from './ngswitch/ngswitch';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Switch,Ngswitch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
