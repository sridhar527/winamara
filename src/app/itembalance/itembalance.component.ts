import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {ItembalanceService} from 'src/app/itembalance/itembalance.service';
@Component({
  selector: 'app-itembalance',
  templateUrl: './itembalance.component.html',
  styleUrls: ['./itembalance.component.css']
})
export class ItembalanceComponent implements OnInit {
  //public loading = false;

  constructor(private _http: ItembalanceService,private modalService: NgbModal, private toastr: ToastrService,private fb:FormBuilder) { }

  ngOnInit() {
    this.showAll()
  }
  
  Item=[]
  showAll(){
    //this.loading = true;
    this._http.getAll()
    .subscribe(
      data =>{
       // this.loading = false
        this.Item = data
        console.log(" data " + JSON.stringify(data));
      }
    )
  }
}
