import { Component, OnInit } from '@angular/core';
import {MarblesService} from 'src/app/marbles/marbles.service';
@Component({
  selector: 'app-marbles',
  templateUrl: './marbles.component.html',
  styleUrls: ['./marbles.component.css']
})
export class MarblesComponent implements OnInit {

  constructor(private _http: MarblesService) { }

  ngOnInit() {
    this.showMarbles()
  }
Marbles=[]
showMarbles(){
  this._http.getMarbles()

  .subscribe(
    response => {



      this.Marbles = response
      console.log("RefDet" + JSON.stringify(response));


    });
}
}
