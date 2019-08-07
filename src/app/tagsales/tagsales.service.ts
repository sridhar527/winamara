import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http'
import { Observable } from 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class TagsalesService {

  constructor(private _http:HttpClient) { }
  getSlab(billNo): Observable<any> {
    
    return this._http.get( 'http://localhost:8084/v1/sales/bill/'+billNo);

  }
  edit(param) : Observable<any>{     
    return this._http.post('http://localhost:8084/v1/sales/slab',param);
  }
}
