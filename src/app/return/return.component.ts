import { Component, OnInit } from '@angular/core';
import { ReturnService } from "src/app/return/return.service";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import {  BillDetail, SaleDetail } from './return.model';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {
  refSalesReturn:SaleDetail[]=[];
  private billDetail: BillDetail = new BillDetail();
  closeResult: string;
 

  constructor(private _http:ReturnService,private modalService: NgbModal,private toastr: ToastrService) {
    
  }
  saveInProgress = false;
      ngOnInit() {
    
      }
      calcAmount(sale) { 
        // if(sale.soldAreaCubic > 0 && sale.spCubic)
        // sale['returnAmount'] = (sale.returnCubic*sale.spCubic).toFixed(2);
        // if(sale.soldAreaSqm > 0  && sale.spSqm)
        // sale['returnAmount'] = (sale.returnSqm*sale.spSqm).toFixed(2);
        // if(sale.quantity > 0 && sale.spPcs)
        // sale['returnAmount'] = (sale.returnPcs*sale.spPcs).toFixed(2);
        if(sale.sellingDimension== 'Sqm' && sale.returnPcs){
        sale['returnSqm'] = (sale.length*sale.height*sale.returnPcs/10000).toFixed(2);
        }
        else if (sale.sellingDimension == 'Cubic' && sale.returnPcs){
          sale['returnCubic'] = (sale.length*sale.height*sale.thickness*sale.returnPcs/1000000).toFixed(2);
       }
       else if (sale.sellingDimension == 'Pcs' && sale.returnPcs){
        sale['returnPcs'] = sale['returnPcs']
     }
       if(sale.returnSqm > 0 && sale.spperArea){
        sale['returnAmount'] = (sale.returnSqm*sale.spperArea).toFixed(2);
      }
      else if(sale.returnCubic > 0 && sale.spperArea){
        sale['returnAmount'] = (sale.returnCubic*sale.spperArea).toFixed(2);
     }
     else if(sale.returnPcs > 0 && sale.spperPcs){
      sale['returnAmount'] = (sale.returnPcs*sale.spperPcs).toFixed(2);
   }
      
     if(sale.discount >= 0)
    sale['returnAmount'] = Math.round((sale['returnAmount']-(sale['returnAmount']*(sale.discount)/100.0))*100)/100;
    if(sale.vat)
    sale['returnAmount'] = (sale['returnAmount'] + sale['returnAmount']*(sale.vat)/100.0).toFixed(2);
    else 
    sale['returnAmount'] = sale['returnAmount'];
      
      }
      // refSalesReturn: any = [];
      totalAmount=0
      private total
      open(basic) {
      
        this.billDetail.total = 0;
        this.refSalesReturn = this.refSalesReturn.filter(sale => Object.keys(sale).length !== 0);
        this.refSalesReturn = this.refSalesReturn.filter(sale => sale.returnPcs > 0);
        if (this.refSalesReturn.length == 0) { //new line added by anji
          this.toastr.error("Atleast one Item to be returned!");//new line added by anji
          return;//new line added by anji
        }
        this.refSalesReturn.map(sale => this.billDetail.total = ((this.billDetail.total ? this.billDetail.total : 0) + (+(sale.returnAmount))));

        // this.refSalesReturn.map(sale =>this.total = this.total + sale.returnAmount);
         this.billDetail.total = (this.billDetail.total ? this.billDetail.total : 0);
         this.billDetail.total=(this.billDetail.total).toFixed(2);
       
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
      onItemSelect(event, sale) {
        var count=event.length
        sale.returnPcs =count;
        this.calcAmount(sale);
       } 
    
      refChildSales= [];
      
      getBillDetails(event)
      {
    
        this.refSalesReturn=[]
        this.billDetail.customerName = '';
        this.billDetail.Date = '';
        this.billDetail.customerOrderno = '';
        this.billDetail.mobileNo = null;
        this.billDetail.vatNo = '';  
        this.billDetail.address = ''; 
        this.billDetail.paymentType='';
        this._http.getDetails(this.billDetail.billNo)
      
        .subscribe(
        response => {
         if(response.length == 0) {
           return;
         }
        this.billDetail.customerName = response[0].customerName;
         this.billDetail.Date = response[0].Date;
         this.billDetail.customerOrderno = response[0].customerOrderno;
         this.billDetail.mobileNo = response[0].mobileNo;
         this.billDetail.vatNo = response[0].vatNo;
         this.billDetail.address = response[0].address;
         this.billDetail.paymentType =response[0].paymentType;
        
         response.map(res => { 
            let saleDetail:SaleDetail = new SaleDetail(res.saleNo,res.productType, res.itemName,res.refreturnChildSales, res.childitemId,res.length,res.height,res.thickness,res.currency,res.sellingDimension,res.spperArea,res.spperPcs, res.quantity,res.returnPcs,res.soldAreaSqm,res.returnSqm,res.soldAreaCubic,res.returnCubic,0,res.vat,res.returnAmount);
           
            this.refSalesReturn.push(saleDetail);
         });
        });
       
      }
      
      
    
      save() {
        this.saveInProgress = true
       this.refSalesReturn= this.refSalesReturn
         let par={
          
          "billNo":this.billDetail.billNo,
          "Date":this.billDetail.Date,
          "customerOrderno":this.billDetail.customerOrderno,
          "customerName":this.billDetail.customerName,
          "mobileNo":this.billDetail.mobileNo,
          "vatNo":this.billDetail.vatNo,
          "address":this.billDetail.address,
          "paymentType":this.billDetail.paymentType,
          "total":this.billDetail.total,
        "refSalesReturn":this.refSalesReturn
        }
        this._http.editBill(par)
          .subscribe(
          data => {        
            console.log("edit****" + JSON.stringify(data));
        if (data.fileuri == null) {
          location.reload()
          this.toastr.success("return data updated")
        }
        else {
          window.open(data.fileuri);
          location.reload();
        }
        this.saveInProgress = false
            // console.log("edit****" + JSON.stringify(data));
            // window.open(data.fileuri);                
            // location.reload();  
          },   
          (err) => {
            this.toastr.error("error")
            this.saveInProgress = false;
          },
          () => {
            this.saveInProgress = false
          }
         
        );          
      }   


      reset(){
        this.refSalesReturn=[]
        this.billDetail = new BillDetail();
  
      }
    }