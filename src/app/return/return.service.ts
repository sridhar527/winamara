import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/Rx';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class ReturnService {
  
  constructor(private _http:HttpClient) { 

  }


  getDetails(billNo): Observable<any> {
    
      return this._http.get('http://localhost:8084/v1/return1/find/'+billNo);
    
      }


      editBill(param) : Observable<any>{     
        return this._http.post('http://localhost:8084/v1/return/create',param);
      }
      // getservicesdropdown(billNo): Observable<any> {
      //   return this._http.get('http://localhost:8084/v1/slabref/no/'+billNo);
      // }
}