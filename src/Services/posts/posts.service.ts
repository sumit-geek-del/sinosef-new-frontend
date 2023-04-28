import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url:string = environment.url;
  constructor(private _http:HttpClient) { }

  getPosts(){
    return this._http.get<any>(`${this.url}/posts/get-posts?status=1`)
  }

  submitCareerData(careerDataDTO:any){
    return this._http.post<any>(`${this.url}/career/add-career`, careerDataDTO);
  }

  submitContactUsDetails(contactUsDTO:any){
    return this._http.post<any>(`${this.url}/contact-us/add-contact-details`, contactUsDTO);
  }
}
