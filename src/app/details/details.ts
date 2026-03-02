import { Component, inject, Input } from '@angular/core';
import { Candidat } from '../models/candidat';
import { NoAvatarPipe } from '../pipes/no-avatar-pipe';
import { GestionRecrues } from '../services/gestion-recrues';

@Component({
  selector: 'app-details',
  imports: [NoAvatarPipe],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
   @Input() selCandidate : Candidat;
   private recrueSer = inject(GestionRecrues)
   
   recruterCandidat() {
    this.recrueSer.addRecrue(this.selCandidate)
   }
}
