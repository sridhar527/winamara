import { Component, OnInit } from '@angular/core';
import {GraphitesService } from 'src/app/graphites/graphites.service';
@Component({
  selector: 'app-graphites',
  templateUrl: './graphites.component.html',
  styleUrls: ['./graphites.component.css']
})
export class GraphitesComponent implements OnInit {

  constructor(private _http: GraphitesService) { }

  ngOnInit() {
    this.showGraphites()
  }
Graphites=[]
showGraphites(){
  this._http.getGraphites()

  .subscribe(
    response => {



      this.Graphites = response
      console.log("RefDet" + JSON.stringify(response));


    });
}
}
