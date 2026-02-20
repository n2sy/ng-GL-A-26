import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  imports: [FormsModule],
  templateUrl: './add-account.html',
  styleUrl: './add-account.css',
})
export class AddAccount {
  allStatus = ['', 'active', 'inactive', 'unknown'];
  @Output() eventToHomeAccount = new EventEmitter();

  //   nameValue: string = '';
  //   statusValue: string = '';

  addHandler(nameValue, statusValue) {
    console.log({
      name: nameValue,
      statut: statusValue,
    });

    this.eventToHomeAccount.emit({
      name: nameValue,
      statut: statusValue,
    });
  }
}
