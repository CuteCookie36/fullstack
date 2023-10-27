import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from './utilisateur';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:4200';
  constructor(private http: HttpClient) { }

  authenticateUser(login: string, password: string): Observable<any> {
    const body = {
      login: login,
      password: password,
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`${this.apiUrl}/auth`, body, { headers: headers });
  }

  login(login:string, password:string ) {
    return this.http.post<Utilisateur>('/api/admin/login', {login, password})
        // this is just the HTTP call, 
        // we still need to handle the reception of the token
        //.shareReplay();
  }


}
