import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReservationComponent } from './reservation/reservation.component';
import { Reservation } from './reservation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }
  getAllReservation() : Observable<Reservation[]>{
    return this.http.get<Reservation[]>("api/public/centers/reservation/");
  }

  addReservation(reservation:Reservation): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(reservation);
    console.log(body)
    return this.http.post("api/public/centers/reservation", body,{'headers':headers})
  }
}
