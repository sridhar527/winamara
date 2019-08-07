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
export class BillService {
  
  constructor(private _http:HttpClient) { }



  getData(regId): Observable<any> {
    return this._http.get('http://localhost:8084/v1/bill/create/' +regId);
  }
 

  raiseDischarge(regId,param): Observable<any> {
    return  this._http.post('http://localhost:8084/v1/bill/charge/discharge/'+regId,param);
  }
  // billPay(param) {
  //   console.log("Post"+JSON.stringify(param));
   
  //    return this._http.post('http://localhost:8084/v1/bill/charge/pay',param, {
  //        headers: this.headers
  //    })
  //     .map(res => res.json());
  //    ;
  //  } 

  billPay(regId,param): Observable<any> {
    console.log("post" +JSON.stringify(param))
    return this._http.post('http://localhost:8084/v1/bill/charge/pay/' +regId,param);
  }




  getMed(name): Observable<any> {
    
        return this._http.get( 'http://localhost:8084/v1/bill/service/getCost/'+ name);
    
      }
}
