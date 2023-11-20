export class Utilisateur {
    id: number = 0;  
    login: string = '';
    password: string = '';
    email: string = '';
    nom: string = '';
    prenom: string = '';
    roles: string = '';
    vaccinationCenter: {
      id: number;
    } = { id: 0 }; 
  }