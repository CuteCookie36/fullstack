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
  selectedReservId: number | null = null;

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

  updateValidation(reservationID: number, updateValide: number){
    if (this.selected && this.selected.id !== undefined) {
      console.log("id de la reserv: " + this.selected.id);
      console.log("reserv id : " + this.selectedReservId);
      this.service.updateValidReservation(this.selected.id, updateValide);
    }else{
      console.log("il y a du null !");
    }
      
  }

  selectReservation(reservation: Reservation){
    this.selected=reservation;
    this.selectedReservId = reservation.id;
    console.log("ID du centre sélectionné : ", this.selectedReservId);
    console.log("ID du centre : ", reservation.id);
    
  }

}
