import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableGService {
  api: string="http://localhost:8080"
  apiDist1: string="http://85.217.171.59:8080"
  apiDist: string="https://pelengana.kalanso.site"

  constructor(private http: HttpClient) { }
  getApi(){
    return this.api;
  }
}
