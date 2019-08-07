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
export class InvoicesService {

  constructor(private _http: HttpClient) { }


  edit(invoiceId,param): Observable<any>{    

    return this._http.put('http://localhost:8084/v1/updateinvoice/'+invoiceId,param);
}


}
