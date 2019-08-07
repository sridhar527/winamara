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
export class PatientlistService {

  headers = new Headers();
  constructor(private _http:HttpClient) { 

  }
  getInpatient():Observable<any> {
    return this._http.get('http://localhost:8084/v1/patient/patientDetails',);
 
  }

  getAllBills(regId):Observable<any>
  {
    return this._http.get('http://localhost:8084/v1/patient/pdf/'+regId)
  }

  postCreate(umr,param):Observable<any>{
    console.log("Post"+JSON.stringify(param));
    
    return this._http.post('http://localhost:8084/v1/patient/advanceAmount/'+umr, param, );
  
   
  
 }

 getservices(regId):Observable<any> {
  return this._http.get('http://localhost:8084/v1/patient/patientlab/'+regId,);

}
 
}
