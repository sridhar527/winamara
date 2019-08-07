import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from "@angular/forms";
import { PaymentvocherService } from 'src/app/paymentvocher/paymentvocher.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
@Component({
  selector: 'app-paymentvocher',
  templateUrl: './paymentvocher.component.html',
  styleUrls: ['./paymentvocher.component.css']
})
export class PaymentvocherComponent implements OnInit {
  PaymentForm : FormGroup;
  // minDate = new Date();
  Bankname:string;
  ChqNo:string;
  vno:number;
  todata:string;
  authorizedBy:string;
  amount:string;
  payment:string;
  remarks:string;
  voucherType:string;
  //otherName:string;
  paidTo:string;
  minDate = new Date();

  date:string;
  constructor(private fb:FormBuilder,private _http:PaymentvocherService,private toastr: ToastrService,private router: Router) { 
    this.PaymentForm=fb.group({
     'Bankname':[null],
     'ChqNo':[null],
   
     'todata':[null],
     'authorizedBy':[null],
     'paidTo':[null],
     'amount':[null],
     'payment':[null],
    //'otherName':[null],
     'date':[null],
     'remarks':[null],
     'voucherType':[null]
    })
  }

  ngOnInit() {
    this.showId()
  }
 

  Id=[]
  showId() {
    this._http.getId()
      .subscribe(
        response => {

          this.Id = response;
          console.log("Id" + JSON.stringify(response));
          console.log(this.Id[0].nextId);
        });
  }
  save(value: any)
  
  {
    let par = {
      "bank":this.Bankname,
      "checkDate":this.todata,
      "paymentType":this.payment,
      "checkNo":this.ChqNo,
      "voucherAmount":this.amount,
      "paymentDate":this.date,
      "authorizedBy":this.authorizedBy,
      "paidTo":this.paidTo,
      "remarks":this.remarks,
"voucherType":this.voucherType,
//"otherName":this.otherName

  }
  this._http.postCreate(par)
  .subscribe(
  data => {
//  this.ambulanceNO = data.ambulanceNO;
 console.log("data**" + JSON.stringify(data));
 window.open(data.fileuri);

 location.reload();
   },
   

);
this.toastr.success("Payment Voucher   registered  sucessfully ")
this.router.navigate(['/paymentvocherlist'])
//   moment:any;
//   const momentDate = new Date(event.value); // Replace event.value with your date value
// const formattedDate = this.moment(this.todata).format("YYYY/MM/DD");
//  console.log(this.formattedDate);
}
reset()
{
  this.PaymentForm.reset()
}
refresh() {
  location.reload();
 }


}