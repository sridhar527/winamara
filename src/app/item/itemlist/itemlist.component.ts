import { Component, OnInit } from '@angular/core';
import { ItemlistService } from "src/app/item/itemlist/itemlist.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css'],

})
export class ItemlistComponent implements OnInit {
 
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
  shippedOn: string;
  colour: string;
  shippedFrom: string;
  totalprice:number;
  sellingPrice:number;
  areaperSqmt:number;
  totalareaCubic:number;
  areaperCubic:number;
  totalpriceCubic:number;
  currency:string;
 // selectedFile:File = null;
 selectedFile:string [] = [];
  constructor(private _http: ItemlistService,private modalService: NgbModal, private toastr: ToastrService,private fb:FormBuilder) {


    this.ItemForm =fb.group({
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
         'currency':[null]
      })


   }
 
  ngOnInit() {
  this.showAll()
  }
  // calc(dimensions){
 
  //   this.totalareaSqMt = this.length*this.height*this.quantity/10000;
  // this.ItemForm.patchValue({"totalareaSqMt":this.totalareaSqMt},{emitEvent:true});
  
    
  //  }
  //  calc1(total){
   
  //  this.totalprice = this.totalareaSqMt*this.price;
  // this.ItemForm.patchValue({"totalprice":this.totalprice},{emitEvent:true});
  
   
  // }
  // calc2(total){
  //   this.areaperSqmt = this.length*this.height/10000;
  //   this.ItemForm.patchValue({"areaperSqmt":this.areaperSqmt},{emitEvent:true});
  // }
  // calc3(total){
  //   this.totalareaCubic = this.length*this.height*this.thickness*this.quantity/1000000;
  //   this.ItemForm.patchValue({"totalareaCubic":this.totalareaCubic},{emitEvent:true});
  // }
  // calc4(total){
  //   this.areaperCubic = this.length*this.height*this.thickness/1000000;
  //   this.ItemForm.patchValue({"areaperCubic":this.areaperCubic},{emitEvent:true});
  // }
  // calc5(total){
   
  //   this.totalpriceCubic = this.totalareaCubic*this.price;
  //  this.ItemForm.patchValue({"totalpriceCubic":this.totalpriceCubic},{emitEvent:true});
   
    
  //  }
  amount(){
    if(this.dimension=='cm'){
      this.areaperSqmt=this.length*this.height/10000;
    }
      else if(this.dimension=='mtr'){
       this.areaperSqmt=this.length*this.height;
      }
      else if(this.dimension=='mm'){
       this.areaperSqmt=this.length*this.height/1000000;
      }
      if(this.dimension=='cm'){
       this.areaperCubic = this.length*this.height*this.thickness/1000000;
     }
       else if(this.dimension=='mtr'){
         this.areaperCubic = this.length*this.height*this.thickness;
       }
       else if(this.dimension=='mm'){
         this.areaperCubic = this.length*this.height*this.thickness/1000000000;
       }
       if(this.dimension=='cm'){
         this.totalareaSqMt = this.length*this.height*this.quantity/10000;
       }
         else if(this.dimension=='mtr'){
           this.totalareaSqMt = this.length*this.height*this.quantity;
         }
         else if(this.dimension=='mm'){
           this.totalareaSqMt = this.length*this.height*this.quantity/1000000;
         }
         if(this.dimension=='cm'){
           this.totalareaCubic = this.length*this.height*this.thickness*this.quantity/1000000;
         }
           else if(this.dimension=='mtr'){
             this.totalareaCubic = this.length*this.height*this.thickness*this.quantity;
           }
           else if(this.dimension=='mm'){
             this.totalareaCubic = this.length*this.height*this.thickness*this.quantity/1000000000;
           }
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
  Item=[]
  showAll(){
    this._http.getAll()
    .subscribe(
      data =>{
        this.Item = data
        console.log(" data " + JSON.stringify(data));
      }
    )
  }

 
  open(basic,data) {
  this.itemId=data.itemId;
  this.quantity=data.quantity;
  this.itemname=data.itemname;
  this.productName=data.productName;
  this.dimension=data.dimension;
  this.length=data.length;
  this.thickness=data.thickness;
  this.height=data.height;
  this.totalareaSqMt=data.totalareaSqMt;
  this.price=data.price;
  this.shippedOn=data.shippedOn;
  this.shippedFrom=data.shippedFrom;
  this.colour=data.colour;
  this.totalprice=data.totalprice;
  this.sellingPrice=data.sellingPrice;
  this.areaperSqmt=data.areaperSqmt;
  this.areaperCubic=data.areaperCubic;
  this.totalareaCubic=data.totalareaCubic;
  this.totalpriceCubic=data.totalpriceCubic;
  this.currency=data.currency;
  this.modalService.open(basic, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
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

   
  save(value: any){
    let param = {
     
      "itemname":this.itemname,
     "productName":this.productName,
     "dimension":this.dimension,
     "length":this.length,
     "thickness":this.thickness,
     "height":this.height,
     "totalareaSqMt":this.totalareaSqMt,
     "price":this.price,
     "shippedOn":this.shippedOn,
     "shippedFrom":this.shippedFrom,
     "colour":this.colour,
     "quantity":this.quantity,
    "totalprice":this.totalprice,
    "sellingPrice":this.sellingPrice,
    "areaperSqmt":this.areaperSqmt,
    "areaperCubic":this.areaperCubic,
    "totalareaCubic":this.totalareaCubic,
    "totalpriceCubic":this.totalpriceCubic,
    "currency":this.currency
    }
    console.log(param)
    this._http.edit(this.itemId, param)
      .subscribe(
      data => {
        console.log(this.itemId)
        console.log("data**" + JSON.stringify(data));
        window.open(data.fileuri);
        location.reload();
      },
      (err) => {
     
        this.toastr.error(err['error']?err['error'].message:'Error Occured!');
console.log(err.error)
      },
    );
   //this.toastr.success("Item Details updated")

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
    
Image=[]
      pdf(basic1,data){
        this.Image=[];
        this._http.getPdf(data.itemId)
        .subscribe(
           
          data =>{
            this.Image=data;
            console.log(" data " + JSON.stringify(data));
          
      },);
      
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
     pdf1(data){
      this._http.pdf(data.itemId)
      .subscribe(
         
        data =>{
          data.itemId=data;
          console.log(data);
          window.open(data.itemid)
    },);
    }
    
    }

