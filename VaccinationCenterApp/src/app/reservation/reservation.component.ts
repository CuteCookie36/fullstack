import { Component } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
  city: string = '';
  firstName: string = '';
  lastName: string = '';
  mail: string = '';
  maDate = new Date();
  reservations!: Reservation[];
  selected?: Reservation;

  constructor(private service: ReservationService){}

  getAllReservation() {
    this.service.getAllReservation().subscribe(data => {
      this.reservations = data;
    });
  }
}
