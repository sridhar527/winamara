import { Component, OnInit } from '@angular/core';
import { ProlistService } from "src/app/prolist/prolist.service";
import { ToastrService } from 'ngx-toastr'
import { Router } from "@angular/router";
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-prolist',
  templateUrl: './prolist.component.html',
  styleUrls: ['./prolist.component.css']
})
export class ProlistComponent implements OnInit {
  Proclist = [];
  ProForm:FormGroup
  closeResult: string;
  constructor(private fb:FormBuilder,private _http: ProlistService,private toastr: ToastrService,private router:Router,private modalService: NgbModal) {




    this.ProForm= fb.group({
      
     'masterProcurementId':[null],
     'ProcurementId':[null],
     'status':[null],
'procurementType':[null],
'vendorName':[null],
'location':[null]
        })
       
   }
 
   masterProcurementId:string
   ProcurementId:string
   status:string
   procurementType:string
   vendorName:string
   location:string
   currency:string
   itemName:string
   batch:string
   manufacturedDate:any
   expDate:any
   quantity:number
   freeSample:any
   mrp :number
   costPrice: number
   packing:string
  ngOnInit() {
    this.showProcList()
  }

  open(basic,data) {
    this.invoiceNo =data.invoiceNo
    this.poNo =data.poNo
    this.tax=data.tax
    this.costPrice = data.costPrice
    this.mrp=data.mrp
    this.freeSample=data.freeSample
    this.quantity=data.quantity
    this.expDate=data.expDate
    this.manufacturedDate=data.manufacturedDate
    this.batch=data.batch
    this.masterProcurementId=data.masterProcurementId
    this.ProcurementId=data.procurementId
    this.status=data.status
    this.procurementType=data.procurementType
    this.vendorName =data.vendorName
    this.location=data.location
    this.currency=data.currency
    this.itemName=data.itemName
    this.packing =data.packing
    this.modalService.open(basic, { ariaLabelledBy: 'modal-basic-title',size:'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  public loading = false;
  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }


  }
  showProcList() {
    this.loading = true;
    this._http.getProcLi()
      .subscribe(
        response => {
          this.loading = false;
          this.Proclist = response;
          console.log(response[0].procurementId)
          console.log("proculist" + JSON.stringify(response));

        });
  }

  getReport(data)
  {
this._http.getReports(data.procurementId)
.subscribe(
  response=>{
    window.open(response[0].fileuri);
  }
);
  }

  p: number = 1;

  save(data) {
  

    let param =
      [
        {



          "masterProcurementId": data.masterProcurementId,
          "procurementId": data.procurementId,
          "costPrice": data.costPrice,
          "mrp": data.mrp,
          "dateOfProcurement": data.dateOfProcurement,
          "poNo": data.poNo,
          "insertedDate": data.insertedDate,
          "modifiedDate": data.modifiedDate,
          "quantity": data.quantity,
          "freeSample": data.freeSample,
          "itemName": data.itemName,
          "batch": data.batch,
          "procurementType": data.procurementType,
          "status": data.status,
          "currency": data.currency,
          "amount": data.amount,
          "manufacturedDate": data.manufacturedDate,
          "packing": data.packing,
          "expDate": data.expDate,
          "tax": data.tax,
          "vendorName": data.vendorName,
          "medName": data.medName,
          "location": data.location,
          "refMedicineDetails": data.refMedicineDetails

        }
      ]
    console.log(data.masterProcurementId)

    this._http.editApprove(param)
      .subscribe(
        data => {

          console.log("edit****" + JSON.stringify(data));
        

        },

      );
    
      this.toastr.success("approved")
      
      // this.router.navigate(['/invoice'])
      location.reload();
      
  }


discount:number;
gst :number
invoiceNo:string
poNo:string
tax:number
// packing:string
  edit()
  {
    let param=
    {
      "masterProcurementId":this.masterProcurementId,
      "procurementId":this.ProcurementId,
      "location":this.location,
      "vendorName":this.vendorName,
      "invoiceNo":this.invoiceNo,
      "poNo":this.poNo,
      "procurementType":this.procurementType,
      "currency":this.currency,
      "refMedicineDetails":[
        {
          "mrp":this.mrp,
          "quantity":this.quantity,
          "costPrice":this.costPrice,
          
          "tax":this.tax,
          
          "freeSample":this.freeSample,
          "itemName":this.itemName,
          "batch":this.batch,
          
          "packing":this.packing,
          "expDate":this.expDate,
          "manufacturedDate":this.manufacturedDate,
          "discount":this.discount,
          "gst":this.gst
        }]
      
    }

   this._http.edit(param)
     .subscribe(
     data => {
       console.log("data**" + JSON.stringify(data));
    
       this.toastr.success("details updated")
      
      },

   );



 }

 refresh()
 {
   location.reload()
 }
}

