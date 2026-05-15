import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionCandidats } from '../services/gestion-candidats';

@Component({
  selector: 'app-add',
  imports: [FormsModule, JsonPipe],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add {
  candSer = inject(GestionCandidats);
  router = inject(Router);
  public isSubmitted: unknown = false;
  submitHandler(e, formValue) {
    this.isSubmitted = true;
    let f = new FormData();
    f.append('avatar', e.target[4].files[0]);

    this.candSer.uploadAvatar(f).subscribe({
      next: (data: any) => {
        formValue.avatar = data.url;
        this.candSer.addNewCandidateAPI(formValue).subscribe({
          next: (data: any) => {
            alert(data.message);
            this.router.navigateByUrl('/cv');
          },
        });
      },
    });

    // this.candSer.addNewCandidate(formValue);
    // this.router.navigateByUrl('/cv');
  }
}
