import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  defaultLangage = 'js';

  myComment = 'Rien à signaler...';

  submitHandler(f: NgForm) {
    console.log(f);
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
