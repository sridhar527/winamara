import { Component, OnInit } from '@angular/core';
import { PatientlistService } from "src/app/patientlist/patientlist.service";
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {
  closeResult: string;
  PatientForm: FormGroup;

  advance:number
  mode:any
// fileuri:any
  
  constructor(private _http: PatientlistService,private modalService: NgbModal,private fb: FormBuilder) {



    this.PatientForm = fb.group({
      
            'advance': [null,],
       'mode':[null]
          
           
          })
      
      
  }

  p: number = 1;
umr:string
  open(basic1,data) {
    this.umr=data.umr
     this.modalService.open(basic1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
       this.closeResult = `Closed with: ${result}`;
     }, (reason) => {
       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
     });
   }
 
  
   showReports(basic2) {
 
   
     this.modalService.open(basic2, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
 
Plist:any=[]
  ngOnInit() {
    this.showInPatients()
  }
  showInPatients() {
   
    this._http.getInpatient()
      .subscribe(
      data => {
this.Plist=data
        console.log(" inpatient list " + JSON.stringify(data));


      },

    );

  }


       

fileuri:any

  save(value: any)
  {
 
   let par = {
    "advance":this.advance,
		"mode":this.mode
		
   }


 

   this._http.postCreate(this.umr,par)
     .subscribe(
     data => {

   
       console.log("data**" + JSON.stringify(data));
       
    
         window.open(data.fileuri);
      
          location.reload();
     
      },

   );
  
 
   }
   

 
  
   showNotes(data)
   {
    
     this._http.getservices(data.regId)
     .subscribe(
     response => {
     
    
       window.open(response.fileuri);
     },);
   }


Bills=[]

   getBills(data)
   {
    this._http.getAllBills(data.regId)
    .subscribe(
    response => {
    this.Bills=response;

    
    console.log(this.Bills)
console.log(response)
    },);
   }
}
