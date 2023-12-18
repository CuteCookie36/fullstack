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
    return this.http.get<Reservation[]>("api/private/centers/reservation/");
  }

  getAllReservationValid(Valid: number) : Observable<Reservation[]>{
    return this.http.get<Reservation[]>("api/private/centers/reservation/validoui/" + Valid);
  }
    
  addReservation(reservation:Reservation): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(reservation)
    console.log(body)
    return this.http.post("api/public/centers/reservation", body,{'headers':headers})
  }

  getAllReservationByLastName(lastName: String) : Observable<Reservation[]>{
    return this.http.get<Reservation[]>("/api/private/centers/reservations?lastName=" + lastName);
  }

  getAllReservationByVaccinCenter(Id: number) : Observable<Reservation[]>{
    return this.http.get<Reservation[]>("/api/private/centers/reservations/vaccincenter?Id=" + Id);
  }

  updateValidReservation(reservationId: number, newValidValue: number){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({reservationId, newValidValue})
    console.log("body = " + body)
    return this.http.post("api/private/centers/reservation/update-valid", body,{'headers':headers,responseType: 'text' })
  }
}
