import { Component, signal } from '@angular/core';
import { First } from "./first/first";
import { Second } from "./second/second";

@Component({
  selector: 'app-root',
  imports: [First, Second],
  templateUrl: './app.html',
  styleUrl: './app.css',
  
})
export class App {
  protected readonly title = signal('GL-A-26');
  
  traitement(msg) {
    alert(msg)
  } 
}
