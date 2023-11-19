import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VaccinationCenter } from '../vaccination-center';


@Component({
  selector: 'app-bandeau',
  templateUrl: './bandeau.component.html',
  styleUrls: ['./bandeau.component.scss']
})
export class BandeauComponent implements OnInit{
  username: string = "";
  utilisateur!: Utilisateur;
  valeur: boolean = false;
  role: string = "";
  id!: Number;
  name: string = '';
  adress: string = '';
  postalCode: string = '';
  city: string = '';
  private VaccinCenter!: VaccinationCenter;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginService.isLogged().subscribe(value => {
      //console.log("valeur: " + value);
      //console.log("valeur de valeur av: " + this.valeur);
      if (value) {
        this.username = this.loginService.getCurrentUsername()
        this.id = this.loginService.getCurrentVaccinationCenterID()
        
        this.loginService.getVaccinationCenterById(this.id).subscribe(data => {
          this.VaccinCenter = data;
          this.city = this.VaccinCenter.city;
          this.adress = this.VaccinCenter.adress;
          this.name = this.VaccinCenter.name;
        });

        //this.VaccinCenter = this.loginService.getCurrentVaccinationCenter()
        //console.log("city du vaciinc: " + this.VaccinCenter.city)
        this.valeur = true;
        //console.log("valeur de valeur ap: " + this.valeur);
        //this.utilisateur.login = this.username;
        // this.loginService.getUtilisateur(this.utilisateur.login)
        // .subscribe(utilisateur => this.utilisateur = utilisateur);  

      } else {
        //this.utilisateur = undefined;
        alert("utilisateur undefined");
      }
    },)
  }

  logout() {
    this.loginService.logout();
    this.valeur = false;
  }

  testUsername(){
    console.log("username test: " + this.username);
  }

  getVaccinCbyID(){
    this.loginService.getVaccinationCenterById(this.id).subscribe(data => {
      this.VaccinCenter = data;
      this.city = this.VaccinCenter.city;
      this.adress = this.VaccinCenter.adress;
      this.name = this.VaccinCenter.name;
    });
    
    console.log("ville du vC: " + this.VaccinCenter.city);
  }


}
