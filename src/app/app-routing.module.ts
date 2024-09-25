import { RemunerationsComponent } from './components/finances/remunerations/remunerations/remunerations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClassesComponent } from './components/classe/classes/classes.component';
import { AddClasseComponent } from './components/classe/add-classe/add-classe.component';
import { EditClasseComponent } from './components/classe/edit-classe/edit-classe.component';
import { ElevesComponent } from './components/eleve/eleves/eleves.component';
import { AddEleveComponent } from './components/eleve/add-eleve/add-eleve.component';
import { EditEleveComponent } from './components/eleve/edit-eleve/edit-eleve.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { EditUserComponent } from './components/admin/edit-user/edit-user.component';
import { ProfilComponent } from './components/admin/profil/profil.component';
import { PasswordComponent } from './components/admin/password/password.component';
import { UsersComponent } from './components/admin/users/users.component';
import { EnseignantsComponent } from './components/enseignants/enseignants/enseignants.component';
import { AddEnseignantComponent } from './components/enseignants/add-enseignant/add-enseignant.component';
import { EditEnseignantComponent } from './components/enseignants/edit-enseignant/edit-enseignant.component';
import { AnneesComponent } from './components/anneeScolaire/annees/annees.component';
import { AddAnneeComponent } from './components/anneeScolaire/add-annee/add-annee.component';
import { EditAnneeComponent } from './components/anneeScolaire/edit-annee/edit-annee.component';
import { EditDepenseComponent } from './components/finances/depense/edit-depense/edit-depense.component';
import { AddDepenseComponent } from './components/finances/depense/add-depense/add-depense.component';
import { DepensesComponent } from './components/finances/depense/depenses/depenses.component';
import { EditEntreeComponent } from './components/finances/entree/edit-entree/edit-entree.component';
import { AddEntreeComponent } from './components/finances/entree/add-entree/add-entree.component';
import { EntreesComponent } from './components/finances/entree/entrees/entrees.component';
import { EditRemunerationComponent } from './components/finances/remunerations/edit-remuneration/edit-remuneration.component';
import { AddRemunerationComponent } from './components/finances/remunerations/add-remuneration/add-remuneration.component';
import { EditPaiementComponent } from './components/finances/paiements/edit-paiement/edit-paiement.component';
import { AddPaiementComponent } from './components/finances/paiements/add-paiement/add-paiement.component';
import { PaiementsComponent } from './components/finances/paiements/paiements/paiements.component';
import { SeancesComponent } from './components/seances/seances.component';
import { AddSeanceComponent } from './components/add-seance/add-seance.component';
import { EditSeanceComponent } from './components/edit-seance/edit-seance.component';
import { MatieresComponent } from './components/admin/matiere/matieres/matieres.component';
import { AddMatiereComponent } from './components/admin/matiere/add-matiere/add-matiere.component';
import { EditMatiereComponent } from './components/admin/matiere/edit-matiere/edit-matiere.component';
import { SeriesComponent } from './components/admin/serie/series/series.component';
import { AddSerieComponent } from './components/admin/serie/add-serie/add-serie.component';
import { EditSerieComponent } from './components/admin/serie/edit-serie/edit-serie.component';

const routes: Routes = [
  {path : "" , component : DashboardComponent },
 {path : "login" , component : LoginComponent },
 {path :"addUser" , component : AddUserComponent},
 {path :"editUser/:id" , component : EditUserComponent},
 {path :"profil/:id" , component : ProfilComponent},
 {path :"password/:id" , component : PasswordComponent},
 {path :"users" , component : UsersComponent},



 {path : "dashboard" , component : DashboardComponent },
 {path : "classes" , component : ClassesComponent },
 {path : "addClasse" , component : AddClasseComponent },
 {path : "editClasse/:id" , component : EditClasseComponent },
 {path : "eleves" , component : ElevesComponent },
 {path : "addEleve" , component : AddEleveComponent },
 {path : "editEleve/:id" , component : EditEleveComponent },
 {path : "annees" , component : AnneesComponent },
 {path : "addAnnee" , component : AddAnneeComponent },
 {path : "editAnnee/:id" , component : EditAnneeComponent },
 {path : "matieres" , component : MatieresComponent },
 {path : "addMatiere" , component : AddMatiereComponent },
 {path : "editMatiere/:id" , component : EditMatiereComponent },
 {path : "series" , component : SeriesComponent },
 {path : "addSerie" , component : AddSerieComponent },
 {path : "editSerie/:id" , component : EditSerieComponent },
 {path : "enseignants" , component : EnseignantsComponent },
 {path : "addEnseignant" , component : AddEnseignantComponent },
 {path : "editEnseignant/:id" , component : EditEnseignantComponent },
 {path : "paiements" , component : PaiementsComponent },
 {path : "addPaiement/:id" , component : AddPaiementComponent },
 {path : "editPaiement/:id" , component : EditPaiementComponent },
 {path : "remunerations" , component : RemunerationsComponent },
 {path : "addRemuneration/:id" , component : AddRemunerationComponent },
 {path : "editRemuneration/:id" , component : EditRemunerationComponent },
 {path : "entrees" , component : EntreesComponent },
 {path : "addEntree" , component : AddEntreeComponent },
 {path : "editEntree/:id" , component : EditEntreeComponent },
 {path : "depenses" , component : DepensesComponent },
 {path : "addDepense" , component : AddDepenseComponent },
 {path : "editDepense/:id" , component : EditDepenseComponent },
 {path : "seances" , component : SeancesComponent },
 {path : "addSeance/:id" , component : AddSeanceComponent },
 {path : "editSeance/:id" , component : EditSeanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
