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
export class SalelistService {
  headers = new Headers();
  constructor(private _http:HttpClient) { }
  getAll(): Observable<any> {
    return this._http.get('http://localhost:8084/v1/getAllSalesList');
  }
 
  getAllList(billNo): Observable<any> {
    return this._http.get('http://localhost:8084/v1/saledetails/'+billNo);
  }
  pdf(billNo): Observable<any> {
    return this._http.get('http://localhost:8084/v1/sales/pdf/'+billNo);
   }
   getAllBills(billNo):Observable<any>
   {
     return this._http.get('http://localhost:8084/v1/saleslist/pdf/'+billNo)
   }
}
