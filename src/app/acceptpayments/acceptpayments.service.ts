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
export class AcceptpaymentsService {

  constructor(private _http: HttpClient) { }
  getAll() : Observable<any>{
    return this._http.get('http://localhost:8084/v1/sale/creditnotelist');
  }
  edit(billNo,param) : Observable<any>{
    console.log("Post"+JSON.stringify(param));
    return this._http.post('http://localhost:8084/v1/duepay/'+billNo,param);
}
getAllBills(billNo):Observable<any>
{
  return this._http.get('http://localhost:8084/v1/saleslist/pdf/'+billNo)
}
}

