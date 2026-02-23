import { Component, inject } from '@angular/core';
import { Liste } from "../liste/liste";
import { Details } from "../details/details";
import { Candidat } from '../models/candidat';
import { First } from '../services/first';
import { GestionCandidats } from '../services/gestion-candidats';

@Component({
  selector: 'app-cv',
  imports: [Liste, Details],
  templateUrl: './cv.html',
  styleUrl: './cv.css',
  providers : []
})
export class Cv {
    tabCandidats : Candidat[] = [
    
    ];
    selectedCandidate : Candidat;
    
    // Methode 1
    // constructor(private firstSer : First) {
    // }

    //Méthode 2
    private firstSer = inject(First);
    private candSer = inject(GestionCandidats);
    
    ngOnInit() {
        this.firstSer.afficherBonjour();
        this.tabCandidats = this.candSer.getAllCandidates();
    }
    recupererCandidat(cand) {
        this.selectedCandidate = cand        
    }
    
    addHandler() {
        this.candSer.addCandidate();
    }
    
     showListCandidate() {
    console.log(this.candSer.getAllCandidates());
    
  }

}
