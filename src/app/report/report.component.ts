import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';
import { FormGroup, Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms"; 

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  fromDate: any;
  toDate: any;
  soldBy: any;
  reportName: any;

  constructor(private _http:ReportService,private fb:FormBuilder) { }

  ngOnInit() {
    this.showData()
  }

reports=[]
  showData()
  {
    this._http.getData()
    .subscribe(
    response => {
      
 this.reports=response
 
      console.log("reports" + JSON.stringify(response));
     
    },);
  }
  show(value:any)
  {
  let par = {
    "fromDate":this.fromDate,
    "toDate":this.toDate,
    "soldBy":this.soldBy,
    "reportName":this.reportName,
   
}

this._http.postCreate(par)
   .subscribe(
   data => {
//  this.ambulanceNO = data.ambulanceNO;
  console.log("data**" + JSON.stringify(data));
  

    },

 );

  }
}