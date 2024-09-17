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
    , private TokenStorageService: TokenStorageService
  ) { }


  getPersonnels():Observable<Apiresponse>{
    const headers = this.TokenStorageService.getHeaders();
    return this.http.get<Apiresponse>(this.baseUrl+"/personnels", { headers });
  }

  getEleves():Observable<Apiresponse>{
    const headers = this.TokenStorageService.getHeaders();
    return this.http.get<Apiresponse>(this.baseUrl+"/eleves", { headers });
  }

  getCaisses():Observable<Apiresponse>{
    const headers = this.TokenStorageService.getHeaders();
    return this.http.get<Apiresponse>(this.baseUrl+"/caisses", { headers });
  }

  getRetards():Observable<Apiresponse>{
    const headers = this.TokenStorageService.getHeaders();
    return this.http.get<Apiresponse>(this.baseUrl+"/retards", { headers });
  }


  }



