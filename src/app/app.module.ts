import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GabaritComponent } from './components/gabarit/gabarit.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClassesComponent } from './components/classe/classes/classes.component';
import { AddClasseComponent } from './components/classe/add-classe/add-classe.component';
import { EditClasseComponent } from './components/classe/edit-classe/edit-classe.component';
import { EditEleveComponent } from './components/eleve/edit-eleve/edit-eleve.component';
import { AddEleveComponent } from './components/eleve/add-eleve/add-eleve.component';
import { ElevesComponent } from './components/eleve/eleves/eleves.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilComponent } from './components/admin/profil/profil.component';
import { PasswordComponent } from './components/admin/password/password.component';
import { UsersComponent } from './components/admin/users/users.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { EditUserComponent } from './components/admin/edit-user/edit-user.component';
import { EnseignantsComponent } from './components/enseignants/enseignants/enseignants.component';
import { EditEnseignantComponent } from './components/enseignants/edit-enseignant/edit-enseignant.component';
import { AddEnseignantComponent } from './components/enseignants/add-enseignant/add-enseignant.component';
import { AnneesComponent } from './components/anneeScolaire/annees/annees.component';
import { AddAnneeComponent } from './components/anneeScolaire/add-annee/add-annee.component';
import { EditAnneeComponent } from './components/anneeScolaire/edit-annee/edit-annee.component';
import { PaiementsComponent } from './components/finances/paiements/paiements/paiements.component';
import { AddPaiementComponent } from './components/finances/paiements/add-paiement/add-paiement.component';
import { EditPaiementComponent } from './components/finances/paiements/edit-paiement/edit-paiement.component';
import { RemunerationsComponent } from './components/finances/remunerations/remunerations/remunerations.component';
import { AddRemunerationComponent } from './components/finances/remunerations/add-remuneration/add-remuneration.component';
import { EditRemunerationComponent } from './components/finances/remunerations/edit-remuneration/edit-remuneration.component';
import { EntreesComponent } from './components/finances/entree/entrees/entrees.component';
import { AddEntreeComponent } from './components/finances/entree/add-entree/add-entree.component';
import { EditEntreeComponent } from './components/finances/entree/edit-entree/edit-entree.component';
import { DepensesComponent } from './components/finances/depense/depenses/depenses.component';
import { AddDepenseComponent } from './components/finances/depense/add-depense/add-depense.component';
import { EditDepenseComponent } from './components/finances/depense/edit-depense/edit-depense.component';
import { SeancesComponent } from './components/seances/seances.component';
import { AddSeanceComponent } from './components/add-seance/add-seance.component';
import { EditSeanceComponent } from './components/edit-seance/edit-seance.component';
import { MatieresComponent } from './components/admin/matiere/matieres/matieres.component';
import { AddMatiereComponent } from './components/admin/matiere/add-matiere/add-matiere.component';
import { EditMatiereComponent } from './components/admin/matiere/edit-matiere/edit-matiere.component';
import { SeriesComponent } from './components/admin/serie/series/series.component';
import { AddSerieComponent } from './components/admin/serie/add-serie/add-serie.component';
import { EditSerieComponent } from './components/admin/serie/edit-serie/edit-serie.component';

@NgModule({
  declarations: [
    AppComponent,
    GabaritComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    ClassesComponent,
    AddClasseComponent,
    EditClasseComponent,
    EditEleveComponent,
    AddEleveComponent,
    ElevesComponent,
    ProfilComponent,
    PasswordComponent,
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    EnseignantsComponent,
    EditEnseignantComponent,
    AddEnseignantComponent,
    AnneesComponent,
    AddAnneeComponent,
    EditAnneeComponent,
    PaiementsComponent,
    AddPaiementComponent,
    EditPaiementComponent,
    RemunerationsComponent,
    AddRemunerationComponent,
    EditRemunerationComponent,
    EntreesComponent,
    AddEntreeComponent,
    EditEntreeComponent,
    DepensesComponent,
    AddDepenseComponent,
    EditDepenseComponent,
    SeancesComponent,
    AddSeanceComponent,
    EditSeanceComponent,
    MatieresComponent,
    AddMatiereComponent,
    EditMatiereComponent,
    SeriesComponent,
    AddSerieComponent,
    EditSerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
