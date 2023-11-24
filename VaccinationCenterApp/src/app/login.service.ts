import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, map } from 'rxjs';
import { Utilisateur } from './utilisateur';
import { VaccinationCenter } from './vaccination-center';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedSubject: Subject<boolean> = new Subject();
  
  private password?: string;
  private username?: string;
  private role?: string;
  private connectedUser?: Utilisateur;
  private VaccinCenterId?: Number;
  private VaccinCenter!: VaccinationCenter;

  constructor(private httpClient: HttpClient, private router: Router) { }

  connect(username: string, password: string):Observable<Utilisateur> {
    let token = this.createToken(username, password);
   
    let options = {
      headers: {
        'Authorization': token
      }
    };
    //console.log("username2 = " + username);
    //console.log("password2 = " + password);
    // //console.log("token = " + token);

    return this.httpClient.get<Utilisateur>('/api/public/utilisateur?login=' + username + "&password=" + password)
    .pipe(map((user: Utilisateur) => {
      this.password = password;
      this.username = username;
      this.connectedUser = user;
      this.role = this.connectedUser.roles;
      this.VaccinCenterId = this.connectedUser.vaccinationCenter.id;
      this.isLoggedSubject.next(true);
      console.log("connected user role: " + this.connectedUser.roles)
      console.log("username: " + this.username)
      console.log("password: " + this.password)
      console.log("id VaccinC 2: " + this.VaccinCenterId)
      console.log("le roles est: " + this.role);
      console.log("Connected")
      return user;
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
    //console.log("test123");
    return this.httpClient.get<Utilisateur>('/api/public/utilisateur?login='  + username);
  }

  getAllUtilisateurs(): Observable<Utilisateur[]> {
    //console.log("test789");
    return this.httpClient.get<Utilisateur[]>('/api/public/utilisateur/');
  }
  getCurrentUsername(): string{
    //console.log("username de ce role1: " + this.username);
    return this.username ? this.username : "";
  }

  getCurrentUserRole(): string {
    //console.log("connected user role v2: " + this.role)
    return this.role ? this.role : "med";
  }

  getCurrentVaccinationCenterID(): Number{
    //console.log("l'id du vaccin center de lui est: " + this.VaccinCenterId)
    return this.VaccinCenterId ? this.VaccinCenterId: 1 ;
  }

  getVaccinationCenterById(id: Number): Observable<VaccinationCenter>{
    console.log("l'id du vaccin center de lui est: " + this.VaccinCenterId)
    return this.httpClient.get<VaccinationCenter>('/api/public/centers/idd?Id='  + id);
  }

}
