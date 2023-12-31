import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VaccinationCenterListComponent } from './vaccination-center-list/vaccination-center-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ReservationComponent } from './reservation/reservation.component';
import { InfosPersoComponent } from './infos-perso/infos-perso.component';
import { BandeauComponent } from './bandeau/bandeau.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AdministrationComponent } from './administration/administration.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    VaccinationCenterComponent,
    VaccinationCenterListComponent,
    LoginComponent,
    UtilisateurComponent,
    ReservationComponent,
    InfosPersoComponent,
    BandeauComponent,
    DoctorComponent,
    AdministrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
