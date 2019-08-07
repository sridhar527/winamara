import { Component, OnInit } from '@angular/core';
import {WeeklyreportService } from 'src/app/weeklyreport/weeklyreport.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import moment from 'moment/src/moment';
@Component({
  selector: 'app-weeklyreport',
  templateUrl: './weeklyreport.component.html',
  styleUrls: ['./weeklyreport.component.css']
})
export class WeeklyreportComponent implements OnInit {
  WeekForm: FormGroup;
  minDate = new Date();
  fromDate:string;
  toDate:string;
  constructor(private fb:FormBuilder,private _http: WeeklyreportService,private modalService: NgbModal) { 
    this.WeekForm = fb.group({
      'fromDate' : [null],
      'toDate' : [null],
   })
  }

  ngOnInit() {
  }
  save(value: any)
  {
 
   let par = {
    
      "fromDate": moment(this.fromDate).format('YYYY-MM-DD'),
     "toDate": moment(this.toDate).format('YYYY-MM-DD'),
    }
    
    this._http.post(par)
    .subscribe(
    data => {
  
   console.log("data**" + JSON.stringify(data));
  
  window.open(data.fileuri);
   
   location.reload();
 
     },
 
  );
 
 
 
     
      
     
   }
 


}
