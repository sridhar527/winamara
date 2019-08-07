import { Component, OnInit } from '@angular/core';
import {SalelistService} from 'src/app/salelist/salelist.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormBuilder } from '@angular/forms';
import { IDetails } from "src/app/salelist/salelist.model";

//import { FormBuilder } from "@angular/forms";
//import { getMaxListeners } from 'cluster';
@Component({
  selector: 'app-salelist',
  templateUrl: './salelist.component.html',
  styleUrls: ['./salelist.component.css']
})
export class SalelistComponent implements OnInit {
  closeResult: string;
  billNo: any;
  SaleForm: FormGroup;
  customerName: any;
  mobileNo: any;
  emailId: any;
  customerOrderNo: any;
  vatNo: any;
  key: string;
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  constructor(private _http: SalelistService,private modalService: NgbModal,private fb:FormBuilder) {
    this.SaleForm = fb.group({
      'billNo' : [null],
      'customerName' : [null],
      'mobileNo' : [null],
      'emailId' : [null],
      'vatNo':[null],
      'customerOrderNo' : [null],
    })
   }
  Edit:IDetails[]=[]
  ngOnInit() {
    this.showAll()
  }
  

  All=[]
  showAll(){
    this._http.getAll()

      .subscribe(
        response => {



          this.All = response
          console.log("All" + JSON.stringify(response));


        });
  }
  New=[]
  showDetails(data)
  {
    this.billNo=data.billNo
    this._http.getAllList(this.billNo)

      .subscribe(
        response => {



          this.New = response
          console.log("All" + JSON.stringify(response));

       
      },
    );
  }
 
  open(content) {
    
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size:'lg'}).result.then((result) => {
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

  
 
  
  
  pdf1(data){
    this._http.pdf(data.billNo)
    .subscribe(
       
      data =>{
        data.billNo=data;
        console.log(data);
        window.open(data.billno)
  },);
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
