import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidats {
  private candidates : Candidat[] = [
        new Candidat(1, "bart", "simpson", 24, "ingénieur", "bart.jpeg"),
        new Candidat(2, "homer", "simpson", 53, "chef de projet", "homer.png"),
        new Candidat(3, "lisa", "simpson", 27, "designer", "lisa.png"),
        new Candidat(4, "marge", "simpson", 62, "analyste"),
    ];
    
    getAllCandidates() {
        return this.candidates
    }
    
    addCandidate() {
        this.candidates.push(
        new Candidat(3, "NEW", "CANDIDAT", 27, "designer", "lisa.png"),
        
    )
  }
}
