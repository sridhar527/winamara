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
export class InvoiceService {
  
  constructor(private _http: HttpClient) { }


  getInvoice(): Observable<any> {
    return this._http.get('http://localhost:8084/v1/create/invoiceid');
  }

post(param) : Observable<any>{
  console.log("Post"+JSON.stringify(param));
  
  return this._http.post('http://localhost:8084/v1/invoice/create', param, 
)
 ;
  ;
}
}
