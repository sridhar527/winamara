import { Component, OnInit } from '@angular/core';
import { RefundService } from "src/app/refund/refund.service";

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent implements OnInit {
  Return = []
  constructor(private _http: RefundService) { }

  ngOnInit() {
    this.send()
  }

  send() {


    this._http.getRefund()

      .subscribe(
        response => {



          this.Return = response
          console.log("RefDet" + JSON.stringify(response));


        });
  }
   
  pdf(data){
    this._http.pdf(data.billNo)
    .subscribe(
       
      data =>{
        data.billNo=data;
        console.log(data);
        window.open(data.billno)
  },);
  }
}
