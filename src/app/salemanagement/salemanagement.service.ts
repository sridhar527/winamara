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
export class SalemanagementService {
  headers = new Headers();

  constructor(private _http:HttpClient) { }

  getBill(): Observable<any> {
    
    return this._http.get( 'http://localhost:8084/v1/createsaleid', {
 
    });
    
  

  }
  getBatch(productName): Observable<any>{

    return this._http.get( 'http://localhost:8084/v1/return/findproductName/'+ productName, 
   );
   }
   getName(itemName): Observable<any>{

    return this._http.get( 'http://localhost:8084/v1/sale/finditemname/'+ itemName, 
   );
   }
    getItem(itemId): Observable<any>{

     return this._http.get( 'http://localhost:8084/v1/sale/finditemId/'+ itemId, 
    );
    }
   
    
 
  post(param) : Observable<any>{
    console.log("Post"+JSON.stringify(param));
    
    return this._http.post('http://localhost:8084/v1/sales/create', param, 
)
   ;
    ;
 }
 
}