import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import {InvoicelistService} from 'src/app/invoicelist/invoicelist.service';
@Component({
  selector: 'app-invoicelist',
  templateUrl: './invoicelist.component.html',
  styleUrls: ['./invoicelist.component.css']
})
export class InvoicelistComponent implements OnInit {
  

  constructor(private _http: InvoicelistService,private modalService: NgbModal) { }

  ngOnInit() {
    this.showAll()
  }
  Invoice=[]
 showAll(){
  this._http.getAll()
  .subscribe(
    data =>{
      this.Invoice = data
      console.log(" data " + JSON.stringify(data));
    }
  )
 }
}
