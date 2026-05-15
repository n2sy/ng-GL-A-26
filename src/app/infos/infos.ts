import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NoAvatarPipe } from '../pipes/no-avatar-pipe';
import { GestionCandidats } from '../services/gestion-candidats';

@Component({
  selector: 'app-infos',
  imports: [RouterLink, NoAvatarPipe],
  templateUrl: './infos.html',
  styleUrl: './infos.css',
})
export class Infos {
  candidateToShow = signal(null);
  private actRoute = inject(ActivatedRoute);
  private candSer = inject(GestionCandidats);
  private router = inject(Router);

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
    this.candSer.getCandidateByIdAPI(this.actRoute.snapshot.paramMap.get('id')).subscribe({
      next: (data: any) => {
        this.candidateToShow.set(data);
      },
    });
  }

  deleteHandler() {
    if (confirm('Etes vous sur de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidateAPI(this.candidateToShow()._id).subscribe({
        next: (data: any) => {
          alert(data.message);
          this.router.navigateByUrl('/cv');
        },
      });
    }
  }
}
