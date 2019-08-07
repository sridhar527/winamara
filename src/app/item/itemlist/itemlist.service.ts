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
export class ItemlistService {
  
  constructor(private _http: HttpClient) { }



  getAll() : Observable<any>{
    return this._http.get('http://localhost:8084/v1/listitem/getAll');
  }


  edit(itemId,param): Observable<any>{    

    return this._http.put('http://localhost:8084/v1/update/'+itemId,param);
}
selectedFile:File = null;


  post(itemId,files): Observable<any> {
    
  return this._http.post('http://localhost:8084/v1/uploadMultipleFiles/'+itemId,files);
 }
 getPdf(itemId): Observable<any> {
  return this._http.get('http://localhost:8084/v1/image/'+itemId);
 }
 pdf(itemId): Observable<any> {
  return this._http.get('http://localhost:8084/v1/item/pdf/'+itemId);
 }
}

