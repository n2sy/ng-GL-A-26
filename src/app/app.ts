import { Component, signal } from '@angular/core';
import { First } from "./first/first";
import { Second } from "./second/second";
import { Cv } from "./cv/cv";

@Component({
  selector: 'app-root',
  imports: [First, Second, Cv,],
  templateUrl: './app.html',
  styleUrl: './app.css',
  
})
export class App {
  protected readonly title = signal('GL-A-26');
  
  traitement(msg) {
    alert(msg)
  } 
}
