import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  defaultLangage = 'js';
  showRegister = signal<boolean>(true);
  authSer = inject(Auth);
  myComment = 'Rien à signaler...';
  router = inject(Router);
  showError = signal<boolean>(false);

  submitHandler(f: NgForm) {
    if (this.showRegister()) {
      this.authSer.inscription(f.value).subscribe({
        next: (data) => {
          alert('Inscription réussi');
          this.showRegister.set(false);
        },
      });
    } else {
      this.authSer.seConnecter(f.value).subscribe({
        next: (data: any) => {
          alert(data.message);
          localStorage.setItem('access_token', data.token);
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          this.showError.set(true);
          f.reset();
        },
      });
    }
  }

  toggleButton() {
    this.showRegister.update((previousValue) => {
      return !previousValue;
    });
  }

  generatePwd(f: NgForm) {
    f.form.patchValue({
      //login: 'andem@gmail.Com',
      password: crypto.randomUUID(),
    });
  }

  resetForm(f: NgForm) {
    f.reset();
  }
  resetFormV2(f: NgForm) {
    f.setValue({
      login: '',
      password: '',
      infos: {
        langage: 'js',
        commentaire: 'Rien à signaler...',
      },
      erreurs: '',
    });
  }
}
