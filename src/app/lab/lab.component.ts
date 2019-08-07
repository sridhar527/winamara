import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { LabService } from "src/app/lab/lab.service";
import { FormBuilder } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr'
import { Service, Nikhil, } from "./lab.model";
import { Patient } from "./lab.model";


@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit { 
 
  closeResult: string;
  Register:Service[] = [];
  hello: Nikhil;
    constructor(private _http: LabService,private modalService: NgbModal,private toastr: ToastrService) {
    
          
          this.hello = new Nikhil();
        }
  
   
Lab=[];
serviceName:string
serviceId:string
discount:number
  ngOnInit() {
   
    this.showLabServices()
   
  }



showLabServices()
{
  this._http.getServices()
  .subscribe(
  response => {
  
this.Lab=response
console.log(this.Lab)
    console.log("services" + JSON.stringify(response));

  },);
}

addMore(event) { 
  this.Register.push(new Service());      
}


Price=[]

regid:string
paymentType:string
Cost=[];
show(ser)
{
  this.Lab.map(lab => { 
  this.Register.map(ser => {
  
    if(lab.serviceName == ser.serviceName) { 
      lab['disabled'] = true;
    } else { 
      lab['disabled'] = false;
    }
    });
  });
  this._http.getCost(ser.serviceName,this.hello.regid)
  .subscribe(
    response=>{
ser.price= +(response.cost)
  },);
}
patient: Patient = new Patient();
save(value:any,)
{

  let param=
  {
    
   
	 "reg_id":this.hello.regid,
   "invoiceNo":this.Lab[2].invoice,
   "paymentType":this.paymentType,
   "refLaboratoryRegistrations":

this.Register
}

  

  this._http.postCreate(param)
  .subscribe(
  data => {

    console.log("data**" + JSON.stringify(data));
    window.open(data.fileuri);
    
       location.reload(); 

   } );

  }
  type:string
invoice:string
cost:any
 
   private getDismissReason(reason: any): string {
   
     if (reason === ModalDismissReasons.ESC) {
       return 'by pressing ESC';
     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
       return 'by clicking on a backdrop';
     } else {
       return  `with: ${reason}`;
     }
 
     
   }
 

  //  showPdf(regid,invoice)
  //  {
  //    alert(this.invoice)
  //    this._http.getInvoice(this.regid,this.invoice)
  //    .subscribe(
  //   data => {
  //     window.open(data.fileuri);
      
  //        location.reload();
  //      console.log("data" + JSON.stringify(data));
    
  //    },
 
     
  //   );
  
    
  //  }
   Medicine=[]
// hai(i)
// {
//    this.Medicine.push( { "serviceName":this.serviceName,
//    "discount":+(this.Lab[i].discount),
//    })

//    console.log(this.Medicine)
//   }



 
  removeSaleItem(index) { 
    let reg = this.Register[index];
    this.Lab.map(lab => { 
      if(lab.serviceName == reg.serviceName) { 
        lab['disabled'] = false;
      }
    });
    this.Register.splice(index, 1);    
  }

  findPatient(event) { 
    this._http.getPatient(this.hello.regid).subscribe( user => { 
      this.patient.name = user.name;
      this.patient.type = user.type;
      this.Register[0] = new Service();
    }, error => { 

    });
  }


  calcAmount(ser) { 
    ser.total = ser.price-ser.price*(ser.discount || 0)/100;
    
  }


private total = 0;
  open1(basic) {
    this.total = 0;
    this.Register = this.Register.filter(sale => Object.keys(sale).length !== 0);
    this.Register.map(reg => this.total = this.total + reg.total);

     this.modalService.open(basic, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
       this.closeResult = `Closed with: ${result}`;
     }, (reason) => {
       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
     });
   }
 
  
   open2(basic2) {
   

     this.modalService.open(basic2, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
       this.closeResult = `Closed with: ${result}`;
     }, (reason) => {
       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
     });
   }
 
  
}