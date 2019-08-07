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
export class ItemService {

  constructor(private _http: HttpClient) { }

  



  postCreate(param): Observable<any> {
   return this._http.post('http://localhost:8084/v1/itementery/create', param);
 }


 getItem(): Observable<any> {
  return this._http.get('http://localhost:8084/v1/create');
}
getAll(): Observable<any> {
  return this._http.get('http://localhost:8084/v1/getAll');
}
selectedFile:File = null;


  post(itemId,files): Observable<any> {
    
  return this._http.post('http://localhost:8084/v1/uploadMultipleFiles/'+itemId,files);
 }
}

