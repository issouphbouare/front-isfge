import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { VariableGService } from './variable-g.service';
import { Apiresponse } from '../models/apiResponse';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  base=this.variableGService.getApi()
  baseUrl=this.base+"/api/dashboard";



  constructor(private http: HttpClient, private variableGService: VariableGService
  ) { }


  getPersonnels():Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.baseUrl+"/personnels");
  }

  getEleves():Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.baseUrl+"/eleves");
  }

  getCaisses():Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.baseUrl+"/caisses");
  }

  getRetards():Observable<Apiresponse>{
    return this.http.get<Apiresponse>(this.baseUrl+"/retards");
  }


  }



