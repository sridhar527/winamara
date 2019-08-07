import { Component, OnInit } from '@angular/core';
import { DlistService } from "src/app/dlist/dlist.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-dlist',
  templateUrl: './dlist.component.html',
  styleUrls: ['./dlist.component.css']
})
export class DlistComponent implements OnInit {

  constructor(private _http: DlistService,private modalService: NgbModal, private toastr: ToastrService,private fb:FormBuilder) { }

  ngOnInit() {
    this.showAll()
  }

  Dlist=[]
  showAll(){
    this._http.getAll()
    .subscribe(
      data =>{
        this.Dlist = data
        console.log(" data " + JSON.stringify(data));
      }
    )
  }
  pdf(data){
    this._http.pdf(data.deliveryNo)
    .subscribe(
       
      data =>{
        data.deliveryNo=data;
        console.log(data);
        window.open(data.orderno)
  },);
  }
}
