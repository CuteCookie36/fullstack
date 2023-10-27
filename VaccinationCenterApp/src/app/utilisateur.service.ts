import { Injectable } from '@angular/core';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  getAllUser() : Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>("api/admin/utilisateurs/");
  }

  addUtilisateur(utilisateur:Utilisateur): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(utilisateur);
    console.log(body)
    return this.http.post("api/admin/utilisateurs", body,{'headers':headers})
  }


}
