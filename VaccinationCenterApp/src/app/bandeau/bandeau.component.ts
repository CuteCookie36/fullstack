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

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginService.isLogged().subscribe(value => {
      console.log("valeur: " + value);
      
      if (value) {
        this.username = this.loginService.getCurrentUsername()
        console.log("username user: " + this.username)
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
  }

  testUsername(){
    console.log("username test: " + this.username);
  }



}
