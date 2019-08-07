import { Component, OnInit } from '@angular/core';
import { ExistingService } from "src/app/existing/existing.service";
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-existing',
  templateUrl: './existing.component.html',
  styleUrls: ['./existing.component.css']
})
export class ExistingComponent implements OnInit {
  closeResult: string;
  PatientAll = [];
  firstName:string;
  lastName:string;
  umr:any;
  regId:any;
  regDate:any;
  city:string;
  state :string;
  regValidity:any;
  title:string;
  motherName;string;
  middleName:string;
aliasName:string;
dob:any;
gender:string;
RegisterForm:FormGroup;
maritialStatus:string;
address:string;
bloodGroup:string;
occupation:string;
nationality:string;
religion:string;
pType :string;
consultant :string;
mobile :string;
email :string;
rePatientType:string;
reConsultant:string;
  constructor(private _http:ExistingService,private modalService: NgbModal,private fb:FormBuilder,) {
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
          'appNo': [null,[Validators.required,Validators.minLength(2)]],
          'regId': [null],
          'pin': [null,Validators.pattern('^[0-9]{6}$')],
          'bloodGroup': [null,Validators.required],
          'nationality': [null,Validators.required],
          'religion': [null,Validators.required],
          'pType': [null,Validators.required],
          'source': [null,Validators.required],
          'state': [null,Validators.required],
          'refName': [null,Validators.required],
          'refAdd': [null,Validators.required],
          'refPhone': [null,Validators.required],
          'mobile': [null,Validators.required],
          'telephone': [null,Validators.required],
          'q_id':[null],
          'regFee':[null],
          'typeOfCharge':[null],
          'modeOfPayment':[null],
          'title':[null],
          'occupation':[null],
          'middleName':[null],
          'maritialStatus':[null],
          'consultant':[null],
          'email':[null,	Validators.pattern('^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$')],
       ' comun':[null],
     'umr':[null],
        })
        
      
   }

  ngOnInit() {
    this.showAllPatients();
  
  }


  open(basic,data) {
this.firstName=data.firstName;
this.lastName=data.lastName;
this.umr=data.umr;
this.title=data.title;
this.middleName=data.middleName;
this.aliasName=data.aliasName;
this.motherName=data.motherName;
this.regId=data.vPatientRegistration[0].regId;
this.regDate=data.vPatientRegistration[0].regDate;
this.regValidity=data.vPatientRegistration[0].regValidity;
this.dob=data.dob;
this.gender=data.gender;
this.maritialStatus=data.maritialStatus;
this.address=data.address;
this.city=data.city;
this.state=data.state;
this.bloodGroup=data.bloodGroup;
this.occupation=data.occupation;
this.nationality=data.nationality;
this.pType=data.vPatientRegistration[0].pType;
this.religion=data.religion;
this.consultant=data.consultant;
this.mobile=data.mobile;
this.email=data.email;
console.log(this.email)
console.log(data.consultant)
console.log(data.vPatientRegistration[0].regId)
     this.modalService.open(basic, {ariaLabelledBy: 'modal-basic-title',size:'lg'}).result.then((result) => {
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
 
  showAllPatients() {
    let paramup = {
      "filename": "Patient"
    }
    this._http.getAllPatient() 
      .subscribe(
      data => {


this.PatientAll=data;
      
        console.log(" data " + JSON.stringify(data));
    
    

      },

    );

  }

  submitForm2(value: any) {
    alert("hi")

        let param = {
        "address":this.address,
        "email":this.email,
        "mobile":+(this.mobile),
        }
          
        
         console.log(param)
    

        this._http.edit(this.umr,param)
          .subscribe(
          data => {
    console.log(this.umr)
            console.log("existing" + JSON.stringify(data));
    
          },
    
        );
        
      }    
         
         
     
      new(basic1,data) {
      
        this.umr=data.umr;
 
        this.pType=data.vPatientRegistration[0].pType;
      
        this.consultant=data.consultant;
        this.mobile=data.mobile;
        this.email=data.email;
        console.log(this.email)
        console.log(data.consultant)
        
             this.modalService.open(basic1, {ariaLabelledBy: 'modal-basic-title',size:'sm'}).result.then((result) => {
               this.closeResult = `Closed with: ${result}`;
             }, (reason) => {
               this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
             });
           }



          //  newRegister(value: any) {
          //   alert("hi")
        
          //       let param = {
               
                
                    
          //                   "rePatientType":this.pType,
          //                   "reConsultant":this.consultant,
          //         }
                
                  
                
          //        console.log(param)
            
        
          //       this._http.newRegisterForm(this.umr,param)
          //         .subscribe(
          //         data => {
          //   console.log(this.umr)
          //           console.log("existing" + JSON.stringify(data));
            
          //         },
            
          //       );
                
          //     }    
                 
            
  
}
