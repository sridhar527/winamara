import { Component, OnInit } from '@angular/core';
import { DashboardService } from "src/app/dashboard/dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _http:DashboardService) { }

  ngOnInit() {
    this.showData()
  }

  Graphitesbalance:string;
  QuartzBalance:string;
  Marblesbalance:string;
  Monumentsbalance:string;
  showData()
  {
    this._http.getData()
    .subscribe(
    response => {
      

 
      console.log("dashboard" + JSON.stringify(response));
     this.Graphitesbalance=response[0].Graphitesbalance
     this.QuartzBalance=response[0].QuartzBalance
     this.Marblesbalance=response[0].Marblesbalance
     this.Monumentsbalance=response[0].Monumentsbalance
    
    },);
  }
}
