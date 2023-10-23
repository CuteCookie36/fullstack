import { Component, OnInit, ViewChild } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center';
import { VaccinationService } from '../vaccination.service';
import { FormBuilder, NgForm } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation';
import { Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

@Component({
  selector: 'app-vaccination-center-list',
  templateUrl: './vaccination-center-list.component.html',
  styleUrls: ['./vaccination-center-list.component.scss']
})
export class VaccinationCenterListComponent implements OnInit {
  city: string = '';
  firstName: string = '';
  lastName: string = '';
  mail: string = '';
  dateRDV: string = '';
  centers!: VaccinationCenter[];
  selected?: VaccinationCenter;
  selectedCenterId: number | null = null;
  //reservation!: Reservation;
  reservation: Reservation = new Reservation();
  borderColor: string = 'rgb(237, 13, 13)';

/*
  centers: VaccinationCenter[] = [
    {id:1, name: "Hopital de toto", adress: "Rue du pont", postalCode: "54000", city: "Nancy"},
    {id:2, name: "Hopital de tata", adress: "Rue du pant", postalCode: "54000", city: "Nancy"},
    {id:3, name: "Hopital de titi", adress: "Rue du pint", postalCode: "54000", city: "Nancy"},
    {id:4, name: "Hopital de tete", adress: "Rue du punt", postalCode: "54000", city: "Nancy"},
    {id:5, name: "Hopital de tutu", adress: "Rue du pent", postalCode: "54000", city: "Nancy"}

  ];

 */

  constructor(private service: VaccinationService, private service2: ReservationService, private router: Router){}
  ngOnInit(): void {
   // this.service.getAllVaccinationCenter().subscribe(resultCenters=>{this.centers = resultCenters;});
  }
  searchByCity() {
    this.service.getCenterByCity(this.city).subscribe(data => {
      this.centers = data;
    });
  }

  onFirstNameChange() {
    if (this.reservation.firstName) {
      // Si le champ est rempli, changez la couleur de la bordure
      this.borderColor = 'black'; 
    }
    else if (this.reservation.lastName) {
      // Si le champ est rempli, changez la couleur de la bordure
      this.borderColor = 'black'; 
    }
    else if (this.reservation.mail) {
      // Si le champ est rempli, changez la couleur de la bordure
      this.borderColor = 'black'; 
    }
    else if (this.reservation.dateRDV) {
      // Si le champ est rempli, changez la couleur de la bordure
      this.borderColor = 'black'; 
    }   
    else {
      // Si le champ est vide, rétablissez la couleur de la bordure par défaut (rouge)
      this.borderColor = 'rgb(237, 13, 13)';
    }
  }

  saveReservation(center: VaccinationCenter){
    
    if(this.selectedCenterId !== null && this.isReservationValid(this.reservation)){
      console.log("id du centre select : ", center.id);
      console.log("prenom du patient : ", this.reservation.firstName);
      console.log("nom du patient : ", this.reservation.lastName);
      console.log("mail du patient : ", this.reservation.mail);
      console.log("date de la réservation : ", this.reservation.dateRDV);
      console.log("centre de vaccina : ", this.reservation.vaccinationCenter);
      console.log("id centre de vaccina : ", this.reservation.vaccinationCenter.id);
      if (this.reservation.vaccinationCenter && this.reservation.vaccinationCenter.id > 0){
        this.reservation.vaccinationCenter.id = this.selectedCenterId;
        this.service2.addReservation(this.reservation).subscribe(data=>{
          console.log(data)
        });
      this.router.navigate(['reservation']);
      } else {
        console.error("L'ID du centre de vaccination est manquant ou invalide.");
      }
      
    } else {
      console.error("L'objet de réservation n'est pas correctement initialisé.");
    }
      
  }

  isReservationValid(reservation: Reservation): boolean {
    if (
      reservation &&
      reservation.firstName &&
      reservation.lastName &&
      reservation.mail &&
      reservation.dateRDV &&
      reservation.vaccinationCenter 
      //reservation.vaccinationCenter.id
    ) {
      return true;
    } else {
      return false;
    }
  }

  isSpecialCenter(center: VaccinationCenter){
    return center.city == "Nancy";
  }

  selectCenter(center: VaccinationCenter){
    this.selected=center;
    this.selectedCenterId = center.id;
    console.log("ID du centre sélectionné : ", this.selectedCenterId);
    console.log("ID du centre : ", center.id);
    this.reservation.vaccinationCenter.id = this.selectedCenterId;
    console.log("ID du centre dans la réservation : ", this.reservation.vaccinationCenter.id);
    
  }


  onDeleted(center: VaccinationCenter){
    delete this.selected;
    this.centers.splice(this.centers.indexOf(center), 1);
  }


}
