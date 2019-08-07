import { Component, OnInit, ViewContainerRef} from '@angular/core';
import { FormBuilder } from "@angular/forms";
//  import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from "@angular/forms";
import { FormControl, NgModel } from "@angular/forms";
import { Validators } from "@angular/forms";
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Output, EventEmitter, AfterViewInit } from "@angular/core";
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { HttpModule } from '@angular/http';
import {Router} from '@angular/router';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { RegisterService } from "src/app/registration/register.service";
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],

})
export class RegistrationComponent implements OnInit {
  
  // date = new FormControl(new Date());
  // serializedDate = new FormControl((new Date()).toISOString());
  minDate = new Date();
pdf:any;
check:boolean=false
  Patient = [];

  occupation: string;
  date1: string;
  regFee:string;
  country: string;
  email: string;
  marketingName: string;
  firstName: string;
  lastName: string;
  aliasName: string;
  q_id :string;
  area: string;
  maritialStatus:string;
  closeResult:string;
  modeOfCommunication:string;
  city: string;
  gender: string;
  pin: any;
  dob: string;
  motherName: string;
  address: string;
  regValidity: string;
  // regDate: string;
  appNo: string;
  regId: any;
  bloodGroup: string;
  nationality: string;
  religion: string;
  pType: string;
  state: string;
  source: string;
  refName: string;
  refAdd: string;
  refPhone: any;
  mobile:any;
  telephone: any;
  typeOfCharge:any;
  modeOfPayment:any;
  title:any;
  middleName:string;
  consultant:string;
  issuedAt:string;
  passportNo:any;
  companyCode:string;
  companyName :string;
  companyFee :any;
  comun:string
  issueDate:any;
  expiryDate:any;
  tdate:any;
  fileuri:any;
  idate:any;
  bed:string
  Aamount:any;
  eamount:any;
  responsiblePersonName:string;
  resp:string;
  constructor(private fb:FormBuilder, private _http:RegisterService,private modalService: NgbModal,)
  
   {
  
    this.RegisterForm = fb.group({
  
      'firstName': [null,[Validators.required,Validators.minLength(2)]],
      'lastName': [null],
      'aliasName': [null],
      'area': [null,Validators.required],
      'city': [null,Validators.required],
      'gender': [null,Validators.required],
      'dob': [null,Validators.required],
      'motherName': [null],
      'address': [null,Validators.required],
      'regValidity': [null],
      'regDate': [null],
      'appNo': [null],
      'regId': [null],
      'pin': [null,Validators.pattern('^[0-9]{6}$')],
      'bloodGroup': [null],
      'nationality': [null,Validators.required],
      'religion': [null],
      'pType': [null,Validators.required],
      'source': [null],
      'state': [null,Validators.required],
      'refName': [null],
      'refAdd': [null,],
      'refPhone': [null,],
      'mobile': [null,Validators.required],
      'telephone': [null,],
      'responsiblePersonName':[null],
      'q_id':[null],
      'regFee':[null],
      'typeOfCharge':[null],
      'modeOfPayment':[null],
      'title':[null],
      'occupation':[null],
      'middleName':[null],
      'maritialStatus':[null],
      'consultant':[null],
      'email':[null,	Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
   ' comun':[null],
   'passportNo':[null],
   'issuedAt' :[null], 
   'issueDate':[null],
   'expiryDate':[null],
   'companyName':[null,],
   'companyFee':[null,],
   'companyCode':[null,],
'floor1':[null],
'bed':[null],
'idate':[null],
'tdate':[null],
'Aamount':[null],
'eamount':[null],
'resp':[null],
'doctorFee':[null]
    })
    
  }
  doctorFee:number
 
  public modalCloseService: NgbModalRef;
  RegisterForm: FormGroup;
  ngOnInit()
   {
  
    this.showOfPatients() ;
    this.showOfBeds() ;
   
  }

regDate= new Date() 


  save(value: any)
   {
  
    let par = {
      "source": this.source,
      "refName": this.refName,
      "refAdd": this.refAdd,
      "refPhone": this.refPhone,
      "vPatientDetails": [{
        "title":this.title,
        "firstName": this.firstName,
        "middleName":this.middleName,
        "lastName": this.lastName,
        "dob": this.dob,
        "motherName": this.motherName,
        "bloodGroup": this.bloodGroup,
        "gender": this.gender,
        "nationality": this.nationality,
        "religion": this.religion,
        "occupation":this.occupation,
        "aliasName": this.aliasName,
        "patientTypeName": this.pType,
        "marketingName": this.q_id,
        "mobile": this.mobile,
        "telephone": this.telephone,
        "email": this.email,
        "responsiblePerson":this.resp,
        "responsiblePersonName":this.responsiblePersonName,
        "maritialStatus":this.maritialStatus,
        "modeOfCommunication":this.comun,
        "address": this.address,
        "area": this.area,
        "city": this.city,
        "state": this.state,
        "country": this.country,
        "pin": this.pin,
        "consultant":this.consultant,
        "passportNo":this.passportNo,
        "issueDate":this.issueDate,
        "issuedAt":this.issuedAt,
        "expiryDate":this.expiryDate,
        "companyName":this.companyName,
        "companyCode":this.companyCode,
        "companyFee":this.companyFee,
        "vPatientRegistration": [{
          "appNo": this.appNo,
      
          "regDate": this.regDate,
          "regValidity": this.regValidity,

          "roomBookingDetails":[
            {
              "fromDate":this.tdate,
              "toDate":this.idate,
              "bedNo":this.bed,
              "advanceAmount":this.Aamount,
              "estimateAmount":this.eamount
              
              
            }],
          "patientPayment":[
            {
            
              "typeOfCharge":this.typeOfCharge,
              "amount":+(this.regFee),
              "modeOfPaymant":this.modeOfPayment,
            },

            {
            
              "typeOfCharge":"Doctor Fee",
              "amount":+(this.doctorFee),
              "modeOfPaymant":this.modeOfPayment,
            }
            ]
        
        }]
      }]

    }



console.log(this.regDate);
  console.log(this.comun)


    this._http.postCreate(par)
      .subscribe(
      data => {

    this.pdf=data
        console.log("data**" + JSON.stringify(data));
     
        // window.location.href = data.fileuri;
         window.open(data.fileuri);
       
          //  location.reload();
      
       },

    );



  }


  
  close(event) {

        this.RegisterForm.controls['firstName'].markAsUntouched();
        this.RegisterForm.controls['lastName'].markAsUntouched();
        this.RegisterForm.controls['aliasName'].markAsUntouched();
        this.RegisterForm.controls['area'].markAsUntouched();

        this.RegisterForm.controls['city'].markAsUntouched();
        this.RegisterForm.controls['gender'].markAsUntouched();
        this.RegisterForm.controls['bloodGroup'].markAsUntouched();
        this.RegisterForm.controls['address'].markAsUntouched();

        this.RegisterForm.controls['regValidity'].markAsUntouched();
        this.RegisterForm.controls['regDate'].markAsUntouched();
        this.RegisterForm.controls['appNo'].markAsUntouched();
        this.RegisterForm.controls['regId'].markAsUntouched();
        this.RegisterForm.controls['pin'].markAsUntouched();

        this.RegisterForm.controls['nationality'].markAsUntouched();
        this.RegisterForm.controls['pType'].markAsUntouched();
        this.RegisterForm.controls['state'].markAsUntouched();
        this.RegisterForm.controls['modeOfCommunication'].markAsUntouched();
        this.RegisterForm.controls['source'].markAsUntouched();
        this.RegisterForm.controls['refName'].markAsUntouched();
        this.RegisterForm.controls['refAdd'].markAsUntouched();
        this.RegisterForm.controls['mobile'].markAsUntouched();
        this.RegisterForm.controls['email'].markAsUntouched();
        this.RegisterForm.controls['refPhone'].markAsUntouched();
        this.RegisterForm.controls[' passportNo'].markAsUntouched();
        this.RegisterForm.controls['issuedAt'].markAsUntouched();
        this.RegisterForm.controls['companyName'].markAsUntouched();
        this.RegisterForm.controls['companyFee'].markAsUntouched();
        this.RegisterForm.controls['companyCode'].markAsUntouched();
        this.RegisterForm.controls['telephone'].markAsUntouched();
        this.RegisterForm.controls['comun'].markAsUntouched();
        
      }

  reset() 
  {
   
    this.RegisterForm.reset();
  }

  // print()
  //  {
  //   window.print();
  // }



  open(basic) {
   
    this.modalService.open(basic, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
      return  `with: ${reason}`;
    }

    
  }


  open1(content1) {
 
    this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  showOfPatients() {
    let paramup = {
      "filename": "Patient"
    }
    this._http.getPatient() 
      .subscribe(
      data => {

        this.Patient= data;
 console.log(this.Patient[5].umr)
      let umr=this.Patient[5].umr;
      let regid=this.Patient[4].nextRegId;
        console.log(" data " + JSON.stringify(data));
    
       console.log(umr);

      },

    );

  }


  openBed(floor) {
    
         this.modalService.open(floor, {ariaLabelledBy: 'modal-basic-title',size:"lg"}).result.then((result) => {
           this.closeResult = `Closed with: ${result}`;
         }, (reason) => {
           this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
         });
       }
       BEDS=[]
       WARDS=[]
       showOfBeds() {
        
         this._http.getBeds() 
           .subscribe(
           data => {
     
  this.BEDS=data.floors
  this.WARDS=data.wards
             console.log(" data " + JSON.stringify(data));
        
        
           },
     
         );
     
       } 


       getColor(status) { 
        switch (status) {
          case 'ALLOCATE':
            return 'green';
          case 'DISCHARGING':
            return 'blue';
          case 'OCCUPIED':
            return 'red';
        }
      }
      Colors=[];
      availColors: any[];
      floor1:string
      bedColor(n) {
        this.availColors=[];
         this._http.getRedbus(this.floor1,n) 
           .subscribe(
           data => {
     
     this.Colors=data;
     data.map(d => { 
       if(d.status == 'ALLOCATE') { 
          this.availColors.push(d);
        }
      });
             console.log(" data " + JSON.stringify(data));
    console.log(this.Colors)
        
           },
     
         );
     
       }


 printBlank()
 {
let par={
  
		"consultant":this.consultant,
		"umr":this.Patient[5].umr,
		"regId":this.regId,
	
}


this._http.postBlank(this.regId,par)
.subscribe(
data => {

  this.regId=data;
  console.log(this.regId);
  console.log("data**" + JSON.stringify(data));

 
   window.open(data.fileuri);
 location.reload()

 },

);



 }
  
}