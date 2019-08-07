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
export class PaymentvocherlistService {
  constructor(private _http:HttpClient) { }
  getId(): Observable<any> {
    return this._http.get('http://localhost:8084/v1/voucher/create');
  }
  getAll(): Observable<any> {
    return this._http.get('http://localhost:8084/v1/voucher/getAll');
   }

   edit(paymentNo,param): Observable<any>{    
    return this._http.put('http://localhost:8084/v1/updatevoucher/'+paymentNo,param);
}
getPdf(paymentNo): Observable<any> {
  return this._http.get('http://localhost:8084/v1/pdf/'+paymentNo);
 }
}
