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

const routes: Routes = [
  {path : "" , component : LoginComponent },
 {path : "login" , component : LoginComponent },
 {path : "dashboard" , component : DashboardComponent },
 {path : "classes" , component : ClassesComponent },
 {path : "addClasse" , component : AddClasseComponent },
 {path : "editClasse/:id" , component : EditClasseComponent },
 {path : "eleves" , component : ElevesComponent },
 {path : "addEleve" , component : AddEleveComponent },
 {path : "editEleve/:id" , component : EditEleveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
