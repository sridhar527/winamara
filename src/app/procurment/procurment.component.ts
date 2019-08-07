import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { ProcurmentService } from "src/app/procurment/procurment.service";
import { Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr'
import { Router } from "@angular/router";
import { Details } from "src/app/procurment/procurment.model";
@Component({
  selector: 'app-procurment',
  templateUrl: './procurment.component.html',
  styleUrls: ['./procurment.component.css']
})
export class ProcurmentComponent implements OnInit {
  maxDate = new Date();
  public loading = false;
ProForm:FormGroup
Proc=[]
mstr_procurement_id:string
date_of_procurement:any
status:string
VendorName:string
procurement_type:string
po_num:string
currency:string
Amount:number
cost:number
mrp:number
samples:string
quantity:any
expdate:any;
date:any;
batchno:string
medicinename:string
location:string
gst:number
detail: Details[] = [];

  constructor(private fb:FormBuilder,private _http:ProcurmentService,private toastr: ToastrService,private router:Router) { 
  this.detail[0] = new Details()

    this.ProForm= fb.group({
      

      'mstr_procurement_id':[null],
      'date_of_procurement':[null],
      'status':[null],
      'VendorName':[null],
      'procurement_type':[null],
      'po_num':[null],
      'in_num':[null],
      'currency':[null],
      'Amount':[null],

 
      'expdate':[null],
      'date':[null],
 
      'medicinename':[null,Validators.pattern('[a-zA-Z ]*')],
      'location':[null,[Validators.required]],

        })
       
  }
  in_num:number
  discount:number
  ngOnInit() {
    this.showProc()
  }
 
 


  save(value: any)

  {
    alert ("itemName")
    this.detail = this.detail.filter(sale => Object.keys(sale).length !== 0);
   let param = {
    
      "vendorName":this.VendorName,
      "location":this.location,
      "invoiceNo":this.in_num,
      "poNo":this.po_num,
			"currency":this.currency,
        "procurementType":this.procurement_type,
       
      "refMedicineDetails":
             this.detail
       
    }
    
console.log(this.medicinename)
   this._http.postCreate(param)
     .subscribe(
     data => {
       console.log("data**" + JSON.stringify(data));
    
    
       window.open(data.fileuri);
       
           location.reload();
      
      },

   );

// this.toastr.success("added in to procurement")
// location.reload()
// this.router.navigate(['/proclist'])

 }
 manf:string
send(i,data)
{
  this.name=data.name
  this._http.getManf(data.name)
  .subscribe(
  response => {

 
  
    // this.batch.set(i,response.Batch);
    // this.manfacturer.set(i ,response.Manufacturer);
  
  
   console.log("Manf" + JSON.stringify(response));
   
    
 console.log("mmm" + response)

  },);
}

addMore(event) { 

  this.detail.push( new Details());      
}

removeSaleItem(index) { 
  
    
  this.detail.splice(index, 1);        
}
 showProc()
 {
  this.loading = true;
   this._http.getProc() 
   .subscribe(
   response => {
    this.loading = false;
 this.Proc=response;

     console.log("medicine" + JSON.stringify(response));


   },);
 }
reset () 
    {
      this.ProForm.reset();
    }

   name:string 
}

 
