import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  imports: [ReactiveFormsModule],
  templateUrl: './react-form.html',
  styleUrl: './react-form.css',
})
export class ReactForm {
  signUpForm: FormGroup;

  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl('nidhal', Validators.required),
      addrMail: new FormControl(null, [Validators.required, Validators.email]),
      skills: new FormArray([]),
    });
  }

  submitHandler() {
    console.log(this.signUpForm);
  }

  get formSkills() {
    return <FormArray>this.signUpForm.get('skills');
  }

  addControlSkill() {
    let newCtrl = new FormControl(null, Validators.required);
    this.formSkills.push(newCtrl);
  }
}
