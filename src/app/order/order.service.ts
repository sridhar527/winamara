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
export class OrderService {
  headers = new Headers();

  constructor(private _http:HttpClient) { }

  getDetails(billNo): Observable<any> {
    
    return this._http.get('http://localhost:8084/v1/delivery/find/'+billNo);
  
    }
  getOrder(): Observable<any> {
    
    return this._http.get( 'http://localhost:8084/v1/order/create', {
 
    });
 }
//  getservicesdropdown(billNo): Observable<any> {
//   return this._http.get('http://localhost:8084/v1/deliveryslabref/no/'+billNo);
// }


 post(param) : Observable<any>{
  console.log("Post"+JSON.stringify(param));
  
  return this._http.post('http://localhost:8084/v1/create ', param, 
)
 ;
  ;
}

}
