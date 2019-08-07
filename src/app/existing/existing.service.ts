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
export class ExistingService {
  
  constructor(private _http:HttpClient) {


   }

   getAllPatient(): Observable<any> {
    return this._http.get('http://localhost:8084/v1/patient/getAll');
  }

        
  edit(umr,param): Observable<any>{    

    return this._http.put('http://localhost:8084/v1/patient/updateAll/'+umr,param);
}



newRegisterForm(umr,param): Observable<any> {
  
   
   return this._http.post('http://localhost:8084/v1/registration/patient/'+umr, param);
 } 



getBeds() :Observable<any> {
  return this._http.get('http://localhost:8084/v1/bed/floors/ward',);
      
}

getRedbus(floor,ward):Observable<any> {
  return this._http.get('http://localhost:8084/v1/bed/room/'+floor+'/'+ward);
    
}

postBlank(param): Observable<any> {
  
      console.log("Post"+JSON.stringify(param));
      
      return this._http.post('http://localhost:8084/v1/patient/blank', param);
      ;
   }


}