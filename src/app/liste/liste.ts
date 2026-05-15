import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Item } from '../item/item';
import { Candidat } from '../models/candidat';
import { GestionCandidats } from '../services/gestion-candidats';

@Component({
  selector: 'app-liste',
  imports: [Item],
  templateUrl: './liste.html',
  styleUrl: './liste.css',
  //providers : [GestionCandidats]
})
export class Liste {
  allCandidates: Candidat[] = [];
  @Output() eventToCv = new EventEmitter();
  private candSer = inject(GestionCandidats);

  ngOnInit() {
    this.candSer.getAllCandidatesAPI().subscribe({
      next: (data: any) => {
        console.log(data);
        this.allCandidates = data;
      },
      error: (err) => {
        alert('Connexion impossible...chargement de données ficitves');
        this.allCandidates = this.candSer.getAllCandidates();
      },
    });
  }
  sendCandidateToCv(cand) {
    this.eventToCv.emit(cand);
  }

  showListCandidate() {
    console.log(this.candSer.getAllCandidates());
  }
}
