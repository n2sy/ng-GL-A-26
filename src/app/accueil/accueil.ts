import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-accueil',
  imports: [RouterLink],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
})
export class Accueil {
id = 3;
private router = inject(Router)

goToCv() {
    this.router.navigateByUrl("cv")
}

goToInfos() {
    this.router.navigate(['cv', this.id])
}
}
