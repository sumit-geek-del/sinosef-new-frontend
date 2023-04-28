import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  url:string = environment.url;
  constructor(private _http:HttpClient) { }

  viewHomePageData(){
    return this._http.get<any>(`${this.url}/view/home`);
  }

  viewCompanyData(screenName:string){
    return this._http.get<any>(`${this.url}/view/company?screenName=${screenName}`);
  }

  viewProjectsData(projectType:string){
    return this._http.get<any>(`${this.url}/view/projects?projectType=${projectType}`);
  }

  viewClientsData(screenName:string){
    return this._http.get<any>(`${this.url}/view/clients?screenName=${screenName}`);
  }

  getCertificatesData(){
    return this._http.get<any>(`${this.url}/view/certificates`);
  }
}
