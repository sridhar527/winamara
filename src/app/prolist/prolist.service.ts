import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { getPreviousOrParentNode } from '@angular/core/src/render3/instructions';
@Injectable({
  providedIn: 'root'
})
export class ProlistService {

  constructor(private _http: HttpClient) { }
 

  getProcLi(): Observable<any> {
    return this._http.get('http://localhost:8084/v1/pharmacist/procurement/getAll');

  }
 getReports(pid):Observable<any> {
  return this._http.get('http://localhost:8084/v1/pharmacist/procurement/getReport/'+pid);

}

  editApprove(param): Observable<any> {
    return this._http.put('http://localhost:8084/v1/pharmacist/procurement/approve', param);
  }
  
  edit(param): Observable<any> {
    return this._http.put(' http://localhost:8084/v1/pharmacist/procurement/update', param);
  }

}
