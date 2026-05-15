import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionCandidats } from '../services/gestion-candidats';

@Component({
  selector: 'app-edit',
  imports: [FormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit {
  candToEdit = signal(null);
  activateRoute = inject(ActivatedRoute);
  candSer = inject(GestionCandidats);
  router = inject(Router);

  ngOnInit() {
    this.candSer.getCandidateByIdAPI(this.activateRoute.snapshot.paramMap.get('id')).subscribe({
      next: (data: any) => {
        this.candToEdit.set(data);
      },
    });
  }

  submitHandler(formValue: any) {
    formValue._id = this.activateRoute.snapshot.params['id'];
    this.candSer.updateCandidateAPI(formValue).subscribe({
      next: (data: any) => {
        alert(data.message);
        this.router.navigateByUrl('/cv');
      },
    });
  }
}
