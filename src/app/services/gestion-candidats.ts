import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidats {
  private http = inject(HttpClient);
  url = 'https://backendangulartrainingvercel.vercel.app';
  private allCandidates: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 26, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 52, 'chef de projet', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 21, 'designer', 'lisa.png'),
    new Candidat(4, 'marge', 'simpson', 66, 'Analyste'),
  ];

  uploadAvatar(formData) {
    return this.http.post(`${this.url}/images/upload/cloud`, formData);
  }

  getCandidateById(candId: any) {
    return this.allCandidates.find((cand) => cand._id == candId);
  }
  getCandidateByIdAPI(candId: any) {
    return this.http.get(`${this.url}/cv/candidats/${candId}`);
  }

  getAllCandidates() {
    return this.allCandidates;
  }

  getAllCandidatesAPI() {
    return this.http.get(`${this.url}/cv/candidats`);
  }

  updateCandidate(uCand) {
    let i = this.allCandidates.findIndex((cand) => cand._id == uCand.id);
    this.allCandidates[i] = uCand;
  }
  updateCandidateAPI(uCand) {
    return this.http.put(`${this.url}/cv/candidats/${uCand._id}`, uCand);
  }

  deleteCandidate(idCand) {
    let i = this.allCandidates.findIndex((cand) => cand._id == idCand);
    this.allCandidates.splice(i, 1);
  }
  deleteCandidateAPI(idCand) {
    // let token = localStorage.getItem('access_token');

    // if (token) {
    //   let h = new HttpHeaders().append('Authorization', `bearer ${token}`);

    //   return this.http.delete(`${this.url}/cv/candidats/${idCand}`, { headers: h });
    // }

    return this.http.delete(`${this.url}/cv/candidats/${idCand}`);
  }

  addNewCandidate(newCand) {
    newCand.id = this.allCandidates[this.allCandidates.length - 1]._id + 1;
    this.allCandidates.push(newCand);
  }
  addNewCandidateAPI(newCand) {
    return this.http.post(`${this.url}/cv/candidats`, newCand);
  }

  addCandidate() {
    this.allCandidates.push(new Candidat(1, 'NEW', 'CANDIDAT', 21, 'designer', 'lisa.png'));
  }
}
