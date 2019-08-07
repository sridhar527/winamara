

import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { BillService } from "src/app/bill/bill.service";
import { FormControl } from "@angular/forms";
import { Bill } from "src/app/bill/bill.model";
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  BillForm:FormGroup;

  bill:Bill[]=[]
  closeResult: string;
  constructor(private fb:FormBuilder,private _http:BillService,private modalService: NgbModal) { 
    this.bill[0] = new Bill();
this.BillForm=fb.group({
  
  'regId':new FormControl('',),
'amount':[null]

  })
     }
  
    //  items = [0];
    //  count = 0;

    //  item
    //  addRow(i) 
    //  {
      
    //    console.log("Items Add",this.items)
    //    this.count++;
    //    this.items.push(this.count);
   
    //  }

    //  delRow(i) {

    //   this.count--;
    //   this.items.pop();
     
    // }
  
   p:number=1
  Array=[]
  regId:string
dicount:number
item:any=[]
  //  pType=this.Array[0][0].pType
  ngOnInit() {
 
  }
  money = new Map<String, String>();
  showBillDetails(regId) {
  
    this._http.getData(this.regId) 
      .subscribe(
      data => {
 this.Array=data
this.item=data.name

        console.log(" data " + JSON.stringify(data));
   
    console.log(data.length)
  console.log(data[2].name)
    
   
      },

    );

  }

  save() {
    this.bill = this.bill.filter(sale => Object.keys(sale).length !== 0);  
let param ={

"regId":this.regId,

 "refBillDetails":
 
  // this.function(this.BillPay)
  
  this.bill

 
  
}
    
        this._http.billPay(this.regId,param)
          .subscribe(
          data => {
    
            console.log("Bill****" + JSON.stringify(data));
        // alert("ok")
            window.open(data.fileuri);
            
               location.reload();
          },
    
        );
      
      }        




    discharge() {
      
   let param={}
        
            this._http.raiseDischarge(this.regId,param)
              .subscribe(
              data => {
        
                window.open(data.fileuri);
                
                   location.reload();
              },
        
            );
          
          }        
    


         
    Bill=[]  
    hai(i,data)
    {
   
     this.Bill.push({"chargeBillId":data.chargeBillId ,
      "billNo": data.billNo,
      "amount": data.amount,
      "discount": +(data.discount),
      "quantity": data.quantity,
      "netAmount": (data.amount)-((data.amount)*(data.discount/100)),
      "insertedBy": data.insertedBy,
      "insertedDate": data.insertedDate,
      "paid": data.paid,
      "refBillDetails":data.refBillDetails,
      "regId": data.regId,
      "serviceName": data.serviceName})
      console.log(this.Bill)
      console.log(JSON.stringify(this.Bill))
    }

    BillPay=[]
    
    serivcecharge :object ={};
name:string
amount:number
chargeName:string
    // send(data,i)
    // {
    //   this.name=data.name
    //   this._http.getMed(data.name)
    //   .subscribe(
    //   response => {
    
    //     this.money.set(i,response.cost);
    //    console.log(" test" + JSON.stringify(response));
    //    console.log(this.money)
  
    //   },);
    
    // }
    setDetails(data) { 
  
      this._http.getMed(data.chargeName)
      .subscribe(
      response => {
    
        data.cost = response.cost;
       console.log(" test" + JSON.stringify(response));
     console.log(data.cost)

      },);
   
    }


    open(basic) {

      this.modalService.open(basic, { ariaLabelledBy: 'modal-basic-title',size:'lg' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    
    new(basic1) {

      this.modalService.open(basic1, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
        return `with: ${reason}`;
      }
  
  
    }
    // Pay(i)
    // {
    
    //   this.BillPay.push( {
    //  "amount":this.money.get(i),
    //   "chargeName":this.name,
    //   "quantity":+(this.Array[i].quantity),
    //   "dicount":+(this.Array[i].discount), 
    //   })

    //  console.log(this.BillPay)
    // }


    // function(BillPay)
    // {
     
    //   for(var i=0;i<BillPay.length;i++)
    //     {
    //       let paid=((this.BillPay[i].amount)*(this.BillPay[i].quantity))
    //       var b={
    //         "netAmount":+(paid)-((paid)*(this.BillPay[i].dicount)/100),
    //         "amount":+(paid),
    //         "chargeName":this.BillPay[i].chargeName,
    //         "quantity":this.BillPay[i].quantity,
    //         "discount":+(this.BillPay[i].dicount), 
    //       }
    //     }
    //     return b
    // }


    addMore(event) { 
 
      this.bill.push( new Bill());      
    }

    removeSaleItem(index) { 
       
      this.bill.splice(index, 1);        
    }

    calcAmount(data) { 
      data['amount'] = data.quantity*data.cost;
      if(data.discount && data.discount > 0)
      data['netAmount']= data['amount']-(data['amount']*(data.discount)/100.0);
    }

}

