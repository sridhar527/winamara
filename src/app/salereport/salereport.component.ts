import { Component, OnInit } from '@angular/core';
import { SalereportService } from "src/app/salereport/salereport.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import moment from 'moment/src/moment';

import { IDetails } from "src/app/salelist/salelist.model";
@Component({
  selector: 'app-salereport',
  templateUrl: './salereport.component.html',
  styleUrls: ['./salereport.component.css']
})
export class SalereportComponent implements OnInit {
  SaleForm: FormGroup;
  minDate = new Date();
  fromDate:string;
  toDate:string;
  constructor(private fb:FormBuilder,private _http: SalereportService,private modalService: NgbModal) {
    this.SaleForm = fb.group({
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
