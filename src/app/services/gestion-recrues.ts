import { Injectable } from '@angular/core';
import type { Candidat } from '../models/candidat';
import { First } from './first';

@Injectable()
export class GestionRecrues {
  allRecrues: Candidat[] = [];
  
  constructor(private firstSer : First) { }

  addRecrue(newRecrue) {
    this.firstSer.afficherBonjour();
    if (this.allRecrues.indexOf(newRecrue) == -1) this.allRecrues.push(newRecrue);
    else alert('Ce candidat a déjà été recruté !');
  }
}
