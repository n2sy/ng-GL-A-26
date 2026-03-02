import { Component, signal } from '@angular/core';
import { First } from './first/first';
import { Second } from './second/second';
import { Cv } from './cv/cv';
import { HomeAccounts } from './accounts/home-accounts/home-accounts';
import { Direct } from './direct/direct';
import { ManageServers } from './manage-servers/manage-servers';
import { Recrues } from "./recrues/recrues";
import { GestionRecrues } from './services/gestion-recrues';
import { ExemplesSignal } from "./exemples-signal/exemples-signal";
import { HomeProducts } from "./produts/home-products/home-products";

@Component({
  selector: 'app-root',
  imports: [First, Second, Cv, HomeAccounts, Direct, ManageServers, Recrues, ExemplesSignal, HomeProducts],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers : []
})
export class App {
  protected readonly title = signal('GL-A-26');

  traitement(msg) {
    alert(msg);
  }
}
