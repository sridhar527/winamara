import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { SalemanagementService } from "src/app/salemanagement/salemanagement.service";
import { FormGroup } from "@angular/forms";
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl } from "@angular/forms";
import { FormArray } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";

import { ToastrService } from 'ngx-toastr'
import { SaleDetail, NewSale ,Multiple, Medicine} from './salesmanagement.model';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";
import { sa } from '@angular/core/src/render3';


@Component({
  selector: 'app-salemanagement',
  templateUrl: './salemanagement.component.html',
  styleUrls: ['./salemanagement.component.css']
})
export class SalemanagementComponent implements OnInit 
{
  @ViewChild('basic') input: ElementRef;
  multiplePayment1: Multiple[] = [];

  public refSales: SaleDetail[] = [];
  public newSale: NewSale;
  Item=[]
  saveInProgress = false;
  closeResult: string;
  productName: string;
  soldBy: any;
  payType: any;
  customerName: any;
  emailId: any;
  mobileNo: any;
  saleArea: any;
  amount: any;
  discount: number;
  customerOrderNo:string;
  refChildSales: any;
  minDate = new Date();
  saleForm: any;
  address:any;
    constructor(private formBuilder: FormBuilder,private _http: SalemanagementService ,private router: Router,private toastr: ToastrService, private modalService: NgbModal)
     {    
      this.multiplePayment1[0] = new Multiple(); 
      this.refSales[0] = new SaleDetail();
      this.newSale = new NewSale();
     }
     disable: boolean = false
     cash: boolean = false
     card: boolean = false
     credit: boolean = false
     cheque: boolean = false
     onlinetransfer: boolean = false
    ngOnInit() {
      this.multiplePayment1[0].payType = "Cash"
      if (this.multiplePayment1[0].payType = "Cash") {
        this.disable = true
       
      }
        this.saleForm = this.formBuilder.group({
    
        });

      this.prepareNewBill();       
     
    }

    addMore1(event) {
     
  this.disable=false
  this.multiplePayment1.map(
        
    sale=> {if(sale.payType==='Cash')
  {
    this.cash=true
   if( this.cashamount==(this.newSale.total))
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
  if( this.cardamount==(this.newSale.total))
  {
  this.cashamount=0
  this.creditamount=0
  this.chequeamount=0
  this.otamount=0
  }
  }}
  ),
  
  this.multiplePayment1.map(
  sale=> {if(sale.payType==='Credit')
  {
    this.credit=true
  if( this.creditamount==(this.newSale.total))
  {
  this.cashamount=0
  this.cardamount=0
  this.chequeamount=0
  this.otamount=0
  }
  }}
  ),
  this.multiplePayment1.map(
    sale=> {if(sale.payType==='Cheque')
    {
      this.cheque=true
    if( this.chequeamount==(this.newSale.total))
    {
    this.cashamount=0
    this.creditamount=0
    this.cardamount=0
    this.otamount=0
    }
    }}
    )
    this.multiplePayment1.map(
      sale=> {if(sale.payType==='Online Transfer')
      {
        this.onlinetransfer=true
      if( this.otamount==(this.newSale.total))
      {
      this.cashamount=0
      this.creditamount=0
      this.cardamount=0
      this.chequeamount=0
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
       if( this.cashamount<=(this.newSale.total))
        {
   this.cashamount=(this.newSale.total)
   this.cardamount=(this.newSale.total)
   this.creditamount=(this.newSale.total)
   this.chequeamount=(this.newSale.total)
   this.otamount=(this.newSale.total)

        }
      }}
      ),
      this.multiplePayment1.map(
        
        sale=> {if(sale.payType==='Card')
      {
        this.card=false
       if( this.cardamount<=(this.newSale.total))
        {
          this.cashamount=(this.newSale.total)
          this.cardamount=(this.newSale.total)
          this.creditamount=(this.newSale.total)
          this.chequeamount=(this.newSale.total)
          this.otamount=(this.newSale.total)

        }
      }}
      ),
     
      this.multiplePayment1.map(
        
        sale=> {if(sale.payType==='Credit')
      {
        this.credit=false
       if( this.creditamount<=(this.newSale.total))
        {
          this.cashamount=(this.newSale.total)
          this.cardamount=(this.newSale.total)
          this.creditamount=(this.newSale.total)
          this.chequeamount=(this.newSale.total)
          this.otamount=(this.newSale.total)

        }
      }}
      ),
      this.multiplePayment1.map(
        
        sale=> {if(sale.payType==='Cheque')
      {
        this.cheque=false
       if( this.chequeamount<=(this.newSale.total))
        {
          this.cashamount=(this.newSale.total)
          this.cardamount=(this.newSale.total)
          this.creditamount=(this.newSale.total)
          this.chequeamount=(this.newSale.total)
          this.otamount=(this.newSale.total)

        }
      }}
      ),
      this.multiplePayment1.map(
        
        sale=> {if(sale.payType==='Online Transfer')
      {
        this.onlinetransfer=false
       if( this.otamount<=(this.newSale.total))
        {
          this.cashamount=(this.newSale.total)
          this.cardamount=(this.newSale.total)
          this.creditamount=(this.newSale.total)
          this.chequeamount=(this.newSale.total)
          this.otamount=(this.newSale.total)

        }
      }}
      ),
     
     
      this.multiplePayment1.splice(index, 1);
    }


   // soldDate = new Date()
    addMore(event) { 
      if(Object.keys(this.refSales[this.refSales.length - 1]).length > 0)
      this.refSales.push( new SaleDetail());  
   
    }
    removeSaleItem(index) { 
      let sale= this.refSales[index];  
      this.Item.map(m => {
        if(m.productName == sale.productName){ 
          m['disabled'] = false;
        }
      });      
      this.refSales.splice(index, 1);        
    }


    onProductChange(event, sale) { 
      //sale = new SaleDetail();
      sale.discount = 0;
      sale.amount = undefined;
      sale.saleArea = undefined;
     sale.balance = undefined;
      sale.refChildSales = undefined;
    sale.netAmount=undefined;
      sale.childList = undefined;
      sale.itemsList = undefined;
     sale.vat = undefined;
     sale.itemId = undefined;
      sale.netAmount = undefined;
      sale.saleQuantity = undefined;
      sale.itemName = undefined;
      sale.itemsName=undefined;
      sale.productName = event.productName;     
      this.setItemDetails(sale);
      //this.setDetails(sale);
    }

    billNo: string;
   
    prepareNewBill()
    {
      this.refSales = [];
      this.refSales[0] = new SaleDetail();
      this.newSale = new NewSale(); 
      this.newSale.refSales = this.refSales;
      this._http.getBill()
      .subscribe(
      response => {
       this.billNo=response[1].billNo ;
      // this.itemId=response;
        this.Item=response;
        console.log(this.Item)
     
      });
    }
    itemsName : any = [];
   
    setItemDetails(sale: SaleDetail)
    {
      this._http.getBatch(sale.productName)
      .subscribe(
      response => {      
       sale.itemsName = response;
      
      },      
      );
    }
    itemsList : any = [];
    setDetails(event,sale){
      sale.itemName=event.itemName;
      this._http.getName(sale.itemName)
      .subscribe(
      response => {    
      
       sale.itemsList = response;
     sale.itemId=response[0].itemId
     
      this.setChildItemDetails(sale)
      
      
      },      
      );
    }
  
    childList :any = [];
    setChildItemDetails(sale){
      this._http.getItem(sale.itemId)
      .subscribe(
      response => {
      sale.childList = response[1];
      sale.balance = response[0].balance
    },
      
    );
    }
   
    refChildId:any;
     onItemSelect(event, sale) {
       var count=event.length
       
       //sale.saleArea = ((sale.length)*(sale.height)*count)/10000;
       sale.saleQuantity =count;
      //this.calcAmount1(sale);
      this.calcAmount(sale);
    
       } 
     
    calcAmount(sale) { 
     
    if(sale.sellingDimension == 'Sqm' && sale.spperArea)
    sale['amount'] = (sale.saleArea*sale.spperArea).toFixed(2);
    if(sale.sellingDimension == 'Pcs' && sale.spperPcs)
    sale['amount'] = (sale.saleQuantity*sale.spperPcs).toFixed(2);
    if(sale.sellingDimension == 'Cubic' && sale.spperArea)
    sale['amount'] = (sale.saleArea*sale.spperArea).toFixed(2);
    
  if(sale.discount>=0)
  sale['amount'] = Math.round((sale['amount']-(sale['amount']*(sale.discount)/100.0))*100)/100;

  if(sale.vat)
  sale['netAmount'] = (sale['amount'] + sale['amount']*(sale.vat)/100.0).toFixed(2);
  else 
  sale['netAmount'] = sale['amount']
  
     }
  Amount(sale){
   if(sale.dimension == 'cm' && sale.sellingDimension == 'Sqm'){
    sale['saleArea'] = (sale.length*sale.height*sale.saleQuantity/10000).toFixed(2);
   }
   else if (sale.dimension == 'mm' && sale.sellingDimension == 'Sqm'){
    sale['saleArea'] = (sale.length*sale.height*sale.saleQuantity/1000000).toFixed(2);
 }
 else if (sale.dimension == 'mtr' && sale.sellingDimension == 'Sqm'){
  sale['saleArea'] = (sale.length*sale.height*sale.saleQuantity).toFixed(2);
}
if(sale.dimension == 'cm' && sale.sellingDimension == 'Cubic'){
  sale['saleArea'] = (sale.length*sale.height*sale.thickness*sale.saleQuantity/1000000).toFixed(2);
 }
 else if (sale.dimension == 'mm' && sale.sellingDimension == 'Cubic'){
  sale['saleArea'] = (sale.length*sale.height*sale.thickness*sale.saleQuantity/1000000000).toFixed(2);
}
else if (sale.dimension == 'mtr' && sale.sellingDimension == 'Cubic'){
sale['saleArea'] = (sale.length*sale.height*sale.thickness*sale.saleQuantity).toFixed(2);
}
    } 
     
    reset() { 
     

      this.newSale = new NewSale(); 
      this.refSales = []; 
      this.refSales[0] = new SaleDetail();
      this.multiplePayment1[0]=new Multiple();
this.cardamount=0;
this.otamount=0;
this.cashamount=0;
this.total=0
this.creditamount=0
this.chequeamount=0
     }
   
  
    
    showModal(basic: any) { 
    
      this.refSales = this.refSales.filter(sale => Object.keys(sale).length !== 0);
      if(this.refSales.length == 0) { 
        this.refSales = []; 
        this.refSales[0] = new SaleDetail();
        return;
      }
      let total = 0;
      this.refSales.map(sale => total = ((total ? total : 0) + (+(sale.netAmount))));
      this.newSale.total = (total ? total : 0);
      this.total=Math.round(( this.newSale.total )*100)/100;
      this.newSale.refSales = this.refSales;
      this.cashamount=(this.newSale.total)
      this.cardamount=(this.newSale.total)
      this.creditamount=(this.newSale.total)
      this.chequeamount=(this.newSale.total)
      this.otamount=(this.newSale.total)

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
    showModal1(basic1: any) { 
    
      let total = 0;
      this.refSales.map(sale => total = ((total ? total : 0) + (+(sale.netAmount))));
      this.newSale.total = (total ? total : 0);
      this.total=( this.newSale.total ).toFixed(2)
      this.newSale.refSales = this.refSales;

    this.modalService.open(basic1, {ariaLabelledBy: 'modal-basic-title',size:'lg'}).result.then((result) => {
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
        return  `with: ${reason}`;
      }
  
      
    }
   

    save()
    {
      this.multiplePayment1.map(
      
        sale=> {if(sale.payType==='Cash')
      {
        let multiplePayment:any=[]
        this.newSale.multiplePayment.push({"payType":"Cash",
         "amount":this.cashamount})  
      }}
        
       );
       this.multiplePayment1.map(
       sale=> {if(sale.payType==='Credit')
       {
         let multiplePayment:any=[]
         this.newSale.multiplePayment.push({"payType":"Credit",
          "amount":this.creditamount})  
       }}
         
        );
        this.multiplePayment1.map(
          sale=> {if(sale.payType==='Cheque')
          {
            let multiplePayment:any=[]
            this.newSale.multiplePayment.push({"payType":"Cheque",
             "amount":this.chequeamount})  
          }}
            
           );
       this.multiplePayment1.map(
        
        sale=> {if(sale.payType==='Card')
      {
        let multiplePayment:any=[]
        this.newSale.multiplePayment.push({"payType":"Card",
        "amount":this.cardamount}) 
      }}
  
      
        
       );
       this.multiplePayment1.map(
        
        sale=> {if(sale.payType==='Online Transfer')
      {
        let multiplePayment:any=[]
        this.newSale.multiplePayment.push({"payType":"Online Transfer",
        "amount":this.otamount}) 
      }}
  
      
        
       );
    
     this._http.post(this.newSale)
       .subscribe(
       data => {
         console.log("data**" + JSON.stringify(data));  

         window.open(data.fileuri);
         location.reload();  
       
         
        });
         
   } 
   otamount: number
   cardamount: number
   cashamount:number
   netAmount: any
   creditamount:number
   chequeamount:number
   total: any

   getPresentAmount(c)
{
 c.netAmount=this.newSale.total
}



getduecardamount()
{   this.netAmount = (this.newSale.total)
  if(this.creditamount>this.netAmount)
  {
this.total_error=true
  }
  if(this.creditamount){
    
    this.cardamount=(this.netAmount)-(this.creditamount?this.creditamount:0)
   
  }

}

getduecashamount()
{
  this.netAmount = (this.newSale.total)
  if(this.creditamount>this.netAmount)
  {
this.total_error=true
  }
  if(this.creditamount){
     this.cashamount=(this.netAmount)-(this.creditamount?this.creditamount:0)
     }
}
getdueotamount()
{
  this.netAmount = (this.newSale.total)
  if(this.creditamount>this.netAmount)
  {
this.total_error=true
  }
  if(this.creditamount){
     this.otamount=(this.netAmount)-(this.creditamount?this.creditamount:0)
     }
}

getduechequeamount()
{
  this.netAmount = (this.newSale.total)
  if(this.creditamount>this.netAmount)
  {
this.total_error=true
  }
  if(this.creditamount){
     this.chequeamount=(this.netAmount)-(this.creditamount?this.creditamount:0)
     }
}
getchequecardamount(){
  this.netAmount = (this.newSale.total)
  if(this.chequeamount>this.netAmount)
  {
this.total_error=true
  }
  if(this.chequeamount){
    
    this.cardamount=(this.netAmount)-(this.chequeamount?this.chequeamount:0)
   
  }
}
getchequecashamount(){
  this.netAmount = (this.newSale.total)
  if(this.chequeamount>this.netAmount)
  {
this.total_error=true
  }
  if(this.chequeamount){
    
    this.cashamount=(this.netAmount)-(this.chequeamount?this.chequeamount:0)
   
  }
}
getchequecreditamount(){
  this.netAmount = (this.newSale.total)
  if(this.chequeamount>this.netAmount)
  {
this.total_error=true
  }
  if(this.chequeamount){
    
    this.creditamount=(this.netAmount)-(this.chequeamount?this.chequeamount:0)
   
  }
}
getchequeotamount(){
  this.netAmount = (this.newSale.total)
  if(this.chequeamount>this.netAmount)
  {
this.total_error=true
  }
  if(this.chequeamount){
    
    this.otamount=(this.netAmount)-(this.chequeamount?this.chequeamount:0)
   
  }
}
total_error=false
  getcashamount() {
  
   
    this.netAmount = (this.newSale.total)
  if(this.cardamount>this.netAmount)
  {
this.total_error=true
  }
 
    console.log(this.netAmount)
    this.cashamount = (this.netAmount) - (this.cardamount)

  }


  getcardamount() {

    this.netAmount = (this.newSale.total)
    if(this.cashamount>this.netAmount)
    {
  this.total_error=true
    }
    this.cardamount = (this.netAmount) - (this.cashamount)

  }

  getcashDueamount()
  {
    this.netAmount = (this.newSale.total)
    if(this.cashamount>this.netAmount)
    {
  this.total_error=true
    }
    if(this.cashamount)
    this.creditamount = (this.netAmount)-(this.cashamount)
   
  }
  getcashChequeamount()
  {
    this.netAmount = (this.newSale.total)
    if(this.cashamount>this.netAmount)
    {
  this.total_error=true
    }
    if(this.cashamount)
    this.chequeamount = (this.netAmount)-(this.cashamount)
   
  }
  getcashotamount()
  {
    this.netAmount = (this.newSale.total)
    if(this.cashamount>this.netAmount)
    {
  this.total_error=true
    }
    if(this.cashamount)
    this.otamount = (this.netAmount)-(this.cashamount)
   
  }

  getcardDueamount()
  {
    this.netAmount = (this.newSale.total)
    if(this.cardamount>this.netAmount)
    {
  this.total_error=true
    }
    if(this.cardamount)
      this.creditamount = (this.netAmount) - (this.cardamount)
  }
  getcardChequeamount()
  {
    this.netAmount = (this.newSale.total)
    if(this.cardamount>this.netAmount)
    {
  this.total_error=true
    }
    if(this.cardamount)
      this.chequeamount = (this.netAmount)-(this.cardamount)
  }
  getcardotamount()
  {
    this.netAmount = (this.newSale.total)
    if(this.cardamount>this.netAmount)
    {
  this.total_error=true
    }
    if(this.cardamount)
      this.otamount = (this.netAmount)-(this.cardamount)
  }
  getotcashamount(){
    this.netAmount = (this.newSale.total)
    if(this.otamount>this.netAmount)
    {
  this.total_error=true
    }
    if(this.otamount){
      
      this.cashamount=(this.netAmount)-(this.otamount?this.otamount:0)
     
    }
  }
  getotcardamount(){
    this.netAmount = (this.newSale.total)
    if(this.otamount>this.netAmount)
    {
  this.total_error=true
    }
    if(this.otamount){
      
      this.cardamount=(this.netAmount)-(this.otamount?this.otamount:0)
     
    }
  }
  getotchequeamount(){
    this.netAmount = (this.newSale.total)
    if(this.otamount>this.netAmount)
    {
  this.total_error=true
    }
    if(this.otamount){
      
      this.chequeamount=(this.netAmount)-(this.otamount?this.otamount:0)
     
    }
  }
  getotcreditamount(){
    this.netAmount = (this.newSale.total)
    if(this.otamount>this.netAmount)
    {
  this.total_error=true
    }
    if(this.otamount){
      
      this.creditamount=(this.netAmount)-(this.otamount?this.otamount:0)
     
    }
  }

}



  
   
  

  
  
  