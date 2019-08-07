import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { InvoiceService } from "src/app/item/itemlist/invoice/invoice.service";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import {Invoices} from "src/app/item/itemlist/invoice/invoice.model";
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  descriptionOfGoods: Invoices[] = [];
 InvoiceForm:FormGroup;
 invoiceId:string;
  date: string;
  raisedBy: string;
  raisedTo: string;
  preCarriageBy: string;
  vesselFlightNo: string;
  placeOfReceiptByPreCarrier: string;
  portOfLoading: string;
  portOfDischarge: string;
  countryOfOriginOfGoods: string;
  placeOfDelivery: string;
  termsOfDelivery: string;
  paymentTerms: string;
  countryOfFinalDestination: string;
  goodsName: string;
  areaSqMt: number;
  noOfCrates: number;
  noOfPackages: string;
  kindOfPackages: string;
  total: number;
  length:number;
  height:number;
  closeResult: string;
  minDate = new Date();
  constructor(private modalService: NgbModal,private _http:InvoiceService,private fb:FormBuilder,private toastr: ToastrService) {
    this.descriptionOfGoods[0] = new Invoices()
  
    this.InvoiceForm = fb.group({
 'date':[null],
'raisedBy':[null],
 'raisedTo':[null],
 'preCarriageBy':[null],
 'placeOfReceiptByPreCarrier': [ null],
 'portOfLoading':[null],
 'portOfDischarge':[null],
 'countryOfOriginOfGoods':[null],
 'placeOfDelivery':[null],
 'termsOfDelivery':[null],
 'paymentTerms':[null],
 'vesselFlightNo':[null],
 'countryOfFinalDestination':[null],
 'goodsName':[null],
 'areaSqMt':[null],
 'noOfCrates':[null],
 'noOfPackages':[null],
 'length':[null],
 'height':[null],
 'kindOfPackages':[null],
 'total':[null]
    })
         
        

     
        
      }
   

  ngOnInit() {
    this.showInvoice()
  }
 
  calcAmount(item){
   item.total = item.areaSqMt*item.noOfCrates*item.noOfPackages;
    //this.InvoiceForm.patchValue({"total":item.total},{emitEvent:true});
  }
  calcAmount2(item){
    item.areaSqMt = item.length*item.height/10000;
     //this.InvoiceForm.patchValue({"areaSqMt":item.areaSqMt},{emitEvent:true});
   }
  addMore($event){

    if(Object.keys(this.descriptionOfGoods[this.descriptionOfGoods.length - 1]).length > 0)
      this.descriptionOfGoods.push( new Invoices());  
   
  }
  removeSaleItem(index) { 
  
    this.descriptionOfGoods.splice(index, 1);        
  }

  private amount = 0;
  showModal(basic: any) { 
    this.amount = 0;
    this.descriptionOfGoods = this.descriptionOfGoods.filter(item => Object.keys(item).length !== 0);
    this.descriptionOfGoods.map(item => this.amount = this.amount + item.total);
  
   
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
    let par = {
    "date":this.date,
    "raisedBy":this.raisedBy,
    "raisedTo":this.raisedTo,
    "carrierInformation":
{
"preCarriageBy":this.preCarriageBy,
"vesselFlightNo":this.vesselFlightNo,
"placeOfReceiptByPreCarrier":this.placeOfReceiptByPreCarrier,
"portOfLoading":this.portOfLoading,
"portOfDischarge":this.portOfDischarge,
"countryOfOriginOfGoods":this.countryOfOriginOfGoods,
"placeOfDelivery":this.placeOfDelivery,
"termsOfDelivery":this.termsOfDelivery,
"paymentTerms":this.paymentTerms,
"countryOfFinalDestination":this.countryOfFinalDestination
},


"descriptionOfGoods":this.descriptionOfGoods,
 
    }
    this._http.post(par)
       .subscribe(
       data => {
         console.log("data**" + JSON.stringify(data));  

         window.open(data.fileuri);
         location.reload();  
       
         console.log(data)
        });
   
 }



Invoice = []
showInvoice(){
  this._http.getInvoice()
   .subscribe(
   response => {
     
 this.Invoice=response;
 console.log(this.Invoice[2].nextInvoiceId);

     console.log("invoice" + JSON.stringify(response));
   
   },);
}

reset()
{
this.InvoiceForm.reset();
this.descriptionOfGoods[0] = new Invoices();
}



}

