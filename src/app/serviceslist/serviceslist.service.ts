import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { HttpClientModule } from '@angular/common/http';
 import 'rxjs/add/operator/map';
 import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class ServiceslistService {

  constructor(private _http:HttpClient) { }



  getServices(): Observable<any> {
    return this._http.get('http://localhost:8084/v1/service/getservices',)
        
  }
  edit(serviceId,param) : Observable<any>{    

    return this._http.put('http://localhost:8084/v1/service/update/'+serviceId,param,
     )
      
}






}