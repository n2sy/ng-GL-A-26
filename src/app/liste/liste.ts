import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from "../item/item";
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste',
  imports: [Item],
  templateUrl: './liste.html',
  styleUrl: './liste.css',
})
export class Liste {
  @Input() allCandidates : Candidat[] = [];
  @Output() eventToCv = new EventEmitter()
  sendCandidateToCv(cand) {
    this.eventToCv.emit(cand)
  }
}
