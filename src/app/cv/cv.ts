import { Component } from '@angular/core';
import { Liste } from "../liste/liste";
import { Details } from "../details/details";
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  imports: [Liste, Details],
  templateUrl: './cv.html',
  styleUrl: './cv.css',
})
export class Cv {
    tabCandidats : Candidat[] = [
        new Candidat(1, "bart", "simpson", 24, "ingénieur", "bart.jpeg"),
        new Candidat(2, "homer", "simpson", 53, "chef de projet", "homer.png"),
        new Candidat(3, "lisa", "simpson", 27, "designer", "lisa.png"),
        new Candidat(4, "marge", "simpson", 62, "analyste"),
    ];
    selectedCandidate : Candidat
    recupererCandidat(cand) {
        this.selectedCandidate = cand        
    }

}
