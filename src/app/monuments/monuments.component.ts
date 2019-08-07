import { Component, OnInit } from '@angular/core';
import {MonumentsService} from 'src/app/monuments/monuments.service';
@Component({
  selector: 'app-monuments',
  templateUrl: './monuments.component.html',
  styleUrls: ['./monuments.component.css']
})
export class MonumentsComponent implements OnInit {

  constructor(private _http: MonumentsService) { }

  ngOnInit() {
    this.showMonuments()

  }
  Monuments = []
  showMonuments(){
    this._http.getMonuments()

    .subscribe(
      response => {
  
  
  
        this.Monuments = response
        console.log("RefDet" + JSON.stringify(response));
  
  
      });
  }

}
