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
export class DlistService {

  constructor(private _http: HttpClient) { }
  getAll() : Observable<any>{
    return this._http.get('http://localhost:8084/v1/getAllorderList');
  }
  pdf(deliveryNo): Observable<any> {
    return this._http.get('http://localhost:8084/v1/order/pdf/'+deliveryNo);
   }
}
