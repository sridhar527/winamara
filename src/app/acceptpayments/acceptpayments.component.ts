import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { AcceptpaymentsService } from "src/app/acceptpayments/acceptpayments.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormBuilder } from '@angular/forms';
import {Multiple} from './acceptpayments.model'
import { ToastrService } from 'ngx-toastr'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-acceptpayments',
  templateUrl: './acceptpayments.component.html',
  styleUrls: ['./acceptpayments.component.css']
})
export class AcceptpaymentsComponent implements OnInit {
  @ViewChild('basic') input: ElementRef;
  multiplePayment1: Multiple[] = [];
  multiplePayment=[];
  AcceptForm: FormGroup;
  closeResult: string;
  netAmout: number;
  creditNoteAmt: any;
  billNo: string;
  payType: number; 
  amount: any;
  key: string;
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  constructor(private _http: AcceptpaymentsService,private modalService: NgbModal, private toastr: ToastrService,private formBuilder:FormBuilder) 
  {
    this.multiplePayment1[0] = new Multiple(); 
   }
     disable: boolean = false
     cash: boolean = false
     card: boolean = false
     credit: boolean = false
     cheque: boolean = false
     onlinetransfer: boolean =false
  ngOnInit() {
    this.multiplePayment1[0].payType = "Cash"
      if (this.multiplePayment1[0].payType = "Cash") {
        this.disable = true
       
      }
        this.AcceptForm = this.formBuilder.group({
    
        });
    this.showAll()
  }


  addMore1(event) {
     
    this.disable=false
    this.multiplePayment1.map(
          
      sale=> {if(sale.payType==='Cash')
    {
      this.cash=true
     if( this.cashamount==(this.creditNoteAmt))
      {
    this.cardamount=0
    this.creditamount=0
    this.chequeamount=0
    this.otamount=0
      }
    }}
    ),
    this.multiplePayment1.map(
    sale=> {if(sale.payType==='Card')
    {
      this.card=true
    if( this.cardamount==(this.creditNoteAmt))
    {
    this.cashamount=0
    this.creditamount=0
    this.chequeamount=0
    this.otamount=0
    }
    }}
    )
    
    this.multiplePayment1.map(
    sale=> {if(sale.payType==='Credit')
    {
      this.credit=true
    if( this.creditamount==(this.creditNoteAmt))
    {
    this.cashamount=0
    this.cardamount=0
    this.chequeamount=0
    this.otamount=0
    }
    }}
    )
    this.multiplePayment1.map(
      sale=> {if(sale.payType==='Online Transfer')
      {
        this.onlinetransfer=true
      if( this.otamount==(this.creditNoteAmt))
      {
      this.cashamount=0
      this.cardamount=0
      this.chequeamount=0
      this.creditamount=0
      }
      }}
      )
    this.multiplePayment1.map(
      sale=> {if(sale.payType==='Cheque')
      {
        this.cheque=true
      if( this.chequeamount==(this.creditNoteAmt))
      {
      this.cashamount=0
      this.cardamount=0
      this.creditamount=0
      this.otamount=0
      }
      }}
      )
    if(this.multiplePayment1.length<=1)
    
        this.multiplePayment1.push(new Multiple());
      
        else{
          this.toastr.error("only two payment types allowed")
        }
        
      }
  
  
      removeSaleItem1(index) {
        this.disable=false
        this.multiplePayment1.map(
          
          sale=> {if(sale.payType==='Cash')
        {
          this.cash=false
         if( this.cashamount<=(this.creditNoteAmt))
          {
     this.cashamount=(this.creditNoteAmt)
     this.cardamount=(this.creditNoteAmt)
     this.creditamount=(this.creditNoteAmt)
     this.chequeamount=(this.creditNoteAmt)
     this.otamount=(this.creditNoteAmt)
          }
        }}
        ),
        this.multiplePayment1.map(
          
          sale=> {if(sale.payType==='Card')
        {
          this.card=false
         if( this.cardamount<=(this.creditNoteAmt))
          {
            this.cashamount=(this.creditNoteAmt)
            this.cardamount=(this.creditNoteAmt)
            this.creditamount=(this.creditNoteAmt)
            this.chequeamount=(this.creditNoteAmt)
            this.otamount=(this.creditNoteAmt)

          }
        }}
        ),
       
        this.multiplePayment1.map(
          
          sale=> {if(sale.payType==='Credit')
        {
          this.credit=false
         if( this.creditamount<=(this.creditNoteAmt))
          {
            this.cashamount=(this.creditNoteAmt)
            this.cardamount=(this.creditNoteAmt)
            this.creditamount=(this.creditNoteAmt)
            this.chequeamount=(this.creditNoteAmt)
            this.otamount=(this.creditNoteAmt)

          }
        }}
        ),
        this.multiplePayment1.map(
          
          sale=> {if(sale.payType==='Cheque')
        {
          this.cheque=false
         if( this.chequeamount<=(this.creditNoteAmt))
          {
            this.cashamount=(this.creditNoteAmt)
            this.cardamount=(this.creditNoteAmt)
            this.creditamount=(this.creditNoteAmt)
            this.chequeamount=(this.creditNoteAmt)
            this.otamount=(this.creditNoteAmt)
          }
        }}
        ),
        this.multiplePayment1.map(
          
          sale=> {if(sale.payType==='Online Transfer')
        {
          this.onlinetransfer=false
         if( this.otamount<=(this.creditNoteAmt))
          {
            this.cashamount=(this.creditNoteAmt)
            this.cardamount=(this.creditNoteAmt)
            this.creditamount=(this.creditNoteAmt)
            this.chequeamount=(this.creditNoteAmt)
            this.otamount=(this.creditNoteAmt)
          }
        }}
        ),
       
       
        this.multiplePayment1.splice(index, 1);
      }
  
      open(basic,data) { 
        this.billNo = data.billNo;
      this.creditNoteAmt=data.creditNoteAmt;
          this.cashamount=(this.creditNoteAmt)
       this.cardamount=(this.creditNoteAmt)
       this.creditamount=(this.creditNoteAmt)
       this.chequeamount=(this.creditNoteAmt)
       this.otamount=(this.creditNoteAmt)
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


       showReports(basic2) {


        this.modalService.open(basic2, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason1(reason)}`;
        });
      }
    
    
      private getDismissReason1(reason: any): string {
    
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return `with: ${reason}`;
        }
    
    
      }
    
   cardamount: number
   cashamount:number
   creditamount:number
  chequeamount:number
  otamount:number

   getPresentAmount(c)
{
 c.amount=this.creditNoteAmt
}



getduecardamount()
{  
   this.amount = (this.creditNoteAmt)
  if(this.creditamount>this.amount)
  {
this.total_error=true
  }
  if(this.creditamount){
    
    this.cardamount=(this.amount)-(this.creditamount?this.creditamount:0)
   
  }

}
getdueotamount()
{  
   this.amount = (this.creditNoteAmt)
  if(this.creditamount>this.amount)
  {
this.total_error=true
  }
  if(this.creditamount){
    
    this.otamount=(this.amount)-(this.creditamount?this.creditamount:0)
   
  }

}

getduecashamount()
{
  this.amount = (this.creditNoteAmt)
  if(this.creditamount>this.amount)
  {
this.total_error=true
  }
  if(this.creditamount){
    
    this.cashamount=(this.amount)-(this.creditamount?this.creditamount:0)
   
  }

 
}
getduechequeamount()
{
  this.amount = (this.creditNoteAmt)
  if(this.creditamount>this.amount)
  {
this.total_error=true
  }
  if(this.creditamount){
    
    this.chequeamount=(this.amount)-(this.creditamount?this.creditamount:0)
   
  }

 
}
total_error=false
  getcashamount() {
  
   
    this.amount = (this.creditNoteAmt)
  if(this.cardamount>this.amount)
  {
this.total_error=true
  }
 
    console.log(this.amount)
    this.cashamount = (this.amount) - (this.cardamount)

  }

  getcardamount() {

    this.amount = (this.creditNoteAmt)
    if(this.cashamount>this.amount)
    {
  this.total_error=true
    }
    this.cardamount = (this.amount) - (this.cashamount)

  }

  getcashDueamount()
  {
    this.amount = (this.creditNoteAmt)
    if(this.cashamount>this.amount)
    {
  this.total_error=true
    }
    if(this.cashamount)
    this.creditamount = (this.amount)-(this.cashamount)
   
  }
  getcashotamount()
  {
    this.amount = (this.creditNoteAmt)
    if(this.cashamount>this.amount)
    {
  this.total_error=true
    }
    if(this.cashamount)
    this.otamount = (this.amount)-(this.cashamount)
   
  }

  getcardDueamount()
  {
    this.amount = (this.creditNoteAmt)
    if(this.cardamount>this.amount)
    {
  this.total_error=true
    }
    if(this.cardamount)
      this.creditamount = (this.amount) - (this.cardamount)
  }
  getcardotamount()
  {
    this.amount = (this.creditNoteAmt)
    if(this.cardamount>this.amount)
    {
  this.total_error=true
    }
    if(this.cardamount)
      this.otamount = (this.amount) - (this.cardamount)
  }
  getcashChequeamount()
  {
    this.amount = (this.creditNoteAmt)
    if(this.cashamount>this.amount)
    {
  this.total_error=true
    }
    if(this.cashamount)
      this.chequeamount = (this.amount) - (this.cashamount)
  }
  getcardChequeamount()
  {
    this.amount = (this.creditNoteAmt)
    if(this.cardamount>this.amount)
    {
  this.total_error=true
    }
    if(this.cardamount)
      this.chequeamount = (this.amount) - (this.cardamount)
  }
  getchequecardamount(){
    this.amount = (this.creditNoteAmt)
    if(this.chequeamount>this.amount)
    {
      this.total_error=true
    }
if(this.chequeamount){
  this.cardamount = (this.amount)-(this.chequeamount?this.chequeamount:0)
}
  }
  getchequecashamount(){
    this.amount = (this.creditNoteAmt)
    if(this.chequeamount>this.amount)
    {
      this.total_error=true
    }
if(this.chequeamount){
  this.cashamount = (this.amount)-(this.chequeamount?this.chequeamount:0)
}
  }
  getchequeotamount(){
    this.amount = (this.creditNoteAmt)
    if(this.chequeamount>this.amount)
    {
      this.total_error=true
    }
if(this.chequeamount){
  this.otamount = (this.amount)-(this.chequeamount?this.chequeamount:0)
}
  }
  getchequecreditamount(){
    this.amount = (this.creditNoteAmt)
    if(this.chequeamount>this.amount)
    {
      this.total_error=true
    }
if(this.chequeamount){
  this.creditamount = (this.amount)-(this.chequeamount?this.chequeamount:0)
}
  }
  getotcashamount(){
    this.amount = (this.creditNoteAmt)
    if(this.otamount>this.amount)
    {
      this.total_error=true
    }
if(this.otamount){
  this.cashamount = (this.amount)-(this.otamount?this.otamount:0)
}
  }
  getotcardamount(){
    this.amount = (this.creditNoteAmt)
    if(this.otamount>this.amount)
    {
      this.total_error=true
    }
if(this.otamount){
  this.cardamount = (this.amount)-(this.otamount?this.otamount:0)
}
  }
  getotcreditamount(){
    this.amount = (this.creditNoteAmt)
    if(this.otamount>this.amount)
    {
      this.total_error=true
    }
if(this.otamount){
  this.creditamount = (this.amount)-(this.otamount?this.otamount:0)
}
  }
  getotchequeamount(){
    this.amount = (this.creditNoteAmt)
    if(this.otamount>this.amount)
    {
      this.total_error=true
    }
if(this.otamount){
  this.chequeamount = (this.amount)-(this.otamount?this.otamount:0)
}
  }



  
   
    

  Alist=[]
  showAll(){
    this._http.getAll()
    .subscribe(
      data =>{
        this.Alist = data
        console.log(" data " + JSON.stringify(data));
      }
    )
  }

  save()
  
  {
    this.multiplePayment1.map(sale => {
      if (sale.payType === "Cash") {
        this.multiplePayment.push({ payType: "Cash", amount: this.cashamount });
      }
    });
    this.multiplePayment1.map(sale => {
      if (sale.payType === "Credit") {
        this.multiplePayment.push({ payType: "Credit", amount: this.creditamount });
      }
    });
    this.multiplePayment1.map(sale => {
      if (sale.payType === "Card") {
        this.multiplePayment.push({ payType: "Card", amount: this.cardamount });
      }
    });
    this.multiplePayment1.map(sale => {
      if (sale.payType === "Cheque") {
        this.multiplePayment.push({ payType: "Cheque", amount: this.chequeamount });
      }
    });
    this.multiplePayment1.map(sale => {
      if (sale.payType === "Online Transfer") {
        this.multiplePayment.push({ payType: "Online Transfer", amount: this.otamount });
      }
    });
    let param = {
      "creditNoteAmt":this.creditNoteAmt,
       "multiplePayment":this.multiplePayment,
      

      
      
       
    }
    this._http.edit(this.billNo,param)
      .subscribe(
      data => {
        console.log(this.billNo)
        console.log("data**" + JSON.stringify(data));
        window.open(data.fileuri);
        location.reload();
      },
     
    );
   
    }

    Bills = []

    getBills(data) {
      this._http.getAllBills(data.billNo)
        .subscribe(
        response => {
          this.Bills = response;
  
  
          console.log(this.Bills)
          console.log(response)
        }, );
    }

}
