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
    return this.http.get<Utilisateur[]>("api/private/utilisateurs/");
  }

  addUtilisateur(utilisateur:Utilisateur): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(utilisateur);
    console.log(body)
    return this.http.post("api/private/utilisateurs", body,{'headers':headers})
  }

  deleteUser(id: Number): Observable<Utilisateur>{
    return this.http.delete<Utilisateur>("/api/private/utilisateur/delete/"+id)
  }

  patchUser(user: Utilisateur): Observable<Utilisateur> {
    console.log("id du user: " + user.id);
    return this.http.patch<Utilisateur>("/api/private/utilisateur/patch/"+user.id, user)
  }


}
