import { Component, inject } from '@angular/core';
import { GestionRecrues } from '../services/gestion-recrues';
import { Candidat } from '../models/candidat';
import { Item } from '../item/item';

@Component({
  selector: 'app-recrues',
  imports: [Item],
  templateUrl: './recrues.html',
  styleUrl: './recrues.css',
})
export class Recrues {
  tabRecrues: Candidat[] = [];
  private recrueSer = inject(GestionRecrues);

  ngOnInit() {
    this.tabRecrues = this.recrueSer.allRecrues;
  }
}
