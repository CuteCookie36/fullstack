
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Utilisateur } from '../utilisateur';
import { VaccinationCenter } from '../vaccination-center';


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
  selected?: Utilisateur;
  role: string = "";
  id: Number | null = null;
  

    constructor(private loginService: LoginService, private router: Router) {}

    ngOnInit(): void {
    }

    onSubmit(): void {
      //console.log("click button");
      // console.log("username1 = " + this.username);
      // console.log("password1 = " + this.password);
      this.loginService.connect(this.username, this.password).subscribe(() => {
        //console.log("result auth: " + this.loginService.authHasBasic());
        //console.log("user logged: " + this.loginService.isLogged());
        //this.router.navigate(["centers"])
      this.role = this.loginService.getCurrentUserRole();
      this.id = this.loginService.getCurrentVaccinationCenterID();
      
      console.log("l'id juste après la connexion " + this.id);
      //console.log("role: " + this.role);
      if(this.role == "admin"){
        this.router.navigate(["administration"]);
      }else{
        this.router.navigate(["doctor"]);
      }

      });

    } 
      
    
    getAllUtilisateurs() {
      console.log("test456");
      this.loginService.getAllUtilisateurs().subscribe(data => {
        this.utilisateurs = data;
      });
      
    }
    


  
}

