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

  

}
