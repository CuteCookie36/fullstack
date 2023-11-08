import { Component } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {
  city: string = '';
  firstName: string = '';
  lastName: string = '';
  mail: string = '';
  maDate = new Date();
  reservations!: Reservation[];
  selected?: Reservation;

  constructor(private service: ReservationService){}

  ngOnInit(): void {
    
   }

  getAllReservation() {
    this.service.getAllReservation().subscribe(data => {
      this.reservations = data;
    });
  }

  searchByName() {
    this.service.getAllReservationByLastName(this.lastName).subscribe(data => {
      this.reservations = data;
    });
    console.log("ca passe");
  }


}
