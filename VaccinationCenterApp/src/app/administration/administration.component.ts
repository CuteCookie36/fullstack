import { Component, Input } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../utilisateur.service';
import { Router } from '@angular/router';
import { VaccinationCenter } from '../vaccination-center';
import { VaccinationService } from '../vaccination.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent {
  valeur: boolean = false;
  valeur2: boolean = false;
  valeur3: boolean = false;
  valeur4: boolean = false;
  name: string = '';
  adress: string = '';
  city: string = '';
  postalCode: string = '';
  email: string = '';
  login: string = '';
  password: string = '';
  prenom: string = '';
  nom: string = '';
  roles: string = '';
  utilisateurs!: Utilisateur[];
  utilisateur: Utilisateur = new Utilisateur();
  centree: VaccinationCenter = new VaccinationCenter();
  borderColor: string = 'rgb(237, 13, 13)';
  selected?: Utilisateur;
  centers!: VaccinationCenter[];
  selectedV?: VaccinationCenter;
  center!: VaccinationCenter;
  selectedCenterId: number | null = null;
  
    
  constructor(private service: UtilisateurService, private router: Router, private service2: VaccinationService, ){}
  ngOnInit(): void {

  }

  getAllUser(){
    this.service.getAllUser().subscribe(data => {
      this.utilisateurs = data;
    });
    console.log("appui bouton");
  }

  getAllCenters(){
    this.service2.getAllVaccinationCenter().subscribe(data => {
      this.centers = data;
    });
    console.log("test all centres");
  }

  afficherCreationCentre(){
    this.valeur = true;
    this.valeur2 = false;
    this.valeur3 = false;
    this.valeur4 = false;
  }
  afficherCreationUser(){
    this.valeur2 = true;
    this.valeur = false;
    this.valeur3 = false;
    this.valeur4 = false;
  }
  affichercentres(){
    this.valeur3 = true;
    this.valeur2 = false;
    this.valeur = false;
    this.valeur4 = false;
    this.service2.getAllVaccinationCenter().subscribe(data => {
      this.centers = data;
    });
    console.log("test all centres");
  }
  afficherusers(){
    this.valeur4 = true;
    this.valeur2 = false;
    this.valeur = false;
    this.valeur3 = false;
    this.service.getAllUser().subscribe(data => {
      this.utilisateurs = data;
    });
    console.log("appui bouton");
  }

  cocheCases() {
    if (this.utilisateur.roles === '') {
      alert("Veuillez sélectionner un rôle : médecin ou administrateur.");
      return;
    }else{
      console.log("le role du user est: " + this.utilisateur.roles);
      console.log("bravo ! !");
    }
  }
  onFirstNameChange2() {
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
      console.log("role du user: " + this.utilisateur.roles);
      console.log("id du centre de vaccin: " + this.utilisateur.vaccinationCenter.id);
      this.service.addUtilisateur(this.utilisateur).subscribe(data=>{
         console.log(data)
    }); 
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
      utilisateur.prenom &&
      utilisateur.roles && utilisateur.vaccinationCenter.id
    ) {
      return true;
    } else {
      return false;
    }
  }

  
  onFirstNameChange() {
    if (this.centree.name) {
      console.log("this.centre.name = " + this.centree.name)
      // Si le champ est rempli, changez la couleur de la bordure
      this.borderColor = 'black'; 
    }
    else if (this.centree.adress) {
      // Si le champ est rempli, changez la couleur de la bordure
      this.borderColor = 'black'; 
    }
    else if (this.centree.city) {
      // Si le champ est rempli, changez la couleur de la bordure
      this.borderColor = 'black'; 
    }
    else if (this.centree.postalCode) {
      // Si le champ est rempli, changez la couleur de la bordure
      this.borderColor = 'black'; 
    }   
    else {
      // Si le champ est vide, rétablissez la couleur de la bordure par défaut (rouge)
      this.borderColor = 'rgb(237, 13, 13)';
    }
  }

  saveCenter(){
    
    if(this.isCenterValid(this.centree)){
      console.log("nom du centre : ", this.centree.name);
      console.log("adresse du centre : ",  this.centree.adress);
      console.log("ville du centre : ",  this.centree.city);
      console.log("code post centre : ",  this.centree.postalCode);
      
        this.service2.addCenter(this.centree).subscribe(data=>{
          console.log(data)
        });
      
    } else {
      console.error("L'objet de réservation n'est pas correctement initialisé.");
    }
      
  }

  isCenterValid(centre: VaccinationCenter): boolean {
    if (
      centre &&
      centre.name &&
      centre.adress &&
      centre.city &&
      centre.postalCode 
    ) {
      return true;
    } else {
      return false;
    }
  }


  selectCenter(center: VaccinationCenter){
    this.selectedV=center;
    this.selectedCenterId = center.id;
    console.log("ID du centre sélectionné : ", this.selectedCenterId);
    console.log("ID du centre : ", center.id);
    this.utilisateur.vaccinationCenter.id = this.selectedCenterId;
    console.log("ID du centre dans la réservation : ", this.utilisateur.vaccinationCenter.id);
    
  }

  searchByCity() {
    this.service2.getCenterByCity(this.city).subscribe(data => {
      this.centers = data;
    });
  }

}
