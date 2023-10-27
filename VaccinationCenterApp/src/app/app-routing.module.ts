import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccinationCenterListComponent } from './vaccination-center-list/vaccination-center-list.component';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { InfosPersoComponent } from './infos-perso/infos-perso.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';


const routes: Routes = [
  {path: "centers",             component: VaccinationCenterListComponent},
  {path: "centers/detail/:id",  component: VaccinationCenterComponent},
  {path: "connexion",           component: LoginComponent},
  {path: "reservation",         component: ReservationComponent},
  {path: "infos_perso",         component: InfosPersoComponent},
  {path: "new_user",            component: UtilisateurComponent},
  {path: '', redirectTo: '/centers', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {   
}
