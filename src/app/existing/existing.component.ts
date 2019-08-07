import { Component, OnInit } from '@angular/core';
import { ExistingService } from "src/app/existing/existing.service";
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { Router } from "@angular/router";
@Component({
  selector: 'app-existing',
  templateUrl: './existing.component.html',
  styleUrls: ['./existing.component.css']
})
export class ExistingComponent implements OnInit {
  key: string ;
  reverse: boolean = false;
  sortDate(key) {
    this.key = key;
    this.reverse = !this.reverse;
}
  a: boolean = false;
  tdate: string;
  closeResult: string;

  regFee: any;
  amount: any;
  modeOfPayment: any;
  typeOfCharge: any;
  PatientAll = [];
  firstName: string;
  lastName: string;
  umr: any;
  regId: any;
  regDate: any;
  city: string;
  state: string;
  regValidity: any;
  title: string;
  motherName; string;
  middleName: string;
  aliasName: string;
  dob: any;
  companyCode:string
     companyFee:number
  gender: string;
  RegisterForm: FormGroup;
  maritialStatus: string;
  address: string;
  bloodGroup: string;
  occupation: string;
  nationality: string;
  religion: string;
  pType: string;
  consultant: string;
  mobile: string;
  email: string;
  rePatientType: string;
  reConsultant: string;
  constructor(private _http: ExistingService, private modalService: NgbModal, private fb: FormBuilder, private toastr: ToastrService, private router: Router) {
    this.RegisterForm = fb.group({

      'firstName': [null],
      'lastName': [null],
      'aliasName': [null],
      'area': [null, Validators.required],
      'city': [null, Validators.required],
      'gender': [null, Validators.required],
      'dob': [null, Validators.required],
      'motherName': [null],
      'address': [null, Validators.required],
      'regValidity': [null],
      'regDate': [null],
      'appNo': [null, [Validators.required, Validators.minLength(2)]],
      'regId': [null],
      'pin': [null, Validators.pattern('^[0-9]{6}$')],
      'bloodGroup': [null, Validators.required],
      'nationality': [null, Validators.required],
      'religion': [null, Validators.required],
      'pType': [null, Validators.required],
      'source': [null, Validators.required],
      'state': [null, Validators.required],
      'refName': [null, Validators.required],
      'refAdd': [null, Validators.required],
      'refPhone': [null, Validators.required],
      'mobile': [null, Validators.required],
      'telephone': [null, Validators.required],
      'q_id': [null],
      'regFee': [null, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      'typeOfCharge': [null],
      'modeOfPayment': [null],
      'title': [null],
      'occupation': [null],
      'middleName': [null],
      'maritialStatus': [null],
      'consultant': [null],
      'email': [null, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
      ' comun': [null],
      'umr': [null],
      'floor1':[null],
      'bed':[null],
      'idate':[null],
      'Aamount':[null],
      'eamount':[null],
      'tdate':[null],
     
    })


  }
bed:string
  Aamount:string
  eamount:string
  idate:string
  companyName:string
  ngOnInit() {
    this.showAllPatients();
    this.showOfBeds() 
  }



  open1(content1) {

    this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open(basic, data) {

    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.umr = data.umr;
    this.marketingName=data.marketingName
    this.companyCode=data.companyCode
    this.companyFee=data.companyFee
    this.companyName=data.companyName
    this.passportNo=data.passportNo
    this.issueDate=data.issueDate
    this.issuedAt=data.issuedAt
    this.responsiblePerson=data.responsiblePerson
    this.responsiblePersonName=data.responsiblePersonName
    this.area=data.area;
    this.pin=data.pin
    this.telephone=data.telephone
    this.expiryDate=data.expiryDate
    this.country=data.country
    this.modeOfCommunication=data.modeOfCommunication
    this.title = data.title;
    this.middleName = data.middleName;
    this.aliasName = data.aliasName;
    this.motherName = data.motherName;
    this.regId = data.vPatientRegistration[0].regId;
    this.regDate = data.vPatientRegistration[0].regDate;
    this.regValidity = data.vPatientRegistration[0].regValidity;
    this.dob = data.dob
    this.gender = data.gender;
    this.maritialStatus = data.maritialStatus;
    this.address = data.address;
    this.city = data.city;
    this.state = data.state;
    this.bloodGroup = data.bloodGroup;
    this.occupation = data.occupation;
    this.nationality = data.nationality;
    this.pType = data.vPatientRegistration[0].pType;
    this.religion = data.religion;
    this.consultant = data.consultant;
    this.mobile = data.mobile;
    this.email = data.email;
    console.log(this.email)
    console.log(data.consultant)
    console.log(data.vPatientRegistration[0].regId)
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
  Patient2 = []
  showAllPatients() {
    let paramup = {
      "filename": "Patient"
    }
    this._http.getAllPatient()
      .subscribe(
      data => {


        this.PatientAll = data[1];
        this.Patient2 = data[0]
        console.log(" data " + JSON.stringify(data));


      },

    );

  }
  responsiblePersonName:string
  responsiblePerson:string
  marketingName:string
  telephone:number
  modeOfCommunication:string
  area:string
  country:string
  pin:number
  passportNo:string
  issueDate:any
  issuedAt:any
  expiryDate:any
  submitForm2(value: any) {


    // let param = {
    //   "address": this.address,
    //   "email": this.email,
    //   "mobile": +(this.mobile),

    // }
  
let param={
  
    "title":this.title,
    "firstName":this.firstName,
    "middleName":this.middleName,
    "lastName":this.lastName,
    "dob":this.dob,
    "motherName":this.motherName,
    "bloodGroup":this.bloodGroup,
    "gender":this.gender,
    "nationality":this.nationality,
    "religion":this.religion,
    "occupation":this.occupation,
    "aliasName":this.aliasName,
    "patientTypeName":this.pType,
    "marketingName":this.marketingName,
    "mobile":this.mobile,
    "telephone":this.telephone,
    "email":this.email,
    "modeOfCommunication":this.modeOfCommunication,
    "address":this.address,
    "area":this.area,
    "city":this.city,
    "state":this.state,
    "country":this.country,
    "responsiblePerson":this.responsiblePerson,
    "responsiblePersonName":this.responsiblePersonName,
    "pin":this.pin,
    "consultant":this.consultant,
    "passportNo":this.passportNo,
    "issueDate":this.issueDate,
    "issuedAt":this.issuedAt,
    "expiryDate":this.expiryDate,
     "companyName":this.companyName,
     "companyCode":this.companyCode,
     "companyFee":this.companyFee
  
  
  


}

    console.log(param)


    this._http.edit(this.umr, param)
      .subscribe(
      data => {
        console.log(this.umr)
        console.log("existing" + JSON.stringify(data));

      },

    );

    location.reload()
    this.toastr.success("data updated")
    this.router.navigate(['/existing'])
  }



  new(basic1, data) {

    this.regId = data.vPatientRegistration[0].regId;

    this.pType = data.vPatientRegistration[0].pType;

    this.consultant = data.consultant;
    this.mobile = data.mobile;
    this.email = data.email;
    console.log(this.email)
    console.log(data.consultant)

    this.modalService.open(basic1, { ariaLabelledBy: 'modal-basic-title', size: 'sm' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }



  newRegister(value: any) {
 

    let param = {



      "rePatientType": this.pType,
      "reConsultant": this.consultant,
      "roomBookingDetails":[
        {
          "fromDate":this.idate,
          "toDate":this.tdate,
          "bedNo":this.bed,
          "advanceAmount":this.Aamount,
          "estimateAmount":this.eamount
          
          
        }],

      "patientPayment": [

        {
          "amount": +(this.regFee),
          "typeOfCharge": this.typeOfCharge,
          "modeOfPaymant": this.modeOfPayment,


        }
      ]
    }



    console.log(param)

    console.log(this.umr)
    this._http.newRegisterForm(this.umr, param)
      .subscribe(
      data => {

        console.log("data" + JSON.stringify(data));

        window.open(data.fileuri);
        // location.reload()
        // location.reload();

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
       BEDS:any=[]
       WARDS:any=[]
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
      Colors:any=[]
      floor1:string
      availColors: any[];
      bedColor(n) {
        this.availColors=[];
         this._http.getRedbus(this.floor1,n) 
           .subscribe(
           data => {
            data.map(d => { 
              if(d.status == 'ALLOCATE') { 
                 this.availColors.push(d);
               }
             });
     this.Colors=data
             console.log(" data " + JSON.stringify(data));
    console.log(this.Colors)
        
           },
     
         );
     
       }



       printBlank()
       {
      let par={
        
          "consultant":this.consultant,
          "umr":this.umr
          
        
      }
      
      
      this._http.postBlank(par)
      .subscribe(
      data => {
      
      
        console.log("data**" + JSON.stringify(data));
      
       
         window.open(data.fileuri);
   location.reload()
      
       },
      
      );
      
      
      
    
}
}
