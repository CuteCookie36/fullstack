import { Component, OnInit } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center';
import { VaccinationService } from '../vaccination.service';
import { FormBuilder } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-vaccination-center-list',
  templateUrl: './vaccination-center-list.component.html',
  styleUrls: ['./vaccination-center-list.component.scss']
})
export class VaccinationCenterListComponent implements OnInit {
  city: string = '';
  centers!: VaccinationCenter[];
  selected?: VaccinationCenter;

/*
  centers: VaccinationCenter[] = [
    {id:1, name: "Hopital de toto", adress: "Rue du pont", postalCode: "54000", city: "Nancy"},
    {id:2, name: "Hopital de tata", adress: "Rue du pant", postalCode: "54000", city: "Nancy"},
    {id:3, name: "Hopital de titi", adress: "Rue du pint", postalCode: "54000", city: "Nancy"},
    {id:4, name: "Hopital de tete", adress: "Rue du punt", postalCode: "54000", city: "Nancy"},
    {id:5, name: "Hopital de tutu", adress: "Rue du pent", postalCode: "54000", city: "Nancy"}

  ];

 */


  constructor(private service: VaccinationService){}
  ngOnInit(): void {
   // this.service.getAllVaccinationCenter().subscribe(resultCenters=>{this.centers = resultCenters;});
  }
  searchByCity() {
    this.service.getCenterByCity(this.city).subscribe(data => {
      this.centers = data;
    });
  }
  isSpecialCenter(center: VaccinationCenter){
    return center.city == "Nancy";
  }

  selectCenter(center: VaccinationCenter){
    this.selected=center;
  }

  onDeleted(center: VaccinationCenter){
    delete this.selected;
    this.centers.splice(this.centers.indexOf(center), 1);
  }


}
