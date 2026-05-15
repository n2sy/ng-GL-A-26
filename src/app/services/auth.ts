import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http = inject(HttpClient);
  url = 'https://backendangulartrainingvercel.vercel.app';
  seConnecter(identifiants) {
    return this.http.post(`${this.url}/auth/login`, identifiants);
  }

  inscription(identifiants) {
    return this.http.post(`${this.url}/auth/register`, identifiants);
  }

  seDeconnecter() {
    localStorage.removeItem('access_token');
  }

  estConnecte() {
    let token = localStorage.getItem('access_token');
    return !!token;
  }
}
