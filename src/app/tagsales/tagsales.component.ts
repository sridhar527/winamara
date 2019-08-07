import { Component, OnInit } from '@angular/core';
import {TagsalesService } from 'src/app/tagsales/tagsales.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { TagSlab,BillDetail } from "src/app/tagsales/tagsales.model";

@Component({
  selector: 'app-tagsales',
  templateUrl: './tagsales.component.html',
  styleUrls: ['./tagsales.component.css']
})
export class TagsalesComponent implements OnInit {
  billNo: string;
  newSlabNo: string;
  slabNo: string;
  SlabForm: FormGroup;
  private billDetail: BillDetail = new BillDetail();
  updateSlab:TagSlab[]=[]
  constructor(private _http: TagsalesService,private modalService: NgbModal,private fb: FormBuilder,private toastr: ToastrService, private router: Router) { 
    this.SlabForm = fb.group({
      'billNo':[null],
      'slabNo':[null],
      'newSlabNo':[null]
    })
  }
  ngOnInit() {
    
  }
//Slab=[]
getBillDetails(event){
  this.updateSlab = []
  this._http.getSlab(this.billDetail.billNo)

  .subscribe(
    response => {
      if(response.length == 0) {
        return;
      }
      response.map(res => { 
        let tagSlab:TagSlab = new TagSlab(res.slabNo,res.newSlabNo);
       
        this.updateSlab.push(tagSlab);
     });
      
      //this.Slab.push();
      console.log("slab" + JSON.stringify(response));
      

    });
}
save(value:any) {
  let par={
   "billNo":this.billDetail.billNo,
  "updateSlab":this.updateSlab
  }
  this._http.edit(par)
    .subscribe(
    data => {        
      console.log("edit****" + JSON.stringify(data));
     
      location.reload();  
    },        
  );   
  this.toastr.success("Sales Tag created sucessfully ")       
}   
reset(){
  this.SlabForm.reset();
  this.updateSlab=[];
  this.billDetail = new BillDetail();
}


}
