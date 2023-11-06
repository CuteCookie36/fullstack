import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  utilisateur?: Utilisateur;
  utilisateurs?: Utilisateur[];

    constructor(private loginService: LoginService, private router: Router) {}

    ngOnInit(): void {
    }

    onSubmit(): void {
      console.log("click button");
      // console.log("username1 = " + this.username);
      // console.log("password1 = " + this.password);
      this.loginService.connect(this.username, this.password).subscribe(() => {
        console.log("result auth: " + this.loginService.authHasBasic());
        console.log("user logged: " + this.loginService.isLogged());
  
        this.router.navigate(["centers"])
        
      });
      //console.log("username user: " + this.username);
      //console.log("login de notre user: " + this.loginService.getUtilisateur(this.username) );
      // this.loginService.getUtilisateurByLogin(this.username)
      //   .subscribe(utilisateur => this.utilisateur = utilisateur);
      // console.log("usernae de user: " + this.utilisateur?.login);   
    } 
      
    
    getAllUtilisateurs() {
      console.log("test456");
      this.loginService.getAllUtilisateurs().subscribe(data => {
        this.utilisateurs = data;
      });
      
    }
    


}

