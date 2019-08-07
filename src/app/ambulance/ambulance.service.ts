import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class AmbulanceService {

  constructor(private _http:HttpClient) { }
  getId(): Observable<any> {
    return this._http.get('http://localhost:8084/v1/ambulance/create');
  }

// postCreate(param): Observable<any>{
//   console.log("Post"+JSON.stringify(param));
  
//   return this._http.post('http://localhost:8084/v1/ambulance/create', param, );

 

// }


postCreate(param) : Observable<any> {
  console.log("Post"+JSON.stringify(param));
 
  return this._http.post('http://localhost:8084/v1/ambulance/create', param);
  ;
}
}