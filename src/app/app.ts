import { Component, signal } from '@angular/core';
import { First } from './first/first';
import { Second } from './second/second';
import { Cv } from './cv/cv';
import { HomeAccounts } from './accounts/home-accounts/home-accounts';
import { Direct } from './direct/direct';
import { ManageServers } from './manage-servers/manage-servers';

@Component({
  selector: 'app-root',
  imports: [First, Second, Cv, HomeAccounts, Direct, ManageServers],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('GL-A-26');

  traitement(msg) {
    alert(msg);
  }
}
