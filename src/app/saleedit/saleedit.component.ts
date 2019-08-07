import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {SaleeditService} from 'src/app/saleedit/saleedit.service';
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import {  BillDetail, SaleDetail,Mutliple } from './saleedit.model';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-saleedit',
  templateUrl: './saleedit.component.html',
  styleUrls: ['./saleedit.component.css']
})
export class SaleeditComponent implements OnInit {
  @ViewChild('basic') input: ElementRef;
  multiplePayment1: Mutliple[] = [];
  refSales:SaleDetail[]=[];
  billDetail: BillDetail;
  closeResult: string;
  billNo: string;

  constructor(private _http: SaleeditService,private modalService: NgbModal,private fb:FormBuilder) {
    this.multiplePayment1[0] = new Mutliple(); 
    this.billDetail = new BillDetail();
   }
  //  disable: boolean = false
  //  cash: boolean = false
  //  card: boolean = false
  //  credit: boolean = false
  //  cheque: boolean = false
  //  onlinetransfer: boolean = false

   ngOnInit() {
    
  }
  calcAmount(sale) { 
     
    if(sale.sellingDimension == 'Sqm' && sale.spperArea)
    sale['amount'] = (sale.saleArea*sale.spperArea).toFixed(2);
    if(sale.sellingDimension == 'Pcs' && sale.spperPcs)
    sale['amount'] = (sale.noOfPcs*sale.spperPcs).toFixed(2);
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
    sale['saleArea'] = (sale.length*sale.height*sale.noOfPcs/10000).toFixed(2);
   }
   else if (sale.dimension == 'mm' && sale.sellingDimension == 'Sqm'){
    sale['saleArea'] = (sale.length*sale.height*sale.noOfPcs/1000000).toFixed(2);
 }
 else if (sale.dimension == 'mtr' && sale.sellingDimension == 'Sqm'){
  sale['saleArea'] = (sale.length*sale.height*sale.noOfPcs).toFixed(2);
}
if(sale.dimension == 'cm' && sale.sellingDimension == 'Cubic'){
  sale['saleArea'] = (sale.length*sale.height*sale.thickness*sale.noOfPcs/1000000).toFixed(2);
 }
 else if (sale.dimension == 'mm' && sale.sellingDimension == 'Cubic'){
  sale['saleArea'] = (sale.length*sale.height*sale.thickness*sale.noOfPcs/1000000000).toFixed(2);
}
else if (sale.dimension == 'mtr' && sale.sellingDimension == 'Cubic'){
sale['saleArea'] = (sale.length*sale.height*sale.thickness*sale.noOfPcs).toFixed(2);
}
    } 
    
    
    totalAmount=0
    private total
    open(basic) {
       this.total = 0;
       this.refSales.map(sale => this.total = ((this.total ? this.total : 0) + (+(sale.netAmount))));
       this.total = (this.total ? this.total : 0);
       this.total=(this.total).toFixed(2);
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
  
  showModal(basic1: any) { 
   
    this.refSales = this.refSales.filter(sale => Object.keys(sale).length !== 0);
    if(this.refSales.length == 0) { 
      //this.toastr.error("Please fill Medicine Details!");
      this.refSales = []; 
      //this.refSales[0] = new SaleDetail();
      return;
    }
    let total = 0;
    this.refSales.map(sale => total = ((total ? total : 0) + (+(sale.netAmount))));
    this.billDetail.total = (total ? total : 0);
    this.total=(this.billDetail.total).toFixed(2);
    this.billDetail.refSales = this.refSales;
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
  
 
   getBillDetails(billNo)
  {
    this.refSales=[]
    this.billDetail.customerName = '';
    this.billDetail.address = '';
    this.billDetail.customerOrderNo = '';
    this.billDetail.soldBy='',
    this.billDetail.mobileNo = null;
    this.billDetail.emailId = '';   
    this.billDetail.vatNo = '';
    this._http.getDetails(this.billDetail.billNo)
  
    .subscribe(
     
    response => {
     if(response.length == 0) {
       return;
     }
     this.billDetail.customerName = response[0].customerName;
     this.billDetail.address = response[0].address;
     this.billDetail.customerOrderNo = response[0].customerOrderNo;
     this.billDetail.mobileNo = response[0].mobileNo;
     this.billDetail.emailId = response[0].emailId;  
     this.billDetail.soldBy = response[0].soldBy;        
     this.billDetail.vatNo = response[0].vatNo;
   
     response.map(res => { 
        let saleDetail:SaleDetail = new SaleDetail(res.productType,res.itemName,res.itemId,res.refChildSales,
          res.dimension,res.sellingDimension,res.noOfPcs,res.length,res.height,
          res.thickness, res.saleArea,res.currency,
         res.spperArea,res.discount,res.amount,res.vat,res.netAmount);
        this.refSales.push(saleDetail);
        
     });
    });
    
  }
  save(){
    let param = {
     
      "soldBy":this.billDetail.soldBy,
      "customerName":this.billDetail.customerName,
      "address":this.billDetail.address,
      "customerOrderNo":this.billDetail.customerOrderNo,
      "emailId":this.billDetail.emailId,
      "mobileNo":this.billDetail.mobileNo,
      "billNo":this.billDetail.billNo,
      "vatNo":this.billDetail.vatNo,
      "total":this.billDetail.total,
      "refSales":this.refSales
     
    }
    console.log(param)
    this._http.edit(this.billDetail.billNo, param)
      .subscribe(
      data => {
        console.log(this.billDetail.billNo)
        console.log("data**" + JSON.stringify(data));
        window.open(data.fileuri);
        location.reload();
      },
     
    );
   //this.toastr.success("Item Details updated")

    }

reset(){
 this.refSales=[];
 this.billDetail = new BillDetail();
}


  
}
