import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { RegisterService } from "src/app/registration/register.service";
import { FormBuilder } from "@angular/forms";
import { ItemService } from "src/app/item/item.service";
import { Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr'
import { RouterModule, Routes } from '@angular/router';
import { Router } from "@angular/router";
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from "@angular/forms";
import moment from 'moment/src/moment';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemId:string;
  ItemForm: FormGroup;
  closeResult: string;
  fileuri:string;
  dimension:string;
  length:number;
  thickness:number;
  height:number;
  price:number;
  quantity:number;
  itemname: string;
  productName: string;
  totalareaSqMt: number;
  totalareaCubic:number;
  shippedOn: string;
  colour: string;
  shippedFrom: string;
  totalprice:number;
  sellingPrice:number;
  areaperSqmt:number;
  areaperCubic:number;
  totalpriceCubic:number;
  vendorInvoiceno:string;
  //state: string = "Telangana";
  currency:string ="EURO";
 // selectedFile:File = null;
  selectedFile:string [] = [];
  minDate = new Date();
  constructor(private fb:FormBuilder,private _http:ItemService,private toastr: ToastrService,private router: Router,private modalService: NgbModal) {
   this.ItemForm = fb.group({
     'itemId' : [null],
     'itemname' : [null],
     'productName' : [null],
     'dimension' : [null],
      'length' : [null],
      'thickness' : [null],
      'height' : [null],
      'totalareaSqMt' : [null],
     'colour' : [null],
     'shippedFrom':[null],
     'shippedOn':[null],
     'price':[null],
     'quantity':[null],
     'totalprice':[null],
     'sellingPrice':[null],
     'areaperSqmt':[null],
     'totalareaCubic':[null],
     'areaperCubic':[null],
     'totalpriceCubic':[null],
     'vendorInvoiceno':[null],
     'currency':[null]
   })
  }
     

   
 
          
        ngOnInit() {
         this.showItem()
 }


 onFileSelected(event){
  for (var i = 0; i < event.target.files.length; i++) { 
    this.selectedFile.push(event.target.files[i]);
    //this.selectedFile =<File>event.target.files[i];

  }
}
onUpload(){
  alert('Image uploaded successfully');
  const files = new FormData();
  for (var i = 0; i < this.selectedFile.length; i++) { 
  files.append('files',this.selectedFile[i]);
  
  }
  this._http.post(this.itemId,files)
  .subscribe(data => {
    this.itemId=this.Item[1].nextItemId
    console.log(data)
    console.log(this.itemId)
  }
    )
  }


 amount(){
   if(this.dimension=='cm'){
    this.areaperSqmt =Math.round((this.length*this.height/10000)*100)/100;
   }
     else if(this.dimension=='mtr'){
      this.areaperSqmt=Math.round((this.length*this.height)*100)/100;
     }
     else if(this.dimension=='mm'){
      this.areaperSqmt=Math.round((this.length*this.height/1000000)*100)/100;
     }
     if(this.dimension=='cm'){
      this.areaperCubic = Math.round((this.length*this.height*this.thickness/1000000)*100)/100;
    }
      else if(this.dimension=='mtr'){
        this.areaperCubic = Math.round((this.length*this.height*this.thickness)*100)/100;
      }
      else if(this.dimension=='mm'){
        this.areaperCubic = Math.round((this.length*this.height*this.thickness/1000000000)*100)/100;
      }
      if(this.dimension=='cm'){
        this.totalareaSqMt = Math.round((this.length*this.height*this.quantity/10000)*100)/100;
      }
        else if(this.dimension=='mtr'){
          this.totalareaSqMt = Math.round((this.length*this.height*this.quantity)*100)/100;
        }
        else if(this.dimension=='mm'){
          this.totalareaSqMt = Math.round((this.length*this.height*this.quantity/1000000)*100)/100;
        }
        if(this.dimension=='cm'){
          this.totalareaCubic = Math.round((this.length*this.height*this.thickness*this.quantity/1000000)*100)/100;
        }
          else if(this.dimension=='mtr'){
            this.totalareaCubic =Math.round(( this.length*this.height*this.thickness*this.quantity)*100)/100;
          }
          else if(this.dimension=='mm'){
            this.totalareaCubic = Math.round((this.length*this.height*this.thickness*this.quantity/1000000000)*100)/100;
          }
         this.amount1();
     }
   amount1(){
    if(this.dimension=='cm'){
      this.totalprice = this.totalareaSqMt*this.price;;
    }
      else if(this.dimension=='mtr'){
        this.totalprice = this.totalareaSqMt*this.price;
      }
      else if(this.dimension=='mm'){
        this.totalprice = this.totalareaSqMt*this.price;
      }
      if(this.dimension=='cm'){
        this.totalpriceCubic = this.totalareaCubic*this.price;          
        }
        else if(this.dimension=='mtr'){
          this.totalpriceCubic = this.totalareaCubic*this.price;           
           }
        else if(this.dimension=='mm'){
          this.totalpriceCubic = this.totalareaCubic*this.price;            
          }
   }
 
 save(value: any)
 {

  let par = {
   
     "itemname":this.itemname,
     "productName":this.productName,
     "dimension":this.dimension,
     "length":this.length,
     "thickness":this.thickness,
     "height":this.height,
     "totalareaSqMt":this.totalareaSqMt,
     "price":this.price,
     "shippedOn":this.shippedOn,
    //  moment(this.shippedOn).format('YYYY-MM-DD'),
     "shippedFrom":this.shippedFrom,
     "colour":this.colour,
     "quantity":this.quantity,
    "totalprice":this.totalprice,
    "sellingPrice":this.sellingPrice,
    "areaperSqmt":this.areaperSqmt,
    "areaperCubic":this.areaperCubic,
    "totalpriceCubic":this.totalpriceCubic,
    "totalareaCubic":this.totalareaCubic,
    "vendorInvoiceno":this.vendorInvoiceno,
    "currency":this.currency
   }
   
   this._http.postCreate(par)
   .subscribe(
   data => {
 
  console.log("data**" + JSON.stringify(data));
 
 window.open(data.fileuri);
  
   location.reload();

    },

 );

 this.router.navigate(['/itemlist'])

    
     
    
  }

  

Item=[]
 showItem()
 {
  this._http.getItem()
  .subscribe(
  response => {
  
    
this.Item=response;
this.itemId=this.Item[1].nextItemId
    console.log("item" + JSON.stringify(response));
   console.log(this.Item[1].nextItemId)
  },);
 }
 open(basic,data) {
  
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

 reset(){
   this.ItemForm.reset();
 }
      
    
  }

      