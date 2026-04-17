import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GestionCandidats } from '../services/gestion-candidats';
import { Candidat } from '../models/candidat';
import { NoAvatarPipe } from '../pipes/no-avatar-pipe';

@Component({
  selector: 'app-infos',
  imports: [RouterLink, NoAvatarPipe],
  templateUrl: './infos.html',
  styleUrl: './infos.css',
})
export class Infos {
  candidateToShow: Candidat;
  private actRoute = inject(ActivatedRoute);
  private candSer = inject(GestionCandidats);

  ngOnInit() {
    // V1
    //this.id = this.actRoute.snapshot.paramMap.get('id');

    //V2
    // this.actRoute.paramMap.subscribe({
    //   next: (data) => {
    //     this.id = data.get('id');
    //   },
    // error: (err) => {},
    // complete: () => {},
    //
    // });
    this.candidateToShow = this.candSer.getCandidateById(this.actRoute.snapshot.paramMap.get('id'));
  }
}
