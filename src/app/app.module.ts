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
    ElevesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
