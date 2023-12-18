import { Component } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation';
import { LoginService } from '../login.service';
import { Utilisateur } from '../utilisateur';
import { VaccinationCenter } from '../vaccination-center';
import { VaccinationService } from '../vaccination.service';

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
  valeur: boolean = false;
  valeur2: boolean = false;
  username: string = "";
  utilisateur!: Utilisateur;
  centers!: VaccinationCenter[];
  id!: number;
  centre!: VaccinationCenter;
  selectede?: VaccinationCenter;
  selectedCenterId: number | null = null;

  constructor(private loginService: LoginService, private service: ReservationService, private service2: VaccinationService){}

  ngOnInit(): void {
    
   }

  getAllReservation() {
    this.service.getAllReservation().subscribe(data => {
      this.reservations = data;
    });
  }

  getAllReservationByValidation(){
    this.valeur2 = false;
    this.service.getAllReservationValid(0).subscribe(data => {
      this.reservations = data;
    });
  }

  getAllReservationByValidationDone(){
    this.valeur2 = true;
    this.service.getAllReservationValid(1).subscribe(data => {
      this.reservations = data;
    });
  }

  searchByName() {
    this.service.getAllReservationByLastName(this.lastName).subscribe(data => {
      this.reservations = data;
    });
    console.log("ca passe");
  }

  selectCenter(center: VaccinationCenter){
    this.selectede=center;
    this.selectedCenterId = center.id;
    console.log("ID du centre sélectionné : ", this.selectedCenterId);
    console.log("ID du centre : ", center.id);
    
  }

  searchByVaccinCenterId(centre: VaccinationCenter){
    this.selectede=centre;
    this.selectedCenterId = centre.id;
    console.log("ID du centre sélectionné : ", this.selectedCenterId);
    console.log("ID du centre : ", centre.id);
    this.service.getAllReservationByVaccinCenter(this.selectedCenterId).subscribe(data => {
      this.reservations = data;
    });
    console.log("ca passe pour les id");
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

  searchByCity() {
    this.service2.getCenterByCity(this.city).subscribe(data => {
      this.centers = data;
    });
  }

}
