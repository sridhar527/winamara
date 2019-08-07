import { Component, OnInit } from '@angular/core';
import { LabAdminService } from "src/app/lab-admin/lab-admin.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { FormControl } from "@angular/forms";
 import { FormsModule} from '@angular/forms';
@Component({
  selector: 'app-lab-admin',
  templateUrl: './lab-admin.component.html',
  styleUrls: ['./lab-admin.component.css']
})
export class LabAdminComponent implements OnInit {
  addRole: () => void;


  closeResult: string;
  reg_id:string;
  serviceName:string;
  measureName:string;
  value:number
  comment:string
  constructor(private _http:LabAdminService,private modalService: NgbModal,private fb:FormBuilder) {


    this.AdminForm=fb.group({
      'reg_id':new FormControl('',),
      'serviceName':new FormControl('',),
'value':[],
      'comment':new FormControl('',)
      
    })
  
   }
  AdminForm :FormGroup;
  ngOnInit() {

    this.showServiceDetails()

      
     
        
          
  }
Ser=[]

  showServiceDetails()
  {
    this._http.getSerDetails()
    .subscribe(
   data => {
      
this.Ser=data;
      console.log("data" + JSON.stringify(data));
   
    },

    
   );
 
   
  }
 
  save(data) {


        let param = 
       [ 
        {
                  
          "labRegId": data.labRegId,
          "patientName": data.patientName,
          "invoiceNo":data.invoiceNo,
          "mobile": data.mobile,
          "labServiceDate": data.labServiceDate,
          "refferedById":data.refferedById,
          "serviceName": data.serviceName,
          "price": data.price,
          "discount": data.dicount,
          "netAmount": data.netAmount,
          "enteredBy": data.enteredBy,
          "modifiedBy": data.modifiedBy,
          "enteredDate":data.enteredDate,
          "modifiedDate": data.modifiedDate,
          "status":data.status,
          "reg_id": data.reg_id,
          "servName": data.servName,
          "refLaboratoryRegistrations":data.refLaboratoryRegistrations 
 
  } 
]

        this._http.serviceApprove(param)
          .subscribe(
          data => {
    
            console.log("edit****" + JSON.stringify(data));
         
location.reload()
          },
        
        );
      
      }      
    
      open(basic,data) {
        this.reg_id=data.reg_id;
      this.serviceName=data.serviceName

           this.modalService.open(basic, {ariaLabelledBy: 'modal-basic-title',size:'lg'}).result.then((result) => {
             this.closeResult = `Closed with: ${result}`;
           }, (reason) => {
             this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
           });
         }

         open1(basic1) {
  
             this.modalService.open(basic1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

 private getDismissReason(reason: any): string {
  
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }

    
  }
  Measures=[]
  send(data)
  {
    this._http.getMeasures(data.serviceName,data.reg_id)
    .subscribe(
    response => {
    this.Measures=response

console.log( "hi" + this.Measures[0].measureName)
      console.log("measures" + JSON.stringify(response));
    
     console.log(this.Measures.length)
      console.log(response)
 let data=JSON.stringify(response)

    },);
  }







 
 function(Measures){
  var refMeasureDetails=[];
  
  for (var ln = 0; ln <this.Measures.length; ln++) {


  var b ={
         
    "measure":this.Measures[ln].measureName,
    "value":this.Measures[ln].value
         }
         console.log(b)
         refMeasureDetails.push(b)
       
       
}
if(this.Measures.length == 0) { 
  refMeasureDetails.push({});
}

return refMeasureDetails;


 }



 p: number = 1;

  report(value:any) {

let param=
    {
      "regId":this.reg_id,
      "serviceName":this.serviceName,
      "comment":this.comment,
     
            "refMeasureDetails":
        
               this.function(this.Measures),
              

            
      
}

 


        this._http.post(param)
          .subscribe(
          data => {
    
            console.log("Report****" + JSON.stringify(data));
            if(!data || !data.fileuri) { 
              // alert('No Pdf report available for this!');
            } else {
            window.open(data.fileuri);
            }
            
               location.reload();

          },
        
        );
      
      }      
    
    }
