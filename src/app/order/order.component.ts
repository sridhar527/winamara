import { Component, OnInit } from '@angular/core';
import { OrderService } from "src/app/order/order.service";
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { BillDetail, SaleDetail } from './order.model';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  closeResult: string;
  OrderForm:FormGroup;
  sentBy: any;
  deliveryDate:string;
  customerName: any;
  address:any;
  vatNo:any;
  customerOrderNo: any;
  emailId: any;
  mobileNo: any;
 
  
  refOrderDetails:SaleDetail[]=[];
  billDetail: BillDetail;
  constructor(private _http: OrderService,private modalService: NgbModal,private fb:FormBuilder) { 
  
    this.billDetail = new BillDetail();
    this.OrderForm = fb.group({
     'sentBy':[null],
     'deliveryDate':[null],
    })
  }

  ngOnInit() {
    this.showOrder()
  }
  
  Order = []
  showOrder(){
    this._http.getOrder()
   .subscribe(
   response => {
     
 this.Order=response;
 console.log(this.Order[0].nextItemId);

     console.log("invoice" + JSON.stringify(response));
   
   },);
  }
   getBillDetails(billNo)
  {
    this.refOrderDetails=[]
    this.billDetail.customerName = '';
    this.billDetail.address='';
    this.billDetail.vatNo='';
    this.billDetail.customerOrderNo = '';
    this.billDetail.soldBy='',
    this.billDetail.mobileNo = null;
    this.billDetail.emailId = '';   
    this._http.getDetails(this.billDetail.billNo)
  
    .subscribe(
     
    response => {
     if(response.length == 0) {
       return;
     }
     this.billDetail.customerName = response[0].customerName;
     this.billDetail.address = response[0].address;
     this.billDetail.vatNo = response[0].vatNo;
     this.billDetail.customerOrderNo = response[0].customerOrderNo;
     this.billDetail.mobileNo = response[0].mobileNo;
     this.billDetail.emailId = response[0].emailId;  
     this.billDetail.soldBy = response[0].soldBy;        
     
   
     response.map(res => { 
        let saleDetail:SaleDetail = new SaleDetail(res.itemName, res.productType, res.refChildSales,res.refnewchildsales,res.length,res.height,res.thickNess,res.noOfPcs,res.dimension,res.sellingDimension,res.soldAreaSqm,res.soldAreaCubic,res.netAmount);
        this.refOrderDetails.push(saleDetail);
        
     });
    });
    
  }
  


save() {
  let par ={
     "sentBy":this.sentBy,
     "deliveryDate":this.deliveryDate,
     "soldBy":this.billDetail.soldBy,
     "customerName":this.billDetail.customerName,
     "address":this.billDetail.address,
     "vatNo":this.billDetail.vatNo,
     "customerOrderNo":this.billDetail.customerOrderNo,
     "emailId":this.billDetail.emailId,
     "mobileNo":this.billDetail.mobileNo,
     "billNo":this.billDetail.billNo,
     "refOrderDetails":this.refOrderDetails
  }
  this._http.post(par)
    .subscribe(
    data => {        
      console.log("edit****" + JSON.stringify(data));
     
      window.open(data.fileuri);                
         location.reload();  
       
    },        
  );          
}   

reset(){
  this.OrderForm.reset();
  this.refOrderDetails=[]
  this.billDetail = new BillDetail();
  
}
}
