import { VaccinationCenter } from "./vaccination-center";

export interface Reservation {
    id: number;
    firstName: string;
    lastName: string;
    mail: string;
    date: Date;
}