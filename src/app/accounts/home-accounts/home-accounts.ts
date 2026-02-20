import { Component } from '@angular/core';
import { AddAccount } from '../add-account/add-account';
import { ItemAccount } from '../item-account/item-account';

@Component({
  selector: 'app-home-accounts',
  imports: [AddAccount, ItemAccount],
  templateUrl: './home-accounts.html',
  styleUrl: './home-accounts.css',
})
export class HomeAccounts {
  tabAccounts = [
    {
      name: 'Nidhal Account',
      statut: 'inactive',
    },
    {
      name: 'Sana Account',
      statut: 'active',
    },
  ];

  addAccount(newAccount) {
    this.tabAccounts.push(newAccount);
  }
}
