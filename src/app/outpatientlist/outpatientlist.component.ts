import { Component, OnInit } from '@angular/core';
import { OutpatientlistService } from './outpatientlist.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-outpatientlist',
  templateUrl: './outpatientlist.component.html',
  styleUrls: ['./outpatientlist.component.css']
})
export class OutpatientlistComponent implements OnInit {
  closeResult: string;

  constructor(private _http:OutpatientlistService,private modalService: NgbModal) { }

  ngOnInit() {
    this.showOutpatients()
  }
  p:number=1
olist=[]
  showOutpatients() {
   
    this._http.getOutpatient()
      .subscribe(
      data => {
this.olist=data
        console.log(" outpatient list " + JSON.stringify(data));


      },

    );

  }

  
  showReports(basic2) {
 
   
    this.modalService.open(basic2, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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


  showNotes(data)
  {
   
    this._http.getservices(data.regId)
    .subscribe(
    response => {
    
   
      window.open(response.fileuri);
    },);
  }

  Bills=[]
  getBills(data)
  {
   this._http.getAllBills(data.regId)
   .subscribe(
   response => {
   this.Bills=response;

   
   console.log(this.Bills)
console.log(response)
   },);
  }
}
