import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { RegisterService } from "src/app/registration/register.service";
import { ServicesService } from "src/app/services/services.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  Service =[];
  ServiceForm: FormGroup
  serviceId: string;
  serviceName: string;
  department: string;
  cost: number;
  fromDate: number;
  tillDate: number;
  patientType: string;
  inHouse: string;
  

  constructor(private fb:FormBuilder, private _http:ServicesService) { 

    this.ServiceForm= fb.group({
      'serviceName':[null, [Validators.required, Validators.minLength(3),Validators.maxLength(50),Validators.pattern('[a-zA-Z-@./#&+\w\s ]*')]],
      'department':[null,Validators.required],
      'cost':[null, Validators.pattern(/^-?(0|[0-9]\d*)?$/)],
      'fromDate':[null],
      'tillDate':[null],
      'patientType':[null,Validators.required],
      'inHouse':[null,Validators.required],
    })
  }

  ngOnInit() {
    this.showService()
    this.showId()
  }


  pTypeId:string
  save(value: any)
  {
    alert("Service Created Successfully");
    let par = {
      "serviceName":this.serviceName,
      "department":this.department,
      "cost":this.cost,
      "fromDate":this.fromDate,
      "tillDate":this.tillDate,
      "patientType":this.patientType,
      "inHouse":this.inHouse
  }
  this._http.postCreate(par)
     .subscribe(
     data => {
   
    console.log("data**" + JSON.stringify(data));
    
  
      },

   );
 
 }
 
 showService()
 {
   this._http.getService()
   .subscribe(
   response => {
     
 this.Service=response;
 console.log(this.Service);

     console.log("service" + JSON.stringify(response));
   
   },);
 }
Id=[]
 showId()
 {
   this._http.getId()
   .subscribe(
   response => {
     
 this.Id=response;
 
     console.log("service" + JSON.stringify(response));
    

   },);
 }
 reset()
 {
   this.ServiceForm.reset()
 }
 refresh() {
  location.reload();
}

 }


 

