import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { VariableGService } from './variable-g.service';
import { Apiresponse } from '../models/apiResponse';
@Injectable({
  providedIn: 'root'
})
export class AnneeService {
  base=this.variableGService.getApi()
  baseUrl=this.base+"/api/anneescolaires";



  constructor(private http: HttpClient, private variableGService: VariableGService
    , private TokenStorageService: TokenStorageService
  ) { }

  search(keyword: string, page: number, size: number, sort: string,direction: string): Observable<Apiresponse> {
    const headers = this.TokenStorageService.getHeaders();
    return this.http.get<Apiresponse>(this.baseUrl + "/search?keyword=" + keyword +"&page="+page+"&size=" + size
      +"&sortBy="+sort+"&sortDirection="+direction , { headers }
    );
  }

  getById(url:any):Observable<any>{
    const headers = this.TokenStorageService.getHeaders();
    return this.http.get<Apiresponse>(this.baseUrl+"/"+url ,{ headers });
  }


  Create(m : any):Observable<Apiresponse>{
    const headers = this.TokenStorageService.getHeaders();
    return this.http.post<Apiresponse>(this.baseUrl , m,{ headers });
  }

  Update(url:any, m : any):Observable<Apiresponse>{
    const headers = this.TokenStorageService.getHeaders();
    return this.http.put<Apiresponse>(this.baseUrl+"/"+url, m, { headers });
  }

  delete(url: any){
    const headers = this.TokenStorageService.getHeaders();
    return this.http.delete<Apiresponse>(this.baseUrl+"/"+url, { headers });
  }

  getAll():Observable<Apiresponse>{
    const headers = this.TokenStorageService.getHeaders();
    return this.http.get<Apiresponse>(this.baseUrl, { headers });
  }

  getAnneeCur():Observable<Apiresponse>{
    const headers = this.TokenStorageService.getHeaders();
    return this.http.get<Apiresponse>(this.baseUrl+"/courant", { headers });
  }

  }



