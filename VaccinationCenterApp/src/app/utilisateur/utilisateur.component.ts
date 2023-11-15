import { Component } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent {
  email: string = '';
    login: string = '';
    password: string = '';
    prenom: string = '';
    nom: string = '';
    utilisateurs!: Utilisateur[];
    utilisateur: Utilisateur = new Utilisateur();
    borderColor: string = 'rgb(237, 13, 13)';
    selected?: Utilisateur;
    
    constructor(private service: UtilisateurService, private router: Router){}
    ngOnInit(): void {

    }

    getAllUser(){
      this.service.getAllUser().subscribe(data => {
        this.utilisateurs = data;
      });
      console.log("appui bouton");
    }

    onFirstNameChange() {
      if (this.utilisateur.login) {
        // Si le champ est rempli, changez la couleur de la bordure
        this.borderColor = 'black'; 
      }
      else if (this.utilisateur.password) {
        // Si le champ est rempli, changez la couleur de la bordure
        this.borderColor = 'black'; 
      }
      else if (this.utilisateur.email) {
        // Si le champ est rempli, changez la couleur de la bordure
        this.borderColor = 'black'; 
      }
      else if (this.utilisateur.nom) {
        // Si le champ est rempli, changez la couleur de la bordure
        this.borderColor = 'black'; 
      }  
      else if (this.utilisateur.prenom) {
        // Si le champ est rempli, changez la couleur de la bordure
        this.borderColor = 'black'; 
      }   
      else {
        // Si le champ est vide, rétablissez la couleur de la bordure par défaut (rouge)
        this.borderColor = 'rgb(237, 13, 13)';
      }
    }

    saveUtilisateur(){
      if(this.isUtilisateurValid(this.utilisateur)){
        console.log("prenom du patient : ", this.utilisateur.prenom);
        console.log("nom du patient : ", this.utilisateur.nom);
        console.log("mail du patient : ", this.utilisateur.email);
        
      this.service.addUtilisateur(this.utilisateur).subscribe(data=>{
          console.log(data)
      });
      this.router.navigate(['connexion']);
      alert('SIGNIN SUCCESFUL');
      } else {
        console.error("L'objet de l'utilisateur n'est pas correctement initialisé.");
      }
    }

    isUtilisateurValid(utilisateur: Utilisateur): boolean {
      if (
        utilisateur &&
        utilisateur.login &&
        utilisateur.password &&
        utilisateur.email &&
        utilisateur.nom &&
        utilisateur.prenom 
      ) {
        return true;
      } else {
        return false;
      }
    }


}


