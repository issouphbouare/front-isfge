import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public eleves: any;
  public personnels: any;
  public caisses: any;
  public retards: any;


constructor(private http: HttpClient,
  private apiService: DashboardService) { }


ngOnInit(): void {

  this.getEleves()
  this.getPersonnels()
  this.getCaisses()
  this.getRetards()
}




getEleves() {
  this.apiService.getEleves()
    .subscribe((data: any) => { // Utilisez un type générique 'any' pour 'data'
      this.eleves = data;
    }, err => {
      console.log(err);
    });
}
getPersonnels() {
  this.apiService.getPersonnels()
    .subscribe((data: any) => { // Utilisez un type générique 'any' pour 'data'
      this.personnels = data;
    }, err => {
      console.log(err);
    });
}
getCaisses() {
  this.apiService.getCaisses()
    .subscribe((data: any) => { // Utilisez un type générique 'any' pour 'data'
      this.caisses = data;
    }, err => {
      console.log(err);
    });
}
getRetards() {
  this.apiService.getRetards()
    .subscribe((data: any) => { // Utilisez un type générique 'any' pour 'data'
      this.retards = data;

    }, err => {
      console.log(err);
    });
}

}
