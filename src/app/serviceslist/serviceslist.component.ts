import { Component, OnInit } from '@angular/core';
import { ServiceslistService } from "src/app/serviceslist/serviceslist.service";
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-serviceslist',
  templateUrl: './serviceslist.component.html',
  styleUrls: ['./serviceslist.component.css']
})
export class ServiceslistComponent implements OnInit {

List=[]

  closeResult: string;
  serviceName: string;
  department:string;
  cost:number;
  fromDate:number;
  tillDate:number;
  patientType:string;
  inHouse:string;
  ServiceForm: FormGroup;
  dataSource: MatTableDataSource<ServiceslistComponent>;
  serviceId: any;
  constructor(private _http:ServiceslistService,private modalService: NgbModal,private fb: FormBuilder,private toastr: ToastrService, private router: Router) { 
    this.ServiceForm = fb.group({
      'serviceId':[null],
      'serviceName': [null],
      'department': [null],
      'fromDate': [null],
      'tillDate': [null],
      'inHouse': [null],
      'patientType': [null],
      'cost': [null],
     
  
  });
}

  ngOnInit() {
    this.showService()
  }
  

  open(basic,data) {
    this.serviceId=data.serviceId,
    this.serviceName=data.serviceName,
    this.department=data.department,
    this.cost=data.cost,
    this.fromDate=data.fromDate,
    this.tillDate=data.tillDate,
    this.patientType=data.patientType,
    this.inHouse=data.inHouse,
    this.modalService.open(basic, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }


  }
  p: number = 1;

  showService()
  {
    this._http.getServices()
    .subscribe(
    response => {
      
  this.List=response;
  
 
      console.log("List" + JSON.stringify(response));
    
    },);
  }
  
  save(value:any){
    
    let param = {
      "cost":this.cost,
      "fromDate": this.fromDate,
      "tillDate": this.tillDate,

    }


    console.log(param)


    this._http.edit(this.serviceId, param)
      .subscribe(
      data => {
        console.log(this.serviceId)
        console.log("serviceslist" + JSON.stringify(data));

      },

    );

     location.reload()
     this.toastr.success("data updated")
    this.router.navigate(['/serviceslist'])








  }
  reset()
 {
   this.ServiceForm.reset()
 
  }
  refresh() {
    location.reload();
  }


  now: Date=new Date();

  minDate :NgbDateStruct = { year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate() };
  maxDate :NgbDateStruct={year: this.now.getFullYear()+1, month: this.now.getMonth()+1, day: this.now.getDate()}
}