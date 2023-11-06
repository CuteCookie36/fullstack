import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bandeau',
  templateUrl: './bandeau.component.html',
  styleUrls: ['./bandeau.component.scss']
})
export class BandeauComponent implements OnInit{
  username: string = "";
  utilisateur!: Utilisateur;
  valeur: boolean = false;

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginService.isLogged().subscribe(value => {
      console.log("valeur: " + value);
      console.log("valeur de valeur av: " + this.valeur);
      if (value) {
        this.username = this.loginService.getCurrentUsername()
        console.log("username user: " + this.username)
        this.valeur = true;
        console.log("valeur de valeur ap: " + this.valeur);
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



}
