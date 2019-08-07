import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  credentials: string = localStorage.getItem('currentUser');
  token: any ;
  constructor(private _http:HttpClient) { 
    if(this.credentials){
    this.token = JSON.parse(this.credentials).token;

  }

   }

  postCreate(param): Observable<any> {

    console.log("Post"+JSON.stringify(param));
    
    return this._http.post('http://localhost:8084/v1/patient/create', param);
    ;
 }



 getPatient() : Observable<any> {
 
  return this._http.get('http://localhost:8084/v1/patient/create');
}

postBlank(regId,param): Observable<any> {
  
      console.log("Post"+JSON.stringify(param));
      
      return this._http.post('http://localhost:8084/v1/patient/blank/',+regId ,param);
      
   }




getBeds(): Observable<any> {
  return this._http.get('http://localhost:8084/v1/bed/floors/ward');
}

getRedbus(floor,ward): Observable<any> {
  return this._http.get('http://localhost:8084/v1/bed/room/'+floor+'/'+ward);
}


}