import { Component, OnInit } from '@angular/core';
import {SalesService} from 'src/app/sales/sales.service';
import { FormGroup } from "@angular/forms";
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl } from "@angular/forms";
import { FormArray } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";

import { ToastrService } from 'ngx-toastr'
import { SaleDetail, NewSale , Medicine} from 'src/app/sales/sales.model';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";
import { sa } from '@angular/core/src/render3';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  public refSales: SaleDetail[] = [];
  public newSale: NewSale;
  Item=[]
  
  closeResult: string;
  productName: string;
 // itemId: any;
  //sellingPrice: any;
  //soldDate: any;
  soldBy: any;
  paymentType: any;
  customerName: any;
  address:any;
  emailId: any;
  mobileNo: any;
  saleArea: any;
  amount: any;
  discount: number;
  customerOrderNo:string;
  delivery: string;
 
  refChildSales: any;
  minDate = new Date();
  total: any;
  
  constructor(private _http: SalesService ,private router: Router,private toastr: ToastrService, private modalService: NgbModal)
  {     
    this.refSales[0] = new SaleDetail();
    this.newSale = new NewSale();
   }

   ngOnInit() {
    this.prepareNewBill();       
   
  }
  soldDate = new Date()
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
   sale.originRefNo=undefined;
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

  
  prepareNewBill()
  {
    this.refSales = [];
    this.refSales[0] = new SaleDetail();
    this.newSale = new NewSale(); 
    this.newSale.refSales = this.refSales;
    this._http.getBill()
    .subscribe(
    response => {
     //this.billNo=response[1].billNo ;
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
    //sale.availableareaperSqm = response[0].availableareaperSqm; 
    //sale.availableareaperCubic=response[0].availableareaperCubic;
    // sale.length = response[0].length;
    // sale.height = response[0].height;
    // sale.thickness = response[0].thickness;
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
    //  calcAmount1(sale){
    //   if(sale.sellingDimension == 'Sqm')
    //   sale['saleArea'] = sale.length*sale.height*sale.saleQuantity/10000;
    //   if(sale.sellingDimension == 'Cubic')
    //   sale['saleArea'] = sale.length*sale.height*sale.thickness*sale.saleQuantity/1000000;
    // }

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
    
   }
 

  
  showModal(basic: any) { 
    this.newSale.paymentType = "";
    this.refSales = this.refSales.filter(sale => Object.keys(sale).length !== 0);
    if(this.refSales.length == 0) { 
      //this.toastr.error("Please fill Medicine Details!");
      this.refSales = []; 
      this.refSales[0] = new SaleDetail();
      return;
    }
    let total = 0;
    this.refSales.map(sale => total = ((total ? total : 0) + (+(sale.netAmount))));
    this.newSale.total = (total ? total : 0);
    this.total=(this.newSale.total).toFixed(2);
    this.newSale.refSales = this.refSales;
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

   this._http.post(this.newSale)
     .subscribe(
     data => {
       console.log("data**" + JSON.stringify(data));  

       window.open(data.fileuri);
       location.reload();  
     
       
      });
       
 } 

 

}



