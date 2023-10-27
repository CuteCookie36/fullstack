import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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


}
