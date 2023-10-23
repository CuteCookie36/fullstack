import { VaccinationCenter } from "./vaccination-center";

// export interface Reservation {
//     id: number;
//     firstName: string;
//     lastName: string;
//     mail: string;
//     dateRDV: string;
//     vaccinationCenter: {
//         id: number;
//     };
// }

// dateRDV!: Date;

export class Reservation {
    firstName: string = '';
    lastName: string = '';
    mail: string = '';
    dateRDV: string = '';
    vaccinationCenter: {
      id: number;
    } = { id: 0 }; 
  }
  
