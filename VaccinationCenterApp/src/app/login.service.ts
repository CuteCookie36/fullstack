import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, map } from 'rxjs';
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedSubject: Subject<boolean> = new Subject();
  
  private password?: string;
  private username?: string;
  private role?: string;

  constructor(private httpClient: HttpClient, private router: Router) { }

  connect(username: string, password: string):Observable<any> {
    let token = this.createToken(username, password);
   
    let options = {
      headers: {
        'Authorization': token
      }
    };
    console.log("username2 = " + username);
    console.log("password2 = " + password);
    // //console.log("token = " + token);

    return this.httpClient.get<any>('/api/public/utilisateur?login=' + username)
    .pipe(map(() => {
      this.password = password;
      this.username = username;
      this.isLoggedSubject.next(true)

      console.log("Connected")
    }))

  }
//return this.http.get<VaccinationCenter[]>("api/public/centers?city="+city);
  private createToken(username?: string, password?: string) {
    // console.log("username3 = " + username);
    // console.log("password3 = " + password);
    let token = `Basic ` + btoa(`${username}:${password}`);
    return token;
  }

  isLogged(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }

  getBasicAuthHeaderValue(): string {
    return this.createToken(this.username, this.password)
  }

  
  authHasBasic(): boolean {
    return !!this.password && !!this.username;
  }

  logout() {
    console.log("Logout")
    if (this.authHasBasic()) {
      this.password = undefined;
      this.username = undefined;
    }
    this.isLoggedSubject.next(false);
    this.router.navigateByUrl("/centers").then(console.log).catch(console.error)
  }

  getUtilisateurByLogin(username: string): Observable<Utilisateur> {
    console.log("test123");
    return this.httpClient.get<Utilisateur>('/api/public/utilisateur?login='  + username);
  }

  getAllUtilisateurs(): Observable<Utilisateur[]> {
    console.log("test789");
    return this.httpClient.get<Utilisateur[]>('/api/public/utilisateur/');
  }
  getCurrentUsername(): string{
    return this.username ? this.username : "";
  }

  getCurrentRole(): string{
    console.log("username de ce role: " + this.username);
    return this.role ? this.role : "";
  }

}
