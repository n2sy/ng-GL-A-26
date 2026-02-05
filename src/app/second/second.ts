import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.html',
})
export class Second {
  @Input() txtColor : string = "green"
  
  @Output() eventToParent = new EventEmitter()
  
  sendMsg() {
    this.eventToParent.emit('Message de la part du Second')
  }
}
