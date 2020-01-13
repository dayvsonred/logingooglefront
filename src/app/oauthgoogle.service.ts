import { Injectable } from '@angular/core'; 
import { HttpClient, HttpResponse } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OauthGoogleService {

  

  constructor(private http: HttpClient) { }


  public getUrl (){
    return this.http.get('http://localhost:4000/api/url');
  }


  
  public getUrl2 (){
    return this.http.get('http://localhost:4000/api/projects');
  }


  

}
