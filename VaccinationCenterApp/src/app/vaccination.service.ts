import { Injectable } from '@angular/core';
import { VaccinationCenter } from './vaccination-center';
import { createInjectableType } from '@angular/compiler';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Reservation } from './reservation';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {

  // CENTERS: VaccinationCenter[] = [
  //   {id:1, name: "Hopital de toto", adress: "Rue du pont", postalCode: "54000", city: "Nancy"},
  //   {id:2, name: "Hopital de tata", adress: "Rue du pant", postalCode: "54000", city: "Nancy"},
  //   {id:3, name: "Hopital de titi", adress: "Rue du pint", postalCode: "54000", city: "Nancy"},
  //   {id:4, name: "Hopital de tete", adress: "Rue du punt", postalCode: "54000", city: "Nancy"},
  //   {id:5, name: "Hopital de tutu", adress: "Rue du pent", postalCode: "54000", city: "Nancy"}

  // ];
  constructor(private http: HttpClient) { }

  getAllVaccinationCenter() : Observable<VaccinationCenter[]>{
    return this.http.get<VaccinationCenter[]>("api/public/centers");
  }

  getCenterById(id: Number) : Observable<VaccinationCenter>{
    return this.http.get<VaccinationCenter>("api/public/centers/"+id);
  }

  getCenterByCity(city: String) : Observable<VaccinationCenter[]>{

    return this.http.get<VaccinationCenter[]>("api/public/centers?city="+city);
  }

  getCenterbyUserLogin(login: String) : Observable<VaccinationCenter>{
    return this.http.get<VaccinationCenter>("api/public/centers/utilisateur?login="+login);
  }

  addCenter(centre: VaccinationCenter): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(centre);
    console.log(body)
    return this.http.post("api/public/centers/save", body,{'headers':headers})
  }



}
